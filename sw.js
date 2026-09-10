// ============================================================================
// Service Worker - Fluxogramas Médicos (PWA com Suporte Offline Completo)
// ============================================================================

const CACHE_NAME = 'fluxomed-cache-v1';

// Recursos essenciais pré-armazenados no momento da instalação
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './imagens/icon-192.png',
  './imagens/icon-512.png',
  './imagens/icon-192.svg',
  './imagens/icon-512.svg'
];

// Instalação do Service Worker & Pré-cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pré-carregando recursos fundamentais do app shell');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Ativação e limpeza de caches legados
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[Service Worker] Removendo cache antigo:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptação de requisições: Estratégia Stale-While-Revalidate
// 1. Entrega imediatamente do cache (velocidade máxima e suporte offline).
// 2. Busca na rede em segundo plano para atualizar o cache automaticamente.
self.addEventListener('fetch', (event) => {
  // Apenas intercepta requisições GET
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Não interceptar requisições externas para outros domínios como Google Fonts
  // a menos que seja para servir offline se já estiver em cache
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Se a resposta da rede for válida, grava no cache
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Em caso de falha de rede (ex.: offline), se não houver resposta em cache e for navegação HTML:
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });

      // Retorna a resposta em cache se existir; senão aguarda a rede
      return cachedResponse || fetchPromise;
    })
  );
});

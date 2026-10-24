// ============================================================================
// Service Worker - Fluxogramas Médicos (PWA com Suporte Offline Completo)
// ============================================================================

const CACHE_NAME = 'fluxomed-cache-v29';

// Recursos essenciais do App Shell pré-armazenados no momento da instalação
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './css/main.css',
  './js/modules-data.js',
  './js/search.js',
  './js/app.js',
  './manifest.webmanifest',
  './imagens/icon-192.png',
  './imagens/icon-512.png',
  './imagens/icon-192.svg',
  './imagens/icon-512.svg'
];

// Instalação do Service Worker & Pré-cache atômico do App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pré-carregando App Shell completo (v21)');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Ativação e limpeza imediata de caches legados (v1..v20)
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

// Interceptação de requisições: Estratégia Stale-While-Revalidate segura
// 1. Entrega imediatamente do cache para velocidade instantânea e uso offline em plantões.
// 2. Atualiza em segundo plano quando há conectividade, gravando módulos HTML e infográficos PNG/SVG visitados.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && (url.origin === self.location.origin || networkResponse.type === 'cors')) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return cachedResponse || Response.error();
      });

      return cachedResponse || fetchPromise;
    })
  );
});

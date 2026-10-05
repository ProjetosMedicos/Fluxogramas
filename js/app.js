// =================================================================
// FLUXOMED - APLICAÇÃO PRINCIPAL (APP SHELL & LAZY LOADER)
// =================================================================

// Gestão de Especialidades Médicas (Ginecologia & Pediatria)
let currentSpecialty = 'ginecologia';
let activeGinecologiaMod = 'dsf';
let activePediatriaMod = 'ped-reanima';

const loadedModules = new Set(['dsf']);
const moduleHtmlCache = new Map();

// Carregamento Sob Demanda de Módulos Clínicos (Lazy Loader)
async function loadModule(moduleId) {
  if (loadedModules.has(moduleId)) {
    showLoadedModule(moduleId);
    return;
  }

  let html = moduleHtmlCache.get(moduleId);
  if (!html) {
    const isPed = moduleId.startsWith('ped-') || (typeof MODULE_META !== 'undefined' && MODULE_META[moduleId] && MODULE_META[moduleId].specialty === 'pediatria');
    const folder = isPed ? 'content/pediatria' : 'content/ginecologia';
    try {
      const resp = await fetch(`${folder}/${moduleId}.html`);
      if (resp.ok) {
        html = await resp.text();
        moduleHtmlCache.set(moduleId, html);
      } else {
        console.error(`Falha ao carregar conteúdo do módulo ${moduleId}: HTTP ${resp.status}`);
      }
    } catch (err) {
      console.error(`Erro de conexão ao carregar módulo ${moduleId}:`, err);
    }
  }

  if (html) {
    const container = document.getElementById('content-container');
    if (container) {
      let wrapper = document.getElementById(`module-content-${moduleId}`);
      if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.id = `module-content-${moduleId}`;
        wrapper.className = 'module-content-wrapper';
        wrapper.innerHTML = html;
        container.appendChild(wrapper);
      }
      loadedModules.add(moduleId);
      showLoadedModule(moduleId);
    }
  }
}

function showLoadedModule(moduleId) {
  document.querySelectorAll('.module-content-wrapper').forEach(w => {
    w.style.display = (w.id === `module-content-${moduleId}`) ? 'block' : 'none';
  });
}

function switchSpecialty(spec, openModal = false) {
  if (spec === 'pediatria') {
    currentSpecialty = 'pediatria';
    document.getElementById('spec-tab-pediatria')?.classList.add('active');
    document.getElementById('spec-tab-pediatria')?.setAttribute('aria-selected', 'true');
    document.getElementById('spec-tab-ginecologia')?.classList.remove('active');
    document.getElementById('spec-tab-ginecologia')?.setAttribute('aria-selected', 'false');

    const crumbSpec = document.getElementById('crumb-specialty');
    if (crumbSpec) crumbSpec.textContent = 'Pediatria';

    const sourceName = document.getElementById('footer-source-name');
    if (sourceName) sourceName.textContent = 'Tratado de Pediatria SBP (6ª Edição, 2024)';

    const statsCaption = document.getElementById('sidebar-stats-caption');
    if (statsCaption) statsCaption.textContent = 'Pediatria • 48 Módulos • 48 Fluxos';

    const pickerGineco = document.getElementById('picker-group-ginecologia');
    const pickerPed = document.getElementById('picker-group-pediatria');
    if (pickerGineco) pickerGineco.style.display = 'none';
    if (pickerPed) pickerPed.style.display = 'block';

    const optGineco = document.getElementById('optgroup-ginecologia');
    const optPed = document.getElementById('optgroup-pediatria');
    if (optGineco) optGineco.disabled = true;
    if (optPed) optPed.disabled = false;

    const modal = document.getElementById('pediatria-preview-modal');
    if (modal) modal.style.display = 'none';

    const dropdown = document.getElementById('module-picker-dropdown');
    const box = document.getElementById('active-module-banner');
    if (dropdown) dropdown.classList.remove('open');
    if (box) box.classList.remove('open');

    switchModule(activePediatriaMod);
  } else {
    currentSpecialty = 'ginecologia';
    document.getElementById('spec-tab-ginecologia')?.classList.add('active');
    document.getElementById('spec-tab-ginecologia')?.setAttribute('aria-selected', 'true');
    document.getElementById('spec-tab-pediatria')?.classList.remove('active');
    document.getElementById('spec-tab-pediatria')?.setAttribute('aria-selected', 'false');

    const crumbSpec = document.getElementById('crumb-specialty');
    if (crumbSpec) crumbSpec.textContent = 'Ginecologia';

    const sourceName = document.getElementById('footer-source-name');
    if (sourceName) sourceName.textContent = 'Tratado de Ginecologia FEBRASGO (2ª Edição)';

    const statsCaption = document.getElementById('sidebar-stats-caption');
    if (statsCaption) statsCaption.textContent = 'Ginecologia • 38 Módulos • 38 Fluxos';

    const pickerGineco = document.getElementById('picker-group-ginecologia');
    const pickerPed = document.getElementById('picker-group-pediatria');
    if (pickerGineco) pickerGineco.style.display = 'block';
    if (pickerPed) pickerPed.style.display = 'none';

    const optGineco = document.getElementById('optgroup-ginecologia');
    const optPed = document.getElementById('optgroup-pediatria');
    if (optGineco) optGineco.disabled = false;
    if (optPed) optPed.disabled = true;

    const dropdown = document.getElementById('module-picker-dropdown');
    const box = document.getElementById('active-module-banner');
    if (dropdown) dropdown.classList.remove('open');
    if (box) box.classList.remove('open');

    switchModule(activeGinecologiaMod);
  }
  try {
    localStorage.setItem('fluxomed_active_specialty', spec);
  } catch(e) {}

  if (openModal && typeof openSearchModal === 'function') {
    openSearchModal(spec);
  }
}

function closePediatriaModal() {
  const modal = document.getElementById('pediatria-preview-modal');
  if (modal) modal.style.display = 'none';
}

function toggleModuleDropdown() {
  const dropdown = document.getElementById('module-picker-dropdown');
  const box = document.getElementById('active-module-banner');
  if (!dropdown || !box) return;
  dropdown.classList.toggle('open');
  box.classList.toggle('open');
}

function selectModule(moduleId) {
  switchModule(moduleId);
  const dropdown = document.getElementById('module-picker-dropdown');
  const box = document.getElementById('active-module-banner');
  if (dropdown) dropdown.classList.remove('open');
  if (box) box.classList.remove('open');
}

document.addEventListener('click', (e) => {
  const container = document.querySelector('.module-picker-container');
  if (container && !container.contains(e.target)) {
    const dropdown = document.getElementById('module-picker-dropdown');
    const box = document.getElementById('active-module-banner');
    if (dropdown) dropdown.classList.remove('open');
    if (box) box.classList.remove('open');
  }
});

async function switchModule(moduleId) {
  if (moduleId.startsWith('ped-')) {
    activePediatriaMod = moduleId;
    if (currentSpecialty !== 'pediatria') {
      currentSpecialty = 'pediatria';
      document.getElementById('spec-tab-pediatria')?.classList.add('active');
      document.getElementById('spec-tab-pediatria')?.setAttribute('aria-selected', 'true');
      document.getElementById('spec-tab-ginecologia')?.classList.remove('active');
      document.getElementById('spec-tab-ginecologia')?.setAttribute('aria-selected', 'false');
      const crumbSpec = document.getElementById('crumb-specialty');
      if (crumbSpec) crumbSpec.textContent = 'Pediatria';
      const sourceName = document.getElementById('footer-source-name');
      if (sourceName) sourceName.textContent = 'Tratado de Pediatria SBP (6ª Edição, 2024)';
      const pickerGineco = document.getElementById('picker-group-ginecologia');
      const pickerPed = document.getElementById('picker-group-pediatria');
      if (pickerGineco) pickerGineco.style.display = 'none';
      if (pickerPed) pickerPed.style.display = 'block';
    }
  } else {
    activeGinecologiaMod = moduleId;
    if (currentSpecialty !== 'ginecologia') {
      currentSpecialty = 'ginecologia';
      document.getElementById('spec-tab-ginecologia')?.classList.add('active');
      document.getElementById('spec-tab-ginecologia')?.setAttribute('aria-selected', 'true');
      document.getElementById('spec-tab-pediatria')?.classList.remove('active');
      document.getElementById('spec-tab-pediatria')?.setAttribute('aria-selected', 'false');
      const crumbSpec = document.getElementById('crumb-specialty');
      if (crumbSpec) crumbSpec.textContent = 'Ginecologia';
      const sourceName = document.getElementById('footer-source-name');
      if (sourceName) sourceName.textContent = 'Tratado de Ginecologia FEBRASGO (2ª Edição)';
      const pickerGineco = document.getElementById('picker-group-ginecologia');
      const pickerPed = document.getElementById('picker-group-pediatria');
      if (pickerGineco) pickerGineco.style.display = 'block';
      if (pickerPed) pickerPed.style.display = 'none';
    }
  }
  
  if (typeof moduleIds !== 'undefined') {
    moduleIds.forEach(id => {
      const btn = document.getElementById('btn-mod-' + id);
      if (btn) btn.className = 'module-tab-btn';
      const nav = document.getElementById('nav-group-' + id);
      if (nav) nav.style.display = 'none';
    });
  }

  const activeBtn = document.getElementById('btn-mod-' + moduleId);
  if (activeBtn) {
    activeBtn.className = 'module-tab-btn active-' + moduleId;
  }
  const activeNav = document.getElementById('nav-group-' + moduleId);
  if (activeNav) {
    activeNav.style.display = 'block';
  }

  const modSelect = document.getElementById('moduleSelect');
  if (modSelect && modSelect.value !== moduleId) {
    modSelect.value = moduleId;
  }

  document.querySelectorAll('.module-picker-item').forEach(el => {
    if (el.dataset.mod === moduleId) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const meta = typeof MODULE_META !== 'undefined' ? MODULE_META[moduleId] : null;
  if (meta) {
    const iconEl = document.getElementById('active-module-icon');
    const titleEl = document.getElementById('active-module-title');
    const subEl = document.getElementById('active-module-sub');
    if (iconEl) iconEl.textContent = meta.icon;
    if (titleEl) titleEl.textContent = meta.name;
    if (subEl) subEl.textContent = meta.sub;
    const footerRef = document.getElementById('footer-chapter-ref');
    if (footerRef && meta.ref) {
      footerRef.textContent = meta.ref;
    }
  }

  // Carrega o conteúdo assíncrono do módulo
  await loadModule(moduleId);

  renderToc(moduleId);

  if (meta && meta.firstSection) {
    await switchSection(meta.firstSection);
  }
}

function isMobileMode() {
  return window.innerWidth <= 900 || (window.matchMedia && window.matchMedia('(max-width: 900px)').matches);
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  const menuBtn = document.getElementById('topbar-hamburger-btn');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('mobile-menu-open');
}

function toggleSidebar() {
  const isMobile = isMobileMode();
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  const menuBtn = document.getElementById('topbar-hamburger-btn');

  if (isMobile) {
    if (!sidebar) return;
    const isOpen = sidebar.classList.contains('open');
    if (isOpen) {
      closeMobileSidebar();
    } else {
      sidebar.classList.add('open');
      if (overlay) overlay.classList.add('active');
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('mobile-menu-open');
    }
  } else {
    document.body.classList.toggle('sidebar-collapsed');
    const collapsed = document.body.classList.contains('sidebar-collapsed');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', (!collapsed).toString());
    }
    try {
      localStorage.setItem('sidebarCollapsed', collapsed.toString());
    } catch(e) {}
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeButtons(isDark);
}

function updateThemeButtons(isDark) {
  const sunSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;margin:auto;"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`;
  const moonSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;margin:auto;"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;
  const themeToggle = document.getElementById('topbar-theme-toggle');
  if (themeToggle) {
    themeToggle.innerHTML = isDark ? sunSvg : moonSvg;
    themeToggle.setAttribute('title', isDark ? 'Alternar para Modo Claro' : 'Alternar para Modo Noturno');
    themeToggle.setAttribute('aria-label', isDark ? 'Alternar para Modo Claro' : 'Alternar para Modo Noturno');
  }
}

async function switchSection(sectionId) {
  let target = document.getElementById(sectionId);
  if (!target) {
    let targetMod = null;
    if (typeof ORDERED_SECTIONS !== 'undefined') {
      const allSecs = [...ORDERED_SECTIONS.ginecologia, ...ORDERED_SECTIONS.pediatria];
      const found = allSecs.find(s => s.sectionId === sectionId);
      if (found && found.moduleId) targetMod = found.moduleId;
    }
    if (!targetMod && typeof MODULE_META !== 'undefined') {
      for (const [mId, meta] of Object.entries(MODULE_META)) {
        if (meta.firstSection === sectionId) {
          targetMod = mId;
          break;
        }
      }
    }
    if (targetMod) {
      await loadModule(targetMod);
      target = document.getElementById(sectionId);
    }
  }

  const updateDOM = () => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.classList.remove('active'));

    if (target) {
      target.classList.add('active');
      const parentWrapper = target.closest('.module-content-wrapper');
      if (parentWrapper) {
        parentWrapper.style.display = 'block';
      }
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.className = 'nav-link';
    });

    const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      const prefix = sectionId.split('-')[0];
      if (prefix) activeLink.classList.add(`${prefix}-active`);

      const text = activeLink.querySelector('span:last-child')?.textContent || 'Tópico';
      const currentCrumb = document.getElementById('current-crumb');
      if (currentCrumb) currentCrumb.textContent = text;
    }

    renderToc(sectionId);
    updateSectionPager(sectionId);
  };

  updateDOM();

  if (isMobileMode()) {
    closeMobileSidebar();
  }

  window.scrollTo(0, 0);
}

function zoomFlowchart(target, delta) {
  let card, img;
  if (typeof target === 'string') {
    const el = document.getElementById(target);
    card = el ? (el.closest('.card') || el) : null;
    img = el ? (el.tagName === 'IMG' ? el : el.querySelector('.flowchart-img, img')) : null;
  } else if (target && target.closest) {
    card = target.closest('.card');
    img = card ? card.querySelector('.flowchart-img, img') : null;
  }
  if (!img) return;
  let currentScale = parseFloat(img.dataset.scale || 1.0);
  const step = delta > 0.5 ? (delta - 1) : delta;
  currentScale = Math.min(Math.max(currentScale + step, 0.6), 2.5);
  img.dataset.scale = currentScale;
  img.style.transform = `scale(${currentScale})`;
}

function resetZoom(target) {
  let card, img;
  if (typeof target === 'string') {
    const el = document.getElementById(target);
    card = el ? (el.closest('.card') || el) : null;
    img = el ? (el.tagName === 'IMG' ? el : el.querySelector('.flowchart-img, img')) : null;
  } else if (target && target.closest) {
    card = target.closest('.card');
    img = card ? card.querySelector('.flowchart-img, img') : null;
  }
  if (!img) return;
  img.dataset.scale = 1.0;
  img.style.transform = 'scale(1.0)';
}

function resetFlowchartZoom(target) {
  resetZoom(target);
}

function toggleCaseFeedback(btn) {
  const card = btn.closest('.card, .clinical-card, .case-box') || btn.parentElement;
  if (!card) return;
  const feedback = card.querySelector('.case-solution, .case-feedback, [id$="-feedback"], [id$="-solucao"]');
  if (feedback) {
    const isHidden = feedback.style.display === 'none' || !feedback.style.display;
    feedback.style.display = isHidden ? 'block' : 'none';
    btn.textContent = isHidden ? 'Ocultar Resposta Comentada' : 'Ver Resolução & Conduta';
  }
}

function installPWA() {
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then(() => {
      window.deferredPrompt = null;
    });
  }
}

let tocObserver = null;

function renderToc(target) {
  const tocList = document.getElementById('toc-list');
  const tocSidebar = document.getElementById('toc-sidebar');
  if (!tocList || !tocSidebar) return;

  let activeSection = null;
  if (typeof target === 'string') {
    activeSection = document.getElementById(target);
  }
  if (!activeSection || !activeSection.classList.contains('content-section')) {
    activeSection = document.querySelector('.content-section.active');
  }
  if (!activeSection) return;

  const headings = Array.from(activeSection.querySelectorAll('h2, h3'));
  tocList.innerHTML = '';

  if (headings.length >= 2) {
    const titleEl = tocSidebar.querySelector('.toc-title span');
    if (titleEl) titleEl.textContent = 'NESTA PÁGINA';

    headings.forEach((heading, idx) => {
      if (!heading.id) {
        const textSlug = heading.textContent.toLowerCase()
          .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = `${activeSection.id}-heading-${idx}-${textSlug}`.substring(0, 50);
      }

      const li = document.createElement('li');
      li.className = `toc-item toc-${heading.tagName.toLowerCase()}`;
      if (idx === 0) li.classList.add('active');

      const a = document.createElement('a');
      a.href = `#${heading.id}`;
      a.textContent = heading.textContent.trim();
      a.title = heading.textContent.trim();
      a.onclick = (e) => {
        e.preventDefault();
        scrollToHeading(heading.id);
      };

      li.appendChild(a);
      tocList.appendChild(li);
    });

    setupTocScrollspy(headings);
  } else {
    const titleEl = tocSidebar.querySelector('.toc-title span');
    if (titleEl) titleEl.textContent = 'TÓPICOS DO MÓDULO';

    const activeLink = document.querySelector(`a[href="#${activeSection.id}"]`);
    const navGroup = activeLink ? activeLink.closest('.nav-list') : document.querySelector('.nav-list[style*="block"]');
    
    if (navGroup) {
      const siblingLinks = navGroup.querySelectorAll('.nav-link');
      siblingLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        const targetId = href.replace('#', '');
        const li = document.createElement('li');
        li.className = 'toc-item';
        if (targetId === activeSection.id) li.classList.add('active');

        const a = document.createElement('a');
        a.href = href;
        const textSpan = link.querySelector('span:last-child') || link;
        a.textContent = textSpan.textContent.trim();
        a.onclick = (e) => {
          e.preventDefault();
          switchSection(targetId);
        };

        li.appendChild(a);
        tocList.appendChild(li);
      });
    }
  }
}

function setupTocScrollspy(headings) {
  if (tocObserver) {
    tocObserver.disconnect();
  }

  const headingElements = headings.filter(h => h && h.id);
  if (headingElements.length === 0) return;

  tocObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateTocActive(entry.target.id);
      }
    });
  }, {
    rootMargin: '-76px 0px -60% 0px',
    threshold: 0
  });

  headingElements.forEach(el => tocObserver.observe(el));
}

function scrollToHeading(headingId) {
  const target = document.getElementById(headingId);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  updateTocActive(headingId);
  try {
    history.replaceState(null, '', `#${headingId}`);
  } catch(e) {}
}

function switchTocSection(index) {
  const items = document.querySelectorAll('#toc-list .toc-item a');
  if (items[index]) {
    items[index].click();
  }
}

function updateTocActive(headingId) {
  const tocItems = document.querySelectorAll('#toc-list .toc-item');
  tocItems.forEach(item => {
    const a = item.querySelector('a');
    if (a && a.getAttribute('href') === `#${headingId}`) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function updateSectionPager(sectionId) {
  const secEl = document.getElementById(sectionId);
  if (!secEl) return;

  let pagerEl = document.getElementById('docs-pager');
  if (!pagerEl) {
    pagerEl = document.createElement('nav');
    pagerEl.id = 'docs-pager';
    pagerEl.className = 'docs-pager';
    pagerEl.setAttribute('aria-label', 'Navegação entre tópicos');
  }

  if (typeof ORDERED_SECTIONS === 'undefined') return;

  const list = currentSpecialty === 'pediatria' ? ORDERED_SECTIONS.pediatria : ORDERED_SECTIONS.ginecologia;
  let idx = list.findIndex(item => item.sectionId === sectionId);
  let activeList = list;

  if (idx === -1) {
    const otherList = currentSpecialty === 'pediatria' ? ORDERED_SECTIONS.ginecologia : ORDERED_SECTIONS.pediatria;
    const otherIdx = otherList.findIndex(item => item.sectionId === sectionId);
    if (otherIdx !== -1) {
      idx = otherIdx;
      activeList = otherList;
    }
  }

  if (idx === -1) {
    if (pagerEl.parentElement) pagerEl.remove();
    return;
  }

  const prevItem = idx > 0 ? activeList[idx - 1] : null;
  const nextItem = idx < activeList.length - 1 ? activeList[idx + 1] : null;

  let html = '';

  if (prevItem) {
    html += `
      <a href="#${prevItem.sectionId}" class="docs-pager-link pager-prev" onclick="navigateToPager('${prevItem.moduleId}', '${prevItem.sectionId}', '${prevItem.specialty}'); return false;" title="Ir para o tópico anterior: ${escapeSearchHtml(prevItem.title)}">
        <span class="docs-pager-label">← Anterior</span>
        <span class="docs-pager-title">${escapeSearchHtml(prevItem.title)}</span>
        <span class="docs-pager-module">${escapeSearchHtml(prevItem.moduleName || '')}</span>
      </a>
    `;
  } else {
    html += `<div style="flex: 1; max-width: calc(50% - 8px);"></div>`;
  }

  if (nextItem) {
    html += `
      <a href="#${nextItem.sectionId}" class="docs-pager-link pager-next" onclick="navigateToPager('${nextItem.moduleId}', '${nextItem.sectionId}', '${nextItem.specialty}'); return false;" title="Ir para o próximo tópico: ${escapeSearchHtml(nextItem.title)}">
        <span class="docs-pager-label">Próximo →</span>
        <span class="docs-pager-title">${escapeSearchHtml(nextItem.title)}</span>
        <span class="docs-pager-module">${escapeSearchHtml(nextItem.moduleName || '')}</span>
      </a>
    `;
  }

  pagerEl.innerHTML = html;
  secEl.appendChild(pagerEl);
}

async function navigateToPager(moduleId, sectionId, specialty) {
  if (specialty && specialty !== currentSpecialty && typeof switchSpecialty === 'function') {
    switchSpecialty(specialty);
  }
  const curMod = currentSpecialty === 'pediatria' ? activePediatriaMod : activeGinecologiaMod;
  if (curMod !== moduleId && typeof switchModule === 'function') {
    await switchModule(moduleId);
  }
  if (typeof switchSection === 'function') {
    await switchSection(sectionId);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Atalhos de Teclado Globais
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('command-search-modal');
  const isModalOpen = modal && modal.style.display !== 'none';

  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (isModalOpen) {
      closeSearchModal();
    } else {
      openSearchModal();
    }
    return;
  }

  if (isModalOpen) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeSearchModal();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentResults.length > 0) {
        activeResultIndex = (activeResultIndex + 1) % currentResults.length;
        updateModalSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentResults.length > 0) {
        activeResultIndex = (activeResultIndex - 1 + currentResults.length) % currentResults.length;
        updateModalSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeResultIndex >= 0 && activeResultIndex < currentResults.length) {
        selectSearchResult(activeResultIndex);
      }
    }
    return;
  }

  if (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    const prevLink = document.querySelector('.docs-pager-link.pager-prev');
    const nextLink = document.querySelector('.docs-pager-link.pager-next');
    if (e.key === 'ArrowLeft' && prevLink) {
      e.preventDefault();
      prevLink.click();
    } else if (e.key === 'ArrowRight' && nextLink) {
      e.preventDefault();
      nextLink.click();
    }
  }
});

// Inicialização Geral da Aplicação
window.addEventListener('DOMContentLoaded', async () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
  updateThemeButtons(isDark);

  const initialMod = currentSpecialty === 'pediatria' ? activePediatriaMod : activeGinecologiaMod;
  await switchModule(initialMod);

  const modalInput = document.getElementById('modal-search-input');
  if (modalInput) {
    modalInput.addEventListener('input', (e) => {
      executeModalSearch(e.target.value);
    });
  }

  const searchModal = document.getElementById('command-search-modal');
  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) {
        closeSearchModal();
      }
    });
  }

  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.addEventListener('click', (e) => {
      if (isMobileMode()) {
        if (e.target.closest('.nav-item a') || e.target.closest('.module-picker-item')) {
          closeMobileSidebar();
        }
      }
    }, { passive: true });
  }
});

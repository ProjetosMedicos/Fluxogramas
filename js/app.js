// =================================================================
// FLUXOMED - APLICAÇÃO PRINCIPAL (APP SHELL & LAZY LOADER)
// =================================================================

// Gestão de Especialidades Médicas (Ginecologia & Pediatria)
let currentSpecialty = 'ginecologia';
let activeGinecologiaMod = 'dsf';
let activePediatriaMod = 'ped-reanima';
let currentModule = 'dsf';

const loadedModules = new Set();
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
        wrapper.querySelectorAll('script').forEach(oldScript => {
          const newScript = document.createElement('script');
          Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
          newScript.appendChild(document.createTextNode(oldScript.innerHTML));
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });
        container.appendChild(wrapper);
        if (typeof enhanceModuleInteractivity === 'function') {
          enhanceModuleInteractivity(wrapper);
        }
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
  exitHomeView();
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
  currentModule = moduleId;
  
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
  } else if (document.body.classList.contains('home-active')) {
    const isOpen = document.body.classList.toggle('home-sidebar-open');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', isOpen.toString());
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

  const themeMetas = document.querySelectorAll('meta[name="theme-color"]');
  themeMetas.forEach(meta => {
    meta.setAttribute('content', isDark ? '#121316' : '#ffffff');
  });
}

async function switchSection(sectionId) {
  exitHomeView();
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

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typeof document.startViewTransition === 'function' && !prefersReduced) {
    document.startViewTransition(() => updateDOM());
  } else {
    updateDOM();
  }

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

function toggleWideMode(btn) {
  const card = btn.closest('.card') || btn.closest('.content-section');
  if (!card) return;
  const container = card.querySelector('.flowchart-img-container');
  if (!container) return;
  const isWide = container.classList.toggle('wide-mode');
  btn.textContent = isWide ? '⇥ Reduzir' : '↔ Expandir';
  btn.classList.toggle('active', isWide);
}

function switchVisualMode(btn, mode) {
  if (typeof btn === 'string') {
    const modId = btn;
    const modeType = mode === 'flowchart' ? 'svg' : mode;
    const card = document.getElementById(`card-visual-${modId}`) || document.querySelector(`.card[data-module="${modId}"]`) || document.querySelector(`section[id^="${modId}"] .card`);
    if (card) {
      const targetBtn = card.querySelector(`.btn-toggle[data-mode="${modeType}"], .btn-toggle[data-view="${modeType}"], .view-btn[data-mode="${modeType}"], .flowchart-view-toggle button[onclick*="'${modeType}'"]`);
      if (targetBtn) {
        return switchVisualMode(targetBtn, modeType);
      }
    }
    return;
  }
  const card = btn.closest('.card') || (btn.closest('.flowchart-view-toggle') && btn.closest('.flowchart-view-toggle').nextElementSibling);
  if (!card) return;
  const toggle = card.querySelector('.flowchart-view-toggle, .segmented-control') || btn.closest('.flowchart-view-toggle, .segmented-control');
  if (toggle) {
    toggle.querySelectorAll('button, .view-btn, .btn-toggle').forEach(b => {
      b.classList.remove('active');
      if (b.classList.contains('btn-toggle')) {
        b.style.background = 'transparent';
        b.style.color = '#475569';
      }
    });
    btn.classList.add('active');
    if (btn.classList.contains('btn-toggle')) {
      btn.style.background = '#0284c7';
      btn.style.color = '#fff';
    }
  }
  const img = card.querySelector('.flowchart-img, img');
  const fullLink = card.querySelector('.flowchart-actions .btn-image-open:not([download])');
  const dlLink = card.querySelector('.flowchart-actions a[download]');
  if (img) {
    img.dataset.scale = '1.0';
    img.style.transform = 'scale(1.0)';
    
    const infoSrc = img.dataset.infographicSrc || img.getAttribute('data-infographic-src') || 'imagens/infografico-ped-bronquiolite.png';
    const svgSrc = img.dataset.svgSrc || img.getAttribute('data-svg-src') || 'imagens/fluxo-ped-bronquiolite.svg';
    const infoAlt = img.dataset.infographicAlt || img.alt;
    const svgAlt = img.dataset.svgAlt || 'Fluxograma Vetorial';

    const isInfographic = (mode === 'infographic');
    if (isInfographic) {
      img.src = infoSrc;
      img.alt = infoAlt;
      img.classList.add('infographic-mode');
      if (fullLink) fullLink.href = infoSrc;
      if (dlLink) {
        dlLink.href = infoSrc;
        dlLink.style.display = 'inline-flex';
      }
    } else {
      img.src = svgSrc;
      img.alt = svgAlt;
      img.classList.remove('infographic-mode');
      if (fullLink) fullLink.href = svgSrc;
      if (dlLink) dlLink.style.display = 'none';
    }
  }
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
      a.classList.add('active');
    } else {
      item.classList.remove('active');
      if (a) a.classList.remove('active');
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

  if (e.altKey && e.key.toLowerCase() === 'h') {
    e.preventDefault();
    goHome();
    return;
  }

  const activeTag = document.activeElement ? document.activeElement.tagName : '';
  const isTypingField = activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT' || (document.activeElement && document.activeElement.isContentEditable);
  const lbDialog = document.getElementById('visual-lightbox');
  const isLbOpen = lbDialog && lbDialog.open;

  if (!isTypingField && !isLbOpen && !e.ctrlKey && !e.metaKey && !e.altKey && e.key === '/') {
    e.preventDefault();
    if (document.body.classList.contains('home-active')) {
      const homeInput = document.getElementById('home-search-input');
      if (homeInput) {
        homeInput.focus();
        homeInput.select();
      }
    } else {
      openSearchModal();
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

  initHomePage();

  const hash = window.location.hash.replace('#', '');
  if (hash && hash !== 'inicio' && hash !== 'home') {
    let targetMod = null;
    if (typeof ORDERED_SECTIONS !== 'undefined') {
      const allSecs = [...ORDERED_SECTIONS.ginecologia, ...ORDERED_SECTIONS.pediatria];
      const found = allSecs.find(s => s.sectionId === hash);
      if (found && found.moduleId) targetMod = found.moduleId;
    }
    if (!targetMod && typeof MODULE_META !== 'undefined' && MODULE_META[hash]) {
      targetMod = hash;
    }
    if (targetMod) {
      await switchModule(targetMod);
      if (MODULE_META && MODULE_META[hash]) {
        await switchSection(MODULE_META[hash].firstSection);
      } else {
        await switchSection(hash);
      }
    } else {
      const initialMod = hash.startsWith('ped-') ? 'ped-bronquiolite' : activeGinecologiaMod;
      await switchModule(initialMod);
      await switchSection(hash);
    }
  } else {
    showHomePage(false);
  }

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

// SPA History & Navegação pelo Histórico do Navegador (Avançar/Voltar)
async function handleHashNavigation() {
  const hash = window.location.hash.replace('#', '');
  if (!hash || hash === 'inicio' || hash === 'home') {
    showHomePage(false);
    return;
  }
  const headingEl = document.getElementById(hash);
  if (headingEl && (headingEl.tagName === 'H2' || headingEl.tagName === 'H3')) {
    scrollToHeading(hash);
    return;
  }
  let targetMod = null;
  if (typeof ORDERED_SECTIONS !== 'undefined') {
    const allSecs = [...ORDERED_SECTIONS.ginecologia, ...ORDERED_SECTIONS.pediatria];
    const found = allSecs.find(s => s.sectionId === hash);
    if (found && found.moduleId) targetMod = found.moduleId;
  }
  if (!targetMod && typeof MODULE_META !== 'undefined') {
    if (MODULE_META[hash]) {
      targetMod = hash;
    } else {
      for (const [mId, meta] of Object.entries(MODULE_META)) {
        if (meta.firstSection === hash) {
          targetMod = mId;
          break;
        }
      }
    }
  }
  const curActiveMod = typeof currentModule !== 'undefined' ? currentModule : (currentSpecialty === 'pediatria' ? activePediatriaMod : activeGinecologiaMod);
  if (targetMod && (targetMod !== curActiveMod || document.body.classList.contains('home-active'))) {
    await switchModule(targetMod);
  }
  const finalSec = (typeof MODULE_META !== 'undefined' && MODULE_META[hash]) ? MODULE_META[hash].firstSection : hash;
  await switchSection(finalSec);
}

window.addEventListener('hashchange', () => {
  handleHashNavigation();
});

// ============================================================================
// MOTOR DE LIGHTBOX NATIVO (<dialog id="visual-lightbox">) COM PAN & ZOOM
// ============================================================================
let lightboxState = {
  scale: 1.0,
  infoSrc: '',
  infoAlt: '',
  svgSrc: '',
  svgAlt: '',
  currentMode: 'infographic',
  isDragging: false,
  startX: 0,
  startY: 0,
  scrollLeft: 0,
  scrollTop: 0
};

function openVisualLightbox(triggerEl) {
  const dialog = document.getElementById('visual-lightbox');
  const img = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const dlLink = document.getElementById('lightbox-download');
  const newTabLink = document.getElementById('lightbox-newtab');
  const btnInfo = document.getElementById('lightbox-btn-info');
  const btnSvg = document.getElementById('lightbox-btn-svg');
  const modeGroup = document.getElementById('lightbox-mode-group');

  if (!dialog || !img) return;

  const card = triggerEl ? triggerEl.closest('.card') : null;
  const cardImg = card ? card.querySelector('.flowchart-img, img') : (triggerEl && triggerEl.tagName === 'IMG' ? triggerEl : null);
  const cardTitle = card ? card.querySelector('.card-title, h2, h3') : null;

  const currentSrc = cardImg ? cardImg.getAttribute('src') : (triggerEl ? triggerEl.getAttribute('href') : '');
  const infoSrc = (cardImg && (cardImg.dataset.infographicSrc || cardImg.getAttribute('data-infographic-src'))) || (currentSrc.includes('infografico-') ? currentSrc : '');
  const svgSrc = (cardImg && (cardImg.dataset.svgSrc || cardImg.getAttribute('data-svg-src'))) || (currentSrc.endsWith('.svg') ? currentSrc : '');
  const infoAlt = (cardImg && (cardImg.dataset.infographicAlt || cardImg.getAttribute('data-infographic-alt') || cardImg.alt)) || 'Infográfico Clínico HD';
  const svgAlt = (cardImg && (cardImg.dataset.svgAlt || cardImg.getAttribute('data-svg-alt'))) || 'Fluxograma Vetorial Clássico';

  lightboxState.infoSrc = infoSrc || currentSrc;
  lightboxState.svgSrc = svgSrc || currentSrc;
  lightboxState.infoAlt = infoAlt;
  lightboxState.svgAlt = svgAlt;
  lightboxState.currentMode = (currentSrc && currentSrc.endsWith('.svg') && infoSrc !== currentSrc) ? 'svg' : 'infographic';
  lightboxState.scale = 1.0;

  if (titleEl) {
    titleEl.textContent = cardTitle ? cardTitle.textContent.trim() : infoAlt;
  }

  if (modeGroup) {
    modeGroup.style.display = (infoSrc && svgSrc && infoSrc !== svgSrc) ? 'inline-flex' : 'none';
  }

  applyLightboxMedia();

  if (typeof dialog.showModal === 'function' && !dialog.open) {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }
}

function applyLightboxMedia() {
  const img = document.getElementById('lightbox-img');
  const dlLink = document.getElementById('lightbox-download');
  const newTabLink = document.getElementById('lightbox-newtab');
  const btnInfo = document.getElementById('lightbox-btn-info');
  const btnSvg = document.getElementById('lightbox-btn-svg');
  const zoomLabel = document.getElementById('lightbox-zoom-label');

  if (!img) return;
  const isInfo = lightboxState.currentMode === 'infographic';
  const activeSrc = isInfo ? lightboxState.infoSrc : lightboxState.svgSrc;
  const activeAlt = isInfo ? lightboxState.infoAlt : lightboxState.svgAlt;

  img.src = activeSrc;
  img.alt = activeAlt;
  img.style.transform = `scale(${lightboxState.scale})`;

  if (zoomLabel) zoomLabel.textContent = `${Math.round(lightboxState.scale * 100)}%`;
  if (btnInfo) btnInfo.classList.toggle('active', isInfo);
  if (btnSvg) btnSvg.classList.toggle('active', !isInfo);

  if (dlLink) {
    dlLink.href = activeSrc;
    dlLink.download = activeSrc.split('/').pop() || 'infografico-fluxomed.png';
  }
  if (newTabLink) {
    newTabLink.href = activeSrc;
  }
}

function switchLightboxMode(mode) {
  lightboxState.currentMode = mode;
  lightboxState.scale = 1.0;
  applyLightboxMedia();
}

function zoomLightbox(delta) {
  const next = Math.min(3.5, Math.max(0.5, +(lightboxState.scale + delta).toFixed(2)));
  lightboxState.scale = next;
  const img = document.getElementById('lightbox-img');
  const zoomLabel = document.getElementById('lightbox-zoom-label');
  if (img) img.style.transform = `scale(${next})`;
  if (zoomLabel) zoomLabel.textContent = `${Math.round(next * 100)}%`;
}

function resetLightboxZoom() {
  lightboxState.scale = 1.0;
  const img = document.getElementById('lightbox-img');
  const zoomLabel = document.getElementById('lightbox-zoom-label');
  const viewport = document.getElementById('lightbox-viewport');
  if (img) img.style.transform = 'scale(1)';
  if (zoomLabel) zoomLabel.textContent = '100%';
  if (viewport) {
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  }
}

function closeVisualLightbox() {
  const dialog = document.getElementById('visual-lightbox');
  if (!dialog) return;
  if (typeof dialog.close === 'function' && dialog.open) {
    dialog.close();
  } else {
    dialog.removeAttribute('open');
  }
}

// Aliases de retrocompatibilidade para chamadas legadas
function switchVisualView(modId, viewType) {
  switchVisualMode(modId, viewType === 'flowchart' ? 'svg' : viewType);
}
function zoomVisual(modId, delta) {
  const card = document.getElementById(`card-visual-${modId}`) || document.querySelector(`section[id^="${modId}"] .card`);
  const btn = card ? card.querySelector('.btn-zoom') : null;
  if (btn) zoomFlowchart(btn, delta);
}
function resetVisualZoom(modId) {
  const card = document.getElementById(`card-visual-${modId}`) || document.querySelector(`section[id^="${modId}"] .card`);
  const btn = card ? card.querySelector('.btn-zoom') : null;
  if (btn) resetZoom(btn);
}
function toggleExpandVisual(modId) {
  const btn = document.getElementById(`${modId}-expand-btn`);
  if (btn) toggleWideMode(btn);
}
function openFullscreenVisual(modId) {
  const card = document.getElementById(`card-visual-${modId}`) || document.querySelector(`section[id^="${modId}"] .card`);
  const img = card ? card.querySelector('img') : null;
  if (img) openVisualLightbox(img);
}

// ============================================================================
// PRODUTIVIDADE CLÍNICA: COPIAR PRESCRIÇÃO / CONDUTA EM 1 CLIQUE + TOAST
// ============================================================================
let toastTimeout = null;
function showClinicalToast(message) {
  const toast = document.getElementById('clinical-toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function enhanceModuleInteractivity(rootEl) {
  if (!rootEl) return;

  // 1. Tornar todas as imagens de fluxograma/infográfico e links de Tela Cheia compatíveis com o Lightbox
  rootEl.querySelectorAll('.flowchart-img').forEach(img => {
    img.style.cursor = 'zoom-in';
    if (!img.getAttribute('onclick')) {
      img.addEventListener('click', () => openVisualLightbox(img));
    }
  });

  rootEl.querySelectorAll('.flowchart-actions .btn-image-open:not([download])').forEach(link => {
    if (!link.getAttribute('onclick')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openVisualLightbox(link);
      });
    }
  });

  // 2. Adicionar botão "📋 Copiar Conduta" nos cards de seções de Prescrição, Posologia, Manutenção e Conduta
  const prescCards = rootEl.querySelectorAll(
    'section[id*="prescricao"] .card, section[id*="tratamento"] .card, section[id*="manejo"] .card, ' +
    'section[id*="manutencao"] .card, section[id*="conduta"] .card, section[id*="posologia"] .card, section[id*="terapia"] .card'
  );
  prescCards.forEach(card => {
    if (card.querySelector('.btn-copy-clinical') || card.querySelector('.flowchart-img')) return;
    const titleEl = card.querySelector('.card-title, h2, h3');
    if (!titleEl) return;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn-copy-clinical';
    btn.innerHTML = '📋 Copiar Conduta';
    btn.title = 'Copiar texto desta conduta/prescrição para a área de transferência';
    btn.addEventListener('click', async () => {
      const clone = card.cloneNode(true);
      clone.querySelectorAll('button, .btn-copy-clinical').forEach(b => b.remove());
      const cleanText = clone.innerText.replace(/\n{3,}/g, '\n\n').trim();
      try {
        await navigator.clipboard.writeText(cleanText);
        btn.classList.add('copied');
        btn.innerHTML = '✓ Copiado!';
        showClinicalToast('📋 Conduta/Prescrição copiada para a área de transferência!');
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = '📋 Copiar Conduta';
        }, 2000);
      } catch (err) {
        showClinicalToast('Não foi possível copiar automaticamente.');
      }
    });

    const headerFlex = card.querySelector('.card-header-flex');
    if (headerFlex) {
      headerFlex.appendChild(btn);
    } else {
      titleEl.style.display = 'flex';
      titleEl.style.alignItems = 'center';
      titleEl.style.justifyContent = 'space-between';
      titleEl.style.gap = '10px';
      titleEl.style.flexWrap = 'wrap';
      titleEl.appendChild(btn);
    }
  });
}

// ============================================================================
// EVENTOS GLOBAIS DO LIGHTBOX E BARRA DE PROGRESSO DE LEITURA
// ============================================================================
window.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('visual-lightbox');
  const viewport = document.getElementById('lightbox-viewport');

  if (dialog) {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        closeVisualLightbox();
      }
    });
  }

  if (viewport) {
    viewport.addEventListener('wheel', (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        zoomLightbox(e.deltaY < 0 ? 0.2 : -0.2);
      }
    }, { passive: false });

    viewport.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      lightboxState.isDragging = true;
      viewport.classList.add('dragging');
      lightboxState.startX = e.pageX - viewport.offsetLeft;
      lightboxState.startY = e.pageY - viewport.offsetTop;
      lightboxState.scrollLeft = viewport.scrollLeft;
      lightboxState.scrollTop = viewport.scrollTop;
    });

    window.addEventListener('mouseup', () => {
      if (lightboxState.isDragging) {
        lightboxState.isDragging = false;
        viewport.classList.remove('dragging');
      }
    });

    viewport.addEventListener('mousemove', (e) => {
      if (!lightboxState.isDragging) return;
      e.preventDefault();
      const x = e.pageX - viewport.offsetLeft;
      const y = e.pageY - viewport.offsetTop;
      viewport.scrollLeft = lightboxState.scrollLeft - (x - lightboxState.startX) * 1.4;
      viewport.scrollTop = lightboxState.scrollTop - (y - lightboxState.startY) * 1.4;
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!dialog || !dialog.open) return;
    if (e.key === '+' || e.key === '=') {
      e.preventDefault();
      zoomLightbox(0.25);
    } else if (e.key === '-') {
      e.preventDefault();
      zoomLightbox(-0.25);
    } else if (e.key === '0') {
      e.preventDefault();
      resetLightboxZoom();
    }
  });
});

window.addEventListener('scroll', () => {
  const bar = document.getElementById('reading-progress-bar');
  if (!bar) return;
  if (document.body.classList.contains('home-active')) {
    bar.style.width = '0%';
    return;
  }
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
  bar.style.width = `${pct}%`;
}, { passive: true });

// ============================================================================
// PÁGINA INICIAL MINIMALISTA (DIRETÓRIO DE TÓPICOS & PESQUISA INSTANTÂNEA)
// ============================================================================
const HOME_TOPIC_GROUPS = {
  ginecologia: [
    {
      axis: 'Endocrinologia Ginecológica, Reprodução & Climatério',
      ids: ['amenor', 'sop', 'prolactina', 'iop', 'infertil', 'pgr', 'spm', 'clim', 'trhav']
    },
    {
      axis: 'Sangramento Uterino, Patologia Benigna & Dor Pélvica',
      ids: ['sua', 'mioma', 'adeno', 'polipos', 'endo', 'dor']
    },
    {
      axis: 'Contracepção, Sexualidade & Urgências Ginecológicas',
      ids: ['contracepcao', 'larcs', 'dsf', 'abdome', 'violencia', 'cirurgia']
    },
    {
      axis: 'Infecções Genitais & Uroginecologia',
      ids: ['infeccoes', 'dipav', 'vulva', 'incont', 'prolapso', 'urocomplexa']
    },
    {
      axis: 'Mastologia & Ginecologia Oncológica',
      ids: ['mamabenigna', 'mama', 'colo', 'endometrio', 'ovario', 'cancervulva']
    },
    {
      axis: 'Consulta, Propedêutica & Fundamentos',
      ids: ['examefisico', 'saudeintegral', 'fisiologia', 'infancia', 'metodologia']
    }
  ],
  pediatria: [
    {
      axis: 'Neonatologia & Perinatologia',
      ids: ['ped-reanima', 'ped-cuidneonat', 'ped-distresp-rn', 'ped-ictericia-sepse', 'ped-disturb-rn', 'ped-infecc-cong', 'ped-sifilis-cong']
    },
    {
      axis: 'Puericultura, Nutrologia & Adolescência',
      ids: ['ped-crescimento', 'ped-dnpm', 'ped-aleitamento', 'ped-nutricao', 'ped-desnutricao', 'ped-vitaminas', 'ped-obesidade', 'ped-puberdade', 'ped-hebiatria', 'ped-seguranca']
    },
    {
      axis: 'Pneumologia, Alergia & Imunologia',
      ids: ['ped-asma', 'ped-bronquiolite', 'ped-pneumonia', 'ped-coqueluche-fc', 'ped-fibrose-cistica', 'ped-anafilaxia', 'ped-alergia-alim']
    },
    {
      axis: 'Emergências, Neurologia & Terapia Intensiva',
      ids: ['ped-emerg-pcr', 'ped-choque', 'ped-brue-smsl', 'ped-convulsao', 'ped-cefaleias']
    },
    {
      axis: 'Infectologia & Imunizações',
      ids: ['ped-imunizacoes', 'ped-febre-sem-foco', 'ped-exantematicas', 'ped-tuberculose']
    },
    {
      axis: 'Gastroenterologia & Nefrologia',
      ids: ['ped-drge', 'ped-diarreia', 'ped-constipacao', 'ped-celiaca', 'ped-itu-enurese', 'ped-enurese']
    },
    {
      axis: 'Cardiologia, Endocrinologia, Reumatologia & Genética',
      ids: ['ped-cardiopatias', 'ped-hipertensao', 'ped-hipotireoidismo', 'ped-hiperplasia-adrenal', 'ped-reumato-vasc', 'ped-henoch-schonlein', 'ped-reumato-aij', 'ped-aij', 'ped-genetica']
    }
  ]
};

let homeSpecialtyFilter = 'all';
let homeLiveItems = [];
let homeLiveIndex = -1;

function exitHomeView() {
  if (!document.body.classList.contains('home-active')) return;
  document.body.classList.remove('home-active', 'home-sidebar-open');
  const homeEl = document.getElementById('home-view');
  if (homeEl) homeEl.classList.remove('active');

  const homeBtn = document.getElementById('sidebar-home-btn');
  if (homeBtn) homeBtn.classList.remove('active');

  const crumbSpec = document.getElementById('crumb-specialty');
  if (crumbSpec) crumbSpec.textContent = currentSpecialty === 'pediatria' ? 'Pediatria' : 'Ginecologia';
  const sepCur = document.getElementById('crumb-sep-cur');
  const curCrumb = document.getElementById('current-crumb');
  if (sepCur) sepCur.style.display = '';
  if (curCrumb) curCrumb.style.display = '';

  const menuBtn = document.getElementById('topbar-hamburger-btn');
  if (menuBtn && !isMobileMode()) {
    const collapsed = document.body.classList.contains('sidebar-collapsed');
    menuBtn.setAttribute('aria-expanded', (!collapsed).toString());
  }
}

function showHomePage(updateUrl = false) {
  const applyHomeDOM = () => {
    document.body.classList.add('home-active');
    document.body.classList.remove('home-sidebar-open');

    const homeEl = document.getElementById('home-view');
    if (homeEl) homeEl.classList.add('active');

    document.querySelectorAll('.content-section.active').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.module-content-wrapper').forEach(w => { w.style.display = 'none'; });
    document.querySelectorAll('.nav-link.active').forEach(l => { l.className = 'nav-link'; });

    const homeBtn = document.getElementById('sidebar-home-btn');
    if (homeBtn) homeBtn.classList.add('active');

    const crumbSpec = document.getElementById('crumb-specialty');
    if (crumbSpec) crumbSpec.textContent = 'Página Inicial';
    const sepCur = document.getElementById('crumb-sep-cur');
    const curCrumb = document.getElementById('current-crumb');
    if (sepCur) sepCur.style.display = 'none';
    if (curCrumb) curCrumb.style.display = 'none';

    const menuBtn = document.getElementById('topbar-hamburger-btn');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');

    const bar = document.getElementById('reading-progress-bar');
    if (bar) bar.style.width = '0%';

    renderHomeTopics();
  };

  if (updateUrl) {
    try {
      if (window.location.hash && window.location.hash !== '#inicio') {
        history.pushState(null, '', window.location.pathname + window.location.search);
      }
    } catch (e) {}
  }

  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (updateUrl && typeof document.startViewTransition === 'function' && !prefersReduced) {
    document.startViewTransition(() => applyHomeDOM());
  } else {
    applyHomeDOM();
  }

  if (isMobileMode()) {
    closeMobileSidebar();
  }
  window.scrollTo(0, 0);
}

function goHome(event) {
  if (event) event.preventDefault();
  if (typeof closeSearchModal === 'function') closeSearchModal();
  showHomePage(true);
}

async function openModuleFromHome(moduleId, event) {
  if (event) event.preventDefault();
  const meta = (typeof MODULE_META !== 'undefined') ? MODULE_META[moduleId] : null;
  if (meta && meta.firstSection) {
    try {
      history.pushState(null, '', `#${meta.firstSection}`);
    } catch (e) {}
  }
  await switchModule(moduleId);
}

function setHomeSpecialtyFilter(spec) {
  homeSpecialtyFilter = spec;
  document.querySelectorAll('.home-spec-tab').forEach(btn => {
    const isMatch = btn.dataset.spec === spec;
    btn.classList.toggle('active', isMatch);
    btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
  });
  const homeInput = document.getElementById('home-search-input');
  const q = homeInput ? homeInput.value : '';
  renderHomeTopics(q);
  if (q.trim()) {
    renderHomeLiveResults(q);
  }
}

function renderHomeTopics(rawQuery = '') {
  const container = document.getElementById('home-topics-directory');
  const countBadge = document.getElementById('home-topics-count');
  if (!container || typeof MODULE_META === 'undefined') return;

  const normFn = typeof normalizeSearchText === 'function'
    ? normalizeSearchText
    : (t) => (t || '').toLowerCase().trim();

  const query = normFn(rawQuery);
  const terms = query ? query.split(/\s+/).filter(Boolean) : [];
  const secMeta = (typeof SECTION_SEARCH_META !== 'undefined') ? SECTION_SEARCH_META : {};

  const specsToRender = homeSpecialtyFilter === 'all'
    ? ['ginecologia', 'pediatria']
    : [homeSpecialtyFilter];

  let totalMatched = 0;
  let html = '';

  specsToRender.forEach(spec => {
    const groups = HOME_TOPIC_GROUPS[spec] || [];
    let specHtml = '';
    let specCount = 0;

    groups.forEach(group => {
      let cardsHtml = '';
      group.ids.forEach(mId => {
        const meta = MODULE_META[mId];
        if (!meta) return;

        if (terms.length > 0) {
          const firstSecKw = (secMeta[meta.firstSection] && secMeta[meta.firstSection].kw) || '';
          const haystack = normFn(`${meta.name} ${meta.sub || ''} ${meta.ref || ''} ${mId} ${group.axis} ${firstSecKw}`);
          const ok = terms.every(t => haystack.includes(t));
          if (!ok) return;
        }

        totalMatched++;
        specCount++;
        const safeName = typeof escapeSearchHtml === 'function' ? escapeSearchHtml(meta.name) : meta.name;
        const cleanSub = (meta.sub || '').replace(/^Capítulos?\s+[\d,\s\-e&]+\s*(?:Tratado\s*FEBRASGO|FEBRASGO)?\s*•\s*/i, '');
        const safeSub = typeof escapeSearchHtml === 'function' ? escapeSearchHtml(cleanSub || meta.sub || '') : (cleanSub || '');

        cardsHtml += `
          <a href="#${meta.firstSection}" class="home-topic-card" onclick="openModuleFromHome('${mId}', event)">
            <div class="home-topic-info">
              <div class="home-topic-name">${safeName}</div>
              <div class="home-topic-sub">${safeSub}</div>
            </div>
            <span class="home-topic-arrow" aria-hidden="true">→</span>
          </a>
        `;
      });

      if (cardsHtml) {
        specHtml += `
          <div class="home-axis-group">
            <h4 class="home-axis-title">${group.axis}</h4>
            <div class="home-topic-grid">${cardsHtml}</div>
          </div>
        `;
      }
    });

    if (specHtml) {
      const specTitle = spec === 'ginecologia' ? 'Ginecologia & Obstetrícia' : 'Pediatria';
      const specRef = spec === 'ginecologia' ? `FEBRASGO · ${specCount} módulos` : `SBP 2024 · ${specCount} módulos`;
      const dotClass = spec === 'ginecologia' ? 'gin' : 'ped';

      html += `
        <div class="home-spec-block">
          <div class="home-spec-header">
            <h3 class="home-spec-title"><span class="home-spec-dot ${dotClass}" aria-hidden="true"></span>${specTitle}</h3>
            <span class="home-spec-source">${specRef}</span>
          </div>
          ${specHtml}
        </div>
      `;
    }
  });

  if (!html) {
    html = `
      <div class="home-empty-topics">
        Nenhum módulo principal corresponde diretamente ao filtro. Confira os resultados detalhados acima ou pressione <kbd>Ctrl</kbd> + <kbd>K</kbd> para busca completa.
      </div>
    `;
  }

  container.innerHTML = html;
  if (countBadge) {
    countBadge.textContent = `${totalMatched} ${totalMatched === 1 ? 'módulo' : 'módulos'}`;
  }
}

function renderHomeLiveResults(rawQuery) {
  const box = document.getElementById('home-live-results');
  const clearBtn = document.getElementById('home-search-clear');
  if (!box) return;

  const trimmed = (rawQuery || '').trim();
  if (clearBtn) {
    clearBtn.hidden = trimmed.length === 0;
  }

  if (trimmed.length < 2 || typeof buildSearchIndex !== 'function') {
    box.hidden = true;
    box.innerHTML = '';
    homeLiveItems = [];
    homeLiveIndex = -1;
    return;
  }

  buildSearchIndex();
  const query = normalizeSearchText(trimmed);
  const terms = query.split(/\s+/).filter(Boolean);
  const scored = [];

  SEARCH_INDEX.forEach(item => {
    if (homeSpecialtyFilter !== 'all' && item.specialty !== homeSpecialtyFilter) return;
    if (!terms.every(t => item.searchString.includes(t))) return;

    const titleNorm = normalizeSearchText(item.title);
    const subNorm = normalizeSearchText(item.subtitle);
    let score = 0;
    if (titleNorm === query) score += 150;
    else if (titleNorm.startsWith(query)) score += 80;
    else if (titleNorm.includes(query)) score += 45;
    if (subNorm.includes(query)) score += 20;

    terms.forEach(t => {
      if (titleNorm.includes(t)) score += 18;
      else if (subNorm.includes(t)) score += 8;
      else score += 5;
    });

    if (item.type === 'module') score += 12;
    else if (item.isFlowchart) score += 6;
    else if (item.isPrescription) score += 5;

    const snippet = typeof extractClinicalSnippet === 'function' ? extractClinicalSnippet(item, terms) : '';
    scored.push({ item: Object.assign({}, item, { _snippet: snippet }), score });
  });

  scored.sort((a, b) => b.score - a.score);
  const totalHits = scored.length;
  homeLiveItems = scored.slice(0, 6).map(s => s.item);
  homeLiveIndex = homeLiveItems.length > 0 ? 0 : -1;

  if (homeLiveItems.length === 0) {
    box.innerHTML = `
      <div class="home-live-footer">
        <span>Nenhum termo clínico exato para "${escapeSearchHtml(trimmed)}".</span>
        <button type="button" class="home-live-more-btn" onclick="openSearchModal()">Busca Avançada (Ctrl+K) →</button>
      </div>
    `;
    box.hidden = false;
    return;
  }

  let itemsHtml = '';
  homeLiveItems.forEach((it, idx) => {
    const activeCls = idx === 0 ? ' active' : '';
    const snippetHtml = it._snippet
      ? `<div class="home-live-snippet">↳ ${escapeSearchHtml(it._snippet)}</div>`
      : '';
    itemsHtml += `
      <a href="#${it.sectionId}" class="home-live-item${activeCls}" data-idx="${idx}" onclick="selectHomeLiveResult(${idx}, event)">
        <div class="home-live-main">
          <div class="home-live-title">${escapeSearchHtml(it.title)}</div>
          <div class="home-live-sub">${escapeSearchHtml(it.subtitle)}</div>
          ${snippetHtml}
        </div>
        <span class="home-live-badge">${escapeSearchHtml(it.badge)}</span>
      </a>
    `;
  });

  itemsHtml += `
    <div class="home-live-footer">
      <span>${totalHits} resultado(s) nas 684 seções · <kbd>↑</kbd><kbd>↓</kbd> e <kbd>Enter</kbd></span>
      <button type="button" class="home-live-more-btn" onclick="openFullSearchWithHomeQuery()">Ver todos os resultados →</button>
    </div>
  `;

  box.innerHTML = itemsHtml;
  box.hidden = false;
}

function openFullSearchWithHomeQuery() {
  const homeInput = document.getElementById('home-search-input');
  const q = homeInput ? homeInput.value.trim() : '';
  openSearchModal(homeSpecialtyFilter === 'all' ? 'all' : homeSpecialtyFilter);
  if (q) {
    const modalInput = document.getElementById('modal-search-input');
    if (modalInput) {
      modalInput.value = q;
      executeModalSearch(q);
    }
  }
}

async function selectHomeLiveResult(index, event) {
  if (event) event.preventDefault();
  if (index < 0 || index >= homeLiveItems.length) return;
  const target = homeLiveItems[index];
  if (!target) return;

  if (target.sectionId) {
    try {
      history.pushState(null, '', `#${target.sectionId}`);
    } catch (e) {}
  }

  if (target.specialty && target.specialty !== currentSpecialty && typeof switchSpecialty === 'function') {
    switchSpecialty(target.specialty);
  }
  if (target.moduleId) {
    const curMod = currentSpecialty === 'pediatria' ? activePediatriaMod : activeGinecologiaMod;
    if (curMod !== target.moduleId || document.body.classList.contains('home-active')) {
      await switchModule(target.moduleId);
    }
  }
  if (target.sectionId) {
    await switchSection(target.sectionId);
  }
}

function updateHomeLiveSelection() {
  document.querySelectorAll('#home-live-results .home-live-item').forEach((el, idx) => {
    el.classList.toggle('active', idx === homeLiveIndex);
  });
}

function applyHomeSuggestion(term) {
  const input = document.getElementById('home-search-input');
  if (!input) return;
  input.value = term;
  input.focus();
  renderHomeLiveResults(term);
  renderHomeTopics(term);
}

function clearHomeSearch() {
  const input = document.getElementById('home-search-input');
  const box = document.getElementById('home-live-results');
  const clearBtn = document.getElementById('home-search-clear');
  if (input) {
    input.value = '';
    input.focus();
  }
  if (clearBtn) clearBtn.hidden = true;
  if (box) {
    box.hidden = true;
    box.innerHTML = '';
  }
  homeLiveItems = [];
  homeLiveIndex = -1;
  renderHomeTopics('');
}

function initHomePage() {
  renderHomeTopics('');
  const homeInput = document.getElementById('home-search-input');
  if (homeInput) {
    homeInput.addEventListener('input', (e) => {
      const val = e.target.value;
      renderHomeLiveResults(val);
      renderHomeTopics(val);
    });

    homeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (homeInput.value) {
          e.preventDefault();
          clearHomeSearch();
        } else {
          homeInput.blur();
        }
        return;
      }
      if (homeLiveItems.length > 0) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          homeLiveIndex = (homeLiveIndex + 1) % homeLiveItems.length;
          updateHomeLiveSelection();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          homeLiveIndex = (homeLiveIndex - 1 + homeLiveItems.length) % homeLiveItems.length;
          updateHomeLiveSelection();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const idx = homeLiveIndex >= 0 ? homeLiveIndex : 0;
          selectHomeLiveResult(idx);
        }
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (document.body.classList.contains('home-active') && document.body.classList.contains('home-sidebar-open')) {
      const sb = document.getElementById('sidebar');
      const hb = document.getElementById('topbar-hamburger-btn');
      if (sb && !sb.contains(e.target) && (!hb || !hb.contains(e.target))) {
        document.body.classList.remove('home-sidebar-open');
        if (hb) hb.setAttribute('aria-expanded', 'false');
      }
    }
  });
}




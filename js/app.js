// =================================================================
// FLUXOMED - APLICAÇÃO PRINCIPAL (APP SHELL & LAZY LOADER)
// =================================================================

// Gestão de Especialidades Médicas (Ginecologia, Pediatria & Exame Físico)
let currentSpecialty = 'ginecologia';
let activeGinecologiaMod = 'dsf';
let activePediatriaMod = 'ped-reanima';
let activeExameFisicoMod = 'ef-geral';
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
    const meta = typeof MODULE_META !== 'undefined' ? MODULE_META[moduleId] : null;
    const isEf = moduleId.startsWith('ef-') || (meta && meta.specialty === 'exame-fisico');
    const isPed = moduleId.startsWith('ped-') || (meta && meta.specialty === 'pediatria');
    const folder = isEf ? 'content/exame-fisico' : (isPed ? 'content/pediatria' : 'content/ginecologia');
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

function applySpecialtyUI(spec) {
  currentSpecialty = spec;
  const tabGin = document.getElementById('spec-tab-ginecologia');
  const tabPed = document.getElementById('spec-tab-pediatria');
  const tabEf = document.getElementById('spec-tab-exame-fisico');

  if (tabGin) {
    tabGin.classList.toggle('active', spec === 'ginecologia');
    tabGin.setAttribute('aria-selected', (spec === 'ginecologia').toString());
  }
  if (tabPed) {
    tabPed.classList.toggle('active', spec === 'pediatria');
    tabPed.setAttribute('aria-selected', (spec === 'pediatria').toString());
  }
  if (tabEf) {
    tabEf.classList.toggle('active', spec === 'exame-fisico');
    tabEf.setAttribute('aria-selected', (spec === 'exame-fisico').toString());
  }

  const crumbSpec = document.getElementById('crumb-specialty');
  const sourceName = document.getElementById('footer-source-name');
  const statsCaption = document.getElementById('sidebar-stats-caption');
  const pickerGineco = document.getElementById('picker-group-ginecologia');
  const pickerPed = document.getElementById('picker-group-pediatria');
  const optGineco = document.getElementById('optgroup-ginecologia');
  const optPed = document.getElementById('optgroup-pediatria');
  const optEf = document.getElementById('optgroup-exame-fisico');

  if (spec === 'pediatria') {
    if (crumbSpec) crumbSpec.textContent = 'Pediatria';
    if (sourceName) sourceName.textContent = 'Tratado de Pediatria SBP (6ª Edição, 2024)';
    if (statsCaption) statsCaption.textContent = 'Pediatria • 48 Módulos • 48 Fluxos';
  } else if (spec === 'exame-fisico') {
    if (crumbSpec) crumbSpec.textContent = 'Exame Físico';
    if (sourceName) sourceName.textContent = 'Semiologia Médica (Porto / Bates / López & Medeiros)';
    if (statsCaption) statsCaption.textContent = 'Exame Físico • Sinais Vitais & Ectoscopia';
  } else {
    if (crumbSpec) crumbSpec.textContent = 'Ginecologia';
    if (sourceName) sourceName.textContent = 'Tratado de Ginecologia FEBRASGO (2ª Edição)';
    if (statsCaption) statsCaption.textContent = 'Ginecologia • 38 Módulos • 38 Fluxos';
  }

  if (pickerGineco) pickerGineco.style.display = (spec === 'ginecologia') ? 'block' : 'none';
  if (pickerPed) pickerPed.style.display = (spec === 'pediatria') ? 'block' : 'none';
  if (optGineco) optGineco.disabled = (spec !== 'ginecologia');
  if (optPed) optPed.disabled = (spec !== 'pediatria');
  if (optEf) optEf.disabled = (spec !== 'exame-fisico');
}

function switchSpecialty(spec, openModal = false) {
  applySpecialtyUI(spec);

  const modal = document.getElementById('pediatria-preview-modal');
  if (modal) modal.style.display = 'none';

  const dropdown = document.getElementById('module-picker-dropdown');
  const box = document.getElementById('active-module-banner');
  if (dropdown) dropdown.classList.remove('open');
  if (box) box.classList.remove('open');

  if (spec === 'pediatria') {
    switchModule(activePediatriaMod);
  } else if (spec === 'exame-fisico') {
    switchModule(activeExameFisicoMod);
  } else {
    switchModule(activeGinecologiaMod);
  }
  try {
    localStorage.setItem('fluxomed_active_specialty', spec);
  } catch(e) {}

  if (openModal && typeof openSearchModal === 'function') {
    openSearchModal(spec);
  }
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
  const metaCheck = typeof MODULE_META !== 'undefined' ? MODULE_META[moduleId] : null;
  if (moduleId.startsWith('ef-') || (metaCheck && metaCheck.specialty === 'exame-fisico')) {
    activeExameFisicoMod = moduleId;
    if (currentSpecialty !== 'exame-fisico') {
      applySpecialtyUI('exame-fisico');
    }
  } else if (moduleId.startsWith('ped-')) {
    activePediatriaMod = moduleId;
    if (currentSpecialty !== 'pediatria') {
      applySpecialtyUI('pediatria');
    }
  } else {
    activeGinecologiaMod = moduleId;
    if (currentSpecialty !== 'ginecologia') {
      applySpecialtyUI('ginecologia');
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
  const sunSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;margin:auto;"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`;
  const moonSvg = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;margin:auto;"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;
  ['topbar-theme-toggle', 'sidebar-theme-toggle'].forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.innerHTML = isDark ? sunSvg : moonSvg;
      btn.setAttribute('title', isDark ? 'Alternar para Modo Claro' : 'Alternar para Modo Noturno');
      btn.setAttribute('aria-label', isDark ? 'Alternar para Modo Claro' : 'Alternar para Modo Noturno');
    }
  });

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
      const allSecs = [
        ...(ORDERED_SECTIONS.ginecologia || []),
        ...(ORDERED_SECTIONS.pediatria || []),
        ...(ORDERED_SECTIONS['exame-fisico'] || [])
      ];
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
    }

    let text = activeLink ? (activeLink.querySelector('span:last-child')?.textContent || '').trim() : '';
    if (!text && target) {
      const h1 = target.querySelector('h1.section-title, h1');
      if (h1) text = h1.textContent.trim();
    }
    if (!text) text = 'Conduta Clínica';

    const currentCrumb = document.getElementById('current-crumb');
    const sepCur = document.getElementById('crumb-sep-cur');
    if (currentCrumb) {
      currentCrumb.textContent = text;
      currentCrumb.style.display = '';
    }
    if (sepCur) {
      sepCur.style.display = '';
    }

    renderToc(sectionId);
    updateSectionPager(sectionId);
  };

  const runSafeViewTransition = (fn) => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (typeof document.startViewTransition === 'function' && !prefersReduced) {
      try {
        const t = document.startViewTransition(() => fn());
        if (t && t.finished && typeof t.finished.catch === 'function') t.finished.catch(() => {});
        if (t && t.ready && typeof t.ready.catch === 'function') t.ready.catch(() => {});
        if (t && t.updateCallbackDone && typeof t.updateCallbackDone.catch === 'function') t.updateCallbackDone.catch(() => {});
      } catch (e) {
        fn();
      }
    } else {
      fn();
    }
  };
  runSafeViewTransition(updateDOM);

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

  const list = ORDERED_SECTIONS[currentSpecialty] || ORDERED_SECTIONS.ginecologia || [];
  let idx = list.findIndex(item => item.sectionId === sectionId);
  let activeList = list;

  if (idx === -1) {
    for (const spKey of ['ginecologia', 'pediatria', 'exame-fisico']) {
      if (spKey === currentSpecialty) continue;
      const candList = ORDERED_SECTIONS[spKey] || [];
      const candIdx = candList.findIndex(item => item.sectionId === sectionId);
      if (candIdx !== -1) {
        idx = candIdx;
        activeList = candList;
        break;
      }
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
  const curMod = currentSpecialty === 'exame-fisico'
    ? activeExameFisicoMod
    : (currentSpecialty === 'pediatria' ? activePediatriaMod : activeGinecologiaMod);
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
      const allSecs = [
        ...(ORDERED_SECTIONS.ginecologia || []),
        ...(ORDERED_SECTIONS.pediatria || []),
        ...(ORDERED_SECTIONS['exame-fisico'] || [])
      ];
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
      const initialMod = hash.startsWith('ef-')
        ? activeExameFisicoMod
        : (hash.startsWith('ped-') ? 'ped-bronquiolite' : activeGinecologiaMod);
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
    const allSecs = [
      ...(ORDERED_SECTIONS.ginecologia || []),
      ...(ORDERED_SECTIONS.pediatria || []),
      ...(ORDERED_SECTIONS['exame-fisico'] || [])
    ];
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
  const curActiveMod = typeof currentModule !== 'undefined'
    ? currentModule
    : (currentSpecialty === 'exame-fisico' ? activeExameFisicoMod : (currentSpecialty === 'pediatria' ? activePediatriaMod : activeGinecologiaMod));
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
  const cardImg = (triggerEl && triggerEl.tagName === 'IMG')
    ? triggerEl
    : (card ? card.querySelector('.flowchart-img, img') : null);
  const cardTitle = card ? card.querySelector('.card-title, h2, h3') : null;
  const multiImgsInCard = card ? card.querySelectorAll('.flowchart-img, img').length > 1 : false;

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
    const cleanAltTitle = infoAlt.replace(/^(Tabela Clínica Visual:|Infográfico Clínico:)\s*/i, '').trim();
    titleEl.textContent = (!multiImgsInCard && cardTitle) ? cardTitle.textContent.trim() : (cleanAltTitle || (cardTitle ? cardTitle.textContent.trim() : 'Visualização HD'));
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
    if (card.querySelector('.btn-copy-clinical')) return;
    // Pula apenas cards que são puramente pôsteres de fluxograma/infográfico sem tabela nem texto clínico
    const hasInfographicPoster = !!card.querySelector('img[src*="infografico-"]');
    const hasTableImg = !!card.querySelector('img[data-copy-text], img[src*="tabela"]');
    if (hasInfographicPoster && !hasTableImg) return;

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
      clone.querySelectorAll('img[data-copy-text]').forEach(img => {
        const txtNode = document.createElement('pre');
        txtNode.textContent = '\n' + (img.getAttribute('data-copy-text') || '') + '\n';
        img.replaceWith(txtNode);
      });
      const cleanText = clone.innerText
        .replace(/💡\s*Clique n[ao] (?:tabela|infográfico) para ampliar[^\n]*/gi, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
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

  // 3. Inicializar construtor interativo de Exame Físico (Sinais Vitais & Ectoscopia)
  if (rootEl.querySelector('#ef-sinais-vitais') || rootEl.querySelector('#ef-ectoscopia')) {
    if (typeof initExameFisicoBuilder === 'function') {
      initExameFisicoBuilder(rootEl);
    }
  }
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

    // Suporte Mobile: Pinça com 2 dedos (Pinch-to-Zoom) e Duplo-Toque para ampliar
    let initialPinchDistance = null;
    let initialPinchScale = 1.0;
    let lastTapTime = 0;

    viewport.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialPinchDistance = Math.hypot(dx, dy);
        initialPinchScale = lightboxState.scale || 1.0;
      } else if (e.touches.length === 1) {
        const now = Date.now();
        if (now - lastTapTime < 280) {
          e.preventDefault();
          if (lightboxState.scale > 1.05) {
            resetLightboxZoom();
          } else {
            zoomLightbox(0.85);
          }
          lastTapTime = 0;
        } else {
          lastTapTime = now;
        }
      }
    }, { passive: false });

    viewport.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && initialPinchDistance) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const ratio = dist / initialPinchDistance;
        const next = Math.min(3.5, Math.max(0.5, +(initialPinchScale * ratio).toFixed(2)));
        lightboxState.scale = next;
        const img = document.getElementById('lightbox-img');
        if (img) img.style.transform = `scale(${next})`;
      }
    }, { passive: false });

    viewport.addEventListener('touchend', (e) => {
      if (e.touches.length < 2) {
        initialPinchDistance = null;
      }
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
  ],
  'exame-fisico': [
    {
      axis: 'Semiologia Geral & Evolução à Beira do Leito',
      ids: ['ef-geral']
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
  if (crumbSpec) {
    crumbSpec.textContent = currentSpecialty === 'exame-fisico'
      ? 'Exame Físico'
      : (currentSpecialty === 'pediatria' ? 'Pediatria' : 'Ginecologia');
  }
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
    try {
      const t = document.startViewTransition(() => applyHomeDOM());
      if (t && t.finished && typeof t.finished.catch === 'function') t.finished.catch(() => {});
      if (t && t.ready && typeof t.ready.catch === 'function') t.ready.catch(() => {});
      if (t && t.updateCallbackDone && typeof t.updateCallbackDone.catch === 'function') t.updateCallbackDone.catch(() => {});
    } catch (e) {
      applyHomeDOM();
    }
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
    ? ['exame-fisico', 'ginecologia', 'pediatria']
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
      const specTitle = spec === 'exame-fisico'
        ? 'Exame Físico & Semiotécnica'
        : (spec === 'ginecologia' ? 'Ginecologia & Obstetrícia' : 'Pediatria');
      const specRef = spec === 'exame-fisico'
        ? `Semiologia Geral · ${specCount} módulo`
        : (spec === 'ginecologia' ? `FEBRASGO · ${specCount} módulos` : `SBP 2024 · ${specCount} módulos`);
      const dotClass = spec === 'exame-fisico' ? 'ef' : (spec === 'ginecologia' ? 'gin' : 'ped');

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
      <span>${totalHits} resultado(s) nas 692 seções · <kbd>↑</kbd><kbd>↓</kbd> e <kbd>Enter</kbd></span>
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
    const curMod = currentSpecialty === 'exame-fisico'
      ? activeExameFisicoMod
      : (currentSpecialty === 'pediatria' ? activePediatriaMod : activeGinecologiaMod);
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

// ============================================================================
// CONSTRUTOR INTERATIVO DE EXAME FÍSICO (GERAL & SEGMENTAR POR SISTEMAS)
// ============================================================================
const efState = {
  single: {},
  multi: {
    hidratacao_sinais: [],
    esforco_sinais: [],
    edema_local: [],
    pele: [],
    dispositivos: [],
    cp_conjuntivas: [],
    cp_moe: [],
    cp_oroscopia: [],
    cp_orl: [],
    cp_tireoide: [],
    cp_jugular: [],
    resp_tiragens: [],
    abd_inspecao_det: [],
    abd_percussao: [],
    abd_dor_regiao: [],
    abd_visc: [],
    neuro_pares_alt: [],
    neuro_tonus: [],
    neuro_sens: [],
    neuro_coord: [],
    ext_art: [],
    ext_coluna: [],
    ext_vasc_perf: [],
    ext_panturrilha: [],
    ext_comp: []
  },
  crosses: {
    coloracao: '1',
    hidratacao: '1',
    ictericia: '1',
    cianose: '1',
    respiratorio: '1',
    edema: '1'
  },
  maneuvers: {
    blumberg: '',
    murphy: '',
    rovsing: '',
    psoas: '',
    obturador: '',
    giordano: '',
    db: '',
    jobert: '',
    rigidez_nuca: '',
    kernig: '',
    brudzinski: '',
    lasegue: '',
    homans: '',
    bancroft: '',
    bandeira: ''
  },
  respFindings: [],
  cardioMurmurs: []
};

const EF_CROSS_GROUPS = ['coloracao', 'hidratacao', 'ictericia', 'cianose', 'respiratorio', 'edema'];

const EF_SECTION_SINGLE_GROUPS = {
  cabeca: ['cp_cranio', 'cp_pupilas', 'cp_dentes', 'cp_traqueia', 'cp_linfonodos'],
  resp: ['resp_forma', 'resp_expans', 'resp_ftv', 'resp_perc', 'resp_mv', 'resp_ra_status', 'resp_voz'],
  cardio: ['cv_precordio', 'cv_fremito', 'cv_sopro_status', 'cv_pulsos', 'cv_tec'],
  abdome: ['abd_forma', 'abd_sopros', 'abd_palp_tensao'],
  neuro: ['neuro_orient', 'neuro_ling', 'neuro_pares_status', 'neuro_forca_global', 'neuro_rot', 'neuro_babinski'],
  extrem: []
};

const EF_SECTION_MULTI_GROUPS = {
  cabeca: ['cp_conjuntivas', 'cp_moe', 'cp_oroscopia', 'cp_orl', 'cp_tireoide', 'cp_jugular'],
  resp: ['resp_tiragens'],
  cardio: [],
  abdome: ['abd_inspecao_det', 'abd_percussao', 'abd_dor_regiao', 'abd_visc'],
  neuro: ['neuro_pares_alt', 'neuro_tonus', 'neuro_sens', 'neuro_coord'],
  extrem: ['ext_art', 'ext_coluna', 'ext_vasc_perf', 'ext_panturrilha', 'ext_comp']
};

const EF_SECTION_MANEUVERS = {
  abdome: ['blumberg', 'murphy', 'rovsing', 'psoas', 'obturador', 'giordano', 'db', 'jobert'],
  neuro: ['rigidez_nuca', 'kernig', 'brudzinski'],
  extrem: ['lasegue', 'homans', 'bancroft', 'bandeira']
};

function efFormatNum(n, decimals = 0) {
  if (n === null || n === undefined || Number.isNaN(n)) return '';
  if (decimals > 0) {
    return n.toFixed(decimals).replace('.', ',');
  }
  return String(Math.round(n)).replace('.', ',');
}

function efReadNum(id) {
  const el = document.getElementById(id);
  if (!el) return null;
  const raw = String(el.value || '').trim().replace(',', '.');
  if (!raw) return null;
  const num = parseFloat(raw);
  return Number.isFinite(num) ? num : null;
}

function efFormatMinMax(minVal, maxVal, decimals = 0) {
  if (minVal === null && maxVal === null) return '';
  if (minVal !== null && maxVal !== null) {
    const lo = Math.min(minVal, maxVal);
    const hi = Math.max(minVal, maxVal);
    if (Math.abs(lo - hi) < 1e-6) {
      return efFormatNum(lo, decimals);
    }
    return `${efFormatNum(lo, decimals)}–${efFormatNum(hi, decimals)}`;
  }
  const single = minVal !== null ? minVal : maxVal;
  return efFormatNum(single, decimals);
}

function efSetBadge(id, text, level = 'neutral') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.className = `ef-status-badge ${level}`;
}

function efIsCompactStyle() {
  const styleEl = document.getElementById('ef-text-style');
  return !!(styleEl && styleEl.value === 'evolucao');
}

function efFormatCross(code) {
  if (!code) return '';
  if (code === 'duro') return 'sem cacifo / duro';
  const fmtEl = document.getElementById('ef-cross-format');
  const fmt = fmtEl ? fmtEl.value : '4+';
  const n = Math.min(4, Math.max(1, parseInt(code, 10) || 1));
  if (fmt === 'plus') {
    return `${'+'.repeat(n)}/++++`;
  }
  return n === 1 ? '+/4+' : `${n}+/4+`;
}

function efRefreshCrossLabels() {
  document.querySelectorAll('.ef-cross-btn').forEach(btn => {
    const code = btn.getAttribute('data-cross');
    if (code && code !== 'duro') {
      btn.textContent = efFormatCross(code);
    }
  });
}

function efSyncChipUI() {
  const container = document.getElementById('module-content-ef-geral') || document;
  container.querySelectorAll('.ef-chip[data-group]').forEach(chip => {
    const group = chip.getAttribute('data-group');
    const val = chip.getAttribute('data-val');
    const isMulti = chip.getAttribute('data-multi') === 'true';
    let isActive = false;
    if (isMulti) {
      isActive = Array.isArray(efState.multi[group]) && efState.multi[group].includes(val);
    } else {
      isActive = efState.single[group] === val;
    }
    chip.classList.toggle('active', isActive);
  });

  EF_CROSS_GROUPS.forEach(group => {
    const panel = document.getElementById(`ef-cross-panel-${group}`);
    if (!panel) return;
    const activeTrigger = container.querySelector(`.ef-chip.active[data-group="${group}"][data-needs-cross="true"]`);
    const showPanel = !!activeTrigger;
    panel.hidden = !showPanel;
    if (showPanel) {
      const selectedCross = efState.crosses[group] || '1';
      panel.querySelectorAll('.ef-cross-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cross') === selectedCross);
      });
    }
  });

  const soproPanel = document.getElementById('ef-cv-sopro-panel');
  if (soproPanel) {
    soproPanel.hidden = (efState.single.cv_sopro_status !== 'com sopro audível');
  }

  container.querySelectorAll('.ef-maneuver-card[data-maneuver]').forEach(card => {
    const key = card.getAttribute('data-maneuver');
    const val = efState.maneuvers[key] || '';
    card.classList.toggle('is-pos', val === 'pos');
    card.classList.toggle('is-neg', val === 'neg');
    card.querySelectorAll('.ef-mbtn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mval') === val);
    });
  });

  const linfObs = document.getElementById('ef-linf-obs');
  if (linfObs) {
    linfObs.hidden = (efState.single.linfonodos !== 'linfonodomegalia palpável');
  }

  efRenderRespFindingsList();
  efRenderCardioMurmursList();
  efUpdateNeuroGlasgowPill();
}

function efUpdateNeuroGlasgowPill() {
  const pill = document.getElementById('ef-neuro-ecg-pill');
  if (!pill) return;
  const ao = efReadNum('ef-neuro-ao');
  const rv = efReadNum('ef-neuro-rv');
  const rm = efReadNum('ef-neuro-rm');
  if (ao !== null && rv !== null && rm !== null) {
    const total = ao + rv + rm;
    pill.textContent = `ECG: ${total} (AO${ao} RV${rv} RM${rm})`;
    const ectoGlasgow = document.getElementById('ef-glasgow');
    if (ectoGlasgow) ectoGlasgow.value = String(total);
    const gBtn = document.getElementById('ef-glasgow-15-btn');
    if (gBtn) gBtn.classList.toggle('active', total === 15);
  } else {
    const g = efReadNum('ef-glasgow');
    pill.textContent = g !== null ? `ECG: ${Math.round(g)}` : 'ECG: —';
  }
}

function efBuildVitalsText() {
  const parts = [];

  // 1. Pressão Arterial + PAM
  const pasMin = efReadNum('ef-pas-min');
  const pasMax = efReadNum('ef-pas-max');
  const padMin = efReadNum('ef-pad-min');
  const padMax = efReadNum('ef-pad-max');
  const paPos = (document.getElementById('ef-pa-pos')?.value || '').trim();
  const pamDisplay = document.getElementById('ef-pam-display');

  const pasText = efFormatMinMax(pasMin, pasMax, 0);
  const padText = efFormatMinMax(padMin, padMax, 0);

  if (pasText || padText) {
    const isRange = (pasMin !== null && pasMax !== null && Math.abs(pasMin - pasMax) > 1e-6) ||
                    (padMin !== null && padMax !== null && Math.abs(padMin - padMax) > 1e-6);
    let paStr = '';
    if (pasText && padText) {
      paStr = isRange ? `PA: ${pasText} / ${padText} mmHg` : `PA: ${pasText}/${padText} mmHg`;
    } else if (pasText) {
      paStr = `PAS: ${pasText} mmHg`;
    } else {
      paStr = `PAD: ${padText} mmHg`;
    }

    const pasLo = (pasMin !== null && pasMax !== null) ? Math.min(pasMin, pasMax) : (pasMin ?? pasMax);
    const pasHi = (pasMin !== null && pasMax !== null) ? Math.max(pasMin, pasMax) : (pasMin ?? pasMax);
    const padLo = (padMin !== null && padMax !== null) ? Math.min(padMin, padMax) : (padMin ?? padMax);
    const padHi = (padMin !== null && padMax !== null) ? Math.max(padMin, padMax) : (padMin ?? padMax);

    let pamText = '';
    let pamLo = null;
    if (pasLo !== null && padLo !== null) {
      pamLo = Math.round((pasLo + 2 * padLo) / 3);
      const pamHi = Math.round((pasHi + 2 * padHi) / 3);
      pamText = pamLo === pamHi ? `${pamLo} mmHg` : `${pamLo}–${pamHi} mmHg`;
      if (pamDisplay) pamDisplay.textContent = `PAM: ${pamText}`;
    } else if (pamDisplay) {
      pamDisplay.textContent = 'PAM: —';
    }

    const extras = [];
    if (pamText) extras.push(`PAM: ${pamText}`);
    if (paPos) extras.push(paPos);
    if (extras.length > 0) paStr += ` (${extras.join(', ')})`;
    parts.push(paStr);

    if ((pasLo !== null && pasLo < 90) || (pamLo !== null && pamLo < 65)) {
      efSetBadge('ef-pa-badge', 'Hipotensão / Alerta', 'danger');
    } else if ((pasHi !== null && pasHi >= 180) || (padHi !== null && padHi >= 110)) {
      efSetBadge('ef-pa-badge', 'Crise Hipertensiva', 'danger');
    } else if ((pasHi !== null && pasHi >= 140) || (padHi !== null && padHi >= 90)) {
      efSetBadge('ef-pa-badge', 'Hipertenso', 'warn');
    } else if ((pasHi !== null && pasHi >= 130) || (padHi !== null && padHi >= 85)) {
      efSetBadge('ef-pa-badge', 'PA Limítrofe', 'warn');
    } else {
      efSetBadge('ef-pa-badge', 'Normotenso', 'ok');
    }
  } else {
    if (pamDisplay) pamDisplay.textContent = 'PAM: —';
    efSetBadge('ef-pa-badge', 'Aguardando', 'neutral');
  }

  // 2. Frequência Cardíaca (FC) & Pulso
  const fcMin = efReadNum('ef-fc-min');
  const fcMax = efReadNum('ef-fc-max');
  const pulsoCaract = (document.getElementById('ef-pulso-caract')?.value || '').trim();
  const fcText = efFormatMinMax(fcMin, fcMax, 0);
  if (fcText) {
    let fcStr = `FC: ${fcText} bpm`;
    if (pulsoCaract) fcStr += ` (${pulsoCaract})`;
    parts.push(fcStr);
    const fcLo = (fcMin !== null && fcMax !== null) ? Math.min(fcMin, fcMax) : (fcMin ?? fcMax);
    const fcHi = (fcMin !== null && fcMax !== null) ? Math.max(fcMin, fcMax) : (fcMin ?? fcMax);
    if (fcLo < 50 || fcHi > 130) {
      efSetBadge('ef-fc-badge', fcLo < 50 ? 'Bradicardia Importante' : 'Taquicardia Importante', 'danger');
    } else if (fcLo < 60) {
      efSetBadge('ef-fc-badge', 'Bradicárdico', 'warn');
    } else if (fcHi > 100) {
      efSetBadge('ef-fc-badge', 'Taquicárdico', 'warn');
    } else {
      efSetBadge('ef-fc-badge', 'Normocárdico', 'ok');
    }
  } else {
    if (pulsoCaract) parts.push(`Pulso: ${pulsoCaract}`);
    efSetBadge('ef-fc-badge', 'Aguardando', 'neutral');
  }

  // 3. Frequência Respiratória (FR)
  const frMin = efReadNum('ef-fr-min');
  const frMax = efReadNum('ef-fr-max');
  const frText = efFormatMinMax(frMin, frMax, 0);
  if (frText) {
    parts.push(`FR: ${frText} irpm`);
    const frLo = (frMin !== null && frMax !== null) ? Math.min(frMin, frMax) : (frMin ?? frMax);
    const frHi = (frMin !== null && frMax !== null) ? Math.max(frMin, frMax) : (frMin ?? frMax);
    if (frHi >= 30 || frLo < 10) {
      efSetBadge('ef-fr-badge', frLo < 10 ? 'Bradipneia Grave' : 'Taquipneia Grave', 'danger');
    } else if (frHi > 20) {
      efSetBadge('ef-fr-badge', 'Taquipneico', 'warn');
    } else if (frLo < 12) {
      efSetBadge('ef-fr-badge', 'Bradipneico', 'warn');
    } else {
      efSetBadge('ef-fr-badge', 'Eupneico', 'ok');
    }
  } else {
    efSetBadge('ef-fr-badge', 'Aguardando', 'neutral');
  }

  // 4. Temperatura Axilar (Tax)
  const taxMin = efReadNum('ef-tax-min');
  const taxMax = efReadNum('ef-tax-max');
  const afebrilBtn = document.getElementById('ef-tax-afebril-btn');
  const isAfebrilChecked = afebrilBtn && afebrilBtn.getAttribute('data-afebril') === 'true';
  const taxText = efFormatMinMax(taxMin, taxMax, 1);
  if (taxText) {
    const taxLo = (taxMin !== null && taxMax !== null) ? Math.min(taxMin, taxMax) : (taxMin ?? taxMax);
    const taxHi = (taxMin !== null && taxMax !== null) ? Math.max(taxMin, taxMax) : (taxMin ?? taxMax);
    let taxStr = `Tax: ${taxText} °C`;
    if (isAfebrilChecked && taxHi < 37.8) taxStr += ' (afebril nas 24h)';
    parts.push(taxStr);
    if (taxLo < 35.0) {
      efSetBadge('ef-tax-badge', 'Hipotermia', 'danger');
    } else if (taxHi >= 39.0) {
      efSetBadge('ef-tax-badge', 'Febre Alta', 'danger');
    } else if (taxHi >= 37.8) {
      efSetBadge('ef-tax-badge', 'Febril', 'warn');
    } else if (taxHi >= 37.3) {
      efSetBadge('ef-tax-badge', 'Subfebril', 'warn');
    } else {
      efSetBadge('ef-tax-badge', 'Afebril', 'ok');
    }
  } else if (isAfebrilChecked) {
    parts.push('Tax: afebril nas 24h');
    efSetBadge('ef-tax-badge', 'Afebril (24h)', 'ok');
  } else {
    efSetBadge('ef-tax-badge', 'Aguardando', 'neutral');
  }

  // 5. Saturação de O₂ (SpO₂)
  const spo2Min = efReadNum('ef-spo2-min');
  const spo2Max = efReadNum('ef-spo2-max');
  const spo2SupEl = document.getElementById('ef-spo2-sup');
  const spo2Sup = spo2SupEl ? spo2SupEl.value : 'em ar ambiente';
  const spo2FlowWrap = document.getElementById('ef-spo2-flow-wrap');
  const spo2FlowLabel = document.getElementById('ef-spo2-flow-label');
  const spo2FlowInput = document.getElementById('ef-spo2-flow');
  const spo2Flow = (spo2FlowInput?.value || '').trim();

  if (spo2FlowWrap) {
    const needsFlow = spo2Sup !== 'em ar ambiente';
    spo2FlowWrap.style.display = needsFlow ? 'flex' : 'none';
    if (spo2FlowLabel) {
      spo2FlowLabel.textContent = (spo2Sup.includes('Venturi') || spo2Sup.includes('VNI') || spo2Sup.includes('TOT'))
        ? 'FiO₂ (%):'
        : 'Fluxo (L/min):';
    }
  }

  const spo2Text = efFormatMinMax(spo2Min, spo2Max, 0);
  if (spo2Text) {
    let spo2Str = `SpO₂: ${spo2Text}% ${spo2Sup}`;
    if (spo2Sup !== 'em ar ambiente' && spo2Flow) {
      spo2Str += ` (${spo2Flow})`;
    }
    parts.push(spo2Str);
    const spo2Lo = (spo2Min !== null && spo2Max !== null) ? Math.min(spo2Min, spo2Max) : (spo2Min ?? spo2Max);
    if (spo2Lo < 90) {
      efSetBadge('ef-spo2-badge', 'Dessaturação Grave', 'danger');
    } else if (spo2Lo < 94) {
      efSetBadge('ef-spo2-badge', 'Hipoxemia / Alerta', 'warn');
    } else {
      efSetBadge('ef-spo2-badge', 'Normossaturando', 'ok');
    }
  } else {
    efSetBadge('ef-spo2-badge', 'Aguardando', 'neutral');
  }

  // 6. HGT e Dor (EVA)
  const hgtMin = efReadNum('ef-hgt-min');
  const hgtMax = efReadNum('ef-hgt-max');
  const evaMin = efReadNum('ef-eva-min');
  const evaMax = efReadNum('ef-eva-max');

  const hgtText = efFormatMinMax(hgtMin, hgtMax, 0);
  if (hgtText) {
    parts.push(`HGT: ${hgtText} mg/dL`);
    const hgtLo = (hgtMin !== null && hgtMax !== null) ? Math.min(hgtMin, hgtMax) : (hgtMin ?? hgtMax);
    const hgtHi = (hgtMin !== null && hgtMax !== null) ? Math.max(hgtMin, hgtMax) : (hgtMin ?? hgtMax);
    if (hgtLo < 70) {
      efSetBadge('ef-hgt-badge', 'Hipoglicemia', 'danger');
    } else if (hgtHi >= 250) {
      efSetBadge('ef-hgt-badge', 'Hiperglicemia Grave', 'danger');
    } else if (hgtHi >= 180) {
      efSetBadge('ef-hgt-badge', 'Hiperglicemia', 'warn');
    } else {
      efSetBadge('ef-hgt-badge', 'Normoglicêmico', 'ok');
    }
  } else {
    efSetBadge('ef-hgt-badge', 'Aguardando', 'neutral');
  }

  const evaText = efFormatMinMax(evaMin, evaMax, 0);
  if (evaText) {
    parts.push(`EVA: ${evaText}/10`);
  }

  // 7. Antropometria & Diurese
  const peso = efReadNum('ef-peso');
  const alturaRaw = efReadNum('ef-altura');
  const diurese = efReadNum('ef-diurese');
  const imcBadge = document.getElementById('ef-imc-badge');
  const diureseBadge = document.getElementById('ef-diurese-badge');

  let alturaM = null;
  if (alturaRaw !== null) {
    alturaM = alturaRaw > 3 ? (alturaRaw / 100) : alturaRaw;
  }

  let imcVal = null;
  if (peso !== null && alturaM !== null && alturaM > 0.3) {
    imcVal = peso / (alturaM * alturaM);
    let imcClass = 'Eutrófico';
    if (imcVal < 18.5) imcClass = 'Baixo peso';
    else if (imcVal >= 30) imcClass = 'Obesidade';
    else if (imcVal >= 25) imcClass = 'Sobrepeso';
    if (imcBadge) imcBadge.textContent = `IMC: ${efFormatNum(imcVal, 1)} kg/m² (${imcClass})`;
  } else if (imcBadge) {
    imcBadge.textContent = 'IMC: —';
  }

  const anthroParts = [];
  if (peso !== null) anthroParts.push(`Peso: ${efFormatNum(peso, Number.isInteger(peso) ? 0 : 1)} kg`);
  if (alturaM !== null) anthroParts.push(`Altura: ${efFormatNum(alturaM, 2)} m`);
  if (imcVal !== null) anthroParts.push(`IMC: ${efFormatNum(imcVal, 1)} kg/m²`);
  if (anthroParts.length > 0) parts.push(anthroParts.join(', '));

  if (diurese !== null) {
    let diurStr = `Diurese 24h: ${efFormatNum(diurese, 0)} mL`;
    if (peso !== null && peso > 0) {
      const mlKgH = diurese / 24 / peso;
      const debitoTxt = `${efFormatNum(mlKgH, 2)} mL/kg/h`;
      diurStr += ` (${debitoTxt})`;
      if (diureseBadge) {
        const tag = mlKgH < 0.5 ? 'Oligúria' : (mlKgH > 2.5 ? 'Poliúria' : 'Adequado');
        diureseBadge.textContent = `Débito: ${debitoTxt} (${tag})`;
      }
    } else if (diureseBadge) {
      diureseBadge.textContent = `Diurese: ${efFormatNum(diurese, 0)} mL/24h`;
    }
    parts.push(diurStr);
  } else if (diureseBadge) {
    diureseBadge.textContent = 'Débito: —';
  }

  const vitObs = (document.getElementById('ef-vitais-obs')?.value || '').trim();
  if (vitObs) parts.push(vitObs);

  if (parts.length === 0) return '';
  return `Sinais Vitais: ${parts.join(' | ')}.`;
}

function efBuildEctoText() {
  const s = efState.single;
  const m = efState.multi;
  const c = efState.crosses;
  const isCompact = efIsCompactStyle();
  const glasgow = efReadNum('ef-glasgow');

  const items = [];

  if (s.estado_geral) {
    items.push(s.estado_geral === 'Grave' ? 'estado geral grave' : s.estado_geral);
  }

  if (s.consciencia || glasgow !== null) {
    let consc = s.consciencia || '';
    if (glasgow !== null) {
      const ecgPrefix = isCompact ? 'ECG' : 'Glasgow';
      consc = consc ? `${consc} (${ecgPrefix} ${Math.round(glasgow)})` : `${ecgPrefix} ${Math.round(glasgow)}`;
    }
    items.push(consc);
  }

  if (s.cooperacao && !isCompact) items.push(s.cooperacao);
  if (s.atitude && !isCompact) items.push(s.atitude);
  if (s.facies) {
    items.push(s.facies === 'atípica' ? 'fácies atípica' : `fácies ${s.facies}`);
  }

  if (s.coloracao) {
    if (s.coloracao === 'hipocorado') {
      items.push(`hipocorado (${efFormatCross(c.coloracao)})`);
    } else {
      items.push(s.coloracao);
    }
  }

  if (s.hidratacao) {
    if (s.hidratacao === 'desidratado') {
      const det = [efFormatCross(c.hidratacao), ...(m.hidratacao_sinais || [])].filter(Boolean);
      items.push(`desidratado (${det.join(', ')})`);
    } else {
      items.push(s.hidratacao);
    }
  }

  if (s.ictericia) {
    if (s.ictericia === 'ictérico') {
      const kramer = (document.getElementById('ef-kramer-select')?.value || '').trim();
      const det = [efFormatCross(c.ictericia), s.ictericia_local, kramer].filter(Boolean);
      items.push(`ictérico (${det.join(', ')})`);
    } else {
      items.push(s.ictericia);
    }
  }

  if (s.cianose) {
    if (s.cianose === 'cianótico') {
      const det = [efFormatCross(c.cianose), s.cianose_tipo].filter(Boolean);
      items.push(`cianótico (${det.join(', ')})`);
    } else {
      items.push(s.cianose);
    }
  }

  if (s.temperatura_toque) items.push(s.temperatura_toque);

  if (s.respiratorio) {
    if (s.respiratorio === 'dispneico') {
      const det = [efFormatCross(c.respiratorio), ...(m.esforco_sinais || [])].filter(Boolean);
      items.push(`dispneico (${det.join(', ')})`);
    } else {
      items.push(s.respiratorio);
    }
  }

  if (s.perfusao) items.push(s.perfusao);

  if (s.edema) {
    if (s.edema === 'edema presente') {
      const det = [efFormatCross(c.edema), ...(m.edema_local || []), s.edema_caract].filter(Boolean);
      items.push(`edema presente (${det.join(', ')})`);
    } else {
      items.push(s.edema);
    }
  }

  if (s.nutricional) items.push(s.nutricional);
  if (s.biotipo) items.push(`biotipo ${s.biotipo}`);

  if (Array.isArray(m.pele) && m.pele.length > 0) {
    items.push(...m.pele);
  }
  const peleObs = (document.getElementById('ef-pele-obs')?.value || '').trim();
  if (peleObs) items.push(peleObs);

  if (s.linfonodos) {
    if (s.linfonodos === 'linfonodomegalia palpável') {
      const linfObs = (document.getElementById('ef-linf-obs')?.value || '').trim();
      items.push(linfObs ? `linfonodomegalia palpável (${linfObs})` : 'linfonodomegalia palpável');
    } else {
      items.push(s.linfonodos);
    }
  }

  if (Array.isArray(m.dispositivos) && m.dispositivos.length > 0) {
    items.push(`em uso de ${m.dispositivos.join(', ')}`);
  }

  const ectoObs = (document.getElementById('ef-ecto-obs')?.value || '').trim();
  if (ectoObs) items.push(ectoObs);

  if (items.length === 0) return '';
  if (isCompact) {
    return `Ectoscopia: ${items.join(', ')}.`;
  }
  const hasEstadoGeralPrefix = s.estado_geral === 'BEG' || s.estado_geral === 'REG' || s.estado_geral === 'MEG' || s.estado_geral === 'Grave';
  const lead = hasEstadoGeralPrefix ? 'em ' : '';
  return `Ectoscopia / Exame Físico Geral: Paciente ${lead}${items.join(', ')}.`;
}

function efBuildManeuverList(keys) {
  const container = document.getElementById('module-content-ef-geral') || document;
  const posList = [];
  const negList = [];
  keys.forEach(k => {
    const val = efState.maneuvers[k];
    if (!val) return;
    const card = container.querySelector(`.ef-maneuver-card[data-maneuver="${k}"]`);
    const label = card ? (card.getAttribute('data-label') || k) : k;
    if (val === 'pos') posList.push(`${label} positivo (+)`);
    else if (val === 'neg') negList.push(label.replace(/^Sinal d[eoa] /, '').replace(/^Descompressão brusca difusa \(DB\)/, 'DB'));
  });
  const out = [...posList];
  if (negList.length > 0) {
    out.push(`manobras negativas: ${negList.join(', ')}`);
  }
  return out;
}

function efBuildCabecaPescocoText() {
  const s = efState.single;
  const m = efState.multi;
  const isCompact = efIsCompactStyle();
  const items = [];

  if (s.cp_cranio) items.push(s.cp_cranio);

  if (s.cp_pupilas) {
    const pupDet = (document.getElementById('ef-cp-pupilas-det')?.value || '').trim();
    items.push(pupDet ? `${s.cp_pupilas} (${pupDet})` : s.cp_pupilas);
  }

  const conjRaw = [...(m.cp_conjuntivas || [])];
  const olhoCruz = document.getElementById('ef-cp-olhos-cruz')?.value || '';
  const escleraCruz = document.getElementById('ef-cp-escleras-cruz')?.value || '';
  const conjList = conjRaw.map(txt => {
    if (txt === 'conjuntivas hipocoradas' && olhoCruz) return `conjuntivas hipocoradas (${efFormatCross(olhoCruz)})`;
    if (txt === 'escleras ictéricas' && escleraCruz) return `escleras ictéricas (${efFormatCross(escleraCruz)})`;
    return txt;
  });
  items.push(...conjList);

  if (Array.isArray(m.cp_moe) && m.cp_moe.length > 0) items.push(...m.cp_moe);
  if (Array.isArray(m.cp_oroscopia) && m.cp_oroscopia.length > 0) items.push(...m.cp_oroscopia);
  if (s.cp_dentes) items.push(s.cp_dentes);
  if (Array.isArray(m.cp_orl) && m.cp_orl.length > 0) items.push(...m.cp_orl);
  if (s.cp_traqueia) items.push(s.cp_traqueia);

  if (Array.isArray(m.cp_tireoide) && m.cp_tireoide.length > 0) {
    const tirObs = (document.getElementById('ef-cp-tireoide-obs')?.value || '').trim();
    const tirStr = tirObs ? `${m.cp_tireoide.join(', ')} (${tirObs})` : m.cp_tireoide.join(', ');
    items.push(tirStr);
  }

  if (s.cp_linfonodos) {
    const linfObs = (document.getElementById('ef-cp-linf-obs')?.value || '').trim();
    items.push(linfObs ? `${s.cp_linfonodos} (${linfObs})` : s.cp_linfonodos);
  }

  if (Array.isArray(m.cp_jugular) && m.cp_jugular.length > 0) items.push(...m.cp_jugular);

  const cpObs = (document.getElementById('ef-cp-obs')?.value || '').trim();
  if (cpObs) items.push(cpObs);

  if (items.length === 0) return '';
  return isCompact
    ? `Cabeça/Pescoço: ${items.join('; ')}.`
    : `Cabeça e Pescoço: ${items.join('; ')}.`;
}

function efFormatRespPhrase(tipo, regiao, lado) {
  let loc = '';
  if (regiao === 'base') {
    loc = lado === 'bilateral' ? 'em bases bilaterais' : (lado === 'à direita' ? 'em base direita' : 'em base esquerda');
  } else if (regiao === 'terço médio') {
    loc = lado === 'bilateral' ? 'em terços médios bilaterais' : (lado === 'à direita' ? 'em terço médio direito' : 'em terço médio esquerdo');
  } else if (regiao === 'ápice') {
    loc = lado === 'bilateral' ? 'em ápices bilaterais' : (lado === 'à direita' ? 'em ápice direito' : 'em ápice esquerdo');
  } else {
    loc = lado === 'bilateral' ? 'difusos bilateralmente' : `difusos em hemitórax ${lado === 'à direita' ? 'direito' : 'esquerdo'}`;
  }
  return `${tipo} ${loc}`;
}

function efAddRespFinding(presetTipo, presetRegiao, presetLado) {
  const tipo = presetTipo || document.getElementById('ef-resp-ra-tipo')?.value || 'estertores finos';
  const regiao = presetRegiao || document.getElementById('ef-resp-ra-regiao')?.value || 'base';
  const lado = presetLado || document.getElementById('ef-resp-ra-lado')?.value || 'bilateral';
  const phrase = efFormatRespPhrase(tipo, regiao, lado);
  if (!efState.respFindings.includes(phrase)) {
    efState.respFindings.push(phrase);
  }
  efState.single.resp_ra_status = 'com ruídos adventícios';
  efSyncChipUI();
  efGenerateTexts();
}

function efRemoveRespFinding(idx) {
  efState.respFindings.splice(idx, 1);
  if (efState.respFindings.length === 0 && efState.single.resp_ra_status === 'com ruídos adventícios') {
    delete efState.single.resp_ra_status;
  }
  efSyncChipUI();
  efGenerateTexts();
}

function efRenderRespFindingsList() {
  const box = document.getElementById('ef-resp-ra-list');
  if (!box) return;
  if (efState.respFindings.length === 0) {
    box.innerHTML = '';
    return;
  }
  box.innerHTML = efState.respFindings.map((item, idx) => `
    <span class="ef-added-tag">
      <span>${escapeSearchHtml(item)}</span>
      <button type="button" onclick="efRemoveRespFinding(${idx})" aria-label="Remover achado">✕</button>
    </span>
  `).join('');
}

function efBuildRespiratorioText() {
  const s = efState.single;
  const m = efState.multi;
  const isCompact = efIsCompactStyle();
  const items = [];

  if (s.resp_forma) items.push(s.resp_forma);
  if (Array.isArray(m.resp_tiragens) && m.resp_tiragens.length > 0) items.push(...m.resp_tiragens);
  if (s.resp_expans) items.push(s.resp_expans);

  if (s.resp_ftv) {
    const ftvTopo = (document.getElementById('ef-resp-ftv-topo')?.value || '').trim();
    items.push(ftvTopo ? `${s.resp_ftv} (${ftvTopo})` : s.resp_ftv);
  }

  if (s.resp_perc) {
    const percTopo = (document.getElementById('ef-resp-perc-topo')?.value || '').trim();
    items.push(percTopo ? `${s.resp_perc} (${percTopo})` : s.resp_perc);
  }

  if (s.resp_mv) {
    const mvTopo = (document.getElementById('ef-resp-mv-topo')?.value || '').trim();
    const mvText = isCompact && s.resp_mv.includes('presente e bem distribuído')
      ? 'MV+ bilateral'
      : (mvTopo ? `${s.resp_mv} (${mvTopo})` : s.resp_mv);
    items.push(mvText);
  }

  if (efState.respFindings.length > 0) {
    items.push(`presença de ${efState.respFindings.join(', ')}`);
  } else if (s.resp_ra_status === 'sem ruídos adventícios') {
    items.push(isCompact ? 's/ RA' : 'sem ruídos adventícios');
  } else if (s.resp_ra_status === 'com ruídos adventícios') {
    items.push('ruídos adventícios presentes');
  }

  if (s.resp_voz) items.push(s.resp_voz);
  const respObs = (document.getElementById('ef-resp-obs')?.value || '').trim();
  if (respObs) items.push(respObs);

  if (items.length === 0) return '';
  return isCompact
    ? `AR: ${items.join(', ')}.`
    : `Aparelho Respiratório: ${items.join(', ')}.`;
}

function efReadCurrentMurmurString() {
  const fase = document.getElementById('ef-cv-sopro-fase')?.value || '';
  const foco = document.getElementById('ef-cv-sopro-foco')?.value || '';
  const inten = document.getElementById('ef-cv-sopro-int')?.value || '';
  const irrad = document.getElementById('ef-cv-sopro-irrad')?.value || '';
  return [fase, foco, inten ? `intensidade ${inten}` : '', irrad].filter(Boolean).join(', ');
}

function efAddCardioMurmur() {
  const phrase = efReadCurrentMurmurString();
  if (phrase && !efState.cardioMurmurs.includes(phrase)) {
    efState.cardioMurmurs.push(phrase);
  }
  efState.single.cv_sopro_status = 'com sopro audível';
  efSyncChipUI();
  efGenerateTexts();
}

function efRemoveCardioMurmur(idx) {
  efState.cardioMurmurs.splice(idx, 1);
  efSyncChipUI();
  efGenerateTexts();
}

function efRenderCardioMurmursList() {
  const box = document.getElementById('ef-cv-sopros-list');
  if (!box) return;
  if (efState.cardioMurmurs.length === 0) {
    box.innerHTML = '';
    return;
  }
  box.innerHTML = efState.cardioMurmurs.map((item, idx) => `
    <span class="ef-added-tag">
      <span>${escapeSearchHtml(item)}</span>
      <button type="button" onclick="efRemoveCardioMurmur(${idx})" aria-label="Remover sopro">✕</button>
    </span>
  `).join('');
}

function efBuildCardiovascularText() {
  const s = efState.single;
  const isCompact = efIsCompactStyle();
  const items = [];

  if (s.cv_precordio) items.push(s.cv_precordio);

  const ictusLocal = (document.getElementById('ef-cv-ictus-local')?.value || '').trim();
  const ictusExt = (document.getElementById('ef-cv-ictus-ext')?.value || '').trim();
  if (ictusLocal || ictusExt) {
    items.push([ictusLocal, ictusExt].filter(Boolean).join(', '));
  }

  if (s.cv_fremito) {
    const fremFoco = (document.getElementById('ef-cv-fremito-foco')?.value || '').trim();
    items.push(fremFoco ? `${s.cv_fremito} (${fremFoco})` : s.cv_fremito);
  }

  const ritmo = document.getElementById('ef-cv-ritmo')?.value || '';
  const tempos = document.getElementById('ef-cv-tempos')?.value || '';
  const bulhas = document.getElementById('ef-cv-bulhas')?.value || '';
  const desdob = document.getElementById('ef-cv-desdob')?.value || '';

  if (ritmo || tempos || bulhas) {
    if (isCompact && ritmo === 'regular' && tempos === '2T' && bulhas === 'BNF') {
      items.push('RCR em 2T BNF');
    } else {
      const rTxt = ritmo ? (ritmo === 'regular' ? 'ritmo cardíaco regular' : (ritmo === 'irregular' ? 'ritmo cardíaco irregular' : `ritmo ${ritmo}`)) : '';
      const tTxt = tempos ? `em ${tempos}` : '';
      const bTxt = bulhas === 'BNF' ? 'bulhas normofonéticas' : (bulhas ? `bulhas ${bulhas}` : '');
      items.push([rTxt, tTxt, bTxt].filter(Boolean).join(', '));
    }
  }
  if (desdob) items.push(desdob);

  if (s.cv_sopro_status === 'com sopro audível') {
    if (efState.cardioMurmurs.length > 0) {
      items.push(...efState.cardioMurmurs);
    } else {
      const curSopro = efReadCurrentMurmurString();
      if (curSopro) items.push(curSopro);
    }
  } else if (s.cv_sopro_status === 'sem sopros audíveis') {
    items.push(isCompact ? 's/ sopros' : 'sem sopros audíveis');
  }

  if (s.cv_pulsos) {
    const pObs = (document.getElementById('ef-cv-pulsos-obs')?.value || '').trim();
    items.push(pObs ? `${s.cv_pulsos} (${pObs})` : s.cv_pulsos);
  }
  if (s.cv_tec) items.push(s.cv_tec);

  const cvObs = (document.getElementById('ef-cv-obs')?.value || '').trim();
  if (cvObs) items.push(cvObs);

  if (items.length === 0) return '';
  return isCompact
    ? `ACV: ${items.join(', ')}.`
    : `Aparelho Cardiovascular: ${items.join(', ')}.`;
}

function efBuildAbdomeText() {
  const s = efState.single;
  const m = efState.multi;
  const isCompact = efIsCompactStyle();
  const items = [];

  if (s.abd_forma) items.push(s.abd_forma);
  if (Array.isArray(m.abd_inspecao_det) && m.abd_inspecao_det.length > 0) items.push(...m.abd_inspecao_det);
  const cic = document.getElementById('ef-abd-cicatriz-sel')?.value || '';
  if (cic) items.push(cic);

  const rha = document.getElementById('ef-abd-rha-sel')?.value || '';
  if (rha) {
    items.push(isCompact && rha.includes('presentes e normoativos') ? 'RHA+' : rha);
  }
  if (s.abd_sopros) items.push(s.abd_sopros);

  if (Array.isArray(m.abd_percussao) && m.abd_percussao.length > 0) items.push(...m.abd_percussao);
  const hepaCm = efReadNum('ef-abd-hepa-cm');
  if (hepaCm !== null) items.push(`hepatimetria de ${efFormatNum(hepaCm, Number.isInteger(hepaCm) ? 0 : 1)} cm na LHC`);
  const traube = document.getElementById('ef-abd-traube-sel')?.value || '';
  if (traube) items.push(traube);

  if (s.abd_palp_tensao) {
    let palpStr = s.abd_palp_tensao;
    if (Array.isArray(m.abd_dor_regiao) && m.abd_dor_regiao.length > 0) {
      palpStr += ` em ${m.abd_dor_regiao.join(', ')}`;
    }
    items.push(palpStr);
  } else if (Array.isArray(m.abd_dor_regiao) && m.abd_dor_regiao.length > 0) {
    items.push(`dor à palpação em ${m.abd_dor_regiao.join(', ')}`);
  }

  if (Array.isArray(m.abd_visc) && m.abd_visc.length > 0) items.push(...m.abd_visc);
  const figObs = (document.getElementById('ef-abd-figado-obs')?.value || '').trim();
  const bacObs = (document.getElementById('ef-abd-baco-obs')?.value || '').trim();
  const masObs = (document.getElementById('ef-abd-massa-obs')?.value || '').trim();
  if (figObs) items.push(`fígado palpável (${figObs})`);
  if (bacObs) items.push(`baço palpável (${bacObs})`);
  if (masObs) items.push(`massa abdominal (${masObs})`);

  items.push(...efBuildManeuverList(EF_SECTION_MANEUVERS.abdome));

  const abdObs = (document.getElementById('ef-abd-obs')?.value || '').trim();
  if (abdObs) items.push(abdObs);

  if (items.length === 0) return '';
  return isCompact
    ? `Abdome: ${items.join(', ')}.`
    : `Abdome: ${items.join(', ')}.`;
}

function efBuildNeurologicoText() {
  const s = efState.single;
  const m = efState.multi;
  const isCompact = efIsCompactStyle();
  const items = [];

  const ao = efReadNum('ef-neuro-ao');
  const rv = efReadNum('ef-neuro-rv');
  const rm = efReadNum('ef-neuro-rm');
  if (ao !== null && rv !== null && rm !== null) {
    items.push(`Escala de Coma de Glasgow ${ao + rv + rm}/15 (AO${ao} RV${rv} RM${rm})`);
  }
  if (s.neuro_orient) items.push(s.neuro_orient);
  if (s.neuro_ling) items.push(s.neuro_ling);

  if (s.neuro_pares_status === 'pares cranianos (I ao XII) clinicamente preservados e simétricos') {
    items.push(s.neuro_pares_status);
  } else if (Array.isArray(m.neuro_pares_alt) && m.neuro_pares_alt.length > 0) {
    items.push(`alteração em pares cranianos: ${m.neuro_pares_alt.join(', ')}`);
  } else if (s.neuro_pares_status) {
    items.push(s.neuro_pares_status);
  }
  const paresObs = (document.getElementById('ef-neuro-pares-obs')?.value || '').trim();
  if (paresObs) items.push(paresObs);

  const msd = document.getElementById('ef-neuro-mrc-msd')?.value || '';
  const mse = document.getElementById('ef-neuro-mrc-mse')?.value || '';
  const mid = document.getElementById('ef-neuro-mrc-mid')?.value || '';
  const mie = document.getElementById('ef-neuro-mrc-mie')?.value || '';
  const hasMrcDetail = msd || mse || mid || mie;
  if (s.neuro_forca_global && s.neuro_forca_global !== 'déficit motor focal' && !hasMrcDetail) {
    items.push(s.neuro_forca_global);
  } else if (hasMrcDetail) {
    const mrcParts = [
      msd ? `MSD ${msd}` : '',
      mse ? `MSE ${mse}` : '',
      mid ? `MID ${mid}` : '',
      mie ? `MIE ${mie}` : ''
    ].filter(Boolean);
    items.push(`força muscular (MRC): ${mrcParts.join(', ')}`);
  } else if (s.neuro_forca_global === 'déficit motor focal') {
    items.push('déficit motor focal');
  }

  if (Array.isArray(m.neuro_tonus) && m.neuro_tonus.length > 0) items.push(...m.neuro_tonus);
  if (s.neuro_rot) items.push(s.neuro_rot);
  if (s.neuro_babinski) items.push(s.neuro_babinski);

  if (Array.isArray(m.neuro_sens) && m.neuro_sens.length > 0) {
    const sensObs = (document.getElementById('ef-neuro-sens-obs')?.value || '').trim();
    const sTxt = m.neuro_sens.join(', ');
    items.push(sensObs ? `${sTxt} (${sensObs})` : sTxt);
  }
  if (Array.isArray(m.neuro_coord) && m.neuro_coord.length > 0) items.push(...m.neuro_coord);
  const marcha = document.getElementById('ef-neuro-marcha-sel')?.value || '';
  if (marcha) items.push(marcha);

  items.push(...efBuildManeuverList(EF_SECTION_MANEUVERS.neuro));

  const nObs = (document.getElementById('ef-neuro-obs')?.value || '').trim();
  if (nObs) items.push(nObs);

  if (items.length === 0) return '';
  return isCompact
    ? `Neuro: ${items.join('; ')}.`
    : `Sistema Neurológico: ${items.join('; ')}.`;
}

function efBuildExtremidadesText() {
  const m = efState.multi;
  const isCompact = efIsCompactStyle();
  const items = [];

  if (Array.isArray(m.ext_art) && m.ext_art.length > 0) items.push(...m.ext_art);
  const artObs = (document.getElementById('ef-ext-art-obs')?.value || '').trim();
  if (artObs) items.push(artObs);
  if (Array.isArray(m.ext_coluna) && m.ext_coluna.length > 0) items.push(...m.ext_coluna);
  if (Array.isArray(m.ext_vasc_perf) && m.ext_vasc_perf.length > 0) items.push(...m.ext_vasc_perf);

  const edemaCruz = document.getElementById('ef-ext-edema-cruz')?.value || '';
  if (Array.isArray(m.ext_panturrilha) && m.ext_panturrilha.length > 0) {
    m.ext_panturrilha.forEach(txt => {
      if (txt.startsWith('edema') && edemaCruz) {
        items.push(`${txt} (${efFormatCross(edemaCruz)})`);
      } else {
        items.push(txt);
      }
    });
  } else if (edemaCruz) {
    items.push(`edema de MMII (${efFormatCross(edemaCruz)})`);
  }

  items.push(...efBuildManeuverList(EF_SECTION_MANEUVERS.extrem));

  const extObs = (document.getElementById('ef-ext-obs')?.value || '').trim();
  if (extObs) items.push(extObs);

  if (Array.isArray(m.ext_comp) && m.ext_comp.length > 0) items.push(...m.ext_comp);
  const compObs = (document.getElementById('ef-ext-comp-obs')?.value || '').trim();
  if (compObs) items.push(compObs);

  if (items.length === 0) return '';
  return isCompact
    ? `Extremidades/MSSO: ${items.join(', ')}.`
    : `Extremidades & Osteoarticular: ${items.join(', ')}.`;
}

function efBuildAllSectionsMap() {
  return {
    vitals: efBuildVitalsText(),
    ecto: efBuildEctoText(),
    cabeca: efBuildCabecaPescocoText(),
    resp: efBuildRespiratorioText(),
    cardio: efBuildCardiovascularText(),
    abdome: efBuildAbdomeText(),
    neuro: efBuildNeurologicoText(),
    extrem: efBuildExtremidadesText()
  };
}

function efGenerateTexts() {
  efRefreshCrossLabels();
  efUpdateNeuroGlasgowPill();
  const map = efBuildAllSectionsMap();

  const vitalsPreview = document.getElementById('ef-vitais-preview');
  if (vitalsPreview) vitalsPreview.value = map.vitals;

  const mapPreviews = {
    cabeca: 'ef-preview-cabeca',
    resp: 'ef-preview-resp',
    cardio: 'ef-preview-cardio',
    abdome: 'ef-preview-abdome',
    neuro: 'ef-preview-neuro',
    extrem: 'ef-preview-extrem'
  };
  Object.entries(mapPreviews).forEach(([key, elId]) => {
    const el = document.getElementById(elId);
    if (el) el.value = map[key] || '';
  });

  const combined = [
    map.vitals,
    map.ecto,
    map.cabeca,
    map.resp,
    map.cardio,
    map.abdome,
    map.neuro,
    map.extrem
  ].filter(Boolean).join('\n\n');

  document.querySelectorAll('.ef-full-output-textarea').forEach(ta => {
    ta.value = combined;
  });
}

function efToggleManeuverHelp(btn) {
  if (!btn) return;
  const card = btn.closest('.ef-maneuver-card');
  if (!card) return;
  const pop = card.querySelector('.ef-help-popover');
  if (!pop) return;
  const isHidden = pop.hidden;
  pop.hidden = !isHidden;
  btn.setAttribute('aria-expanded', String(isHidden));
  btn.classList.toggle('active', isHidden);
}

function efApplyNormalVitals(silent = false) {
  const presets = {
    'ef-pas-min': '110',
    'ef-pas-max': '120',
    'ef-pad-min': '70',
    'ef-pad-max': '80',
    'ef-tax-min': '36.2',
    'ef-tax-max': '36.8',
    'ef-fc-min': '68',
    'ef-fc-max': '84',
    'ef-fr-min': '14',
    'ef-fr-max': '18',
    'ef-spo2-min': '96',
    'ef-spo2-max': '99',
    'ef-eva-min': '0',
    'ef-eva-max': '0',
    'ef-hgt-min': '88',
    'ef-hgt-max': '106'
  };
  Object.entries(presets).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  });
  const pulso = document.getElementById('ef-pulso-caract');
  if (pulso) pulso.value = 'pulsos rítmicos, cheios e simétricos';
  const sup = document.getElementById('ef-spo2-sup');
  if (sup) sup.value = 'em ar ambiente';
  const afebrilBtn = document.getElementById('ef-tax-afebril-btn');
  if (afebrilBtn) {
    afebrilBtn.setAttribute('data-afebril', 'true');
    afebrilBtn.classList.add('active');
  }
  if (!silent) {
    efGenerateTexts();
    showClinicalToast('⚡ Sinais vitais normais preenchidos!');
  }
}

function efResetVitals(silent = false) {
  const ids = [
    'ef-pas-min', 'ef-pas-max', 'ef-pad-min', 'ef-pad-max',
    'ef-tax-min', 'ef-tax-max', 'ef-fc-min', 'ef-fc-max',
    'ef-fr-min', 'ef-fr-max', 'ef-spo2-min', 'ef-spo2-max',
    'ef-spo2-flow', 'ef-eva-min', 'ef-eva-max', 'ef-hgt-min', 'ef-hgt-max',
    'ef-peso', 'ef-altura', 'ef-diurese', 'ef-vitais-obs'
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  ['ef-pa-pos', 'ef-pulso-caract'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const sup = document.getElementById('ef-spo2-sup');
  if (sup) sup.value = 'em ar ambiente';
  const afebrilBtn = document.getElementById('ef-tax-afebril-btn');
  if (afebrilBtn) {
    afebrilBtn.setAttribute('data-afebril', 'false');
    afebrilBtn.classList.remove('active');
  }
  if (!silent) efGenerateTexts();
}

function efApplyNormalEctoscopia(silent = false) {
  Object.assign(efState.single, {
    estado_geral: 'BEG',
    consciencia: 'LOTE',
    cooperacao: 'cooperativo e contactuante',
    atitude: 'ativo e indiferente no leito',
    facies: 'atípica',
    coloracao: 'corado',
    hidratacao: 'hidratado',
    ictericia: 'anictérico',
    cianose: 'acianótico',
    temperatura_toque: 'afebril ao toque',
    respiratorio: 'eupneico em ar ambiente, sem esforço respiratório',
    perfusao: 'bem perfundido (TEC < 3s), extremidades aquecidas',
    edema: 'sem edemas (MMII livres, panturrilhas livres e indolores)',
    nutricional: 'eutrófico',
    biotipo: 'normolíneo',
    linfonodos: 'sem linfonodomegalias palpáveis'
  });
  Object.assign(efState.multi, {
    hidratacao_sinais: [],
    esforco_sinais: [],
    edema_local: [],
    pele: ['pele íntegra, turgor e elasticidade preservados', 'sem lesões elementares ou petéquias'],
    dispositivos: []
  });
  const gEl = document.getElementById('ef-glasgow');
  if (gEl) gEl.value = '15';
  const gBtn = document.getElementById('ef-glasgow-15-btn');
  if (gBtn) gBtn.classList.add('active');
  ['ef-pele-obs', 'ef-linf-obs', 'ef-ecto-obs', 'ef-kramer-select'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  if (!silent) {
    efSyncChipUI();
    efGenerateTexts();
    showClinicalToast('⚡ Ectoscopia normal preenchida!');
  }
}

function efResetEctoscopia(silent = false) {
  const ectoSingles = [
    'estado_geral', 'consciencia', 'cooperacao', 'atitude', 'facies',
    'coloracao', 'hidratacao', 'ictericia', 'ictericia_local', 'cianose',
    'cianose_tipo', 'temperatura_toque', 'respiratorio', 'perfusao', 'edema',
    'edema_caract', 'nutricional', 'biotipo', 'linfonodos'
  ];
  ectoSingles.forEach(k => delete efState.single[k]);
  Object.assign(efState.multi, {
    hidratacao_sinais: [],
    esforco_sinais: [],
    edema_local: [],
    pele: [],
    dispositivos: []
  });
  efState.crosses = {
    coloracao: '1',
    hidratacao: '1',
    ictericia: '1',
    cianose: '1',
    respiratorio: '1',
    edema: '1'
  };
  ['ef-glasgow', 'ef-pele-obs', 'ef-linf-obs', 'ef-ecto-obs', 'ef-kramer-select'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const gBtn = document.getElementById('ef-glasgow-15-btn');
  if (gBtn) gBtn.classList.remove('active');
  if (!silent) {
    efSyncChipUI();
    efGenerateTexts();
  }
}

function efApplyNormalSection(key, silent = false) {
  if (key === 'vitals') {
    efApplyNormalVitals(silent);
    return;
  }
  if (key === 'ecto') {
    efApplyNormalEctoscopia(silent);
    return;
  }

  efResetSection(key, true);

  if (key === 'cabeca') {
    Object.assign(efState.single, {
      cp_cranio: 'crânio normocefálico, sem abaulamentos, retrações ou lesões em couro cabeludo; seios da face indolores à digito-pressão',
      cp_pupilas: 'pupilas isocóricas e fotorreagentes (PIRF)',
      cp_dentes: 'dentes em bom estado de conservação',
      cp_traqueia: 'pescoço cilíndrico, simétrico, com mobilidade livre e traqueia centrada',
      cp_linfonodos: 'ausência de linfonodomegalias cervicais ou supraclaviculares palpáveis'
    });
    Object.assign(efState.multi, {
      cp_conjuntivas: ['conjuntivas normocoradas e úmidas', 'escleras anictéricas'],
      cp_moe: ['movimentação ocular extrínseca (MOE) preservada, sem nistagmo ou estrabismo'],
      cp_oroscopia: ['mucosa oral hidratada e corada, sem lesões', 'orofaringe e tonsilas palatinas sem hiperemia ou exsudato'],
      cp_tireoide: ['tireoide tópica, de tamanho e consistência fibroelástica normais, móvel à deglutição, indolor e sem nódulos palpáveis'],
      cp_jugular: ['sem turgência jugular patológica a 45° (TJP ausente)', 'pulsos carotídeos simétricos, cheios e sem sopros']
    });
  } else if (key === 'resp') {
    Object.assign(efState.single, {
      resp_forma: 'tórax atípico e simétrico',
      resp_expans: 'expansibilidade torácica preservada e simétrica bilateralmente',
      resp_ftv: 'frêmito toracovocal (FTV) normodistribuído bilateralmente',
      resp_perc: 'som claro pulmonar à percussão em todos os campos',
      resp_mv: 'murmúrio vesicular presente e bem distribuído bilateralmente',
      resp_ra_status: 'sem ruídos adventícios'
    });
    efState.multi.resp_tiragens = ['sem tiragens ou uso de musculatura acessória'];
  } else if (key === 'cardio') {
    Object.assign(efState.single, {
      cv_precordio: 'precórdio calmo, sem abaulamentos ou retrações',
      cv_fremito: 'ausência de frêmitos cardiovasculares',
      cv_sopro_status: 'sem sopros audíveis',
      cv_pulsos: 'pulsos arteriais periféricos presentes, cheios e simétricos nos 4 membros',
      cv_tec: 'tempo de enchimento capilar (TEC) < 3 segundos'
    });
    const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
    setVal('ef-cv-ictus-local', 'ictus cordis palpável no 5º EICE na linha hemiclavicular esquerda');
    setVal('ef-cv-ictus-ext', 'extensão normal (1–2 polpas digitais), normocinético');
    setVal('ef-cv-ritmo', 'regular');
    setVal('ef-cv-tempos', '2T');
    setVal('ef-cv-bulhas', 'BNF');
    setVal('ef-cv-desdob', 'sem desdobramentos patológicos ou atrito');
  } else if (key === 'abdome') {
    Object.assign(efState.single, {
      abd_forma: 'abdome plano',
      abd_sopros: 'ausência de sopros vasculares abdominais',
      abd_palp_tensao: 'flácido, depressível e indolor à palpação superficial e profunda'
    });
    Object.assign(efState.multi, {
      abd_inspecao_det: ['cicatriz umbilical introrsa e centrada', 'sem cicatrizes cirúrgicas, abaulamentos ou circulação colateral'],
      abd_percussao: ['timpanismo fisiológico difuso', 'sem sinais de ascite à percussão'],
      abd_visc: ['sem massas ou visceromegalias palpáveis']
    });
    const rha = document.getElementById('ef-abd-rha-sel');
    if (rha) rha.value = 'ruídos hidroaéreos presentes e normoativos';
    const traube = document.getElementById('ef-abd-traube-sel');
    if (traube) traube.value = 'espaço de Traube livre';
    ['blumberg', 'murphy', 'rovsing', 'psoas', 'obturador', 'giordano'].forEach(mKey => {
      efState.maneuvers[mKey] = 'neg';
    });
  } else if (key === 'neuro') {
    Object.assign(efState.single, {
      neuro_orient: 'lúcido e orientado autopsíquica e alopsiquicamente (tempo e espaço)',
      neuro_ling: 'linguagem preservada, fluente e coerente',
      neuro_pares_status: 'pares cranianos (I ao XII) clinicamente preservados e simétricos',
      neuro_forca_global: 'força muscular preservada (grau 5/5 na escala MRC) global e simétrica nos 4 membros',
      neuro_rot: 'reflexos osteotendíneos normoativos e simétricos (2+/4+)',
      neuro_babinski: 'reflexo cutâneo-plantar em flexão bilateral (Sinal de Babinski ausente)'
    });
    Object.assign(efState.multi, {
      neuro_tonus: ['normotônico e normotrófico'],
      neuro_sens: ['sensibilidade superficial (tátil, térmica e dolorosa) e profunda (propriocepção/palestesia) preservadas e simétricas'],
      neuro_coord: ['provas índex-nariz e calcanhar-joelho sem dismetria; eudiadococinesia presente']
    });
    const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
    setVal('ef-neuro-ao', '4');
    setVal('ef-neuro-rv', '5');
    setVal('ef-neuro-rm', '6');
    setVal('ef-neuro-marcha-sel', 'equilíbrio estático preservado (Romberg negativo) e marcha eubásica / atípica');
    ['rigidez_nuca', 'kernig', 'brudzinski'].forEach(mKey => { efState.maneuvers[mKey] = 'neg'; });
  } else if (key === 'extrem') {
    Object.assign(efState.multi, {
      ext_art: ['articulações simétricas, livres, móveis e sem sinais flogísticos', 'amplitude de movimento (ADM) ativa e passiva preservada'],
      ext_coluna: ['coluna vertebral alinhada e indolor à palpação dos processos espinhosos e musculatura paravertebral'],
      ext_vasc_perf: ['extremidades bem perfundidas (TEC < 3s) e aquecidas', 'pulsos pediosos e tibiais posteriores presentes, amplos e simétricos'],
      ext_panturrilha: ['panturrilhas livres, moles e indolores (sem empastamento)', 'MMII sem edemas']
    });
    ['homans', 'lasegue'].forEach(mKey => { efState.maneuvers[mKey] = 'neg'; });
  }

  if (!silent) {
    efSyncChipUI();
    efGenerateTexts();
    showClinicalToast('⚡ Padrão normal da seção preenchido!');
  }
}

function efResetSection(key, silent = false) {
  if (key === 'vitals') { efResetVitals(silent); return; }
  if (key === 'ecto') { efResetEctoscopia(silent); return; }

  (EF_SECTION_SINGLE_GROUPS[key] || []).forEach(g => delete efState.single[g]);
  (EF_SECTION_MULTI_GROUPS[key] || []).forEach(g => { efState.multi[g] = []; });
  (EF_SECTION_MANEUVERS[key] || []).forEach(mk => { efState.maneuvers[mk] = ''; });

  if (key === 'cabeca') {
    ['ef-cp-pupilas-det', 'ef-cp-olhos-cruz', 'ef-cp-escleras-cruz', 'ef-cp-tireoide-obs', 'ef-cp-linf-obs', 'ef-cp-obs'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
  } else if (key === 'resp') {
    efState.respFindings = [];
    ['ef-resp-ftv-topo', 'ef-resp-perc-topo', 'ef-resp-mv-topo', 'ef-resp-obs'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
  } else if (key === 'cardio') {
    efState.cardioMurmurs = [];
    ['ef-cv-ictus-local', 'ef-cv-ictus-ext', 'ef-cv-fremito-foco', 'ef-cv-ritmo', 'ef-cv-tempos', 'ef-cv-bulhas', 'ef-cv-desdob', 'ef-cv-pulsos-obs', 'ef-cv-obs'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
  } else if (key === 'abdome') {
    ['ef-abd-cicatriz-sel', 'ef-abd-rha-sel', 'ef-abd-traube-sel', 'ef-abd-hepa-cm', 'ef-abd-figado-obs', 'ef-abd-baco-obs', 'ef-abd-massa-obs', 'ef-abd-obs'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
  } else if (key === 'neuro') {
    ['ef-neuro-ao', 'ef-neuro-rv', 'ef-neuro-rm', 'ef-neuro-pares-obs', 'ef-neuro-mrc-msd', 'ef-neuro-mrc-mse', 'ef-neuro-mrc-mid', 'ef-neuro-mrc-mie', 'ef-neuro-sens-obs', 'ef-neuro-marcha-sel', 'ef-neuro-obs'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
  } else if (key === 'extrem') {
    ['ef-ext-art-obs', 'ef-ext-edema-cruz', 'ef-ext-comp-obs', 'ef-ext-obs'].forEach(id => {
      const el = document.getElementById(id); if (el) el.value = '';
    });
  }

  if (!silent) {
    efSyncChipUI();
    efGenerateTexts();
  }
}

function efApplyAllNormal() {
  ['vitals', 'ecto', 'cabeca', 'resp', 'cardio', 'abdome', 'neuro', 'extrem'].forEach(k => {
    efApplyNormalSection(k, true);
  });
  efSyncChipUI();
  efGenerateTexts();
  showClinicalToast('🌟 Exame Físico completo normal preenchido em todos os sistemas!');
}

async function efCopyText(mode = 'both') {
  const map = efBuildAllSectionsMap();
  let textToCopy = '';
  let toastLabel = 'Exame Físico copiado para a Anamnese!';

  if (mode === 'vitals') {
    textToCopy = (document.getElementById('ef-vitais-preview')?.value || '').trim() || map.vitals;
    toastLabel = 'Sinais Vitais copiados para a Anamnese!';
  } else if (mode === 'ecto') {
    textToCopy = map.ecto;
    toastLabel = 'Ectoscopia copiada para a Anamnese!';
  } else if (mode === 'cabeca') {
    textToCopy = (document.getElementById('ef-preview-cabeca')?.value || '').trim() || map.cabeca;
    toastLabel = 'Cabeça & Pescoço copiado para a Anamnese!';
  } else if (mode === 'resp') {
    textToCopy = (document.getElementById('ef-preview-resp')?.value || '').trim() || map.resp;
    toastLabel = 'Aparelho Respiratório copiado para a Anamnese!';
  } else if (mode === 'cardio') {
    textToCopy = (document.getElementById('ef-preview-cardio')?.value || '').trim() || map.cardio;
    toastLabel = 'Aparelho Cardiovascular copiado para a Anamnese!';
  } else if (mode === 'abdome') {
    textToCopy = (document.getElementById('ef-preview-abdome')?.value || '').trim() || map.abdome;
    toastLabel = 'Abdome copiado para a Anamnese!';
  } else if (mode === 'neuro') {
    textToCopy = (document.getElementById('ef-preview-neuro')?.value || '').trim() || map.neuro;
    toastLabel = 'Sistema Neurológico copiado para a Anamnese!';
  } else if (mode === 'extrem') {
    textToCopy = (document.getElementById('ef-preview-extrem')?.value || '').trim() || map.extrem;
    toastLabel = 'Extremidades/Osteoarticular copiado para a Anamnese!';
  } else {
    const activeFullTa = document.querySelector('.content-section.active .ef-full-output-textarea');
    textToCopy = (activeFullTa?.value || '').trim() ||
      (document.getElementById('ef-generated-text')?.value || '').trim() ||
      [map.vitals, map.ecto, map.cabeca, map.resp, map.cardio, map.abdome, map.neuro, map.extrem].filter(Boolean).join('\n\n');
    toastLabel = 'Exame Físico completo copiado para a Anamnese!';
  }

  if (!textToCopy) {
    showClinicalToast('Preencha ou selecione os achados antes de copiar.');
    return;
  }

  try {
    await navigator.clipboard.writeText(textToCopy);
    showClinicalToast(`📋 ${toastLabel}`);
  } catch (err) {
    showClinicalToast('Não foi possível copiar automaticamente.');
  }
}

function initExameFisicoBuilder(rootEl) {
  if (!rootEl || rootEl.dataset.efBound === 'true') return;
  rootEl.dataset.efBound = 'true';

  rootEl.querySelectorAll('.ef-input, .ef-select').forEach(el => {
    if (el.id === 'ef-vitais-preview' || el.classList.contains('ef-full-output-textarea') || (el.id && el.id.startsWith('ef-preview-'))) return;
    const evt = el.tagName === 'SELECT' ? 'change' : 'input';
    el.addEventListener(evt, () => {
      if (el.classList.contains('ef-sync-text-style')) {
        rootEl.querySelectorAll('.ef-sync-text-style').forEach(s => { if (s !== el) s.value = el.value; });
      }
      if (el.classList.contains('ef-sync-cross-format')) {
        rootEl.querySelectorAll('.ef-sync-cross-format').forEach(s => { if (s !== el) s.value = el.value; });
      }
      efGenerateTexts();
    });
  });

  const afebrilBtn = rootEl.querySelector('#ef-tax-afebril-btn');
  if (afebrilBtn) {
    afebrilBtn.addEventListener('click', () => {
      const next = afebrilBtn.getAttribute('data-afebril') !== 'true';
      afebrilBtn.setAttribute('data-afebril', String(next));
      afebrilBtn.classList.toggle('active', next);
      efGenerateTexts();
    });
  }

  const glasgowInput = rootEl.querySelector('#ef-glasgow');
  const glasgow15Btn = rootEl.querySelector('#ef-glasgow-15-btn');
  if (glasgow15Btn && glasgowInput) {
    glasgow15Btn.addEventListener('click', () => {
      if (glasgowInput.value === '15') {
        glasgowInput.value = '';
        glasgow15Btn.classList.remove('active');
      } else {
        glasgowInput.value = '15';
        glasgow15Btn.classList.add('active');
      }
      efGenerateTexts();
    });
    glasgowInput.addEventListener('input', () => {
      glasgow15Btn.classList.toggle('active', String(glasgowInput.value).trim() === '15');
    });
  }

  rootEl.querySelectorAll('.ef-chip[data-group]').forEach(chip => {
    chip.addEventListener('click', () => {
      const group = chip.getAttribute('data-group');
      const val = chip.getAttribute('data-val');
      const isMulti = chip.getAttribute('data-multi') === 'true';

      if (isMulti) {
        if (!Array.isArray(efState.multi[group])) efState.multi[group] = [];
        const idx = efState.multi[group].indexOf(val);
        if (idx >= 0) {
          efState.multi[group].splice(idx, 1);
        } else {
          efState.multi[group].push(val);
        }
      } else {
        if (efState.single[group] === val) {
          delete efState.single[group];
        } else {
          efState.single[group] = val;
          if (chip.getAttribute('data-needs-cross') === 'true' && !efState.crosses[group]) {
            efState.crosses[group] = '1';
          }
          if (group === 'hidratacao' && val === 'hidratado') {
            efState.multi.hidratacao_sinais = [];
          } else if (group === 'ictericia' && val === 'anictérico') {
            delete efState.single.ictericia_local;
            const kSel = document.getElementById('ef-kramer-select');
            if (kSel) kSel.value = '';
          } else if (group === 'cianose' && val === 'acianótico') {
            delete efState.single.cianose_tipo;
          } else if (group === 'respiratorio' && val !== 'dispneico') {
            efState.multi.esforco_sinais = [];
          } else if (group === 'edema' && val !== 'edema presente') {
            efState.multi.edema_local = [];
            delete efState.single.edema_caract;
          } else if (group === 'cv_sopro_status' && val === 'sem sopros audíveis') {
            efState.cardioMurmurs = [];
          } else if (group === 'resp_ra_status' && val === 'sem ruídos adventícios') {
            efState.respFindings = [];
          } else if (group === 'neuro_pares_status' && val !== 'alteração em pares cranianos') {
            efState.multi.neuro_pares_alt = [];
          }
        }
      }

      efSyncChipUI();
      efGenerateTexts();
    });
  });

  rootEl.querySelectorAll('.ef-cross-btn[data-group]').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-group');
      const cross = btn.getAttribute('data-cross');
      efState.crosses[group] = cross;
      efSyncChipUI();
      efGenerateTexts();
    });
  });

  rootEl.querySelectorAll('.ef-maneuver-card[data-maneuver] .ef-mbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.ef-maneuver-card');
      if (!card) return;
      const key = card.getAttribute('data-maneuver');
      const mval = btn.getAttribute('data-mval');
      efState.maneuvers[key] = (efState.maneuvers[key] === mval) ? '' : mval;
      efSyncChipUI();
      efGenerateTexts();
    });
  });

  efSyncChipUI();
  efGenerateTexts();
}





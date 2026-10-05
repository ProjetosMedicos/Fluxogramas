// =================================================================
// MODAL DE BUSCA GLOBAL (COMMAND PALETTE / SPOTLIGHT)
// =================================================================
let SEARCH_INDEX = [];
let currentSearchFilter = 'all';
let currentResults = [];
let activeResultIndex = -1;

function normalizeSearchText(text) {
  return (text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function buildSearchIndex() {
  if (SEARCH_INDEX.length > 0) return;
  const index = [];

  // 1. Módulos Clínicos (86 módulos)
  if (typeof MODULE_META !== 'undefined') {
    Object.keys(MODULE_META).forEach(mId => {
      const meta = MODULE_META[mId];
      const isPed = mId.startsWith('ped-') || meta.specialty === 'pediatria';
      index.push({
        type: 'module',
        id: mId,
        moduleId: mId,
        sectionId: meta.firstSection,
        title: meta.name,
        subtitle: meta.sub || (isPed ? 'Pediatria SBP 2024 (6ª Edição)' : 'Ginecologia FEBRASGO'),
        icon: meta.icon || (isPed ? '👶' : '🩺'),
        specialty: isPed ? 'pediatria' : 'ginecologia',
        badge: isPed ? 'Pediatria' : 'Ginecologia',
        badgeClass: isPed ? 'badge-pediatria' : '',
        isFlowchart: false,
        searchString: normalizeSearchText(`${meta.name} ${meta.sub || ''} ${meta.ref || ''} ${isPed ? 'pediatria sbp crianca' : 'ginecologia febrasgo'}`)
      });
    });
  }

  // 2. Seções Clínicas (684 seções)
  const seenSectionIds = new Set();
  document.querySelectorAll('ul[id^="nav-group-"]').forEach(group => {
    const mId = group.id.replace('nav-group-', '');
    const meta = (typeof MODULE_META !== 'undefined' && MODULE_META[mId]) || {};
    const isPed = mId.startsWith('ped-') || meta.specialty === 'pediatria';

    group.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const sId = href.replace(/^#/, '');
      if (!sId || seenSectionIds.has(sId)) return;
      seenSectionIds.add(sId);

      const secEl = document.getElementById(sId);
      const titleSpan = link.querySelector('span:last-child') || link;
      const navTitle = titleSpan.textContent.trim();
      const secH1 = secEl ? secEl.querySelector('h1.section-title, h1') : null;
      const secSub = secEl ? secEl.querySelector('p.section-subtitle, p') : null;
      const fullTitle = secH1 ? secH1.textContent.trim() : navTitle;
      const subtitle = secSub ? secSub.textContent.trim() : (meta.name || '');
      const isFlowchart = sId.includes('fluxograma') || sId.includes('fluxo') || (secEl && secEl.querySelector('.flowchart-img, img[src*=".svg"], .flowchart-container, .flowchart-actions'));
      const isCase = sId.includes('caso') || (secEl && secEl.querySelector('.case-box'));

      let badge = isPed ? 'Pediatria' : 'Ginecologia';
      let badgeClass = isPed ? 'badge-pediatria' : '';
      if (isFlowchart) {
        badge = 'Fluxograma';
        badgeClass = 'badge-flowchart';
      } else if (isCase) {
        badge = 'Caso Clínico';
        badgeClass = 'badge-case';
      }

      index.push({
        type: 'section',
        id: sId,
        moduleId: mId,
        sectionId: sId,
        title: fullTitle,
        subtitle: `${meta.name ? meta.name + ' • ' : ''}${subtitle}`,
        icon: isFlowchart ? '⚡' : (isCase ? '🎯' : (meta.icon || (isPed ? '👶' : '🩺'))),
        specialty: isPed ? 'pediatria' : 'ginecologia',
        badge: badge,
        badgeClass: badgeClass,
        isFlowchart: !!isFlowchart,
        isCase: !!isCase,
        searchString: normalizeSearchText(`${fullTitle} ${navTitle} ${subtitle} ${meta.name || ''} ${sId} ${isPed ? 'pediatria sbp' : 'ginecologia febrasgo'}`)
      });
    });
  });

  SEARCH_INDEX = index;
}

function openSearchModal() {
  buildSearchIndex();
  const modal = document.getElementById('command-search-modal');
  const input = document.getElementById('modal-search-input');
  if (!modal || !input) return;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  input.value = '';
  const clearBtn = document.getElementById('modal-search-clear');
  if (clearBtn) clearBtn.style.display = 'none';

  executeModalSearch('');
  setTimeout(() => {
    input.focus();
  }, 50);
}

function closeSearchModal() {
  const modal = document.getElementById('command-search-modal');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
  activeResultIndex = -1;
}

function clearModalSearch() {
  const input = document.getElementById('modal-search-input');
  const clearBtn = document.getElementById('modal-search-clear');
  if (input) {
    input.value = '';
    input.focus();
  }
  if (clearBtn) clearBtn.style.display = 'none';
  executeModalSearch('');
}

function setSearchFilter(filter) {
  currentSearchFilter = filter;
  document.querySelectorAll('.search-filter-pill').forEach(pill => {
    pill.classList.remove('active');
  });
  const targetPill = document.querySelector(`.search-filter-pill[data-filter="${filter}"]`);
  if (targetPill) targetPill.classList.add('active');

  const input = document.getElementById('modal-search-input');
  executeModalSearch(input ? input.value : '');
}

function executeModalSearch(rawQuery) {
  const query = normalizeSearchText(rawQuery);
  const clearBtn = document.getElementById('modal-search-clear');
  if (clearBtn) {
    clearBtn.style.display = rawQuery ? 'block' : 'none';
  }

  let filtered = SEARCH_INDEX;
  if (currentSearchFilter === 'pediatria') {
    filtered = filtered.filter(item => item.specialty === 'pediatria');
  } else if (currentSearchFilter === 'ginecologia') {
    filtered = filtered.filter(item => item.specialty === 'ginecologia');
  } else if (currentSearchFilter === 'fluxograma') {
    filtered = filtered.filter(item => item.isFlowchart);
  }

  if (!query) {
    currentResults = filtered.slice(0, 15);
  } else {
    const terms = query.split(/\s+/).filter(Boolean);
    const scored = [];

    filtered.forEach(item => {
      const titleNorm = normalizeSearchText(item.title);
      const matchesAll = terms.every(t => item.searchString.includes(t));
      if (!matchesAll) return;

      let score = 0;
      if (titleNorm === query) score += 120;
      else if (titleNorm.startsWith(query)) score += 60;
      else if (titleNorm.includes(query)) score += 30;

      if (item.type === 'module') score += 10;
      if (item.isFlowchart) score += 5;

      scored.push({ item, score });
    });

    scored.sort((a, b) => b.score - a.score);
    currentResults = scored.slice(0, 25).map(s => s.item);
  }

  renderSearchResults();
}

function escapeSearchHtml(text) {
  const div = document.createElement('div');
  div.textContent = text || '';
  return div.innerHTML;
}

function renderSearchResults() {
  const container = document.getElementById('modal-search-results');
  const countEl = document.getElementById('modal-search-count');
  if (!container) return;

  if (currentResults.length === 0) {
    container.innerHTML = `
      <div class="search-modal-empty">
        <span>🔍</span>
        <p>Nenhum resultado clínico encontrado para esta busca.</p>
        <p style="font-size: 0.8rem; margin-top: 6px;">Tente pesquisar por termos como "baixa estatura", "sop", "has", "diarreia", "sifilis" ou "monif".</p>
      </div>
    `;
    if (countEl) countEl.textContent = '0 resultados';
    activeResultIndex = -1;
    return;
  }

  let html = '';
  currentResults.forEach((item, idx) => {
    const activeClass = idx === 0 ? ' active' : '';
    html += `
      <div class="search-result-item${activeClass}" data-index="${idx}" onclick="selectSearchResult(${idx})">
        <span class="search-result-icon">${item.icon}</span>
        <div class="search-result-info">
          <div class="search-result-title">${escapeSearchHtml(item.title)}</div>
          <div class="search-result-subtitle">${escapeSearchHtml(item.subtitle)}</div>
        </div>
        <span class="search-result-badge ${item.badgeClass}">${item.badge}</span>
      </div>
    `;
  });

  container.innerHTML = html;
  activeResultIndex = 0;
  if (countEl) countEl.textContent = `${currentResults.length} resultado(s) disponível(is)`;
}

async function selectSearchResult(index) {
  if (index < 0 || index >= currentResults.length) return;
  const target = currentResults[index];
  if (!target) return;

  closeSearchModal();

  if (target.specialty && target.specialty !== currentSpecialty) {
    if (typeof switchSpecialty === 'function') {
      switchSpecialty(target.specialty);
    }
  }

  if (target.moduleId) {
    const curMod = currentSpecialty === 'pediatria' ? activePediatriaMod : activeGinecologiaMod;
    if (curMod !== target.moduleId && typeof switchModule === 'function') {
      await switchModule(target.moduleId);
    }
  }
  if (target.sectionId && typeof switchSection === 'function') {
    await switchSection(target.sectionId);
  }
}

function updateModalSelection() {
  const items = document.querySelectorAll('.search-result-item');
  items.forEach((el, idx) => {
    if (idx === activeResultIndex) {
      el.classList.add('active');
      el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } else {
      el.classList.remove('active');
    }
  });
}

function focusSearch() {
  openSearchModal();
}

function clearSearch() {
  clearModalSearch();
}

function handleSearch(query) {
  executeModalSearch(query);
}

// =================================================================
// MODAL DE BUSCA GLOBAL INDEXADA FULL-TEXT (COMMAND PALETTE / CTRL+K)
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
  const metaMap = (typeof MODULE_META !== 'undefined') ? MODULE_META : {};
  const secMetaMap = (typeof SECTION_SEARCH_META !== 'undefined') ? SECTION_SEARCH_META : {};
  const infoMap = (typeof MODULE_INFOGRAPHICS !== 'undefined') ? MODULE_INFOGRAPHICS : {};

  // 1. Módulos Clínicos (86 módulos)
  Object.keys(metaMap).forEach(mId => {
    const meta = metaMap[mId];
    const isPed = mId.startsWith('ped-') || meta.specialty === 'pediatria';
    // Reúne palavras-chave da primeira seção para enriquecer também o card do módulo
    const firstSecMeta = secMetaMap[meta.firstSection] || {};
    index.push({
      type: 'module',
      id: mId,
      moduleId: mId,
      sectionId: meta.firstSection,
      title: meta.name,
      subtitle: meta.sub || (isPed ? 'Pediatria SBP 2024 (6ª Edição)' : 'Ginecologia FEBRASGO'),
      icon: meta.icon || (isPed ? '👶' : '🩺'),
      specialty: isPed ? 'pediatria' : 'ginecologia',
      badge: isPed ? 'Módulo Pediatria' : 'Módulo Ginecologia',
      badgeClass: isPed ? 'badge-pediatria' : '',
      isInfographic: false,
      isFlowchart: false,
      isPrescription: false,
      isCase: false,
      rawKeywords: firstSecMeta.kw || meta.ref || '',
      searchString: normalizeSearchText(
        `${meta.name} ${meta.sub || ''} ${meta.ref || ''} ${mId} ${firstSecMeta.kw || ''} ${isPed ? 'pediatria sbp crianca lactente neonato' : 'ginecologia febrasgo mulher'}`
      )
    });
  });

  // 2. Infográficos Clínicos HD (86 pôsteres editoriais verticais — 1 por módulo)
  Object.keys(infoMap).forEach(mId => {
    const info = infoMap[mId];
    const meta = metaMap[mId] || {};
    const isPed = mId.startsWith('ped-') || info.sp === 'pediatria' || meta.specialty === 'pediatria';
    const flowSecMeta = secMetaMap[info.flowSec] || secMetaMap[info.sec] || {};
    index.push({
      type: 'infographic',
      id: `info-${mId}`,
      moduleId: mId,
      sectionId: info.sec || meta.firstSection,
      flowSectionId: info.flowSec || info.sec,
      infoSrc: info.info,
      svgSrc: info.svg,
      title: `Infográfico HD: ${meta.name || mId}`,
      subtitle: `${isPed ? 'Pediatria SBP 2024' : 'Ginecologia FEBRASGO'} • Resumo Visual Editorial em Alta Resolução`,
      icon: '📊',
      specialty: isPed ? 'pediatria' : 'ginecologia',
      badge: 'Infográfico HD',
      badgeClass: 'badge-infographic',
      isInfographic: true,
      isFlowchart: false,
      isPrescription: false,
      isCase: false,
      rawKeywords: flowSecMeta.kw || meta.sub || '',
      searchString: normalizeSearchText(
        `infografico poster resumo visual hd ${meta.name || ''} ${meta.sub || ''} ${meta.ref || ''} ${flowSecMeta.kw || ''} ${isPed ? 'pediatria sbp' : 'ginecologia febrasgo'}`
      )
    });
  });

  // 3. Seções Clínicas Completas (684 seções indexadas offline antes do lazy-fetch)
  const seenSectionIds = new Set();

  function addSectionEntry(mId, sId, navTitleFallback) {
    if (!sId || seenSectionIds.has(sId)) return;
    seenSectionIds.add(sId);

    const meta = metaMap[mId] || {};
    const sMeta = secMetaMap[sId] || {};
    const isPed = mId.startsWith('ped-') || meta.specialty === 'pediatria';

    const secEl = document.getElementById(sId);
    const domH1 = secEl ? secEl.querySelector('h1.section-title, h1') : null;
    const domSub = secEl ? secEl.querySelector('p.section-subtitle, p') : null;

    const fullTitle = sMeta.h1 || (domH1 ? domH1.textContent.trim() : '') || navTitleFallback || sId;
    const rawSub = sMeta.sub || (domSub ? domSub.textContent.trim() : '') || '';
    const subtitle = meta.name
      ? (rawSub ? `${meta.name} • ${rawSub}` : meta.name)
      : rawSub;

    const isFlowchart = !!(sMeta.flow || sId.includes('fluxograma') || sId.includes('fluxo'));
    const isCase = !!(sMeta.caso || sId.includes('caso'));
    const isPrescription = !!(sMeta.presc || sId.includes('prescricao') || sId.includes('posologia'));

    let badge = isPed ? 'Pediatria' : 'Ginecologia';
    let badgeClass = isPed ? 'badge-pediatria' : '';
    let icon = meta.icon || (isPed ? '👶' : '🩺');

    if (isFlowchart) {
      badge = 'Fluxograma';
      badgeClass = 'badge-flowchart';
      icon = '⚡';
    } else if (isPrescription) {
      badge = 'Prescrição / Conduta';
      badgeClass = 'badge-prescription';
      icon = '💊';
    } else if (isCase) {
      badge = 'Caso Clínico';
      badgeClass = 'badge-case';
      icon = '🎯';
    }

    const rawKeywords = sMeta.kw || '';

    index.push({
      type: 'section',
      id: sId,
      moduleId: mId,
      sectionId: sId,
      title: fullTitle,
      navTitle: navTitleFallback || fullTitle,
      subtitle: subtitle,
      icon: icon,
      specialty: isPed ? 'pediatria' : 'ginecologia',
      badge: badge,
      badgeClass: badgeClass,
      isInfographic: false,
      isFlowchart: isFlowchart,
      isPrescription: isPrescription,
      isCase: isCase,
      rawKeywords: rawKeywords,
      searchString: normalizeSearchText(
        `${fullTitle} ${navTitleFallback || ''} ${rawSub} ${meta.name || ''} ${sId} ${rawKeywords} ${isPed ? 'pediatria sbp' : 'ginecologia febrasgo'}`
      )
    });
  }

  // Primeiro percorre os grupos de navegação da sidebar (preserva rótulos curtos de navegação)
  document.querySelectorAll('ul[id^="nav-group-"]').forEach(group => {
    const mId = group.id.replace('nav-group-', '');
    group.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const sId = href.replace(/^#/, '');
      const titleSpan = link.querySelector('span:last-child') || link;
      addSectionEntry(mId, sId, titleSpan.textContent.trim());
    });
  });

  // Garante cobertura 100% mesmo para seções listadas apenas em ORDERED_SECTIONS
  if (typeof ORDERED_SECTIONS !== 'undefined') {
    ['ginecologia', 'pediatria'].forEach(sp => {
      (ORDERED_SECTIONS[sp] || []).forEach(sec => {
        addSectionEntry(sec.moduleId, sec.sectionId, sec.title);
      });
    });
  }

  SEARCH_INDEX = index;
}

function extractClinicalSnippet(item, terms) {
  if (!terms || terms.length === 0 || !item.rawKeywords) return '';
  const titleSubNorm = normalizeSearchText(`${item.title} ${item.subtitle}`);
  // Verifica se algum termo foi encontrado exclusivamente nos dados clínicos profundos (ou se é dose/escore)
  const phrases = item.rawKeywords.split(' • ');
  const matchedPhrases = [];

  for (let i = 0; i < phrases.length; i++) {
    const p = phrases[i].trim();
    if (!p) continue;
    const pNorm = normalizeSearchText(p);
    let hits = 0;
    for (let j = 0; j < terms.length; j++) {
      if (pNorm.includes(terms[j])) hits++;
    }
    if (hits > 0) {
      matchedPhrases.push({ text: p, hits });
    }
  }

  if (matchedPhrases.length === 0) return '';
  matchedPhrases.sort((a, b) => b.hits - a.hits);

  const best = matchedPhrases.slice(0, 2).map(m => m.text).join(' • ');
  // Evita repetir exatamente o título se não agregar contexto novo
  if (titleSubNorm.includes(normalizeSearchText(best)) && best.length < 35) {
    return '';
  }
  return best.length > 125 ? best.substring(0, 122) + '...' : best;
}

function openSearchModal(initialFilter) {
  buildSearchIndex();
  const modal = document.getElementById('command-search-modal');
  const input = document.getElementById('modal-search-input');
  if (!modal || !input) return;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  input.value = '';
  const clearBtn = document.getElementById('modal-search-clear');
  if (clearBtn) clearBtn.style.display = 'none';

  const validFilters = ['all', 'ginecologia', 'pediatria', 'infografico', 'fluxograma', 'prescricao', 'caso'];
  const activeFilter = (initialFilter && validFilters.includes(initialFilter)) ? initialFilter : 'all';

  if (activeFilter === 'ginecologia') {
    input.placeholder = 'Buscar protocolos, escores e fármacos em Ginecologia (FEBRASGO)...';
  } else if (activeFilter === 'pediatria') {
    input.placeholder = 'Buscar diretrizes, doses e triagens em Pediatria (SBP 2024)...';
  } else if (activeFilter === 'infografico') {
    input.placeholder = 'Filtrar entre os 86 Infográficos Clínicos HD...';
  } else if (activeFilter === 'prescricao') {
    input.placeholder = 'Buscar doses, posologias e condutas (ex: letrozol, adrenalina, penicilina)...';
  } else {
    input.placeholder = 'Buscar módulos, infográficos, fármacos, escores (ex: Monif, Rotterdam, Letrozol)...';
  }

  setSearchFilter(activeFilter);

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
  buildSearchIndex();
  const query = normalizeSearchText(rawQuery);
  const clearBtn = document.getElementById('modal-search-clear');
  if (clearBtn) {
    clearBtn.style.display = rawQuery ? 'block' : 'none';
  }

  let filtered = SEARCH_INDEX;
  if (currentSearchFilter === 'pediatria') {
    filtered = filtered.filter(item => item.specialty === 'pediatria' && item.type !== 'infographic');
  } else if (currentSearchFilter === 'ginecologia') {
    filtered = filtered.filter(item => item.specialty === 'ginecologia' && item.type !== 'infographic');
  } else if (currentSearchFilter === 'infografico') {
    filtered = filtered.filter(item => item.isInfographic);
  } else if (currentSearchFilter === 'fluxograma') {
    filtered = filtered.filter(item => item.isFlowchart);
  } else if (currentSearchFilter === 'prescricao') {
    filtered = filtered.filter(item => item.isPrescription);
  } else if (currentSearchFilter === 'caso') {
    filtered = filtered.filter(item => item.isCase);
  }

  if (!query) {
    if (currentSearchFilter === 'all') {
      // Sem digitação na aba "Todos": apresenta os 86 Módulos Clínicos limpos
      currentResults = filtered
        .filter(item => item.type === 'module')
        .map(item => Object.assign({}, item, { _snippet: '' }));
    } else {
      currentResults = filtered.map(item => Object.assign({}, item, { _snippet: '' }));
    }
  } else {
    const terms = query.split(/\s+/).filter(Boolean);
    const scored = [];

    filtered.forEach(item => {
      const matchesAll = terms.every(t => item.searchString.includes(t));
      if (!matchesAll) return;

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
        else score += 5; // Match no índice clínico full-text (fármacos, doses, critérios)
      });

      if (item.type === 'module') score += 14;
      else if (item.isInfographic && (query.includes('infografico') || query.includes('poster') || query.includes('resumo'))) score += 35;
      else if (item.isFlowchart) score += 6;
      else if (item.isPrescription) score += 5;

      const snippet = extractClinicalSnippet(item, terms);
      scored.push({
        item: Object.assign({}, item, { _snippet: snippet }),
        score
      });
    });

    scored.sort((a, b) => b.score - a.score);
    currentResults = scored.slice(0, 40).map(s => s.item);
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
        <p>Nenhum protocolo, infográfico ou fármaco encontrado para esta busca.</p>
        <p style="font-size: 0.8rem; margin-top: 6px;">Experimente termos clínicos como "monif", "letrozol", "rotterdam", "adrenalina", "wood-downes" ou "desmopressina".</p>
      </div>
    `;
    if (countEl) countEl.textContent = '0 resultados';
    activeResultIndex = -1;
    return;
  }

  let html = '';
  currentResults.forEach((item, idx) => {
    const activeClass = idx === 0 ? ' active' : '';
    const snippetHtml = item._snippet
      ? `<div class="search-result-snippet">↳ ${escapeSearchHtml(item._snippet)}</div>`
      : '';
    html += `
      <div class="search-result-item${activeClass}" data-index="${idx}" onclick="selectSearchResult(${idx})">
        <span class="search-result-icon">${item.icon}</span>
        <div class="search-result-info">
          <div class="search-result-title">${escapeSearchHtml(item.title)}</div>
          <div class="search-result-subtitle">${escapeSearchHtml(item.subtitle)}</div>
          ${snippetHtml}
        </div>
        <span class="search-result-badge ${item.badgeClass}">${item.badge}</span>
      </div>
    `;
  });

  container.innerHTML = html;
  activeResultIndex = 0;

  if (countEl) {
    const input = document.getElementById('modal-search-input');
    const isSearching = input && input.value.trim().length > 0;
    if (!isSearching) {
      if (currentSearchFilter === 'all') {
        countEl.textContent = '86 módulos clínicos • 684 seções indexadas';
      } else if (currentSearchFilter === 'ginecologia') {
        countEl.textContent = `38 módulos e ${currentResults.length - 38} seções em Ginecologia (FEBRASGO)`;
      } else if (currentSearchFilter === 'pediatria') {
        countEl.textContent = `48 módulos e ${currentResults.length - 48} seções em Pediatria (SBP 2024)`;
      } else if (currentSearchFilter === 'infografico') {
        countEl.textContent = `${currentResults.length} Infográficos Clínicos HD disponíveis`;
      } else if (currentSearchFilter === 'fluxograma') {
        countEl.textContent = `${currentResults.length} Fluxogramas Vetoriais disponíveis`;
      } else if (currentSearchFilter === 'prescricao') {
        countEl.textContent = `${currentResults.length} Guias de Prescrição & Conduta disponíveis`;
      } else if (currentSearchFilter === 'caso') {
        countEl.textContent = `${currentResults.length} Seções de Casos Clínicos Simulados`;
      } else {
        countEl.textContent = `${currentResults.length} resultado(s) disponível(is)`;
      }
    } else {
      countEl.textContent = `${currentResults.length} resultado(s) clínico(s) encontrado(s)`;
    }
  }
}

async function selectSearchResult(index) {
  if (index < 0 || index >= currentResults.length) return;
  const target = currentResults[index];
  if (!target) return;

  closeSearchModal();

  if (target.sectionId) {
    try {
      if (typeof history !== 'undefined' && typeof history.pushState === 'function') {
        history.pushState(null, '', '#' + target.sectionId);
      }
    } catch (e) {}
  }

  if (target.specialty && target.specialty !== currentSpecialty) {
    if (typeof switchSpecialty === 'function') {
      await switchSpecialty(target.specialty);
    }
  }

  if (target.moduleId) {
    const curMod = currentSpecialty === 'pediatria' ? activePediatriaMod : activeGinecologiaMod;
    const isOnHome = !!(document.body && document.body.classList && document.body.classList.contains('home-active'));
    if ((curMod !== target.moduleId || isOnHome) && typeof switchModule === 'function') {
      await switchModule(target.moduleId);
    }
  }

  if (target.sectionId && typeof switchSection === 'function') {
    await switchSection(target.sectionId);
  }

  // Se o usuário selecionou especificamente um Infográfico HD, destaca e posiciona o card visual
  if (target.isInfographic) {
    setTimeout(() => {
      const activeSec = document.getElementById(target.sectionId);
      const infoCard = activeSec ? activeSec.querySelector('.flowchart-container') : null;
      if (infoCard) {
        const cardWrap = infoCard.closest('.card') || infoCard;
        const infoBtn = cardWrap.querySelector('.flowchart-view-toggle button:first-child');
        if (infoBtn && !infoBtn.classList.contains('active') && typeof switchVisualMode === 'function') {
          switchVisualMode(infoBtn, 'infographic');
        }
        cardWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
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

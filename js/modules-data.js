// =================================================================
// METADADOS E ÍNDICES CLÍNICOS DOS 86 MÓDULOS (SBP 2024 & FEBRASGO)
// =================================================================

const MODULE_META = {
      // --- Módulos Pediátricos (SBP 2024) ---
      'ped-reanima': { icon: '🫁', name: 'Reanimação Neonatal em Sala de Parto', sub: 'Diretrizes SBP 2024 • 8 tópicos', firstSection: 'ped-reanima-definicao', ref: 'Seção 10 (Neonatologia), Cap. 1 — Reanimação do Recém-Nascido em Sala de Parto (SBP 2024)', specialty: 'pediatria' },
      'ped-cuidneonat': { icon: '👶', name: 'Cuidados & Triagem Neonatal', sub: 'Classificações & Testes de Triagem • 8 tópicos', firstSection: 'ped-cuidneonat-definicao', ref: 'Seção 10 (Neonatologia), Cap. 2 a 5 — Exame Físico e Triagem Neonatal (SBP 2024)', specialty: 'pediatria' },
      'ped-distresp-rn': { icon: '🫁', name: 'Distúrbios Respiratórios do RN', sub: 'SDR, TTRN, SAM & HPPN • 8 tópicos', firstSection: 'ped-distresp-rn-definicao', ref: 'Seção 10 (Neonatologia), Cap. 12 — Desconforto Respiratório no Período Neonatal (SBP 2024)', specialty: 'pediatria' },
      'ped-ictericia-sepse': { icon: '🟡', name: 'Icterícia & Sepse Neonatal', sub: 'Fototerapia & Antibioticoterapia • 8 tópicos', firstSection: 'ped-ictericia-sepse-definicao', ref: 'Seção 10 (Neonatologia), Cap. 18 e 25 — Hiperbilirrubinemia e Infecção Neonatal (SBP 2024)', specialty: 'pediatria' },
      'ped-disturb-rn': { icon: '⚡', name: 'Distúrbios Metabólicos do RN', sub: 'Hipoglicemia, Hipocalcemia & ECN • 8 tópicos', firstSection: 'ped-disturb-rn-definicao', ref: 'Seção 10 (Neonatologia), Cap. 8 e 22 — Distúrbios Metabólicos do Recém-Nascido (SBP 2024)', specialty: 'pediatria' },
      'ped-infecc-cong': { icon: '🦠', name: 'Infecções Congênitas (TORCH & Sífilis)', sub: 'Toxoplasmose, CMV & Sífilis • 8 tópicos', firstSection: 'ped-infecc-cong-definicao', ref: 'Seção 20 (Infectologia), Cap. 14 — Transmissão Vertical e Infecções Congênitas (SBP 2024)', specialty: 'pediatria' },
      'ped-crescimento': { icon: '📏', name: 'Crescimento & Antropometria', sub: 'Curvas OMS & Baixa Estatura • 8 tópicos', firstSection: 'ped-crescimento-definicao', ref: 'Seção 24 (Nutrologia), Cap. 1 — Avaliação Nutricional e Crescimento Físico (SBP 2024)', specialty: 'pediatria' },
      'ped-dnpm': { icon: '🧠', name: 'Desenvolvimento Neuropsicomotor', sub: 'Marcos do DNPM & Triagem M-CHAT • 8 tópicos', firstSection: 'ped-dnpm-definicao', ref: 'Seção 4 (Desenvolvimento e Comportamento), Cap. 2 — Vigilância do DNPM (SBP 2024)', specialty: 'pediatria' },
      'ped-aleitamento': { icon: '🤱', name: 'Aleitamento Materno & Lactação', sub: 'Técnica de Pega & Dificuldades • 8 tópicos', firstSection: 'ped-aleitamento-definicao', ref: 'Seção 9 (Aleitamento Materno), Cap. 1 a 6 — Promoção e Manejo Clínico da Lactação (SBP 2024)', specialty: 'pediatria' },
      'ped-nutricao': { icon: '🥣', name: 'Alimentação & Puericultura', sub: 'Alimentação Complementar & Rotina • 8 tópicos', firstSection: 'ped-nutricao-definicao', ref: 'Seção 2 (Fundamentos da Atenção) & Seção 24 — Guia Prático de Alimentação (SBP 2024)', specialty: 'pediatria' },
      'ped-desnutricao': { icon: '📉', name: 'Desnutrição Infantil (OMS)', sub: 'Marasmo, Kwashiorkor & Protocolo OMS • 8 tópicos', firstSection: 'ped-desnutricao-definicao', ref: 'Seção 24 (Nutrologia), Cap. 8 — Desnutrição Energético-Proteica Grave (SBP 2024)', specialty: 'pediatria' },
      'ped-vitaminas': { icon: '💊', name: 'Micronutrientes & Vitaminas', sub: 'Anemia Ferropriva, Vitamina D & A • 8 tópicos', firstSection: 'ped-vitaminas-definicao', ref: 'Seção 24 (Nutrologia), Cap. 5 e 6 — Deficiências de Micronutrientes (SBP 2024)', specialty: 'pediatria' },
      'ped-obesidade': { icon: '⚖️', name: 'Obesidade Infantil & Metabólica', sub: 'Escore-Z do IMC & Rastreio • 8 tópicos', firstSection: 'ped-obesidade-definicao', ref: 'Seção 24 (Nutrologia), Cap. 10 — Obesidade na Infância e Adolescência (SBP 2024)', specialty: 'pediatria' },
      'ped-puberdade': { icon: '🌱', name: 'Puberdade Normal & Desvios', sub: 'Estagiamento de Tanner & Precoce • 8 tópicos', firstSection: 'ped-puberdade-definicao', ref: 'Seção 11 (Adolescência) & Seção 16 (Endocrinologia) — Puberdade e Seus Desvios (SBP 2024)', specialty: 'pediatria' },
      'ped-hebiatria': { icon: '🧑‍⚕️', name: 'Hebiatria (Medicina do Adolescente)', sub: 'Sigilo, Escala HEEADSSS & Saúde • 8 tópicos', firstSection: 'ped-hebiatria-definicao', ref: 'Seção 11 (Adolescência), Cap. 1 a 4 — Atenção Integral ao Adolescente (SBP 2024)', specialty: 'pediatria' },
      'ped-seguranca': { icon: '🛡️', name: 'Segurança & Prevenção de Acidentes', sub: 'Engasgo, Quedas & Cadeirinhas • 8 tópicos', firstSection: 'ped-seguranca-definicao', ref: 'Seção 6 (Causas Externas), Cap. 1 a 5 — Prevenção de Acidentes na Infância (SBP 2024)', specialty: 'pediatria' },
      'ped-asma': { icon: '🫁', name: 'Asma na Infância & Lactente Sibilante', sub: 'Classificação GINA & Crise Aguda • 8 tópicos', firstSection: 'ped-asma-definicao', ref: 'Seção 29 (Pneumologia), Cap. 7 — Asma na Infância e Manejo Escalonado (SBP 2024)', specialty: 'pediatria' },
      'ped-bronquiolite': { icon: '🫁', name: 'Bronquiolite Viral Aguda (BVA)', sub: 'VSR, Suporte Respiratório & Evidências • 8 tópicos', firstSection: 'ped-bronquiolite-definicao', ref: 'Seção 29 (Pneumologia), Cap. 5 — Bronquiolite Viral Aguda e Cuidados de Suporte (SBP 2024)', specialty: 'pediatria' },
      'ped-pneumonia': { icon: '🩺', name: 'Pneumonia Comunitária (PAC)', sub: 'Etiologia, Critérios de Gravidade & Tto • 8 tópicos', firstSection: 'ped-pneumonia-definicao', ref: 'Seção 29 (Pneumologia), Cap. 8 — Pneumonias Adquiridas na Comunidade (SBP 2024)', specialty: 'pediatria' },
      'ped-anafilaxia': { icon: '🚨', name: 'Anafilaxia & Urticária Pediátrica', sub: 'Adrenalina IM & Critérios WAO • 8 tópicos', firstSection: 'ped-anafilaxia-definicao', ref: 'Seção 12 (Alergia), Cap. 3 e 4 — Anafilaxia e Urticária Aguda (SBP 2024)', specialty: 'pediatria' },
      'ped-alergia-alim': { icon: '🥛', name: 'Alergia Alimentar & APLV', sub: 'IgE vs Não-IgE & Fórmulas Especiais • 8 tópicos', firstSection: 'ped-alergia-alim-definicao', ref: 'Seção 12 (Alergia), Cap. 6 — Alergia à Proteína do Leite de Vaca (SBP 2024)', specialty: 'pediatria' },
      'ped-coqueluche-fc': { icon: '🫁', name: 'Coqueluche & Fibrose Cística', sub: 'Bordetella pertussis & Teste do Suor • 8 tópicos', firstSection: 'ped-coqueluche-fc-definicao', ref: 'Seção 20 (Infectologia) & Seção 29 (Pneumologia) — Doenças Respiratórias Específicas (SBP 2024)', specialty: 'pediatria' },
      'ped-imunizacoes': { icon: '💉', name: 'Calendário Vacinal (SBP/PNI)', sub: 'Esquemas, Contraindicações & CRIE • 8 tópicos', firstSection: 'ped-imunizacoes-definicao', ref: 'Seção 21 (Imunizações), Cap. 1 a 4 — Calendário Oficial de Vacinação da SBP (2024)', specialty: 'pediatria' },
      'ped-febre-sem-foco': { icon: '🌡️', name: 'Febre sem Foco no Lactente', sub: 'Rochester, Philadelphia & Conduta • 8 tópicos', firstSection: 'ped-febre-sem-foco-definicao', ref: 'Seção 3 (Emergências), Cap. 4 — Abordagem da Febre Aguda sem Foco (SBP 2024)', specialty: 'pediatria' },
      'ped-exantematicas': { icon: '🔴', name: 'Doenças Exantemáticas', sub: 'Sarampo, Varicela, Roséola & Outras • 8 tópicos', firstSection: 'ped-exantematicas-definicao', ref: 'Seção 20 (Infectologia), Cap. 8 — Diagnóstico Diferencial dos Exantemas (SBP 2024)', specialty: 'pediatria' },
      'ped-tuberculose': { icon: '🔬', name: 'Tuberculose na Infância (SBP)', sub: 'Sistema de Pontuação MS/SBP & Tto • 8 tópicos', firstSection: 'ped-tuberculose-definicao', ref: 'Seção 20 (Infectologia), Cap. 18 — Tuberculose Pulmonar e Extrapulmonar (SBP 2024)', specialty: 'pediatria' },
      'ped-drge': { icon: '🥛', name: 'Refluxo Gastroesofágico (DRGE)', sub: 'Refluxador Feliz vs Doença • 8 tópicos', firstSection: 'ped-drge-definicao', ref: 'Seção 17 (Gastroenterologia), Cap. 3 — Doença do Refluxo Gastroesofágico (SBP 2024)', specialty: 'pediatria' },
      'ped-diarreia': { icon: '💧', name: 'Diarreia Aguda & Reidratação (TRO)', sub: 'Planos A, B e C da OMS & Zinco • 8 tópicos', firstSection: 'ped-diarreia-definicao', ref: 'Seção 17 (Gastroenterologia), Cap. 7 — Terapia de Reidratação e Diarreia Aguda (SBP 2024)', specialty: 'pediatria' },
      'ped-constipacao': { icon: '🚽', name: 'Constipação Intestinal Funcional', sub: 'Critérios Roma IV & Desimpactação • 8 tópicos', firstSection: 'ped-constipacao-definicao', ref: 'Seção 17 (Gastroenterologia), Cap. 11 — Constipação Intestinal Crônica Funcional (SBP 2024)', specialty: 'pediatria' },
      'ped-celiaca': { icon: '🌾', name: 'Doença Celíaca Pediátrica', sub: 'Critérios ESPGHAN & Triagem • 8 tópicos', firstSection: 'ped-celiaca-definicao', ref: 'Seção 17 (Gastroenterologia), Cap. 13 — Enteropatia por Glúten / Doença Celíaca (SBP 2024)', specialty: 'pediatria' },
      'ped-itu-enurese': { icon: '💧', name: 'Infecção Urinária & Enurese', sub: 'Cortes de Urocultura & Investigação • 8 tópicos', firstSection: 'ped-itu-enurese-definicao', ref: 'Seção 22 (Nefrologia), Cap. 4 e 9 — Infecção do Trato Urinário e Enurese (SBP 2024)', specialty: 'pediatria' },
      'ped-choque': { icon: '🚨', name: 'Choque Pediátrico & Manejo', sub: 'Compensado vs Hipotensivo & DVA • 8 tópicos', firstSection: 'ped-choque-definicao', ref: 'Seção 3 (Emergências) & Seção 31 (Terapia Intensiva) — Choque em Pediatria (SBP 2024)', specialty: 'pediatria' },
      'ped-emerg-pcr': { icon: '⚡', name: 'PCR & Algoritmos PALS', sub: 'Ritmos Chocáveis vs Não-Chocáveis • 8 tópicos', firstSection: 'ped-emerg-pcr-definicao', ref: 'Seção 3 (Emergências), Cap. 1 — Reanimação Cardiopulmonar Pediátrica PALS (SBP 2024)', specialty: 'pediatria' },
      'ped-brue-smsl': { icon: '⚠️', name: 'BRUE & Sono Seguro do Lactente', sub: 'Estratificação de Risco & Prevenção • 8 tópicos', firstSection: 'ped-brue-smsl-definicao', ref: 'Seção 3 (Emergências), Cap. 15 — Eventos Breves Inexplicados e Morte Súbita (SBP 2024)', specialty: 'pediatria' },
      'ped-convulsao': { icon: '🧠', name: 'Convulsão Febril & Crises', sub: 'Simples vs Complexa & Protocolo • 8 tópicos', firstSection: 'ped-convulsao-definicao', ref: 'Seção 23 (Neurologia), Cap. 5 — Convulsão Febril e Estado de Mal Epiléptico (SBP 2024)', specialty: 'pediatria' },
      'ped-cefaleias': { icon: '🤕', name: 'Cefaleias na Infância', sub: 'Enxaqueca, Sinais de Alerta & Tto • 8 tópicos', firstSection: 'ped-cefaleias-definicao', ref: 'Seção 23 (Neurologia), Cap. 9 — Abordagem Diagnóstica das Cefaleias (SBP 2024)', specialty: 'pediatria' },
      'ped-reumato-vasc': { icon: '🩸', name: 'Kawasaki & Vasculite por IgA', sub: 'Critérios Clínicos, IGIV & Púrpura • 8 tópicos', firstSection: 'ped-reumato-vasc-definicao', ref: 'Seção 30 (Reumatologia), Cap. 6 e 7 — Vasculites Sistêmicas na Infância (SBP 2024)', specialty: 'pediatria' },
      'ped-reumato-aij': { icon: '🦴', name: 'Febre Reumática & Artrite Juvenil', sub: 'Critérios de Jones & Subtipos de AIJ • 8 tópicos', firstSection: 'ped-reumato-aij-definicao', ref: 'Seção 30 (Reumatologia), Cap. 2 e 4 — Febre Reumática e Artrite Idiopática Juvenil (SBP 2024)', specialty: 'pediatria' },
      'ped-cardiopatias': { icon: '❤️', name: 'Cardiopatias Congênitas & HAS', sub: 'Acianóticas, Cianóticas & Pressão • 8 tópicos', firstSection: 'ped-cardiopatias-definicao', ref: 'Seção 14 (Cardiologia), Cap. 3 e 10 — Cardiopatias Congênitas e Hipertensão (SBP 2024)', specialty: 'pediatria' },
      'ped-genetica': { icon: '🧬', name: 'Síndromes Genéticas & Erros Inatos', sub: 'Down, Turner & Erros Inatos • 8 tópicos', firstSection: 'ped-genetica-definicao', ref: 'Seção 19 (Genética Clínica), Cap. 1 a 6 — Avaliação Diagnóstica e Conduta (SBP 2024)', specialty: 'pediatria' },
      'ped-sifilis-cong': { icon: '🩺', name: 'Sífilis na Gestação & Sífilis Congênita', sub: 'Diagnóstico Sorológico & Penicilinoterapia • 8 tópicos', firstSection: 'ped-sifilis-cong-definicao', ref: 'Seção 20 (Infectologia), Cap. 15 — Sífilis Congênita (SBP 2024)', specialty: 'pediatria' },
      'ped-fibrose-cistica': { icon: '🧬', name: 'Fibrose Cística (Mucoviscidose)', sub: 'Teste do Suor & Reposição Enzimática • 8 tópicos', firstSection: 'ped-fibrose-cistica-definicao', ref: 'Seção 21 (Pneumologia), Cap. 18 — Fibrose Cística (SBP 2024)', specialty: 'pediatria' },
      'ped-enurese': { icon: '💧', name: 'Enurese Noturna na Infância', sub: 'Alarme Noturno & Desmopressina • 8 tópicos', firstSection: 'ped-enurese-definicao', ref: 'Seção 25 (Nefrologia), Cap. 8 — Enurese Noturna (SBP 2024)', specialty: 'pediatria' },
      'ped-henoch-schonlein': { icon: '🟣', name: 'Púrpura de Henoch-Schönlein (Vasculite por IgA)', sub: 'Critérios EULAR/PRINTO & Manejo • 8 tópicos', firstSection: 'ped-henoch-schonlein-definicao', ref: 'Seção 28 (Reumatologia), Cap. 7 — Vasculite por IgA (SBP 2024)', specialty: 'pediatria' },
      'ped-aij': { icon: '🦴', name: 'Artrite Idiopática Juvenil (AIJ)', sub: 'Subtipos ILAR, Rastreio de Uveíte & DMARDs • 8 tópicos', firstSection: 'ped-aij-definicao', ref: 'Seção 28 (Reumatologia), Cap. 4 — Artrite Idiopática Juvenil (SBP 2024)', specialty: 'pediatria' },
      'ped-hipertensao': { icon: '❤️', name: 'Hipertensão Arterial na Criança & Adolescente', sub: 'Percentis de PA & Crise Hipertensiva • 8 tópicos', firstSection: 'ped-hipertensao-definicao', ref: 'Seção 16 (Cardiologia), Cap. 8 — Hipertensão Arterial na Infância (SBP 2024)', specialty: 'pediatria' },
      'ped-hipotireoidismo': { icon: '🦋', name: 'Hipotireoidismo Congênito', sub: 'Triagem Neonatal & Levotiroxina • 8 tópicos', firstSection: 'ped-hipotireoidismo-definicao', ref: 'Seção 18 (Endocrinologia), Cap. 2 — Doenças da Tireoide (SBP 2024)', specialty: 'pediatria' },
      'ped-hiperplasia-adrenal': { icon: '⚡', name: 'Hiperplasia Adrenal Congênita (HAC)', sub: 'Deficiência da 21-OH & Crise de Sal • 8 tópicos', firstSection: 'ped-hiperplasia-adrenal-definicao', ref: 'Seção 18 (Endocrinologia), Cap. 7 — Doenças da Suprarrenal (SBP 2024)', specialty: 'pediatria' },


      'dsf': { icon: '🧠', name: 'Disfunção Sexual Feminina', sub: 'Capítulos 10, 11 e 12 • 7 tópicos', firstSection: 'fluxograma-geral', ref: 'Capítulos 10, 11 e 12 — Disfunção Sexual Feminina' },
      'sua': { icon: '🩸', name: 'Sangramento Uterino Anormal', sub: 'Capítulos 20 e 21 • 9 tópicos', firstSection: 'sua-parametros', ref: 'Capítulos 20 e 21 / Cap. 45 — Sangramento Uterino Anormal (FIGO)' },
      'larcs': { icon: '🛡️', name: 'Contracepção Reversível (LARCs)', sub: 'Capítulos 16, 17 e 18 • 8 tópicos', firstSection: 'larcs-visao-geral', ref: 'Capítulos 16, 17 e 18 / Cap. 70 e 74 — Métodos Contraceptivos (LARCs)' },
      'mama': { icon: '🎀', name: 'Rastreamento Câncer de Mama', sub: 'Diretrizes FEBRASGO & BI-RADS • 8 tópicos', firstSection: 'mama-rastreamento', ref: 'Capítulos 82 a 86 — Câncer de Mama & Sistema BI-RADS' },
      'colo': { icon: '🔬', name: 'Câncer de Colo Uterino', sub: 'Diretrizes INCA & FEBRASGO • 8 tópicos', firstSection: 'colo-rastreamento', ref: 'Capítulos 13, 14, 77 e 79 — Câncer de Colo Uterino (INCA / FEBRASGO)' },
      'infertil': { icon: '👶', name: 'Infertilidade Conjugal', sub: 'Capítulo 34 Tratado FEBRASGO • 8 tópicos', firstSection: 'infertilidade-definicao', ref: 'Capítulo 34 / Cap. 48 a 52 — Infertilidade Conjugal' },
      'sop': { icon: '🌸', name: 'Síndrome Ovários Policísticos', sub: 'Capítulos 38 e 39 FEBRASGO • 8 tópicos', firstSection: 'sop-rotterdam', ref: 'Capítulos 38 e 39 / Cap. 42 e 43 — Síndrome dos Ovários Policísticos' },
      'adeno': { icon: '🟣', name: 'Adenomiose Uterina', sub: 'Critérios MUSS & FIGO • 8 tópicos', firstSection: 'adenomiose-fisiopatologia', ref: 'Capítulo 34 — Adenomiose Uterina (Critérios MUSS & FIGO)' },
      'endo': { icon: '🎗️', name: 'Endometriose Profunda', sub: 'Consenso ESHRE & FEBRASGO • 8 tópicos', firstSection: 'endometriose-fisiopatologia', ref: 'Capítulo 35 — Endometriose Profunda & Dor Pélvica Crônica' },
      'prolapso': { icon: '⚡', name: 'Prolapso de Órgãos Pélvicos', sub: 'Classificação POP-Q • 8 tópicos', firstSection: 'prolapso-delancey', ref: 'Capítulo 68 — Prolapso de Órgãos Pélvicos (Estadiamento POP-Q)' },
      'incont': { icon: '💧', name: 'Incontinência Urinária', sub: 'ICIQ-SF & Urodinâmica • 8 tópicos', firstSection: 'incontinencia-classificacao', ref: 'Capítulos 63 a 65 — Incontinência Urinária Feminina (ICIQ-SF)' },
      'clim': { icon: '🔥', name: 'Climatério & Terapia Hormonal', sub: 'Critérios STRAW+10 • 8 tópicos', firstSection: 'climaterio-straw', ref: 'Capítulos 56 a 60 — Climatério, Menopausa & TRH (STRAW+10)' },
      'trhav': { icon: '💎', name: 'TRH Avançada & Androgênios', sub: 'Consenso Global Androgênios • 8 tópicos', firstSection: 'trhav-androgenios', ref: 'Capítulos 47 e 57 — TRH Avançada, Androgênios & Saúde Óssea' },
      'infeccoes': { icon: '🦠', name: 'Vulvovaginites & Cervicites', sub: 'PCDT / MS & FEBRASGO • 8 tópicos', firstSection: 'infeccoes-vulvovaginites', ref: 'Capítulos 26 e 27 — Vulvovaginites & Cervicites (PCDT / MS)' },
      'dipav': { icon: '🔥', name: 'Doença Inflamatória Pélvica', sub: 'Estadiamento Monif & CDC • 8 tópicos', firstSection: 'dipav-fisiopatologia', ref: 'Capítulo 28 — Doença Inflamatória Pélvica (Monif & CDC)' },
      'mioma': { icon: '🪨', name: 'Miomatose Uterina', sub: 'Classificação FIGO WAM • 8 tópicos', firstSection: 'mioma-classificacao', ref: 'Capítulo 32 — Miomatose Uterina (Classificação FIGO WAM)' },
      'amenor': { icon: '🌸', name: 'Amenorreias Primária & Secundária', sub: 'Capítulo 41 Tratado FEBRASGO • 8 tópicos', firstSection: 'amenor-primaria', ref: 'Capítulo 41 — Amenorreias Primária e Secundária (ASRM / ESHRE)' },
      'metodologia': { icon: '📘', name: 'Método do Fluxograma', sub: 'Framework Estudante-Médico • 1 tópico', firstSection: 'metodologia', ref: 'Framework Clínico FEBRASGO — Tomada de Decisão Baseada em Evidências' },
      'abdome': { icon: '🚨', name: 'Abdome Agudo em Ginecologia', sub: 'Capítulos 37 & 39 FEBRASGO • 8 tópicos', firstSection: 'abdome-visao-geral', ref: 'Capítulos 37 e 39 — Abdome Agudo em Ginecologia & Hemorragias Graves' },
      'ovario': { icon: '🥚', name: 'Tumores Anexiais & Ovário', sub: 'Capítulos 37 & 81 FEBRASGO • 8 tópicos', firstSection: 'ovario-visao-geral', ref: 'Capítulos 37 e 81 — Tumores Anexiais & Câncer de Ovário (IOTA / FIGO)' },
      'endometrio': { icon: '🏛️', name: 'Câncer de Corpo do Útero', sub: 'Capítulo 80 Tratado FEBRASGO • 8 tópicos', firstSection: 'endometrio-visao-geral', ref: 'Capítulo 80 — Câncer de Endométrio, Hiperplasias & Sarcomas (FIGO 2023)' },
      'mamabenigna': { icon: '🎀', name: 'Doenças Benignas da Mama', sub: 'Capítulo 82 FEBRASGO • 8 tópicos', firstSection: 'mamabenigna-visao-geral', ref: 'Capítulo 82 — Doenças Benignas da Mama & Mastalgia' },
      'vulva': { icon: '🌸', name: 'Doenças da Vulva & Vagina', sub: 'Capítulos 38 e 77 FEBRASGO • 8 tópicos', firstSection: 'vulva-visao-geral', ref: 'Capítulos 38 e 77 — Doenças Benignas e Pré-Neoplásicas da Vulva (ISSVD)' },
      'cancervulva': { icon: '🏛️', name: 'Câncer de Vulva e Vagina', sub: 'Capítulo 78 FEBRASGO • 8 tópicos', firstSection: 'cancervulva-visao-geral', ref: 'Capítulo 78 — Câncer de Vulva e de Vagina (FIGO 2021)' },
      'dor': { icon: '⚡', name: 'Dor Pélvica & Dismenorreia', sub: 'Capítulos 30 e 36 FEBRASGO • 8 tópicos', firstSection: 'dor-visao-geral', ref: 'Capítulos 30 e 36 — Dor Pélvica Crônica e Dismenorreia' },
      'spm': { icon: '🧠', name: 'Síndrome Pré-Menstrual & TDPM', sub: 'Capítulo 31 FEBRASGO • DSM-5 • 8 tópicos', firstSection: 'spm-visao-geral', ref: 'Capítulo 31 — Síndrome Pré-Menstrual e Transtorno Disfórico Pré-Menstrual' },
      'polipos': { icon: '🔬', name: 'Pólipos Uterinos & Cervicais', sub: 'Capítulo 33 FEBRASGO • Histeroscopia • 8 tópicos', firstSection: 'polipos-visao-geral', ref: 'Capítulo 33 — Pólipos Endometriais e Cervicais' },
      'contracepcao': { icon: '🛡️', name: 'Planejamento Familiar & Contracepção', sub: 'Capítulos 70-76 FEBRASGO • OMS • 8 tópicos', firstSection: 'contracepcao-visao-geral', ref: 'Capítulos 70 a 76 — Planejamento Familiar, Contracepção Hormonal, Emergência & Esterilização' },
      'violencia': { icon: '🛡️', name: 'Assistência na Violência Sexual', sub: 'Capítulos 40 & 88 FEBRASGO • PCDT / MS • 8 tópicos', firstSection: 'violencia-visao-geral', ref: 'Capítulos 40 e 88 — Atendimento Integral à Vítima de Violência Sexual' },
      'infancia': { icon: '👶', name: 'Ginecologia da Infância & DDS', sub: 'Capítulos 15, 20-24 & 44 FEBRASGO • Tanner • 8 tópicos', firstSection: 'infancia-visao-geral', ref: 'Capítulos 15, 20 a 24 e 44 — Ginecologia da Infância, Puberdade & DDS' },
      'saudeintegral': { icon: '💜', name: 'Consulta Ginecológica & LGBTQIAPN+', sub: 'Capítulos 4-9 & 44 FEBRASGO • SBIm • 8 tópicos', firstSection: 'saudeintegral-visao-geral', ref: 'Capítulos 4 a 9 e 44 — Consulta Ginecológica, Vacinação & População LGBTQIAPN+' },
      'fisiologia': { icon: '🔄', name: 'Fisiologia Menstrual & Esteroidogênese', sub: 'Capítulos 1-3, 6-8 FEBRASGO • Eixo HHO • 8 tópicos', firstSection: 'fisiologia-visao-geral', ref: 'Capítulos 1 a 3 e 6 a 8 — Fisiologia do Ciclo Menstrual & Esteroidogênese Ovariana' },
      'prolactina': { icon: '🥛', name: 'Hiperprolactinemia & Galactorreia', sub: 'Capítulo 44 FEBRASGO • Endocrine Society • 8 tópicos', firstSection: 'prolactina-visao-geral', ref: 'Capítulo 44 — Hiperprolactinemia, Galactorreia e Micro/Macroadenomas Hipofisários' },
      'iop': { icon: '⏳', name: 'Insuficiência Ovariana Prematura (IOP)', sub: 'Capítulo 46 FEBRASGO • ESHRE • 8 tópicos', firstSection: 'iop-visao-geral', ref: 'Capítulo 46 — Insuficiência Ovariana Prematura (IOP), Genética e Terapia Hormonal' },
      'pgr': { icon: '🌱', name: 'Perda Gestacional Recorrente & Trombofilias', sub: 'Capítulos 53 & 61 FEBRASGO • ASRM/Sydney • 8 tópicos', firstSection: 'pgr-visao-geral', ref: 'Capítulos 53 e 61 — Perda Gestacional Recorrente, SAAF e Trombofilias' },
      'urocomplexa': { icon: '💧', name: 'Uroginecologia Complexa & ITUR', sub: 'Capítulos 66, 67 & 69 FEBRASGO • IUGA/ICS • 8 tópicos', firstSection: 'urocomplexa-visao-geral', ref: 'Capítulos 66, 67 e 69 — ITU Recorrente, Fístulas Urogenitais e Dor Vesical' },
      'cirurgia': { icon: '🔬', name: 'Anatomia Cirúrgica, Embriologia & CMI', sub: 'Capítulos 1-3, 5, 15-18 & 69 FEBRASGO • ESHRE • 8 tópicos', firstSection: 'cirurgia-visao-geral', ref: 'Capítulos 1 a 3, 5, 15 a 18 e 69 — Anatomia Cirúrgica, Espaços Pélvicos, Malformações Müllerianas e Cirurgia Minimamente Invasiva' },
      'examefisico': { icon: '🩺', name: 'Exame Físico Ginecológico Completo', sub: 'Capítulo 4 Tratado FEBRASGO • 8 tópicos', firstSection: 'examefisico-visao-geral', ref: 'Capítulo 4 — Consulta Ginecológica, Propedêutica & Semiotécnica (FEBRASGO)' },
    };

const moduleIds = ['dsf', 'sua', 'larcs', 'mama', 'colo', 'infertil', 'sop', 'adeno', 'endo', 'prolapso', 'incont', 'clim', 'trhav', 'infeccoes', 'dipav', 'mioma', 'amenor', 'metodologia', 'abdome', 'ovario', 'endometrio', 'mamabenigna', 'vulva', 'cancervulva', 'dor', 'spm', 'polipos', 'contracepcao', 'violencia', 'infancia', 'saudeintegral', 'fisiologia', 'prolactina', 'iop', 'pgr', 'urocomplexa', 'cirurgia', 'examefisico', 'ped-reanima', 'ped-cuidneonat', 'ped-distresp-rn', 'ped-ictericia-sepse', 'ped-disturb-rn', 'ped-infecc-cong', 'ped-crescimento', 'ped-dnpm', 'ped-aleitamento', 'ped-nutricao', 'ped-desnutricao', 'ped-vitaminas', 'ped-obesidade', 'ped-puberdade', 'ped-hebiatria', 'ped-seguranca', 'ped-asma', 'ped-bronquiolite', 'ped-pneumonia', 'ped-anafilaxia', 'ped-alergia-alim', 'ped-coqueluche-fc', 'ped-imunizacoes', 'ped-febre-sem-foco', 'ped-exantematicas', 'ped-tuberculose', 'ped-drge', 'ped-diarreia', 'ped-constipacao', 'ped-celiaca', 'ped-itu-enurese', 'ped-choque', 'ped-emerg-pcr', 'ped-brue-smsl', 'ped-convulsao', 'ped-cefaleias', 'ped-reumato-vasc', 'ped-reumato-aij', 'ped-cardiopatias', 'ped-genetica', 'ped-sifilis-cong', 'ped-fibrose-cistica', 'ped-enurese', 'ped-henoch-schonlein', 'ped-aij', 'ped-hipertensao', 'ped-hipotireoidismo', 'ped-hiperplasia-adrenal'];

const ORDERED_SECTIONS = {
  "ginecologia": [
    {
      "moduleId": "dsf",
      "sectionId": "fluxograma-geral",
      "title": "Visão Geral & Triagem Geral",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dsf",
      "sectionId": "anamnese-exame",
      "title": "Anamnese & Exame Físico",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dsf",
      "sectionId": "desejo",
      "title": "Desejo Hipoativo (TDSH)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dsf",
      "sectionId": "excitacao",
      "title": "Excitação Sexual (DESF)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dsf",
      "sectionId": "orgasmo",
      "title": "Orgasmo / Anorgasmia (DOF)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dsf",
      "sectionId": "dor-pelvica",
      "title": "Dor Gênito-Pélvica (TDGPP)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dsf",
      "sectionId": "iatrogenias",
      "title": "Iatrogenias & Fármacos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dsf",
      "sectionId": "casos-clinicos",
      "title": "Casos Clínicos Sexologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dsf",
      "sectionId": "guia-prescricao",
      "title": "Prescrições Sexologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sua",
      "sectionId": "sua-parametros",
      "title": "Visão Geral & Parâmetros SUA",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sua",
      "sectionId": "sua-fluxograma-geral",
      "title": "Algoritmo de Triagem SUA",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sua",
      "sectionId": "sua-palm-coein",
      "title": "Sistema PALM-COEIN",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sua",
      "sectionId": "sua-propedêutica",
      "title": "Propedêutica & Biópsia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sua",
      "sectionId": "sua-agudo",
      "title": "Manejo do SUA Agudo",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sua",
      "sectionId": "sua-cronico",
      "title": "Manejo do SUA Crônico",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sua",
      "sectionId": "sua-estruturais",
      "title": "Miomas & Escore STEPW",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sua",
      "sectionId": "sua-casos-clinicos",
      "title": "Casos Clínicos SUA",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sua",
      "sectionId": "sua-guia-prescricao",
      "title": "Prescrições & Doses SUA",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "larcs",
      "sectionId": "larcs-visao-geral",
      "title": "Visão Geral & Eficácia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "larcs",
      "sectionId": "larcs-algoritmo",
      "title": "Algoritmo de Escolha LARC",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "larcs",
      "sectionId": "larcs-elegibilidade",
      "title": "Critérios de Elegibilidade (OMS)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "larcs",
      "sectionId": "larcs-tecnicas",
      "title": "Propedêutica & Inserção",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "larcs",
      "sectionId": "larcs-sangramento",
      "title": "Manejo de Spotting / Sangramento",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "larcs",
      "sectionId": "larcs-intercorrencias",
      "title": "DIP, Gravidez & Fios Ausentes",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "larcs",
      "sectionId": "larcs-mitos",
      "title": "Mitos & Desmistificações",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "larcs",
      "sectionId": "larcs-casos-clinicos",
      "title": "Casos Clínicos LARCs",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "larcs",
      "sectionId": "larcs-guia-prescricao",
      "title": "Tabela Comparativa LARCs",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mama",
      "sectionId": "mama-rastreamento",
      "title": "Visão Geral & Rastreamento",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mama",
      "sectionId": "mama-birads",
      "title": "Classificação BI-RADS®",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mama",
      "sectionId": "mama-nodulo",
      "title": "Nódulo Palpável & Biópsias",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mama",
      "sectionId": "mama-descarga",
      "title": "Descarga Papilar",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mama",
      "sectionId": "mama-subtipos",
      "title": "Subtipos & Terapia Sistêmica",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mama",
      "sectionId": "mama-cirurgia",
      "title": "Cirurgia Mamária & Axila",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mama",
      "sectionId": "mama-casos",
      "title": "Casos Clínicos Mastologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mama",
      "sectionId": "mama-prescricao",
      "title": "Prescrições & Doses Mama",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "colo",
      "sectionId": "colo-rastreamento",
      "title": "Visão Geral & Rastreamento",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "colo",
      "sectionId": "colo-bethesda",
      "title": "Citopatologia (Bethesda)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "colo",
      "sectionId": "colo-colposcopia",
      "title": "Colposcopia & ZTs",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "colo",
      "sectionId": "colo-precursoras",
      "title": "NIC 1, 2, 3 & Conização",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "colo",
      "sectionId": "colo-estadiamento",
      "title": "Estadiamento FIGO 2018",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "colo",
      "sectionId": "colo-tratamento",
      "title": "Cirurgia vs Quimiorradiação",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "colo",
      "sectionId": "colo-casos",
      "title": "Casos Clínicos Colo",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "colo",
      "sectionId": "colo-prescricao",
      "title": "Prescrições & Protocolos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infertil",
      "sectionId": "infertilidade-definicao",
      "title": "Visão Geral & Definição",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infertil",
      "sectionId": "infertilidade-propedutica",
      "title": "Propedêutica dos 4 Pilares",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infertil",
      "sectionId": "infertilidade-masculino",
      "title": "Espermograma & Fator Masculino",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infertil",
      "sectionId": "infertilidade-ovariano",
      "title": "Reserva Ovariana (AMH / CFA)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infertil",
      "sectionId": "infertilidade-baixa-complexidade",
      "title": "Coito Programado & IIU",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infertil",
      "sectionId": "infertilidade-alta-complexidade",
      "title": "FIV Clássica & ICSI",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infertil",
      "sectionId": "infertilidade-casos",
      "title": "Casos Clínicos Fertilidade",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infertil",
      "sectionId": "infertilidade-prescricao",
      "title": "Prescrições & Indução Ovulatória",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sop",
      "sectionId": "sop-rotterdam",
      "title": "Visão Geral & Rotterdam",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sop",
      "sectionId": "sop-diferencial",
      "title": "Diagnóstico Diferencial",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sop",
      "sectionId": "sop-metabolico",
      "title": "Metabolismo & Endométrio",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sop",
      "sectionId": "sop-hirsutismo",
      "title": "Hiperandrogenismo & Pele",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sop",
      "sectionId": "sop-disfuncao-menstrual",
      "title": "Regularização Menstrual",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sop",
      "sectionId": "sop-inducao-ovulacao",
      "title": "SOP & Desejo Reprodutivo",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sop",
      "sectionId": "sop-casos",
      "title": "Casos Clínicos de SOP",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "sop",
      "sectionId": "sop-prescricao",
      "title": "Prescrições & Doses SOP",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "adeno",
      "sectionId": "adenomiose-fisiopatologia",
      "title": "Visão Geral & Fisiopatologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "adeno",
      "sectionId": "adenomiose-imagem-musa",
      "title": "Critérios MUSA & RM",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "adeno",
      "sectionId": "adenomiose-formas-anatomicas",
      "title": "Difusa vs Leiomioma",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "adeno",
      "sectionId": "adenomiose-tratamento-clinico",
      "title": "Tratamento Clínico",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "adeno",
      "sectionId": "adenomiose-fertilidade",
      "title": "Adenomiose & Fertilidade",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "adeno",
      "sectionId": "adenomiose-cirurgia",
      "title": "Manejo Cirúrgico",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "adeno",
      "sectionId": "adenomiose-casos",
      "title": "Casos de Adenomiose",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "adeno",
      "sectionId": "adenomiose-prescricao",
      "title": "Prescrições de Bolso",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endo",
      "sectionId": "endometriose-fisiopatologia",
      "title": "Visão Geral & Diagnóstico",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endo",
      "sectionId": "endometriose-imagem",
      "title": "USTV Intestinal & RM",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endo",
      "sectionId": "endometriose-tratamento-dor",
      "title": "Manejo Clínico da Dor",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endo",
      "sectionId": "endometriose-endometrioma",
      "title": "Endometrioma & AMH",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endo",
      "sectionId": "endometriose-infertilidade",
      "title": "Endometriose & FIV",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endo",
      "sectionId": "endometriose-cirurgia-profunda",
      "title": "Cirurgia de Profunda",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endo",
      "sectionId": "endometriose-casos",
      "title": "Casos de Endometriose",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endo",
      "sectionId": "endometriose-prescricao",
      "title": "Prescrições de Bolso",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolapso",
      "sectionId": "prolapso-delancey",
      "title": "Visão Geral & DeLancey",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolapso",
      "sectionId": "prolapso-popq",
      "title": "Classificação POP-Q",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolapso",
      "sectionId": "prolapso-iue-oculta",
      "title": "IUE Oculta Mascarada",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolapso",
      "sectionId": "prolapso-pessarios",
      "title": "Pessários & Fisioterapia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolapso",
      "sectionId": "prolapso-cirurgia-reconstrutiva",
      "title": "Cirurgia Reconstrutiva",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolapso",
      "sectionId": "prolapso-colpocleise",
      "title": "Colpocleise (Le Fort)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolapso",
      "sectionId": "prolapso-casos",
      "title": "Casos de Prolapso",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolapso",
      "sectionId": "prolapso-prescricao",
      "title": "Prescrições de Bolso",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "incont",
      "sectionId": "incontinencia-classificacao",
      "title": "Visão Geral & Classificação",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "incont",
      "sectionId": "incontinencia-urodinamica",
      "title": "Estudo Urodinâmico & VLPP",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "incont",
      "sectionId": "incontinencia-bexiga-hiperativa",
      "title": "Bexiga Hiperativa & Fármacos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "incont",
      "sectionId": "incontinencia-esforco",
      "title": "Manejo da IUE & Fisioterapia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "incont",
      "sectionId": "incontinencia-slings",
      "title": "Slings: TVT vs TOT",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "incont",
      "sectionId": "incontinencia-mista",
      "title": "Incontinência Mista (IUM)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "incont",
      "sectionId": "incontinencia-casos",
      "title": "Casos de Incontinência",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "incont",
      "sectionId": "incontinencia-prescricao",
      "title": "Prescrições de Bolso",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "clim",
      "sectionId": "climaterio-straw",
      "title": "Visão Geral & STRAW+10",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "clim",
      "sectionId": "climaterio-janela-risco",
      "title": "Janela de Oportunidade",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "clim",
      "sectionId": "climaterio-regimes",
      "title": "Regimes: E+P vs Tibolona",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "clim",
      "sectionId": "climaterio-vias",
      "title": "Via Transdérmica vs Oral",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "clim",
      "sectionId": "climaterio-nao-hormonal",
      "title": "Tratamento Não Hormonal",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "clim",
      "sectionId": "climaterio-sgm",
      "title": "Síndrome Geniturinária (SGM)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "clim",
      "sectionId": "climaterio-casos",
      "title": "Casos de Climatério",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "clim",
      "sectionId": "climaterio-prescricao",
      "title": "Prescrições de Bolso",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "trhav",
      "sectionId": "trhav-androgenios",
      "title": "Visão Geral & Androgênios",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "trhav",
      "sectionId": "trhav-monitoramento",
      "title": "Monitoramento de Segurança",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "trhav",
      "sectionId": "trhav-sangramento",
      "title": "Sangramento Inesperado na TRH",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "trhav",
      "sectionId": "trhav-osteoporose",
      "title": "Saúde Óssea & Osteoporose",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "trhav",
      "sectionId": "trhav-efeitos",
      "title": "Ajuste de Efeitos Adversos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "trhav",
      "sectionId": "trhav-desmame",
      "title": "Descontinuação & Desmame",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "trhav",
      "sectionId": "trhav-casos",
      "title": "Casos de TRH Especializada",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "trhav",
      "sectionId": "trhav-prescricao",
      "title": "Prescrições Especializadas",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infeccoes",
      "sectionId": "infeccoes-vulvovaginites",
      "title": "Visão Geral & Corrimentos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infeccoes",
      "sectionId": "infeccoes-vaginose-candida",
      "title": "Manejo de VB & CVVR",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infeccoes",
      "sectionId": "infeccoes-tricomoniase-cervicites",
      "title": "Tricomoníase & Cervicites",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infeccoes",
      "sectionId": "infeccoes-dip-diagnostico",
      "title": "DIP & Critérios de Monif",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infeccoes",
      "sectionId": "infeccoes-dip-manejo",
      "title": "Manejo da DIP & ATO",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infeccoes",
      "sectionId": "infeccoes-ulceras-ists",
      "title": "Úlceras Genitais & ISTs",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infeccoes",
      "sectionId": "infeccoes-casos",
      "title": "Casos de Infecções & DIP",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infeccoes",
      "sectionId": "infeccoes-prescricao",
      "title": "Prescrições Antimicrobianas",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dipav",
      "sectionId": "dipav-fisiopatologia",
      "title": "Visão Geral & Fisiopatologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dipav",
      "sectionId": "dipav-criterios",
      "title": "Critérios & Abdome Agudo",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dipav",
      "sectionId": "dipav-monif",
      "title": "Monif & Fitz-Hugh-Curtis",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dipav",
      "sectionId": "dipav-terapeutica",
      "title": "Ambulatorial vs Hospitalar",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dipav",
      "sectionId": "dipav-abscesso",
      "title": "Abscesso Tubo-Ovariano & DIU",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dipav",
      "sectionId": "dipav-sequelas",
      "title": "Sequelas Tuboperitoneais da DIP",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dipav",
      "sectionId": "dipav-casos",
      "title": "Casos Clínicos de DIP",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dipav",
      "sectionId": "dipav-prescricao",
      "title": "Prescrições Hospitalares",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mioma",
      "sectionId": "mioma-classificacao",
      "title": "Visão Geral & Classificação",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mioma",
      "sectionId": "mioma-propedutica",
      "title": "Propedêutica & Lasmar",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mioma",
      "sectionId": "mioma-clinico",
      "title": "Tratamento Medicamentoso",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mioma",
      "sectionId": "mioma-miomectomia",
      "title": "Miomectomia & Vias",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mioma",
      "sectionId": "mioma-embolizacao",
      "title": "Embolização de Artérias (EAU)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mioma",
      "sectionId": "mioma-histerectomia",
      "title": "Histerectomia & Degenerações",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mioma",
      "sectionId": "mioma-casos",
      "title": "Casos Clínicos de Miomas",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mioma",
      "sectionId": "mioma-prescricao",
      "title": "Prescrições em Miomatose",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "amenor",
      "sectionId": "amenor-primaria",
      "title": "Visão Geral & 4 Quadrantes",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "amenor",
      "sectionId": "amenor-rokitansky-morris",
      "title": "Rokitansky vs Morris",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "amenor",
      "sectionId": "amenor-secundaria",
      "title": "Secundária: 4 Passos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "amenor",
      "sectionId": "amenor-hipotalamo-hipofise",
      "title": "Hipotálamo vs Hipófise",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "amenor",
      "sectionId": "amenor-cariotipo",
      "title": "Cariótipo & Cromossomo Y",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "amenor",
      "sectionId": "amenor-manejo",
      "title": "Manejo & Reposição (TRH)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "amenor",
      "sectionId": "amenor-casos",
      "title": "Casos Clínicos (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "amenor",
      "sectionId": "amenor-prescricao",
      "title": "Prescrições & Doses",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "metodologia",
      "sectionId": "metodologia",
      "title": "Método do Fluxograma",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "abdome",
      "sectionId": "abdome-visao-geral",
      "title": "Visão Geral & Fisiopatologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "abdome",
      "sectionId": "abdome-semiologia",
      "title": "Roteiro Semiológico em 4 Eixos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "abdome",
      "sectionId": "abdome-triagem",
      "title": "Triagem & Hemodinâmica",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "abdome",
      "sectionId": "abdome-ectopica",
      "title": "Gravidez Ectópica (MTX vs Cirurgia)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "abdome",
      "sectionId": "abdome-torcao",
      "title": "Torção Anexial & Cisto Roto",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "abdome",
      "sectionId": "abdome-tabelas",
      "title": "Diagnóstico Diferencial Geral",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "abdome",
      "sectionId": "abdome-casos",
      "title": "Casos Clínicos de Emergência (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "abdome",
      "sectionId": "abdome-prescricao",
      "title": "Guia de Prescrição & Doses",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "ovario",
      "sectionId": "ovario-visao-geral",
      "title": "Visão Geral & Epidemiologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "ovario",
      "sectionId": "ovario-semiologia",
      "title": "Roteiro Semiológico & Red Flags",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "ovario",
      "sectionId": "ovario-iota",
      "title": "Regras Simples IOTA (Simple Rules)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "ovario",
      "sectionId": "ovario-marcadores",
      "title": "Marcadores Tumorais & Escore RMI",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "ovario",
      "sectionId": "ovario-benignos",
      "title": "Tumores Benignos & Sd. Meigs",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "ovario",
      "sectionId": "ovario-estadiamento",
      "title": "Estadiamento FIGO & Citorredução",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "ovario",
      "sectionId": "ovario-casos",
      "title": "Casos Clínicos Simulados (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "ovario",
      "sectionId": "ovario-prescricao",
      "title": "Quimioterapia & Doses Adjuvantes",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endometrio",
      "sectionId": "endometrio-visao-geral",
      "title": "Visão Geral & Fatores de Risco",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endometrio",
      "sectionId": "endometrio-semiologia",
      "title": "Roteiro Semiológico do SUPM",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endometrio",
      "sectionId": "endometrio-propedeutica",
      "title": "Propedêutica do SUPM & Pipelle",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endometrio",
      "sectionId": "endometrio-hiperplasias",
      "title": "Manejo das Hiperplasias (OMS)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endometrio",
      "sectionId": "endometrio-molecular",
      "title": "FIGO 2023 & Classificação Molecular",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endometrio",
      "sectionId": "endometrio-sarcomas",
      "title": "Sarcomas Uterinos & Diagnóstico",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endometrio",
      "sectionId": "endometrio-casos",
      "title": "Casos Clínicos Simulados (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "endometrio",
      "sectionId": "endometrio-prescricao",
      "title": "Prescrições, Hormônios & Imuno",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mamabenigna",
      "sectionId": "mamabenigna-visao-geral",
      "title": "Visão Geral & Dupont/Page",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mamabenigna",
      "sectionId": "mamabenigna-semiologia",
      "title": "Roteiro Semiológico em 4 Eixos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mamabenigna",
      "sectionId": "mamabenigna-nodulos",
      "title": "Fibroadenoma & Tumor Filodes",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mamabenigna",
      "sectionId": "mamabenigna-cistos",
      "title": "Cistos Mamários & PAAF",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mamabenigna",
      "sectionId": "mamabenigna-mastites",
      "title": "Mastites & Abscessos Mamários",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mamabenigna",
      "sectionId": "mamabenigna-descarga",
      "title": "Descarga Papilar & Papiloma",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mamabenigna",
      "sectionId": "mamabenigna-casos",
      "title": "Casos Clínicos Simulados (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "mamabenigna",
      "sectionId": "mamabenigna-prescricao",
      "title": "Guia de Prescrição & Doses",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "vulva",
      "sectionId": "vulva-visao-geral",
      "title": "Visão Geral & Classificação ISSVD",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "vulva",
      "sectionId": "vulva-semiologia",
      "title": "Roteiro Semiológico & Prurido",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "vulva",
      "sectionId": "vulva-liquen",
      "title": "Líquen Escleroso, Plano & Simples",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "vulva",
      "sectionId": "vulva-bartholin",
      "title": "Glândula de Bartholin (Word/Marsup.)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "vulva",
      "sectionId": "vulva-niv",
      "title": "NIV Usual, Diferenciada & Paget",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "vulva",
      "sectionId": "vulva-tabelas",
      "title": "Tabelas & Biópsia por Punch",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "vulva",
      "sectionId": "vulva-casos",
      "title": "Casos Clínicos Simulados (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "vulva",
      "sectionId": "vulva-prescricao",
      "title": "Guia de Prescrição Dermatológica",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cancervulva",
      "sectionId": "cancervulva-visao-geral",
      "title": "Visão Geral & Vias Carcinogênese",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cancervulva",
      "sectionId": "cancervulva-semiologia",
      "title": "Roteiro Semiológico & Inguinal",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cancervulva",
      "sectionId": "cancervulva-estadiamento",
      "title": "Estadiamento FIGO 2021 & Conduta",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cancervulva",
      "sectionId": "cancervulva-cirurgia",
      "title": "Incisão Tríplice & Sentinela (SLN)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cancervulva",
      "sectionId": "cancervulva-vagina",
      "title": "Câncer de Vagina & Braquiterapia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cancervulva",
      "sectionId": "cancervulva-tabelas",
      "title": "Tabelas de Margens & Estádios",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cancervulva",
      "sectionId": "cancervulva-casos",
      "title": "Casos Clínicos Simulados (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cancervulva",
      "sectionId": "cancervulva-prescricao",
      "title": "Quimiorradioterapia Adjuvante",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dor",
      "sectionId": "dor-visao-geral",
      "title": "Visão Geral & Fisiopatologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dor",
      "sectionId": "dor-semiologia",
      "title": "Roteiro Semiológico & Carnett",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dor",
      "sectionId": "dor-dismenorreia",
      "title": "Dismenorreia Primária vs Secundária",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dor",
      "sectionId": "dor-diagnostico-diferencial",
      "title": "Diagnóstico Diferencial (4 Esferas)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dor",
      "sectionId": "dor-terapeutica-multimodal",
      "title": "Terapêutica Multimodal & Neuromodulação",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dor",
      "sectionId": "dor-tabelas",
      "title": "Tabelas de Diagnóstico & Doses",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dor",
      "sectionId": "dor-casos",
      "title": "Casos Clínicos Simulados (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "dor",
      "sectionId": "dor-prescricao",
      "title": "Guia de Prescrição & Doses",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "spm",
      "sectionId": "spm-visao-geral",
      "title": "Visão Geral & Neuroendocrinologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "spm",
      "sectionId": "spm-semiologia",
      "title": "Roteiro Semiológico & Temporalidade",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "spm",
      "sectionId": "spm-criterios",
      "title": "Critérios Diagnósticos (ACOG/DSM-5)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "spm",
      "sectionId": "spm-manejo-farmacologico",
      "title": "Manejo Farmacológico (ISRS & ACOs)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "spm",
      "sectionId": "spm-nao-farmacologico",
      "title": "Estilo de Vida & Nutracêuticos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "spm",
      "sectionId": "spm-tabelas",
      "title": "Tabelas de Critérios & ISRS",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "spm",
      "sectionId": "spm-casos",
      "title": "Casos Clínicos Simulados (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "spm",
      "sectionId": "spm-prescricao",
      "title": "Guia de Prescrição Estruturado",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "polipos",
      "sectionId": "polipos-visao-geral",
      "title": "Visão Geral & Biopatologia Molecular",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "polipos",
      "sectionId": "polipos-semiologia",
      "title": "Roteiro Semiológico & SUA-P",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "polipos",
      "sectionId": "polipos-propedeutica",
      "title": "USG-TV, Histerossono & Histeroscopia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "polipos",
      "sectionId": "polipos-malignidade",
      "title": "Risco de Malignidade & Tamoxifeno",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "polipos",
      "sectionId": "polipos-conduta-cirurgica",
      "title": "Polipectomia & Conduta Cirúrgica",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "polipos",
      "sectionId": "polipos-tabelas",
      "title": "Diagnóstico Diferencial Histeroscópico",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "polipos",
      "sectionId": "polipos-casos",
      "title": "Casos Clínicos Simulados (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "polipos",
      "sectionId": "polipos-prescricao",
      "title": "Preparo Cervical & Prescrição",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "contracepcao",
      "sectionId": "contracepcao-visao-geral",
      "title": "Visão Geral & Farmacologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "contracepcao",
      "sectionId": "contracepcao-combinados",
      "title": "Combinados & Elegibilidade da OMS",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "contracepcao",
      "sectionId": "contracepcao-progestagenios",
      "title": "Progestagênio Isolado & Spotting",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "contracepcao",
      "sectionId": "contracepcao-emergencia",
      "title": "Contracepção de Emergência (AE)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "contracepcao",
      "sectionId": "contracepcao-esterilizacao",
      "title": "Esterilização & Nova Lei 14.443/2022",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "contracepcao",
      "sectionId": "contracepcao-tabelas",
      "title": "Tabelas de Critérios OMS & Doses",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "contracepcao",
      "sectionId": "contracepcao-casos",
      "title": "Casos Clínicos Simulados (3)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "contracepcao",
      "sectionId": "contracepcao-prescricao",
      "title": "Guia de Prescrição & Emergência",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "violencia",
      "sectionId": "violencia-visao-geral",
      "title": "Acolhimento & Aspectos Legais",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "violencia",
      "sectionId": "violencia-semiologia",
      "title": "Roteiro Semiológico & Forense",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "violencia",
      "sectionId": "violencia-pep-hiv",
      "title": "Profilaxia Pós-Exposição (PEP HIV)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "violencia",
      "sectionId": "violencia-profilaxias",
      "title": "ISTs Não-Virais, Hep B & Gestação",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "violencia",
      "sectionId": "violencia-seguimento",
      "title": "Seguimento & Aborto Legal",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "violencia",
      "sectionId": "violencia-fluxogramas",
      "title": "Fluxograma Atendimento Imediato",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "violencia",
      "sectionId": "violencia-tabelas",
      "title": "Protocolos de Drogas & Retornos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "violencia",
      "sectionId": "violencia-casos",
      "title": "Casos Clínicos & Prescrição Imediata",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infancia",
      "sectionId": "infancia-visao-geral",
      "title": "Particularidades Anatômicas",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infancia",
      "sectionId": "infancia-vulvovaginites",
      "title": "Vulvovaginites & Abuso Sexual",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infancia",
      "sectionId": "infancia-sinequia",
      "title": "Sinéquia de Pequenos Lábios",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infancia",
      "sectionId": "infancia-puberdade",
      "title": "Puberdade Precoce & Tardia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infancia",
      "sectionId": "infancia-dds",
      "title": "Distúrbios Diferenciação Sexual (DDS)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infancia",
      "sectionId": "infancia-fluxogramas",
      "title": "Fluxogramas Interativos (2)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infancia",
      "sectionId": "infancia-tabelas",
      "title": "Estadiamento Tanner & Síndromes",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "infancia",
      "sectionId": "infancia-casos",
      "title": "Casos Clínicos & Prescrição Pediátrica",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "saudeintegral",
      "sectionId": "saudeintegral-visao-geral",
      "title": "Consulta & Prevenção Quaternária",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "saudeintegral",
      "sectionId": "saudeintegral-vacinacao",
      "title": "Calendário Vacinal da Mulher",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "saudeintegral",
      "sectionId": "saudeintegral-lgbt",
      "title": "Saúde Ginecológica LGBTQIAPN+",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "saudeintegral",
      "sectionId": "saudeintegral-prevencao-quaternaria",
      "title": "Choosing Wisely: O Que Não Fazer",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "saudeintegral",
      "sectionId": "saudeintegral-especificidades",
      "title": "Acessibilidade & Idosa",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "saudeintegral",
      "sectionId": "saudeintegral-fluxogramas",
      "title": "Fluxograma Vacinal Interativo",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "saudeintegral",
      "sectionId": "saudeintegral-tabelas",
      "title": "Matriz Vacinal & Rastreamento Trans",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "saudeintegral",
      "sectionId": "saudeintegral-casos",
      "title": "Casos Clínicos & Prescrição Integral",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "fisiologia",
      "sectionId": "fisiologia-visao-geral",
      "title": "Eixo HHO & Pulsatilidade GnRH",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "fisiologia",
      "sectionId": "fisiologia-foliculo",
      "title": "Reserva & Seleção Folicular",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "fisiologia",
      "sectionId": "fisiologia-teoria",
      "title": "Teoria 2 Células / 2 Gonadotrofinas",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "fisiologia",
      "sectionId": "fisiologia-fases",
      "title": "Fases Folicular, Ovulação & Lútea",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "fisiologia",
      "sectionId": "fisiologia-endometrio",
      "title": "Ciclo Endometrial & Menstruação",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "fisiologia",
      "sectionId": "fisiologia-fluxogramas",
      "title": "Fluxograma Eixo HHO Interativo",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "fisiologia",
      "sectionId": "fisiologia-tabelas",
      "title": "Biomarcadores & Hormônios Ovarianos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "fisiologia",
      "sectionId": "fisiologia-casos",
      "title": "Casos Clínicos & Resolução Comentada",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolactina",
      "sectionId": "prolactina-visao-geral",
      "title": "Fisiologia da Prolactina & Eixo",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolactina",
      "sectionId": "prolactina-semiologia",
      "title": "Roteiro Semiológico: Galactorreia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolactina",
      "sectionId": "prolactina-etiologia",
      "title": "Etiologias & Causas Farmacológicas",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolactina",
      "sectionId": "prolactina-propedeutica",
      "title": "Macroprolactina (PEG) & Efeito Gancho",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolactina",
      "sectionId": "prolactina-tratamento",
      "title": "Agonistas Dopamina (Cabergolina)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolactina",
      "sectionId": "prolactina-fluxogramas",
      "title": "Fluxograma Diagnóstico & Conduta",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolactina",
      "sectionId": "prolactina-tabelas",
      "title": "Matriz Diagnóstica & Fármacos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "prolactina",
      "sectionId": "prolactina-casos",
      "title": "Casos Clínicos & Prescrição Comentada",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "iop",
      "sectionId": "iop-visao-geral",
      "title": "Critérios Diagnósticos ESHRE",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "iop",
      "sectionId": "iop-semiologia",
      "title": "Roteiro Semiológico & Avaliação",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "iop",
      "sectionId": "iop-etiologia",
      "title": "Genética (Y, FMR1) & Autoimunidade",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "iop",
      "sectionId": "iop-propedeutica",
      "title": "Painel Laboratorial & Densitometria",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "iop",
      "sectionId": "iop-terapeutica",
      "title": "TRH Fisiológica até 50 Anos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "iop",
      "sectionId": "iop-fluxogramas",
      "title": "Fluxograma Investigação & Manejo",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "iop",
      "sectionId": "iop-tabelas",
      "title": "Critérios ESHRE & Esquemas TRH",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "iop",
      "sectionId": "iop-casos",
      "title": "Casos Clínicos & Prescrição Fisiológica",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "pgr",
      "sectionId": "pgr-visao-geral",
      "title": "Conceito ≥ 2 Perdas & Etiologias",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "pgr",
      "sectionId": "pgr-saaf",
      "title": "SAAF Obstétrica (Critérios Sydney)",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "pgr",
      "sectionId": "pgr-anatomicas",
      "title": "Causas Anatômicas: Útero Septado",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "pgr",
      "sectionId": "pgr-geneticas",
      "title": "Genética Parental & Translocações",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "pgr",
      "sectionId": "pgr-trombofilias",
      "title": "Trombofilias Hereditárias & Rastreio",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "pgr",
      "sectionId": "pgr-fluxogramas",
      "title": "Fluxograma Investigação PGR",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "pgr",
      "sectionId": "pgr-tabelas",
      "title": "Matriz Diagnóstica & Doses HBPM",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "pgr",
      "sectionId": "pgr-casos",
      "title": "Casos Clínicos & Prescrição SAAF",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "urocomplexa",
      "sectionId": "urocomplexa-visao-geral",
      "title": "O Urotélio Além da Incontinência",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "urocomplexa",
      "sectionId": "urocomplexa-itu",
      "title": "ITU Recorrente & Profilaxias",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "urocomplexa",
      "sectionId": "urocomplexa-cistite-intersticial",
      "title": "Bexiga Dolorosa / Úlceras Hunner",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "urocomplexa",
      "sectionId": "urocomplexa-fistulas",
      "title": "Fístulas Vesico e Ureterovaginais",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "urocomplexa",
      "sectionId": "urocomplexa-propedeutica",
      "title": "Propedêutica & Teste do Tampão",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "urocomplexa",
      "sectionId": "urocomplexa-fluxogramas",
      "title": "Fluxograma ITUR & Fístulas",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "urocomplexa",
      "sectionId": "urocomplexa-tabelas",
      "title": "Profilaxias ITUR & Diferencial Fístulas",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "urocomplexa",
      "sectionId": "urocomplexa-casos",
      "title": "Casos Clínicos & Prescrição Uroginecológica",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cirurgia",
      "sectionId": "cirurgia-visao-geral",
      "title": "Anatomia Pélvica & CMI",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cirurgia",
      "sectionId": "cirurgia-embriologia",
      "title": "Embriologia Müller vs Wolff",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cirurgia",
      "sectionId": "cirurgia-muller",
      "title": "Malformações Müllerianas ESHRE",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cirurgia",
      "sectionId": "cirurgia-anatomia",
      "title": "Espaços Avasculares & Ureter",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cirurgia",
      "sectionId": "cirurgia-minimamente",
      "title": "Histeroscopia & Meios de Distensão",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cirurgia",
      "sectionId": "cirurgia-fluxogramas",
      "title": "Fluxograma Anatomia & Müller",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cirurgia",
      "sectionId": "cirurgia-tabelas",
      "title": "Espaços, Malformações & Meios",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "cirurgia",
      "sectionId": "cirurgia-casos",
      "title": "Casos Clínicos & Conduta Perioperatória",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "examefisico",
      "sectionId": "examefisico-visao-geral",
      "title": "Princípios Gerais, Ética & Acolhimento",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "examefisico",
      "sectionId": "examefisico-mamas",
      "title": "Exame Clínico das Mamas & Linfonodos",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "examefisico",
      "sectionId": "examefisico-abdome",
      "title": "Exame do Abdome em Ginecologia",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "examefisico",
      "sectionId": "examefisico-genitais-externos",
      "title": "Genitais Externos, Glândulas & Períneo",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "examefisico",
      "sectionId": "examefisico-especular",
      "title": "Exame Especular & Coletas Propedêuticas",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "examefisico",
      "sectionId": "examefisico-toque-bimanual",
      "title": "Toque Bimanual & Toque Retovaginal",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "examefisico",
      "sectionId": "examefisico-fluxogramas",
      "title": "Fluxogramas & Algoritmos de Decisão",
      "specialty": "ginecologia"
    },
    {
      "moduleId": "examefisico",
      "sectionId": "examefisico-tabelas-casos",
      "title": "Tabelas Semiológicas & Casos Clínicos",
      "specialty": "ginecologia"
    }
  ],
  "pediatria": [
    {
      "moduleId": "ped-reanima",
      "sectionId": "ped-reanima-definicao",
      "title": "Visão Geral &amp; Golden Minute",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reanima",
      "sectionId": "ped-reanima-fatores",
      "title": "Fatores de Risco &amp; Equipe",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reanima",
      "sectionId": "ped-reanima-passos-iniciais",
      "title": "Passos Iniciais (Mesa Radiante)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reanima",
      "sectionId": "ped-reanima-vpp",
      "title": "Ventilação com Pressão Positiva",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reanima",
      "sectionId": "ped-reanima-fluxograma",
      "title": "Fluxograma Decisório SBP 2024",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reanima",
      "sectionId": "ped-reanima-avancada",
      "title": "IOT, Massagem 3:1 &amp; Adrenalina",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reanima",
      "sectionId": "ped-reanima-cuidados-pos",
      "title": "Pós-PCR &amp; Hipotermia Terapêutica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reanima",
      "sectionId": "ped-reanima-caso",
      "title": "Caso Clínico Simulado Interativo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cuidneonat",
      "sectionId": "ped-cuidneonat-definicao",
      "title": "Classificação IG &amp; Peso (Lubchenco)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cuidneonat",
      "sectionId": "ped-cuidneonat-idade-gestacional",
      "title": "Capurro &amp; Escore New Ballard",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cuidneonat",
      "sectionId": "ped-cuidneonat-exame-fisico",
      "title": "Exame Físico &amp; Reflexos Primitivos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cuidneonat",
      "sectionId": "ped-cuidneonat-triagem",
      "title": "4 Triagens Físicas em Maternidade",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cuidneonat",
      "sectionId": "ped-cuidneonat-fluxograma",
      "title": "Fluxograma Decisório de Triagens",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cuidneonat",
      "sectionId": "ped-cuidneonat-teste-pezinho",
      "title": "Teste do Pezinho (PNTN &amp; Ampliado)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cuidneonat",
      "sectionId": "ped-cuidneonat-profilaxias",
      "title": "Profilaxias de Sala de Parto",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cuidneonat",
      "sectionId": "ped-cuidneonat-caso",
      "title": "Caso Clínico Simulado Interativo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-distresp-rn",
      "sectionId": "ped-distresp-rn-definicao",
      "title": "Boletim de Silverman-Andersen",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-distresp-rn",
      "sectionId": "ped-distresp-rn-sdrmh",
      "title": "SDR / Membrana Hialina",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-distresp-rn",
      "sectionId": "ped-distresp-rn-ttrn",
      "title": "Taquipneia Transitória (TTRN)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-distresp-rn",
      "sectionId": "ped-distresp-rn-sam-hppn",
      "title": "Aspiração Meconial (SAM) &amp; HPPN",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-distresp-rn",
      "sectionId": "ped-distresp-rn-fluxograma",
      "title": "Fluxograma Decisório Respiratório",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-distresp-rn",
      "sectionId": "ped-distresp-rn-suporte",
      "title": "Suporte: CPAP, Surfactante &amp; iNO",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-distresp-rn",
      "sectionId": "ped-distresp-rn-complicacoes",
      "title": "Pneumotórax &amp; Displasia Pulmonar",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-distresp-rn",
      "sectionId": "ped-distresp-rn-caso",
      "title": "Caso Clínico Simulado Interativo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-ictericia-sepse",
      "sectionId": "ped-ictericia-sepse-definicao",
      "title": "Metabolismo &amp; Zonas de Kramer",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-ictericia-sepse",
      "sectionId": "ped-ictericia-sepse-etiologia",
      "title": "Fisiológica vs Isoimunização Rh/ABO",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-ictericia-sepse",
      "sectionId": "ped-ictericia-sepse-clinica",
      "title": "Encefalopatia &amp; Kernicterus",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-ictericia-sepse",
      "sectionId": "ped-ictericia-sepse-tratamento",
      "title": "Curvas Bhutani, Fototerapia &amp; ET",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-ictericia-sepse",
      "sectionId": "ped-ictericia-sepse-fluxograma",
      "title": "Fluxograma Decisório Icterícia/Sepse",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-ictericia-sepse",
      "sectionId": "ped-ictericia-sepse-sepse",
      "title": "Sepse Precoce vs Tardia (GBS/E. coli)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-ictericia-sepse",
      "sectionId": "ped-ictericia-sepse-criterios",
      "title": "Choque Séptico &amp; Antibioticoterapia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-ictericia-sepse",
      "sectionId": "ped-ictericia-sepse-caso",
      "title": "Caso Clínico Simulado Interativo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-disturb-rn",
      "sectionId": "ped-disturb-rn-definicao",
      "title": "Homeostase &amp; Cortes SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-disturb-rn",
      "sectionId": "ped-disturb-rn-hipoglicemia",
      "title": "Populações de Risco (FMD, PIG, GIG)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-disturb-rn",
      "sectionId": "ped-disturb-rn-tig",
      "title": "Bolus Glicose &amp; Cálculo de TIG",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-disturb-rn",
      "sectionId": "ped-disturb-rn-hipocalcemia",
      "title": "Hipocalcemia &amp; Gluconato de Cálcio",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-disturb-rn",
      "sectionId": "ped-disturb-rn-fluxograma",
      "title": "Fluxograma Decisório Metabólico",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-disturb-rn",
      "sectionId": "ped-disturb-rn-policitemia",
      "title": "Policitemia &amp; Exsanguíneo Parcial",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-disturb-rn",
      "sectionId": "ped-disturb-rn-ecn",
      "title": "Enterocolite Necrosante (Bell)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-disturb-rn",
      "sectionId": "ped-disturb-rn-caso",
      "title": "Caso Clínico Simulado Interativo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-infecc-cong",
      "sectionId": "ped-infecc-cong-definicao",
      "title": "Transmissão Vertical &amp; Rastreio",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-infecc-cong",
      "sectionId": "ped-infecc-cong-sifilis-diagnostico",
      "title": "Diagnóstico de Sífilis (VDRL Pareado)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-infecc-cong",
      "sectionId": "ped-infecc-cong-sifilis-conduta",
      "title": "Esquemas de Penicilinas SBP/MS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-infecc-cong",
      "sectionId": "ped-infecc-cong-toxo",
      "title": "Toxoplasmose (Tríade de Sabin)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-infecc-cong",
      "sectionId": "ped-infecc-cong-cmv-rubeola",
      "title": "Citomegalovírus &amp; Rubéola Congênita",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-infecc-cong",
      "sectionId": "ped-infecc-cong-fluxograma",
      "title": "Fluxograma Decisório TORCH &amp; Sífilis",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-infecc-cong",
      "sectionId": "ped-infecc-cong-herpes-outras",
      "title": "Herpes Simples Neonatal (Aciclovir)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-infecc-cong",
      "sectionId": "ped-infecc-cong-caso",
      "title": "Caso Clínico Simulado Interativo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-crescimento",
      "sectionId": "ped-crescimento-definicao",
      "title": "Visão Geral & Diretrizes SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-crescimento",
      "sectionId": "ped-crescimento-antropometria",
      "title": "Técnica Antropométrica & Z-Score",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-crescimento",
      "sectionId": "ped-crescimento-velocidade",
      "title": "Velocidade de Crescimento & Alvo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-crescimento",
      "sectionId": "ped-crescimento-baixa-estatura",
      "title": "Investigação de Baixa Estatura",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-crescimento",
      "sectionId": "ped-crescimento-fluxograma",
      "title": "Fluxograma Decisório SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-crescimento",
      "sectionId": "ped-crescimento-etiologias",
      "title": "Variantes Normais vs Patológicas",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-crescimento",
      "sectionId": "ped-crescimento-alta-estatura",
      "title": "Alta Estatura & Desvios",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-crescimento",
      "sectionId": "ped-crescimento-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-dnpm",
      "sectionId": "ped-dnpm-definicao",
      "title": "Fundamentos & Vigilância",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-dnpm",
      "sectionId": "ped-dnpm-marcos",
      "title": "Marcos do DNPM (1 a 24 Meses)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-dnpm",
      "sectionId": "ped-dnpm-reflexos",
      "title": "Reflexos Primitivos Arcaicos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-dnpm",
      "sectionId": "ped-dnpm-escalas",
      "title": "Escalas de Triagem (Denver II)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-dnpm",
      "sectionId": "ped-dnpm-fluxograma",
      "title": "Fluxograma Decisório SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-dnpm",
      "sectionId": "ped-dnpm-autismo",
      "title": "Rastreio de Autismo (M-CHAT-R/F)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-dnpm",
      "sectionId": "ped-dnpm-intervencao",
      "title": "Estimulação Precoce & Conduta",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-dnpm",
      "sectionId": "ped-dnpm-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aleitamento",
      "sectionId": "ped-aleitamento-definicao",
      "title": "Fisiologia & Vantagens",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aleitamento",
      "sectionId": "ped-aleitamento-composicao",
      "title": "Fases & Composição do Leite",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aleitamento",
      "sectionId": "ped-aleitamento-tecnica",
      "title": "Técnica de Pega & Mamada",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aleitamento",
      "sectionId": "ped-aleitamento-dificuldades",
      "title": "Fissura, Ingurgitamento & Mastite",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aleitamento",
      "sectionId": "ped-aleitamento-fluxograma",
      "title": "Fluxograma de Intercorrências",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aleitamento",
      "sectionId": "ped-aleitamento-contraindicacoes",
      "title": "Contraindicações Formais SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aleitamento",
      "sectionId": "ped-aleitamento-ordenha",
      "title": "Ordenha & Banco de Leite",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aleitamento",
      "sectionId": "ped-aleitamento-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-nutricao",
      "sectionId": "ped-nutricao-definicao",
      "title": "Introdução aos 6 Meses (MS/SBP)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-nutricao",
      "sectionId": "ped-nutricao-metodos",
      "title": "Métodos (Tradicional, BLW, Bliss)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-nutricao",
      "sectionId": "ped-nutricao-grupos",
      "title": "Os 5 Grupos no Prato Infantil",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-nutricao",
      "sectionId": "ped-nutricao-alergenicos",
      "title": "Introdução de Alergênicos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-nutricao",
      "sectionId": "ped-nutricao-fluxograma",
      "title": "Fluxograma de Alimentação",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-nutricao",
      "sectionId": "ped-nutricao-proibicoes",
      "title": "Proibições & Riscos até 2 Anos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-nutricao",
      "sectionId": "ped-nutricao-formulas",
      "title": "Fórmulas Infantis & Fases",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-nutricao",
      "sectionId": "ped-nutricao-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-desnutricao",
      "sectionId": "ped-desnutricao-definicao",
      "title": "Conceito & Critérios OMS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-desnutricao",
      "sectionId": "ped-desnutricao-formas",
      "title": "Marasmo vs Kwashiorkor",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-desnutricao",
      "sectionId": "ped-desnutricao-fisiopatologia",
      "title": "Fisiopatologia Redutiva",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-desnutricao",
      "sectionId": "ped-desnutricao-estabilizacao",
      "title": "Fase 1: Estabilização & ReSoMal",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-desnutricao",
      "sectionId": "ped-desnutricao-fluxograma",
      "title": "Fluxograma dos 10 Passos OMS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-desnutricao",
      "sectionId": "ped-desnutricao-refeeding",
      "title": "Fase 2: Transição & Refeeding",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-desnutricao",
      "sectionId": "ped-desnutricao-reabilitacao",
      "title": "Fase 3: Reabilitação & Ferro",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-desnutricao",
      "sectionId": "ped-desnutricao-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-vitaminas",
      "sectionId": "ped-vitaminas-definicao",
      "title": "Importância dos Micronutrientes",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-vitaminas",
      "sectionId": "ped-vitaminas-ferro",
      "title": "Profilaxia Universal de Ferro SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-vitaminas",
      "sectionId": "ped-vitaminas-vit-d",
      "title": "Vitamina D & Raquitismo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-vitaminas",
      "sectionId": "ped-vitaminas-vit-a",
      "title": "Vitamina A & Xeroftalmia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-vitaminas",
      "sectionId": "ped-vitaminas-fluxograma",
      "title": "Fluxograma de Suplementação SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-vitaminas",
      "sectionId": "ped-vitaminas-zinco",
      "title": "Zinco & Doenças Diarreicas",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-vitaminas",
      "sectionId": "ped-vitaminas-outras",
      "title": "Outras Hipovitaminoses & Escorbuto",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-vitaminas",
      "sectionId": "ped-vitaminas-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-obesidade",
      "sectionId": "ped-obesidade-definicao",
      "title": "Critérios Antropométricos OMS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-obesidade",
      "sectionId": "ped-obesidade-etiologia",
      "title": "Obesidade Exógena vs Secundária",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-obesidade",
      "sectionId": "ped-obesidade-comorbidades",
      "title": "Síndrome Metabólica & HAS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-obesidade",
      "sectionId": "ped-obesidade-propedeutica",
      "title": "Rastreio Laboratorial & MASLD",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-obesidade",
      "sectionId": "ped-obesidade-fluxograma",
      "title": "Fluxograma de Rastreio SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-obesidade",
      "sectionId": "ped-obesidade-tratamento",
      "title": "Diretriz 5-2-1-0 & Estilo de Vida",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-obesidade",
      "sectionId": "ped-obesidade-cirurgia",
      "title": "Farmacoterapia & Bariátrica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-obesidade",
      "sectionId": "ped-obesidade-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-puberdade",
      "sectionId": "ped-puberdade-definicao",
      "title": "Fisiologia HHO & Prazos Normais",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-puberdade",
      "sectionId": "ped-puberdade-tanner",
      "title": "Estadiamento de Tanner (M, P, G)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-puberdade",
      "sectionId": "ped-puberdade-marcos",
      "title": "Sequência Puberal & Estirão",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-puberdade",
      "sectionId": "ped-puberdade-variantes",
      "title": "Variantes Benignas (Telarca Isolada)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-puberdade",
      "sectionId": "ped-puberdade-fluxograma",
      "title": "Fluxograma de Puberdade Precoce",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-puberdade",
      "sectionId": "ped-puberdade-precoce",
      "title": "Central vs Periférica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-puberdade",
      "sectionId": "ped-puberdade-atraso",
      "title": "Atraso Puberal & Hipogonadismo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-puberdade",
      "sectionId": "ped-puberdade-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hebiatria",
      "sectionId": "ped-hebiatria-definicao",
      "title": "Marco Conceitual & Princípios ECA",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hebiatria",
      "sectionId": "ped-hebiatria-consulta",
      "title": "Consulta a Sós & Sigilo Médico",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hebiatria",
      "sectionId": "ped-hebiatria-semiologia",
      "title": "Roteiro Mnemônico HEEADSSS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hebiatria",
      "sectionId": "ped-hebiatria-saude-mental",
      "title": "Saúde Mental, Telas & Humor",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hebiatria",
      "sectionId": "ped-hebiatria-fluxograma",
      "title": "Fluxograma de Atendimento Sigiloso",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hebiatria",
      "sectionId": "ped-hebiatria-drogas",
      "title": "Álcool, Vape & Drogas (CRAFFT)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hebiatria",
      "sectionId": "ped-hebiatria-sexualidade",
      "title": "Direitos Sexuais & Contracepção",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hebiatria",
      "sectionId": "ped-hebiatria-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-seguranca",
      "sectionId": "ped-seguranca-definicao",
      "title": "Epidemiologia dos Traumas Infantis",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-seguranca",
      "sectionId": "ped-seguranca-domiciliar",
      "title": "Segurança Domiciliar por Idade",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-seguranca",
      "sectionId": "ped-seguranca-transito",
      "title": "Dispositivos Veiculares (CONTRAN)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-seguranca",
      "sectionId": "ped-seguranca-afogamento",
      "title": "Prevenção de Afogamento (Regra Toque)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-seguranca",
      "sectionId": "ped-seguranca-fluxograma",
      "title": "Fluxograma de Segurança Infantil",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-seguranca",
      "sectionId": "ped-seguranca-queimaduras",
      "title": "Queimaduras & Intoxicações",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-seguranca",
      "sectionId": "ped-seguranca-sufocacao",
      "title": "Sufocação & Manobra de Heimlich",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-seguranca",
      "sectionId": "ped-seguranca-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-asma",
      "sectionId": "ped-asma-definicao",
      "title": "Visão Geral & Diretrizes SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-asma",
      "sectionId": "ped-asma-semiologia",
      "title": "Semiologia & Lactente Sibilante",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-asma",
      "sectionId": "ped-asma-classificacao",
      "title": "Classificação GINA & Controle",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-asma",
      "sectionId": "ped-asma-manutencao",
      "title": "Manejo de Manutenção Escalonado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-asma",
      "sectionId": "ped-asma-fluxograma",
      "title": "Fluxograma da Crise de Asma",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-asma",
      "sectionId": "ped-asma-crise",
      "title": "Manejo da Exacerbação Aguda & UTI",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-asma",
      "sectionId": "ped-asma-tabelas",
      "title": "Tabelas Posológicas & Dispositivos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-asma",
      "sectionId": "ped-asma-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-bronquiolite",
      "sectionId": "ped-bronquiolite-definicao",
      "title": "Visão Geral & Etiopatogenia VSR",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-bronquiolite",
      "sectionId": "ped-bronquiolite-semiologia",
      "title": "Semiologia & Escore Wood-Downes",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-bronquiolite",
      "sectionId": "ped-bronquiolite-criterios",
      "title": "Critérios de Internação & Apneia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-bronquiolite",
      "sectionId": "ped-bronquiolite-suporte",
      "title": "Suporte Baseado em Evidências",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-bronquiolite",
      "sectionId": "ped-bronquiolite-fluxograma",
      "title": "Fluxograma Decisório da BVA",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-bronquiolite",
      "sectionId": "ped-bronquiolite-naofazer",
      "title": "O Que NÃO Fazer (SBP / Choosing)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-bronquiolite",
      "sectionId": "ped-bronquiolite-profilaxia",
      "title": "Profilaxia: Palivizumabe & Nirsevimabe",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-bronquiolite",
      "sectionId": "ped-bronquiolite-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-pneumonia",
      "sectionId": "ped-pneumonia-definicao",
      "title": "Visão Geral & Epidemiologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-pneumonia",
      "sectionId": "ped-pneumonia-semiologia",
      "title": "Semiologia & Taquipneia OMS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-pneumonia",
      "sectionId": "ped-pneumonia-estratificacao",
      "title": "Estratificação & Radiologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-pneumonia",
      "sectionId": "ped-pneumonia-tratamento",
      "title": "Antibioticoterapia por Idade",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-pneumonia",
      "sectionId": "ped-pneumonia-fluxograma",
      "title": "Fluxograma da Pneumonia Infantil",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-pneumonia",
      "sectionId": "ped-pneumonia-complicacoes",
      "title": "Derrame Pleural & Empiema",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-pneumonia",
      "sectionId": "ped-pneumonia-atipicos",
      "title": "Pneumonias Atípicas & Macrolídeos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-pneumonia",
      "sectionId": "ped-pneumonia-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-anafilaxia",
      "sectionId": "ped-anafilaxia-definicao",
      "title": "Visão Geral & Fisiopatologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-anafilaxia",
      "sectionId": "ped-anafilaxia-semiologia",
      "title": "Semiologia em 4 Eixos & Alérgenos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-anafilaxia",
      "sectionId": "ped-anafilaxia-criterios",
      "title": "Critérios Diagnósticos WAO / SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-anafilaxia",
      "sectionId": "ped-anafilaxia-adrenalina",
      "title": "Adrenalina IM: Primeira Linha",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-anafilaxia",
      "sectionId": "ped-anafilaxia-fluxograma",
      "title": "Fluxograma da Anafilaxia Grave",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-anafilaxia",
      "sectionId": "ped-anafilaxia-choque",
      "title": "Choque Anafilático & DVA Contínua",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-anafilaxia",
      "sectionId": "ped-anafilaxia-plano",
      "title": "Autoinjetores & Prevenção de Recorrência",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-anafilaxia",
      "sectionId": "ped-anafilaxia-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-alergia-alim",
      "sectionId": "ped-alergia-alim-definicao",
      "title": "Visão Geral & Epidemiologia APLV",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-alergia-alim",
      "sectionId": "ped-alergia-alim-semiologia",
      "title": "IgE-Mediadas vs Não-IgE-Mediadas",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-alergia-alim",
      "sectionId": "ped-alergia-alim-manifestacoes",
      "title": "Proctocolite, FPIES & Enteropatia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-alergia-alim",
      "sectionId": "ped-alergia-alim-diagnostico",
      "title": "Investigação Diagnóstica Racional",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-alergia-alim",
      "sectionId": "ped-alergia-alim-fluxograma",
      "title": "Fluxograma da APLV na Infância",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-alergia-alim",
      "sectionId": "ped-alergia-alim-formulas",
      "title": "Fórmulas Especiais (FEH vs FAA)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-alergia-alim",
      "sectionId": "ped-alergia-alim-tpo",
      "title": "Teste de Provocação Oral (TPO)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-alergia-alim",
      "sectionId": "ped-alergia-alim-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-coqueluche-fc",
      "sectionId": "ped-coqueluche-fc-definicao",
      "title": "Visão Geral: Coqueluche & FC",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-coqueluche-fc",
      "sectionId": "ped-coqueluche-fc-semiologia",
      "title": "Semiologia da Tosse Paroxística",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-coqueluche-fc",
      "sectionId": "ped-coqueluche-fc-diagnostico",
      "title": "PCR B. pertussis & Linfocitose",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-coqueluche-fc",
      "sectionId": "ped-coqueluche-fc-tratamento",
      "title": "Manejo da Coqueluche & Azitromicina",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-coqueluche-fc",
      "sectionId": "ped-coqueluche-fc-fluxograma",
      "title": "Fluxograma Coqueluche vs Fibrose Cística",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-coqueluche-fc",
      "sectionId": "ped-coqueluche-fc-triagemfc",
      "title": "Triagem IRT & Teste do Suor",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-coqueluche-fc",
      "sectionId": "ped-coqueluche-fc-manejofc",
      "title": "Manejo da Fibrose Cística & Moduladores",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-coqueluche-fc",
      "sectionId": "ped-coqueluche-fc-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-imunizacoes",
      "sectionId": "ped-imunizacoes-definicao",
      "title": "Princípios Imunológicos SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-imunizacoes",
      "sectionId": "ped-imunizacoes-calendario",
      "title": "Calendário Vacinal Completo 2024",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-imunizacoes",
      "sectionId": "ped-imunizacoes-atrasos",
      "title": "Manejo de Atrasos & Recuperação",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-imunizacoes",
      "sectionId": "ped-imunizacoes-crie",
      "title": "Imunobiológicos Especiais (CRIE)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-imunizacoes",
      "sectionId": "ped-imunizacoes-fluxograma",
      "title": "Fluxograma Decisório em Vacinação",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-imunizacoes",
      "sectionId": "ped-imunizacoes-falsascontra",
      "title": "Falsas vs Verdadeiras Contraindicações",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-imunizacoes",
      "sectionId": "ped-imunizacoes-esavi",
      "title": "Eventos Adversos Pós-Vacinais (ESAVI)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-imunizacoes",
      "sectionId": "ped-imunizacoes-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-febre-sem-foco",
      "sectionId": "ped-febre-sem-foco-definicao",
      "title": "Visão Geral & Conceituação FSF",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-febre-sem-foco",
      "sectionId": "ped-febre-sem-foco-semiologia",
      "title": "Semiologia & Escala de Yale",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-febre-sem-foco",
      "sectionId": "ped-febre-sem-foco-neonatos",
      "title": "Neonatos &lt; 28 Dias: Alto Risco",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-febre-sem-foco",
      "sectionId": "ped-febre-sem-foco-rochester",
      "title": "Lactentes 29-90 Dias (Rochester)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-febre-sem-foco",
      "sectionId": "ped-febre-sem-foco-fluxograma",
      "title": "Fluxograma da Febre sem Foco",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-febre-sem-foco",
      "sectionId": "ped-febre-sem-foco-itu",
      "title": "ITU Oculta em 3 a 36 Meses",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-febre-sem-foco",
      "sectionId": "ped-febre-sem-foco-biomarcadores",
      "title": "Biomarcadores: Procalcitonina & PCR",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-febre-sem-foco",
      "sectionId": "ped-febre-sem-foco-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-exantematicas",
      "sectionId": "ped-exantematicas-definicao",
      "title": "Visão Geral & Classificação",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-exantematicas",
      "sectionId": "ped-exantematicas-semiologia",
      "title": "Semiologia Dermatológica Infantil",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-exantematicas",
      "sectionId": "ped-exantematicas-maculopapular",
      "title": "Sarampo, Rubéola & Roséola",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-exantematicas",
      "sectionId": "ped-exantematicas-vesiculares",
      "title": "Varicela, Escarlatina & Coxsackie",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-exantematicas",
      "sectionId": "ped-exantematicas-fluxograma",
      "title": "Fluxograma dos Exantemas Infantis",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-exantematicas",
      "sectionId": "ped-exantematicas-purpuricos",
      "title": "Red Flags: Púrpuras & Meningococo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-exantematicas",
      "sectionId": "ped-exantematicas-kawasaki",
      "title": "Doença de Kawasaki & Aneurismas",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-exantematicas",
      "sectionId": "ped-exantematicas-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-tuberculose",
      "sectionId": "ped-tuberculose-definicao",
      "title": "Visão Geral & Particularidades",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-tuberculose",
      "sectionId": "ped-tuberculose-semiologia",
      "title": "Semiologia & Contato Bacilífero",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-tuberculose",
      "sectionId": "ped-tuberculose-escore",
      "title": "Sistema de Pontuação MS/SBP 2024",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-tuberculose",
      "sectionId": "ped-tuberculose-propedeutica",
      "title": "PPD / IGRA & Lavado Gástrico",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-tuberculose",
      "sectionId": "ped-tuberculose-fluxograma",
      "title": "Fluxograma do Escore de TB Infantil",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-tuberculose",
      "sectionId": "ped-tuberculose-tratamento",
      "title": "Esquemas RHZ / RHZE & Posologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-tuberculose",
      "sectionId": "ped-tuberculose-quimioprofilaxia",
      "title": "Tratamento da Infecção Latente (ILTB)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-tuberculose",
      "sectionId": "ped-tuberculose-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-drge",
      "sectionId": "ped-drge-definicao",
      "title": "Visão Geral & Fisiopatologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-drge",
      "sectionId": "ped-drge-semiologia",
      "title": "Semiologia & Sinais de Alarme",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-drge",
      "sectionId": "ped-drge-diagnostico",
      "title": "Diagnóstico & Métodos de Imagem",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-drge",
      "sectionId": "ped-drge-conservador",
      "title": "Manejo Postural & Dietético",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-drge",
      "sectionId": "ped-drge-fluxograma",
      "title": "Fluxograma Decisório do RGE",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-drge",
      "sectionId": "ped-drge-farmacologico",
      "title": "Terapia Farmacológica (IBP)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-drge",
      "sectionId": "ped-drge-cirurgico",
      "title": "Indicações Cirúrgicas & Sandifer",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-drge",
      "sectionId": "ped-drge-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-diarreia",
      "sectionId": "ped-diarreia-definicao",
      "title": "Visão Geral & Etiopatogenia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-diarreia",
      "sectionId": "ped-diarreia-semiologia",
      "title": "Avaliação da Desidratação",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-diarreia",
      "sectionId": "ped-diarreia-plano-a",
      "title": "Plano A (Domiciliar & Zinco)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-diarreia",
      "sectionId": "ped-diarreia-plano-b",
      "title": "Plano B (Terapia de Reidratação Oral)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-diarreia",
      "sectionId": "ped-diarreia-fluxograma",
      "title": "Fluxograma da Desidratação OMS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-diarreia",
      "sectionId": "ped-diarreia-plano-c",
      "title": "Plano C (Expansão Venosa Rápida)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-diarreia",
      "sectionId": "ped-diarreia-disenteria",
      "title": "Disenteria, Antibióticos & SHU",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-diarreia",
      "sectionId": "ped-diarreia-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-constipacao",
      "sectionId": "ped-constipacao-definicao",
      "title": "Conceituação & Fisiopatologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-constipacao",
      "sectionId": "ped-constipacao-roma-iv",
      "title": "Critérios Roma IV & Encoprese",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-constipacao",
      "sectionId": "ped-constipacao-organicas",
      "title": "Descarte de Causas Orgânicas",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-constipacao",
      "sectionId": "ped-constipacao-desimpactacao",
      "title": "Desimpactação Fecal (PEG 4000)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-constipacao",
      "sectionId": "ped-constipacao-fluxograma",
      "title": "Fluxograma da Constipação SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-constipacao",
      "sectionId": "ped-constipacao-manutencao",
      "title": "Manutenção Laxativa & Desmame",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-constipacao",
      "sectionId": "ped-constipacao-habitos",
      "title": "Treinamento de Hábitos & Postura",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-constipacao",
      "sectionId": "ped-constipacao-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-celiaca",
      "sectionId": "ped-celiaca-definicao",
      "title": "Visão Geral & Fisiopatologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-celiaca",
      "sectionId": "ped-celiaca-manifestacoes",
      "title": "Formas Clássicas & Extraintestinais",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-celiaca",
      "sectionId": "ped-celiaca-sorologia",
      "title": "Sorologia (anti-tTG IgA & IgA Total)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-celiaca",
      "sectionId": "ped-celiaca-criterio-sem-biopsia",
      "title": "Critério Sem Biópsia (ESPGHAN 2020)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-celiaca",
      "sectionId": "ped-celiaca-fluxograma",
      "title": "Fluxograma Diagnóstico Celíaco",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-celiaca",
      "sectionId": "ped-celiaca-biopsia",
      "title": "Biópsias Duodenais & Marsh",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-celiaca",
      "sectionId": "ped-celiaca-tratamento",
      "title": "Dieta sem Glúten & Seguimento",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-celiaca",
      "sectionId": "ped-celiaca-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-itu-enurese",
      "sectionId": "ped-itu-enurese-definicao",
      "title": "Visão Geral & Pielonefrite vs Cistite",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-itu-enurese",
      "sectionId": "ped-itu-enurese-coleta",
      "title": "Métodos de Coleta & Urocultura",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-itu-enurese",
      "sectionId": "ped-itu-enurese-tratamento",
      "title": "Antibioticoterapia Pediátrica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-itu-enurese",
      "sectionId": "ped-itu-enurese-propedeutica",
      "title": "Roteiro de Imagem (USG, UCRM, DMSA)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-itu-enurese",
      "sectionId": "ped-itu-enurese-fluxograma",
      "title": "Fluxograma da ITU Pediátrica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-itu-enurese",
      "sectionId": "ped-itu-enurese-refluxo",
      "title": "Refluxo Vesicoureteral & Cicatrizes",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-itu-enurese",
      "sectionId": "ped-itu-enurese-enurese",
      "title": "Enurese Noturna Monossintomática",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-itu-enurese",
      "sectionId": "ped-itu-enurese-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-choque",
      "sectionId": "ped-choque-definicao",
      "title": "Fisiopatologia & Estágios do Choque",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-choque",
      "sectionId": "ped-choque-semiologia",
      "title": "Sinais de Alerta & Má Perfusão",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-choque",
      "sectionId": "ped-choque-compensado-hipotensivo",
      "title": "Choque Compensado vs Hipotensivo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-choque",
      "sectionId": "ped-choque-golden-hour",
      "title": "Protocolo da 1ª Hora (Golden Hour)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-choque",
      "sectionId": "ped-choque-fluxograma",
      "title": "Fluxograma do Choque PALS/SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-choque",
      "sectionId": "ped-choque-drogas-vasoativas",
      "title": "Drogas Vasoativas & Inotrópicos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-choque",
      "sectionId": "ped-choque-acesso-io",
      "title": "Acesso Intraósseo (IO) Rápido",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-choque",
      "sectionId": "ped-choque-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-emerg-pcr",
      "sectionId": "ped-emerg-pcr-definicao",
      "title": "Peculiaridades da PCR Infantil",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-emerg-pcr",
      "sectionId": "ped-emerg-pcr-bls",
      "title": "Suporte Básico de Vida (BLS Pediátrico)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-emerg-pcr",
      "sectionId": "ped-emerg-pcr-nao-chocaveis",
      "title": "Ritmos Não-Chocáveis (Assistolia/AESP)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-emerg-pcr",
      "sectionId": "ped-emerg-pcr-chocaveis",
      "title": "Ritmos Chocáveis (FV / TVsp)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-emerg-pcr",
      "sectionId": "ped-emerg-pcr-fluxograma",
      "title": "Algoritmo de PCR Pediátrica PALS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-emerg-pcr",
      "sectionId": "ped-emerg-pcr-etiologias",
      "title": "Causas Reversíveis (6 H's & 5 T's)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-emerg-pcr",
      "sectionId": "ped-emerg-pcr-pos-pcr",
      "title": "Cuidados Pós-Ressuscitação em UTI",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-emerg-pcr",
      "sectionId": "ped-emerg-pcr-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-brue-smsl",
      "sectionId": "ped-brue-smsl-definicao",
      "title": "Conceito Moderno de BRUE (vs ALTE)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-brue-smsl",
      "sectionId": "ped-brue-smsl-criterios-baixo-risco",
      "title": "Critérios de Baixo Risco (AAP/SBP)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-brue-smsl",
      "sectionId": "ped-brue-smsl-propedeutica-baixo-risco",
      "title": "Conduta Racional no Baixo Risco",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-brue-smsl",
      "sectionId": "ped-brue-smsl-alto-risco",
      "title": "Conduta no BRUE de Alto Risco",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-brue-smsl",
      "sectionId": "ped-brue-smsl-fluxograma",
      "title": "Fluxograma Decisório BRUE & Risco",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-brue-smsl",
      "sectionId": "ped-brue-smsl-sono-seguro",
      "title": "Sono Seguro & Prevenção da SMSL",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-brue-smsl",
      "sectionId": "ped-brue-smsl-orientacao-familias",
      "title": "Treinamento Familiar em BLS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-brue-smsl",
      "sectionId": "ped-brue-smsl-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-convulsao",
      "sectionId": "ped-convulsao-definicao",
      "title": "Visão Geral &amp; Fisiopatologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-convulsao",
      "sectionId": "ped-convulsao-simples-complexa",
      "title": "Simples vs Complexa",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-convulsao",
      "sectionId": "ped-convulsao-puncao-lombar",
      "title": "Indicações de Punção Lombar",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-convulsao",
      "sectionId": "ped-convulsao-manejo-agudo",
      "title": "Manejo Agudo &amp; Benzodiazepínicos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-convulsao",
      "sectionId": "ped-convulsao-fluxograma",
      "title": "Fluxograma da Crise Convulsiva",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-convulsao",
      "sectionId": "ped-convulsao-status-epilepticus",
      "title": "Estado de Mal Epiléptico",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-convulsao",
      "sectionId": "ped-convulsao-espasmos-west",
      "title": "Espasmos Infantis &amp; Sínd. de West",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-convulsao",
      "sectionId": "ped-convulsao-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cefaleias",
      "sectionId": "ped-cefaleias-definicao",
      "title": "Visão Geral &amp; Classificação",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cefaleias",
      "sectionId": "ped-cefaleias-sinais-alarme",
      "title": "Sinais de Alarme (SNOOP)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cefaleias",
      "sectionId": "ped-cefaleias-migranea",
      "title": "Migrânea &amp; Equivalentes",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cefaleias",
      "sectionId": "ped-cefaleias-tensional",
      "title": "Cefaleia Tensional &amp; Outras",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cefaleias",
      "sectionId": "ped-cefaleias-fluxograma",
      "title": "Fluxograma Diagnóstico",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cefaleias",
      "sectionId": "ped-cefaleias-tratamento-agudo",
      "title": "Tratamento da Crise Aguda",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cefaleias",
      "sectionId": "ped-cefaleias-profilaxia",
      "title": "Profilaxia Medicamentosa",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cefaleias",
      "sectionId": "ped-cefaleias-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-vasc",
      "sectionId": "ped-reumato-vasc-definicao",
      "title": "Visão Geral das Vasculites",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-vasc",
      "sectionId": "ped-reumato-vasc-henoch-clinica",
      "title": "Henoch-Schönlein: Tétrade",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-vasc",
      "sectionId": "ped-reumato-vasc-henoch-manejo",
      "title": "Manejo &amp; Nefrite por IgA",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-vasc",
      "sectionId": "ped-reumato-vasc-kawasaki-criterios",
      "title": "Kawasaki: Critérios AHA/SBP",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-vasc",
      "sectionId": "ped-reumato-vasc-fluxograma",
      "title": "Fluxograma das Vasculites",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-vasc",
      "sectionId": "ped-reumato-vasc-kawasaki-tratamento",
      "title": "Tratamento: IVIG &amp; AAS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-vasc",
      "sectionId": "ped-reumato-vasc-kawasaki-incompleto",
      "title": "Kawasaki Incompleto &amp; Coronárias",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-vasc",
      "sectionId": "ped-reumato-vasc-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-aij",
      "sectionId": "ped-reumato-aij-definicao",
      "title": "Visão Geral da Artrite Pediátrica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-aij",
      "sectionId": "ped-reumato-aij-jones-criterios",
      "title": "Critérios de Jones Revisados",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-aij",
      "sectionId": "ped-reumato-aij-fr-tratamento",
      "title": "Tratamento &amp; Profilaxia da FR",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-aij",
      "sectionId": "ped-reumato-aij-subtipos",
      "title": "AIJ: Subtipos Clínicos (ILAR)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-aij",
      "sectionId": "ped-reumato-aij-fluxograma",
      "title": "Fluxograma Articular",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-aij",
      "sectionId": "ped-reumato-aij-uveite",
      "title": "Rastreio de Uveíte Anterior",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-aij",
      "sectionId": "ped-reumato-aij-tratamento-dmard",
      "title": "Tratamento AIJ: MTX &amp; Biológicos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-reumato-aij",
      "sectionId": "ped-reumato-aij-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cardiopatias",
      "sectionId": "ped-cardiopatias-definicao",
      "title": "Fisiologia &amp; Transição Neonatal",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cardiopatias",
      "sectionId": "ped-cardiopatias-teste-coracaozinho",
      "title": "Teste do Coraçãozinho",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cardiopatias",
      "sectionId": "ped-cardiopatias-acianogenicas",
      "title": "Acianogênicas: Shunts &amp; Coarctação",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cardiopatias",
      "sectionId": "ped-cardiopatias-cianogenicas",
      "title": "Cianogênicas: Fallot &amp; TGA",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cardiopatias",
      "sectionId": "ped-cardiopatias-fluxograma",
      "title": "Fluxograma Cardiopatias &amp; HAS",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cardiopatias",
      "sectionId": "ped-cardiopatias-emergencias",
      "title": "Emergências &amp; Canal-Dependentes",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cardiopatias",
      "sectionId": "ped-cardiopatias-hipertensao",
      "title": "Hipertensão Arterial Pediátrica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-cardiopatias",
      "sectionId": "ped-cardiopatias-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-genetica",
      "sectionId": "ped-genetica-definicao",
      "title": "Visão Geral &amp; Abordagem Genética",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-genetica",
      "sectionId": "ped-genetica-down",
      "title": "Síndrome de Down (Trissomia 21)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-genetica",
      "sectionId": "ped-genetica-turner-klinefelter",
      "title": "Turner (45,X) &amp; Klinefelter",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-genetica",
      "sectionId": "ped-genetica-teste-pezinho",
      "title": "Triagem Neonatal Biológica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-genetica",
      "sectionId": "ped-genetica-fluxograma",
      "title": "Fluxograma Genética &amp; Triagem",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-genetica",
      "sectionId": "ped-genetica-hipotireoidismo",
      "title": "Hipotireoidismo Congênito",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-genetica",
      "sectionId": "ped-genetica-hiperplasia-adrenal",
      "title": "Hiperplasia Adrenal Congênita (HAC)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-genetica",
      "sectionId": "ped-genetica-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-sifilis-cong",
      "sectionId": "ped-sifilis-cong-definicao",
      "title": "Visão Geral &amp; Epidemiologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-sifilis-cong",
      "sectionId": "ped-sifilis-cong-transmissao",
      "title": "Transmissão &amp; Fisiopatologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-sifilis-cong",
      "sectionId": "ped-sifilis-cong-clinica",
      "title": "Manifestações Precoces vs Tardias",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-sifilis-cong",
      "sectionId": "ped-sifilis-cong-diagnostico",
      "title": "Diagnóstico Sorológico &amp; LCR",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-sifilis-cong",
      "sectionId": "ped-sifilis-cong-fluxograma",
      "title": "Fluxograma Decisório SVG",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-sifilis-cong",
      "sectionId": "ped-sifilis-cong-tratamento",
      "title": "Penicilinoterapia &amp; Posologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-sifilis-cong",
      "sectionId": "ped-sifilis-cong-seguimento",
      "title": "Seguimento &amp; Critérios de Cura",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-sifilis-cong",
      "sectionId": "ped-sifilis-cong-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-fibrose-cistica",
      "sectionId": "ped-fibrose-cistica-definicao",
      "title": "Visão Geral &amp; Genética CFTR",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-fibrose-cistica",
      "sectionId": "ped-fibrose-cistica-triagem",
      "title": "Triagem Neonatal (IRT / IRT)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-fibrose-cistica",
      "sectionId": "ped-fibrose-cistica-clinica",
      "title": "Manifestações Clínicas",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-fibrose-cistica",
      "sectionId": "ped-fibrose-cistica-diagnostico",
      "title": "Teste do Suor Quantitativo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-fibrose-cistica",
      "sectionId": "ped-fibrose-cistica-fluxograma",
      "title": "Fluxograma Decisório SVG",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-fibrose-cistica",
      "sectionId": "ped-fibrose-cistica-tratamento",
      "title": "Enzimas &amp; Manejo Pulmonar",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-fibrose-cistica",
      "sectionId": "ped-fibrose-cistica-exacerbacao",
      "title": "Exacerbação &amp; Pseudomonas",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-fibrose-cistica",
      "sectionId": "ped-fibrose-cistica-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-enurese",
      "sectionId": "ped-enurese-definicao",
      "title": "Visão Geral &amp; Epidemiologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-enurese",
      "sectionId": "ped-enurese-classificacao",
      "title": "Classificação Monossintomática",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-enurese",
      "sectionId": "ped-enurese-etiologia",
      "title": "Tríade Fisiopatológica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-enurese",
      "sectionId": "ped-enurese-diagnostico",
      "title": "Propedêutica &amp; Diário Miccional",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-enurese",
      "sectionId": "ped-enurese-fluxograma",
      "title": "Fluxograma Decisório SVG",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-enurese",
      "sectionId": "ped-enurese-tratamento",
      "title": "Uroterapia &amp; Alarme Noturno",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-enurese",
      "sectionId": "ped-enurese-farmacologico",
      "title": "Desmopressina Oral &amp; Cuidados",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-enurese",
      "sectionId": "ped-enurese-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-henoch-schonlein",
      "sectionId": "ped-henoch-schonlein-definicao",
      "title": "Visão Geral &amp; Epidemiologia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-henoch-schonlein",
      "sectionId": "ped-henoch-schonlein-fisiopatologia",
      "title": "Fisiopatologia da IgA1",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-henoch-schonlein",
      "sectionId": "ped-henoch-schonlein-clinica",
      "title": "Tétrade Clínica Clássica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-henoch-schonlein",
      "sectionId": "ped-henoch-schonlein-criterios",
      "title": "Critérios EULAR/PRINTO",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-henoch-schonlein",
      "sectionId": "ped-henoch-schonlein-fluxograma",
      "title": "Fluxograma Decisório SVG",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-henoch-schonlein",
      "sectionId": "ped-henoch-schonlein-conduta",
      "title": "Analgesia &amp; Corticoterapia",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-henoch-schonlein",
      "sectionId": "ped-henoch-schonlein-complicacoes",
      "title": "Intussuscepção &amp; Seguimento Renal",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-henoch-schonlein",
      "sectionId": "ped-henoch-schonlein-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aij",
      "sectionId": "ped-aij-definicao",
      "title": "Visão Geral &amp; Critérios ILAR",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aij",
      "sectionId": "ped-aij-subtipos",
      "title": "Subtipos Clínicos ILAR",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aij",
      "sectionId": "ped-aij-fisiopatologia",
      "title": "Fisiopatologia &amp; Uveíte Silenciosa",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aij",
      "sectionId": "ped-aij-propedeutica",
      "title": "FAN &amp; Lâmpada de Fenda",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aij",
      "sectionId": "ped-aij-fluxograma",
      "title": "Fluxograma Decisório SVG",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aij",
      "sectionId": "ped-aij-farmacologico",
      "title": "Metotrexato &amp; DMARDs Biológicos",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aij",
      "sectionId": "ped-aij-emergencia-sam",
      "title": "Síndrome de Ativação Macrofágica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-aij",
      "sectionId": "ped-aij-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipertensao",
      "sectionId": "ped-hipertensao-definicao",
      "title": "Visão Geral &amp; Manguito Correto",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipertensao",
      "sectionId": "ped-hipertensao-classificacao",
      "title": "Tabelas de Percentis SBP 2024",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipertensao",
      "sectionId": "ped-hipertensao-etiologia",
      "title": "Causas Secundárias vs Primárias",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipertensao",
      "sectionId": "ped-hipertensao-propedeutica",
      "title": "Investigação &amp; Lesão de Órgão-Alvo",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipertensao",
      "sectionId": "ped-hipertensao-fluxograma",
      "title": "Fluxograma Decisório SVG",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipertensao",
      "sectionId": "ped-hipertensao-tratamento",
      "title": "Farmacoterapia de 1ª Linha",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipertensao",
      "sectionId": "ped-hipertensao-crise",
      "title": "Urgência vs Emergência Hipertensiva",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipertensao",
      "sectionId": "ped-hipertensao-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipotireoidismo",
      "sectionId": "ped-hipotireoidismo-definicao",
      "title": "Visão Geral &amp; Janela Crítica",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipotireoidismo",
      "sectionId": "ped-hipotireoidismo-etiologia",
      "title": "Disgenesia vs Disormonogênese",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipotireoidismo",
      "sectionId": "ped-hipotireoidismo-triagem",
      "title": "TSH no Teste do Pezinho",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipotireoidismo",
      "sectionId": "ped-hipotireoidismo-clinica",
      "title": "Quadro Clínico &amp; Sinais Tardios",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipotireoidismo",
      "sectionId": "ped-hipotireoidismo-fluxograma",
      "title": "Fluxograma Decisório SVG",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipotireoidismo",
      "sectionId": "ped-hipotireoidismo-tratamento",
      "title": "Levotiroxina Oral (10 a 15 &mu;g/kg)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipotireoidismo",
      "sectionId": "ped-hipotireoidismo-monitorizacao",
      "title": "Monitorização &amp; Reavaliação",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hipotireoidismo",
      "sectionId": "ped-hipotireoidismo-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hiperplasia-adrenal",
      "sectionId": "ped-hiperplasia-adrenal-definicao",
      "title": "Visão Geral &amp; Deficiência 21-OH",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hiperplasia-adrenal",
      "sectionId": "ped-hiperplasia-adrenal-formas",
      "title": "Formas Clínicas &amp; Perda de Sal",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hiperplasia-adrenal",
      "sectionId": "ped-hiperplasia-adrenal-triagem",
      "title": "17-OHP no Teste do Pezinho",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hiperplasia-adrenal",
      "sectionId": "ped-hiperplasia-adrenal-clinica",
      "title": "Genitália Atípica (Prader I a V)",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hiperplasia-adrenal",
      "sectionId": "ped-hiperplasia-adrenal-fluxograma",
      "title": "Fluxograma Decisório SVG",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hiperplasia-adrenal",
      "sectionId": "ped-hiperplasia-adrenal-crise",
      "title": "Emergência: Crise Adrenal Aguda",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hiperplasia-adrenal",
      "sectionId": "ped-hiperplasia-adrenal-manutencao",
      "title": "Hidrocortisona, Fludro &amp; NaCl",
      "specialty": "pediatria"
    },
    {
      "moduleId": "ped-hiperplasia-adrenal",
      "sectionId": "ped-hiperplasia-adrenal-caso",
      "title": "Caso Clínico Simulado",
      "specialty": "pediatria"
    }
  ]
};

function initOrderedSections() {
  return ORDERED_SECTIONS;
}

// === AUTO-GENERATED CLINICAL SEARCH METADATA ===
const MODULE_INFOGRAPHICS = {"abdome":{"sec":"abdome-visao-geral","flowSec":"abdome-triagem","info":"imagens/infografico-gin-abdome.png","svg":"imagens/fluxograma_abdome_agudo_triagem.svg","sp":"ginecologia"},"adeno":{"sec":"adenomiose-fisiopatologia","flowSec":"adenomiose-imagem-musa","info":"imagens/infografico-gin-adeno.png","svg":"imagens/fluxograma_adenomiose_fisiopatologia_clinica.svg","sp":"ginecologia"},"amenor":{"sec":"amenor-primaria","flowSec":"amenor-rokitansky-morris","info":"imagens/infografico-gin-amenor.png","svg":"imagens/fluxograma_amenorreia_primaria_caracteres_e_utero.svg","sp":"ginecologia"},"cancervulva":{"sec":"cancervulva-visao-geral","flowSec":"cancervulva-estadiamento","info":"imagens/infografico-gin-cancervulva.png","svg":"imagens/fluxograma_cancervulva_estadiamento_conduta.svg","sp":"ginecologia"},"cirurgia":{"sec":"cirurgia-visao-geral","flowSec":"cirurgia-fluxogramas","info":"imagens/infografico-gin-cirurgia.png","svg":"imagens/fluxograma_cirurgia_malformacoes_muller_espacos.svg","sp":"ginecologia"},"clim":{"sec":"climaterio-straw","flowSec":"climaterio-janela-risco","info":"imagens/infografico-gin-clim.png","svg":"imagens/fluxograma_climaterio_straw_diagnostico.svg","sp":"ginecologia"},"colo":{"sec":"colo-rastreamento","flowSec":"colo-bethesda","info":"imagens/infografico-gin-colo.png","svg":"imagens/fluxograma_colo_rastreamento.svg","sp":"ginecologia"},"contracepcao":{"sec":"contracepcao-visao-geral","flowSec":"contracepcao-combinados","info":"imagens/infografico-gin-contracepcao.png","svg":"imagens/fluxograma_contracepcao_elegibilidade_oms.svg","sp":"ginecologia"},"dipav":{"sec":"dipav-fisiopatologia","flowSec":"dipav-criterios","info":"imagens/infografico-gin-dipav.png","svg":"imagens/fluxograma_dip_fisiopatologia_etiologia.svg","sp":"ginecologia"},"dor":{"sec":"dor-visao-geral","flowSec":"dor-dismenorreia","info":"imagens/infografico-gin-dor.png","svg":"imagens/fluxograma_dismenorreia_primaria_secundaria_manejo.svg","sp":"ginecologia"},"dsf":{"sec":"fluxograma-geral","flowSec":"desejo","info":"imagens/infografico-gin-dsf.png","svg":"imagens/fluxograma_dsf_geral.svg","sp":"ginecologia"},"endo":{"sec":"endometriose-fisiopatologia","flowSec":"endometriose-imagem","info":"imagens/infografico-gin-endo.png","svg":"imagens/fluxograma_endometriose_fisiopatologia_clinica.svg","sp":"ginecologia"},"endometrio":{"sec":"endometrio-visao-geral","flowSec":"endometrio-propedeutica","info":"imagens/infografico-gin-endometrio.png","svg":"imagens/fluxograma_endometrio_supm_propedeutica.svg","sp":"ginecologia"},"examefisico":{"sec":"examefisico-visao-geral","flowSec":"examefisico-fluxogramas","info":"imagens/infografico-gin-examefisico.png","svg":"imagens/fluxograma_exame_fisico_passo_a_passo.svg","sp":"ginecologia"},"fisiologia":{"sec":"fisiologia-visao-geral","flowSec":"fisiologia-fluxogramas","info":"imagens/infografico-gin-fisiologia.png","svg":"imagens/fluxograma_fisiologia_ciclo_menstrual_eixo.svg","sp":"ginecologia"},"incont":{"sec":"incontinencia-classificacao","flowSec":"incontinencia-urodinamica","info":"imagens/infografico-gin-incont.png","svg":"imagens/fluxograma_incontinencia_classificacao_propedeutica.svg","sp":"ginecologia"},"infancia":{"sec":"infancia-visao-geral","flowSec":"infancia-fluxogramas","info":"imagens/infografico-gin-infancia.png","svg":"imagens/fluxograma_infancia_vulvovaginite_sangramento.svg","sp":"ginecologia"},"infeccoes":{"sec":"infeccoes-vulvovaginites","flowSec":"infeccoes-vaginose-candida","info":"imagens/infografico-gin-infeccoes.png","svg":"imagens/fluxograma_infeccoes_vulvovaginites_diagnostico.svg","sp":"ginecologia"},"infertil":{"sec":"infertilidade-definicao","flowSec":"infertilidade-propedutica","info":"imagens/infografico-gin-infertil.png","svg":"imagens/fluxograma_infertilidade_definicao_triagem.svg","sp":"ginecologia"},"iop":{"sec":"iop-visao-geral","flowSec":"iop-fluxogramas","info":"imagens/infografico-gin-iop.png","svg":"imagens/fluxograma_iop_insuficiencia_ovariana_investigacao.svg","sp":"ginecologia"},"larcs":{"sec":"larcs-visao-geral","flowSec":"larcs-algoritmo","info":"imagens/infografico-gin-larcs.png","svg":"imagens/fluxograma_larcs_algoritmo.svg","sp":"ginecologia"},"mama":{"sec":"mama-rastreamento","flowSec":"mama-birads","info":"imagens/infografico-gin-mama.png","svg":"imagens/fluxograma_mama_rastreamento.svg","sp":"ginecologia"},"mamabenigna":{"sec":"mamabenigna-visao-geral","flowSec":"mamabenigna-nodulos","info":"imagens/infografico-gin-mamabenigna.png","svg":"imagens/fluxograma_mama_benigna_nodulo_cisto.svg","sp":"ginecologia"},"metodologia":{"sec":"metodologia","flowSec":"metodologia","info":"imagens/infografico-gin-metodologia.png","svg":"imagens/fluxograma_metodologia.svg","sp":"ginecologia"},"mioma":{"sec":"mioma-classificacao","flowSec":"mioma-propedutica","info":"imagens/infografico-gin-mioma.png","svg":"imagens/fluxograma_mioma_classificacao_figo.svg","sp":"ginecologia"},"ovario":{"sec":"ovario-visao-geral","flowSec":"ovario-iota","info":"imagens/infografico-gin-ovario.png","svg":"imagens/fluxograma_ovario_iota_regras_simples.svg","sp":"ginecologia"},"pgr":{"sec":"pgr-visao-geral","flowSec":"pgr-fluxogramas","info":"imagens/infografico-gin-pgr.png","svg":"imagens/fluxograma_pgr_perda_gestacional_investigacao.svg","sp":"ginecologia"},"polipos":{"sec":"polipos-visao-geral","flowSec":"polipos-malignidade","info":"imagens/infografico-gin-polipos.png","svg":"imagens/fluxograma_polipos_endometriais_cervicais_conduta.svg","sp":"ginecologia"},"prolactina":{"sec":"prolactina-visao-geral","flowSec":"prolactina-fluxogramas","info":"imagens/infografico-gin-prolactina.png","svg":"imagens/fluxograma_prolactina_hiperprolactinemia_investigacao.svg","sp":"ginecologia"},"prolapso":{"sec":"prolapso-delancey","flowSec":"prolapso-popq","info":"imagens/infografico-gin-prolapso.png","svg":"imagens/fluxograma_prolapso_niveis_delancey.svg","sp":"ginecologia"},"saudeintegral":{"sec":"saudeintegral-visao-geral","flowSec":"saudeintegral-fluxogramas","info":"imagens/infografico-gin-saudeintegral.png","svg":"imagens/fluxograma_saudeintegral_calendario_vacinal.svg","sp":"ginecologia"},"sop":{"sec":"sop-rotterdam","flowSec":"sop-diferencial","info":"imagens/infografico-gin-sop.png","svg":"imagens/fluxograma_sop_criterios_rotterdam.svg","sp":"ginecologia"},"spm":{"sec":"spm-visao-geral","flowSec":"spm-criterios","info":"imagens/infografico-gin-spm.png","svg":"imagens/fluxograma_spm_tdpm_diagnostico_tratamento.svg","sp":"ginecologia"},"sua":{"sec":"sua-parametros","flowSec":"sua-fluxograma-geral","info":"imagens/infografico-gin-sua.png","svg":"imagens/fluxograma_sua_geral.svg","sp":"ginecologia"},"trhav":{"sec":"trhav-androgenios","flowSec":"trhav-monitoramento","info":"imagens/infografico-gin-trhav.png","svg":"imagens/fluxograma_trh_androgenios_tdsh.svg","sp":"ginecologia"},"urocomplexa":{"sec":"urocomplexa-visao-geral","flowSec":"urocomplexa-fluxogramas","info":"imagens/infografico-gin-urocomplexa.png","svg":"imagens/fluxograma_urocomplexa_itu_recorrente_fistulas.svg","sp":"ginecologia"},"violencia":{"sec":"violencia-visao-geral","flowSec":"violencia-fluxogramas","info":"imagens/infografico-gin-violencia.png","svg":"imagens/fluxograma_violencia_sexual_atendimento_imediato.svg","sp":"ginecologia"},"vulva":{"sec":"vulva-visao-geral","flowSec":"vulva-liquen","info":"imagens/infografico-gin-vulva.png","svg":"imagens/fluxograma_vulva_liquen_escleroso_manejo.svg","sp":"ginecologia"},"ped-aij":{"sec":"ped-aij-definicao","flowSec":"ped-aij-fluxograma","info":"imagens/infografico-ped-aij.png","svg":"imagens/fluxo-ped-aij.svg","sp":"pediatria"},"ped-aleitamento":{"sec":"ped-aleitamento-definicao","flowSec":"ped-aleitamento-fluxograma","info":"imagens/infografico-ped-aleitamento.png","svg":"imagens/fluxo-ped-aleitamento.svg","sp":"pediatria"},"ped-alergia-alim":{"sec":"ped-alergia-alim-definicao","flowSec":"ped-alergia-alim-fluxograma","info":"imagens/infografico-ped-alergia-alim.png","svg":"imagens/fluxo-ped-alergia-alim.svg","sp":"pediatria"},"ped-anafilaxia":{"sec":"ped-anafilaxia-definicao","flowSec":"ped-anafilaxia-fluxograma","info":"imagens/infografico-ped-anafilaxia.png","svg":"imagens/fluxo-ped-anafilaxia.svg","sp":"pediatria"},"ped-asma":{"sec":"ped-asma-definicao","flowSec":"ped-asma-fluxograma","info":"imagens/infografico-ped-asma.png","svg":"imagens/fluxo-ped-asma.svg","sp":"pediatria"},"ped-bronquiolite":{"sec":"ped-bronquiolite-definicao","flowSec":"ped-bronquiolite-fluxograma","info":"imagens/infografico-ped-bronquiolite.png","svg":"imagens/fluxo-ped-bronquiolite.svg","sp":"pediatria"},"ped-brue-smsl":{"sec":"ped-brue-smsl-definicao","flowSec":"ped-brue-smsl-fluxograma","info":"imagens/infografico-ped-brue-smsl.png","svg":"imagens/fluxo-ped-brue-smsl.svg","sp":"pediatria"},"ped-cardiopatias":{"sec":"ped-cardiopatias-definicao","flowSec":"ped-cardiopatias-fluxograma","info":"imagens/infografico-ped-cardiopatias.png","svg":"imagens/fluxo-ped-cardiopatias.svg","sp":"pediatria"},"ped-cefaleias":{"sec":"ped-cefaleias-definicao","flowSec":"ped-cefaleias-fluxograma","info":"imagens/infografico-ped-cefaleias.png","svg":"imagens/fluxo-ped-cefaleias.svg","sp":"pediatria"},"ped-celiaca":{"sec":"ped-celiaca-definicao","flowSec":"ped-celiaca-fluxograma","info":"imagens/infografico-ped-celiaca.png","svg":"imagens/fluxo-ped-celiaca.svg","sp":"pediatria"},"ped-choque":{"sec":"ped-choque-definicao","flowSec":"ped-choque-fluxograma","info":"imagens/infografico-ped-choque.png","svg":"imagens/fluxo-ped-choque.svg","sp":"pediatria"},"ped-constipacao":{"sec":"ped-constipacao-definicao","flowSec":"ped-constipacao-fluxograma","info":"imagens/infografico-ped-constipacao.png","svg":"imagens/fluxo-ped-constipacao.svg","sp":"pediatria"},"ped-convulsao":{"sec":"ped-convulsao-definicao","flowSec":"ped-convulsao-fluxograma","info":"imagens/infografico-ped-convulsao.png","svg":"imagens/fluxo-ped-convulsao.svg","sp":"pediatria"},"ped-coqueluche-fc":{"sec":"ped-coqueluche-fc-definicao","flowSec":"ped-coqueluche-fc-fluxograma","info":"imagens/infografico-ped-coqueluche-fc.png","svg":"imagens/fluxo-ped-coqueluche-fc.svg","sp":"pediatria"},"ped-crescimento":{"sec":"ped-crescimento-definicao","flowSec":"ped-crescimento-fluxograma","info":"imagens/infografico-ped-crescimento.png","svg":"imagens/fluxo-ped-crescimento.svg","sp":"pediatria"},"ped-cuidneonat":{"sec":"ped-cuidneonat-definicao","flowSec":"ped-cuidneonat-fluxograma","info":"imagens/infografico-ped-cuidneonat.png","svg":"imagens/fluxo-ped-cuidneonat.svg","sp":"pediatria"},"ped-desnutricao":{"sec":"ped-desnutricao-definicao","flowSec":"ped-desnutricao-fluxograma","info":"imagens/infografico-ped-desnutricao.png","svg":"imagens/fluxo-ped-desnutricao.svg","sp":"pediatria"},"ped-diarreia":{"sec":"ped-diarreia-definicao","flowSec":"ped-diarreia-fluxograma","info":"imagens/infografico-ped-diarreia.png","svg":"imagens/fluxo-ped-diarreia.svg","sp":"pediatria"},"ped-distresp-rn":{"sec":"ped-distresp-rn-definicao","flowSec":"ped-distresp-rn-fluxograma","info":"imagens/infografico-ped-distresp-rn.png","svg":"imagens/fluxo-ped-distresp-rn.svg","sp":"pediatria"},"ped-disturb-rn":{"sec":"ped-disturb-rn-definicao","flowSec":"ped-disturb-rn-fluxograma","info":"imagens/infografico-ped-disturb-rn.png","svg":"imagens/fluxo-ped-disturb-rn.svg","sp":"pediatria"},"ped-dnpm":{"sec":"ped-dnpm-definicao","flowSec":"ped-dnpm-fluxograma","info":"imagens/infografico-ped-dnpm.png","svg":"imagens/fluxo-ped-dnpm.svg","sp":"pediatria"},"ped-drge":{"sec":"ped-drge-definicao","flowSec":"ped-drge-fluxograma","info":"imagens/infografico-ped-drge.png","svg":"imagens/fluxo-ped-drge.svg","sp":"pediatria"},"ped-emerg-pcr":{"sec":"ped-emerg-pcr-definicao","flowSec":"ped-emerg-pcr-fluxograma","info":"imagens/infografico-ped-emerg-pcr.png","svg":"imagens/fluxo-ped-emerg-pcr.svg","sp":"pediatria"},"ped-enurese":{"sec":"ped-enurese-definicao","flowSec":"ped-enurese-fluxograma","info":"imagens/infografico-ped-enurese.png","svg":"imagens/fluxo-ped-enurese.svg","sp":"pediatria"},"ped-exantematicas":{"sec":"ped-exantematicas-definicao","flowSec":"ped-exantematicas-fluxograma","info":"imagens/infografico-ped-exantematicas.png","svg":"imagens/fluxo-ped-exantematicas.svg","sp":"pediatria"},"ped-febre-sem-foco":{"sec":"ped-febre-sem-foco-definicao","flowSec":"ped-febre-sem-foco-fluxograma","info":"imagens/infografico-ped-febre-sem-foco.png","svg":"imagens/fluxo-ped-febre-sem-foco.svg","sp":"pediatria"},"ped-fibrose-cistica":{"sec":"ped-fibrose-cistica-definicao","flowSec":"ped-fibrose-cistica-fluxograma","info":"imagens/infografico-ped-fibrose-cistica.png","svg":"imagens/fluxo-ped-fibrose-cistica.svg","sp":"pediatria"},"ped-genetica":{"sec":"ped-genetica-definicao","flowSec":"ped-genetica-fluxograma","info":"imagens/infografico-ped-genetica.png","svg":"imagens/fluxo-ped-genetica.svg","sp":"pediatria"},"ped-hebiatria":{"sec":"ped-hebiatria-definicao","flowSec":"ped-hebiatria-fluxograma","info":"imagens/infografico-ped-hebiatria.png","svg":"imagens/fluxo-ped-hebiatria.svg","sp":"pediatria"},"ped-henoch-schonlein":{"sec":"ped-henoch-schonlein-definicao","flowSec":"ped-henoch-schonlein-fluxograma","info":"imagens/infografico-ped-henoch-schonlein.png","svg":"imagens/fluxo-ped-henoch-schonlein.svg","sp":"pediatria"},"ped-hiperplasia-adrenal":{"sec":"ped-hiperplasia-adrenal-definicao","flowSec":"ped-hiperplasia-adrenal-fluxograma","info":"imagens/infografico-ped-hiperplasia-adrenal.png","svg":"imagens/fluxo-ped-hiperplasia-adrenal.svg","sp":"pediatria"},"ped-hipertensao":{"sec":"ped-hipertensao-definicao","flowSec":"ped-hipertensao-fluxograma","info":"imagens/infografico-ped-hipertensao.png","svg":"imagens/fluxo-ped-hipertensao.svg","sp":"pediatria"},"ped-hipotireoidismo":{"sec":"ped-hipotireoidismo-definicao","flowSec":"ped-hipotireoidismo-fluxograma","info":"imagens/infografico-ped-hipotireoidismo.png","svg":"imagens/fluxo-ped-hipotireoidismo.svg","sp":"pediatria"},"ped-ictericia-sepse":{"sec":"ped-ictericia-sepse-definicao","flowSec":"ped-ictericia-sepse-fluxograma","info":"imagens/infografico-ped-ictericia-sepse.png","svg":"imagens/fluxo-ped-ictericia-sepse.svg","sp":"pediatria"},"ped-imunizacoes":{"sec":"ped-imunizacoes-definicao","flowSec":"ped-imunizacoes-fluxograma","info":"imagens/infografico-ped-imunizacoes.png","svg":"imagens/fluxo-ped-imunizacoes.svg","sp":"pediatria"},"ped-infecc-cong":{"sec":"ped-infecc-cong-definicao","flowSec":"ped-infecc-cong-fluxograma","info":"imagens/infografico-ped-infecc-cong.png","svg":"imagens/fluxo-ped-infecc-cong.svg","sp":"pediatria"},"ped-itu-enurese":{"sec":"ped-itu-enurese-definicao","flowSec":"ped-itu-enurese-fluxograma","info":"imagens/infografico-ped-itu-enurese.png","svg":"imagens/fluxo-ped-itu-enurese.svg","sp":"pediatria"},"ped-nutricao":{"sec":"ped-nutricao-definicao","flowSec":"ped-nutricao-fluxograma","info":"imagens/infografico-ped-nutricao.png","svg":"imagens/fluxo-ped-nutricao.svg","sp":"pediatria"},"ped-obesidade":{"sec":"ped-obesidade-definicao","flowSec":"ped-obesidade-fluxograma","info":"imagens/infografico-ped-obesidade.png","svg":"imagens/fluxo-ped-obesidade.svg","sp":"pediatria"},"ped-pneumonia":{"sec":"ped-pneumonia-definicao","flowSec":"ped-pneumonia-fluxograma","info":"imagens/infografico-ped-pneumonia.png","svg":"imagens/fluxo-ped-pneumonia.svg","sp":"pediatria"},"ped-puberdade":{"sec":"ped-puberdade-definicao","flowSec":"ped-puberdade-fluxograma","info":"imagens/infografico-ped-puberdade.png","svg":"imagens/fluxo-ped-puberdade.svg","sp":"pediatria"},"ped-reanima":{"sec":"ped-reanima-definicao","flowSec":"ped-reanima-fluxograma","info":"imagens/infografico-ped-reanima.png","svg":"imagens/fluxo-ped-reanima.svg","sp":"pediatria"},"ped-reumato-aij":{"sec":"ped-reumato-aij-definicao","flowSec":"ped-reumato-aij-fluxograma","info":"imagens/infografico-ped-reumato-aij.png","svg":"imagens/fluxo-ped-reumato-aij.svg","sp":"pediatria"},"ped-reumato-vasc":{"sec":"ped-reumato-vasc-definicao","flowSec":"ped-reumato-vasc-fluxograma","info":"imagens/infografico-ped-reumato-vasc.png","svg":"imagens/fluxo-ped-reumato-vasc.svg","sp":"pediatria"},"ped-seguranca":{"sec":"ped-seguranca-definicao","flowSec":"ped-seguranca-fluxograma","info":"imagens/infografico-ped-seguranca.png","svg":"imagens/fluxo-ped-seguranca.svg","sp":"pediatria"},"ped-sifilis-cong":{"sec":"ped-sifilis-cong-definicao","flowSec":"ped-sifilis-cong-fluxograma","info":"imagens/infografico-ped-sifilis-cong.png","svg":"imagens/fluxo-ped-sifilis-cong.svg","sp":"pediatria"},"ped-tuberculose":{"sec":"ped-tuberculose-definicao","flowSec":"ped-tuberculose-fluxograma","info":"imagens/infografico-ped-tuberculose.png","svg":"imagens/fluxo-ped-tuberculose.svg","sp":"pediatria"},"ped-vitaminas":{"sec":"ped-vitaminas-definicao","flowSec":"ped-vitaminas-fluxograma","info":"imagens/infografico-ped-vitaminas.png","svg":"imagens/fluxo-ped-vitaminas.svg","sp":"pediatria"}};
const SECTION_SEARCH_META = {"abdome-visao-geral":{"m":"abdome","h1":"Abdome Agudo em Ginecologia: Visão Geral & Fisiopatologia","sub":"Baseado no Tratado de Ginecologia FEBRASGO (2ª edição, Capítulos 37 e 39).","flow":0,"info":1,"presc":0,"caso":0,"kw":"Emergência Ginecológica de Alta Prioridade: • Fisiopatologia do Peritônio Pélvico & Neuroanatomia da Dor • Dor Visceral (Fibras C Amielínicas): • Dor Somática Parietal (Fibras A-delta Mielínicas): • Tríade Sindrômica do Abdome Agudo Ginecológico • 1. Abdome Agudo Hemorrágico • Gravidez Ectópica Rota • Rotura de Cisto Hemorrágico de Corpo Lúteo • 2. Abdome Agudo Isquêmico / Obstrutivo • Torção de Pedículo Anexial / Ovariano • 3. Abdome Agudo Inflamatório / Infeccioso • DIP Monif Estádio III/IV • Triagem Sindrômica & Algoritmo de Decisão Hemodinâmica • Abrir em Tela Cheia • Infográfico HD"},"abdome-semiologia":{"m":"abdome","h1":"Roteiro Semiológico em 4 Eixos no Abdome Agudo","sub":"Semiologia ginecológica direcionada à estratificação de gravidade, identificação de sinais patognomônicos e red flags.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os 4 Eixos da Caracterização Semiológica da Queixa de Dor Aguda • Instalação Hiperaguda (segundos a minutos): • Relação com o Ciclo Menstrual: • Escala Visual Analógica (EVA): • Caráter: • Evolução Contínua: • Repercussões Sistêmicas e Sinais Físicos Cruciais: • Sinal de Blumberg: • Sinal de Proust (\"Grito de Douglas\"): • Sinal de Laffont: • Sinais de Choque Hipovolêmico:"},"abdome-triagem":{"m":"abdome","h1":"Algoritmo de Triagem & Estabilidade Hemodinâmica","sub":"Protocolo sequencial de tomada de decisão: avaliação imediata, FAST ultrassonográfico e indicação cirúrgica de urgência.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Triagem Sindrômica & Algoritmo de Decisão Hemodinâmica • Abrir em Tela Cheia • Infográfico HD • Protocolo de Atendimento por Estabilidade Hemodinâmica • 1. Paciente Hemodinamicamente INSTÁVEL (PAS < 90 mmHg, FC > 100 bpm, Síncope, Abdome em Tábua) • NÃO perder tempo com exames complementares demorados fora do setor de emergência • LAPAROTOMIA EXPLORADORA DE EMERGÊNCIA • 2. Paciente Hemodinamicamente ESTÁVEL • Gravidez Ectópica"},"abdome-ectopica":{"m":"abdome","h1":"Gravidez Ectópica: Diagnóstico & Manejo Clínico vs Cirúrgico","sub":"Estratificação da gestação tubária, critérios de elegibilidade para Metotrexato e técnicas de laparoscopia conservadora vs radical.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma Visual do Manejo da Prenhez Ectópica • Tratamento Medicamentoso com Metotrexato (MTX) em Dose Única • Parâmetro • Critério Mandatório de Elegibilidade (FEBRASGO) • Contraindicações Absolutas ao MTX • Hemodinâmica • Diâmetro da Massa • < 3,5 cm a 4,0 cm • Nível de β-hCG Sérico • < 5.000 mUI/mL • Atividade Cardíaca Embrionária • ausentes • Função Hepática e Renal • Cirurgia Laparoscópica: Salpingostomia vs Salpingectomia • Salpingostomia Linear: • trofoblasto persistente • Salpingectomia Total: • Idealmente < 5.000 mUI/mL (maior taxa de sucesso > 90%). • Níveis > 5.000-10.000 mUI/mL aumentam drasticamente as taxas de falha."},"abdome-torcao":{"m":"abdome","h1":"Torção Anexial & Rotura de Cisto Hemorrágico","sub":"Fisiopatologia isquêmica, critérios ao ecodoppler e a desmistificação da destorção com preservação ovariana.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma Visual do Manejo da Torção Anexial • O Paradigma Contemporâneo da Destorção Ovariana • Consensos internacionais e a FEBRASGO revogaram essa conduta: • Evidências robustas comprovam que o risco de tromboembolismo após destorção é inferior a 0,2%, idêntico ao de qualquer procedim... • Em mulheres em idade reprodutiva, a destorção laparoscópica com preservação anexial é o padrão-ouro mandatório • Alerta de Técnica:"},"abdome-tabelas":{"m":"abdome","h1":"Diagnóstico Diferencial do Abdome Agudo Ginecológico","sub":"Matriz comparativa com os principais achados clínicos, laboratoriais, ecográficos e condutas de consenso.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz Diferencial Completa • Entidade Clínica • Quadro Clínico & Gatilho • β-hCG & Laboratório • Achados Ecográficos (USG) • Conduta Padrão (FEBRASGO) • Gravidez Ectópica Rota • Rotura de Cisto Hemorrágico • Torção Anexial • destorção e preservação ovariana • Abscesso Tubo-Ovariano (ATO) Roto • Apendicite Aguda (Mimetizador) • β-hCG Positivo (> 1.500 mUI/mL sem saco intraútero). • β-hCG Negativo PCR > 100 mg/L, leucocitose com desvio à esquerda. • Laparotomia exploradora de emergência com drenagem ampla, lavado peritoneal e antibioticoterapia EV tripla."},"abdome-casos":{"m":"abdome","h1":"Casos Clínicos Simulados de Emergência Ginecológica","sub":"Stress testing com 3 casos reais de beira de leito, triagem diagnóstica e revelação de condutas fundamentadas.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Atraso menstrual, dor súbita em fossa ilíaca direita e massa anexial • Conduta Padrão-Ouro Recomendada: • Tratamento Clínico Medicamentoso com Metotrexato (MTX) em Dose Única (50 mg/m² IM profundo). • Fundamentação FEBRASGO: • Protocolo de Monitoramento: • Dor paroxística lancinante após crossfit com vômitos profusos • Laparoscopia Cirúrgica de Emergência Imediata com DESTORÇÃO e PRESERVAÇÃO OVARIANA. • Síncope no banheiro, desmaio e palidez extrema com abdome em tábua • Conduta de Emergência Máxima: • Ressuscitação Hemodinâmica Agressiva + FAST Beira de Leito + LAPAROTOMIA EXPLORADORA IMEDIATA."},"abdome-prescricao":{"m":"abdome","h1":"Guia de Prescrição & Doses nas Emergências Ginecológicas","sub":"Posologias precisas de drogas abortivas/quimioterápicas, ressuscitação volêmica, analgesia multimodal e antibióticos.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela de Prescrições Baseadas em Evidências (FEBRASGO) • Fármaco / Esquema • Posologia & Via • Indicação Clínica • Alertas Críticos & Efeitos Adversos • Metotrexato (MTX) • 50 mg/m² IM profundo dose única • Dipirona + Cetoprofeno • Morfina • 2 a 4 mg EV em bólus lento • Ceftriaxona + Metronidazol + Doxiciclina • Ressuscitação Volêmica • 50 mg/m² IM profundo dose única (calculado pela área de superfície corporal). • Dipirona 1g EV em bólus lento 6/6h + Cetoprofeno 100 mg EV diluído em 100 mL de SF 12/12h. • 2 a 4 mg EV em bólus lento , titulada a cada 15-30 minutos conforme EVA."},"adenomiose-fisiopatologia":{"m":"adeno","h1":"Adenomiose Uterina: Fisiopatologia da Zona Juncional & Tríade Clínica","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 34) e no Consenso Internacional MUSA.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Definição Clássica de Prova (Bird et al., 1972 / FEBRASGO): • invasão benigna do endométrio (glândulas e estroma) no interior do miométrio além de 2,5 mm • hipertrofia e hiperplasia reativa das células musculares lisas miometriais • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Definição Histopatológica: • 2. Fisiopatologia da Zona Juncional (TIAR): • 3. A Tríade Clínica Clássica: • Sangramento Uterino Anormal (SUA): • Dismenorreia Secundária Intensa: • Útero Globoso, Amolecido e Doloroso: • 4. Diagnóstico por Imagem (Critérios MUSA / RM): • Roteiro Semiológico: Sinais & Sintomas da Adenomiose • 1. Dismenorreia Secundária Progressiva: • Início & Evolução:"},"adenomiose-imagem-musa":{"m":"adeno","h1":"Diagnóstico Não Invasivo: Critérios MUSA na USTV & Ressonância Magnética","sub":"A revolução da propedêutica por imagem permitindo o diagnóstico precoce sem necessidade de histerectomia.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Avaliação Diagnóstica por Imagem: Consenso MUSA vs Ressonância Magnética • Tabela Comparativa: Consenso MUSA 2022 (USTV) vs Critérios de Ressonância Magnética • Modalidade • Sinais Diretos (Tecido Ectópico Presente) • Sinais Indiretos (Reação Miometrial Secundária) • Acurácia & Papel Clínico • Ultrassonografia Transvaginal (Consenso MUSA) • Cistos miometriais: • Ilhas hiperecogênicas: • Linhas/brotos subendometriais: • Útero globoso • Espessamento assimétrico: • Sombra acústica em estrias: • Doppler: • Zona juncional irregular ou interrompida. • Exame de 1ª Linha: • Ressonância Magnética de Pelve (RM) • Focos de alto sinal em T2 ou T1:"},"adenomiose-formas-anatomicas":{"m":"adeno","h1":"Formas Anatômicas: Adenomiose Difusa vs Adenomioma vs Leiomioma Uterino","sub":"A diferenciação anatômica e o desafio clínico na distinção entre nódulo adenomiomatoso e fibroma uterino.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Caracterização Anatômica e Diagnóstico Diferencial Miometrial • Tabela de Diagnóstico Diferencial: Adenomioma Focal vs Leiomioma Uterino • Critério Diferencial • Adenomioma Focal (Nódulo Adenomiomatoso) • Leiomioma Uterino (Fibroma / Mioma) • Pseudocápsula & Margens • Ausente (-): • Presente (+): • Plano de Clivagem Cirúrgico • Inexistente: • Nítido e bem definido: • Padrão Vascular ao Doppler • Vascularização Translesional: • Vascularização Periférica em Anel: • Relação com a Zona Juncional • Sombra Acústica na USTV"},"adenomiose-tratamento-clinico":{"m":"adeno","h1":"Escalonamento do Tratamento Clínico Medicamentoso","sub":"Estratégias de 1ª e 2ª linha para controle do sangramento volumoso e alívio da dismenorreia.","flow":1,"info":0,"presc":1,"caso":0,"kw":"Fluxograma de Manejo Clínico Escalonado na Adenomiose Sintomática • Arsenal Farmacológico Baseado em Evidências (FEBRASGO) • decidualização e atrofia endometrial • reduz o volume de sangramento em > 90% • Indicações formais:"},"adenomiose-fertilidade":{"m":"adeno","h1":"Adenomiose & Desejo Reprodutivo: Impacto e Protocolos pré-FIV","sub":"Mecanismos de subfertilidade, falhas de implantação e otimização dos desfechos na Reprodução Assistida.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Manejo da Mulher com Adenomiose e Desejo Reprodutivo • Fisiopatologia da Infertilidade & O Protocolo de Sucesso Pré-FIV • Disperistaltismo Uterino: • Ambiente Tóxico Pró-Inflamatório: • Defeito na Janela de Implantação: • HOXA-10 • Redução média de 28% na taxa de gravidez clínica • Aumento de quase 2 vezes na taxa de abortamento precoce • Estimulação & Congelamento Total (Freeze-All): • Bloqueio Ultralongo com GnRHa: • Goserrelina 3,6 mg SC ou Leuprorrelina 3,75 mg IM a cada 28 dias por 2 a 3 meses consecutivos • Preparo Endometrial & Transferência: • rotura uterina durante a gestação"},"adenomiose-cirurgia":{"m":"adeno","h1":"Manejo Cirúrgico: Histerectomia Total vs Cirurgias Conservadoras Uterinas","sub":"A histerectomia como cura definitiva e os desafios técnicos dos procedimentos preservadores do útero.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Decisão Cirúrgica na Adenomiose Refratária • Modalidades Cirúrgicas & Procedimentos Minimamente Invasivos • Procedimento Cirúrgico • Indicação Principal • Técnica & Particularidades • Resultados & Prognóstico • Histerectomia Total (com Preservação Ovariana) • Tratamento Definitivo Padrão-Ouro: • Vaginal, Laparoscópica ou Robótica • Cura definitiva de 100% • Adenomiomectomia Conservadora • Citorredução Miometrial Parcial (Técnica de Osada) • Ablação Endometrial Histeroscópica"},"adenomiose-casos":{"m":"adeno","h1":"Casos Clínicos Simulados de Adenomiose","sub":"Treinamento ativo aplicando critérios diagnósticos MUSA, diagnóstico diferencial e decisões de conduta.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Paciente Multípara em Perimenopausa com Menorragia e Dismenorreia Severa • Paciente: • Diagnóstico & Conduta FEBRASGO: • Diagnóstico: • Adenomiose Difusa Uterina Sintomática • Conduta de Primeira Linha: • inserção ambulatorial do SIU-LNG 52 mg (Mirena) • Conduta se Falha ou Recusa: • Histerectomia Total por via minimamente invasiva (Laparoscópica ou Vaginal) • Caso 2: Nódulo Miometrial - Adenomioma Focal vs Leiomioma Uterino • não possui bordas nítidas nem pseudocápsula fibrosa • vasos penetrantes que atravessam o interior da massa • Raciocínio Clínico Crítico: • Erro de Diagnóstico Prévio Evitado: • NÃO é um leiomioma • ADENOMIOMA FOCAL"},"adenomiose-prescricao":{"m":"adeno","h1":"Guia Rápido de Prescrições & Doses em Adenomiose","sub":"Tabela de bolso com fármacos essenciais, posologias práticas, mecanismos e alertas clínicos.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Dispositivo • Mecanismo & Indicação Principal • Posologia Prática Recomendada • Alertas Clínicos & Cuidados • SIU-LNG 52 mg • Dienogeste 2 mg • 2 mg VO 1x ao dia • Goserrelina 3,6 mg / Leuprorrelina 3,75 mg • a cada 28 dias • Ácido Tranexâmico • 1.000 mg (2 comprimidos de 500 mg) VO de 8/8h • Ácido Mefenâmico / Ibuprofeno • SIU-LNG 52 mg (Mirena) • 2 mg VO 1x ao dia , continuamente, sempre no mesmo horário, sem pausa. • Goserrelina 3,6 mg / Leuprorrelina 3,75 mg (Análogo de GnRH Depot) • 1.000 mg (2 comprimidos de 500 mg) VO de 8/8h apenas durante os dias de sangramento menstrual volumoso."},"amenor-primaria":{"m":"amenor","h1":"Amenorreia Primária: Investigação Clínica, Propedêutica & Algoritmo dos 4 Quadrantes","sub":"Estratificação semiológica por caracteres sexuais secundários (mamas) e anatomia uterina ao ultrassom (Tratado FEBRASGO Cap. 41 / ASRM).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Critérios Cronológicos Mandatórios para Investigação Imediata: • Aos 14 anos: • ausência completa de caracteres sexuais secundários • Aos 15 anos: • presença de caracteres secundários normais • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Prazos Diagnósticos Oficiais (ASRM / ESHRE / FEBRASGO): • Amenorreia Primária: • 14 anos de idade na ausência de caracteres sexuais secundários • 16 anos de idade mesmo na presença normal de caracteres sexuais secundários • Amenorreia Secundária: • 3 ciclos menstruais consecutivos • 6 meses consecutivos • 2. Regra de Ouro Inicial Mandatória: • primeiro passo propedêutico inegociável é excluir gravidez"},"amenor-rokitansky-morris":{"m":"amenor","h1":"Diagnóstico Diferencial Genético-Anatômico: Rokitansky (MRKH) vs Morris (CAIS)","sub":"Critérios clínicos, laboratoriais, genéticos e oncológicos na diferenciação de pacientes com mamas presentes e agenesia uterina (FEBRASGO Cap. 41).","flow":1,"info":0,"presc":0,"caso":0,"kw":"O Ponto Crítico da Pilificação & Testosterona: • Síndrome de Rokitansky (46,XX) • pelos pubianos e axilares normais (P4-P5) • Síndrome de Morris (46,XY) • pelos pubianos ausentes ou raros (P1-P2) • Fluxograma Comparativo: Rokitansky (MRKH) vs Insensibilidade Androgênica (Morris / CAIS) • Matriz Comparativa Minuciosa: MRKH vs CAIS (Morris) • Parâmetro de Avaliação • Síndrome de Mayer-Rokitansky-Küster-Hauser (MRKH) • Síndrome de Insensibilidade Androgênica (Morris / CAIS) • Cariótipo Citogenético • Pilificação Pubiana e Axilar (Pubarca) • Normal (P4 a P5 de Tanner) • Ausente ou extremamente escassa (P1 a P2 de Tanner) • Desenvolvimento Mamário (Telarca)"},"amenor-secundaria":{"m":"amenor","h1":"Amenorreia Secundária: Algoritmo Racional de Investigação em 4 Passos","sub":"Propedêutica sequencial por exclusão, teste de progesterona, teste de estrogênio+progesterona e dosagem de gonadotrofinas (FEBRASGO Cap. 41).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Regra de Ouro da Menacme: • grávida até que se prove o contrário • Fluxograma dos 4 Passos Diagnósticos da Amenorreia Secundária • 1º Passo: Exclusão de Gestação, TSH e Prolactina • Beta-hCG sérico ou urinário: • TSH sérico: • Prolactina sérica: • 2º Passo: Teste da Progesterona (Estrogênio Endógeno) • Se sangrou (Positivo): • Se não sangrou (Negativo): • 3º Passo: Teste do Estrogênio + Progesterona (Trato de Saída) • Se NÃO sangrou: • Se sangrou: • 4º Passo: Dosagem de FSH (Ovário vs Central) • FSH Elevado (> 25-40): • FSH Baixo/Normal: • Matriz Diagnóstica dos 4 Passos da Amenorreia Secundária • Etapa Propedêutica • Medicação / Exame Empregado • Resultado Obtido"},"amenor-hipotalamo-hipofise":{"m":"amenor","h1":"Hipogonadismo Central: Diferenciação entre Hipotálamo (IV) e Hipófise (III)","sub":"O Teste do GnRH, Amenorreia Hipotalâmica Funcional (AHF / Tríade da Atleta), Síndrome de Kallmann e Síndrome de Sheehan (FEBRASGO Cap. 41).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Interpretação do Teste do GnRH: • adeno-hipófise está íntegra e sensível • Hipotálamo (Compartimento IV) • Hipófise (Compartimento III) • Fluxograma de Diferenciação Central: Teste do GnRH & Neuroimagem da Sela Túrcica • Quadro Clínico das Principais Afecções Centrais • Etiologia • Compartimento • Fisiopatologia & Marcadores Clínicos • Conduta Terapêutica Específica • Amenorreia Hipotalâmica Funcional (AHF) • Hipotálamo (IV) • NÃO usar anticoncepcional combinado oral • Síndrome de Kallmann • Hipogonadismo Hipogonadotrófico + Anosmia ou Hiposmia • Síndrome de Sheehan • Hipófise (III) • Agalactia / falha de apojadura pós-parto imediata seguida de amenorreia permanente"},"amenor-cariotipo":{"m":"amenor","h1":"Citogenética & Oncologia Ginecológica: Cariótipo, Disgenesias e Risco do Cromossomo Y","sub":"Indicações formais do cariótipo, estadiamento de Turner e timing da gonadectomia profilática no cromossomo Y (FEBRASGO Cap. 41).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Alerta Oncológico Máximo da FEBRASGO: • material genético do cromossomo Y • 30% de transformação maligna em Gonadoblastoma e Disgerminoma • Gonadectomia Bilateral Profilática • Fluxograma de Mapeamento Citogenético & Decisão Cirúrgica Oncológica • Diferenças Cruciais no Timing da Gonadectomia Bilateral Profilática • Condição Genética • Cariótipo & Anatomia • Timing Cirúrgico da Gonadectomia • Justificativa Biológica & Conduta Pós-Op • Síndrome de Swyer (Disgenesia Gonadal Pura) • IMEDIATA AO DIAGNÓSTICO • Síndrome de Morris (CAIS) • POSTERGADA PARA APÓS A PUBERDADE (16 a 18 anos) • Síndrome de Turner Pura • NÃO NECESSITA DE GONADECTOMIA"},"amenor-manejo":{"m":"amenor","h1":"Condutas Terapêuticas, Indução Puberal, TRH na IOP e Planejamento Reprodutivo","sub":"Protocolo cirúrgico e clínico de Asherman, indução gradual de desenvolvimento mamário, reposição hormonal jovem e reprodução assistida (FEBRASGO Cap. 41).","flow":1,"info":0,"presc":1,"caso":0,"kw":"Indução Puberal Fisiológica na Adolescente: • sem progesterona por 12 a 24 meses • Fluxograma de Manejo Terapêutico, Reposição Hormonal & Reprodução Assistida • Terapêuticas Específicas por Diagnóstico (FEBRASGO) • Condição Clínica • Estratégia Terapêutica de Escolha • Fármacos, Doses & Detalhes Práticos • Síndrome de Asherman • Histeroscopia Cirúrgica • Valerato de Estradiol 4 a 6 mg/dia VO por 30 a 60 dias • Indução Puberal na Amenorreia Primária • Fase Inicial (1º e 2º anos): • Fase Posterior: • Progesterona Micronizada (100 a 200 mg/dia) • Insuficiência Ovariana Prematura (IOP) • 17-beta-estradiol transdérmico 100 mcg (adesivo)"},"amenor-casos":{"m":"amenor","h1":"Casos Clínicos Simulados de Amenorreias Primárias e Secundárias","sub":"Treinamento prático aplicando o algoritmo dos 4 quadrantes, o diagnóstico diferencial de Rokitansky vs Morris e o manejo da Amenorreia da Atleta (FEBRASGO Ca...","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Adolescente de 16 Anos com Mamas Desenvolvidas e Ausência de Menarca • Paciente: • Conduta Padrão-Ouro Baseada em Evidências (FEBRASGO / ASRM): • Reconhecimento do Quadrante Clínico: • Quadrante 2 (Com Mamas e Sem Útero) • Síndrome de Rokitansky (MRKH) • Síndrome de Morris (CAIS) • Diferenciação pela Pilificação e Laboratório: • pelos pubianos e axilares normais (P4) • Testosterona Total resultará em nível feminino normal (< 50 ng/dL) • Cariótipo confirmará 46,XX • Rastreio Extragenital Obrigatório: • Ultrassonografia de Vias Urinárias • Radiografia de Coluna • Conduta para o Canal Vaginal & Fertilidade: • Terapia de Dilatação Progressiva de Frank / Vecchietti"},"amenor-prescricao":{"m":"amenor","h1":"Guia Rápido de Prescrições & Doses Práticas em Amenorreias","sub":"Tabela de bolso com fármacos essenciais, testes hormonais dinâmicos, doses pediátricas de indução puberal e esquemas de TRH na IOP (FEBRASGO Cap. 41).","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Apresentação • Mecanismo & Indicação Específica • Posologia Prática Recomendada • Alertas Clínicos & Cuidados de Prescrição • Acetato de Medroxiprogesterona 10 mg • Teste da Progesterona - 2º Passo • 1 comprimido de 10 mg VO 1x ao dia por 5 a 10 dias • Valerato de Estradiol 2 mg + Medroxiprogesterona 10 mg • Teste de Estrogênio + Progesterona - 3º Passo • Valerato de estradiol 2 mg VO ao dia do 1º ao 21º dia • Medroxiprogesterona 10 mg VO 1x/dia • Valerato de Estradiol 2 mg • Síndrome de Asherman • Valerato de estradiol 4 a 6 mg/dia VO (2 a 3 comp. de 2 mg) por 30 a 60 dias contínuos"},"cancervulva-visao-geral":{"m":"cancervulva","h1":"Câncer de Vulva e de Vagina: Visão Geral & Epidemiologia","sub":"Baseado no Tratado de Ginecologia FEBRASGO (2ª ed., Capítulo 78), Diretrizes FIGO 2021 e Consenso NCCN.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Neoplasia Rara e Potencialmente Mutilante: • As Duas Vias Etiopatogênicas Distintas do Carcinoma Vulvar • 1. Via Associada ao HPV (30-40%) • População: • Lesão Precursora: • Biologia Molecular: • p16INK4a • Histologia: • 2. Via Independente do HPV (60-70%) • Líquen Escleroso Vulvar crônico • TP53 • Histopatologia do Câncer Vulvar • Carcinoma Espinocelular / Epidermoide (CEC): • 90% de todos os casos • Melanoma Vulvar (5%): • Adenocarcinoma de Glândula de Bartholin (1-2%): • Mapa Visual & Infográfico Clínico: Câncer de Vulva e de Vagina • Abrir em Tela Cheia • Infográfico HD"},"cancervulva-semiologia":{"m":"cancervulva","h1":"Roteiro Semiológico do Câncer de Vulva e Vagina","sub":"Inspeção minuciosa de bordas, palpação bimanual da base da lesão e palpação linfonodal inguinofemoral sistemática.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os 4 Eixos Semiológicos da Lesão Neoplásica Vulvar • Prurido Vulvar Crônico Negligenciado: • Sangramento e Corrimento Fétido: • Dor em Queimação ou Pontada ao Sentar: • Lesão que Não Cicatriza: • Morfologia Típica: • ulcerada de bordas evertidas e endurecidas com fundo necrótico • Palpação Inguinofemoral Obrigatória: • linfática por etapas sequenciais"},"cancervulva-estadiamento":{"m":"cancervulva","h1":"Estadiamento FIGO 2021 & Conduta no Câncer de Vulva","sub":"A correlação da profundidade de invasão estromal (ponto de corte de 1 mm) com a indicação cirúrgica e manejo inguinal.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Mapa Visual & Infográfico Clínico: Câncer de Vulva e de Vagina • Abrir em Tela Cheia • Infográfico HD • Tabela de Estadiamento Cirúrgico FIGO 2021 (Vulva) • Estádio FIGO • Critérios Anatomopatológicos e Linfonodais • Conduta Padrão (FEBRASGO / NCCN) • Estádio IA • profundidade de invasão estromal ≤ 1,0 mm • Ressecção Local Ampla • Estádio IB • profundidade de invasão > 1,0 mm • Vulvectomia Parcial/Radical • Biópsia de Linfonodo Sentinela (SLN) • Estádio II • Estádio III • Radioterapia adjuvante externa na pelve e virilhas ± Quimioterapia com Cisplatina • Estádio IV • Quimiorradioterapia Concomitante Definitiva Exclusiva"},"cancervulva-cirurgia":{"m":"cancervulva","h1":"Princípios Cirúrgicos, Incisão Tríplice & Linfonodo Sentinela","sub":"A evolução cirúrgica: da clássica vulvectomia mutilante em bloco à técnica moderna poupadora de Basset e biópsia do sentinela.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Técnica das Três Incisões Separadas (Incisão Tríplice) • A Abordagem Moderna: • margens cirúrgicas macroscópicas livres de pelo menos 1 a 2 cm • duas incisões inguinais transversas separadas • Essa separação preserva pontes de pele vascularizada, reduzindo drasticamente a necrose de retalhos cutâneos e deiscências para... • Biópsia de Linfonodo Sentinela (SLN) no Câncer de Vulva • Critérios de Elegibilidade: • ausência de linfonodos palpáveis ou suspeitos ao ultrassom/tomografia pré-operatória (→cN0→) • Mapeamento Dual: • Se Linfonodo Sentinela Negativo (→pN0→): • seguramente omitida • Se Linfonodo Sentinela Positivo:"},"cancervulva-vagina":{"m":"cancervulva","h1":"Câncer Primário de Vagina: Estadiamento & Quimiorradioterapia","sub":"Neoplasia ginecológica rara tratada predominantemente por teleterapia pélvica e braquiterapia de alta taxa de dose (HDR).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma Visual do Câncer de Vagina • Particularidades Clínicas do Carcinoma Vaginal Primário • ausência de tumor sincrônico ou prévio no colo do útero nos últimos 5 anos e ausência de envolvimento na vulva • Localização mais comum: • Drenagem Linfática Bifásica: • linfonodos inguinofemorais superficiais • Hegemonia da Radioterapia: • padrão-ouro terapêutico para os estádios II a IV é a Radioterapia Externa Pélvica associada à Cisplatina semanal, seguida de Br..."},"cancervulva-tabelas":{"m":"cancervulva","h1":"Tabelas Comparativas de Neoplasias Vulvovaginais","sub":"Diretrizes de acompanhamento pós-tratamento, margens cirúrgicas e estadiamento clínico.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz de Conduta por Estádio e Margens Cirúrgicas • Cenário Cirúrgico • Margem Patológica Obtida • Conduta Pós-Operatória Mandatória (NCCN / FEBRASGO) • Margem Livre Adequada • Margem Comprometida ou Exígua • Radioterapia Externa Adjuvante na vulva • Linfonodos Inguinais Positivos (≥ 2 micrometástases ou ≥ 1 macrometástase) • Radioterapia Adjuvante Obrigatória"},"cancervulva-casos":{"m":"cancervulva","h1":"Casos Clínicos Simulados de Câncer de Vulva e Vagina","sub":"Treinamento de alto nível com situações oncológicas reais e botões de revelação da conduta comentada.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Úlcera endurecida de 2,5 cm no grande lábio esquerdo • Conduta Padrão-Ouro Recomendada: • Vulvectomia Parcial Radical com Margens ≥ 1,0-2,0 cm + BIÓPSIA DO LINFONODO SENTINELA INGUINAL BILATERAL (ou Linfadenectomia In... • Fundamentação FIGO 2021 / FEBRASGO: • Biópsia de Linfonodo Sentinela (SLN) • Mancha enegrecida e assimétrica em pequeno lábio de evolução rápida • Melanoma Maligno de Vulva • Conduta Oncológica Especializada: • Ampliação de Margens Cirúrgicas para 2,0 cm + Pesquisa de Linfonodo Sentinela Inguinal Bilateral + Estadiamento Sistêmico (PET-... • Fundamentação FEBRASGO / NCCN: • Sangramento pós-coital em idosa com massa em terço superior da vagina"},"cancervulva-prescricao":{"m":"cancervulva","h1":"Guia de Prescrição & Quimiorradioterapia Adjuvante","sub":"Posologias precisas de esquemas radiossensibilizantes com Cisplatina, profilaxia de linfedema e cuidados de ferida.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela Terapêutica Oncológica (NCCN / FEBRASGO) • Protocolo / Fármaco • Posologia & Ciclos • Indicação Oncológica • Cuidados Críticos & Monitoramento • Cisplatina Semanal • 40 mg/m² EV em infusão de 1 hora • Radioterapia Externa (EBRT) • Braquiterapia de Alta Taxa (HDR) • Prevenção de Linfedema de Membros Inferiores • 40 mg/m² EV em infusão de 1 hora , 1 vez por semana, por 5 a 6 semanas concomitante à radioterapia externa. • Quimioterapia radiossensibilizante em Câncer de Vulva estádio III/IV e Câncer de Vagina estádio II a IV. • Dose fracionada de 45 a 50,4 Gy em campos pélvicos e inguinais bilaterais (1,8 Gy/fração diária)."},"cirurgia-visao-geral":{"m":"cirurgia","h1":"Anatomia Cirúrgica Pélvica & Cirurgia Minimamente Invasiva","sub":"Capítulos 1-3, 5, 15-18, 69 FEBRASGO • ESHRE/ESGE • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • A pelve feminina é compartimentada por planos de tecido conjuntivo frouxo avascular entre as fáscias viscerais e parietais. • A abertura metódica desses espaços permite acessar vasos calibrosos na sua origem, isolar o trajeto do ureter e ressecar massas... • A cirurgia minimamente invasiva (laparoscopia e robótica) oferece magnificação óptica incomparável desses planos anatômicos. • 1. Embriogênese & Malformações Müllerianas: • 2. Topografia do Ureter (\"Água sob a Ponte\"): • 3. Segurança em Histeroscopia: • Espaços Avasculares Pélvicos, Ureter e Malformações Müllerianas • Abrir em Tela Cheia • Infográfico HD"},"cirurgia-embriologia":{"m":"cirurgia","h1":"Embriologia do Trato Genital Feminino: Müller vs Wolff","sub":"Embriologia Médica • Diferenciação Sexual • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • No embrião geneticamente 46,XX, a ausência da região determinante do sexo (gene *SRY*) permite que as cristas gonadais indifere... • Como não há testículos, não ocorre produção de Hormônio Antimülleriano (AMH) • Pela ausência de testosterona local, os Ductos Mesonéfricos (Wolff) regridem • Remanescentes embriológicos vestigiais possíveis: Cistos do ducto de Gärtner (na parede vaginal ântero-lateral), epoóforo e par... • Na ausência de AMH, os Ductos Paramesonéfricos (Müller) persistem • tubas uterinas • corpo e colo uterinos e 2/3 superiores da vagina"},"cirurgia-muller":{"m":"cirurgia","h1":"Malformações Müllerianas Congênitas & Cirurgia Reconstrutiva","sub":"Classificação ESHRE/ESGE • Cirurgia Corretiva • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Morfologia: • RETO ou com reentrância mínima < 1 cm • Impacto Clínico: • Tratamento Consensual: • Septoplastia Histeroscópica ambulatorial • Útero Bicorno (U3): • chanfradura externa da serosa fúndica > 1 cm • Útero Didelfo (U4): • Classificação ESHRE/ESGE & Propedêutica Mülleriana Adicional • Cariótipo & Fenótipo: • ovários perfeitamente funcionantes • Achado Anatômico: • Tratamento de 1ª Escolha: • Método Não Cirúrgico de Frank • 4. Anomalias Obstrutivas (Hematocolpo & Hematometra) • Hímen Imperfurado: • Quadro Típico: • membrana himenal protuberante tenso-elástica e azulada • Tratamento Curativo Imediato:"},"cirurgia-anatomia":{"m":"cirurgia","h1":"Espaços Avasculares da Pelve & O Trajeto do Ureter","sub":"Anatomia Cirúrgica • Zonas Críticas de Risco • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Espaço Pré-Vesical de Retzius: • Espaço Vesicovaginal / Vesicouterino: • Espaço Retovaginal: • Espaços Paravesicais e Pararretais (Okabayashi e Latzko): • No Estreito Superior: • Na Parede Pélvica Lateral: • O Cruzamento Crítico (\"Água sob a Ponte\"): • POR BAIXO da Artéria Uterina • 1,5 a 2 cm lateralmente ao colo uterino • Alerta de Segurança Máxima:"},"cirurgia-minimamente":{"m":"cirurgia","h1":"Meios de Distensão Histeroscópica & Balanço Hídrico","sub":"Segurança do Paciente • Endoscopia Ginecológica • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • 1. Meios Não Eletrolíticos (Glicina 1,5% / Sorbitol) • Fisiopatologia da Sobrecarga: • hiponatremia dilucional aguda grave • Quadro Clínico: • LIMITE MÁXIMO DE DÉFICIT DE FLUIDOS: 1.000 mL! • interrompida imediatamente • 2. Meios Eletrolíticos Isotônicos (Soro Fisiológico 0,9%) • Segurança Eletrolítica: • NÃO CAUSA HIPONATREMIA DILUCIONAL • LIMITE MÁXIMO DE DÉFICIT TOLERADO: • Até 2.500 mL • Até 1.500 mL • Recomendação da FEBRASGO / AAGL:"},"cirurgia-fluxogramas":{"m":"cirurgia","h1":"Fluxograma de Anatomia Cirúrgica Pélvica e Müller","sub":"Algoritmo Interativo • Anatomia Cirúrgica FEBRASGO • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretrizes & Fundamentos dos Algoritmos • Espaços Avasculares Pélvicos, Ureter e Malformações Müllerianas • Abrir em Tela Cheia • Infográfico HD"},"cirurgia-tabelas":{"m":"cirurgia","h1":"Classificação ESHRE/ESGE de Müller & Meios de Distensão","sub":"Tabelas de Classificação e Segurança Cirúrgica • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Meios de Distensão Histeroscópica & Limites Críticos de Déficit de Fluidos • Meio de Distensão • Energia Elétrica Compatível • Osmolaridade & Eletrólitos • Limite Máximo de Déficit • Risco Clínico Primário na Sobrecarga • Glicina a 1,5% • 1.000 mL (Limite estrito) • Sorbitol / Manitol a 3% • 1.000 mL • Soro Fisiológico a 0,9% • 2.500 mL • 2.500 mL (1.500 mL idosa)"},"cirurgia-casos":{"m":"cirurgia","h1":"Casos Clínicos Simulados & Conduta Perioperatória","sub":"Casos Clínicos & Prescrição Prática • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Menina de 13 Anos com Cólicas Mensais Recorrentes e Amenorreia • História Clínica: • Exame Físico: • membrana himenal imperfurada, tensa, abaulada e intensamente azulada • Conduta Correta & Discussão Baseada em Evidências: • 1. Diagnóstico Clínico Patognomônico: • Hímen Imperfurado com Hematocolpo e Hematometra • 2. Conduta Cirúrgica Curativa Imediata: • Realização de Himenotomia Cirúrgica em Cruz • Incisão em cruz no centro da membrana himenal abaulada com drenagem espontânea de grande volume de sangue retido de aspecto esc... • Ressecção dos quatro quadrantes excedentes e sutura das bordas da mucosa com fio absorvível fino (Catgut ou Vicryl 4-0) com pon..."},"climaterio-straw":{"m":"clim","h1":"Climatério: Fisiopatologia, Critérios STRAW+10 & Os Dois Grandes Grupos de Sintomas","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 56) e nos Consensos Internacionais da IMS e NAMS 2023.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fundamental de Prova & Prática Médica: • Menopausa é um marco retrospectivo definido por 12 meses consecutivos de amenorreia • Insuficiência Ovariana Prematura (IOP) • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Conceituação & Fisiopatologia da Transição Menopáusica: • Menopausa • 12 meses consecutivos de amenorreia espontânea • 2. O Declínio Ovariano & Eixo Hormonal (Critérios STRAW+10): • FSH • 3. Os Dois Grandes Grupos de Sintomas do Climatério: • Sintomas Vasomotores (\"Fogachos\" / Fogachos Noturnos): • Síndrome Geniturinária da Menopausa (SGM): • 4. O Conceito da \"Janela de Oportunidade\" na TRH:"},"climaterio-janela-risco":{"m":"clim","h1":"A \"Janela de Oportunidade\" Cardiovascular & Checklist de Contraindicações","sub":"A estratificação de segurança que revolucionou a prescrição da Terapia Hormonal da Menopausa.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Rastreamento de Contraindicações Absolutas e Avaliação da Janela de Oportunidade • A Janela de Oportunidade Cardiovascular vs Checklist de Contraindicações • Conceito Clínico • Definição Operacional da FEBRASGO / IMS • Mecanismo Biológico & Efeitos Vasculares • Recomendação Terapêutica • Dentro da Janela de Oportunidade • < 60 anos • < 10 anos • RELAÇÃO RISCO-BENEFÍCIO ALTAMENTE FAVORÁVEL: • Fora da Janela de Oportunidade • ≥ 60 anos • ≥ 10 anos • NÃO INICIAR THM SISTÊMICA DE ROTINA: • Contraindicações Absolutas Formais"},"climaterio-regimes":{"m":"clim","h1":"Regimes Terapêuticos da THM: Presença de Útero (E+P) vs Histerectomizada vs Tibolona","sub":"A regra de ouro de proteger o endométrio e a individualização dos esquemas terapêuticos.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma da Regra de Ouro do Endométrio e Esquemas de Administração • Detalhamento dos Regimes Farmacológicos • atrofia endometrial contínua com ausência de menstruação (amenorreia) • 12 a 14 dias consecutivos no final do ciclo • perimenopausa • NÃO necessitam de progestagênio • Indicação de excelência em mulheres na pós-menopausa com queixa de baixa libido e dor mamária • Tabela Comparativa dos Regimes Terapêuticos da THM (FEBRASGO) • Regime Farmacológico • Composição & Esquema Posológico • Padrão de Sangramento Esperado • Indicação Clínica Preferencial • Vantagens & Cuidados Práticos • Combinado Contínuo (E+P Contínuo) • amenorreia permanente"},"climaterio-vias":{"m":"clim","h1":"Seleção da Via Estrogênica: Via Transdérmica vs Via Oral","sub":"O impacto crítico do metabolismo hepático de primeira passagem na segurança metabólica e vascular.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Decisão da Via de Administração do Estrogênio • Por que a Via Transdérmica é a Preferida em Comorbidades? • Critério Farmacológico • Via Transdérmica (17-beta-estradiol gel / adesivo) • Via Oral (Estradiol micronizado / Valerato) • Passagem Hepática • Desvia completamente da 1ª passagem hepática. • Fatores de Coagulação & TEV • Não altera fatores de coagulação nem proteína C reativa. • Perfil Lipídico • eleva os triglicerídeos séricos • Indicações Clínicas de Eleição • Mandatória se: • Aumenta HDL e reduz LDL, mas eleva os triglicerídeos séricos (contraindicada se TG > 200 mg/dL)."},"climaterio-nao-hormonal":{"m":"clim","h1":"Manejo Não Hormonal dos Sintomas Vasomotores: IRSNs, Gabapentina & Alerta Tamoxifeno","sub":"Estratégias baseadas em evidências para pacientes com contraindicação absoluta à terapia hormonal.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Prescrição Não Hormonal dos Fogachos e Alerta de Interação Oncológica • Fármacos Não Hormonais para Fogachos (FEBRASGO & NAMS 2023) • reduzindo em até 65% a frequência e severidade dos fogachos • insônia severa • NUNCA prescreva Paroxetina ou Fluoxetina para pacientes em uso de Tamoxifeno! • aumentando a taxa de recidiva do câncer de mama • Fármacos Não Hormonais para Sintomas Vasomotores: Eficácia, Posologia e Segurança (NAMS / FEBRASGO) • Fármaco / Classe • Mecanismo de Ação Central • Posologia Prática Recomendada • Eficácia Redutora de Fogachos • Efeitos Adversos Mais Frequentes • Compatibilidade com Tamoxifeno (CYP2D6) • Fezolinetant 45 mg (Veozah)"},"climaterio-sgm":{"m":"clim","h1":"Síndrome Geniturinária da Menopausa (SGM): Estrogênios Tópicos Vaginais & Segurança","sub":"O tratamento de alta precisão local sem necessidade de oposição progestagênica sistêmica.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Manejo da Síndrome Geniturinária Isolada e Perfil de Segurança Local • Estrogênios Locais: Eficácia & Mitos de Segurança (FEBRASGO) • NÃO estimula a proliferação endometrial • Fase de Ataque (2 semanas): • Fase de Manutenção: • 2 a 3 vezes por semana • Terapêutica Local da Síndrome Geniturinária da Menopausa (SGM) e Segurança Oncológica • Princípio Ativo / Formulação • Mecanismo Farmacológico Local • Regime de Ataque & Manutenção • Absorção Sistêmica & Níveis de Estradiol • Segurança em Pacientes com Câncer de Mama • Necessidade de Progestagênio Protetor • Promestrieno 10 mg/g creme / 10 mg cápsulas • Ataque: • Manutenção:"},"climaterio-casos":{"m":"clim","h1":"Casos Clínicos Simulados de Climatério & THM","sub":"Treinamento prático aplicando janela de oportunidade, seleção de regimes e vias transdérmicas.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Candidata Ideal na Janela de Oportunidade com Útero Preservado • Paciente: • Conduta Padrão-Ouro Baseada em Evidências: • Elegibilidade Perfeita: • Regra de Ouro do Endométrio: • Prescrição Recomendada (Regime Contínuo Combinado): • 17-beta-estradiol em gel transdérmico: • Progesterona Micronizada Natural: • Caso 2: Fogachos Severos em Paciente com Hipertensão e Síndrome Metabólica • Raciocínio Clínico Atualizado da FEBRASGO: • O Erro do Ginecologista Anterior: • A Solução Mandatória: VIA TRANSDÉRMICA: • Prescrição Correta: • 17-beta-estradiol gel transdérmico: • Caso 3: Fogachos Incapacitantes em Paciente com Câncer de Mama em Tamoxifeno"},"climaterio-prescricao":{"m":"clim","h1":"Guia Rápido de Prescrições & Doses em Climatério & THM","sub":"Tabela de bolso com fármacos essenciais, posologias práticas, mecanismos e alertas clínicos.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Classe • Mecanismo & Indicação Principal • Posologia Prática Recomendada • Alertas Clínicos & Cuidados • 17-beta-estradiol Gel 0,06% • 1 a 2 pumps (0,75 a 1,5 mg) ao dia • Progesterona Micronizada Natural 100 mg / 200 mg • 100 mg VO à noite • 200 mg VO à noite • Didrogesterona 10 mg • Tibolona 1,25 mg / 2,5 mg • Desvenlafaxina 50 mg • Estriol Creme Vaginal 1 mg/g • 2 a 3 vezes por semana • Fezolinetant 45 mg (Veozah) • Gabapentina 300 mg • Promestrieno Cápsulas Vaginais 10 mg • 17-beta-estradiol Adesivo Transdérmico 50 mcg • 17-beta-estradiol Gel 0,06% (1 pump = 0,75 mg)"},"colo-rastreamento":{"m":"colo","h1":"Rastreamento do Câncer do Colo do Útero & Vacinação contra o HPV","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 13) e Diretrizes Brasileiras para o Rastreamento (INCA / MS / FEBRASGO).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fundamental de Saúde Pública & Provas de Residência: • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Cenário Epidemiológico & Doença Prevenível: • 2. Oncogênese Viral do HPV (Papilomavírus Humano): • HPV 16 e 18 • 3. A Zona de Transformação (ZT) & Junção Escamocolunar (JEC): • 4. Diretrizes de Rastreamento (INCA / Ministério da Saúde / FEBRASGO): • População-alvo: • 25 e 64 anos • Periodicidade: • 3 anos • Prevenção Primária: • Roteiro Semiológico: Sinais de Alerta no Trato Genital Inferior • 1. Sangramento Pós-Coital (Sinusorragia) & Espontâneo: • Frequência: • Intensidade: • Duração: • Sinais ao Exame Especular: • 2. Corrimento Serossanguinolento / Fétido:"},"colo-bethesda":{"m":"colo","h1":"Manejo das Citopatologias Alteradas (Sistema de Bethesda)","sub":"Condutas mandatórias para ASC-US, ASC-H, LSIL, HSIL e AGC segundo as Diretrizes Brasileiras / FEBRASGO.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Árvore de Decisão Imediata para Laudos Citopatológicos Alterados • Tabela Prática de Condutas Frente aos Laudos Citopatológicos • Resultado Citopatológico • Significado Clínico • Idade / Situação • Conduta Médica Mandatória • ASC-US • < 25 anos • 25 a 29 anos • Repetir Citopatológico em 12 meses • Colposcopia • ≥ 30 anos • Repetir Citopatológico em 6 meses • ASC-H • Qualquer Idade • Encaminhar Imediatamente para COLPOSCOPIA • LSIL • ≥ 25 anos • HSIL • COLPOSCOPIA IMEDIATA • \"Ver e Tratar\" • AGC / AGUS • Avaliação do Canal Endocervical • ≥ 35 anos • Avaliação Endometrial • ASC-H (Não se pode afastar Alto Grau)"},"colo-colposcopia":{"m":"colo","h1":"Colposcopia Especializada, Zonas de Transformação & Testes Químicos","sub":"Léxico oficial da IFCPC (Federação Internacional de Patologia Cervical e Colposcopia) e Capítulo 14 da FEBRASGO.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Avaliação Colposcópica & Zonas de Transformação (ZT 1, 2 e 3) • Classificação das Zonas de Transformação (ZTs) & Testes Químicos • totalmente ectocervicais e 100% visíveis • 100% visíveis • JEC NÃO é totalmente visível • Conização Clássica a Frio ou EZT Tipo 3 • Iodo-Positivo (Castanho-escuro): • Iodo-Negativo (Amarelo-mostarda): • Schiller Positivo • Tabela de Nomenclatura Colposcópica IFCPC 2011 & Achados Maiores vs Menores (FEBRASGO / INCA) • Categoria IFCPC 2011 • Achados Colposcópicos Típicos • Fisiopatologia & Risco Histológico • Critérios de Biópsia & Conduta FEBRASGO • Avaliação Geral & Tipos de ZT • ZT Tipo 1: • ZT Tipo 2: • ZT Tipo 3:"},"colo-precursoras":{"m":"colo","h1":"Manejo das Neoplasias Intraepiteliais Cervicais (NIC 1, NIC 2 e NIC 3)","sub":"Conduta conservadora vs. procedimentos excisionais com alça diatérmica e conização (Capítulo 77 FEBRASGO).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Decisão Terapêutica nas Lesões Precursoras • Comparativo das Abordagens Terapêuticas das Lesões Pré-Invasivas • Diagnóstico Histológico • Conduta Padrão • Método Empregado • Seguimento Pós-Tratamento • NIC 1 • Expectante / Observação Clínica • NIC 2 e NIC 3 • Tratamento Excisional Obrigatório • EZT Tipo 1 ou 2 (CAF / LEEP): • NIC 3 com ZT 3 / Suspeita de Invasão / Adenocarcinoma in Situ (AIS) • Conização a Frio Clássica (EZT Tipo 3)"},"colo-estadiamento":{"m":"colo","h1":"Estadiamento Clínico e por Imagem do Câncer de Colo Uterino (FIGO 2018)","sub":"Classificação oficial revista incorporando exame clínico, exames de imagem e achados anatomopatológicos.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Diagrama de Estadiamento FIGO 2018: Microscópico vs Confinado vs Paramétrios vs Avançado • Tabela Completa de Estadiamento FIGO 2018 • Estádio FIGO • Definição Anatômica • Subdivisão • Significado Prático / Terapêutico • Estádio I • IA1: • IA2: • IB1: • IB2: • IB3: • estádios cirúrgicos • IB3 (> 4 cm): • Estádio II • IIA1: • IIA2: • IIB: • IIB é o divisor de águas: • Estádio III • IIIA: • IIIB: • IIIC1: • IIIC2: • Estádio IV • IVA: • IVB:"},"colo-tratamento":{"m":"colo","h1":"Tratamento do Câncer de Colo Uterino: Cirurgia vs. Quimiorradioterapia","sub":"A grande bifurcação terapêutica: cirurgia de Wertheim-Meigs vs. Quimiorradioterapia Concomitante (Capítulo 79 FEBRASGO).","flow":1,"info":0,"presc":1,"caso":0,"kw":"Fluxograma da Decisão Terapêutica Central no Câncer de Colo Uterino • Regras de Ouro no Tratamento Oncológico Cervical • Padrão para IB1, IB2 e IIA1 • Alerta do Estudo LACC (2018): • DEVE SER LAPAROTÔMICA ABERTA • estádio IB1 (≤ 2 cm) • Traquelectomia Radical • IB3, IIA2, IIB, III e IVA • Teleterapia Externa Pélvica • Cisplatina semanal (40 mg/m²) • Braquiterapia intracavitária de alta taxa de dose • Matriz de Decisão Terapêutica no Câncer de Colo Uterino por Estádio FIGO 2018 (FEBRASGO / NCCN) • Estádio FIGO 2018 • Extensão Anatômica do Tumor • Conduta Cirúrgica de Escolha • Linfadenectomia Pélvica • Radioterapia & Tratamento Sistêmico • Estádio IA1"},"colo-casos":{"m":"colo","h1":"Casos Clínicos Simulados de Colo Uterino","sub":"Treinamento ativo aplicando diretrizes do Ministério da Saúde/INCA, FIGO 2018 e Tratado FEBRASGO.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Mulher Jovem com Citopatológico de ASC-US • Paciente: • Conduta Oficial do Ministério da Saúde / FEBRASGO: • Idade da Paciente: • Conduta Imediata: • Repetir o exame citopatológico no intervalo de 12 MESES • Justificativa Científica: • Conduta Futura: • Caso 2: Mulher de 33 anos com Laudo de HSIL e Achado Maior na Colposcopia • Conduta FEBRASGO / Diretrizes Brasileiras: • Opção 1 (Estratégia \"Ver e Tratar\" - CAF Imediato): • Excisão da Zona de Transformação com Alça Diatérmica (EZT 1 / CAF) • Opção 2 (Abordagem em Duas Etapas): • Caso 3: Sinusorragia e Lesão Cervical com Invasão Parametrial (Estádio IIB) • Estadiamento FIGO 2018 & Conduta Oncológica:"},"colo-prescricao":{"m":"colo","h1":"Guia Rápido de Prescrições & Protocolos em Colo Uterino","sub":"Tabela de bolso para atenção primária, ambulatório de patologia cervical e serviço oncológico.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Intervenção • Indicação Clínica • Posologia / Esquema • Recomendações Práticas & Alertas • Vacina HPV Quadrivalente • Meninas e meninos de 9 a 14 anos: • Dose Única (0,5 mL IM no deltoide) • Imunossuprimidos (HIV/Transplantados/Oncológicos de 9 a 45 anos): • Estriol Creme Vaginal 1 mg/g • Cisplatina • 40 mg/m² IV 1x por semana • Solução de Ácido Acético a 5% • Solução de Monsel • 40 mg/m² IV 1x por semana durante as semanas de teleterapia pélvica externa (geralmente 5 a 6 ciclos)."},"contracepcao-visao-geral":{"m":"contracepcao","h1":"Visão Geral & Fisiologia Farmacológica da Contracepção","sub":"Capítulos 70 a 76 FEBRASGO • Farmacologia Reprodutiva • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"📊 Índice de Pearl (Métrica de Eficácia): • Uso Perfeito • Uso Típico / Habitual • Fundamentos Teóricos & Roteiro Prático • Papel dos Progestagênios (O Pilar Contraceptivo Essencial): • Papel dos Estrogênios (Componente Regulador): • Estabilidade Endometrial: • Componentes Estrogênicos: • Gerações de Progestagênios: • Levonorgestrel • menor risco relativo de trombose venosa entre todos os combinados • Drospirenona • Planejamento Familiar: Critérios OMS & Diretrizes FEBRASGO • Abrir em Tela Cheia • Infográfico HD"},"contracepcao-combinados":{"m":"contracepcao","h1":"Contraceptivos Combinados (CHCs) & Critérios de Elegibilidade da OMS","sub":"Critérios Médicos OMS • Segurança Cardiovascular • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Planejamento Familiar: Critérios OMS & Diretrizes FEBRASGO • Abrir em Tela Cheia • Infográfico HD • Fundamentos Teóricos & Roteiro Prático • 1. Tabagismo em Mulheres com Idade ≥ 35 Anos Fumando ≥ 15 Cigarros/dia • 2. Enxaqueca com Aura em Qualquer Idade • 3. Hipertensão Arterial Descontrolada • 4. Histórico Pessoal de Trombose Venosa Profunda (TVP) ou Embolia Pulmonar (TEP) • 5. Trombofilias Hereditárias ou Adquiridas Conhecidas • 6. Lúpus Eritematoso Sistêmico com Anticorpo Antifosfolípide Positivo • 7. Câncer de Mama Atual • 8. Cirrose Hepática Grave Descompensada • 9. Pós-Parto Imediato < 21 Dias • Alternativas Seguras para Pacientes com Risco Cardiovascular"},"contracepcao-progestagenios":{"m":"contracepcao","h1":"Métodos de Progestagênio Isolado & Manejo do Sangramento de Escape (*Spotting*)","sub":"Progestagênios Isolados • Manejo de Efeitos Adversos • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Algoritmo de Manejo do Sangramento de Escape (Spotting) sob Progestagênios • Fundamentos Teóricos & Roteiro Prático • Minipílula Tradicional (Noretisterona 0,35 mg): • Desogestrel 75 mcg: • Drospirenona 4 mg (Regime 24+4): • 24 horas • Acetato de Medroxiprogesterona de Depósito (AMPD 150 mg IM Trimestral): • Protocolo Escalonado para Controle do *Spotting* • 1ª Linha: Anti-inflamatórios (AINEs): • 2ª Linha: Antifibrinolítico (Ácido Tranexâmico): • 3ª Linha: Terapia Estrogênica Temporária:"},"contracepcao-emergencia":{"m":"contracepcao","h1":"Anticoncepção de Emergência (AE) & Regras de Esquecimento de Pílulas","sub":"Contracepção de Emergência • Conduta em Esquecimentos • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":0,"presc":1,"caso":0,"kw":"Algoritmo Prático de Anticoncepção de Emergência e Esquecimento • Fundamentos Teóricos & Roteiro Prático • Padrão Ouro até 72 Horas: • Dose única oral de 1,5 mg (ou duas doses de 0,75 mg a cada 12h). • Mecanismo: Inibe ou atrasa a liberação do pico ovulatório de LH. • NÃO é abortivo! • Pode ser repetido no mesmo ciclo se houver nova relação desprotegida. • Alerta: Eficácia significativamente reduzida em mulheres com IMC ≥ 30 kg/m² ou peso > 75-80 kg • Eficaz até 120 Horas (5 Dias): • Modulador Seletivo do Receptor de Progesterona (SPRM) em dose única oral. • Mantém eficácia estável durante todo o intervalo de 5 dias (120 horas)."},"contracepcao-esterilizacao":{"m":"contracepcao","h1":"Esterilização Cirúrgica Voluntária & a Nova Lei nº 14.443/2022","sub":"Legislação Brasileira • Lei Federal nº 14.443/2022 • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • 1. Redução da Idade Mínima: • reduzida de 25 para 21 anos • 2 filhos vivos • 2. REVOGAÇÃO DEFINITIVA DO CONSENTIMENTO DO CÔNJUGE: • Extinção histórica da exigência de autorização do marido/parceiro! • direito estritamente personalíssimo e individual • 3. Realização da Laqueadura no Momento do Parto / Cesariana: • 60 dias • Salpingectomia Bilateral Total Profilática Oportunística: • remoção cirúrgica completa de ambas as trompas de Falópio • 50% a 65% • Vasectomia Masculina: • azoospermia em espermograma realizado após 8 a 12 semanas (ou 20 ejaculações)"},"contracepcao-tabelas":{"m":"contracepcao","h1":"Tabelas Clínicas de Apoio ao Planejamento Familiar","sub":"Critérios Oficiais • Tabelas Comparativas • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Matriz Sintética de Elegibilidade Médica da OMS (Categorias 3 e 4) • Condição Clínica da Paciente • Combinados com Estrogênio (CHCs) • Progestagênio Isolado (POPs / Implante) • DIU com Cobre (T-Cu 380A) • Tabagista ≥ 35 anos (≥ 15 cigarros/dia) • Categoria 4 (Proibido) • Categoria 1 (Liberado) • Enxaqueca com Aura em Qualquer Idade • Categoria 2 (Permitido) • Histórico Pessoal de TVP / TEP Prévio • Hipertensão Grave (PA ≥ 160/100 mmHg) • Categoria 2 (Drospirenona: Cat 1) • Amamentação Exclusiva (< 6 semanas pós-parto) • Categoria 2 (POPs: Cat 1 / AMPD: Cat 3) • Categoria 1 (até 48h ou > 4 sem) • Câncer de Mama Atual"},"contracepcao-casos":{"m":"contracepcao","h1":"Casos Clínicos Simulados: Anticoncepção & Elegibilidade","sub":"Casos Clínicos Interativos • Tomada de Decisão Médica • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Mulher de 37 Anos, Tabagista Pesada com Enxaqueca com Aura • História Clínica: • Exame Físico: • Conduta Correta & Discussão Baseada em Evidências: • Contraindicação Absoluta Dupla ao Estrogênio (OMS Categoria 4): • 1. Mulher com idade ≥ 35 anos e tabagista de ≥ 15 cigarros/dia (Categoria 4 para CHCs). • 2. Enxaqueca com aura em qualquer idade (Categoria 4 absoluta devido ao risco de AVC isquêmico). • Conduta Contraceptiva Segura: • Proibir terminantemente qualquer método combinado com estrogênio • Opções de Escolha de Alta Segurança: • DIU de Cobre (T-Cu 380A): • Sistema Intrauterino com Levonorgestrel (DIU-LNG): • Implante Subdérmico de Etonogestrel:"},"contracepcao-prescricao":{"m":"contracepcao","h1":"Guia de Prescrição Médica em Planejamento Familiar","sub":"Farmacologia Prática • Receituário Estruturado • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":1,"caso":0,"kw":"1. Contraceptivo Oral Combinado de Baixo Risco de TEV (Levonorgestrel) • 2. Pílula de Progestagênio Isolado para Lactantes ou Risco Cardiovascular • 3. Protocolo de Anticoncepção de Emergência (Dose Única) • 4. Esquema Farmacológico para Sangramento de Escape (*Spotting*)"},"dipav-fisiopatologia":{"m":"dipav","h1":"Doença Inflamatória Pélvica (DIP): Fisiopatologia Ascendente, Quebra de Barreiras e Microbiologia","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 28), nas Diretrizes do CDC e Consensos Internacionais.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fisiopatológico Central: • infecção ascendente por patógenos sexualmente transmissíveis • infecção polimicrobiana complexa • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Conceito & Severidade Clínica: • 2. Microbiologia Polimicrobiana & Quebra de Barreiras: • Chlamydia trachomatis • Neisseria gonorrhoeae • 3. Critérios Diagnósticos do CDC / Ministério da Saúde: • Critérios Maiores (Obrigatória a presença dos 3): • Critérios Menores (Pelo menos 1 presente): • Critérios Elaborados (Confirmatórios definitivos): • 4. Sequelas Graves e Irreversíveis: • infertilidade tubária • gravidez ectópica • dor pélvica crônica"},"dipav-criterios":{"m":"dipav","h1":"Critérios Diagnósticos de Gainesville/CDC & Diagnóstico Diferencial do Abdome Agudo","sub":"Sensibilidade diagnóstica, exclusão mandatória de emergências cirúrgicas e papel da laparoscopia (FEBRASGO Cap. 28).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Alerta do Beta-hCG Obrigatório: • a realização do teste de gravidez (Beta-hCG) é mandatória antes de qualquer intervenção • Fluxograma de Critérios Clínicos de Gainesville e Algoritmo Diferencial • Diagnóstico Diferencial Clínico do Abdome Agudo em Mulheres Jovens • Patologia Suspeita • Características Semiológicas da Dor • Achados Clínicos & Exame Físico • Exame de Escolha Diferencial • Doença Inflamatória Pélvica (DIP) • Apendicite Aguda • Gravidez Ectópica Rota • Beta-hCG positivo • Torção Anexial / Ovariana • Doppler Colorido Transvaginal • Rotura de Cisto Hemorrágico"},"dipav-monif":{"m":"dipav","h1":"Estadiamento Clínico-Cirúrgico de Monif & Síndrome de Fitz-Hugh-Curtis","sub":"Estratificação da gravidade pélvica de Monif I a IV e manifestações extrapélvicas por disseminação contígua (FEBRASGO Cap. 28).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Importância Prática do Estadiamento de Monif: • divisor de águas na conduta médica • Monif II a IV possuem indicação formal de internação hospitalar imediata • Fluxograma de Estadiamento de Monif I a IV e Peri-Hepatite de Fitz-Hugh-Curtis • Quadro Comparativo dos 4 Estádios de Monif • Estádio de Monif • Definição Fisiopatológica • Quadro Clínico & Exame Físico • Local de Tratamento & Conduta • Monif I • SEM peritonite • Ambulatorial: • Monif II • COM peritonite pélvica • descompressão brusca dolorosa positiva restrita à pelve • Internação Hospitalar: • Monif III • Abscesso Tubo-Ovariano (ATO) ÍNTEGRO • Monif IV • Abscesso Tubo-Ovariano ROTO"},"dipav-terapeutica":{"m":"dipav","h1":"Tomada de Decisão Terapêutica na DIP: Ambulatorial vs Hospitalar Parenteral","sub":"Critérios formais de internação, esquemas antimicrobianos recomendados e critérios de transição parenteral-oral (FEBRASGO Cap. 28).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Tempo Mínimo Obrigatório de Tratamento: • completar obrigatoriamente 14 dias ininterruptos de tratamento • Fluxograma Decisório: Tratamento Ambulatorial vs Hospitalar e Esquemas de 1ª a 3ª Linha • Protocolos Farmacológicos Detalhados (Doses e Posologias) • Modalidade / Linha • Composição do Esquema Antimicrobiano • Posologia & Duração • Indicação Específica • Ambulatorial Oral • Ceftriaxona + Doxiciclina + Metronidazol • Hospitalar Parenteral (1ª Linha) • Ceftriaxona + Doxiciclina + Metronidazol IV • Hospitalar Parenteral (2ª Linha) • Ampicilina / Sulbactam + Doxiciclina • Hospitalar Parenteral (3ª Linha) • Clindamicina + Gentamicina"},"dipav-abscesso":{"m":"dipav","h1":"Manejo do Abscesso Tubo-Ovariano (ATO), Intervenções Percutâneas/Cirúrgicas e Diretriz do DIU","sub":"Estratificação por diâmetro na USTV, vias de drenagem, preservação ovariana e conduta na usuária de DIU (FEBRASGO Cap. 28).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Conduta Oficial da FEBRASGO para o DIU na DIP: • iniciar imediatamente os antibióticos apropriados e só remover o DIU se não houver melhora clínica após 48 a 72 horas • Fluxograma de Manejo do ATO: Tratamento Clínico, Drenagem Guiada vs Cirurgia Aberta • Estratificação Prognóstica do Diâmetro do Abscesso Tubo-Ovariano • Diâmetro Máximo do ATO • Taxa de Sucesso Clínico com Antibiótico IV • Conduta Preferencial FEBRASGO • ATO < 5,0 cm • > 90% de cura clínica • ATO entre 5,0 e 8,0 cm • 70% a 80% de resolução clínica • ATO ≥ 8,0 a 10,0 cm • Abscesso com Fundo de Saco Abaúlado • Colpotomia Posterior com Drenagem Transvaginal: • Abscesso Tubo-Ovariano Roto"},"dipav-sequelas":{"m":"dipav","h1":"Sequelas Crônicas da DIP: Fator Tuboperitoneal, Hidrossalpinge, Prenhez Ectópica e Dor Crônica","sub":"Aconselhamento reprodutivo, impacto da hidrossalpinge na FIV e abordagem multidisciplinar da dor crônica (FEBRASGO Cap. 28).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Impacto na Reprodução Assistida: • efeito citotóxico e embriotóxico direto sobre o blastocisto • salpingectomia laparoscópica pré-FIV • Fluxograma de Rastreamento de Sequelas Tubárias, Avaliação por HSG e Conduta Pré-FIV • As 4 Grandes Sequelas a Longo Prazo da Doença Inflamatória Pélvica • Sequela Tardia • Risco Epidemiológico Acumulado • Fisiopatologia da Lesão • Conduta Ginecológica Recomendada • Infertilidade Tuboperitoneal • 10% a 12% • 25% • > 50% a 60% • Fertilização in Vitro (FIV) • Hidrossalpinge • Salpingectomia Bilateral Laparoscópica • Gravidez Ectópica Tubária • 6 a 10 vezes maior • Dor Pélvica Crônica (DPC) • 30% das pacientes"},"dipav-casos":{"m":"dipav","h1":"Casos Clínicos Simulados de Doença Inflamatória Pélvica & Emergências","sub":"Treinamento avançado aplicando critérios de Monif, decisão de internação, manejo conservador do ATO e ATO roto de urgência.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: DIP Estádio I em Mulher Jovem com Critérios Ambulatoriais • Paciente: • Conduta Padrão-Ouro Baseada em Evidências (FEBRASGO): • Confirmação Diagnóstica: • Estadiamento Clínico: • DIP Estádio I de Monif • Elegibilidade para Tratamento Ambulatorial: • Prescrição Ambulatorial Tripla (14 Dias): • Ceftriaxona 500 mg IM em Dose Única • Doxiciclina 100 mg VO de 12 em 12h por 14 dias ininterruptos • Metronidazol 500 mg VO de 12 em 12h por 14 dias ininterruptos • Reavaliação Obrigatória: • 48 a 72 horas • Caso 2: Abscesso Tubo-Ovariano Íntegro de 6 cm em Usuária de DIU de Cobre • Raciocínio Clínico FEBRASGO & Conduta Hospitalar Avançada: • Diagnóstico & Estadiamento:"},"dipav-prescricao":{"m":"dipav","h1":"Guia Rápido de Prescrições Hospitalares & Parenterais na DIP","sub":"Tabela de bolso com fármacos de emergência, vias, posologias parenterais, alternativas em alergias e ajustes de dose.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Apresentação • Espectro de Ação na DIP • Posologia Parenteral Hospitalar • Alertas de Segurança & Cuidados • Ceftriaxona 1 g / 2 g • 1 g a 2 g IV em infusão de 30 minutos a cada 24 horas • Doxiciclina 100 mg • 100 mg VO ou IV de 12 em 12 horas por 14 dias ininterruptos • CONTRAINDICADA NA GESTAÇÃO • Metronidazol 500 mg • 500 mg (100 mL) IV em infusão de 30 minutos a cada 8 horas • Efeito Antabuse / Dissulfiram • Ampicilina / Sulbactam 1,5 g / 3 g • 3 g IV diluído em 100 mL de SF 0,9% a cada 6 horas • Clindamicina 600 mg / 900 mg • 900 mg IV a cada 8 horas • Gentamicina 80 mg • Dose de ataque: 2 mg/kg IV"},"dor-visao-geral":{"m":"dor","h1":"Visão Geral & Fisiopatologia da Dor Pélvica Crônica (DPC)","sub":"Capítulos 30 e 36 FEBRASGO • Neurobiologia da Dor • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"️ O Paradigma da Complexidade Pélvica: • Fundamentos Teóricos & Roteiro Prático • 6 meses • Dor Visceral (Fibras C amielínicas): • Dor Somática Parietal (Fibras A-delta mielinizadas): • Sensibilização Periférica: • Sensibilização Central (Wind-up): • Alodinia & Hiperalgesia: • Tabela de Referência & Classificação Clínica • Característica • Dor Aguda / Inflamatória • Dor Pélvica Crônica / Neuropática • Finalidade Biológica • Mecanismo Predominante • Resposta a Analgésicos Comuns • Impacto Emocional / Psíquico • Mapa Visual & Infográfico Clínico: Dor Pélvica Crônica & Dismenorreia • Abrir em Tela Cheia • Infográfico HD"},"dor-semiologia":{"m":"dor","h1":"Roteiro Semiológico em 4 Eixos da Dor Pélvica","sub":"Roteiro Prático • Semiotécnica FEBRASGO • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Dica Prática de Consultório: • Fundamentos Teóricos & Roteiro Prático • Temporalidade & Ritmo: • Localização & Irradiação: • Fatores Desencadeantes & Alívio: • Histórico Obstétrico e Cirúrgico: • Postura & Marcha: • Sinal de Carnett: • parede abdominal • visceral intra-abdominal • Toque Vaginal Unidigital & Bidigital: • Mapeamento Miofascial:"},"dor-dismenorreia":{"m":"dor","h1":"Dismenorreia Primária vs Secundária: Manejo Escalonado","sub":"Capítulo 36 FEBRASGO • Condutas Baseadas em Evidências • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Mapa Visual & Infográfico Clínico: Dor Pélvica Crônica & Dismenorreia • Abrir em Tela Cheia • Infográfico HD • Fundamentos Teóricos & Roteiro Prático • Fisiopatologia: • prostaglandinas PGF2α e PGE2 • Início característico: 1 a 2 anos após a menarca (início de ciclos ovulatórios). • Dor em cólica supra-púbica iniciada horas antes ou com o início do sangramento, durando 48 a 72 horas. • Sintomas sistêmicos frequentes: náuseas, vômitos, cefaleia, diarreia e lombalgia. • Exame pélvico rigorosamente normal e ultrassonografia sem anormalidades. • 1ª Linha Terapêutica: • Dismenorreia Secundária (Orgânica)"},"dor-diagnostico-diferencial":{"m":"dor","h1":"Diagnóstico Diferencial da DPC: As 4 Grandes Esferas","sub":"Diagnóstico Diferencial • Algoritmo Multidisciplinar • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Algoritmo de Investigação e Diagnóstico Diferencial da DPC • Fundamentos Teóricos & Roteiro Prático • Quadro Clínico: • enchimento vesical • alívio imediato após a micção • Acompanhada de polaciúria severa (às vezes > 20-30 micções/dia), noctúria e urgência miccional com urina I e urocultura persist... • Diagnóstico: • Tratamento: • 2. Neuralgia do Nervo Pudendo & Critérios de Nantes • Critérios de Nantes (Diagnóstico Formal): • Dor desencadeada ou exacerbada na posição sentada • NÃO desperta a paciente à noite • Ausência de déficit sensitivo objetivo • Alívio diagnóstico imediato da dor após bloqueio anestésico • Conduta:"},"dor-terapeutica-multimodal":{"m":"dor","h1":"Abordagem Terapêutica Interdisciplinar & Neuromodulação","sub":"Interdisciplinaridade • Farmacologia da Dor • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"🚫 Alerta Farmacológico FEBRASGO: • desencorajado • Fundamentos Teóricos & Roteiro Prático • Antidepressivos Tricíclicos (Amitriptilina): • Inibidores da Recaptação de Serotonina e Noradrenalina (Duloxetina): • Ligantes da Subunidade α2-δ (Gabapentina e Pregabalina): • Fisioterapia Especializada do Assoalho Pélvico: • Terapia Cognitivo-Comportamental (TCC): • Procedimentos Intervencionistas:"},"dor-tabelas":{"m":"dor","h1":"Tabelas Clínicas de Apoio à Tomada de Decisão na DPC","sub":"Síntese Diagnóstica • Tabelas Práticas • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Matriz Diferencial das Principais Causas de Dor Pélvica Crônica • Etiologia • Padrão Cronológico da Dor • Sintomas Associados Característicos • Achados no Exame Físico / Imagem • Endometriose Profunda • Varizes Pélvicas (Congestão) • Cistite Intersticial (SBD) • Síndrome do Cólon Irritável • Neuralgia do Pudendo • Dor Miofascial da Parede • Sinal de Carnett Positivo • Tabela 2: Guia Posológico dos Neuromoduladores Centrais na DPC • Tabela de Referência & Classificação Clínica • Fármaco • Classe • Dose Inicial • Dose Alvo Habitual • Principais Efeitos Adversos & Cuidados • Amitriptilina • Duloxetina • Gabapentina • Pregabalina"},"dor-casos":{"m":"dor","h1":"Casos Clínicos Simulados: Dor Pélvica & Dismenorreia","sub":"Casos Clínicos Interativos • Discussão Baseada no Algoritmo • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Adolescente de 16 Anos com Dismenorreia Grave e Absenteísmo Escolar • História Clínica: • Exame Físico: • Conduta Correta & Discussão Baseada em Evidências: • Dismenorreia Primária (Funcional) • Conduta Inicial: • 1ª Linha: • iniciar 24 a 48 horas antes da menstruação • Associar calor local na região infraumbilical (termoterapia promove vasodilatação e relaxamento miometrial). • Se persistência de dor incapacitante após 2 a 3 ciclos com AINEs corretos: indicar associação com supressão ovulatória através ... • Caso 2: Mulher de 35 Anos com Dor Crônica e Alívio Pós-Miccional • Síndrome da Bexiga Dolorosa / Cistite Intersticial (SBD/CI) • Conduta Inicial Recomendada:"},"dor-prescricao":{"m":"dor","h1":"Guia de Prescrição Médica na Dor Pélvica & Dismenorreia","sub":"Farmacologia Clínica • Prescrição Prática • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":1,"caso":0,"kw":"1. Esquema para Dismenorreia Primária Grave (AINE + Supressão Ovulatória) • 2. Protocolo de Neuromodulação para DPC / Sensibilização Central • 3. Prescrição Dirigida para Cistite Intersticial / Bexiga Dolorosa"},"fluxograma-geral":{"m":"dsf","h1":"Algoritmo Geral de Atendimento e Triagem da Queixa Sexual","sub":"Baseado no Tratado de Ginecologia FEBRASGO (2ª edição, Capítulos 10, 11 e 12).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Visão Geral Teórica: • Visão Geral & Fundamentos Teóricos (FEBRASGO & DSM-5) • 1. Modelos da Resposta Sexual Humana: • Modelo Tradicional Linear (Masters & Johnson, 1966 / Helen Kaplan, 1979): • Modelo Circular Biopsicossocial de Rosemary Basson (2000 - Adotado pela FEBRASGO): • neutralidade sexual • desejo responsivo • Modelo Teórico • Autor & Ano • Conceito Principal • Implicação Clínica na Prática • Quatrifásico Linear • Trifásico Linear • Circular Biopsicossocial • Padrão-ouro FEBRASGO: • 2. Neurobiologia da Resposta Sexual: • Sistemas Estimuladores (Pró-sexuais): • Sistemas Inibidores (Anti-sexuais): • 3. Classificação dos Transtornos Sexuais (DSM-5 & FEBRASGO):"},"anamnese-exame":{"m":"dsf","h1":"Anamnese em Sexologia & Exame Físico Dirigido","sub":"Propedêutica baseada no Tratado FEBRASGO (Capítulo 11), modelo PLISSIT e manobras do exame físico especializado.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Princípios da Consulta em Sexologia: • PLISSIT • Framework de Atendimento: Modelo PLISSIT & Análise dos 4 Ps • Framework dos 4 Ps da FEBRASGO para Avaliação Etiológica: • Fatores Predisponentes: • Fatores Precipitantes: • Fatores Mantenedores/Perpetuadores: • Fatores Protetores: • Semiologia do Exame Físico Dirigido em Sexologia • Vestibulodinia Provocada"},"desejo":{"m":"dsf","h1":"Transtorno do Desejo Sexual Hipoativo (TDSH / TIESF)","sub":"Deficiência ou ausência persistente de pensamentos, fantasias ou desejo de atividade sexual, com sofrimento pessoal (FEBRASGO Cap. 11 e 12).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Critério Diagnóstico Essencial: • 6 meses • Fundamentos Teóricos & Roteiro Semiológico do Desejo Hipoativo • Eixo Avaliado • Característica Clínica • Investigação & Significado • Frequência • Intensidade • Duração • Sintomas Associados • Arsenal Terapêutico no TDSH Baseado em Evidências (FEBRASGO & Consenso Global): • 1. Psicoeducação & TCC de Casal (Nível 1): • 2. Manejo Farmacológico na Pós-Menopausa: • 3. Farmacoterapia Não Hormonal: • Fluxograma de Decisão no TDSH • Grau de angústia subjetiva relatado pela paciente."},"excitacao":{"m":"dsf","h1":"Disfunção da Excitação Sexual Feminina (DESF)","sub":"Incapacidade persistente de atingir ou manter resposta vasocongestiva genital (lubrificação) ou excitação subjetiva (FEBRASGO Cap. 10 e 12).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fisiopatologia da Excitação Feminina: • transudato vaginal lubrificante • Caracterização Semiológica & Abordagem Clínica da Falha de Excitação • Parâmetro Semiológico • Manifestação Clínica • Investigação Dirigida • Frequência • Intensidade • Duração • Sintomas Associados • Síndrome Geniturinária da Menopausa (SGM) • Linhas de Tratamento para Falha de Excitação & Lubrificação: • 1. Lubrificantes Íntimos Coitais: • 2. Hidratantes Vaginais de Longa Ação: • 3. Terapia Estrogênica Local (Padrão-Ouro no Hipoestrogenismo): • 4. Estímulo Erótico Mecânico & Fisioterapia: • Fluxograma de Manejo da Falha de Excitação / Lubrificação"},"orgasmo":{"m":"dsf","h1":"Transtorno do Orgasmo Feminino (DOF / Anorgasmia)","sub":"Atraso persistente, ausência ou intensidade reduzida do orgasmo após fase adequada de excitação (FEBRASGO Cap. 10 e 12).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Pérola Semiológica & Fisiológica FEBRASGO: • 70% a 75% das mulheres adultas saudáveis necessitam de estimulação clitoridiana direta • Roteiro Semiológico & Classificação da Anorgasmia • Tipo de Anorgasmia • Definição Clínica • Causas Mais Frequentes • Abordagem Terapêutica • Primária (Vitalícia) • Treinamento de Masturbação Dirigida (Directed Masturbation - Padrão-Ouro) • Secundária (Adquirida) • Situacional • Passo a Passo do Protocolo de Masturbação Dirigida (Heiman & LoPiccolo): • Autoexame Genital com Espelho: • Exploração Tátil Corporal & Genital: • Foco na Estimulação Clitoridiana: • Uso de Recursos Facilitadores: • Compartilhamento com a Parceria:"},"dor-pelvica":{"m":"dsf","h1":"Transtorno da Dor Gênito-Pélvica / Penetração (TDGPP)","sub":"Unificação diagnóstica da Dispareunia, Vaginismo e Vestibulodinia Provocada (DSM-5 e FEBRASGO Cap. 11 e 12).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Conceito Unificado DSM-5: • Diagnóstico Diferencial: Vaginismo vs Vestibulodinia vs Dispareunia Profunda • Entidade Clínica • Definição Fisiopatológica • Achados Semiológicos / Exame Físico • Tratamento de Escolha • Vaginismo • Fisioterapia Pélvica • Vestibulodinia Provocada (VVD) • Cotton-Swab Test Positivo: • Dispareunia Profunda • Endometriose profunda • Síndrome Geniturinária da Menopausa (SGM) • Estrogênio vaginal tópico • Critérios Diagnósticos de Friedrich para Vestibulodinia Provocada: • 1. Dor severa provocada ao toque do vestíbulo vulvar ou à tentativa de penetração vaginal."},"iatrogenias":{"m":"dsf","h1":"Iatrogenias Farmacológicas na Sexualidade","sub":"Manejo da disfunção sexual induzida por psicofármacos (ISRS) e anticoncepcionais hormonais (FEBRASGO Cap. 12).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Alerta Farmacológico: • 50% a 70% das pacientes • Estratificação de Risco & Mecanismos dos Fármacos Iatrogênicos • Classe Medicamentosa • Fármacos Representativos • Mecanismo da Disfunção Sexual • Impacto Clínico & Conduta FEBRASGO • ISRSs de Alto Risco • Duais (IRSN) • Antidepressivos Protetores da Libido • Opções de primeira linha para troca • Anticoncepcionais Orais Combinados (ACO) • SHBG • Anti-hipertensivos & Diuréticos • Algoritmo Prático de 5 Passos para Manejo da Disfunção por ISRS (FEBRASGO): • 1. Aguardar Janela de Tolerância (4 a 8 semanas): • 2. Redução Cuidadosa da Dose: • 3. Adição de \"Antídoto\" Farmacológico: • Bupropiona SR 150 mg a 300 mg/dia VO"},"casos-clinicos":{"m":"dsf","h1":"Casos Clínicos Simulados de Sexologia","sub":"Treinamento prático aplicando as diretrizes da FEBRASGO e os critérios do DSM-5 e Consenso Global.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Paciente no Climatério com Queixa de Hipolibido e Ressecamento • História Clínica: • Exame Físico Ginecológico: • Exames Laboratoriais: • Diagnóstico Clínico: • Raciocínio & Conduta Sequencial: • Terapia Estrogênica Local (Urgente): • Terapia Hormonal Sistêmica: • Tibolona 2,5 mg/dia VO • Reavaliação em 8 a 12 semanas: • Psicoeducação: • Caso 2: Mulher Jovem com Incapacidade de Relação Penetrativa desde a Menarca • Vaginismo Primário Grave • Interrupção Imediata de Tentativas Forçadas de Exame: • Desmistificação & Psicoeducação: • Fisioterapia Pélvica Especializada (Primeira Linha): • Terapia Cognitivo-Comportamental (TCC): • Casos Refratários:"},"guia-prescricao":{"m":"dsf","h1":"Guia Rápido de Prescrições em Sexologia","sub":"Tabela terapêutica baseada no Tratado FEBRASGO (Capítulo 12) e Consenso Global de Testosterona (2019).","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela Terapêutica Completa em Sexologia Feminina • Fármaco & Apresentação • Indicação Primária • Posologia Recomendada • Mecanismo de Ação • Contraindicações & Cuidados • Promestrieno Creme 10 mg/g • Estriol Creme 1 mg/g • Tibolona 2,5 mg • Testosterona Gel Transdérmico 1% • Contraindicada na pré-menopausa. • Bupropiona Cloridrato (SR ou XL) • Lidocaína Gel 2% a 5% • Géis Hidratantes com Ácido Hialurônico • Sildenafila 50 mg • Promestrieno Creme 10 mg/g (Colpotrofine®, genéricos) • Estriol Creme 1 mg/g (Ovestrion®, genéricos) • Tibolona 2,5 mg (Livolon®, Reduclim®, genérico) • 1 comprimido (2,5 mg) VO 1x/dia, sempre no mesmo horário, de uso contínuo."},"endometriose-fisiopatologia":{"m":"endo","h1":"Endometriose Pélvica: Fisiopatologia de Sampson, 3 Fenótipos & Os 6 \"D\"s","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 35) e nas Diretrizes Internacionais da ESHRE e WES.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fundamental de Prova & Prática Médica: • presença de estroma e glândulas endometriais funcionantes fora da cavidade uterina • 10% das mulheres em idade fértil • 30% a 50% das pacientes inférteis • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Conceito & Natureza da Doença: • 2. Fisiopatologia Multifatorial: • Menstruação Retrógrada de Sampson • 3. Os 3 Fenótipos Clínicos da Endometriose: • Endometriose Peritoneal Superficial: • Endometrioma Ovariano: • Endometriose Profunda Infiltrativa: • 5 mm • 4. Os 6 \"D\"s da Endometriose: • Roteiro Semiológico: A Caracterização dos 6 \"D\"s da Endometriose • 1. Dismenorreia Severa & Dor Pélvica Crônica:"},"endometriose-imagem":{"m":"endo","h1":"Diagnóstico por Imagem: USTV Especializada com Preparo Intestinal vs Ressonância Magnética","sub":"A substituição definitiva da laparoscopia diagnóstica pelo mapeamento de imagem especializado de alta resolução.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Mapeamento por Imagem Não Invasivo na Endometriose Pélvica • Mapeamento Anatômico Especializado: USTV com Preparo vs RM de Pelve • Exame Propedêutico • Sensibilidade & Especificidade • Sítios de Maior Acurácia • Papel Clínico na Tomada de Decisão • Ultrassonografia Transvaginal com Preparo Intestinal • Sensibilidade > 90% • Endometriomas ovarianos: • Retossigmoide: • Fundo de saco de Douglas: • Exame de 1ª Linha Obrigatório: • Ressonância Magnética de Pelve com Contraste e Preparo Retal • Espaço retroperitoneal profundo: • Ureteres: • Exame Complementar de Eleição: • Marcador Sérico CA-125 • NÃO É EXAME DE RASTREAMENTO OU DIAGNÓSTICO:"},"endometriose-tratamento-dor":{"m":"endo","h1":"Manejo Clínico Farmacológico da Dor na Endometriose","sub":"Estratégias hormonais para controle de sintomas álgicos e quebra do ciclo inflamatório.","flow":1,"info":0,"presc":1,"caso":0,"kw":"Fluxograma de Escalonamento Terapêutico Medicamentoso da Dor • Arsenal Farmacológico Baseado em Evidências (FEBRASGO & ESHRE) • Eficácia idêntica aos análogos de GnRH no alívio da dor • Anticoncepcionais Orais Combinados Contínuos: • SIU-LNG 52 mg (Mirena): • REGRA MANDATÓRIA: • terapia Add-Back • Não deve ser prescrito com o intuito de \"aumentar a fertilidade futura\""},"endometriose-endometrioma":{"m":"endo","h1":"Abordagem do Endometrioma Ovariano & Preservação da Reserva (AMH)","sub":"A linha tênue entre a cirurgia e a preservação do pool folicular ovariano.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Conduta no Endometrioma Ovariano: Vigilância vs Cistectomia Laparoscópica • O Dilema Cirúrgico do Endometrioma: Benefício Sintomático vs Risco Folicular • supressão hormonal e acompanhamento por USG a cada 6 meses • redução imediata de 30% a 40% no Hormônio Antimülleriano (AMH) • oferecer formalmente o congelamento prévio de oócitos (vitrificação) • Hemostasia seletiva mínima:"},"endometriose-infertilidade":{"m":"endo","h1":"Endometriose & Infertilidade: Quando Indicar Baixa Complexidade vs FIV","sub":"A tomada de decisão reprodutiva baseada em idade materna, permeabilidade tubária e gravidade da doença.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Decisão Reprodutiva na Paciente com Endometriose • Critérios de Seleção: Concepção Natural vs IIU vs Fertilização in Vitro (FIV) • Cenário Clínico da Paciente • Idade & Reserva Ovariana • Fatores Tubários & Seminais • Conduta Reprodutiva Baseada em Evidências • Endometriose Peritoneal Mínima a Leve (Graus I e II) • Baixa Complexidade: • Endometriose Moderada a Severa (Graus III e IV) • Indicação Direta de Fertilização in Vitro (FIV): • Protocolo Pré-FIV com GnRHa Ultralongo • Bloqueio com Agonista de GnRH por 2 a 3 meses antes da transferência: • aumenta a taxa de gravidez clínica em até 3 vezes • Idade ≥ 35 anos OU baixa reserva ovariana (AMH < 1,2 ng/mL)."},"endometriose-cirurgia-profunda":{"m":"endo","h1":"Cirurgia da Endometriose Profunda: Ureter, Shaving, Disco & Segmentar","sub":"As indicações absolutas de urgência cirúrgica e o escalonamento técnico nas lesões intestinais.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Cirurgia da Endometriose Profunda Infiltrativa (EPI) • Indicações Formais de Cirurgia & Técnicas de Ressecção Intestinal • Técnica / Procedimento • Critérios Anatômicos de Indicação • Procedimento Cirúrgico Executado • Complicações Potenciais & Vantagens • Alerta Crítico: Ureterólise de Urgência • hidronefrose • INDICAÇÃO CIRÚRGICA ABSOLUTA: • perda definitiva da função renal • Shaving Retal (Barbeamento) • Ressecção em Disco (Discoctomia Anterior) • Ressecção Segmentar (Retossigmoidectomia) • estenose luminal superior a 50%"},"endometriose-casos":{"m":"endo","h1":"Casos Clínicos Simulados de Endometriose","sub":"Treinamento ativo aplicando propedêutica dos 6 \"D\"s, mapeamento de imagem e condutas clínicas/cirúrgicas.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Paciente Jovem com Dismenorreia Severa, Disquezia e Nódulo Intestinal • Paciente: • Diagnóstico & Conduta FEBRASGO: • Diagnóstico: • Endometriose Profunda Infiltrativa (EPI) • Conduta de Primeira Linha: • tratamento clínico medicamentoso com Dienogeste 2 mg/dia VO contínuo • Seguimento & Indicação Cirúrgica: • Caso 2: Endometrioma Ovariano Bilateral e Infertilidade • ALERTA CRÍTICO - CANCELAR A CISTECTOMIA OVARIANA IMEDIATA: • Risco de Falência Ovariana Iatrogênica: • menopausa precoce cirúrgica / falência ovariana • Conduta Padrão-Ouro (ESHRE / FEBRASGO): • Fertilização in Vitro (FIV com ICSI) • Ajuste Pré-FIV:"},"endometriose-prescricao":{"m":"endo","h1":"Guia Rápido de Prescrições & Doses em Endometriose","sub":"Tabela de bolso com fármacos essenciais, posologias práticas, mecanismos e alertas clínicos.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Classe • Mecanismo & Indicação Principal • Posologia Prática Recomendada • Alertas Clínicos & Cuidados • Dienogeste 2 mg • 2 mg VO 1x ao dia • Goserrelina 3,6 mg / Leuprorrelina 3,75 mg • a cada 28 dias • SIU-LNG 52 mg • AOC Combinado Monofásico em Uso Contínuo • Ibuprofeno 600 mg / Cetoprofeno 100 mg • Dienogeste 2 mg (Progestagênio Seletivo) • 2 mg VO 1x ao dia , continuamente, todos os dias no mesmo horário, sem nenhuma pausa. • Goserrelina 3,6 mg / Leuprorrelina 3,75 mg (Análogo de GnRH Depot) • SIU-LNG 52 mg (Mirena) • AOC Combinado Monofásico em Uso Contínuo (ex.: Gestodeno 75 mcg + EE 20-30 mcg)"},"endometrio-visao-geral":{"m":"endometrio","h1":"Câncer de Corpo do Útero: Visão Geral & Fatores de Risco","sub":"Baseado no Tratado de Ginecologia FEBRASGO (2ª ed., Capítulo 80), Diretrizes FIGO 2023 e Consenso Internacional ESGO/ESTRO/ESP.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Neoplasia em Ascensão Global: • obesidade, síndrome metabólica e envelhecimento populacional • Fisiopatologia: O Paradigma do Hiperestrogenismo Não Oposto • Mecanismo Celular: • O Papel da Obesidade: • aromatase • Fatores de Risco Clínicos e Hereditários • Fatores Hormonais & Metabólicos • Obesidade e Diabetes Mellitus Tipo 2: • Síndrome dos Ovários Policísticos (SOP): • estrogênio isolado em mulher com útero íntegro • Tamoxifeno & Síndromes Genéticas • Uso de Tamoxifeno: • Síndrome de Lynch (HNPCC): • 40 a 60% • Investigação do Sangramento Pós-Menopausa & Endométrio (FEBRASGO / FIGO) • Abrir em Tela Cheia • Infográfico HD"},"endometrio-semiologia":{"m":"endometrio","h1":"Roteiro Semiológico do Sangramento Pós-Menopausa (SUPM)","sub":"A semiotécnica mandatória do sinal cardinal de neoplasia uterina e os critérios objetivos de alarme clínico.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os 4 Eixos Semiológicos do Sangramento Uterino Pós-Menopausa • Definição Estrita: • 12 meses consecutivos de amenorreia • Padrão: • Aspecto da Secreção: • Atenção Clínica: • Persistência Sem Tratamento: • Sinais de Complicação e Doença Avançada: • Hematometra / Piometra: • Dor Pélvica Contínua e Lumbago: • Sintomas Urinários e Intestinais:"},"endometrio-propedeutica":{"m":"endometrio","h1":"Propedêutica do SUPM: USG TV, Pontos de Corte & Biópsia","sub":"O algoritmo diagnóstico escalonado: do ultrassom transvaginal à biópsia ambulatorial com Pipelle e histeroscopia.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Investigação do Sangramento Pós-Menopausa & Endométrio (FEBRASGO / FIGO) • Abrir em Tela Cheia • Infográfico HD • Pontos de Corte Oficiais da Espessura Endometrial (FEBRASGO / ACOG) • Cenário Clínico da Paciente • Espessura Normal / Esperada • Ponto de Corte que EXIGE Biópsia Imediata • Pós-menopausa com sangramento SEM uso de TRH • Pós-menopausa com sangramento SOB uso de TRH combinada contínua • Usuária de Tamoxifeno (mesmo assintomática) • Pós-menopausa ASSINTOMÁTICA (achado acidental de USG) • Métodos Diagnósticos Histopatológicos: Pipelle vs Histeroscopia • Cânula de Pipelle de Cornier (Padrão-Ouro Ambulatorial de 1ª Linha):"},"endometrio-hiperplasias":{"m":"endometrio","h1":"Manejo das Hiperplasias Endometriais (OMS 2014/2020)","sub":"A dicotomia entre Hiperplasia Sem Atipia (terapêutica clínica) e Neoplasia Intraepitelial Endometrial / EIN (cirurgia curativa).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma Visual do Manejo das Hiperplasias Endometriais • Matriz Condensada de Decisão Terapêutica (FEBRASGO / RCOG) • Diagnóstico Histopatológico • Risco de Progressão Maligna • Tratamento Clínico de 1ª Linha • Indicação Cirúrgica • Hiperplasia Sem Atipia • DIU de Levonorgestrel 52 mg (Mirena) • Hiperplasia Com Atipia / Neoplasia Intraepitelial Endometrial (EIN) • HISTERECTOMIA TOTAL COM SALPINGO-OOFORECTOMIA BILATERAL"},"endometrio-molecular":{"m":"endometrio","h1":"FIGO 2023 & Classificação Molecular no Câncer de Endométrio","sub":"A revolução da medicina de precisão: a integração dos 4 subtipos moleculares (TCGA) no novo estadiamento mundial.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma Visual dos 4 Subtipos Moleculares e Estadiamento FIGO 2023 • Caracterização dos 4 Subtipos Moleculares (Consenso ESGO / FIGO) • Grupo Molecular • Frequência • Características Biológicas • Prognóstico Clínico & Impacto Terapêutico • 1. POLE Ultramutado (POLEmut) • descalonamento de quimioterapia/radioterapia adjuvante • 2. Deficiência de Mismatch Repair (MMRd / MSI-H) • Síndrome de Lynch • Imunoterapia com Inibidores de Checkpoint Imunológico (Anti-PD-1: Pembrolizumabe / Dostarlimabe) • 3. Sem Perfil Molecular Específico (NSMP) • 4. p53 Anormal / Mutado (p53abn) • Quimioterapia Sistêmica Adjuvante com Platina/Taxano + Radioterapia Externa"},"endometrio-sarcomas":{"m":"endometrio","h1":"Sarcomas Uterinos & Diagnóstico Diferencial","sub":"Neoplasias mesenquimais raras de comportamento agressivo e o alerta formal contra morcelamento cirúrgico.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Classificação Histopatológica e Características Clínicas dos Sarcomas • Leiomiossarcoma Uterino (LMS - 60%) • Não surge da degeneração de um mioma prévio • Sarcoma Estromal Endometrial (ESS - 20%) • Baixo Grau: • Alto Grau / Indiferenciado: • Alerta Crítico: Morcelamento Proibido • formalmente contraindicado pela FDA e FEBRASGO"},"endometrio-casos":{"m":"endometrio","h1":"Casos Clínicos Simulados de Patologia Endometrial","sub":"Stress testing com 3 casos reais de sangramento pós-menopausa, uso de tamoxifeno e diagnóstico molecular.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Câncer de mama em uso de tamoxifeno com escape sanguinolento • Conduta Padrão-Ouro Recomendada: • Histeroscopia Cirúrgica com Biópsia Dirigida sob Visão Direta da Cavidade Uterina. • Fundamentação FEBRASGO: • Obesidade, SUA e biópsia revelando Neoplasia Intraepitelial (EIN) • Neoplasia Intraepitelial Endometrial (Hiperplasia com Atipia / EIN) • Histerectomia Total com Salpingo-Ooforectomia Bilateral por Via Laparoscópica. • Fundamentação FEBRASGO / OMS: • Perimenopausa, SUA e hiperplasia sem atipia celular • Hiperplasia Endometrial Sem Atipia • Inserção de Sistema Intrauterino Liberador de Levonorgestrel 52 mg (DIU Mirena) + Biópsia Semestral de Controle."},"endometrio-prescricao":{"m":"endometrio","h1":"Prescrições, Hormonioterapia & Imunoterapia no Endométrio","sub":"Posologias precisas de progestagênios locais e orais, regimes quimioterápicos e inibidores de checkpoint imune.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela de Medicamentos e Esquemas Farmacológicos (FEBRASGO / NCCN) • Fármaco / Esquema • Posologia & Via • Indicação Clínica • Mecanismo & Monitoramento • DIU de Levonorgestrel 52 mg (Mirena) • 1 dispositivo intrauterino (liberação inicial 20 mcg/dia) • Acetato de Megestrol • 160 mg a 320 mg/dia VO contínuo • Acetato de Medroxiprogesterona (Provera) • Carboplatina + Paclitaxel • Pembrolizumabe • 200 mg EV a cada 3 semanas • MMRd / MSI-H • 1 dispositivo intrauterino (liberação inicial 20 mcg/dia) mantido in situ por até 5 anos. • 160 mg a 320 mg/dia VO contínuo (dividido em 1 a 2 tomadas diárias)."},"examefisico-visao-geral":{"m":"examefisico","h1":"Exame Físico Ginecológico: Princípios Gerais, Ética & Acolhimento","sub":"Fundamentação semiológica, infraestrutura, aspectos ético-legais e posicionamentos do exame baseados no Tratado FEBRASGO (2ª Edição, Capítulo 4).","flow":0,"info":1,"presc":0,"caso":0,"kw":"Relação Médico-Paciente, Ética & Consentimento Esclarecido • Consentimento Esclarecido Prévio: • Explicação Passo a Passo: • Presença de Acompanhante / Chaperone: • Interrupção Imediata se Solicitada: • Infraestrutura & Ambiência do Consultório: • Regra Fundamental de Ouro: Esvaziamento Vesical Prévio • esvaziar completamente a bexiga • Conforto da Paciente: • Eliminação de Falso-Positivos: • Qualidade do Toque Bimanual: • Posicionamentos Semiológicos em Ginecologia • 1. Roteiro Sequencial do Exame Físico Ginecológico & Propedêutica Armada • Abrir em Tela Cheia • Infográfico HD"},"examefisico-mamas":{"m":"examefisico","h1":"Exame Clínico das Mamas (ECM) & Cadeias Ganglionares","sub":"Semiologia mamária completa: inspeção estática, manobras dinâmicas, palpação metódica de Bloodgood, expressão papilar e palpação de linfonodos axilares e cer...","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Inspeção Estática (Paciente Sentada) • Simetria & Volume: • Pele e Contorno Mamário: • Aspecto em \"Casca de Laranja\" (Peau d'orange): • Complexo Aréolo-Papilar: • 2. Inspeção Dinâmica (Manobras Musculares) • 3. Palpação Mamária Metódica (Decúbito Dorsal) • Utilizam-se as polpas digitais do 2º, 3º e 4º dedos da mão do examinador, realizando movimentos circulares suaves e progressivo... • Padronização de Rastreio: • Prolongamento Axilar de Spence: • Localização: • Tamanho: • Consistência: • Mobilidade: • Limites & Superfície: • 4. Expressão Papilar & Análise da Descarga • Diferenciação Semiológica Crítica de Descarga Papilar: • Descarga Fisiológica / Benigna:"},"examefisico-abdome":{"m":"examefisico","h1":"Exame do Abdome Aplicado à Ginecologia","sub":"Propedêutica abdominal com foco em ginecologia: semiologia do útero e anexos, diferenciação de ascite por Skoda, delimitação de massas e manobras de alarme p...","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Inspeção & Ausculta Abdominal • Inspeção Estática e Dinâmica: • Ausculta Abdominal: • 2. Percussão Abdominal: Ascite versus Tumorações Pélvicas • Semicírculo de Skoda na Tumoração Pélvica Volumosa (Mioma ou Cisto Ovariano Gigante): • convexidade superior • Semicírculo de Skoda na Ascite Livre: • concavidade inferior • Pesquisa de Macicez Móvel: • Sinal do Piparote: • 3. Palpação Superficial & Profunda de Massas • Palpação Superficial: • Palpação Profunda de Massas: • 4. Manobras Semiológicas de Alarme Peritoneal • Manobras Semiológicas Decisivas no Abdome Agudo: • Sinal de Blumberg (Descompressão Brusca Dolorosa Positiva): • Ponto de McBurney & Sinal de Rovsing:"},"examefisico-genitais-externos":{"m":"examefisico","h1":"Inspeção dos Genitais Externos, Glândulas & Períneo","sub":"Semiologia da vulva, ordenha de glândulas de Skene e Bartholin, avaliação do tônus muscular perineal (Escala de Oxford) e manobra de Valsalva para prolapsos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Inspeção Vulvar Sistemática • Pilosidade & Monte de Vênus: • Grandes & Pequenos Lábios: • Clitóris: • Meato Uretral & Hímen: • 2. Palpação & Ordenha das Glândulas Anexas • Técnica de Palpação: • Cisto de Bartholin: • Abscesso de Bartholin: • 3. Avaliação Perineal & Tônus do Assoalho Pélvico • Grau 0: • Grau 1: • Grau 2: • Grau 3: • Grau 4: • Grau 5: • 4. Inspeção Dinâmica com Manobra de Valsalva (Prolapsos) • Prolapso da Parede Vaginal Anterior: • Prolapso Apical: • Prolapso da Parede Vaginal Posterior: • Teste de Esforço Urinário:"},"examefisico-especular":{"m":"examefisico","h1":"Exame Especular Completo & Coletas Propedêuticas","sub":"Técnica semiológica de introdução sem gel nocivo, exposição cervical, colpocitologia oncótica (Papanicolaou), teste de Schiller com Lugol e bacterioscopia a ...","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Escolha do Espéculo & Cuidados Críticos de Lubrificação • sempre antes do toque vaginal bimanual • Espéculo de Collins (Valvas Largas): • Espéculo de Pederson (Valvas Estreitas e Planas): • Regra de Ouro da Lubrificação: • 2. Técnica de Introdução Especular Passo a Passo • Passo 1 (Exposição do Intróito): • Passo 2 (Posicionamento Oblíquo Inicial): • Passo 3 (Introdução na Concavidade Sacral): • Passo 4 (Rotação Horizontal): • Passo 5 (Abertura e Exposição Cervical): • 3. Avaliação Macroscópica do Colo Uterino & Paredes Vaginais • Orifício Externo do Colo: • Ectopia / Ectrópio Glandular: • Cistos de Naboth: • Pólipos Cervicais: • Sinais de Alarme no Colo Uterino:"},"examefisico-toque-bimanual":{"m":"examefisico","h1":"Toque Vaginal Bimanual & Toque Retovaginal","sub":"Semiologia do colo e sinal de Frenkel, palpação do corpo uterino (AVF/RVF/MVF), avaliação das lojas anexiais e ovários, e toque retovaginal em tesoura (indic...","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Técnica Semiológica do Toque Bimanual Combinado • Introdução Digital: • Coordenação Bimanual: • 2. Palpação do Colo Uterino & Sinal de Frenkel • Consistência Normal: • Consistência na Gravidez (Sinal de Goodell): • Consistência no Câncer Invasor: • Permeabilidade do Orifício Externo: • Sinal de Frenkel / Proust Positivo (Grito de Douglas): • critérios maiores obrigatórios para Doença Inflamatória Pélvica (DIP) • 3. Palpação Bimanual do Corpo Uterino • Anteversoflexão (AVF): • Retroversoflexão (RVF): • Medioversoflexão (MVF): • Volume Normal: • Aumento de Volume: • Contorno & Superfície: • 4. Palpação das Lojas Anexiais & Fundo de Saco de Douglas • Ovários Normais:"},"examefisico-fluxogramas":{"m":"examefisico","h1":"Fluxogramas & Algoritmos de Exame Físico Ginecológico","sub":"Fluxogramas oficiais de semiotécnica sequencial passo a passo e tomada de conduta rápida diante de achados clínicos anormais.","flow":1,"info":1,"presc":0,"caso":0,"kw":"1. Roteiro Sequencial do Exame Físico Ginecológico & Propedêutica Armada • Abrir em Tela Cheia • Infográfico HD • 2. Conduta Clínica Diante de Achados Anormais ao Exame Físico"},"examefisico-tabelas-casos":{"m":"examefisico","h1":"Tabelas Semiológicas, Roteiro de Prontuário & Casos Clínicos","sub":"Tabela comparativa de semiotécnica normal versus patológica, checklist de prontuário e 3 simulações clínicas interativas.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Tabela 1: Semiotécnica Ginecológica - Achados Fisiológicos vs. Sinais de Alarme • Etapa / Estrutura • Manobra Semiológica • Achado Normal / Fisiológico • Sinal de Alarme / Patologia • Mamas (Pele/Mamilo) • Mamas (Descarga) • Abdome (Percussão) • Glândula de Bartholin • Uretra / Skene • Colo (Especular) • Colo (Teste de Schiller) • Mobilidade Cervical • Ovários (Pós-Menopausa) • Fundo de Saco de Douglas • Checklist / Roteiro Prático de Prontuário Médico FEBRASGO • MAMAS: • ABDOME: • GENITAIS EXTERNOS: • EXAME ESPECULAR: • TOQUE BIMANUAL: • Casos Clínicos Simulados Interativos • Caso 1: Dor Pélvica Aguda e Febre na Jovem • História & Exame Físico: • Exame Ginecológico:"},"fisiologia-visao-geral":{"m":"fisiologia","h1":"Arquitetura do Eixo Hipotálamo-Hipófise-Ovário (HHO)","sub":"Capítulos 1 a 3, 6 a 8 FEBRASGO • Neuroendocrinologia • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"⚡ O PAPEL CRÍTICO DA PULSATILIDADE DO GnRH: • núcleo arqueado • Pulsos de Alta Frequência (a cada 60 a 90 minutos): • Hormônio Luteinizante (LH) • Pulsos de Baixa Frequência (a cada 120 a 180 minutos): • Hormônio Folículo-Estimulante (FSH) • Estímulo Contínuo (Não Pulsátil): • Fundamentos Teóricos & Roteiro Prático • Hipotálamo • Adeno-hipófise • Ovários • Subunidade Alfa Comum: • Subunidade Beta Específica: • Meia-vida Plasmática: • Mecanismos de Retroalimentação (Feedback) • Feedback Negativo Fisiológico: • Feedback Positivo Ovulatório: • Feedback Negativo Lúteo: • Diretriz Visual Integrada: Eixo HHO & Esteroidogênese • Abrir em Tela Cheia • Infográfico HD"},"fisiologia-foliculo":{"m":"fisiologia","h1":"Da Reserva Folicular ao Folículo Dominante de Graaf","sub":"Biologia Celular Ovariana • Foliculogênese • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • 85 a 120 dias • Folículo Primordial: • Folículo Primário: • Folículo Secundário / Pré-Antral: • Formação do Antro Folicular: • Janela de Oportunidade do FSH: • Expressão de Receptores: • O folículo que possui a maior densidade de receptores de FSH • maior taxa de aromatização • O estradiol e a Inibina B reduzem os níveis séricos de FSH por feedback hipofisário. • Com a queda do FSH, os folículos vizinhos da coorte sofrem atresia por privação trófica. O dominante sobrevive porque desenvolv..."},"fisiologia-teoria":{"m":"fisiologia","h1":"A Teoria das Duas Células e Duas Gonadotrofinas","sub":"Esteroidogênese Ovariana • Bioquímica Molecular • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • células da teca • células da granulosa • 1. Célula da Teca (Externa) — Estímulo pelo LH • O LH liga-se ao seu receptor acoplado à proteína Gs, ativando a adenilato ciclase e elevando o AMPc intracelular. • A proteína StAR (Steroidogenic Acute Regulatory) • A enzima CYP11A1 (desmolase) converte colesterol em Pregnenolona. Pela via delta-4/delta-5, sintetizam-se Androstenediona e Tes... • Ponto Crítico: • 2. Célula da Granulosa (Interna) — Estímulo pelo FSH • O FSH ativa a cascata do AMPc e estimula fortemente o gene CYP19A1 (complexo enzimático Aromatase)"},"fisiologia-fases":{"m":"fisiologia","h1":"Fases Ovarianas: Folicular, Ovulação & Lútea","sub":"Cronobiologia Menstrual • Ovulação • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Inicia-se no primeiro dia do sangramento menstrual (D1). • Fase dominada pela secreção progressiva de 17-β-estradiol • O estradiol estimula a proliferação das células da granulosa e a angiogênese tecal. • Concentrações séricas de progesterona permanecem basais (< 1 ng/mL). • O Gatilho: • O Surto de LH: • Eventos Intrafoliculares: • Ruptura: • 32 a 36h após o início da subida do LH • Vascularização maciça da granulosa e diferenciação em células luteínicas. • Formação do Corpo Lúteo • Progesterona • Pico de progesterona no D21 (7 dias pós-ovulação, > 10 ng/mL confirma ovulação). • Luteólise:"},"fisiologia-endometrio":{"m":"fisiologia","h1":"O Ciclo Endometrial: Proliferativo, Secretor & Menstruação","sub":"Histofisiologia Uterina • Janela de Implantação • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Sob influência do estradiol • As glândulas endometriais são retilíneas e estreitas, com células em pseudoestratificação e numerosas figuras de mitose. • Ao ultrassom pélvico: espessamento progressivo exibindo o padrão clássico trilaminar • Sob ação da progesterona • Selo Histológico Inicial (D16-D17): • Glândulas tornam-se tortuosas em \"dente de serra\", secretando muco rico em glicogênio e glicoproteínas na luz glandular. • Janela de Implantação: • A luteólise provoca a queda abrupta e simultânea de estrogênio e progesterona. • A privação esteroidal deflagra espasmo intenso e vasoconstrição das artérias espiraladas"},"fisiologia-fluxogramas":{"m":"fisiologia","h1":"Fluxograma do Eixo HHO & Teoria das Duas Células","sub":"Algoritmo Interativo • Fisiologia FEBRASGO • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretrizes & Fundamentos dos Algoritmos • Diretriz Visual Integrada: Eixo HHO & Esteroidogênese • Abrir em Tela Cheia • Infográfico HD"},"fisiologia-tabelas":{"m":"fisiologia","h1":"Parâmetros Hormonais de Referência & Biomarcadores Ovarianos","sub":"Valores de Referência e Biomarcadores • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Variação Hormonal ao Longo das Fases do Ciclo Menstrual • Hormônio • Fase Folicular Inicial (D2-D4) • Pico Pré-Ovulatório (D13-D14) • Fase Lútea Média (D21) • Significado Clínico & Diagnóstico • FSH (mUI/mL) • LH (mUI/mL) • 20,0 a 80,0 (Surto) • Estradiol (pg/mL) • > 200 a 400 (Pico) • Progesterona (ng/mL) • > 10,0 a 20,0 (Pico) • Inibina B (pg/mL) • Inibina A (pg/mL) • Marcador de confirmação ovulatória no D21 (nível > 3-5 ng/mL confirma ovulação ocorrida)."},"fisiologia-casos":{"m":"fisiologia","h1":"Casos Clínicos Simulados: Fisiologia & Esteroidogênese","sub":"Raciocínio Clínico • Casos Interativos • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Investigação de Ovulação em Paciente com Ciclos de 35 Dias • História Clínica: • Análise Correta & Fundamentação Fisiológica: • 1. Erro Crítico no Momento da Coleta: • incorreto e iatrogênico • 2. Racional Cronobiológico: • A fase lútea possui duração estritamente fixa de 14 dias • A dosagem de progesterona no D21 foi realizada exatamente no dia da ovulação (ou pouco antes), quando os níveis de progesterona... • O pico máximo de progesterona do corpo lúteo ocorre cerca de 7 dias após a ovulação • 28º dia do ciclo (D28) • 3. Conduta Correta: • Caso 2: Mecanismo de Supressão dos Inibidores da Aromatase • 1. Bloqueio da Aromatase na Granulosa:"},"incontinencia-classificacao":{"m":"incont","h1":"Incontinência Urinária Feminina: Classificação Clínica, Diário Miccional & Propedêutica","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulos 63 e 65) e nas Diretrizes da ICS e IUGA.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fundamental de Prova & Prática Médica: • qualquer queixa de perda involuntária de urina • Regra de Ouro: • obrigatório afastar Infecção do Trato Urinário (ITU) • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Conceito & Relevância da Incontinência Urinária: • 2. Os 3 Grandes Tipos Clínicos de Incontinência: • Incontinência Urinária de Esforço (IUE): • Incontinência Urinária de Urgência (IOU / Síndrome da Bexiga Hiperativa): • Incontinência Urinária Mista (IUM): • 3. Propedêutica Ambulatorial Inicial: • Roteiro Semiológico: Diferenciação Clínica das Incontinências • 1. Incontinência Urinária de Esforço (IUE): • Gatilhos Específicos: • Volume & Frequência:"},"incontinencia-urodinamica":{"m":"incont","h1":"O Estudo Urodinâmico (EUD) na Prática Ginecológica & Cortes de VLPP","sub":"A investigação funcional da bexiga e do esfíncter uretral para tomada de decisão cirúrgica segura.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Interpretação das Fases do Estudo Urodinâmico e Pressão de Perda sob Esforço • As Três Etapas do Estudo Urodinâmico & Valores de Referência (FEBRASGO) • Fase do Exame • Parâmetros Avaliados • Valores de Normalidade • Principais Alterações Patológicas • 1. Urofluxometria Livre • Qmax > 15 mL/s • resíduo pós-miccional < 50 mL • 2. Cistometria (Enchimento) • 350 a 500 mL • ausência de contrações detrusoras • Hiperatividade Detrusora: • 3. Pressão de Perda sob Esforço (VLPP / PPE) • VLPP > 90 cmH2O: • Hipermobilidade Uretral Pura • VLPP 60 a 90 cmH2O: • VLPP < 60 cmH2O: • Deficiência Esfincteriana Intrínseca (DEI)"},"incontinencia-bexiga-hiperativa":{"m":"incont","h1":"Escalonamento da Bexiga Hiperativa: Solifenacina vs Beta-3 Adrenérgico & Toxina Botulínica","sub":"A transição racional do manejo comportamental aos fármacos orais e intervenções minimamente invasivas.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Escalonamento Terapêutico da Síndrome da Bexiga Hiperativa • Pilares Farmacológicos da Bexiga Hiperativa: Comparativo de Eficácia & Segurança • Classe Terapêutica • Exemplos de Fármacos • Mecanismo de Ação • Efeitos Adversos & Cuidados Práticos • Antimuscarínicos / Anticolinérgicos • Solifenacina • Oxibutinina • Boca seca (xerostomia), constipação intestinal severa • glaucoma de ângulo fechado • declínio cognitivo / demência em idosas • Agonista Beta-3 Adrenérgico • Mirabegrona • NÃO causa boca seca, NÃO causa constipação e NÃO afeta a cognição! • Hipertensão Arterial Severa Não Controlada • Toxina Botulínica Intradetrusora (3ª Linha)"},"incontinencia-esforco":{"m":"incont","h1":"Incontinência Urinária de Esforço (IUE): Fisioterapia Pélvica Supervisionada & Seleção Cirúrgica","sub":"A obrigatoriedade do tratamento conservador prévio e os critérios para encaminhamento cirúrgico.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Escalonamento da IUE: Conservador de 1ª Linha vs Tratamento Cirúrgico • Treinamento Muscular do Assoalho Pélvico (TMAP) & Estilo de Vida • TMAP supervisionado por fisioterapeuta pélvico capacitado • 50% e 70% • redução de 5% a 10% do peso corporal • falha ou resposta insatisfatória após 3 meses de TMAP correto • IUE severa inicial • Protocolo de Reabilitação Muscular Pélvica & Escala de Oxford Modificada (FEBRASGO) • Grau (Oxford Modificada) • Definição à Palpação Bidigital Vaginal • Capacidade Funcional do Assoalho Pélvico • Estratégia Fisioterapêutica Recomendada • Grau 0 (Nula) • Grau 1 (Vestigial) • Grau 2 (Fraca) • sem elevação cranial"},"incontinencia-slings":{"m":"incont","h1":"Slings Sintéticos de Uretra Média: Sling Retropúbico (TVT) vs Transobturador (TOT)","sub":"O divisor de águas cirúrgico mundial da uroginecologia moderna e suas indicações precisas.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Decisão Cirúrgica: Sling Retropúbico (TVT) vs Sling Transobturador (TOT) • Quadro Comparativo: Sling Retropúbico (TVT) vs Sling Transobturador (TOT) • Critério Cirúrgico • Sling Retropúbico (TVT) • Sling Transobturador (TOT / TVT-O) • Sling Autólogo Pubovaginal (Fáscia) • Indicação Preferencial • Deficiência Esfincteriana Intrínseca (VLPP < 60 cmH2O) • Hipermobilidade Uretral Pura (VLPP > 90 cmH2O) • Trajeto Anatômico da Fita • Cistoscopia Intraoperatória • MANDATÓRIA E OBRIGATÓRIA: • Complicações Típicas • Taxa de Sucesso / Cura • 85% a 95% • 85% a 90%"},"incontinencia-mista":{"m":"incont","h1":"Incontinência Urinária Mista (IUM): Estratificação & Algoritmo Sequencial","sub":"A arte do diagnóstico e a regra de ouro de tratar primeiro o componente clinicamente predominante.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Manejo Integrado da Incontinência Urinária Mista (IUM) • Diretrizes da FEBRASGO para Incontinência Urinária Mista (IUM) • NUNCA opere a paciente imediatamente antes de estratificar o peso de cada componente! • Consentimento Esclarecido Mandatório: • a urgência miccional pode persistir em 30% dos casos ou até piorar temporariamente • Algoritmo de Priorização e Manejo da Incontinência Urinária Mista (IUM) (FEBRASGO) • Fenótipo da IUM • Manifestação Clínica Principal • Abordagem Terapêutica Inicial Obrigatória • Risco de Complicação se Abordagem Incorreta • Critérios para Indicação Cirúrgica • IUE Predominante • IUU / Urgência Predominante"},"incontinencia-casos":{"m":"incont","h1":"Casos Clínicos Simulados de Incontinência Urinária","sub":"Treinamento ativo aplicando propedêutica uroginecológica, cortes de VLPP e escolha de TVT vs TOT.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: IUE por Hipermobilidade Uretral Pura com Falha Fisioterapêutica • Paciente: • Diagnóstico & Seleção Cirúrgica Padrão-Ouro: • Diagnóstico: • Incontinência Urinária de Esforço (IUE) secundária à Hipermobilidade Uretral Pura • Indicação Cirúrgica: • SLING TRANSOBTURADOR (TOT) • Justificativa Técnica: • Caso 2: Deficiência Esfincteriana Intrínseca Grave (\"Cano de Chumbo\") • ALERTA CRÍTICO - NÃO INDICAR SLING TRANSOBTURADOR (TOT): • Diagnóstico Urodinâmico: • Deficiência Esfincteriana Intrínseca (DEI) Grave • Cirurgia Padrão-Ouro Obrigatória: • SLING RETROPÚBICO (TVT) • Por que o TOT é contraindicado aqui? • Cuidado Intraoperatório: • cistoscopia obrigatória"},"incontinencia-prescricao":{"m":"incont","h1":"Guia Rápido de Prescrições & Doses em Incontinência Urinária","sub":"Tabela de bolso com fármacos essenciais, posologias práticas, mecanismos e alertas clínicos.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Classe • Mecanismo & Indicação Principal • Posologia Prática Recomendada • Alertas Clínicos & Cuidados • Mirabegrona 50 mg • 50 mg VO 1x ao dia • Não causa boca seca, constipação ou declínio cognitivo. • Solifenacina 5 mg / 10 mg • 5 mg VO 1x ao dia • Cloridrato de Oxibutinina 5 mg • Estriol Creme Vaginal 1 mg/g • OnabotulinumtoxinA (Botox 100 UI) • Mirabegrona 50 mg (Agonista Beta-3 Adrenérgico) • 50 mg VO 1x ao dia (iniciar com 25 mg/dia se insuficiência renal ou hepática moderada). • Solifenacina 5 mg / 10 mg (Antimuscarínico Seletivo M3)"},"infancia-visao-geral":{"m":"infancia","h1":"Visão Geral & Particularidades Anatômicas da Genitália Infantil","sub":"Capítulos 15, 20 a 24 FEBRASGO • Sociedade Brasileira de Pediatria • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • hipoestrogenismo absoluto • Mucosa Vaginal Delgada e Atrófica: • Ausência de Glicogênio e Bacilos de Döderlein: • pH Vaginal Neutro a Alcalino (6,8 a 7,2): • Proximidade Anatômica do Ânus: • Posicionamento Adequado: • Manobra de Tração Lateral dos Lábios: • Posição Genupeitoral: • CONTRAINDICAÇÃO FORMAL: • Algoritmo 1: Abordagem de Vulvovaginites, Sangramento Genital & Puberdade na Infância • Abrir em Tela Cheia • Infográfico HD"},"infancia-vulvovaginites":{"m":"infancia","h1":"Vulvovaginites na Infância, Oxiuríase & Alerta de Abuso Sexual","sub":"Diagnóstico Diferencial Pediatria • FEBRASGO • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Fatores Desencadeantes: • Quadro Clínico: • Conduta Consensual: • Streptococcus pyogenes (Grupo A): • Shigella flexneri: • Enterobius vermicularis (Oxiúros): • Sintoma Cardeal: • odor extremamente fétido e pútrido • Objetos Comuns: • Conduta: • 🚨 SUSPEITA OBRIGATÓRIA DE ABUSO SEXUAL INFANTIL: • O isolamento microbiológico de Neisseria gonorrhoeae, Chlamydia trachomatis, Trichomonas vaginalis ou Treponema pallidum (Sífilis) • prova presuntiva categórica de abuso sexual • A presença de condilomas acuminados típicos (verrugas anogenitais por HPV) em crianças maiores de 2 a 3 anos também levanta alt..."},"infancia-sinequia":{"m":"infancia","h1":"Sinéquia de Pequenos Lábios (Coalescência Labial)","sub":"Patologia Vulvar Pediátrica • Conduta Conservadora • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Origem Adquirida: • Semiologia: • Sintomas Possíveis: • Casos Assintomáticos: CONDUTA EXPECTANTE! • Casos Sintomáticos (ITU, Retenção ou Obstrução Miccional): • Estrogênio Tópico Suave (Creme de Estriol a 0,1% ou Promestrieno a 1%) • CONTRAINDICAÇÃO ABSOLUTA:"},"infancia-puberdade":{"m":"infancia","h1":"Distúrbios do Desenvolvimento Puberal: Puberdade Precoce & Tardia","sub":"Endocrinologia Ginecológica • Tanner M1-M5 • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"📅 Marcos Cronológicos Fisiológicos da Puberdade Feminina: • Telarca (Brotamento mamário - Tanner M2): • 8 e 13 anos • Pubarca (Pelos pubianos - Tanner P2): • Pico do Estirão Estatural: • Menarca: • 2 a 2,5 anos após a telarca • Fundamentos Teóricos & Roteiro Prático • Quadro Clínico: • Laboratório & Imagem: • LH basal ultrassensível > 0,3 a 0,6 UI/L • > 5,0 UI/L • RNM de Encéfalo e Sela Túrcica MANDATÓRIA: • Tratamento Padrão-Ouro: • Puberdade Precoce Periférica (GnRH-Independente) • Etiologias Principais: • manchas café-com-leite com bordas geográficas irregulares, displasia fibrosa poliostótica e puberdade precoce periférica • ⏳ Puberdade Tardia: • 13 anos • 15 anos"},"infancia-dds":{"m":"infancia","h1":"Distúrbios do Desenvolvimento Sexual (DDS)","sub":"Genética & Diferenciação Sexual • Consenso de Chicago • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Hiperplasia Adrenal Congênita (HAC) por Deficiência da 21-Hidroxilase: • Fisiopatologia: • 17-alfa-hidroxiprogesterona / 17-OHP • Forma Clássica Perdedora de Sal (75%): • Tratamento de Emergência: • Cariótipo & Gônadas: • NÃO HÁ ÚTERO, TUBAS NEM COLO • Fenótipo Clínico: • ausência total ou escassez extrema de pelos pubianos e axilares • Conduta: • DESENVOLVEM-SE ÚTERO, TUBAS E VAGINA NORMAIS • Quadro Clínico: • Conduta Obrigatória: • Gonadectomia bilateral profilática IMEDIATA ao diagnóstico • gonadoblastoma e disgerminoma em ~30% dos casos"},"infancia-fluxogramas":{"m":"infancia","h1":"Fluxogramas de Investigação em Ginecologia da Infância","sub":"Algoritmos Interativos • SBP / FEBRASGO • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretrizes & Fundamentos dos Algoritmos • Algoritmo 1: Abordagem de Vulvovaginites, Sangramento Genital & Puberdade na Infância • Abrir em Tela Cheia • Infográfico HD • Algoritmo 2: Investigação Diagnóstica da Puberdade Precoce Feminina"},"infancia-tabelas":{"m":"infancia","h1":"Estadiamento de Tanner & Matriz Comparativa de DDS","sub":"Critérios Diagnósticos e Tabelas • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Estadiamento do Desenvolvimento Puberal Feminino de Tanner • Estágio • Desenvolvimento Mamário (M) • Desenvolvimento de Pelos Pubianos (P) • Idade Média (Brasil) • 1 (Pré-púbere) • 2 (Brotamento) • Telarca: • 3 (Crescimento) • 4 (Duplo Contorno) • 5 (Adulto) • Tabela 2: Diagnóstico Diferencial das Anomalias da Diferenciação Sexual (DDS) • Tabela de Referência & Classificação Clínica • Condição Clínica • Cariótipo • Gônadas Presentes • Útero e Tubas • Pelos Pubianos • Risco Neoplásico & Conduta Cirúrgica • Hiperplasia Adrenal Congênita • Presentes • Síndrome de Morris (SIA Completa) • Ausentes • Ausentes ou raros • após a puberdade"},"infancia-casos":{"m":"infancia","h1":"Casos Clínicos Simulados & Prescrição em Ginecologia da Infância","sub":"Casos Clínicos & Prescrição Prática • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Menina de 6 Anos com Brotamento Mamário e Aceleração do Crescimento • História Clínica: • Exame Físico: • Propedêutica: • Conduta Correta & Discussão Baseada em Evidências: • 1. Diagnóstico Clínico-Laboratorial: • Puberdade Precoce Central (PPC, GnRH-dependente ou Verdadeira) • 2. Exame Complementar Mandatório: • Solicitar Ressonância Magnética (RNM) de Encéfalo com Foco em Hipotálamo e Sela Túrcica com Contraste • 3. Tratamento Farmacológico Padrão-Ouro: • Iniciar Acetato de Leuprorrelina 3,75 mg IM a cada 28 dias • Objetivos Terapêuticos: Bloquear a secreção hipofisária pulsátil de gonadotrofinas, regredir a telarca, desacelerar o avanço da..."},"infeccoes-vulvovaginites":{"m":"infeccoes","h1":"Abordagem Sindrômica & Diagnóstico Diferencial dos Corrimentos Vaginais (Eubiose vs Disbiose)","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 26) e no PCDT IST do Ministério da Saúde / CDC.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fundamental de Eubiose Vaginal: • pH vaginal estritamente ácido (≤ 4,5) • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Ecossistema Vaginal & Manutenção da Eubiose: • ácido lático • 3,8 e 4,5 • 2. O Diagnóstico Diferencial das 3 Grandes Vulvovaginites: • Vaginose Bacteriana (Desequilíbrio da Flora): • ausência de sinais inflamatórios exuberantes • Candidíase Vulvovaginal: • normal/ácido (≤ 4,5) • Tricomoníase: • 3. Distinção de Cervicites: • Roteiro Semiológico: Sinais & Sintomas das Infecções Vaginais • 1. Caracterização do Corrimento Vaginal (Leucorreia): • Cor & Consistência: • Odor: • Volume: • 2. Sintomas Vulvares Acompanhantes: • Prurido Vulvar:"},"infeccoes-vaginose-candida":{"m":"infeccoes","h1":"Manejo da Vaginose Bacteriana & Candidíase Vulvovaginal Recorrente (CVVR)","sub":"Estratégias terapêuticas de 1ª linha, protocolos de manutenção semestral e conduta em cepas resistentes (FEBRASGO Cap. 26).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Regra de Ouro do Parceiro na Vaginose Bacteriana: • NÃO previne recidivas nem altera o curso clínico da VB • NÃO tratar o parceiro sexual masculino • Fluxograma de Escalonamento Terapêutico: VB e Candidíase Esporádica vs Recorrente • Protocolo de Profilaxia e Manutenção em Casos de Repetição • Condição Clínica • Definição de Prova & Consultório • Protocolo Terapêutico FEBRASGO • Candidíase Recorrente (CVVR) por C. albicans • Esquema de Indução + Manutenção: • 6 meses ininterruptos • Candidíase Não-Albicans ( Candida glabrata ) • Ácido Bórico 600 mg em óvulo vaginal • Vaginose Bacteriana Recidivante • Metronidazol Gel 0,75% vaginal 2 vezes por semana por 4 a 6 meses"},"infeccoes-tricomoniase-cervicites":{"m":"infeccoes","h1":"Tricomoníase Vaginal & Cervicites Mucopurulentas (Clamídia & Gonococo)","sub":"Infecções Sexualmente Transmissíveis do trato genital inferior: abordagem sindrômica, etiologia e tratamento simultâneo de parceiros (FEBRASGO Cap. 27).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Alerta Mandatório de Saúde Pública (IST Verdadeira): • Tricomoníase Vaginal e a Cervicite por Clamídia/Gonococo são Infecções Sexualmente Transmissíveis (IST) obrigatórias • tratamento de todas as parcerias sexuais dos últimos 60 dias é indispensável • Fluxograma de Diferenciação: Corrimento Vaginal Tricomoniásico vs Endocervicite Mucopurulenta • Cervicites: Fisiopatologia, Agentes e Tratamento Empírico Duplo Imediato • Patógeno / Entidade • Mecanismo Fisiopatológico • Manifestação Clínica Típica • Esquema Terapêutico Recomendado • Neisseria gonorrhoeae (Gonococo) • Ceftriaxona 500 mg IM em Dose Única • Chlamydia trachomatis (Clamídia)"},"infeccoes-dip-diagnostico":{"m":"infeccoes","h1":"Doença Inflamatória Pélvica (DIP): Critérios Clínicos & Classificação de Monif","sub":"Síndrome clínica decorrente da ascensão de patógenos do trato genital inferior para o endométrio, tubas e peritônio pélvico (FEBRASGO Cap. 28).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Regra de Ouro do Diagnóstico da DIP: • eminentemente clínico • 3 Critérios Maiores (Obrigatórios) • pelo menos 1 Critério Menor (Adicional) • Fluxograma de Avaliação dos Critérios de Gainesville/CDC e Estadiamento de Monif • Critérios Diagnósticos de Gainesville / CDC & Estadiamento de Monif • Categoria Diagnóstica • Achados Clínicos e Laboratoriais Exigidos • Significado Clínico & Conduta • Critérios Maiores (Obrigatórios) • TODOS os 3 • Critérios Menores (Adicionais) • 1 presente • Critérios Elaborados (Específicos) • Monif I a IV • Monif I: • Monif II: • Monif III: • Monif IV:"},"infeccoes-dip-manejo":{"m":"infeccoes","h1":"Protocolo Terapêutico da DIP: Ambulatorial vs Hospitalar & Abscesso Tubo-Ovariano","sub":"Diretrizes de internação, antibioticoterapia tripla de amplo espectro e conduta com o dispositivo intrauterino (FEBRASGO Cap. 28).","flow":1,"info":0,"presc":1,"caso":0,"kw":"Cobertura Tripla Obrigatória por 14 Dias: • 1) Gonococo (Ceftriaxona) • 2) Clamídia (Doxiciclina) • 3) Anaeróbios / Flora da Vaginose Bacteriana (Metronidazol) • 14 dias ininterruptos • Fluxograma de Decisão: Ambulatorial vs Hospitalar e Manejo do Abscesso Tubo-Ovariano (ATO) • Indicações Cirúrgicas & Conduta Prática em Usuárias de DIU • Cenário Clínico Especial • Evidência Científica Atualizada • Conduta Padronizada FEBRASGO • Manejo do DIU na Paciente com DIP • NÃO remover o DIU imediatamente! • não houver melhora clínica após 48 a 72 horas • Abscesso Tubo-Ovariano (ATO) Íntegro • Abscesso Tubo-Ovariano Roto (Monif IV) • Síndrome de Fitz-Hugh-Curtis"},"infeccoes-ulceras-ists":{"m":"infeccoes","h1":"Diagnóstico Diferencial das Úlceras Genitais & Síndromes de IST","sub":"Raciocínio clínico semiológico: fundo, bordas, dor e acometimento ganglionar na Sífilis, Herpes, Cancro Mole, Donovanose e LGV.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Abordagem Sindrômica do Ministério da Saúde: • o tratamento para Sífilis Primária e Cancro Mole deve ser realizado de imediato • Fluxograma de Diagnóstico Diferencial Semiológico das Úlceras Genitais • Quadro Semiológico Diferencial das 5 Grandes Úlceras Genitais • Patologia & Agente • Número & Características da Úlcera • Dor Local • Linfonodomegalia Inguinal (Bubão) • Tratamento de 1ª Linha PCDT/FEBRASGO • Sífilis Primária • Única • Indolor • não supurativa • Penicilina G Benzatina 2,4 milhões UI IM dose única • Herpes Genital • Múltiplas vesículas • Muito Dolorosa • Aciclovir 400 mg VO 3x ao dia por 7 a 10 dias • Cancro Mole • Múltiplas • flutuação e fístula única"},"infeccoes-casos":{"m":"infeccoes","h1":"Casos Clínicos Simulados de Infecções Genitais, Cervicites e DIP","sub":"Treinamento prático aplicando Amsel, abordagem de cervicites friáveis e estadiamento de Monif com manejo hospitalar.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Vaginose Bacteriana Recidivante em Usuária de DIU de Cobre • Paciente: • Conduta Padrão-Ouro Baseada em Evidências (FEBRASGO): • Confirmação Diagnóstica de Vaginose Bacteriana Recidivante: • Conduta com o DIU de Cobre: • NÃO há indicação de remoção imediata do dispositivo • Tratamento da Crise Aguda: • Metronidazol 500 mg VO de 12 em 12h por 7 dias • Protocolo de Profilaxia em Recidivas Frequentes: • Metronidazol Gel 0,75% vaginal duas vezes por semana durante 4 a 6 meses • Conduta com o Parceiro Sexual Masculino: • Caso 2: Cervicite Mucopurulenta e Sinusorragia em Jovem com Nova Parceria • Raciocínio Clínico FEBRASGO & PCDT IST Ministério da Saúde:"},"infeccoes-prescricao":{"m":"infeccoes","h1":"Guia Rápido de Prescrições Antimicrobianas, Doses & Alertas nas Infecções Genitais","sub":"Tabela de bolso com fármacos essenciais, posologias práticas em vulvovaginites, cervicites, DIP e ISTs ulcerosas.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Apresentação • Mecanismo & Indicação Principal • Posologia Prática Recomendada • Alertas Clínicos & Cuidados de Prescrição • Metronidazol 250 mg / 400 mg / 500 mg • 500 mg VO 12/12h por 7 dias • Efeito Dissulfiram (Antabuse): • Fluconazol 150 mg • 150 mg VO em Dose Única • 150 mg nos Dias 1, 4 e 7 • 150 mg 1x por semana por 6 meses • Ceftriaxona 500 mg / 1 g • 500 mg IM em Dose Única • 500 mg IM Dose Única • 1 g a 2 g IV a cada 24 horas • Doxiciclina 100 mg • 100 mg VO 12/12h por 7 dias • 100 mg VO 12/12h por 14 dias • 100 mg VO 12/12h por 21 dias • CONTRAINDICADA NA GESTAÇÃO E LACTAÇÃO"},"infertilidade-definicao":{"m":"infertil","h1":"Infertilidade Conjugal: Definição, Epidemiologia & Quando Iniciar a Investigação","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 48) e Diretrizes da ASRM / ESHRE / OMS (2021/2023).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fundamental de Consultório: • 1 em cada 6 casais • Mulheres < 35 anos: • 12 meses • Mulheres ≥ 35 anos: • 6 meses • Investigação Imediata (Sem esperar): • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Definição Oficial & Prazos Clínicos: • 12 meses de relações sexuais regulares e desprotegidas • 2. Distribuição Etiológica Paritária: • 3. Os 4 Pilares da Investigação Mínima Simultânea: • Fator Masculino: • Fator Ovulatório & Reserva: • Fator Tuboperitoneal: • Fator Uterocavitário: • Roteiro Semiológico: Caracterização da Queixa Infértil no Casal • 1. Tempo de Exposição Reprodutiva & Frequência Coital: • Duração Exata da Tentativa: • Frequência Semanal:"},"infertilidade-propedutica":{"m":"infertil","h1":"Propedêutica Básica do Casal Infértil: Os 4 Pilares Mandatórios","sub":"A investigação sistemática, racional e não invasiva preconizada pelo Capítulo 49 da FEBRASGO.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma de Investigação Simultânea dos 4 Pilares da Infertilidade • Abrir em Tela Cheia • Infográfico HD • Roteiro dos 4 Pilares Diagnósticos • Espermograma Completo: • Regra Áurea: • Confirmação de Ovulação: • Progesterona sérica no meio da fase lútea • Histerossalpingografia (HSG): • Prova de Cotte Positiva: • Ultrassonografia Transvaginal (USTV): • Histeroscopia Diagnóstica: • Interpretação Propedêutica da Histerossalpingografia (HSG) & Prova de Cotte • Parâmetro Radiológico • Achado Normal na HSG • Achado Anormal / Patológico • Significado Clínico & Conduta FEBRASGO • Morfologia Cavitária Uterina • Histeroscopia Cirúrgica • Perviedade Tubária"},"infertilidade-masculino":{"m":"infertil","h1":"Fator Masculino, Espermograma (OMS 2021) & Condutas","sub":"Valores de referência da 6ª edição da OMS, interpretação dos laudos e indicações de ICSI.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Decisão Clínica no Espermograma Alterado • Parâmetros Seminais da OMS (Manual da OMS 2021 / 6ª Edição) • Parâmetro Seminal • Limite Inferior de Referência (Percentil 5º) • Terminologia da Alteração • Implicação Terapêutica • Volume Ejaculado • ≥ 1,4 mL • Concentração Espermática • ≥ 16 milhões/mL • FIV com ICSI • Contagem Total • ≥ 39 milhões / ejaculado • Motilidade Progressiva (PR) • ≥ 30% • Morfologia Estrita de Kruger • ≥ 4% de formas normais • Vitalidade (Eosina/HOS) • ≥ 54% de espermatozoides vivos • Azoospermia • 0 espermatozoides no ejaculado • Obstrutiva (FSH normal, testículos normais): • Não-Obstrutiva (FSH elevado, falência testicular):"},"infertilidade-ovariano":{"m":"infertil","h1":"Reserva Ovariana & Disfunções Ovulatórias","sub":"Hormônio Antimülleriano (AMH), Contagem de Folículos Antrais (CFA) e preditores de resposta ao estímulo ovariano.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Estratificação da Reserva Ovariana • Comparativo dos Marcadores de Reserva Ovariana • Marcador • Momento da Coleta • Reserva Normal • Baixa Reserva (Má Resposta) • Alta Reserva / Risco de SHO • Hormônio Antimülleriano (AMH) • Qualquer dia do ciclo menstrual • 1,0 a 3,5 ng/mL • < 1,0 ng/mL • > 3,5 a 5,0 ng/mL • Contagem de Folículos Antrais (CFA) • Fase folicular precoce (D2 a D4 do ciclo) • 8 a 15 folículos • < 5 a 7 folículos • > 16 a 20 folículos • FSH Basal • > 10 a 12 UI/L • Ponto Crítico de Atenção Médica: • quantidade de óvulos que serão resgatados sob estimulação medicamentosa na FIV • < 1,0 ng/mL (Crítico: < 0,5 ng/mL)"},"infertilidade-baixa-complexidade":{"m":"infertil","h1":"Tratamento de Baixa Complexidade: Coito Programado & Inseminação Intrauterina","sub":"Indução da ovulação, monitoramento ecográfico seriado e seleção entre relação programada e IIU (Capítulos 50 e 51 FEBRASGO).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Protocolos de Baixa Complexidade • Pré-Requisitos e Protocolos de Baixa Complexidade • Modalidade • Pré-Requisitos Mínimos • Drogas de Indução • Momento do Procedimento • Taxa de Sucesso por Ciclo • Coito Programado • Letrozol: • Citrato de Clomifeno: • hCG recombinante 250 mcg SC • 15% a 20% • Inseminação Intrauterina (IIU) • SMR ≥ 5 milhões • 36 horas após o hCG • 12% a 18% • Letrozol: 2,5 a 5,0 mg/dia do D3 ao D7 (1ª linha na SOP). Citrato de Clomifeno: 50 a 100 mg/dia do D3 ao D7. • Letrozol (2,5 a 5 mg) ou rFSH em baixas doses (50 a 75 UI/dia) visando desenvolvimento de 1 a 2 folículos maduros."},"infertilidade-alta-complexidade":{"m":"infertil","h1":"Tratamento de Alta Complexidade: Fertilização in Vitro (FIV) & ICSI","sub":"Indicações primárias, as 5 etapas laboratoriais e clínicas e prevenção de complicações (Capítulo 52 FEBRASGO).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma do Ciclo de FIV e Injeção Intracitoplasmática de Espermatozoides (ICSI) • As 5 Etapas Detalhadas da Fertilização in Vitro • Gonadotrofinas (rFSH 150 a 300 UI/dia SC) • Antagonista de GnRH (Cetrorelix ou Ganirelix 0,25 mg/dia SC) • ≥ 17 a 18 mm • Agonista de GnRH • hCG recombinante (250 mcg) • 35 a 36 horas após o gatilho • FIV Clássica: • ICSI: • Blastocisto (D5 ou D6) • todos os blastocistos são congelados (vitrificação - estratégia freeze-all) • Suporte lúteo com Progesterona vaginal"},"infertilidade-casos":{"m":"infertil","h1":"Casos Clínicos Simulados de Reprodução Humana","sub":"Treinamento ativo aplicando diretrizes do Tratado FEBRASGO, ASRM e ESHRE.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Mulher Jovem com Anovulação e SOP • Casal: • Espermograma: • Histerossalpingografia: • Dosagem Hormonal: • USTV: • Diagnóstico & Conduta FEBRASGO: • Diagnóstico: • Fator Ovulatório / Anovulação Crônica secundária à Síndrome dos Ovários Policísticos (SOP) • Linha de Tratamento: • Baixa Complexidade (Coito Programado) • Droga de Primeira Escolha: • Letrozol (2,5 mg/dia VO do D3 ao D7 do ciclo) • Conduta Prática: • Caso 2: Obstrução Tubária Bilateral com Hidrossalpinge • obstrução tubária bilateral com dilatação cística da trompa direita (Hidrossalpinge volumosa) • Conduta FEBRASGO / Consensos Internacionais:"},"infertilidade-prescricao":{"m":"infertil","h1":"Guia Rápido de Prescrições & Doses Práticas em Reprodução","sub":"Tabela de bolso com fármacos essenciais para indução da ovulação e suporte da fase lútea.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Classe • Mecanismo & Indicação Principal • Posologia Prática • Alertas Críticos & Efeitos Adversos • Letrozol • 1ª escolha na SOP • 2,5 a 5,0 mg VO 1x ao dia • Citrato de Clomifeno • 50 a 100 mg VO 1x ao dia • afilamento endometrial (< 7 mm) • hCG Recombinante (Alfa Coriogonadotropina) • 250 mcg SC em dose única • 36 a 40 horas após a aplicação • Progesterona Micronizada • 200 a 400 mg/dia via vaginal • FSH Recombinante (rFSH - Alfa/Betafolitropina) • Na IIU: • Na FIV: • 2,5 a 5,0 mg VO 1x ao dia , do 3º ao 7º dia do ciclo (por 5 dias consecutivos)."},"iop-visao-geral":{"m":"iop","h1":"Visão Geral & Critérios Diagnósticos da IOP","sub":"Capítulo 46 FEBRASGO • Consenso ESHRE / IMS • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"📋 CRITÉRIOS DIAGNÓSTICOS FORMAIS DE CONSENSO (ESHRE / FEBRASGO): • Idade < 40 anos; • Oligomenorreia ou Amenorreia secundária por pelo menos 4 meses consecutivos; • Níveis séricos de FSH na faixa menopausal (> 25 UI/L) comprovados em DUAS dosagens distintas com intervalo mínimo de 4 a 6 sema... • Fundamentos Teóricos & Roteiro Prático • Não é Menopausa Definitiva Súbita: • Potencial Ovulatório Residual: • 5 a 10% das pacientes com IOP chegam a ovular espontaneamente e engravidar • Alerta Contraceptivo: • Impactos Sistêmicos do Hipoestrogenismo Precoce • Perda Rápida de Massa Óssea: • Risco Cardiovascular Prematuro: • Declínio Cognitivo & Sofrimento Psíquico:"},"iop-semiologia":{"m":"iop","h1":"Roteiro Semiológico: Sintomas Vasomotores, Urogenitais & Psíquicos","sub":"Roteiro Semiológico • Avaliação Integral • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Sintomas Vasomotores • Síndrome Geniturinária • Disfunção Sexual & Humor • Luto Parental & Autoimagem"},"iop-etiologia":{"m":"iop","h1":"Investigação Etiológica Obrigatória: Genética & Autoimunidade","sub":"Etiologia Sistemática • ESHRE Guidelines • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Cariótipo com Contagem de Bandas (G-Banding): • PESQUISA MANDATÓRIA DO CROMOSSOMO Y: • INDICAÇÃO FORMAL DE GONADECTOMIA PROFILÁTICA BILATERAL IMEDIATA • A Síndrome do X Frágil: • A Pré-mutação (55 a 200 repetições CGG): • Aconselhamento Genético Crítico: • Anticorpos Anti-Córtex Adrenal & Anti-21-Hidroxilase: • Insuficiência Adrenal Primária (Doença de Addison) • Se Anticorpos Positivos: Dosar Cortisol basal matinal e ACTH anualmente e orientar sintomas de alerta (fraqueza, hipotensão, hi... • Autoimunidade Tireoidiana:"},"iop-propedeutica":{"m":"iop","h1":"Painel Laboratorial & Rastreamento da Densidade Mineral Óssea","sub":"Propedêutica Sistematizada • Checklist • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • FSH sérico e 17-β-Estradiol: • Cariótipo com Bandas G (em sangue periférico): • Pesquisa da Pré-mutação no gene FMR1 por PCR/Southern Blot: • Anticorpos Anti-21-Hidroxilase e Anti-TPO / Anti-TG. • TSH, T4 Livre, Glicemia de jejum e Perfil Lipídico completo. • 25-Hidroxivitamina D [25(OH)D]: • Densitometria Óssea (DXA de Coluna Lombar e Fêmur Proximal): • Pressão Arterial e Avaliação Cardiovascular Periódica: • Ultrassonografia Pélvica Transvaginal:"},"iop-terapeutica":{"m":"iop","h1":"Terapia de Reposição Hormonal (TRH) Fisiológica & Fertilidade","sub":"Terapêutica Mandatória • ESHRE / The Menopause Society • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"⏱️ DURAÇÃO DA TRH NA PACIENTE COM IOP: • ATÉ PELO MENOS OS 50 A 51 ANOS DE IDADE • Fundamentos Teóricos & Roteiro Prático • restauração estrogênica fisiológica substitutiva • Estrogênio Fisiológico (Preferência Transdérmica): • Proteção Endometrial com Progesterona: • 2. Gestação & Reprodução Assistida • Ovulação Espontânea Residual (5-10%): • Insucesso de Indutores da Ovulação: • FIV com Ovodoação (Padrão-Ouro): • Taxa de nascido vivo superior a 50-60% por ciclo!"},"iop-fluxogramas":{"m":"iop","h1":"Fluxograma de Investigação e Manejo da IOP","sub":"Algoritmo Interativo • Diretrizes ESHRE • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretrizes & Fundamentos dos Algoritmos • Algoritmo Diagnóstico e Terapêutico da Insuficiência Ovariana Prematura • Abrir em Tela Cheia • Infográfico HD"},"iop-tabelas":{"m":"iop","h1":"Painel Laboratorial & Esquemas Fisiológicos de TRH","sub":"Tabelas de Diretrizes ESHRE • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Painel Diagnóstico de Rastreamento Sistemático na IOP Confirmada • Exame Complementar • Justificativa Clínica e Patologia Alvo • Conduta em Caso de Resultado Positivo • Cariótipo com Bandas G (sangue) • Se presença de cromossomo Y = Gonadectomia bilateral profilática imediata • Pré-mutação do Gene FMR1 (PCR) • Anticorpos Anti-21-Hidroxilase • Anticorpos Anti-TPO e TSH • Densitometria Óssea (DXA) • Aconselhamento genético para familiares de 1º grau sobre risco de mutação completa e deficiência intelectual."},"iop-casos":{"m":"iop","h1":"Casos Clínicos Simulados & Prescrição Fisiológica na IOP","sub":"Casos Clínicos & Prescrição Prática • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Mulher de 32 Anos com Amenorreia Secundária, Fogachos e Desejo Reprodutivo • História Clínica: • Conduta Correta & Discussão Baseada em Evidências: • 1. Confirmação Diagnóstica: • Insuficiência Ovariana Prematura (IOP) • 2. Painel Etiológico Obrigatório Imediato: • Solicitar Cariótipo com Bandas G • Solicitar Pesquisa da Pré-mutação do Gene FMR1 (X Frágil) • Solicitar Anticorpos Anti-21-Hidroxilase / Anti-córtex adrenal • Anti-TPO • Solicitar Densitometria Óssea (DXA) • 3. Terapêutica Mandatória Imediata: • Iniciar Terapia de Reposição Hormonal (TRH) Fisiológica • 4. Aconselhamento Reprodutivo Empático:"},"larcs-visao-geral":{"m":"larcs","h1":"Métodos Anticoncepcionais Reversíveis de Longa Ação (LARCs)","sub":"Diretrizes da FEBRASGO (Tratado de Ginecologia, 2ª edição, Capítulos 70 e 74).","flow":0,"info":1,"presc":0,"caso":0,"kw":"Conceito & Definição: • independência total da memória ou adesão da usuária • Fundamentos Teóricos & Comparativo do Índice de Pearl (Uso Perfeito vs Uso Típico) • Índice de Pearl • Método Contraceptivo • Classificação de Eficácia • Índice de Pearl (Uso Perfeito) • Índice de Pearl (Uso Típico / Real) • Duração Oficial Aprovada • Implante Subdérmico de Etonogestrel 68 mg • 0,05% • DIU de Levonorgestrel 52 mg (Mirena®) • 0,2% • DIU de Levonorgestrel 19,5 mg (Kyleena®) • DIU de Cobre TCu380A • 0,6% • 0,8% • Laqueadura Tubária Bilateral • Anticoncepcional Oral Combinado (Pílula) • 7% a 9% • Preservativo Masculino (Condom) • 13% a 18%"},"larcs-algoritmo":{"m":"larcs","h1":"Algoritmo de Escolha & Indicação dos LARCs","sub":"Direcionamento personalizado por fenótipo clínico: Fluxo Intenso, Nuliparidade, Pós-Parto, Extremos Reprodutivos e Comorbidades.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Matriz de Decisão Clínica Baseada no Perfil da Paciente • Escolha Padrão-Ouro: DIU-LNG 52 mg (Mirena®). • Escolha Padrão-Ouro: DIU TCu380A ou Cobre com Prata. • Escolha: DIU-LNG 19,5 mg (Kyleena®) ou Implante de Etonogestrel. • Escolha: DIU de Cobre ou DIU-LNG inseridos até 10 min pós-dequitação. • LARCs: Escolha, Manejo & Diretrizes FEBRASGO / OMS • Abrir em Tela Cheia • Infográfico HD"},"larcs-elegibilidade":{"m":"larcs","h1":"Critérios Médicos de Elegibilidade da OMS / FEBRASGO","sub":"Classificação internacional em 4 categorias para prescrição segura e identificação precisa de contraindicações absolutas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela Comparativa de Elegibilidade Médica (Categorias 1 a 4 da OMS) • Condição Clínica / Comorbidade • DIU de Cobre (TCu380A) • DIU-LNG 52 mg / 19,5 mg • Implante Subdérmico (Etonogestrel) • Regra Prática de Prescrição • Gravidez Confirmada ou Suspeita • DIP Ativa / Cervicite Purulenta Atual • DIP Ocorrida com DIU in situ (após inserção) • Câncer de Mama Atual • Tromboembolismo Venoso Agudo (TVP / TEP) • Enxaqueca com Aura em Qualquer Idade • Nuliparidade / Adolescência • Mito derrubado: • Sangramento Genital Inexplicado (sem investigação) • Doença de Wilson / Alergia ao Cobre • Malformações Uterinas com Distorção Cavitária"},"larcs-tecnicas":{"m":"larcs","h1":"Propedêutica Pré-Inserção & Técnicas Passo a Passo","sub":"Padronização técnica FEBRASGO para inserção ambulatorial segura de DIUs e Implante Subdérmico.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Técnica Passo a Passo de Inserção Intrauterina de DIU (Cobre e Levonorgestrel) • 6,0 cm e 10,0 cm • 2,5 a 3,0 cm • Técnica de Inserção do Implante Subdérmico (Implanon NXT®) • 8 a 10 cm acima do epicôndilo medial"},"larcs-sangramento":{"m":"larcs","h1":"Manejo de Sangramento Desfavorável (*Spotting*)","sub":"Estratégias farmacológicas baseadas em evidências para controle de escapes em usuárias de Implante e DIU-LNG.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fisiopatologia do Spotting: • Protocolo Escalonado em 3 Etapas para Sangramento Irregular • Etapa • Intervenção Clínica • Posologia Recomendada • Evidência & Mecanismo • 1ª Etapa • Aconselhamento & Esclarecimento • 2ª Etapa • Anti-inflamatórios Não Esteroidais (AINEs) • Ácido Mefenâmico 500 mg VO de 8/8h • Ibuprofeno 600 mg a 800 mg VO de 8/8h • 3ª Etapa • Antifibrinolítico OU Estrogênio de Resgate"},"larcs-intercorrencias":{"m":"larcs","h1":"Manejo de Intercorrências Clínicas em LARCs","sub":"Fios não visíveis, Doença Inflamatória Pélvica, Gestação com DIU e Perfuração Uterina (FEBRASGO Cap. 74).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Algoritmos de Conduta em Intercorrências Críticas • Ultrassonografia Transvaginal (USTV) • Não há necessidade de retirada imediata do DIU! • 48 a 72 horas • Remover o DIU imediatamente por tração suave"},"larcs-mitos":{"m":"larcs","h1":"Mitos & Desmistificações Baseadas em Evidência","sub":"Desconstrução científica dos principais mitos que impedem a ampliação do acesso aos LARCs (FEBRASGO & ACOG).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Verdades Científicas vs Mitos Populares sobre DIUs e Implantes • Mito Frequente • Verdade Científica Baseada em Evidência (FEBRASGO) • \"DIU é abortivo\" • Falso. • pré-fertilização • \"Nulíparas e adolescentes não podem usar DIU\" • primeira linha contraceptiva para adolescentes e nulíparas • \"DIU causa infertilidade futura\" • \"DIU aumenta o risco de gravidez ectópica\" • muito menor"},"larcs-casos-clinicos":{"m":"larcs","h1":"Casos Clínicos Simulados de LARCs","sub":"Treinamento prático de tomada de decisão terapêutica conforme diretrizes da FEBRASGO.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Adolescente de 16 anos com Falhas de Adesão e Dismenorreia Severa • História Clínica: • Exame Físico Ginecológico: • Diagnóstico & Indicação Contraceptiva: • Raciocínio & Conduta Sequencial: • Desmistificação Familiar com Base Científica: • Categoria 1 e 2 da OMS • Seleção do Método Ideal: • Opção de Escolha: Sistema Intrauterino de Levonorgestrel 52 mg (Mirena®) ou 19,5 mg (Kyleena®): • Alternativa: Implante Subdérmico de Etonogestrel (Implanon®): • Preservativo Duplo: • Caso 2: Paciente de 32 anos com Trombose Venosa Prévia e Enxaqueca com Aura • Análise de Elegibilidade da OMS: • Anticoncepcionais Combinados (Pílula, adesivo, anel, injetável):"},"larcs-guia-prescricao":{"m":"larcs","h1":"Guia Rápido de Prescrições & Tabela de LARCs","sub":"Especificações farmacológicas completas, apresentações comerciais e posologia de resgate baseadas na FEBRASGO.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela Terapêutica Completa de Métodos LARCs & Manejo de Efeitos • Dispositivo / Fármaco • Composição & Dose Ativa • Duração de Uso • Padrão de Sangramento Esperado • Contraindicações Primárias (Cat 4 OMS) • Implante de Etonogestrel • 3 anos • DIU-LNG 52 mg • Até 8 anos • DIU-LNG 19,5 mg • 5 anos • DIU TCu380A • 10 anos • DIU de Cobre com Prata • Ácido Mefenâmico 500 mg • Ácido Tranexâmico 500 mg • Implante de Etonogestrel (Implanon NXT® 68 mg) • Bastão subdérmico único de etilenvinilacetato liberando 68 mg de etonogestrel. • DIU-LNG 52 mg (Mirena®) • Cilindro com 52 mg de levonorgestrel liberando 20 mcg/dia na cavidade uterina. • DIU-LNG 19,5 mg (Kyleena®)"},"mama-rastreamento":{"m":"mama","h1":"Rastreamento do Câncer de Mama & Métodos de Imagem","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 83) e Recomendações Conjuntas FEBRASGO / SBM / CBR (2023).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fundamental de Prova & Prática Clínica: • 20% a 30% • FEBRASGO / SBM / CBR (2023): • Mamografia Anual dos 40 aos 74 anos • Ministério da Saúde / INCA: • Mamografia Bienal dos 50 aos 69 anos • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Cenário Epidemiológico & Relevância: • 2. Fisiopatologia & Fatores de Risco: • 3. Prevenção Secundária (Rastreamento Mamográfico): • 4. Divergência entre Diretrizes Médicas no Brasil: • FEBRASGO / SBM / CBR: • 5. O Desafio das Mamas Densas: • Roteiro Semiológico: Sinais, Sintomas & Propedêutica Mamária • 1. Nódulo Mamário Palpável: • Localização & Lateralidade: • Consistência & Limites: • Duração & Evolução:"},"mama-birads":{"m":"mama","h1":"Sistema ACR BI-RADS® (6ª Edição) & Condutas Mandatórias","sub":"Padronização universal de laudos mamográficos, ultrassonográficos e de ressonância adotada pela FEBRASGO e CBR.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Diagrama de Decisão Rápida pelas Categorias BI-RADS (0 a 6) • Tabela 84.1 FEBRASGO: Classificação, Probabilidade e Conduta • Categoria • Interpretação Clínica • Risco de Malignidade • Achados de Imagem Típicos • Conduta Médica Imediata • Inconclusivo / Incompleto • Exames adicionais: • Negativo / Normal • 0% (Nulo) • Rastreamento de rotina • Achado Tipicamente Benigno • Provavelmente Benigno • ≤ 2% • Controle semestral: • Achado Suspeito • 2% a 95% • Biópsia Percutânea Obrigatória: • Altamente Suspeito • > 95% • Biópsia Percutânea Imediata • Malignidade já Comprovada • 100% (Confirmado) • Tratamento Definitivo:"},"mama-nodulo":{"m":"mama","h1":"Abordagem do Nódulo Mamário Palpável & Biópsias","sub":"A tríplice avaliação clássica (Exame Clínico + Imagem + Histopatologia) conforme os Capítulos 83 e 84 da FEBRASGO.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Decisão no Nódulo Mamário Palpável • Comparativo das Técnicas de Biópsia Mamária • Tipo de Amostra: • Principais Indicações: • Limitação Crítica: • Padrão-Ouro: • Vantagem Decisiva: • painel imuno-histoquímico completo (RE, RP, HER2, Ki-67) • Vantagem: • clipe metálico de titânio • Propedêutica do Nódulo Mamário: Tríplice Diagnóstica & Caracterização Ultrassonográfica e Histopatológica (FEBRASGO) • Etapa Propedêutica / Modalidade • Achados Benignos (Baixo Risco) • Achados Suspeitos de Malignidade (Alto Risco) • Técnica, Rendimento & Conduta Prática • 1. Exame Clínico das Mamas (ECM) • Endurecido / pétreo • retração de pele ou do mamilo"},"mama-descarga":{"m":"mama","h1":"Abordagem da Descarga Papilar (Fluxo Papilar)","sub":"Critérios clínicos de diferenciação entre fluxo fisiológico/benigno e fluxo suspeito (Capítulo 84 FEBRASGO).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Investigação & Conduta na Descarga Papilar • Diferenciação Clínica: Fisiológica vs. Patológica • Característica • Descarga Fisiológica / Benigna • Descarga Patológica / Suspeita • Origem / Ductos • Unilateral e uniductal • Mecanismo • Espontânea • Aspecto / Cor • Sanguinolenta, serossanguínea ou \"água de rocha\" • Causas Frequentes • Papiloma Intraductal (80-90%) • Conduta Médica • Mamografia + USG retroareolar → Cirurgia de Urban"},"mama-subtipos":{"m":"mama","h1":"Subtipos Moleculares & Tratamento Sistêmico do Câncer de Mama","sub":"Painel de imuno-histoquímica e seleção de terapias sistêmicas segundo o Capítulo 86 da FEBRASGO.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Subtipos Moleculares & Estratégia Terapêutica Sistêmica • Tabela 86.1 FEBRASGO: Subtipos Tumorais e Diretrizes de Tratamento • Subtipo Molecular • Receptor Estrogênio (RE) • Receptor Progesterona (RP) • HER2 • Ki-67 (Proliferação) • Estratégia Terapêutica Principal • Luminal A • Baixo (< 14%) • Hormonioterapia Exclusiva (5 a 10 anos): • Luminal B (HER2-) • Alto (≥ 14-20%) • Quimioterapia Adjuvante • Hormonioterapia (5 a 10 anos) • Luminal B (HER2+) Híbrido • Positivo (+) • Tríplice Terapia: • HER2-Superexpresso • Positivo (3+) • Quimioterapia Neoadjuvante com Duplo Bloqueio Anti-HER2: • Triplo-Negativo (Basaloide) • Muito Alto (> 30-50%)"},"mama-cirurgia":{"m":"mama","h1":"Tratamento Cirúrgico, Abordagem Axilar & Radioterapia","sub":"Evolução histórica do desescalonamento cirúrgico e indicações do Tratado FEBRASGO (Capítulo 86).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Decisão Cirúrgica Mamária, Linfonodo Sentinela & Radioterapia • Pilares Cirúrgicos e Radioncológicos • cirurgia conservadora seguida de radioterapia oferece sobrevida global idêntica à mastectomia radical • 1 a 2 linfonodos sentinelas positivos • a linfadenectomia axilar radical pode ser seguramente OMITIDA • Cirurgia Conservadora: • SEMPRE OBRIGATÓRIA • Pós-Mastectomia: • Tratamento Cirúrgico do Câncer de Mama: Cirurgia Conservadora vs Mastectomia & Critérios ACOSOG Z0011 (FEBRASGO) • Modalidade Cirúrgica / Axilar • Critérios de Indicação & Elegibilidade • Requisitos Obrigatórios & Vantagens • Contraindicações Absolutas / Relativas"},"mama-casos":{"m":"mama","h1":"Casos Clínicos Simulados de Mastologia","sub":"Treinamento ativo aplicando diretrizes FEBRASGO/SBM/CBR e decisões oncológicas reais.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Rastreamento em Mulher com Mamas Densas e Histórico Familiar • Paciente: • Conduta FEBRASGO / CBR 2023: • Rastreamento Suplementar: • Ultrassonografia Mamária Anual suplementar • Periodicidade: • Avaliação de Risco: • Caso 2: Nódulo Palpável em Mulher Jovem • Conduta FEBRASGO: • Exame de Imagem de Escolha: • Ultrassonografia Mamária • Hipótese Principal: • Conduta se BI-RADS 3 na USG: • Caso 3: Câncer de Mama Localmente Avançado Triplo-Negativo • Conduta FEBRASGO / Protocolos Oncológicos: • Estratégia Terapêutica Sistêmica: • Quimioterapia Neoadjuvante • Imunoterapia com Pembrolizumabe • Demarcação: • Abordagem Cirúrgica Pós-Neoadjuvância: • Investigação Genética:"},"mama-prescricao":{"m":"mama","h1":"Guia Rápido de Prescrições & Terapias em Mastologia","sub":"Tabela de bolso com fármacos essenciais, mecanismos, posologias e alertas de segurança clínica.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Classe • Mecanismo & Indicação • Posologia Padrão • Duração Recomendada • Alertas Críticos & Efeitos Adversos • Tamoxifeno • pré-menopausa • 20 mg VO 1x ao dia • 5 a 10 anos • Interação Medicamentosa Grave: • Anastrozol • pós-menopausa • 1 mg VO 1x ao dia • 5 anos • Letrozol • 2,5 mg VO 1x ao dia • Goserrelina • 3,6 mg SC no abdômen a cada 28 dias • Trastuzumabe • 1 ano completo de tratamento adjuvante • Abemaciclibe • 150 mg VO 2x ao dia • 2 anos • 20 mg VO 1x ao dia (tomar continuamente) • 3,6 mg SC no abdômen a cada 28 dias (ou 10,8 mg a cada 3 meses)"},"mamabenigna-visao-geral":{"m":"mamabenigna","h1":"Doenças Benignas da Mama: Visão Geral & Classificação de Risco","sub":"Baseado no Tratado de Ginecologia FEBRASGO (2ª ed., Capítulo 82), Consenso da Sociedade Brasileira de Mastologia (SBM) e Critérios de Dupont & Page.","flow":0,"info":1,"presc":0,"caso":0,"kw":"A Queixa Mais Frequente no Consultório de Mastologia: • Fisiopatologia das Alterações Funcionais Benignas da Mama (AFBM) • O Descompasso Hormonal Fisiológico: • Não é Doença: • não confere risco aumentado de câncer de mama • Classificação de Risco Histopatológico de Dupont & Page • Categoria Histológica • Exemplos Típicos • Risco Relativo (RR) • Conduta Clínica • 1. Não Proliferativas • 2. Proliferativas Sem Atipia • 3. Proliferativas Com Atipia • Hiperplasia Ductal Atípica (HDA) • Hiperplasia Lobular Atípica (HLA) • Doenças Benignas da Mama & Mastalgia (FEBRASGO / SBM) • Abrir em Tela Cheia • Infográfico HD"},"mamabenigna-semiologia":{"m":"mamabenigna","h1":"Roteiro Semiológico das Queixas Mamárias Benignas","sub":"Semiologia da mastalgia cíclica vs acíclica, palpação bimanual e diferenciação de nodularidade benigna.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os 4 Eixos da Caracterização Semiológica da Queixa Mamária • Mastalgia Cíclica (65-70%): • Mastalgia Acíclica: • Bilateral e Difusa: • Unilateral Focal: • Evolução Flutuante: • Palpação Clínica Benigna Típica: • Ampla mobilidade aos planos profundos e pele"},"mamabenigna-nodulos":{"m":"mamabenigna","h1":"Nódulos Mamários: Fibroadenoma & Tumor Filodes","sub":"Critérios ultrassonográficos de benignidade, conduta conservadora e diagnóstico diferencial com tumor filodes.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Doenças Benignas da Mama & Mastalgia (FEBRASGO / SBM) • Abrir em Tela Cheia • Infográfico HD • Fibroadenoma Mamário: O Tumor Benigno Mais Comum • Conduta Padrão em Jovens (< 35 anos) com Lesões < 2-3 cm: • Indicações Formais de Exérese Cirúrgica: • Crescimento rápido documentado (> 20% do volume em 6 meses); • Dimensões volumosas (≥ 3,0 cm - fibroadenoma gigante com risco de tumor filodes); • Dúvida diagnóstica à core biopsy ou idade > 35-40 anos na primeira apresentação; • Desejo inequívoco da paciente após esclarecimento detalhado. • Tumor Filodes (Phyllodes Tumor): Atenção ao Diagnóstico Diferencial"},"mamabenigna-cistos":{"m":"mamabenigna","h1":"Cistos Mamários: Simples, Complicados e Complexos","sub":"A correlação com a classificação BI-RADS, critérios de indicação de PAAF e análise do líquido aspirado.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Estratificação Ecográfica e Condutas Baseadas em Evidências • Categoria do Cisto • Aspecto Ecográfico Rígido • Classificação BI-RADS • Conduta Padrão (SBM / FEBRASGO) • Cisto Simples • reforço acústico posterior • PAAF apenas se volumoso e sintomático/doloroso • Cisto Complicado • Cisto Complexo (Cístico-Sólido) • vegetação/nódulo sólido mural interno • Biópsia Histopatológica Mandatória • Análise do Líquido na PAAF de Cisto Mamário • Líquido Amarelado, Turvo ou Esverdeado com Desaparecimento Completo da Massa: • Líquido Hemático (Sanguinolento Franco) OU Persistência de Massa Residual Palpável:"},"mamabenigna-mastites":{"m":"mamabenigna","h1":"Mastites Puerperais & Não Puerperais (Periductais)","sub":"Manejo antimicrobiano empírico, punção de abscesso ecoguiada e cirurgia de Hadfield em tabagistas.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma Visual do Manejo de Mastites e Abscessos Mamários • Comparativo: Mastite Puerperal vs Mastite Periductal Não Lactacional • Parâmetro • Mastite Puerperal (Lactacional) • Mastite Periductal Subareolar (Não Puerperal) • População Típica • tabagistas ativas • Fisiopatologia • Microbiologia • Manejo da Amamentação • Antibioticoterapia • Conduta no Abscesso • Punção aspirativa ecoguiada repetida • Cefalexina 500 mg VO 6/6h ou Amoxicilina-Clavulanato 875/125 mg VO 12/12h por 10-14 dias. • Amoxicilina-Clavulanato ou Clindamicina 300 mg VO 6/6h por 14 dias."},"mamabenigna-descarga":{"m":"mamabenigna","h1":"Descarga Papilar: Fisiológica vs Patológica","sub":"A semiologia do fluxo mamilar espontâneo em \"água de rocha\", galactorreia e a conduta no papiloma intraductal.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma Visual da Descarga Papilar • Papiloma Intraductal Benigno: O Protagonista da Descarga Suspeita • Por localizar-se dentro do lúmen de ductos principais subareolares, frequentemente não é palpável e pode ser invisível à mamogr... • A ecografia de alta frequência com foco subareolar pode evidenciar ducto dilatado com vegetação sólida intracanalicular. • Conduta Cirúrgica Obrigatória:"},"mamabenigna-casos":{"m":"mamabenigna","h1":"Casos Clínicos Simulados de Mastologia Benigna","sub":"Treinamento prático com 3 casos reais de beira de leito, raciocínio diferencial e tomada de decisão fundamentada.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Mastite puerperal com área de flutuação em nutriz de 3 semanas • Conduta Padrão-Ouro Recomendada: • Punção Aspirativa Ecoguiada com Agulha Grossa + Cefalexina 500 mg VO 6/6h + REINÍCIO IMEDIATO DO ALEITAMENTO / ESVAZIAMENTO. • Fundamentação SBM / FEBRASGO: • Reorientar a amamentação e o esvaziamento mamário contínuo • Punção ecoguiada repetida • Nódulo móvel e circunscrito de 2,2 cm em mulher de 22 anos • Tranquilização e Conduta Conservadora com Acompanhamento Ecográfico Semestral (BI-RADS 3). • Fluxo mamilar unilateral sanguinolento espontâneo • Ultrassonografia de Alta Resolução de Ductos Subareolares + RESSECÇÃO DO DUCTO PRINCIPAL (Microdochectomia)."},"mamabenigna-prescricao":{"m":"mamabenigna","h1":"Guia de Prescrição nas Doenças Benignas da Mama","sub":"Posologias de antimicrobianos, esquemas analgésicos e condutas farmacológicas na mastalgia refratária.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela Terapêutica Baseada em Evidências (FEBRASGO / SBM) • Fármaco / Medida • Posologia & Via • Indicação Clínica • Recomendações e Efeitos Adversos • Cefalexina • Amoxicilina + Clavulanato • Sutiã de Alta Sustentação • Mastalgia Cíclica e Acíclica • AINEs Tópicos (Diclofenaco Gel) • Tamoxifeno • 10 mg/dia VO por 3 a 6 meses • 500 mg VO de 6/6 horas por 10 a 14 dias. • Segura na lactação. Se alergia grave à penicilina/cefalosporina, utilizar Clindamicina 300 mg VO 6/6h. • 875/125 mg VO de 12/12 horas por 14 dias. • 10 mg/dia VO por 3 a 6 meses (dose submínima de bloqueio estrogênico)."},"metodologia":{"m":"metodologia","h1":"Método do Fluxograma Clínico (Framework Estudante-Médico)","sub":"Como transformar diretrizes densas de medicina em árvores de decisão memorizáveis e aplicáveis à beira do leito.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Visão Geral da Metodologia: • Paradigma Tradicional vs. Framework Clínico-Visual • Dimensão Clínica • Paradigma Tradicional (Texto Corrido) • Framework Clínico-Visual (Fluxograma Decisório) • Processamento Cognitivo • Ativo e hierárquico: • Hierarquia de Gravidade • Destaque Imediato: • Tempo de Resposta • Ultra-rápido (< 15 segundos) • Raciocínio Diagnóstico • Algoritmo Determinístico: • Prescrições & Doses • Prescrições Completas: • As 5 Etapas do Método de Construção de Fluxogramas • Matriz P.A.T.O.L.O.G.I.A • 4 Eixos Semiológicos • A Matriz P.A.T.O.L.O.G.I.A & Os 4 Eixos Semiológicos • P.A.T.O.L.O.G.I.A • P - Porta de Entrada: • A - Anamnese Dirigida (4 Eixos):"},"mioma-classificacao":{"m":"mioma","h1":"Classificação FIGO / PALM-COEIN de Leiomiomas Uterinos & Correlação Semiológica","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 32), no Sistema PALM-COEIN da FIGO e consensos da AAGL/ESGE.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fisiopatológico Fundamental: • estrogênio e progesterona dependente • dependem fundamentalmente da topografia e relação com a cavidade endometrial • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Biologia & Alta Prevalência: • estrogênio e progesterona • 2. Apresentação Clínica Ditada pela Topografia: • localização anatômica • Miomas Submucosos (FIGO 0, 1 e 2): • menorragia, sangramento intermenstrual, dismenorreia e infertilidade por falha de implantação embrionária • Miomas Intramurais (FIGO 3 e 4): • Miomas Subserosos (FIGO 5, 6 e 7): • sintomas compressivos • 3. A Classificação FIGO WAM (Subtipos 0 a 8): • 4. Baixíssimo Risco de Malignização:"},"mioma-propedutica":{"m":"mioma","h1":"Propedêutica por Imagem, Histerossonografia, Escore de Lasmar/STEPW e RM Pélvica","sub":"Mapeamento anatômico tridimensional de precisão e estadiamento pré-operatório para indicação cirúrgica segura (FEBRASGO Cap. 32).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Padrão-Ouro de Avaliação Endocavitária: • Histerossonografia com infusão salina • Escore de Lasmar (STEPW) • Fluxograma de Mapeamento Diagnóstico Estratificado: da USTV à Ressonância Magnética • Escore de Lasmar / STEPW para Miomas Submucosos • Parâmetro Avaliado (STEPW) • 0 Pontos • 1 Ponto • 2 Pontos • Tamanho (Size) • Topografia (Topography) • Extensão da Base (Extension) • Penetração Miometrial (Penetration) • Parede Lateral Envolvida (Wall) • Interpretação do Escore Total de Lasmar: • Grupo I (0 a 6 pontos) - Baixa Complexidade: • tempo único • Grupo II (7 a 9 pontos) - Alta Complexidade: • cirurgia em dois tempos • Grupo III (10 a 14 pontos) - Extrema Complexidade:"},"mioma-clinico":{"m":"mioma","h1":"Escalonamento Terapêutico Clínico e Medicamentoso dos Miomas Uterinos","sub":"Manejo farmacológico do sangramento, reposição de ferro na anemia ferropriva e terapias de redução pré-operatória (FEBRASGO Cap. 32).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Princípio Terapêutico Fundamental: • controlar o sangramento uterino anormal, aliviar a dor pélvica, recuperar a reserva de ferro • reduzir temporariamente o volume tumoral • Fluxograma de Escalonamento Farmacológico: da Hemostasia ao Preparo Pré-Operatório • Classes Farmacológicas Utilizadas na Miomatose Uterina • Classe / Fármaco • Mecanismo de Ação • Efeito sobre os Miomas • Posologia & Recomendação Prática • Ácido Tranexâmico • Reduz a perda sanguínea em 40% a 50% • 250 mg a 500 mg VO de 8/8h • Anti-inflamatórios Não Esteroidais (AINEs) • SIU de Levonorgestrel 52 mg • Reduz o sangramento em mais de 80% a 90%"},"mioma-miomectomia":{"m":"mioma","h1":"Algoritmo de Decisão em Miomectomia Conservadora: Histeroscópica vs Laparoscópica vs Laparotômica","sub":"Preservação da fertilidade, limites técnicos, reconstrução miometrial em camadas e morcelação contida (FEBRASGO Cap. 32).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Alerta de Segurança Obstétrica Pós-Miomectomia: • o parto em futura gestação deve ser realizado por Cesariana Eletiva a termo • Fluxograma de Escolha da Via de Miomectomia Baseado na Topografia, Número e Dimensões • Critérios Técnicos Comparativos entre as Vias de Miomectomia • Critério / Variável • Miomectomia Histeroscópica • Miomectomia Laparoscópica / Robótica • Miomectomia Laparotômica (Aberta) • Indicação de Eleição • até 3 a 4 nódulos e < 8 a 10 cm • Tempo de Internação • Técnica de Sutura • Sutura em múltiplas camadas • Cuidados Críticos • Morcelação contida em bolsa (in-bag) • Taxa de Gestação Futura • Miomas submucosos FIGO 0, 1 e 2 com Escore de Lasmar ≤ 9."},"mioma-embolizacao":{"m":"mioma","h1":"Embolização das Artérias Uterinas (EAU) & Terapias Minimamente Invasivas","sub":"Critérios rigorosos de seleção, técnica endovascular com microesferas de PVA e aconselhamento sobre fertilidade (FEBRASGO Cap. 32).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Diretriz de Fertilidade da FEBRASGO para EAU: • desejam engravidar no futuro • permanece como segunda linha de exceção • Fluxograma de Elegibilidade, Contraindicações e Riscos Anatômicos da EAU • Perfil de Eficácia e Complicações da Embolização das Artérias Uterinas • Aspecto Clínico • Evidência Científica Consolidada • Conduta & Condições Especiais • Redução Volumétrica dos Nódulos • 40% a 60% do volume • Controle do Sangramento (SUA) • 85% a 95% das pacientes • Síndrome Pós-Embolização • Eliminação Transcervical do Mioma"},"mioma-histerectomia":{"m":"mioma","h1":"Histerectomia Definitiva, Degeneração Vermelha na Gravidez e Rastreio de Sarcomas","sub":"Tratamento definitivo, decisão de preservação do colo uterino, salpingectomia profilática e degenerações agudas (FEBRASGO Cap. 32).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Regra da Degeneração Vermelha / Rubra na Gestação: • infarto hemorrágico asséptico (degeneração vermelha) • ESTRITAMENTE CONSERVADORA • NUNCA OPERAR ou tentar miomectomia na gravidez • Fluxograma de Decisão Cirúrgica Definitiva e Diagnóstico Diferencial de Degenerações e Sarcomas • Histerectomia Total vs Subtotal & Salpingectomia Bilateral Profilática • Modalidade Cirúrgica • Vantagens e Benefícios • Desvantagens & Riscos • Recomendação da FEBRASGO • Histerectomia Total • Conduta Preferencial de Escolha: • Histerectomia Subtotal • Salpingectomia Bilateral Profilática • MANDATÓRIA em toda histerectomia"},"mioma-casos":{"m":"mioma","h1":"Casos Clínicos Simulados de Miomatose Uterina","sub":"Treinamento prático aplicando classificação FIGO, Escore de Lasmar, miomectomia laparoscópica e degeneração vermelha na gravidez.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Mioma Submucoso FIGO 1 e Anemia Ferropriva Grave em Nulípara • Paciente: • Conduta Padrão-Ouro Baseada em Evidências (FEBRASGO / ESGE): • Erro Gravíssimo de Indicação: • Cálculo do Escore de Lasmar: • Lasmar 3 pontos (Grupo I: Baixa Complexidade) • Manejo Pré-Operatório Imediato: • Carboximaltose Férrica 1.000 mg IV • Tratamento Cirúrgico Padrão-Ouro: • Miomectomia Histeroscópica Bipolar em Tempo Único • Prognóstico Reprodutivo: • Caso 2: Miomatose Intramural Volumosa e Sintomas Compressivos aos 43 Anos • Raciocínio Clínico FEBRASGO: • Análise da Queixa & Topografia: • sintomas compressivos mecânicos graves • Objetivo Terapêutico:"},"mioma-prescricao":{"m":"mioma","h1":"Guia Rápido de Prescrições & Fármacos em Miomatose Uterina","sub":"Tabela de bolso com fármacos essenciais, posologias práticas no controle de sangramento, suporte hematológico e preparo pré-operatório.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Apresentação • Mecanismo & Indicação Específica • Posologia Prática Recomendada • Alertas Clínicos & Cuidados de Prescrição • Ácido Tranexâmico 250 mg / 500 mg • 1 a 2 comprimidos de 500 mg VO de 8 em 8 horas • SIU de Levonorgestrel 52 mg • Inserção intrauterina ambulatorial com validade de até 8 anos • Contraindicado se mioma submucoso distorcer acentuadamente a cavidade • Goserelina 3,6 mg / Leuprorrelina 3,75 mg • 1 aplicação SC ou IM mensal por 2 a 3 meses antes da miomectomia ou histerectomia • Carboximaltose Férrica 500 mg / 10 mg/mL"},"ovario-visao-geral":{"m":"ovario","h1":"Tumores Anexiais & Câncer de Ovário: Visão Geral & Epidemiologia","sub":"Baseado no Tratado de Ginecologia FEBRASGO (2ª ed., Capítulos 37 e 81), Diretrizes IOTA e Consenso FIGO.","flow":0,"info":1,"presc":0,"caso":0,"kw":"O \"Assassino Silencioso\" da Ginecologia: • 75% das pacientes são diagnosticadas em estádios avançados (FIGO III ou IV) • Histopatologia e Vias de Carcinogênese • 1. Tumores Epiteliais (90% dos casos de câncer): • Carcinoma Seroso de Alto Grau (70-75%): • Carcinoma Mucinoso (3-5%): • Carcinoma Endometrioide (10%) e de Células Claras (5%): • 2. Tumores Germinativos (3-5% das malignidades, mas comuns em jovens < 20 anos): • 3. Tumores do Cordão Sexual e Estroma (2-3%): • Fatores de Risco Genéticos e Protetores • Fatores de Alto Risco Genético • BRCA1 • BRCA2 • Síndrome de Lynch (HNPCC): • Fatores Protetores Comprovados • Uso de Anticoncepcionais Orais Combinados:"},"ovario-semiologia":{"m":"ovario","h1":"Roteiro Semiológico & Red Flags na Massa Anexial","sub":"A semiologia dos sintomas insidiosos gastrointestinais e os sinais físicos patognomônicos de malignidade ovariana.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os 4 Eixos Semiológicos da Suspeita de Neoplasia Ovariana • Sintomas Quase Diários: • mais de 12 a 15 dias por mês • Falsa Impressão de Dispepsia: • Sensação de Plenitude e Empachamento Precoce: • Desconforto Pélvico Contínuo: • Evolução Subaguda a Crônica (semanas a meses): • perda de peso involuntária e caquexia • Sinais Físicos Cruciais de Malignidade: • Ascite Peritoneal Clínica: • Toque Vaginal Bimanual: • sólida, de contornos irregulares, fixa, imóvel e indolor • Linfonodo da Irmã Maria José: • Derrame Pleural:"},"ovario-iota":{"m":"ovario","h1":"Regras Simples IOTA (Simple Rules) na Massa Anexial","sub":"O método de consenso internacional padrão-ouro para triagem ecográfica de benignidade (B-features) vs malignidade (M-features).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Tumores Anexiais & Câncer de Ovário (IOTA / FEBRASGO) • Abrir em Tela Cheia • Infográfico HD • Regras de Classificação IOTA (Sensibilidade 92%, Especificidade 90%) • Classificação IOTA • Critérios Ultrassonográficos Rígidos • Risco de Câncer Estimado & Conduta Clínica • Benigno (IOTA-B) • pelo menos 1 característica B • NENHUMA característica M • Maligno (IOTA-M) • pelo menos 1 característica M • NENHUMA característica B • Ginecologista Oncológico • Indeterminado • IOTA ADNEX"},"ovario-marcadores":{"m":"ovario","h1":"Marcadores Tumorais & Escore RMI (Risk of Malignancy Index)","sub":"A correlação clínica de CA-125, HE4, ROMA Score e o cálculo preditivo do escore RMI de Jacobs.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma Visual do Escore RMI e Marcadores • Cálculo Prático do Escore RMI (Risk of Malignancy Index 1) • Escore Ecográfico (U): • →U = 3→ • Status Menopáusico (M): • →M = 1→ • →M = 3→ • Ponto de Corte Decisório: • RMI ≥ 200 • Comparativo de Marcadores Séricos: CA-125 vs HE4 vs Germinativos • CA-125 (Valor de referência < 35 UI/mL): • HE4 (Human Epididymis Protein 4 - VR < 70-140 pmol/L): • Painel para Mulheres Jovens / Adolescentes (< 30 anos com massa sólida): • LDH • Alfa-fetoproteína • β-hCG"},"ovario-benignos":{"m":"ovario","h1":"Tumores Benignos Frequentes & Síndrome de Meigs","sub":"Semiologia ecográfica dos cistos funcionais, teratomas dermoides, cistoadenomas e a tríade de Meigs.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Características Ecográficas e Manejo das Lesões Benignas Típicas • Teratoma Cístico Maduro (Dermoide) • Achados no USG: • Cistoadenoma Seroso e Mucinoso • Seroso: • Mucinoso: • Pseudomixoma Peritoneal • Fibroma Ovariano & Síndrome de Meigs • Tríade Clássica: • resolução completa, rápida e espontânea"},"ovario-estadiamento":{"m":"ovario","h1":"Estadiamento Cirúrgico FIGO e Princípios da Citorredução R0","sub":"A cirurgia do câncer de ovário é diagnóstica, estadiadora e terapêutica. Critérios da citorredução ótima.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Inventário Cirúrgico Sistemático Obrigatório (Laparotomia Mediana Xifopúbica) • estadiamento cirúrgico obrigatório (FIGO 2018) • Lavado Peritoneal: • Inspeção Minuciosa de Toda a Cavidade: • Histerectomia Total + Salpingo-Ooforectomia Bilateral: • Omentectomia Infracólica: • Linfadenectomia Retroperitoneal Pélvica e Para-aórtica: • Conceito de Citorredução Ótima (→R0→): • Citorredução Completa R0 (ausência de doença residual macroscópica visível a olho nu) • Resumo dos Estádios Clínico-Cirúrgicos FIGO 2018 • Estádio FIGO • Extensão Anatômica do Tumor • Sobrevida Global em 5 Anos • Estádio I • Estádio II • Estádio III • Estádio IV"},"ovario-casos":{"m":"ovario","h1":"Casos Clínicos Simulados de Tumores Anexiais","sub":"Exercícios interativos de raciocínio clínico, cálculo de RMI e decisões terapêuticas em oncoginecologia.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Massa anexial na pós-menopausa com ascite e cálculo do RMI • Conduta Padrão-Ouro Recomendada: • Cálculo do RMI = 2.160 (>> 200) → Encaminhamento para Ginecologista Oncológico para Laparotomia com Estadiamento e Citorredução... • Cálculo Passo a Passo do RMI: • Achado acidental de cisto unilocular em ecografia de rotina • Conduta Expectante Conservadora com Nova Ecografia em 8 a 12 semanas (ou pós-menstruação). • Fundamentação IOTA / FEBRASGO: • Ascite maciça e derrame pleural com massa sólida benigna • Fibroma Ovariano • Reconhecimento Clínico & Diagnóstico: • Síndrome de Meigs (Fibroma Ovariano Benigno + Ascite + Hidrotórax Pleural) → Cura Cirúrgica Completa."},"ovario-prescricao":{"m":"ovario","h1":"Guia de Quimioterapia & Prescrição no Câncer de Ovário","sub":"Regimes quimioterápicos adjuvantes padrão, antieméticos de alta potência e inibidores de PARP.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela de Protocolos Farmacológicos Oncológicos (NCCN / FEBRASGO) • Protocolo / Fármaco • Posologia & Ciclos • Indicação Oncológica • Toxicidade Crítica & Manejo Clínico • Carboplatina + Paclitaxel • Carboplatina AUC 5 a 6 EV + Paclitaxel 175 mg/m² EV • Olaparibe / Niraparibe • BRCA1/2 • Bevacizumabe • Protocolo Antiemético Triplo • Carboplatina AUC 5 a 6 EV + Paclitaxel 175 mg/m² EV a cada 21 dias por 6 ciclos. • Padrão-ouro adjuvante para câncer epitelial de ovário estádios IC a IV. • Olaparibe 300 mg VO 12/12h ou Niraparibe 200-300 mg VO 1x/dia contínuo por até 2 anos. • 15 mg/kg EV a cada 21 dias (associado à quimio e mantido em manutenção por até 15 meses)."},"pgr-visao-geral":{"m":"pgr","h1":"Visão Geral & Conceito da Perda Gestacional Recorrente (PGR)","sub":"Capítulos 53 e 61 FEBRASGO • ASRM / ESHRE • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"📋 CONCEITO ATUALIZADO (ASRM / ESHRE / FEBRASGO): • DUAS OU MAIS perdas gestacionais consecutivas • Fundamentos Teóricos & Roteiro Prático • Em cerca de 50% dos casais com PGR, toda a investigação propedêutica exaustiva resultará normal (PGR idiopática/inexplicada). • Nesses casos idiopáticos, a probabilidade de uma gestação subsequente evoluir para nascimento a termo com concepto saudável sup... • Os 4 Pilares da Investigação Sistemática • 1. Síndrome dos Anticorpos Antifosfolípide (SAAF): • 2. Fatores Anatômicos Uterinos: • 3. Genética Parental: • 4. Fatores Endócrino-Metabólicos: • Algoritmo Diagnóstico e Terapêutico da Perda Gestacional Recorrente • Abrir em Tela Cheia"},"pgr-saaf":{"m":"pgr","h1":"Síndrome dos Anticorpos Antifosfolípide (SAAF) Obstétrica","sub":"Trombofilia Adquirida • Critérios de Sydney • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Perdas Pré-Embrionárias / Embrionárias: • menos de 10 semanas de gestação • Perda Fetal Fetal Tardia: • 10 semanas ou mais de gestação • Parto Prematuro Grave: • menos de 34 semanas • Anticoagulante Lúpico (LAC): • Anticorpos Anticardiolipina (aCL) IgG ou IgM: • Anticorpos Anti-β2-Glicoproteína I IgG ou IgM: • Alerta: Títulos baixos e transitórios não confirmam SAAF e não justificam anticoagulação prolongada. • 💊 TRATAMENTO PADRÃO-OURO COMPROVADO NA GESTAÇÃO COM SAAF: • AAS em baixa dose (100 mg/dia VO) • Heparina de Baixo Peso Molecular (Enoxaparina 40 mg/dia SC) • 6 semanas pós-parto • mais de 75 a 80%"},"pgr-anatomicas":{"m":"pgr","h1":"Causas Anatômicas: Útero Septado, Asherman & Incompetência Cervical","sub":"Anatomia Uterina • Histeroscopia • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Fisiopatologia: • Diagnóstico: • Conduta de Escolha: • Septoplastia Histeroscópica com tesoura a frio ou eletrodo bipolar • Etiologia: • Quadro Clínico: • Tratamento: • Quadro Clássico: • totalmente indolor e sem contrações uterinas prévias • Tratamento Consensual: • Cerclagem Cervical Eletiva (técnica de McDonald ou Shirodkar)"},"pgr-geneticas":{"m":"pgr","h1":"Fatores Genéticos Parentais: Translocações Balanceadas","sub":"Genética & Citogenética • Cariótipo do Casal • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Translocação Recíproca: • Translocação Robertsoniana: • O Portador é Saudável: • Segregação Meiótica Desbalanceada: • Cariótipo com Bandas G de Ambos os Pais: • Aconselhamento Genético Especializado: • Reprodução Assistida com PGT-SR: • Teste Genético Pré-Implantacional para Rearranjos Estruturais (PGT-SR)"},"pgr-trombofilias":{"m":"pgr","h1":"Trombofilias Hereditárias & Rastreamento Endócrino","sub":"Trombofilias Hereditárias • Choosing Wisely • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Risco Materno de Trombose (TEV): • Impacto nas Perdas de Primeiro Trimestre: • NÃO melhora a taxa de nascidos vivos • Tireoide: • TSH alvo < 2,5 mUI/L • Diabetes Melito: • Prolactina:"},"pgr-fluxogramas":{"m":"pgr","h1":"Fluxograma de Investigação da Perda Gestacional Recorrente","sub":"Algoritmo Interativo • Diretrizes ASRM / FEBRASGO • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretrizes & Fundamentos dos Algoritmos • Algoritmo Diagnóstico e Terapêutico da Perda Gestacional Recorrente • Abrir em Tela Cheia • Infográfico HD"},"pgr-tabelas":{"m":"pgr","h1":"Matriz Propedêutica da PGR & Protocolo Farmacológico na SAAF","sub":"Tabelas de Critérios e Drogas • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Matriz Investigativa Completa na Perda Gestacional Recorrente (≥ 2 Perdas) • Eixo Propedêutico • Exames Obrigatórios • Critério de Positividade • Conduta Terapêutica Específica • Autoimune (SAAF) • AAS 100 mg/d pré-concepcional + Enoxaparina 40 mg/d SC • Anatômico • Septoplastia histeroscópica ambulatorial • Genético Parental • FIV com PGT-SR • Endócrino • AAS 100 mg/d pré-concepcional + Enoxaparina 40 mg/d SC até 6 semanas pós-parto."},"pgr-casos":{"m":"pgr","h1":"Casos Clínicos Simulados & Prescrição Farmacológica na SAAF","sub":"Casos Clínicos & Prescrição Prática • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Mulher de 29 Anos com 3 Abortamentos de 1º Trimestre e SAAF Confirmada • História Clínica: • Conduta Correta & Discussão Baseada em Evidências: • 1. Confirmação Diagnóstica: • Síndrome dos Anticorpos Antifosfolípide (SAAF) Obstétrica • 2. Planejamento Farmacológico Pré-Concepcional: • Iniciar imediatamente Ácido Acetilsalicílico (AAS) 100 mg por via oral uma vez ao dia • 3. Conduta Assim que Confirmada a Gestação: • Confirmar a localização intrauterina tópica da gravidez por ultrassonografia precoce (evitar ectópica). • Iniciar Enoxaparina Sódica 40 mg por via subcutânea uma vez ao dia"},"polipos-visao-geral":{"m":"polipos","h1":"Visão Geral, Etiopatogenia & Biopatologia dos Pólipos","sub":"Capítulo 33 FEBRASGO • Patologia Benigna Uterina • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"📊 Epidemiologia & Prevalência: • Fundamentos Teóricos & Roteiro Prático • Pólipos Endometriais • Pólipos Cervicais • \"P\" da classificação PALM-COEIN • Hiperexpressão de Receptores de Estrogênio (RE) e Superexpressão de Bcl-2: • Subexpressão de Receptores de Progesterona (RP): • Hiperatividade da Enzima Aromatase Local: • 1. Funcional / Mucoso (Típico do Menacme): • 2. Hiperplásico: • 3. Fibroso / Atrófico (Mais Comum na Pós-Menopausa): • 4. Adenomatoso / Adenomiomatoso: • Mapa Visual & Infográfico Clínico: Pólipos Uterinos & Cervicais • Abrir em Tela Cheia • Infográfico HD"},"polipos-semiologia":{"m":"polipos","h1":"Roteiro Semiológico & Manifestações Clínicas","sub":"Roteiro Semiológico • Classificação PALM-COEIN • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Sangramento Intermenstrual (*Spotting*): • Hipermenorreia / Menorragia: • Sinusorragia (Sangramento Pós-Coital): • pólipos cervicais • Sangramento Uterino na Pós-Menopausa (SUPM): • Exame Especular Meticuloso: • Toque Bimanual:"},"polipos-propedeutica":{"m":"polipos","h1":"Propedêutica Diagnóstica: USG-TV, Histerossonografia & Histeroscopia","sub":"Propedêutica Diagnóstica • Padrão-Ouro • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Exame de 1ª Linha / Triagem: • Visualiza imagem hiperecogênica intraluminal bem circunscrita, homogênea ou microcística, cercada pelo halo hipoecoico do endom... • Sinal do Vaso Nutricional (*Feeding Vessel Sign*): • Sensibilidade: 80% a 90%; Especificidade: 85%. • Ultrassom com Distensão Líquida: • Infusão intrauterina de solução fisiológica estéril via cateter sob monitoramento ecográfico em tempo real. • Cria uma interface anecoica perfeita que separa as paredes endometriais colapsadas, delineando com máxima precisão o tamanho, a... • Excelente para diferenciar pólipos de miomas submucosos (G0/G1) e de espessamento difuso."},"polipos-malignidade":{"m":"polipos","h1":"Risco de Malignidade & Fatores Oncogenéticos nos Pólipos","sub":"Oncologia Ginecológica • Estratificação de Risco • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Mapa Visual & Infográfico Clínico: Pólipos Uterinos & Cervicais • Abrir em Tela Cheia • Infográfico HD • Fundamentos Teóricos & Roteiro Prático • 1. Status Menopáusico: • 1,1% a 1,7% na pré-menopausa • 4,5% a 6,0% na pós-menopausa • 2. Presença de Sangramento Uterino Anormal (SUA): • 3. Diâmetro do Pólipo ≥ 15 mm: • 4. Idade Avançada (> 60 Anos) & Síndrome Metabólica: • 5. Uso de Tamoxifeno: • Onde se Localiza a Neoplasia no Pólipo? • Comumente, a atipia citológica e o adenocarcinoma originam-se na base ou no pedículo de fixação do pólipo • Implicação Cirúrgica Mandatória: • completa e em bloco"},"polipos-conduta-cirurgica":{"m":"polipos","h1":"Algoritmo de Conduta Cirúrgica & Técnicas de Exérese","sub":"Cirurgia Minimamente Invasiva • Polipectomia • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":1,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Pólipo Visível, Pediculado e < 3 cm (Ambiente Ambulatorial): • pinça de Foerster, Kelly ou Cheron • rotação contínua sobre o próprio eixo (torção) • Envio obrigatório de 100% da peça para exame anatomopatológico (AP) • Pólipo Séssil, > 3 cm ou de Inserção Endocervical Alta: • polipectomia histeroscópica • Investigação Endometrial Associada: • Mulheres na Pós-Menopausa: • Polipectomia Histeroscópica MANDATÓRIA • Mulheres na Pré-Menopausa: • Conduta Expectante • Indicação de Polipectomia Histeroscópica Cirúrgica • Técnicas Histeroscópicas:"},"polipos-tabelas":{"m":"polipos","h1":"Tabelas Clínicas de Apoio Diagnóstico & Diferencial","sub":"Diagnóstico Diferencial • Parâmetros Cirúrgicos • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Diagnóstico Diferencial Histeroscópico: Pólipo vs Mioma Submucoso vs Hiperplasia • Característica • Pólipo Endometrial • Mioma Submucoso (FIGO 0/1) • Hiperplasia / Neoplasia Endometrial • Coloração • Consistência & Toque • Vascularização • Superfície • Conduta Padrão • Tabela 2: Meios de Distensão Líquida em Histeroscopia Cirúrgica • Tabela de Referência & Classificação Clínica • Meio de Distensão • Tipo de Corrente • Vantagens Clínicas • Risco Principal de Complicação • Soro Fisiológico (NaCl 0,9%) • Bipolar • Glicina 1,5% / Sorbitol-Manitol • Monopolar • Hiponatremia dilucional grave"},"polipos-casos":{"m":"polipos","h1":"Casos Clínicos Simulados: Pólipos Uterinos","sub":"Casos Clínicos Interativos • Discussão Baseada no Algoritmo • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Mulher de 62 Anos com Sangramento na Pós-Menopausa e Pólipo de 14 mm • História Clínica: • Exame Físico & USG: • Conduta Correta & Discussão Baseada em Evidências: • Sangramento Uterino na Pós-Menopausa (SUPM) • pólipo endometrial • Conduta Recomendada: • Histeroscopia Cirúrgica com Polipectomia Completa em Bloco: • Proscrição de Curetagem às Cegas: • Se o laudo anatomopatológico confirmar adenocarcinoma endometrioide: encaminhamento oncológico imediato para estadiamento cirúr... • Caso 2: Paciente em Uso de Tamoxifeno com Pólipo de 20 mm • Exames de Imagem: • Contexto Clínico: • Conduta Indicada:"},"polipos-prescricao":{"m":"polipos","h1":"Guia de Prescrição & Protocolo Cirúrgico em Polipectomia","sub":"Preparo Cirúrgico • Prescrição Pós-Operatória • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":1,"caso":0,"kw":"1. Protocolo de Preparo Cervical Pré-Histeroscópico (Maturação do Colo) • 2. Analgesia & Cuidados Pós-Polipectomia Histeroscópica • 3. Prevenção de Recidivas em Pólipos Múltiplos (Terapia Adjuvante) • Sistema Intrauterino Liberador de Levonorgestrel 52 mg (Mirena)"},"prolactina-visao-geral":{"m":"prolactina","h1":"Fisiologia da Prolactina & Controle Inibitório Dopaminérgico","sub":"Capítulo 44 FEBRASGO • Neuroendocrinologia • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"🛑 O FREIO DOPAMINÉRGICO HIPOTALÂMICO: • Dopamina • Dopaminérgicos tipo 2 (D2) • O Fenômeno do \"Efeito Haste\": • Fundamentos Teóricos & Roteiro Prático • mecanismo de inibição tônica contínua • TRH (Hormônio Liberador de Tirotrofina): • Estrogênios: • VIP, Ocitocina e Serotonina: • Repercussão no Eixo Reprodutivo (HHO) • A prolactina elevada liga-se a receptores no núcleo arqueado do hipotálamo, suprimindo a pulsatilidade intermitente normal do GnRH • Sem pulsos adequados de GnRH, ocorre queda da secreção de LH e FSH pelas células gonadotróficas. • Instala-se um estado de Hipogonadismo Hipogonadotrófico Funcional"},"prolactina-semiologia":{"m":"prolactina","h1":"Roteiro Semiológico: Galactorreia, Anovulação & Macroadenomas","sub":"Roteiro Semiológico • Red Flags Neuroftalmológicos • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Características Físicas: • Espontânea vs À Expressão: • Alerta Clínico: • Espectro Menstrual Progressivo: • Amenorreia secundária • Infertilidade Anovulatória: • Hipoestrogenismo Secundário: • Cefaleia Tensional Crônica: • Hemianopsia Bitemporal: • Apoplexia Hipofisária:"},"prolactina-etiologia":{"m":"prolactina","h1":"Etiologias da Hiperprolactinemia: Fisiológica, Farmacológica & Prolactinomas","sub":"Diagnóstico Diferencial • 4 Grandes Grupos • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Gravidez (Causa Primária Obrigatória!): • Estresse e Venopunção Traumática: • Hipotireoidismo Primário: • Insuficiência Renal Crônica & Cirrose: • Antipsicóticos / Neurolépticos: • Antieméticos Pró-cinéticos: • Antidepressivos: • Anti-hipertensivos Centrais: • 🎯 Prolactinomas Hipofisários: • Microprolactinomas (< 10 mm de diâmetro) • Macroprolactinomas (≥ 10 mm de diâmetro)"},"prolactina-propedeutica":{"m":"prolactina","h1":"Propedêutica Laboratorial: Macroprolactina (PEG) & Efeito Gancho","sub":"Laboratório Refinado • Armadilhas Diagnósticas • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • A Molécula: • Inércia Biológica: • Cenário Típico: • Diagnóstico: • Polietilenoglicol (PEG) • < 40% • NÃO EXIGE TRATAMENTO NEM RESSONÂNCIA MAGNÉTICA • Mecanismo Bioquímico: • O excesso maciço de antígeno satura independentemente tanto os anticorpos de captura fixados na placa quanto os anticorpos de d... • Cenário Clínico Dramático: • Conduta Obrigatória: • redosagem de prolactina com DILUIÇÃO DA AMOSTRA a 1:100"},"prolactina-tratamento":{"m":"prolactina","h1":"Tratamento: Agonistas Dopaminérgicos (Cabergolina vs Bromocriptina)","sub":"Terapêutica Consensual • Agonistas Dopaminérgicos • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":1,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • farmacológico e conservador • Posologia: • Eficácia Comprovada: • > 85 a 90% dos casos • redução significativa do volume tumoral em > 80% dos prolactinomas • Tolerabilidade: • Indicação Especial: • Desvantagens: • 🔪 Indicações Restritas de Cirurgia Transesfenoidal: • Resistência farmacológica comprovada (ausência de normalização de prolactina e de redução tumoral após doses máximas de Cabergo... • Intolerância inaceitável aos agonistas dopaminérgicos orais e vaginais. • Apoplexia hipofisária aguda hemorrágica com perda visual rapidamente progressiva que não melhore nas primeiras 24 horas."},"prolactina-fluxogramas":{"m":"prolactina","h1":"Fluxograma de Investigação e Manejo da Hiperprolactinemia","sub":"Algoritmo Interativo • Diretrizes Endocrine Society • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretrizes & Fundamentos dos Algoritmos • Algoritmo Diagnóstico da Hiperprolactinemia & Prolactinomas • Abrir em Tela Cheia • Infográfico HD"},"prolactina-tabelas":{"m":"prolactina","h1":"Matriz Diagnóstica & Fármacos Indutores de Hiperprolactinemia","sub":"Tabelas Farmacológicas e Laboratoriais • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Principais Medicamentos Causadores de Hiperprolactinemia • Classe Terapêutica • Exemplos Farmacológicos • Mecanismo de Ação Neuroendócrino • Níveis Médios de Prolactina • Antipsicóticos Típicos • Antipsicóticos Atípicos • 100 a 300 ng/mL (Muito elevado) • Antieméticos Pró-cinéticos • Antidepressivos Tricíclicos • Anti-hipertensivos • 50 a 150 ng/mL • 40 a 120 ng/mL • 30 a 80 ng/mL • 30 a 70 ng/mL"},"prolactina-casos":{"m":"prolactina","h1":"Casos Clínicos Simulados & Guia de Prescrição","sub":"Casos Clínicos & Prescrição Prática • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Galactorreia Bilateral em Usuária de Risperidona • História Clínica: • Conduta Correta & Discussão Baseada em Evidências: • 1. Diagnóstico Clínico Mais Provável: • 2. Conduta Inicial Multiprofissional: • NÃO solicitar Ressonância Magnética de imediato • Entrar em contato com o médico psiquiatra assistente para avaliar a possibilidade de troca da medicação • Se a troca medicamentosa normalizar a prolactina e cessar a galactorreia, o diagnóstico está confirmado sem necessidade de neur... • Se a medicação não puder ser trocada e a paciente mantiver hipoestrogenismo/osteopenia crônica, prescrever terapia hormonal de ..."},"prolapso-delancey":{"m":"prolapso","h1":"Anatomia do Assoalho Pélvico & Os 3 Níveis de Suporte de DeLancey","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 68) e nos Conceitos Clássicos de DeLancey.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fundamental de Prova & Prática Cirúrgica: • 3 níveis anatômicos essenciais • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Fisiopatologia do Colapso do Assoalho Pélvico: • 2. Os 3 Níveis de Suporte de DeLancey: • Nível I (Suspensão Apical): • Nível II (Fixação Lateral): • Nível III (Fusão Distal): • 3. Apresentação Clínica & O Sintoma Patognomônico: • 4. Estadiamento Padronizado POP-Q: • Roteiro Semiológico: Sinais & Sintomas do Prolapso Genital • 1. Sensação de Abaulamento Genital (\"Bola na Vagina\"): • Ritmo Diário & Fatores de Piora: • Intensidade: • Sintomas Cutâneos Associados: • 2. Disfunção Miccional & Redução Manual: • Jato Urinário Obstrutivo:"},"prolapso-popq":{"m":"prolapso","h1":"O Sistema Quantitativo POP-Q (IUGA / ICS) & Os 5 Estádios Clínicos","sub":"A padronização internacional milimétrica que substituiu a classificação subjetiva de Baden-Walker.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Medição dos 9 Pontos Anatômicos e Estratificação nos Estádios 0 a IV • Grade de 9 Pontos do POP-Q & Critérios de Estadiamento • Estádio POP-Q • Definição Operacional da ICS / IUGA • Relação do Ponto Mais Saliente com o Hímen • Significado Clínico & Conduta Típica • Estádio 0 • -3 cm • Estádio I • mais de 1 cm acima do hímen (< -1 cm) • Estádio II • entre 1 cm acima e 1 cm abaixo do hímen (-1 cm a +1 cm) • Estádio III • mais de 1 cm além do hímen (> +1 cm) • Estádio IV • Procidência Genital Total • [CVT - 2 cm] • Grade Clássica de 9 Pontos do POP-Q (3x3) & Interpretação Paramétrica Completa • Compartimento Anterior (Parede Anterior)"},"prolapso-iue-oculta":{"m":"prolapso","h1":"Propedêutica Clínica & O Teste de Incontinência Urinária de Esforço Oculta","sub":"Como diagnosticar a perda urinária mascarada pelo dobramento mecânico da uretra.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma do Teste Mandatório de Redução do Prolapso e Investigação da IUE Oculta • O Fenômeno do Kinking Uretral & A Técnica do Teste de Redução • angulação/dobramento mecânico agudo na junção uretrovesical • Redução atraumática do prolapso: • escape involuntário de urina durante o esforço com o prolapso reduzido • Incontinência Urinária de Esforço Oculta (Mascarada) • Sling Suburetral de Uretra Média (TVT ou TOT) • Matriz de Investigação e Decisão Cirúrgica: IUE Oculta / Mascarada em Grandes Prolapsos • Etapa Propedêutica / Conduta • Fundamentação Fisiopatológica & Técnica • Interpretação Clínica dos Resultados • Decisão Terapêutica / Cirúrgica FEBRASGO"},"prolapso-pessarios":{"m":"prolapso","h1":"⭕ Tratamento Conservador: Fisioterapia Pélvica & Pessários Vaginais","sub":"A abordagem não cirúrgica de primeira linha para alívio imediato e manutenção do suporte.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Manejo Conservador e Seleção do Pessário Adequado • Tabela Prática: Tipos de Pessários Vaginais & Cuidados Mandatórios • Tipo de Pessário • Mecanismo & Indicação Principal • Vantagens Clínicas • Desvantagens & Cuidados Específicos • Pessário de Suporte (Tipo Anel / Ring) • Permite manter relações sexuais com penetração. • Pessário de Preenchimento (Tipo Gellhorn) • retenção excelente mesmo em defeitos graves • Não permite penetração sexual. • Pessário de Cubo • Estrogênio Tópico Vaginal (Mandatório) • prevenindo úlceras de decúbito, sangramentos e erosões • Estriol ou Promestrieno 2 a 3 vezes por semana"},"prolapso-cirurgia-reconstrutiva":{"m":"prolapso","h1":"Tratamento Cirúrgico Reconstrutivo: Sacrocolpopexia, Fixação ao Sacroespinhoso & Colporrafias","sub":"Cirurgias anatômicas que preservam o canal vaginal e a função sexual da mulher.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Decisão Cirúrgica Reconstrutiva por Compartimento Pélvico • Técnicas Reconstrutivas Padrão-Ouro na Literatura Internacional (FEBRASGO) • Procedimento Cirúrgico • Indicação & Compartimento • Via & Detalhes Técnicos • Eficácia & Desfechos • Sacrocolpopexia Abdominal (Promontofixação) • Padrão-Ouro em Defeito Apical (Nível 1): • Maior taxa de cura anatômica duradoura e menor taxa de recidiva • Fixação ao Ligamento Sacroespinhoso • Suspensão de High McCall / Shull • Colporrafia Anterior Clássica • Colporrafia Posterior com Perineoplastia"},"prolapso-colpocleise":{"m":"prolapso","h1":"Cirurgias Obliterativas: Colpocleise Parcial de Le Fort & Total de Latzko","sub":"A melhor opção cirúrgica para pacientes idosas frágeis sem interesse em atividade sexual com penetração.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Indicação e Execução da Colpocleise (Cirurgia Obliterativa) • Particularidades Clínicas da Colpocleise de Le Fort • Decisão compartilhada convicta: • Canais Laterais de Drenagem: • Menor índice de recidiva da uroginecologia: • Baixa morbidade: • Satisfação subjetiva superior a 95% • Comparativo Clínico e Cirúrgico: Colpocleise Parcial de Le Fort vs Colpocleise Total de Latzko • Procedimento Cirúrgico • Presença ou Ausência de Útero • Investigação Pré-Operatória Mandatória • Detalhes da Técnica Cirúrgica • Taxa de Sucesso & Complicações • Impacto na Vida Sexual & Satisfação • Colpocleise Parcial de Le Fort • com útero preservado in situ"},"prolapso-casos":{"m":"prolapso","h1":"Casos Clínicos Simulados de Prolapso dos Órgãos Pélvicos","sub":"Treinamento ativo aplicando níveis de DeLancey, POP-Q, teste de IUE oculta e seleção cirúrgica.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Grande Cistocele e Incontinência Urinária de Esforço Mascarada • Paciente: • Raciocínio Clínico Crítico & Conduta FEBRASGO: • O Erro Clássico a Evitar: • dobramento mecânico (kinking) da uretra • Manobra Obrigatória no Consultório: • Teste de Redução do Prolapso • IUE Oculta Mascarada Positiva • Conduta Cirúrgica Combinada: • Correção do Prolapso com Suspensão Apical + Colocação Simultânea de Sling Suburetral Sintético (TVT ou TOT) • Caso 2: Paciente Idosa com Alto Risco Cirúrgico e Tratamento com Pessário • Conduta Ambulatorial Baseada em Evidências: • Cura Prévia da Úlcera de Decúbito: • creme vaginal de estriol ou promestrieno por 2 a 3 semanas"},"prolapso-prescricao":{"m":"prolapso","h1":"Guia Rápido de Prescrições & Doses em Prolapso Genital","sub":"Tabela de bolso com medicações tópicas, cuidados com pessários e orientações pós-operatórias.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Medida Terapêutica • Mecanismo & Indicação Principal • Posologia Prática Recomendada • Alertas Clínicos & Cuidados • Estriol Creme Vaginal 1 mg/g • 1 aplicador vaginal cheio (0,5 a 1 mg) à noite • 2 a 3 vezes por semana • Promestrieno Creme 10 mg/g / Óvulo 10 mg • Pessário Vaginal de Silicone • Laxativos Osmóticos • PEG 4000: 10 a 20 g VO ao dia diluído em água; ou Lactulose 15 a 30 mL VO ao dia."},"saudeintegral-visao-geral":{"m":"saudeintegral","h1":"A Consulta Ginecológica Integral & Prevenção Quaternária","sub":"Capítulos 4 a 9 FEBRASGO • Diretrizes SBIm / MS • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"🛡️ O CONCEITO DE PREVENÇÃO QUATERNÁRIA (JAMOULLE & FEBRASGO): • identificar indivíduos em risco de sobremedicalização • Fundamentos Teóricos & Roteiro Prático • Ambiente de Escuta Ativa: • Consentimento e Exame Físico Compartilhado: • Determinantes Sociais & Diversidade: • O Que Evitar na Rotina Ginecológica Assintomática • NÃO solicitar Ultrassonografia Transvaginal \"de rotina\" • NÃO solicitar dosagem de CA-125 • NÃO solicitar perfil hormonal esteroidal • NÃO colher preventivo em mulheres < 25 anos • Calendário Vacinal da Mulher, Prevenção Quaternária & Saúde LGBTQIAPN+ • Abrir em Tela Cheia • Infográfico HD"},"saudeintegral-vacinacao":{"m":"saudeintegral","h1":"Calendário Vacinal da Mulher Adulta, Gestante e Idosa","sub":"Diretrizes SBIm / FEBRASGO 2024 • Atualização MS • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Atualização SUS (2024): DOSE ÚNICA • 9 a 14 anos • Imunossuprimidos (9 a 45 anos): • 3 doses (0, 2 e 6 meses) • Vacina Nonavalente (Privado): • Mulheres com Histórico de Lesão Cervical: • dTpa (Tríplice Acelular do Adulto): • NA GESTAÇÃO: Uma dose de dTpa OBRIGATÓRIA A CADA GRAVIDEZ • Hepatite B: • Tríplice Viral (Sarampo, Caxumba, Rubéola): • FORMALMENTE CONTRAINDICADA NA GESTAÇÃO • Influenza & Covid-19: • Vacina Herpes Zóster Recombinante (Shingrix): • ≥ 50 anos • Pneumocócicas Conjugada e Polissacarídica (VPC13/15 + VPP23):"},"saudeintegral-lgbt":{"m":"saudeintegral","h1":"Saúde Ginecológica da População LGBTQIAPN+","sub":"Atenção à Diversidade • Diretrizes FEBRASGO & WPATH • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • O Mito do \"Não Precisa de Preventivo\": • A transmissão do Papilomavírus Humano (HPV) ocorre comprovadamente entre mulheres • Rastreamento do Câncer Cervical MANTIDO: • Prevenção de ISTs: • Fatores de Risco de Saúde Geral: • A Testosterona NÃO é Método Anticoncepcional! • Métodos Contraceptivos Compatíveis: • Síndrome Geniturinária & Atrofia Vaginal Severa: • Estriol ou Promestrieno vaginal por 10 a 14 dias antes do exame preventivo • espéculo de calibre virgem ou pediátrico • Rastreamento de Câncer de Mama:"},"saudeintegral-prevencao-quaternaria":{"m":"saudeintegral","h1":"Prevenção Quaternária: Guia do Que NÃO Fazer em Ginecologia","sub":"Choosing Wisely • Segurança do Paciente • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • USG Transvaginal em Pacientes Assintomáticas Jovens: • CA-125 de Rotina: • Exame de Papanicolau Anual após 2 Controles Negativos: • a cada 3 anos • Toque Vaginal em Pacientes Pré-Púberes ou sem Queixas Pélvicas: • Tratamento de Vaginose ou Candidíase Assintomática: • Uso Indiscriminado de Terapia Hormonal no Climatério: • Cauterização de Ectopia Cervical Fisiológica:"},"saudeintegral-especificidades":{"m":"saudeintegral","h1":"Acessibilidade, Saúde da Mulher Idosa & Populações Vulneráveis","sub":"Acessibilidade & Equidade • SUS • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Consultórios com macas elétricas articuladas de altura regulável para transferência segura da cadeira de rodas. • Utilização de perneiras acolchoadas e técnicas de posicionamento adaptadas a contraturas musculares ou espasticidade. • Tempo de consulta ampliado para evitar pressa ou constrangimento. • Atrofia urogenital severa com estenose do canal vaginal e retração himenal. • Utilização sistemática de espéculos de menor diâmetro (tamanho P ou virgem) abundantemente lubrificados com soro morno ou gel e... • Vigilância para estenose de canal cervical na investigação de sangramento pós-menopausa."},"saudeintegral-fluxogramas":{"m":"saudeintegral","h1":"Fluxograma do Calendário Vacinal Sistematizado da Mulher","sub":"Algoritmo Interativo • Diretrizes SBIm / FEBRASGO • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretrizes & Fundamentos dos Algoritmos • Calendário Vacinal da Mulher, Prevenção Quaternária & Saúde LGBTQIAPN+ • Abrir em Tela Cheia • Infográfico HD"},"saudeintegral-tabelas":{"m":"saudeintegral","h1":"Matriz Vacinal da Mulher & Rastreamento em Indivíduos Trans","sub":"Tabelas de Diretrizes Clínicas • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Calendário Vacinal Completo da Mulher Adulta e Gestante (SBIm / FEBRASGO 2024) • Vacina • Esquema Recomendado • Público-Alvo / Faixa Etária • Segurança na Gestação • Particularidades Clínicas • HPV Quadrivalente • Suspender / Adiar • dTpa (Tríplice Acelular) • RECOMENDADA E OBRIGATÓRIA • Hepatite B Recombinante • RECOMENDADA • Tríplice Viral (SRC) • CONTRAINDICADA FORMALMENTE • Herpes Zóster Recombinante (Shingrix) • Influenza (Gripe) • Tabela 2: Guia de Rastreamento Preventivo em Indivíduos Transgênero • Tabela de Referência & Classificação Clínica • População Trans • Órgão / Tecido Presente • Protocolo de Rastreamento Oncológico"},"saudeintegral-casos":{"m":"saudeintegral","h1":"Casos Clínicos Simulados & Guia de Prescrição Integral","sub":"Casos Clínicos & Prescrição Prática • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Homem Trans em Uso de Testosterona Comparece para Exame Preventivo • História Clínica: • Exame Físico Inicial: • Conduta Correta & Discussão Baseada em Evidências: • 1. Reconhecimento da Fisiopatologia: • Síndrome Geniturinária Grave induzida pelo hipoestrogenismo severo da testosterona exógena • 2. Conduta Propedêutica Programada: • Prescrever Creme Vaginal de Estriol a 0,1% ou Promestrieno a 1% • Reagendar o procedimento após o ciclo de preparo epitelial. No retorno, utilizar espéculo pediátrico/virgem • 3. Orientação Anticoncepcional Mandatória: • Informar com clareza técnica que a testosterona NÃO protege contra a gravidez"},"sop-rotterdam":{"m":"sop","h1":"Critérios Diagnósticos de Rotterdam & Os 4 Fenótipos da SOP","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 42) e na Diretriz Internacional Baseada em Evidências (Teede et al., 2023).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Conceito Fundamental de Prova & Prática Médica: • 8% a 13% • pelo menos 2 dos 3 critérios de Rotterdam • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Conceito & Fisiopatologia Neuroendócrina: • 2. O Papel da Resistência Insulínica & SHBG: • 3. Critérios Diagnósticos de Rotterdam (Presença de 2 de 3): • Oligo/anovulação crônica: • Hiperandrogenismo clínico e/ou laboratorial: • Morfologia de Ovários Policísticos ao USG: • 4. Diagnósticos Diferenciais Obrigatórios: • Roteiro Semiológico: Sinais, Sintomas & Fenótipos da SOP • 1. Padrão Menstrual Anovulatório (Oligomenorreia / Amenorreia): • Frequência & Intervalo: • Duração do Fluxo: • Início:"},"sop-diferencial":{"m":"sop","h1":"Diagnóstico Diferencial Mandatório: O que Excluir Antes do Diagnóstico","sub":"A SOP é um diagnóstico de exclusão obrigatória de outras endocrinopatias (Capítulo 43 FEBRASGO).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Diagnóstico Diferencial & Rastreamento de Alertas Vermelhos • Quadro Clínico de Exclusão Mandatória • Exame: • 17-Hidroxiprogesterona (17-OHP) • > 1.000 ng/dL: • Exames: • TSH e Prolactina • Alertas Clínicos e Laboratoriais Críticos: • clitoromegalia (> 10 mm) • Testosterona Total > 150 a 200 ng/dL • DHEAS > 700 a 800 mcg/dL • Triagem: • Tabela Comparativa de Diagnóstico Diferencial Mandatório na Suspeita de SOP • Patologia de Exclusão • Exame Diagnóstico Inicial • Ponto de Corte / Critério de Alarme • Conduta Médica Específica • Hiperplasia Adrenal Congênita Não Clássica (HAC-NC) • > 1000 ng/dL: Confirmação diagnóstica"},"sop-metabolico":{"m":"sop","h1":"Rastreamento Cardiometabólico & Proteção Endometrial","sub":"A SOP como distúrbio metabólico sistêmico e o risco oncogênico da anovulação crônica prolongada.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Avaliação Metabólica & Proteção do Endométrio • Parâmetros de Rastreamento Metabólico e Proteção Endometrial • Domínio de Avaliação • Exame / Parâmetro • Valores Alterados na SOP • Conduta Médica Recomendada • Metabolismo Glicêmico • TOTG 75g (Glicemia de Jejum e 2 horas) • 2h ≥ 140 mg/dL • 2h ≥ 200 mg/dL • Metformina (1.500 a 2.000 mg/dia) • Perfil Lipídico • Síndrome Metabólica (Critérios ATP-III) • Risco de Câncer de Endométrio • O risco de Adenocarcinoma Endometrial é aumentado de 3 a 5 vezes! • Biópsia Endometrial • Jejum ≥ 100 mg/dL ou 2h ≥ 140 mg/dL (intolerância à glicose) ou 2h ≥ 200 mg/dL (DM2)"},"sop-hirsutismo":{"m":"sop","h1":"Manejo do Hiperandrogenismo Cutâneo: Hirsutismo, Acne & Alopecia","sub":"Mecanismos androgênicos, Índice de Ferriman-Gallwey e seleção de terapias antiandrogênicas.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Manejo Escalonado do Hiperandrogenismo Cutâneo • Arsenal Farmacológico no Combate ao Hiperandrogenismo • SHBG • Drospirenona (3 mg) • Acetato de Ciproterona (2 mg) • ALERTA ABSOLUTO: • SEMPRE associar contracepção eficaz! • 6 a 9 meses • Escore de Ferriman-Gallwey Modificado (mFG) & Classificação do Hirsutismo • 9 áreas corporais androgênio-dependentes • ponto de corte ≥ 8 pontos • Topografia Avaliada (9 Áreas) • Grau 1 (Leve) • Grau 2 (Moderado) • Grau 3 (Intenso) • Grau 4 (Severo / Confluente) • 1. Lábio Superior (Bigode) • 2. Queixo (Mento) • 3. Tórax (Pré-Esternal) • 4. Abdome Superior (Supraumbilical) • 5. Abdome Inferior (Infraumbilical)"},"sop-disfuncao-menstrual":{"m":"sop","h1":"Manejo da Disfunção Menstrual na Paciente sem Desejo Reprodutivo","sub":"Escolha individualizada entre AOCs, progestagênios orais cíclicos/contínuos e SIU de levonorgestrel.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma de Seleção Terapêutica para Regularização Menstrual • Comparativo das Opções de Manejo Menstrual • Opção Farmacológica • Indicação Preferencial • Regime Posológico • Vantagens & Limitações • AOC Combinado Antiandrogênico • Progestagênio Oral Cíclico • 12 a 14 dias a cada 1 a 2 meses • Progestagênio Contínuo Oral • SIU de Levonorgestrel (Mirena 52 mg) • Progestagênio Oral Cíclico (ex.: Medroxiprogesterona 10 mg ou Progesterona Micronizada 200 mg) • Progestagênio Contínuo Oral (ex.: Drospirenona 4 mg ou Desogestrel 75 mcg)"},"sop-inducao-ovulacao":{"m":"sop","h1":"SOP & Desejo Reprodutivo: Indução da Ovulação Passo a Passo","sub":"A anovulação crônica na SOP e o algoritmo moderno de reprodução assistida (Capítulo 50 e 51 FEBRASGO / Teede 2023).","flow":1,"info":0,"presc":1,"caso":0,"kw":"Fluxograma de Indução da Ovulação na SOP com Desejo de Gestação • Escalonamento Terapêutico na Infertilidade Anovulatória por SOP • Linha Terapêutica • Modalidade & Fármaco • Regime e Posologia • Evidência Científica / Justificativa • Pré-Tratamento Universal • Redução de Peso & MEV + Ácido Fólico • 1ª Linha Farmacológica • LETROZOL (Inibidor da Aromatase) • 2,5 a 5,0 mg VO 1x/dia • Padrão-ouro internacional absoluto • 2ª Linha Farmacológica • Citrato de Clomifeno • Gonadotrofinas (rFSH em baixa dose) • 2ª Linha Cirúrgica • Drilling Ovariano Laparoscópico • 3ª Linha (Alta Complexidade) • Fertilização in Vitro (FIV com ICSI) • Gatilho de maturação com Agonista de GnRH"},"sop-casos":{"m":"sop","h1":"Casos Clínicos Simulados de SOP & Hiperandrogenismo","sub":"Treinamento ativo aplicando critérios de Rotterdam, diagnóstico de exclusão e decisões terapêuticas.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Jovem com Queixa de Acne, Pelos e Menstruação Irregular (Fenótipo A) • Paciente: • Diagnóstico & Conduta FEBRASGO: • Diagnóstico: • Síndrome dos Ovários Policísticos - Fenótipo A (Completo) • Achado Metabólico Crítico: • Intolerância à Glicose • Conduta Multidisciplinar Imediata: • Mudança do Estilo de Vida (MEV): • Metformina (500 mg VO 2x/dia após as refeições, aumentando para 1.500 mg/dia): • Anticoncepcional Oral Combinado Antiandrogênico (Etinilestradiol 30 mcg + Drospirenona 3 mg): • Caso 2: Alerta Vermelho - Virilização Rápida vs. SOP • Testosterona Total = 265 ng/dL • ALERTA CLÍNICO - ISTO NÃO É SOP: • Justificativa:"},"sop-prescricao":{"m":"sop","h1":"Guia Rápido de Prescrições & Doses Práticas em SOP","sub":"Tabela de bolso com fármacos essenciais, posologias, mecanismos e alertas clínicos.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Classe • Mecanismo & Indicação Principal • Posologia Prática • Alertas Clínicos & Cuidados • Drospirenona 3 mg + Etinilestradiol 30 mcg • Acetato de Ciproterona 2 mg + Etinilestradiol 35 mcg • Espironolactona • 50 a 100 mg VO 1x ao dia • Risco teratogênico • Metformina • 1.500 a 2.000 mg/dia • Letrozol • 2,5 mg a 5,0 mg VO 1x ao dia • Acetato de Medroxiprogesterona • 10 mg VO 1x ao dia por 12 a 14 dias • Drospirenona 3 mg + Etinilestradiol 30 mcg (AOC Antiandrogênico) • 1 comprimido VO ao dia por 21 dias consecutivos com 7 dias de pausa (ou esquema 24/4)."},"spm-visao-geral":{"m":"spm","h1":"Visão Geral & Fisiopatologia da SPM e do TDPM","sub":"Capítulo 31 FEBRASGO • Neuroendocrinologia • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"️ O Conceito Fundamental da Fisiopatologia: • NÃO possuem desequilíbrio ou deficiência hormonal periférica • vulnerabilidade biológica central e resposta neural anormal • Condição *Sine Qua Non*: • ciclos ovulatórios com formação de corpo lúteo • Fundamentos Teóricos & Roteiro Prático • Transtorno Disfórico Pré-Menstrual (TDPM) • alopregnanolona • Em mulheres com predisposição genética ao TDPM, ocorre uma plasticidade paradoxal anômala dos receptores GABA-A (subunidade α4 ... • A rápida queda da alopregnanolona na fase lútea tardia desencadeia um estado semelhante à crise de abstinência de benzodiazepín... • serotonina (5-HT)"},"spm-semiologia":{"m":"spm","h1":"Roteiro Semiológico da Síndrome Pré-Menstrual","sub":"Roteiro Semiológico • Fase Lútea Tardia • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • natureza dos sintomas • relação temporal invariável com as fases do ciclo • impacto na funcionalidade da mulher • Fase Lútea Tardia (Período Sintomático): • Remissão Rápida: • Fase Folicular (Intervalo Assintomático Obrigatório): • DEVE estar completamente assintomática por pelo menos 7 dias consecutivos • Sintomas Afetivos & Psíquicos Nucleares: • Sintomas Somáticos & Comportamentais:"},"spm-criterios":{"m":"spm","h1":"Critérios Diagnósticos Oficiais: SPM vs TDPM","sub":"Critérios Diagnósticos • ACOG & DSM-5-TR • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretriz Visual Integrada: Diagnóstico & Manejo da SPM / TDPM • Abrir em Tela Cheia • Infográfico HD • Fundamentos Teóricos & Roteiro Prático • 1 sintoma afetivo ou somático • 3 ciclos menstruais consecutivos • Afetivos: depressão, explosões de raiva, irritabilidade, ansiedade, confusão, isolamento social. • Somáticos: mastalgia, distensão abdominal, cefaleia, edema de extremidades. • Alívio dos sintomas dentro de 4 dias após o início da menstruação, sem recorrência até pelo menos o 12º dia do ciclo. • Presença de prejuízo identificável nas atividades interpessoais, sociais ou ocupacionais. • Critérios DSM-5-TR para TDPM (Forma Grave) • 5 de 11 sintomas"},"spm-manejo-farmacologico":{"m":"spm","h1":"Terapêutica Farmacológica no TDPM: ISRS & Supressão Ovariana","sub":"Farmacoterapia de 1ª Linha • Padrão-Ouro • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":1,"caso":0,"kw":"🚫 Erro Grave Comum de Prova: • progesterona natural micronizada ou progestagênios isolados • Fundamentos Teóricos & Roteiro Prático • Drogas de Escolha: • Fluoxetina: • Sertralina: • Escitalopram: • Regimes de Posologia: • Vantagens: • ACO com Drospirenona 3 mg + Etinilestradiol 20 mcg (24+4 ou contínuo): • única formulação oral aprovada pelo FDA e ANVISA • Análogos do GnRH (Goserrelina 3,6 mg SC mensal):"},"spm-nao-farmacologico":{"m":"spm","h1":"Estilo de Vida, Psicoterapia & Nutracêuticos na SPM","sub":"Medidas Não Farmacológicas • Nutracêuticos • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":1,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Atividade Física Aeróbica Regular: • Reeducação Dietética: • Terapia Cognitivo-Comportamental (TCC): • Carbonato de Cálcio (1.200 mg/dia VO): • Vitamina B6 / Piridoxina (50 a 100 mg/dia VO): • Nunca ultrapassar a dose de 100 mg/dia • Magnésio Quelato (200 a 400 mg/dia VO): • Espironolactona (25 a 50 mg/dia VO na fase lútea):"},"spm-tabelas":{"m":"spm","h1":"Tabelas Clínicas de Apoio Diagnóstico & Farmacológico","sub":"Síntese Diagnóstica • DSM-5 & ACOG • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Diagnóstico Diferencial entre SPM, TDPM e Exacerbação Pré-Menstrual (PME) • Critério • Síndrome Pré-Menstrual (SPM) • Transtorno Disfórico (TDPM) • Exacerbação Pré-Menstrual (PME) • Intensidade dos Sintomas • Sintomas Nucleares • Intervalo Folicular Assintomático • Presente • AUSENTE! • Conduta Principal • Tabela 2: Comparativo dos ISRS no Manejo do TDPM • Tabela de Referência & Classificação Clínica • ISRS • Dose Terapêutica • Regime Preferencial • Perfil de Efeitos Adversos & Particularidades • Fluoxetina • Sertralina • Escitalopram • Paroxetina • 20 mg/dia • 50 a 100 mg/dia • 10 a 20 mg/dia"},"spm-casos":{"m":"spm","h1":"Casos Clínicos Simulados: SPM & TDPM","sub":"Casos Clínicos Interativos • Discussão Baseada no Algoritmo • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Mulher de 28 Anos com Conflitos Conjugais Graves e Diário DRSP Positivo • História Clínica: • Exame Físico & Laboratório: • Conduta Correta & Discussão Baseada em Evidências: • Transtorno Disfórico Pré-Menstrual (TDPM) • Documentação prospectiva com diário DRSP em 2 ciclos consecutivos. • Presença de sintomas nucleares afetivos (irritabilidade explosiva, labilidade, raiva e sentimento de desvalia) somados a sintom... • Intervalo assintomático inequívoco na fase folicular. • Prejuízo social, conjugal e laboral severo demonstrado. • Conduta Inicial de 1ª Linha: • Prescrever Inibidor Seletivo da Recaptação de Serotonina: Cloridrato de Fluoxetina 20 mg/dia VO"},"spm-prescricao":{"m":"spm","h1":"Guia de Prescrição Médica na SPM e TDPM","sub":"Prescrição Prática • FEBRASGO & Psiquiatria • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":1,"caso":0,"kw":"1. Protocolo de 1ª Linha para TDPM: ISRS em Fase Lútea (Intermitente) • 2. Protocolo de Supressão Ovariana com Drospirenona (24+4) • Cloridrato de Piridoxina (Vitamina B6) 50 mg • 3. Protocolo de Alívio para Mastalgia e Edema Severos de Fase Lútea"},"sua-parametros":{"m":"sua","h1":"Sangramento Uterino Anormal (SUA): Parâmetros & Conceitos","sub":"Baseado no Tratado de Ginecologia FEBRASGO (2ª edição, Capítulos 20, 21 e 45).","flow":0,"info":1,"presc":0,"caso":0,"kw":"Conceito & Definição FIGO 2018: • Parâmetros Fisiológicos do Ciclo Menstrual Normal (Consenso FIGO 2018) • Eixo Menstrual • Parâmetro Normal (FIGO 2018) • Alteração / Nomenclatura Atual • Critério Semiológico de Anormalidade • Frequência • 24 a 38 dias • Duração • Até 8 dias • Regularidade • ≤ 7 a 9 dias • Volume • Critério Prático Semiológico: • Roteiro Semiológico Padronizado: Investigação do Sangramento Uterino Anormal • 1. Caracterização Minuciosa do Padrão de Sangramento: • Frequência & Periodicidade: • Intensidade & Volume: • Duração do Episódio: • Sintomas Associados: • 2. Rastreamento Dirigido de Coagulopatias (Critérios do CDC / FIGO):"},"sua-fluxograma-geral":{"m":"sua","h1":"Algoritmo Geral de Triagem & Decisão no SUA","sub":"Estratificação hierárquica passo a passo: Estabilidade Hemodinâmica → Exclusão de Gestação → PALM-COEIN → Propedêutica Endometrial.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Regra de Ouro Propedêutica: • Teste de Gravidez (Beta-hCG sérico ou urinário) • Passo a Passo de Triagem Clínica no Pronto-Socorro e Ambulatório • Beta-hCG obrigatório • SUA Agudo: • SUA Crônico: • 6 meses • Ultrassonografia Transvaginal (USTV) • Idade ≥ 45 anos • < 45 anos com fatores de risco • Diretriz Visual Integrada: Classificação & Manejo do SUA • Abrir em Tela Cheia • Infográfico HD"},"sua-palm-coein":{"m":"sua","h1":"Sistema de Classificação PALM-COEIN (FIGO / FEBRASGO)","sub":"Etiologias estruturais (visíveis em imagem e anatomopatológico) versus causas não estruturais funcionais ou sistêmicas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Detalhamento das 9 Categorias Etiológicas (FIGO 2018) • Grupo • Letra / Categoria • Fisiopatologia & Diagnóstico • Abordagem Terapêutica Específica • P - Pólipo (SUA-P) • A - Adenomiose (SUA-A) • L - Leiomioma (SUA-L) • L-SM (Submucosos FIGO 0, 1, 2) • L-O (Outros: intramurais e subserosos FIGO 3 a 8) • M - Malignidade / Hiperplasia (SUA-M) • C - Coagulopatia (SUA-C) • O - Disfunção Ovulatória (SUA-O) • E - Disfunção Endometrial (SUA-E) • Primeira linha não hormonal: • Primeira linha hormonal: • I - Iatrogênica (SUA-I) • N - Não Classificado (SUA-N) • DIU-LNG 52 mg, Dienogeste 2 mg/dia, análogos GnRH ou Histerectomia se prole constituída e refratariedade."},"sua-propedêutica":{"m":"sua","h1":"Propedêutica, USTV & Critérios de Biópsia Endometrial","sub":"Critérios rigorosos da FEBRASGO e ACOG para investigação histopatológica do endométrio.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios de Corte para Biópsia Endometrial: • ≥ 45 anos • < 45 anos • > 4 mm • > 8 mm • Métodos Diagnósticos: Propedêutica Armada em SUA • Padrão-ouro"},"sua-agudo":{"m":"sua","h1":"Manejo de Emergência do SUA Agudo","sub":"Conduta médica imediata diante do sangramento genital abundante com repercussão volêmica (FEBRASGO Cap. 45).","flow":1,"info":0,"presc":1,"caso":0,"kw":"Protocolo de Reanimação Hemodinâmica: • Arsenal Terapêutico Farmacológico no SUA Agudo Grave • Linha Terapêutica • Opção Farmacológica • Posologia Detalhada • Mecanismo & Observações Clínicas • Hemostático Sistêmico • Ácido Tranexâmico • 1 g (2 ampolas de 500 mg) EV lento • Estrogênioterapia Rápida • Estrogênios Conjugados Equinos (ECE) EV • 25 mg EV em bolus lento • ACO Combinado Oral (Esquema Tapering) • 1 comprimido a cada 6 a 8 horas • Progestagênio em Alta Dose • Medidas Mecânicas & Cirúrgicas de Resgate (Sangramento Refratário): • Tamponamento Intrauterino com Cateter de Foley (Técnica de Ouro no PS): • 30 a 50 mL de soro fisiológico estéril"},"sua-cronico":{"m":"sua","h1":"Tratamento Clínico e Cirúrgico do SUA Crônico","sub":"Estratégias de manutenção baseadas no desejo reprodutivo da paciente e etiologia do PALM-COEIN.","flow":1,"info":0,"presc":1,"caso":0,"kw":"Escalonamento Terapêutico no SUA Crônico (FEBRASGO & NICE) • Modalidade Terapêutica • Fármaco / Procedimento • Posologia & Mecanismo • Redução Média de Sangramento • 1ª Escolha Hormonal (Padrão-Ouro) • DIU de Levonorgestrel 52 mg • Redução de 71% a 95% do volume menstrual • 1ª Escolha Não Hormonal • Ácido Tranexâmico Oral • Redução de 40% a 55% do volume menstrual • Anti-inflamatórios (AINEs) • Ácido Mefenâmico 500 mg • Ibuprofeno 600 mg • Redução de 30% a 40% do volume menstrual • Anticoncepcionais Orais • Progestagênios Orais Contínuos • Tratamento Cirúrgico Conservador • Não é método contraceptivo definitivo • Tratamento Cirúrgico Definitivo"},"sua-estruturais":{"m":"sua","h1":"Miomas Uterinos & Escore STEPW de Lasmar","sub":"Classificação FIGO 0-8 e escore histeroscópico preditivo de viabilidade cirúrgica (FEBRASGO Cap. 32 e 45).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Escore de Lasmar (STEPW) para Miomectomia Histeroscópica • Critério Avaliado (STEPW) • 0 Pontos • 1 Ponto • 2 Pontos • S - Size (Tamanho do nódulo) • T - Topography (Topografia no útero) • E - Extension of base (Extensão da base) • P - Penetration (Penetração no miométrio) • W - Wall (Parede acometida) • Classificação dos Grupos de Complexidade de Lasmar & Conduta: • Grupo I (0 a 4 pontos) - Baixa Complexidade: • Grupo II (5 a 6 pontos) - Média Complexidade: • Grupo III (7 a 9 pontos) - Alta Complexidade: • Grupo IV (10 a 14 pontos) - Ressecção Não Recomendada:"},"sua-casos-clinicos":{"m":"sua","h1":"Casos Clínicos Simulados de SUA","sub":"Aplicações práticas dos critérios diagnósticos e terapêuticos baseados nas recomendações da FEBRASGO.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Paciente de 48 anos com Sangramento Volumoso e Obesidade • História Clínica: • Exame Físico Ginecológico: • Exames Complementares: • 16 mm • Diagnóstico Propedêutico: • Conduta Sequencial Recomendada: • Biópsia Endometrial Obrigatória: • Controle Imediato do Sangramento e Anemia: • Conduta Definitiva Pós-Biópsia: • Inserção de DIU de Levonorgestrel 52 mg (Mirena®) • Caso 2: Adolescente de 15 anos com SUA Agudo Grave e Hemorragia desde a Menarca • Exame Físico na Admissão: • Exames Laboratoriais de Urgência: • Diagnóstico Clínico: • Coagulopatia Primária (SUA-C - forte suspeita de Doença de von Willebrand) • Conduta de Emergência Sequencial:"},"sua-guia-prescricao":{"m":"sua","h1":"Guia Rápido de Prescrições em SUA","sub":"Tabela de doses e protocolos terapêuticos de emergência e ambulatoriais baseados na FEBRASGO.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela Terapêutica Completa no Sangramento Uterino Anormal • Fármaco & Apresentação • Cenário Clínico / Indicação • Posologia Detalhada • Mecanismo de Ação • Contraindicações Formais & Cuidados • Ácido Tranexâmico EV / VO • Estrogênios Conjugados Equinos EV • ACO Combinado Monofásico • Acetato de Noretisterona 5 mg • DIU de Levonorgestrel 52 mg • Ácido Mefenâmico 500 mg • Dienogeste 2 mg • Sulfato Ferroso 40 mg de Fe elementar • Ácido Tranexâmico EV / VO (Transamin® 500 mg comp / 250 mg ampola) • Estrogênios Conjugados Equinos EV (Premarin® 25 mg injetável) • 25 mg EV em bolus lento de 4/4h ou 6/6h por até 24 horas (máx. 4 a 6 doses). Parar assim que o fluxo estancar."},"trhav-androgenios":{"m":"trhav","h1":"Testosterona e Androgênios na Mulher: Fisiopatologia, Ação Receptorial e Indicação no TDSH","sub":"Baseado no Tratado de Ginecologia FEBRASGO (Capítulo 47) e no Global Position Statement on Testosterone Therapy for Women (2019/2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Alerta Regulatório Crítico (FEBRASGO, CFM & ANVISA): • única indicação formal respaldada por evidências científicas de nível I • Transtorno do Desejo Sexual Hipoativo (TDSH) na pós-menopausa • terminantemente repudiados e proibidos • Visão Geral & Fundamentos Teóricos (FEBRASGO) • 1. Fisiologia Androgênica Feminina: • 2. O Declínio Androgênico Fisiológico com a Idade: • 3. O Consenso Global de Testosterona (2019 / FEBRASGO): • A Única Indicação Aprovada com Nível 1 de Evidência: • Transtorno do Desejo Sexual Hipoativo (TDSH) • pós-menopausa • Práticas Sem Evidência e Proscritas: • 4. Segurança Farmacológica & Contraindicações Absolutas:"},"trhav-monitoramento":{"m":"trhav","h1":"Monitoramento Laboratorial, Curva de Segurança e Critérios de Resposta Terapêutica","sub":"Protocolo de acompanhamento biológico, calibração androgênica e regras de descontinuação (FEBRASGO Cap. 47).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Regra de Ouro do Monitoramento Androgênico: • não são usados para fazer diagnóstico de hipoandrogenismo • 3 a 6 semanas • garantir segurança biológica • Fluxograma de Monitoramento Bioquímico, Metas Séricas e Algoritmo de Descontinuação • Sinais Clínicos de Alerta & Metas Laboratoriais de Segurança • Parâmetro Avaliado • Momento da Avaliação • Meta Terapêutica de Segurança • Conduta se Fora da Faixa • Testosterona Total • reduzir a dose pela metade imediatamente • SHBG (Globulina Ligadora) • Exame Dermatológico • Sinais de Virilização Grave • EMERGÊNCIA ENDÓCRINA: • irreversíveis • Critério de Resposta em 6 Meses • Se após 6 meses não houver melhora clínica: SUSPENDER!"},"trhav-sangramento":{"m":"trhav","h1":"Sangramento Uterino Inesperado em Usuárias de TRH: Investigação e Conduta","sub":"Algoritmo propedêutico para sangramento precoce vs tardio, avaliação ultrassonográfica e histeroscopia (FEBRASGO Cap. 57).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Diferenciação Cronológica Crucial: • 3 a 6 meses • após 6 meses de uso contínuo • exigem investigação imediata com Ultrassonografia Transvaginal • Fluxograma de Investigação Estratificada do Sangramento em Usuárias de TRH • Critérios Propedêuticos & Pontos de Corte do Eco Endometrial • Achado no USG Transvaginal • Interpretação Clínica • Conduta Recomendada FEBRASGO • Eco Endometrial ≤ 4 a 5 mm (linear e homogêneo) • Eco Endometrial > 4 a 5 mm ou Espessado Heterogêneo • Histeroscopia Diagnóstica com Biópsia Dirigida • Pólipo Endometrial Identificado • Polipectomia Histeroscópica Cirúrgica • Hiperplasia Sem Atipia no Laudo • SIU-LNG 52 mg"},"trhav-osteoporose":{"m":"trhav","h1":"Saúde Óssea, Osteoporose e Prevenção de Fraturas na Pós-Menopausa","sub":"Integração entre TRH, Densitometria Óssea (DMO), escores FRAX e terapias antirreabsortivas (FEBRASGO & IOF).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Impacto Ósseo da TRH Baseado em Evidências: • 30% a 40% • janela de oportunidade • Fluxograma de Rastreamento de DMO, Classificação T-Score e Escolha Farmacológica • Classificação Densitométrica OMS & Escalonamento Terapêutico • Classificação OMS • Critério Densitométrico (T-Score) • Estratégia Terapêutica Recomendada • DMO Normal • Osteopenia • FRAX Brasil • TRH sistêmica • Osteoporose Estabelecida • TRH • Bifosfonatos orais (Alendronato 70 mg/sem) • Ácido Zoledrônico 5 mg IV anual • Osteoporose Grave com Fratura por Fragilidade • Teriparatida"},"trhav-efeitos":{"m":"trhav","h1":"Ajuste Fino de Doses, Efeitos Adversos Comuns e Soluções Clínicas","sub":"Manejo ambulatorial de mastalgia, retenção hídrica, cefaleia, queixas androgênicas e seleção ideal de progestagênios.","flow":1,"info":0,"presc":1,"caso":0,"kw":"Princípio Terapêutico Individualizado: • dose de estrogênio para a menor posologia eficaz • migração da via oral para transdérmica • seleção de progestagênios mais neutros • Fluxograma de Resolução de Efeitos Adversos Comuns na TRH • Matriz de Soluções Clínicas para Intercorrências Ambulatoriais Comuns • Efeito Adverso Relatado • Causa Fisiopatológica Mais Provável • Ajuste Terapêutico Recomendado FEBRASGO • Mastalgia / Sensibilidade Mamária • Edema e Ganho Ponderal Subjetivo • Estradiol Transdérmico • Drospirenona • Cefaleia / Enxaqueca Menstrual na Pausa • Regime Contínuo Combinado • Sonolência Excessiva Diurna • ao deitar-se (à noite) • por via vaginal"},"trhav-desmame":{"m":"trhav","h1":"Descontinuação, Duração da Terapia e Protocolos de Desmame Gradual","sub":"Critérios de continuidade sem limite arbitrário de idade, reavaliação anual risco-benefício e desmame escalonado (FEBRASGO & IMS/NAMS).","flow":1,"info":0,"presc":0,"caso":0,"kw":"Consenso Internacional IMS/NAMS & FEBRASGO: • reavaliação clínica anual individualizada da relação risco-benefício • desmame gradual é mandatório para prevenir o efeito rebote vasomotor • Fluxograma de Tomada de Decisão: Manutenção vs Desmame Gradual em Degraus • Comparação de Estratégias de Suspensão da Terapia Hormonal • Estratégia de Suspensão • Taxa de Recidiva Vasomotora (Rebote) • Protocolo Prático Recomendado FEBRASGO • Suspensão Abrupta (\"Cold Turkey\") • Alta (~50% de recidiva aguda) • DESACONSELHADA pela FEBRASGO! • Desmame Gradual por Redução de Dose (Degraus) • Baixa (~15% a 20%) • PADRÃO-OURO: • 25% a 50% a cada 2 a 3 meses • Desmame por Espaçamento de Dias"},"trhav-casos":{"m":"trhav","h1":"Casos Clínicos Simulados de Endocrinologia Ginecológica Avançada & TRH Especializada","sub":"Treinamento prático aplicando TDSH e androgênios, investigação de sangramento endometrial e desmame gradual.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: TDSH Pós-Menopausa em Usuária de TRH Padrão Buscando Testosterona • Paciente: • Conduta Padrão-Ouro Baseada em Evidências (FEBRASGO / Global Position Statement): • Confirmação Diagnóstica de TDSH: • Alerta e Rejeição Expressa do Implante (\"Chip da Beleza\"): • proibidos pela ANVISA e pelo CFM • Avaliação Laboratorial de Segurança: • Prescrição Baseada em Evidências: • Testosterona Gel Transdérmico a 1% • Seguimento Programado: • Caso 2: Sangramento Vaginal aos 9 Meses de TRH Combinada Contínua • Raciocínio Clínico FEBRASGO & Conduta Propedêutica Imediata: • Quebra do Padrão de Adaptação: • NÃO pode ser atribuído a mera adaptação endometrial benigna"},"trhav-prescricao":{"m":"trhav","h1":"Guia Rápido de Prescrições Especializadas, Doses e Alertas de Segurança (TRH Avançada)","sub":"Tabela prática de bolso com formulações androgênicas femininas, estrogênios em baixa dose, progestagênios puros e antirreabsortivos.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Guia Farmacológico & Prescrição Prática (FEBRASGO) • Fármaco / Formulação • Mecanismo & Indicação Específica • Posologia Prática Recomendada • Alertas de Segurança & Boas Práticas • Testosterona Gel Transdérmico 1% • 5 mg de gel ao dia (libera ~300 mcg/dia de testosterona) • 17-beta-estradiol Transdérmico Microdose • Progesterona Micronizada 100 mg / 200 mg • via vaginal • Drospirenona 2 mg / 3 mg • Alendronato de Sódio 70 mg • 1 comprimido de 70 mg por semana em jejum • Ácido Zoledrônico 5 mg IV • 5 mg IV em infusão de 15-30 minutos uma vez ao ano • Denosumabe 60 mg (Prolia) • 60 mg SC em dose única a cada 6 meses • Teriparatida 20 mcg (PTH Recombinante 1-34)"},"urocomplexa-visao-geral":{"m":"urocomplexa","h1":"Uroginecologia Complexa: O Urotélio Além da Incontinência Urinária","sub":"Capítulos 66, 67 e 69 FEBRASGO • IUGA / ICS • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Camada Protetora de GAGs (Glicocálix): • Células em Guarda-Chuva (Umbrella Cells): • A Eubiose Perineal e Vaginal: • 1. Infecção do Trato Urinário Recorrente (ITUR): • 2. Síndrome da Bexiga Dolorosa / Cistite Intersticial (SBD/CI): • 3. Fístulas Geniturinárias: • Abordagem de ITU Recorrente, Fístulas e Cistite Intersticial • Abrir em Tela Cheia • Infográfico HD"},"urocomplexa-itu":{"m":"urocomplexa","h1":"Infecção do Trato Urinário Recorrente (ITUR)","sub":"Infeccioso & Profilaxia • EAU / FEBRASGO • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"📋 CRITÉRIO DIAGNÓSTICO CONSENSUAL (EAU / FEBRASGO): • Pelo menos 2 episódios de cistite aguda comprovada em 6 meses; OU • Pelo menos 3 episódios em 12 meses • Fundamentos Teóricos & Roteiro Prático • A queda do estradiol menopausal provoca adelgaçamento do epitélio vaginal e esgotamento do glicogênio celular. • Sem glicogênio, os lactobacilos de Döderlein desaparecem e o pH vaginal sobe de 4,0 para > 5,5 a 6,5 • O ambiente neutro/alcalino permite a colonização maciça do intróito vulvar e meato uretral por enterobactérias fecais (principa... • O encurtamento da uretra feminina facilita a ascensão bacteriana até a bexiga. • Profilaxia Não-Antimicrobiana (1ª Linha)"},"urocomplexa-cistite-intersticial":{"m":"urocomplexa","h1":"Síndrome da Bexiga Dolorosa / Cistite Intersticial (SBD/CI)","sub":"Dor Pélvica Urológica • Síndrome da Bexiga Dolorosa • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Relação Temporal com o Enchimento Vesical: • ALIVIA DE FORMA IMEDIATA E DRAMÁTICA APÓS A MICÇÃO • Polaciúria Extrema: • Uroculturas Negativas: • Achados Cistoscópicos: • Manejo Farmacológico Consensual: • Amitriptilina (10 a 50 mg/dia VO à noite): • Pentosana Polissulfato de Sódio (100 mg 3x/dia): • Instilação Vesical:"},"urocomplexa-fistulas":{"m":"urocomplexa","h1":"Fístulas Urogenitais Femininas: Vesicovaginal vs Ureterovaginal","sub":"Complicação Cirúrgica • Diagnóstico Propedêutico • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"🧪 O TESTE DO TAMPÃO DE GAZE COM AZUL DE METILENO (DIAGNÓSTICO DIFERENCIAL): • Introduz-se uma gaze cirúrgica estéril no terço superior da vagina; • Instilam-se 150 a 200 mL de solução fisiológica com Azul de Metileno diluído • Solicita-se à paciente deambular por 15 a 20 minutos e remove-se a gaze vaginal para inspeção: • Se a gaze estiver CORADA EM AZUL: FÍSTULA VESICOVAGINAL (FVV) CONFIRMADA! • Se a gaze permanecer BRANCA (sem azul), mas estiver TOTALMENTE ÚMIDA DE URINA AMARELADA: FÍSTULA URETEROVAGINAL (FUV) CONFIRMADA! • Fundamentos Teóricos & Roteiro Prático • Tratamento Transvaginal (Técnica de Latzko): • Tratamento Transabdominal: • 2. Fístula Ureterovaginal (FUV)"},"urocomplexa-propedeutica":{"m":"urocomplexa","h1":"Propedêutica Especializada em Uroginecologia Complexa","sub":"Propedêutica Armada • Exames de Imagem • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Tomografia com contraste venoso iodado incluindo fase excretora tardia (10 a 15 minutos) • Evidencia extravasamento de contraste no trajeto ureteral e delimita hidronefrose retrógrada associada. • Identifica o orifício fistuloso vesical, sua relação espacial com a barra interuretérica e a viabilidade da mucosa. • Permite cateterismo ureteral seletivo retrógrado sob radioscopia. • Indicado previamente ao reparo de fístulas ou cirurgias de incontinência recidivante. • Mapeia hiperatividade detrusora oculta e avalia a pressão de perda sob esforço (VLPP)."},"urocomplexa-fluxogramas":{"m":"urocomplexa","h1":"Fluxograma de ITU Recorrente e Fístulas Geniturinárias","sub":"Algoritmo Interativo • Diretrizes IUGA / ICS • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretrizes & Fundamentos dos Algoritmos • Abordagem de ITU Recorrente, Fístulas e Cistite Intersticial • Abrir em Tela Cheia • Infográfico HD"},"urocomplexa-tabelas":{"m":"urocomplexa","h1":"Protocolos de Profilaxia na ITUR & Diferencial de Fístulas","sub":"Tabelas de Protocolos e Diagnóstico • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Estratégias Profiláticas na Infecção Urinária Recorrente • Modalidade Terapêutica • Fármaco & Dosagem • Mecanismo de Ação Protetor • Público-Alvo Preferencial • Estrogênio Tópico • D-Manose • Imunoprofilaxia (OM-89) • Profilaxia Antimicrobiana • Estriol 1 mg/g creme (2x a 3x/semana vaginal) • Uro-Vaxom 6 mg (1 cápsula/dia por 90 dias) • Nitrofurantoína 100 mg/dia ou Fosfomicina 3g a cada 10 dias"},"urocomplexa-casos":{"m":"urocomplexa","h1":"Casos Clínicos Simulados & Prescrição Uroginecológica","sub":"Casos Clínicos & Prescrição Prática • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Mulher de 62 Anos com 5 Episódios de Cistite no Último Ano • História Clínica: • Conduta Correta & Discussão Baseada em Evidências: • 1. Reconhecimento do Fator Causal: • Infecção do Trato Urinário Recorrente (ITUR) desencadeada pela Síndrome Geniturinária da Menopausa • 2. Conduta Terapêutica e Profilática de 1ª Linha: • Tratamento do Episódio Agudo: • Profilaxia Não-Antimicrobiana Mandatória: • Estrogênio Tópico Vaginal (Estriol 1 mg/g ou Promestrieno) • D-Manose 2 g/dia VO • Orientar ingesta hídrica adequada (> 2 litros/dia) e micção pós-coital. Evitar novos cursos empíricos de fluoroquinolonas."},"violencia-visao-geral":{"m":"violencia","h1":"Acolhimento Humanizado & Marco Ético-Legal na Violência Sexual","sub":"Capítulos 40 e 88 FEBRASGO • Ministério da Saúde • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":1,"presc":0,"caso":0,"kw":"⚖️ GARANTIAS LEGAIS MANDATÓRIAS (MINISTÉRIO DA SAÚDE & CÓDIGO PENAL): • Presunção de Veracidade da Palavra da Vítima: • Dispensa Legal de Autorização Judicial para Abortamento Legal: • Notificação Compulsória Imediata (SINAN): • 24 horas • Notificação ao Conselho Tutelar: • Fundamentos Teóricos & Roteiro Prático • Prioridade de Atendimento: • Comunicação Não Inquisitória: • Preservação da Autonomia: • Até 72 Horas: • 73 a 120 Horas: • Após 120 Horas / Crônico: • Mapa Visual & Infográfico Clínico: Acolhimento e Profilaxias na Violência Sexual • Abrir em Tela Cheia • Infográfico HD"},"violencia-semiologia":{"m":"violencia","h1":"Roteiro Semiológico Sistemático & Preservação Forense","sub":"Semiologia Cuidadosa • Cadeia de Custódia • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Anamnese Detalhada • Exame Físico Geral • Exame Genital & Proctológico • Cadeia de Custódia Forense • ⚠️ Investigação de Submissão Química / \"Boa Noite Cinderela\":"},"violencia-pep-hiv":{"m":"violencia","h1":"Profilaxia Pós-Exposição (PEP) para o HIV","sub":"Protocolo PCDT / Ministério da Saúde • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"⏱️ Janela Terapêutica da PEP: • 2 horas • 72 horas • Fundamentos Teóricos & Roteiro Prático • Realizar Teste Rápido de Triagem para HIV: • Se Não Reagente: Iniciar imediatamente o esquema da PEP por 28 dias. • Se Reagente: Indica que a paciente já vivia com infecção prévia pelo HIV (não decorrente da violência atual). NÃO é caso de PEP... • Realizar também teste rápido de Sífilis, HBsAg e teste rápido de gravidez (Beta-hCG). • Posologia: • Duração: • 28 dias ininterruptos • 🤢 Manejo de Sintomas Gastrointestinais: • Ondansetrona 8 mg VO • Metoclopramida 10 mg VO"},"violencia-profilaxias":{"m":"violencia","h1":"Profilaxia de ISTs Não-Virais, Hepatite B, Tétano & Gestação","sub":"Prevenção Combinada Completa • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Gonococo (Neisseria gonorrhoeae): • Clamídia (Chlamydia trachomatis): • Tricomoníase (Trichomonas vaginalis): • Vítima com Vacinação Completa (3 doses) e Anti-HBs comprovado (≥ 10 mUI/mL): • Vítima Não Vacinada ou com Esquema Incompleto: • Vacina Hepatite B recombinante • Imunoglobulina Humana Anti-Hepatite B (IGHAB): • Critério de Elegibilidade: • Esquema Oral Preferencial: • Levonorgestrel 1,5 mg VO em dose única • 120 horas (5 dias) • DIU de Cobre: • 💉 Profilaxia Antitetânica: • Soro Antitetânico (SAT 5.000 UI) • Imunoglobulina Humana Antitetânica (IGHAT 250 UI)"},"violencia-seguimento":{"m":"violencia","h1":"Seguimento Ambulatorial Longitudinal & Interrupção Legal da Gestação","sub":"Linha de Cuidado Integral • Art. 128 CP • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundamentos Teóricos & Roteiro Prático • Retorno em 2 Semanas (D14): • Retorno em 6 Semanas (D45): • Retorno em 3 Meses (D90) & 6 Meses (D180): • Direito Assegurado: • Documentos Exigidos pelo Serviço (Sem exigência de BO policial ou juiz): • Protocolo Farmacológico Padrão:"},"violencia-fluxogramas":{"m":"violencia","h1":"Fluxograma de Atendimento Imediato à Vítima de Violência Sexual","sub":"Algoritmo Interativo • Diretrizes PCDT / FEBRASGO • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretrizes & Fundamentos dos Algoritmos • Mapa Visual & Infográfico Clínico: Acolhimento e Profilaxias na Violência Sexual • Abrir em Tela Cheia • Infográfico HD"},"violencia-tabelas":{"m":"violencia","h1":"Protocolos Farmacológicos & Cronograma Sorológico","sub":"Tabelas de Referência Rápida • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela 1: Protocolo de Quimioprofilaxia de ISTs na Violência Sexual (Ministério da Saúde) • Agente Alvo • Medicamento & Posologia • Via & Frequência • Janela Limite • Observações Clínicas • HIV (Vírus da Imunodeficiência) • 28 dias ininterruptos • ≤ 72 horas • Gonococo (N. gonorrhoeae) • Clamídia (C. trachomatis) • Tricomoníase (T. vaginalis) • Hepatite B (HBV) • Gravidez Não Planejada • ≤ 120 horas • Tabela 2: Matriz de Decisão para Profilaxia da Hepatite B • Tabela de Referência & Classificação Clínica • Status Sorológico da Vítima • Agressor HBsAg Positivo • Agressor HBsAg Negativo • Agressor Desconhecido ou Não Testado • Comprovadamente Vacinada (Anti-HBs ≥ 10 mUI/mL)"},"violencia-casos":{"m":"violencia","h1":"Casos Clínicos Simulados & Guia de Prescrição Estruturado","sub":"Casos Clínicos & Prescrição Prática • Tratado de Ginecologia FEBRASGO (2ª Edição).","flow":0,"info":0,"presc":0,"caso":1,"kw":"Caso 1: Adolescente de 16 Anos Atendida 14h Após Agressão Sexual por Desconhecido • História Clínica: • Exame Físico: • Conduta Correta & Discussão Baseada em Evidências: • 1. Acolhimento Ético-Legal Imediato: • Informar enfaticamente à mãe e à adolescente que o atendimento médico é imediato e incondicional • Notificação compulsória em até 24h via ficha SINAN e comunicação ao Conselho Tutelar (por ser menor de 18 anos). • 2. Coleta Forense & Exames Rápidos: • Coleta com swab de secreção vaginal e de fúrcula para preservação de espermatozoides/DNA (pois < 72h sem banho) com cadeia de c..."},"vulva-visao-geral":{"m":"vulva","h1":"Doenças Benignas e Pré-Neoplásicas da Vulva: Visão Geral","sub":"Baseado no Tratado de Ginecologia FEBRASGO (2ª ed., Capítulos 38, 77 e 78) e Consenso da International Society for the Study of Vulvovaginal Disease (ISSVD).","flow":0,"info":1,"presc":0,"caso":0,"kw":"Relevância Clínica & Subdiagnóstico: • Líquen Escleroso • Classificação ISSVD das Afecções Vulvares Não Infecciosas • Dermatoses Inflamatórias Crônicas: • Lesões Pré-Neoplásicas Escamosas (NIV): • NIV Usual (uVIN): • NIV Diferenciada (dVIN): • Líquen Escleroso de longa data • Lesões Pré-Neoplásicas Não Escamosas: • Patologias das Glândulas Vestibulares Maiores (Bartholin): • Mapa Visual & Infográfico Clínico: Doenças da Vulva & Glândula de Bartholin • Abrir em Tela Cheia • Infográfico HD"},"vulva-semiologia":{"m":"vulva","h1":"Roteiro Semiológico do Prurido e Lesões Vulvares","sub":"Semiologia dermatológica ginecológica em 4 eixos, inspeção sistemática e identificação precoce de distorções anatômicas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os 4 Eixos Semiológicos da Avaliação Vulvar • Prurido Noturno Intratável: • Sensação de Queimação e Ardência: • Dispareunia de Intróito Severa: • Sintomas Urinários: • Evolução Insidiosa de Anos: • Achados Físicos Chave à Inspeção Vulvar: • Placas Branco-Nacaradas / \"Papel de Cigarro\": • Distribuição em \"Figura em Oito\": • Apagamento Arquitetural: • Red Flags para Neoplasia:"},"vulva-liquen":{"m":"vulva","h1":"Líquen Escleroso Vulvar, Líquen Plano & Líquen Simples","sub":"A tríade das dermatoses inflamatórias crônicas: fisiopatologia autoimune, protocolo de Clobetasol e rastreio de CEC.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Mapa Visual & Infográfico Clínico: Doenças da Vulva & Glândula de Bartholin • Abrir em Tela Cheia • Infográfico HD • Diferenciação Diagnóstica: Líquen Escleroso vs Líquen Plano vs Líquen Simples • Entidade Clínica • Fisiopatologia & População • Aspecto Dermatológico Típico • Tratamento Padrão-Ouro (FEBRASGO) • Líquen Escleroso Vulvar (LEV) • NÃO acomete a mucosa vaginal • Propionato de Clobetasol 0,05% pomada • Líquen Plano • Estrias de Wickham • Acomete classicamente a mucosa vaginal • Líquen Simples Crônico (Neurodermatite) • ciclo vicioso prurido-coçadura"},"vulva-bartholin":{"m":"vulva","h1":"Patologias da Glândula de Bartholin: Cisto vs Abscesso","sub":"A técnica do Cateter de Word, marsupialização cirúrgica e o alerta obrigatório para mulheres acima de 40 anos.","flow":1,"info":0,"presc":0,"caso":0,"kw":"Fluxograma Visual do Manejo da Glândula de Bartholin • Condutas Cirúrgicas: Cateter de Word vs Marsupialização • Técnicas recomendadas: • Cateter de Word (Padrão-Ouro Ambulatorial): • O cateter deve permanecer in situ por 4 a 6 semanas • Marsupialização Cirúrgica: • Bartholinectomia (Exérese da Glândula): • em mulheres > 40 anos para exclusão de adenocarcinoma primário da glândula de Bartholin"},"vulva-niv":{"m":"vulva","h1":"Neoplasias Intraepiteliais Vulvares (NIV) & Doença de Paget","sub":"A diferenciação entre a via dependente do HPV (NIV usual) e a via independente (NIV diferenciada / dVIN associada ao LEV).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Diferenciação Biológica: NIV Usual vs NIV Diferenciada (ISSVD) • Característica • NIV Usual / Escamosa (uVIN / Bowenoide) • NIV Diferenciada (dVIN) • Associação com HPV • Totalmente independente do HPV • Perfil da Paciente • Líquen Escleroso de longa data • Aspecto Macroscópico • unifocal • Imuno-histoquímica • p16 positivo em bloco difuso • p53 mutado • Risco de Malignidade • ALTÍSSIMO POTENCIAL DE MALIGNIZAÇÃO RÁPIDA • Tratamento Padrão • Imiquimode 5% creme • EXÉRESE CIRÚRGICA AMPLA MANDATÓRIA • Doença de Paget Extramamária da Vulva • Aspecto Patognomônico: • \"bolo confeitado com morango\" • Histopatologia: • Células de Paget • Conduta e Rastreio:"},"vulva-tabelas":{"m":"vulva","h1":"Tabelas Comparativas de Patologias Vulvares","sub":"Matriz resumida de diagnóstico diferencial, indicações de biópsia por punch e algoritmos terapêuticos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Mandatórios para Realização de Biópsia Vulvar com Punch de Keyes • Indicação Absoluta de Biópsia • Justificativa Diagnóstica (FEBRASGO) • Lesões pigmentadas suspeitas ou novas • Melanoma Vulvar • Lesões queratósicas elevadas, endurecidas ou verrucosas atípicas • Úlcera vulvar que não cicatriza após 2 a 4 semanas • Suspeita clínica de Líquen Escleroso antes do início de corticoide potente • Dermatose com falha de resposta ao tratamento convencional"},"vulva-casos":{"m":"vulva","h1":"Casos Clínicos Simulados de Patologias Vulvares","sub":"Casos reais de consultório com raciocínio clínico passo a passo e botão de revelação da conduta.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Prurido vulvar noturno de 3 anos tratado erradamente como candidíase • Conduta Padrão-Ouro Recomendada: • Biópsia com Punch de Keyes (3-4 mm) + PROPIONATO DE CLOBETASOL 0,05% POMADA em Protocolo Escalonado. • Fundamentação ISSVD / FEBRASGO: • Líquen Escleroso Vulvar avançado • Dor aguda pulsátil e tumefação tensa no terço inferior do grande lábio • Drenagem e Inserção Ambulatorial de CATETER DE WORD (mantido por 4 a 6 semanas). • Fundamentação FEBRASGO: • Abscesso Agudo da Glândula de Bartholin • Placas verrucosas pigmentadas multifocais em jovem tabagista • Neoplasia Intraepitelial Vulvar Usual de Alto Grau (uVIN / HSIL vulvar)"},"vulva-prescricao":{"m":"vulva","h1":"Guia de Prescrição Dermatológica Vulvar","sub":"Posologias precisas de corticosteroides tópicos de alta potência, imunomoduladores e cuidados de barreira.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela Terapêutica Dermatológica Vulvar (ISSVD / FEBRASGO) • Fármaco / Esquema • Posologia & Via • Indicação Clínica • Instruções Específicas & Efeitos Adversos • Propionato de Clobetasol 0,05% • Fase 1: • Fase 2: • Fase 3: • Líquen Escleroso Vulvar • POMADA • Tacrolimo 0,1% • Imiquimode 5% • Neoplasia Intraepitelial Vulvar Usual (uVIN de Alto Grau) • Óleo de Coco Extra-Virgem / Vaselina Sólida • Hidroxizina • Tratamento clínico poupador de tecido da Neoplasia Intraepitelial Vulvar Usual (uVIN de Alto Grau) . • 25 mg VO 1 hora antes de deitar por 2 a 4 semanas."},"ped-aij-definicao":{"m":"ped-aij","h1":"Artrite Idiopática Juvenil (AIJ)","sub":"Classificação segundo a International League of Associations for Rheumatology (ILAR) e Tratado de Pediatria SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Conceito Clínico • presença de artrite inflamatória persistente em uma ou mais articulações com duração mínima de 6 semanas contínuas, iniciada an... • Caracterização Semiológica da Artrite Crônica • Fluxograma e Infográfico de Artrite Idiopática Juvenil (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-aij-subtipos":{"m":"ped-aij","h1":"Subtipos Clínicos da AIJ Segundo o Consenso ILAR","sub":"Oligoarticular, Poliarticular (FR positivo e negativo) e Sistêmica (Doença de Still da infância).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Classificação em 7 Categorias Clínicas • Subtipo ILAR • Articulações / Clínica • Perfil Imunológico & Complicações • Oligoarticular (50% a 60%) • ≤ 4 articulações • FAN positivo em até 70% dos casos: • Uveíte Anterior Crônica Assintomática • Poliarticular FR-negativa (20%) • ≥ 5 articulações • Poliarticular FR-positiva (5%) • Sistêmica (10% a 15%) • febre diária remitente em agulhas ≥ 2 semanas • rash macular cor de salmão evanescente • Síndrome de Ativação Macrofágica (SAM)"},"ped-aij-fisiopatologia":{"m":"ped-aij","h1":"Fisiopatologia Imunológica & Uveíte Anterior Crônica","sub":"Diferenças biológicas entre formas articulares e sistêmicas, e o risco silencioso de cegueira.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Mecanismos Autoimunes vs Autoinflamatórios • Formas Articulares (Oligoarticular e Poliarticular): • Forma Sistêmica: • síndrome autoinflamatória • IL-1, IL-6 e IL-18 • Uveíte Anterior Assintomática: O Risco Ocular Silencioso • Alerta Crítico SBP 2024: • completamente silenciosa"},"ped-aij-propedeutica":{"m":"ped-aij","h1":"Investigação Laboratorial & Protocolo de Lâmpada de Fenda","sub":"Interpretação do FAN, FR, provas de atividade inflamatória e calendário oftalmológico.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Roteiro Laboratorial • Provas de Fase Aguda (VHS e PCR): • Anticorpos Antinucleares (FAN por IFI): • Fator Reumatoide (FR) e Anti-CCP: • Protocolo de Vigilância com Lâmpada de Fenda (SBP 2024) • Subtipo de AIJ • Perfil do FAN / Idade • Periodicidade da Lâmpada de Fenda • Oligoarticular ou Poliarticular • FAN Positivo • A cada 3 meses • A cada 6 meses • AIJ Sistêmica"},"ped-aij-fluxograma":{"m":"ped-aij","h1":"Fluxograma Decisório: Artrite Idiopática Juvenil","sub":"Algoritmo clínico estruturado segundo o Tratado de Pediatria SBP 2024.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma e Infográfico de Artrite Idiopática Juvenil (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-aij-farmacologico":{"m":"ped-aij","h1":"Tratamento Farmacológico Escalonado com Posologia Rigorosa","sub":"AINEs, infiltração com triancinolona hexacetonida, Metotrexato e DMARDs biológicos.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Escalonamento Terapêutico (SBP 2024) • Etapa 1: Sintomáticos Iniciais & Terapia Local • AINEs Orais: • Infiltração Intra-articular: • primeira linha de escolha para a forma oligoarticular • Etapa 2: DMARD Sintético Convencional (Padrão-Ouro) • Metotrexato (MTX): • 10 a 15 mg/m² por semana • Indicações: Falha da terapia local na oligoarticular, ou tratamento imediato de primeira linha na AIJ poliarticular. • Associação Obrigatória de Ácido Fólico: • Etapa 3: DMARDs Biológicos • Bloqueadores de TNF-alfa (Anti-TNF): • Anti-IL-6 (Tocilizumabe) ou Anti-IL-1 (Anacinra):"},"ped-aij-emergencia-sam":{"m":"ped-aij","h1":"Síndrome de Ativação Macrofágica (SAM) na AIJ Sistêmica","sub":"Reconhecimento precoce de tempestade de citocinas, hemofagocitose e conduta intensiva imediata.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Definição & Fisiopatologia da SAM • Critérios Laboratoriais Diagnósticos (EULAR/ACR/PRINTO 2016) • Febre Contínua Associada a Ferritina > 684 ng/mL MAIS pelo menos 2 dos seguintes: • Plaquetopenia: • Disfunção Hepática: • Hipertrigliceridemia: • Hipofibrinogenemia: • Sinal Patognomônico:"},"ped-aij-caso":{"m":"ped-aij","h1":"Caso Clínico: Artrite Idiopática Juvenil","sub":"Simulação interativa com tomada de decisão médica baseada nas diretrizes SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"História Clínica & Exame Físico • FAN: positivo título 1:640 padrão pontilhado fino • Pergunta Clínica: • Discussão Clínica & Gabarito Oficial (SBP 2024): • 1. Diagnóstico do Subtipo: ARTRITE IDIOPÁTICA JUVENIL OLIGOARTICULAR. • 2. Exame Preventivo de Máxima Urgência: AVALIAÇÃO OFTALMOLÓGICA COM LÂMPADA DE FENDA. • FAN positivo em títulos elevados (1:640) • Uveíte Anterior Crônica Assintomática • 3. Tratamento Inicial Recomendado:"},"ped-aleitamento-definicao":{"m":"ped-aleitamento","h1":"Fisiologia da Lactação & Vantagens Imunológicas do Leite Humano","sub":"Mecanismos neuroendócrinos da mamogênese, lactogênese e ejeção láctea, bioativos e imunoglobulinas do leite humano no Tratado SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Fases da Fisiologia da Lactação • Tratado de Pediatria SBP 2024 • Etapa • Período • Controle Hormonal • Fenômenos Fisiológicos • Lactogênese Fase I • Lactogênese Fase II (\"Apojadura\") • Queda abrupta da progesterona • Prolactina • Lactogênese Fase III (Galactopoiese) • remoção periódica do leite • Fator Inibidor da Lactação (FIL) • Hormônios-Chave da Amamentação • 1. Prolactina (Adeno-hipófise) • PRODUÇÃO • 2. Ocitocina (Neuro-hipófise) • EJEÇÃO • Fluxograma Oficial de Manejo e Dificuldades do Aleitamento Materno (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-aleitamento-composicao":{"m":"ped-aleitamento","h1":"Fases Cronológicas & Composição Bioquímica do Leite Humano","sub":"Diferenciação entre colostro, leite de transição e leite maduro; dinâmica entre leite anterior e posterior.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Evolução do Leite Humano ao Longo da Lactação • Tipo de Leite • Período • Características Físico-Químicas • Propriedades Biológicas & Imunológicas • Colostro • \"Primeira Vacina da Criança\" • IgA Secretória (sIgA) • Leite de Transição • Leite Maduro • 67 a 70 kcal/100 mL • Dinâmica Durante a Mamada: Leite Anterior vs Leite Posterior • 1. Leite Anterior (Início da Mamada): • 2. Leite Posterior (Final da Mamada): • gordura • saciedade • ganho de peso ponderal • Densidade calórica média de ~ 67 a 70 kcal/100 mL . Perfeita biodisponibilidade de nutrientes e osmolaridade isotônica."},"ped-aleitamento-tecnica":{"m":"ped-aleitamento","h1":"Semiotécnica da Avaliação da Mamada: Pega e Posicionamento","sub":"Critérios observacionais da OMS/SBP para identificar a mamada eficaz e prevenir lesões mamilares.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os 4 Sinais de Pega Correta (Tratado SBP 2024) • Critério • Sinal de Pega Adequada (Correta) • Sinal de Pega Inadequada (Incorreta / \"Chupeta\") • Abertura Bucal • Eversão Labial • Lábio inferior evertido • Visibilidade da Aréola • ACIMA • Aproximação Mentoniana • Queixo encostado na mama • Mecânica da Sucção • Critérios de Posicionamento Corporal Adequado • Alinhamento Corporal: • \"Barriga com Barriga\": • Sustentação Completa: • Proximidade:"},"ped-aleitamento-dificuldades":{"m":"ped-aleitamento","h1":"Manejo Clínico das Intercorrências: Fissuras, Ingurgitamento & Mastite","sub":"Diagnóstico diferencial e condutas medicamentosas e não farmacológicas baseadas nas diretrizes da SBP.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz de Diagnóstico & Manejo das Afecções Puerperais da Mama • Condição Clínica • Fisiopatologia & Quadro Clínico • Conduta Farmacológica & Não Farmacológica (SBP 2024) • Fissuras / Traumas Mamilares • pega incorreta • Corrigir a pega imediatamente: • Ingurgitamento Mamário Patológico • Massagem circular delicada • Ordenha manual prévia da aréola • Compressas FRIAS após as mamadas • Mastite Puerperal Aguda • Staphylococcus aureus • febre > 38°C, calafrios e prostração • MANTER A AMAMENTAÇÃO na mama afetada! • Antibioticoterapia empírica: • Cefalexina 500 mg VO 6/6h • Amoxicilina + Clavulanato"},"ped-aleitamento-fluxograma":{"m":"ped-aleitamento","h1":"Fluxograma Oficial de Manejo das Intercorrências na Lactação","sub":"Árvore de decisão clínica para manejo de ingurgitamento, fissuras e mastite lactacional da SBP (2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Manejo e Dificuldades do Aleitamento Materno (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-aleitamento-contraindicacoes":{"m":"ped-aleitamento","h1":"Contraindicações Formais & Medicamentos na Amamentação","sub":"Diretrizes estritas de segurança materno-infantil: contraindicações absolutas, temporárias e falsas contraindicações.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quadro de Contraindicações Formais (MS & SBP 2024) • Categoria • Condição Clínica / Etiologia • Conduta Regulamentar Obrigatória • Contraindicação Absoluta Materna • HIV-1 e HIV-2 • HTLV-1 e HTLV-2 • Amamentação terminantemente proibida! • Contraindicação Absoluta do Lactente • Galactosemia Clássica • soja • Contraindicação Temporária Materna • Herpes simples • Doença de Chagas aguda • Falsas Contraindicações (PODE AMAMENTAR!)"},"ped-aleitamento-ordenha":{"m":"ped-aleitamento","h1":"Ordenha, Conservação & Banco de Leite Humano (rBLH / SBP)","sub":"Técnica de ordenha manual de Marmet, higiene rigorosa e prazos de validade para geladeira e congelador.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Técnica de Ordenha Manual (Técnica de Marmet) • Preparo & Higiene: • Massagem Prévia: • Posicionamento dos Dedos: • Pressão & Compressão: • Prazos de Validade do Leite Humano Ordenhado (rBLH-Fiocruz / SBP) • Ambiente de Armazenamento • Temperatura Requerida • Prazo Máximo de Validade • Instruções Práticas de Uso • Geladeira Doméstica • Freezer / Congelador • Descongelamento & Aquecimento"},"ped-aleitamento-caso":{"m":"ped-aleitamento","h1":"Caso Clínico Simulado: Puérpera com Febre e Dor Mamária Intensa","sub":"Diferenciação entre ingurgitamento mamário patológico e mastite puerperal aguda segundo a SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Exame Físico da Puérpera: • Sinais Vitais: • 38,7°C • Exame das Mamas: • Observação da Mamada: • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Diagnóstico Principal: • Mastite Puerperal Aguda em Mama Direita • 2. Fisiopatologia Fundamentada: • A pega incorreta • A dor provocou o espaçamento das mamadas e esvaziamento incompleto, levando a estase láctea • 3. Conduta Terapêutica Escalonada (SBP 2024): • MANTER A AMAMENTAÇÃO EM AMBAS AS MAMAS: A SBP e o Ministério da Saúde enfatizam que a amamentação NÃO deve ser suspensa • Antibioticoterapia Sistêmica Imediata: • Cefalexina 500 mg VO de 6 em 6 horas por 10 a 14 dias"},"ped-alergia-alim-definicao":{"m":"ped-alergia-alim","h1":"Alergia à Proteína do Leite de Vaca (APLV): Visão Geral & Epidemiologia","sub":"Conceituação da APLV, mecanismos imunológicos, antígenos proteicos maiores (caseína vs proteínas do soro) e dados nacionais.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Relevância da APLV na Infância (SBP / ESPGHAN 2024) • Alergia à Proteína do Leite de Vaca (APLV) • Tratado de Pediatria da SBP (6ª Edição, 2024) • Diferenciação Fundamental: Alergia à Proteína vs Intolerância à Lactose: • APLV (Imunológica): • Intolerância à Lactose (Metabólica / Enzimática): • extremamente rara em lactentes menores de 2 anos • Os Principais Alérgenos Proteicos do Leite Bovino • Fração Proteica • Proporção no Leite • Termoestabilidade • Significado Clínico & Prognóstico • Fração Caseína (alfa-s1, alfa-s2, beta e kappa-caseína) • 80% • Altamente termoestável • APLV grave, persistente • Proteínas do Soro (Beta-lactoglobulina, Alfa-lactoalbumina)"},"ped-alergia-alim-semiologia":{"m":"ped-alergia-alim","h1":"Semiologia em 4 Eixos: Reações IgE vs Não-IgE Mediadas","sub":"Diferenciação precisa entre manifestações de hipersensibilidade imediata (IgE) e hipersensibilidade celular tardia (Não-IgE).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quadro Comparativo: IgE-Mediadas vs Não-IgE-Mediadas (SBP 2024) • Característica Clínica • Reações IgE-Mediadas (Imediatas) • Reações Não-IgE-Mediadas (Tardias) • Tempo de Instalação • Rápido: • 2 horas • Lento e Insidioso: • Órgãos e Sistemas Alvo • Trato Gastrointestinal • Manifestações Clínicas Típicas • Anafilaxia • Proctocolite alérgica • Exames Alergológicos (Prick Test / IgE Específica) • POSITIVOS • Risco de Anafilaxia Fatal • Roteiro Semiológico em 4 Eixos da Suspeita de APLV • estrias de sangue vivo (raias de sangue) e muco abundante • normais e eutróficos • Desaceleração ponderal grave • FPIES"},"ped-alergia-alim-manifestacoes":{"m":"ped-alergia-alim","h1":"Entidades Clínicas Não-IgE: Proctocolite, FPIES & Enteropatia","sub":"Características diagnósticas, curso natural e critérios de diferenciação das principais formas gastrointestinais.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Proctocolite Alérgica Induzida por Proteína Alimentar (APIP) • A Forma Gastrointestinal Mais Frequente no Consultório: • Perfil Típico: • Quadro Clínico: • estrias de sangue vivo misturadas a fezes com muco • Histopatologia: • Prognóstico: • Síndrome da Enterocolite Induzida por Proteína Alimentar (FPIES) • FPIES (Food Protein-Induced Enterocolitis Syndrome) • Gatilhos Mais Comuns: • Apresentação Aguda: • 1 a 4 horas após a ingestão • Mimetizador Crítico: • Sepse Bacteriana Grave • Conduta no FPIES Agudo: • Ondansetrona IV (0,15 mg/kg)"},"ped-alergia-alim-diagnostico":{"m":"ped-alergia-alim","h1":"Investigação Diagnóstica Racional & Interpretação de Exames","sub":"O valor da Dieta de Exclusão Diagnóstica, indicação de testes cutâneos (Prick test) e advertências contra painéis de IgG.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os 3 Passos da Confirmação Diagnóstica da APLV • Passo 1: Suspeita Clínica Fundamentada: • Passo 2: Dieta de Exclusão Diagnóstica (2 a 4 semanas): • remissão completa ou melhora substancial dos sintomas • Passo 3: Teste de Provocação Oral (TPO): • Indicações e Armadilhas dos Exames Complementares • Exame Complementar • Quando Solicitar? • Interpretação & Advertência Formal da SBP • Teste Alérgico Cutâneo (Prick Test / TPO) • suspeita de reações IgE-mediadas imediatas • IgE Específica Sérica (ImmunoCAP) • Pesquisa de Sangue Oculto nas Fezes (PSOF) • Dosagem de IgG ou IgG4 para Alimentos • marcador fisiológico normal de tolerância e exposição alimentar"},"ped-alergia-alim-fluxograma":{"m":"ped-alergia-alim","h1":"Fluxograma: Algoritmo de Alergia à Proteína do Leite de Vaca","sub":"Árvore de decisão estruturada para o diagnóstico e seleção da fórmula infantil especial.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo de APLV & Terapia Nutricional Pediátrica (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-alergia-alim-formulas":{"m":"ped-alergia-alim","h1":"Manejo Nutricional & Fórmulas Especiais de Substituição","sub":"Fórmula Extensamente Hidrolisada (FEH), Fórmulas de Aminoácidos Livres (FAA), Fórmulas de Soja e o leite de outros mamíferos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Hierarquia das Fórmulas Especiais na APLV (SBP 2024) • Categoria da Fórmula • Mecanismo / Composição • Indicações Clínicas Precisas • Contraindicações / Restrições • Fórmula Extensamente Hidrolisada (FEH) • 1ª LINHA DE ESCOLHA • Fórmula à Base de Aminoácidos Livres (FAA) • Anafilaxia prévia grave • Fórmula de Soja Infantil • crianças > 6 meses • Fórmulas Parcialmente Hidrolisadas (FPH) • Alerta Formal da SBP: Leites de Outros Mamíferos (Cabra, Ovelha, Búfala) • Atenção Máxima às Crenças Populares: • reatividade cruzada imunológica superior a 90% a 95%"},"ped-alergia-alim-tpo":{"m":"ped-alergia-alim","h1":"Teste de Provocação Oral (TPO) & Aquisição de Tolerância","sub":"Técnica padronizada de reintrodução sob supervisão médica, critérios de interrupção e evolução natural da tolerância.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Protocolo de Realização do TPO (Padrão-Ouro Diagnóstico) • Pré-Requisitos Mandatórios: • Ambiente Hospitalar / Emergência: • Esquema Escalonado Típico: • Interpretação: • POSITIVO • NEGATIVO • História Natural & Cronograma de Reavaliação • Cerca de 50% das crianças adquirem tolerância até 1 ano de vida • Mais de 75% a 80% toleram o leite até os 3 anos • Cerca de 90% superam a alergia até os 5 anos de idade • Recomenda-se reavaliar a aquisição de tolerância através de novo TPO a cada 6 a 12 meses."},"ped-alergia-alim-caso":{"m":"ped-alergia-alim","h1":"Caso Clínico: Lactente de 2 Meses em AME com Sangramento Retal","sub":"Tomada de decisão na proctocolite alérgica, preservação do aleitamento materno e prescrição nutricional.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico da Puericultura: • Geral: • Abdome: • Inspeção da Região Perianal: • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Hipótese Diagnóstica: • PROCTOCOLITE ALÉRGICA INDUZIDA POR PROTEÍNAS DO LEITE DE VACA (Não-IgE Mediada): • 2. Conduta Padrão-Ouro em Aleitamento Materno (SBP 2024): • MANTER RIGOROSAMENTE O ALEITAMENTO MATERNO EXCLUSIVO! • Dieta de Exclusão Materna Rigorosa: • Suplementação Materna Obrigatória: • Carbonato de Cálcio 1.000 a 1.200 mg/dia associado a Vitamina D • 3. Propedêutica e Seguimento: • Não solicitar exames alérgicos (Prick test ou IgE sérica): • Tempo de Resposta:"},"ped-anafilaxia-definicao":{"m":"ped-anafilaxia","h1":"Anafilaxia & Urticária Aguda: Visão Geral & Fisiopatologia","sub":"Conceituação da anafilaxia como emergência médica tempo-sensível, degranulação maciça de mastócitos e epidemiologia pediátrica.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição Operacional da Anafilaxia (WAO / EAACI / SBP 2024) • Anafilaxia • Tratado de Pediatria da SBP (6ª Edição, 2024) • emergência médica absoluta de primeira linha • Adrenalina Intramuscular • Epidemiologia & Gatilhos Mais Frequentes na Infância: • Alimentos (Gatilho Nº 1 em Crianças): • 85% das anafilaxias • Medicamentos (Mais comum em adolescentes e ambiente hospitalar): • Veneno de Insetos Himenópteros: • Látex: • Fisiopatologia Imunológica: Mecanismos IgE vs Não-IgE • Mecanismo Fisiopatológico • Vias de Ativação • Mediadores Pré-Formados & Sintetizados • Repercussões Clínicas Cardinais • Anafilaxia Imunológica IgE-Mediada • Pré-formados: • Sintetizados de novo:"},"ped-anafilaxia-semiologia":{"m":"ped-anafilaxia","h1":"Semiologia em 4 Eixos & Apresentação Clínica Multissistêmica","sub":"Reconhecimento sistemático do acometimento cutâneo, respiratório, hemodinâmico e gastrointestinal.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Roteiro Semiológico em 4 Eixos da Anafilaxia • minutos a poucas horas (geralmente 5 a 30 minutos) • Edema de Via Aérea Superior: • Comprometimento de Via Aérea Inferior: • Cutâneo-mucoso (presente em 80-90% dos casos): • Gastrointestinal: • Pegadinha Clínica Crítica: Anafilaxia SEM Sintomas de Pele (10-20% dos Casos) • Atenção Máxima do Pediatra: • NÃO EXCLUI O DIAGNÓSTICO DE ANAFILAXIA"},"ped-anafilaxia-criterios":{"m":"ped-anafilaxia","h1":"Critérios Diagnósticos Consolidados (WAO 2020 / SBP 2024)","sub":"Os 2 cenários diagnósticos formais que fecham o diagnóstico de anafilaxia e impõem adrenalina imediata.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz Diagnóstica da World Allergy Organization (WAO 2020 / SBP 2024) • UM DOS DOIS CRITÉRIOS • Cenário Clínico • Requisitos Diagnósticos Obrigatórios • Exemplos Típicos na Prática • CRITÉRIO 1 (Com Acometimento de Pele/Mucosas) • Pele e/ou Mucosas • ASSOCIADO A PELO MENOS UM DOS SEGUINTES: • a) Comprometimento Respiratório: • b) Redução da Pressão Arterial ou Sintomas de Disfunção Orgânica: • c) Sintomas Gastrointestinais Graves: • CRITÉRIO 2 (Após Exposição a Alérgeno Conhecido ou Provável) • Hipotensão Arterial OU Broncoespasmo Grave OU Edema Laríngeo • Definição de Hipotensão Arterial por Faixa Etária na Pediatria (PALS / SBP) • Menores de 1 mês (Neonatos):"},"ped-anafilaxia-adrenalina":{"m":"ped-anafilaxia","h1":"Adrenalina IM: Primeira Linha Sem Atrasos","sub":"Dose exata em mg/kg, concentração 1:1.000, técnica de aplicação no vasto lateral e os perigos de atrasar com anti-histamínicos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Protocolo de Administração da Adrenalina (Epinefrina) • A Regra de Ouro da Anafilaxia: Adrenalina IM Precoce Salva Vidas! • Concentração: • 1:1.000 (1 mg/mL) PURA • Dose Pediátrica: • 0,01 mg/kg • 0,01 mL/kg • Dose Máxima por Aplicação: • 0,3 mg (0,3 mL) em crianças pré-púberes • 0,5 mg (0,5 mL) em adolescentes e adultos • Local Obrigatório de Aplicação: • FACE ANTEROLATERAL MÉDIA DA COXA (Músculo Vasto Lateral) • Repetição da Dose: • 5 a 15 minutos • Por Que Anti-Histamínicos e Corticoides NÃO São Primeira Linha? • Classe de Medicamento • Papel Clínico Real na Anafilaxia • Limitações Críticas & Alertas SBP • Anti-histamínicos H1 (ex: Difenidramina, Dexclorfeniramina)"},"ped-anafilaxia-fluxograma":{"m":"ped-anafilaxia","h1":"Fluxograma: Algoritmo de Emergência da Anafilaxia","sub":"Árvore de decisão clínica sequencial da identificação imediata ao suporte do choque anafilático.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo de Emergência da Anafilaxia Pediátrica (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-anafilaxia-choque":{"m":"ped-anafilaxia","h1":"Manejo do Choque Anafilático & Drogas Vasoativas Contínuas","sub":"Posicionamento do paciente, ressuscitação volêmica agressiva, infusão contínua de adrenalina e manejo da via aérea difícil.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Medidas Críticas Imediatas de Suporte no Choque Anafilático • Condutas Simultâneas à Adrenalina IM: • Posicionamento do Paciente: • posição supina (deitada) com membros inferiores elevados • Oxigenoterapia: • Acessos Venosos Calibrosos & Ressuscitação Volêmica: • Soro Fisiológico 0,9% ou Ringer Lactato na dose de 20 mL/kg em bolus rápido (10 a 20 min) • Via Aérea Avançada: • Infusão Contínua de Adrenalina Venosa no Choque Refratário • Indicação: • Dose de Infusão Contínua: • Adrenalina IV de 0,1 a 1 mcg/kg/min • Uso de Glucagon IV em Usuários de Betabloqueadores: • Glucagon 20 a 30 mcg/kg IV (máx 1 mg) em bolus"},"ped-anafilaxia-plano":{"m":"ped-anafilaxia","h1":"Autoinjetores de Adrenalina & Plano de Ação Escolar","sub":"Prescrição na alta médica, tempo de observação contra reações bifásicas e orientações de segurança para creches e escolas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tempo de Observação Hospitalar & Reação Anafilática Bifásica • Risco de Recorrência Tardia (Reação Bifásica): • sem nova exposição ao alérgeno • 4 e 12 horas • Tempo Mínimo de Observação em Pronto-Socorro: • 6 a 8 horas • Observação Prolongada (12 a 24 horas em Enfermaria): • Prescrição do Dispositivo Autoinjetor de Adrenalina (EpiPen / Auvi-Q) • Apresentação Comercial • Dose de Adrenalina • Faixa de Peso Indicada • Orientações Práticas de Uso • Dispositivo Pediátrico (ex: EpiPen Jr) • 0,15 mg • 10 kg a 25 kg • face lateral externa da coxa • segurar firme por 3 segundos • Dispositivo Adulto (ex: EpiPen Adulto) • 0,30 mg • > 25 a 30 kg • 0,15 mg de adrenalina"},"ped-anafilaxia-caso":{"m":"ped-anafilaxia","h1":"Caso Clínico: Anafilaxia Alimentar Aguda em Escolar de 6 Anos","sub":"Reconhecimento imediato, cálculo de dose de adrenalina IM e tomada de decisão salvadora na sala de emergência.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico Admissional: • Sinais Vitais: • SpO2: 92% em ar ambiente • Aparelho Respiratório: • estridor inspiratório audível sem estetoscópio • Pele e Mucosas: • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Diagnóstico Sindrômico: • ANAFILAXIA ALIMENTAR GRAVE (Critério 1 da WAO / SBP): • comprometimento grave de vias aéreas superiores (estridor inspiratório, disfonia e edema de glote) • 2. PRIMEIRA CONDUTA IMEDIATA & SALVADORA: • ADRENALINA 1:1.000 (1 mg/mL) INTRAMUSCULAR IMEDIATA: • 0,01 mg/kg = 0,2 mL (0,2 mg) IM PURA • Face Anterolateral da Coxa (Músculo Vasto Lateral)"},"ped-asma-definicao":{"m":"ped-asma","h1":"Asma na Infância & Lactente Sibilante: Visão Geral & Fisiopatologia","sub":"Conceituação oficial da asma brônquica na pediatria, inflamação crônica de vias aéreas, hiperresponsividade brônquica e epidemiologia nacional.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Impacto Epidemiológico da Asma na Pediatria • Asma • Tratado de Pediatria da SBP (6ª Edição, 2024) • sintomas respiratórios recorrentes e variáveis • limitação variável do fluxo aéreo expiratório • Dados Epidemiológicos Nacionais (ISAAC / SBP 2024): • Alta Prevalência: • 20% em escolares (6-7 anos) • 19% em adolescentes (13-14 anos) • Sobrecarga em Urgências: • Subdiagnóstico em Menores de 5 Anos: • Fisiopatologia Imunológica & Inflamação Tipo 2 (T2-High vs T2-Low) • Endótipo / Mecanismo • Citocinas & Células Efetoras • Perfil Clínico Típico • Resposta Terapêutica • Asma Tipo 2 (T2-High) • Alérgica / Eosinofílica"},"ped-asma-semiologia":{"m":"ped-asma","h1":"Semiologia em 4 Eixos & Fenótipos do Lactente Sibilante","sub":"Roteiro semiológico sistemático da tosse e sibilância, fenótipos de Tucson e o Índice Preditivo de Asma (IPA / mAPI).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Roteiro Semiológico da Asma Pediátrica em 4 Eixos • noturno ou nas primeiras horas da manhã • exercício físico / corridas • corpo estranho • fibrose cística ou discinesia ciliar primária • DRGE grave ou fístula traqueoesofágica • Fenótipos do Lactente Sibilante (Estudo de Tucson) & Índice Preditivo de Asma (IPA / mAPI) • Sibilante Transitório Precoce (~60% dos casos): • Sibilante Não Atópico Persistente (~20% dos casos): • Sibilante Atópico / Asma Precoce (~20% dos casos): • Índice Preditivo de Asma Modificado (mAPI) — Aplicação Clínica aos 2-3 Anos: • ≥ 4 episódios de sibilância no último ano • Critérios Maiores (necessário ≥ 1): • Critérios Menores (necessário ≥ 2):"},"ped-asma-classificacao":{"m":"ped-asma","h1":"Classificação de Gravidade & Avaliação do Nível de Controle","sub":"Critérios padronizados para determinação do controle clínico nas últimas 4 semanas e provas de função pulmonar (Espirometria).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Avaliação do Controle Atual da Asma (Últimas 4 Semanas - GINA/SBP) • nível atual de controle dos sintomas • Pergunta de Controle (Últimas 4 Semanas) • Bem Controlada • Parcialmente Controlada • Não Controlada • 1. Sintomas diurnos • 2. Algum despertar noturno • 3. Uso de broncodilatador de alívio (SABA) • 4. Qualquer limitação nas atividades físicas / brincadeiras? • Espirometria com Prova Broncodilatadora (Padrão-Ouro ≥ 5 a 6 anos) • Padrão Obstrutivo: • Resposta Broncodilatadora Positiva (Reversibilidade do Fluxo): • Observação Importante: Uma espirometria com parâmetros basais normais NÃO exclui o diagnóstico de asma (a obstrução é classicam..."},"ped-asma-manutencao":{"m":"ped-asma","h1":"Manejo de Manutenção Escalonado (Steps 1 a 5)","sub":"Estratificação por faixas etárias (< 6 anos vs 6 a 11 anos vs ≥ 12 anos) e a revolução da estratégia MART (CI + Formoterol).","flow":0,"info":0,"presc":1,"caso":0,"kw":"Princípios Terapêuticos da SBP: O Corticoide Inalatório como Pilar Central • Todo paciente com diagnóstico de asma deve ter o Corticoide Inalatório (CI) como base do tratamento preventivo. • Etapa (Step) • Crianças Menores de 6 Anos • Crianças de 6 a 11 Anos • Adolescentes (≥ 12 Anos) • Etapa 1 (Sintomas raros < 2x/mês) • Preferencial (Track 1): • Etapa 2 (Sintomas 2x/mês a 2x/sem) • CI dose baixa diário • Etapa 3 (Sintomas na maioria dos dias) • Dobrar dose do CI • CI dose baixa + LABA • CI dose baixa + Formoterol em regime MART • Etapa 4 (Asma não controlada na Etapa 3) • CI dose média + LABA • CI dose média + Formoterol em regime MART • Etapa 5 (Asma grave refratária)"},"ped-asma-fluxograma":{"m":"ped-asma","h1":"Fluxograma: Manejo Escalonado da Asma & Crise Aguda","sub":"Árvore de decisão clínica sequencial estruturada para conduta em emergência e manutenção.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Manejo Escalonado da Asma Infantil & Crise Aguda (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-asma-crise":{"m":"ped-asma","h1":"Manejo da Exacerbação Aguda & Sinais de Asma Quase Fatal","sub":"Protocolo da primeira hora na emergência, escores de gravidade (PRAM / Wood-Downes modificado) e suporte intensivo.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Protocolo da 1ª Hora na Sala de Emergência (Protocolo 20-20-20) • Conduta Imediata Padronizada (SBP 2024): • Oxigenoterapia: • 93% e 95% • Salbutamol em Spray com Espaçador (100 mcg/jato): • 4 a 8 jatos (crianças < 20 kg) • 6 a 10 jatos (> 20 kg) • Brometo de Ipratrópio (Atrovent): • Corticoterapia Sistêmica Precoce: • Prednisolona via oral: • Metilprednisolona IV (1-2 mg/kg) ou Hidrocortisona IV (5 mg/kg): • Manejo da Asma Grave Refratária & Sinais de Parada Respiratória Iminente • Intervenção Terapêutica • Dose & Modo de Administração • Mecanismo & Cuidados Críticos • Sulfato de Magnésio 50% IV • 40 a 50 mg/kg IV • Salbutamol Contínuo / IV"},"ped-asma-tabelas":{"m":"ped-asma","h1":"Tabelas Posológicas de Corticoides Inalatórios & Resgate","sub":"Doses diárias baixas, médias e altas dos principais medicamentos prescritos na pediatria brasileira.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Doses Diárias de Corticoides Inalatórios (SBP / GINA 2024) • Fármaco Inalatório • Dose Baixa Diária (mcg) • Dose Média Diária (mcg) • Dose Alta Diária (mcg) • Apresentações Disponíveis no Brasil • Budesonida Spray (pMDI) • Budesonida (pMDI ou Pó) • Budesonida • Propionato de Fluticasona • Dipropionato de Beclometasona • Guia Estruturado de Prescrição Ambulatorial de Alta Pós-Crise (SBP 2024) • Exemplo de Prescrição de Alta da Emergência: • Prednisolona solução oral (3 mg/mL): • Salbutamol spray (100 mcg/jato): • Budesonida spray (200 mcg/jato): • Consulta de retorno: • 100 a 200 mcg/dia • > 200 a 400 mcg/dia • > 400 mcg/dia • Spray 50 mcg/jato ou 200 mcg/jato."},"ped-asma-caso":{"m":"ped-asma","h1":"Caso Clínico: Crise Aguda de Asma em Pré-Escolar de 4 Anos","sub":"Aplicação prática do protocolo de emergência, tomada de decisão sequencial e revelação interativa da conduta padrão-ouro.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico na Admissão: • Sinais Vitais: • Aparelho Respiratório: • Outros Sistemas: • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Diagnóstico Sindrômico & Classificação de Gravidade: • Exacerbação Aguda de Asma / Crise Grave: • Diagnóstico de Base: • 2. Conduta Imediata na Sala de Emergência (Primeira Hora): • Oxigenoterapia: • Broncodilatador de Ação Rápida (SABA): • Salbutamol spray 100 mcg • 6 jatos a cada 20 minutos • Anticolinérgico Inalatório: • Brometo de Ipratrópio spray (Atrovent 250 mcg) 4 jatos • Corticoterapia Oral Precoce: • Prednisolona solução oral (3 mg/mL) na dose de 2 mg/kg"},"ped-bronquiolite-definicao":{"m":"ped-bronquiolite","h1":"Bronquiolite Viral Aguda (BVA): Visão Geral & Etiopatogenia","sub":"Conceituação oficial da BVA, fisiopatologia obstrutiva dos bronquíolos terminais, dinâmica do Vírus Sincicial Respiratório (VSR) e sazonalidade.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição Operacional da BVA (SBP / AAP 2024) • Bronquiolite Viral Aguda (BVA) • Tratado de Pediatria da SBP (6ª Edição, 2024) • primeiro episódio de sibilância e/ou estertoração subcrepitante em crianças menores de 2 anos de idade • Etiologia Viral & Epidemiologia Sazonal: • Vírus Sincicial Respiratório (VSR): • 60% a 80% • Outros Agentes Virais: • Pico Etário de Maior Gravidade: • 1 e 6 meses de vida • Fisiopatologia: O Mecanismo Obstrutivo em \"Válvula\" • Etapa Patogênica • Alteração Histológica / Celular • Consequência Clínica & Radiológica • 1. Invasão Epitelial • 2. Infiltrado Inflamatório • 3. Mecanismo de Alçapão (Check-Valve) • Hiperinsuflação pulmonar difusa"},"ped-bronquiolite-semiologia":{"m":"ped-bronquiolite","h1":"Semiologia em 4 Eixos & Escores Clínicos de Gravidade","sub":"A evolução temporal trifásica da BVA, semiotécnica da ausculta e aplicação do Escore de Wood-Downes modificado por Ferrés.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Roteiro Semiológico da BVA em 4 Eixos • Fase Prodrômica (Dias 1 a 3): • Fase de Estado (Dias 3 a 5): • Fase de Resolução (Dias 7 a 14-21): • Achado Patognomônico: • Esforço Respiratório: • volume e tempo de sucção ao seio materno ou mamadeira • Episódios de Apneia Central: • Escore de Wood-Downes Modificado por Ferrés (SBP 2024) • Parâmetro Clínico • 0 Pontos • 1 Ponto • 2 Pontos • 3 Pontos • Sibilância • Estertores • Tiragem / Retrações • Frequência Respiratória • Frequência Cardíaca • Entrada de Ar (MV)"},"ped-bronquiolite-criterios":{"m":"ped-bronquiolite","h1":"Critérios Formais de Internação Hospitalar & Grupos de Risco","sub":"Diretrizes da SBP para admissão segura em enfermaria e fatores preditores de evolução desfavorável e apneia.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Clínicos Absolutos de Internação (SBP / AAP) • Indicações Formais para Admissão Hospitalar: • Hipoxemia Persistente: • SpO2 < 90% a 92% • Desconforto Respiratório Moderado a Grave: • Dificuldade de Ingestão Hídrica / Alimentar: • Presença de Apneia: • Vulnerabilidade Psicossocial ou Geográfica: • Grupos de Alto Risco para Doença Grave por VSR • Prematuridade: • Idade Cronológica Menor que 12 Semanas: • Displasia Broncopulmonar (DBP) / Doença Pulmonar Crônica da Prematuridade: • Cardiopatias Congênitas com Repercussão Hemodinâmica: • Doenças Neuromusculares & Síndromes Genéticas (ex: Síndrome de Down): • Imunodeficiências Congênitas ou Adquiridas."},"ped-bronquiolite-suporte":{"m":"ped-bronquiolite","h1":"Medidas de Suporte Baseadas em Evidências","sub":"Oxigenoterapia racional, hidratação equilibrada e a indicação precisa da Cânula Nasal de Alto Fluxo (CNAF).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os Três Pilares Terapêuticos da BVA (SBP 2024) • Pilar Terapêutico • Modalidade & Parâmetros • Justificativa Fisiológica • 1. Oxigenoterapia Racional • SpO2 entre 90% e 92% • 2. Suporte Nutricional & Hidratação • dieta por SNG/SNE • hidratação venosa com solução isotônica • 3. Desobstrução de Vias Aéreas Superiores • respiradores nasais preferenciais obrigatórios • Cânula Nasal de Alto Fluxo (CNAF) na BVA Grave • Indicação & Parâmetros da CNAF (SBP 2024): • Fluxo Inicial: • 1 a 2 L/kg/min • FiO2: • Mecanismo de Ação: • Critérios de Falha da CNAF (após 60-90 min):"},"ped-bronquiolite-fluxograma":{"m":"ped-bronquiolite","h1":"Infográfico Clínico & Algoritmo da Bronquiolite Viral Aguda","sub":"Síntese visual executiva estilo NotebookLM: propedêutica, escore de Wood-Downes, triagem sequencial e condutas baseadas em evidências.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Bronquiolite Viral Aguda (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-bronquiolite-naofazer":{"m":"ped-bronquiolite","h1":"O Que NÃO Fazer na BVA: Recomendações Choosing Wisely SBP","sub":"Evidências científicas contra o uso indiscriminado de broncodilatadores, corticoides, antibióticos e fisioterapia motora agressiva.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Intervenções Tradicionais Desaconselhadas pela Evidência Científica • Condutas que NÃO devem ser realizadas na Bronquiolite Típica: • 1. NÃO USAR CORTICOIDES SISTÊMICOS (Prednisolona, Dexametasona): • 2. NÃO PRESCREVER BRONCODILATADORES DE ROTINA (Salbutamol, Fenoterol): • 3. NÃO PRESCREVER ANTIBIÓTICOS: • 4. NÃO REALIZAR FISIOTERAPIA RESPIRATÓRIA MOTORA AGRESSIVA: • 5. NÃO SOLICITAR RADIOGRAFIA DE TÓRAX DE ROTINA:"},"ped-bronquiolite-profilaxia":{"m":"ped-bronquiolite","h1":"Imunoprofilaxia Específica contra o VSR (SBP 2024)","sub":"Critérios do Ministério da Saúde para o Palivizumabe e a nova fronteira do Nirsevimabe de dose única.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Palivizumabe (Anticorpo Monoclonal Anti-VSR): Critérios SUS / SBP • Palivizumabe • Grupo Populacional Elegível (Portaria MS / SBP) • Idade Limite na Época de Sazonalidade • Posologia & Esquema • Prematuros com Idade Gestacional ao nascer ≤ 28 semanas e 6 dias • 15 mg/kg IM • 1 vez a cada 30 dias • Crianças com Displasia Broncopulmonar (DBP) • Crianças com Cardiopatia Congênita com repercussão hemodinâmica • Nirsevimabe: A Nova Fronteira do Anticorpo de Meia-Vida Prolongada • Nirsevimabe • Dose Única: • pelo menos 5 a 6 meses • Indicação Ampliada: • Vacinação Materna na Gestação:"},"ped-bronquiolite-caso":{"m":"ped-bronquiolite","h1":"Caso Clínico: Lactente de 3 Meses com Primeiro Episódio de Sibilância","sub":"Tomada de decisão baseada em evidências, manejo de suporte e prevenção de iatrogenias.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico na Admissão: • Sinais Vitais: • Aparelho Respiratório: • Outros Achados: • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Diagnóstico Sindrômico & Gravidade: • Bronquiolite Viral Aguda (BVA) por provável VSR: • Classificação de Gravidade: • BVA Moderada a Grave • INTERNAÇÃO HOSPITALAR • 2. Conduta Hospitalar Baseada em Evidências (Prescrição Padrão-Ouro): • Internação em Enfermaria Pediátrica • Oxigenoterapia: • SpO2 alvo entre 90% e 92% • Desobstrução de Vias Aéreas Superiores: • Soro Fisiológico 0,9% (2 a 3 mL por narina) • Suporte Nutricional Seguro:"},"ped-brue-smsl-definicao":{"m":"ped-brue-smsl","h1":"BRUE (Brief Resolved Unexplained Event): O Conceito Moderno em Substituição ao Obsoleto ALTE","sub":"A evolução conceitual da AAP e SBP 2024, critérios estritos de definição e a exigência de ausência de etiologia clínica.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Por que o Conceito de ALTE Foi Oficialmente Abandonado? (SBP 2024) • ALTE • Dependia excessivamente da interpretação subjetiva e do pânico dos pais e cuidadores (\"o bebê quase morreu\"). • Induzia internações hospitalares desnecessárias, múltiplos procedimentos dolorosos e exames invasivos sem benefício clínico com... • Sugerira erroneamente uma ligação causal direta com a Síndrome da Morte Súbita do Lactente (SMSL), o que estudos prospectivos m... • Tratado de Pediatria da SBP (6ª Edição, 2024) • BRUE (Brief Resolved Unexplained Event) • Definição Rigorosa de BRUE Segundo o Tratado de Pediatria SBP 2024 • BRUE • lactente menor de 1 ano de vida"},"ped-brue-smsl-criterios-baixo-risco":{"m":"ped-brue-smsl","h1":"Estratificação de Risco: Os 7 Critérios Obrigatórios de Baixo Risco","sub":"Como identificar com segurança o lactente de baixo risco com chance praticamente nula de eventos adversos graves.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Cumulativos Obrigatórios de Baixo Risco (SBP 2024 / AAP) • BRUE DE BAIXO RISCO • TODOS OS SETE CRITÉRIOS ABAIXO SIMULTANEAMENTE • Critério • Requisito Obrigatório para Baixo Risco • Racional Clínico Pediátrico"},"ped-brue-smsl-propedeutica-baixo-risco":{"m":"ped-brue-smsl","h1":"Conduta Racional no BRUE de Baixo Risco: O que Fazer e o que NÃO Fazer","sub":"Diretrizes estritas da SBP e AAP para evitar o sobrediagnóstico, radiação desnecessária e iatrogenias.","flow":0,"info":0,"presc":0,"caso":0,"kw":"O que o Pediatra DEVE Fazer no BRUE de Baixo Risco (SBP 2024) • Condutas Recomendadas e Suficientes: • Observação Clínica Monitorada: • oximetria de pulso contínua por um período de 1 a 4 horas • Eletrocardiograma (ECG de 12 derivações): • Síndrome do QT Longo congênito • Painel Viral Respiratório Rápido (Se indicado por sazonalidade): • Educação e Treinamento Familiar em Suporte Básico de Vida (BLS): • O que o Pediatra NÃO DEVE Fazer (Proscrito no Baixo Risco - SBP 2024) • Procedimento / Exame • Recomendação Oficial SBP 2024 • Justificativa Científica"},"ped-brue-smsl-alto-risco":{"m":"ped-brue-smsl","h1":"Conduta no BRUE de Alto Risco: Protocolo de Investigação Hospitalar","sub":"Manejo dos pacientes que não preenchem todos os critérios de baixo risco: monitoramento intensivo e rastreamento dirigido.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quem é o Paciente de Alto Risco? • pelo menos 1 dos seguintes fatores • BRUE DE ALTO RISCO • Idade cronológica menor ou igual a 60 dias • Prematuro com idade gestacional < 32 semanas ou idade pós-concepcional < 45 semanas. • História de eventos repetidos ou múltiplos episódios prévios. • Duração do evento ≥ 1 minuto ou necessidade de manobras de RCP por socorrista profissional. • Histórico familiar de morte súbita em lactentes ou jovens parentes de primeiro grau. • Qualquer alteração encontrada no exame físico inicial. • Roteiro Propedêutico Hospitalar (SBP 2024) • 1. Internação Hospitalar com Monitorização Contínua: • 24 a 48 horas"},"ped-brue-smsl-fluxograma":{"m":"ped-brue-smsl","h1":"Fluxograma Decisório: BRUE & Estratificação de Risco","sub":"Algoritmo decisório SBP/AAP: triagem de critérios de baixo risco vs conduta hospitalar de alto risco.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Abordagem de BRUE e Prevenção de SMSL (SBP 2024 / AAP) • Abrir em Tela Cheia • Infográfico HD"},"ped-brue-smsl-sono-seguro":{"m":"ped-brue-smsl","h1":"Sono Seguro & Prevenção da Síndrome da Morte Súbita do Lactente (SMSL)","sub":"A regra inegociável da posição supina, ambiente de sono livre de riscos, co-sleeping seguro e mitos populares.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição da Síndrome da Morte Súbita do Lactente (SMSL) • SMSL • 2º e o 4º mês de vida • Recomendações Oficiais de Sono Seguro (Campanha da SBP 2024) • 1. Posição Supina Obrigatória (\"Dormir de Barriga para Cima\"): • SEMPRE EM POSIÇÃO SUPINA • prona (barriga para baixo) • lateral • FORMALMENTE PROSCRITAS • 2. Superfície Firme & Berço Livre de Objetos: • PROIBIDO O USO DE \"KIT DE BERÇO\" (protetores laterais acolchoados) • Sem travesseiros, almofadas, edredons soltos, cobertores grossos ou bichos de pelúcia • 3. Compartilhar o Quarto, MAS NUNCA A MESMA CAMA: • A CAMA COMPARTILHADA (*BED-SHARING*) É CONTRAINDICADA • 4. Outros Fatores Protetores Comprovados:"},"ped-brue-smsl-orientacao-familias":{"m":"ped-brue-smsl","h1":"Orientação Familiar & Treinamento em Suporte Básico de Vida Antes da Alta","sub":"Capacitação empática dos pais em manobras de desobstrução de vias aéreas e reanimação cardiopulmonar pediátrica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Treinamento Prático dos Cuidadores em Sala de Observação (SBP 2024) • Desengasgo em Lactentes (< 1 ano): • 5 pancadas dorsais • 5 compressões torácicas • Compressões Torácicas Básicas: • Acolhimento Psicológico:"},"ped-brue-smsl-caso":{"m":"ped-brue-smsl","h1":"Caso Clínico Interativo: Lactente com Episódio Breve de Palidez e Hipotonia no Berço","sub":"Tomada de decisão baseada no Tratado de Pediatria SBP 2024 diante de um BRUE de baixo risco na emergência pediátrica.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Desafio Terapêutico & Tomada de Decisão: • Tratado de Pediatria da SBP (6ª Edição, 2024) • Como classificar sindromicamente este evento (BRUE ou ALTE)? A paciente preenche critérios para Baixo Risco ou Alto Risco? Just... • Quais exames complementares e condutas estão formalmente recomendados para este caso? • A internação hospitalar ou a solicitação de tomografia de crânio e líquor estão indicadas? • Quais orientações mandatórias sobre sono seguro devem ser fornecidas à família? • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Classificação Sindrômica & Estratificação de Risco:"},"ped-cardiopatias-definicao":{"m":"ped-cardiopatias","h1":"Cardiopatias Congênitas: Fisiologia Fetal, Transição Neonatal & Epidemiologia","sub":"Circulação em paralelo no feto, shunts fetais fisiológicos, queda da resistência vascular pulmonar e classificação hemodinâmica.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Epidemiologia Segundo o Tratado de Pediatria SBP 2024 • Cardiopatias Congênitas (CC) • 8 a 10 em cada 1.000 nascidos vivos • 20% a 30% das cardiopatias são Críticas • A Transição da Circulação Fetal para a Neonatal • Na Vida Fetal (Circuitos em Paralelo): • Ducto Venoso de Arâncio, Forame Oval e Canal Arterial (Ductus Arteriosus) • Ao Nascimento (Circuitos em Série): • queda acentuada da RVP • Fechamento do Canal Arterial: • Implicação Clínica Vital: • Cardiopatias Canal-Dependentes • Fluxograma e Infográfico de Cardiopatias Congênitas (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-cardiopatias-teste-coracaozinho":{"m":"ped-cardiopatias","h1":"Teste do Coraçãozinho (Oximetria de Pulso): Triagem Neonatal Obrigatória","sub":"Momento exato de realização (24 a 48h de vida), técnica correta pré e pós-ductal e algoritmo de confirmação ecocardiográfica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Protocolo Oficial do Teste do Coraçãozinho (MS / SBP 2024) • Oximetria de Pulso Neonatal (Teste do Coraçãozinho) • Momento de Realização: • 24 e 48 horas de vida • Sítios Anatômicos Obrigatórios de Aferição: • Membro Superior Direito (MSD): • Pré-Ductal • Um dos Membros Inferiores (MMII): • Pós-Ductal • Interpretação e Algoritmo Decisório (SBP 2024) • 1. Teste NORMAL (Negativo): • 2. Teste DUVIDOSO / ALTERADO Inicial: • REPETIR a oximetria de pulso após 1 HORA • 3. Teste ANORMAL (Positivo Definitivo): • O TESTE É CONSIDERADO POSITIVO! • NÃO dar alta hospitalar! • Ecocardiograma Transtorácico com Doppler"},"ped-cardiopatias-acianogenicas":{"m":"ped-cardiopatias","h1":"Cardiopatias Congênitas Acianogênicas: Shunts E → D e Lesões Obstrutivas","sub":"CIV, CIA, PCA, DSAV e Coarctação de Aorta: fisiopatologia do hiperfluxo pulmonar, semiologia dos sopros e conduta.","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Cardiopatias Acianogênicas com Hiperfluxo Pulmonar (Shunt E → D) • Comunicação Interventricular (CIV): • 2 e 8 semanas de vida • Sopro holossistólico em platô em borda esternal esquerda média/baixa • Comunicação Interatrial (CIA): • Desdobramento amplo e fixo da segunda bulha cardíaca (B2) • Persistência do Canal Arterial (PCA): • Sopro contínuo em maquinaria (*sopro de Gibson*) • Ibuprofeno IV ou Indometacina IV ou Paracetamol IV • Defeito do Septo Atrioventricular (DSAV): • 40% a 50% das crianças com Síndrome de Down • 2. Cardiopatias Acianogênicas Obstrutivas (Fluxo Pulmonar Normal) • Coarctação da Aorta (CoAo): • Achado Clínico Patognomônico:"},"ped-cardiopatias-cianogenicas":{"m":"ped-cardiopatias","h1":"Cardiopatias Congênitas Cianogênicas: Tetralogia de Fallot & TGA","sub":"Diferenciação pelo fluxo pulmonar, hipoxemia refratária ao teste do hiperóxido e radiologia característica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Tetralogia de Fallot (Cianogênica com Hipofluxo Pulmonar) • cardiopatia congênita cianogênica mais frequente após o primeiro ano de vida • Estenose Pulmonar Infundibular / Subvalvar: • Comunicação Interventricular (CIV) Não Restritiva Ampla. • Dextroposição da Aorta / Cavalgamento da Aorta sobre a CIV (< 50%). • Hipertrofia Ventricular Direita (HVD) Secundária. • Achado Radiológico de Tórax: • \"tamanco holandês\" (*coeur en sabot*) • 2. Transposição das Grandes Artérias - TGA (Cianogênica com Hiperfluxo) • causa mais frequente de cianose neonatal precoce com risco de morte nas primeiras 24 a 48 horas de vida"},"ped-cardiopatias-fluxograma":{"m":"ped-cardiopatias","h1":"Fluxograma Decisório: Cardiopatias Congênitas & Hipertensão Pediátrica","sub":"Algoritmo integrado SBP: oximetria de pulso, estratificação cianogênica vs acianogênica e manejo de emergência.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma e Infográfico de Cardiopatias Congênitas (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-cardiopatias-emergencias":{"m":"ped-cardiopatias","h1":"Emergências Cardiológicas: Crise Hipoxêmica de Fallot & Lesões Canal-Dependentes","sub":"Manejo escalonado da crise de hipercianose, infusão de Prostaglandina E1 (Alprostadil) e septostomia de Rashkind.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Manejo Imediato da Crise Hipoxêmica (Cianótica) de Fallot • Crise de Hipercianose • Protocolo Escalonado de Reversão da Crise (SBP 2024 / PALS): • POSIÇÃO GENUPEITORAL (OU DE CÓCORAS / *SQUATTING*): • Oxigenoterapia a 100%: • Morfina Subcutânea ou Intravenosa (0,1 a 0,2 mg/kg): • Expansão Volêmica com Cristaloides (10 a 20 mL/kg SF 0,9% rápido): • Beta-bloqueador Endovenoso: • Esmolol IV contínuo ou Propranolol IV (0,05 a 0,1 mg/kg) • Manejo das Cardiopatias Canal-Dependentes no Neonato • PROSTAGLANDINA E1 (ALPROSTADIL) - Droga Salvadora de Vida: • Alprostadil (PGE1) na dose de 0,05 a 0,1 mcg/kg/min IV ou IO • APNEIA NEONATAL"},"ped-cardiopatias-hipertensao":{"m":"ped-cardiopatias","h1":"Hipertensão Arterial Pediátrica: Diagnóstico por Percentis & Causas Secundárias","sub":"Tabelas de PA ajustadas por idade, sexo e estatura, predomínio de causas secundárias antes dos 6 anos e farmacoterapia.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Classificação da Pressão Arterial na Infância (SBP 2024 / AAP) • anualmente em todas as crianças a partir dos 3 anos de idade • Categoria de PA • Critério para Crianças de 1 a < 13 anos • Critério para Adolescentes ≥ 13 anos • Etiologia & Rastreamento de Causas Secundárias (SBP 2024) • Regra Etária Fundamental: • HAS Secundária (presente em 80% a 90% das crianças menores de 6 anos) • Causas Renais e Renovasculares (70% a 80% das secundárias): • Causas Cardiovasculares e Endócrinas: • Tratamento Farmacológico de 1ª Escolha: • Enalapril: • Losartana: • Anlodipino:"},"ped-cardiopatias-caso":{"m":"ped-cardiopatias","h1":"Caso Clínico Interativo: Lactente de 8 Meses com Crise de Hipercianose ao Choro","sub":"Manejo de emergência da crise hipoxêmica de Fallot baseado no Tratado de Pediatria SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Saturação de Oxigênio (\\(SpO_2\\)) de 58% em ar ambiente • quase inaudível ou muito diminuído • Desafio Terapêutico & Tomada de Decisão: • Emergências Cardiológicas do Tratado de Pediatria SBP 2024 / PALS • Qual o diagnóstico da cardiopatia de base e da complicação aguda em curso? Por que o sopro cardíaco diminuiu de intensidade dur... • Qual a primeira manobra física postural não farmacológica obrigatória a ser realizada imediatamente na maca? Qual o seu fundame... • Quais medicamentos de urgência devem ser administrados em sequência caso a crise persista? • Qual o papel do ecocardiograma e o momento de programação cirúrgica corretiva definitiva?"},"ped-cefaleias-definicao":{"m":"ped-cefaleias","h1":"Cefaleias na Infância e Adolescência: Visão Geral, Epidemiologia & Classificação","sub":"A abordagem semiológica sistemática da dor de cabeça na pediatria e a divisão fundamental entre causas primárias e secundárias.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Epidemiologia Segundo o Tratado de Pediatria SBP 2024 • Cefaleia • 70% a 80% dos adolescentes aos 15 anos • Cefaleias Primárias benignas • Cefaleias Secundárias potencialmente fatais • Padrões Temporais Evolutivos da Cefaleia Pediátrica • 1. Aguda Recorrente / Paroxística: • Migrânea (Enxaqueca) • 2. Aguda Isolada / Nova: • 3. Crônica Progressiva: • É O PADRÃO DE MAIOR GRAVIDADE • 4. Crônica Não Progressiva / Diária: • Fluxograma e Infográfico de Cefaleias Pediátricas (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-cefaleias-sinais-alarme":{"m":"ped-cefaleias","h1":"Sinais de Alarme (Red Flags) & O Mnemônico SNOOP Pediátrico","sub":"Os indicadores clínicos e semiológicos que exigem neuroimagem imediata e avaliação neurocirúrgica de urgência.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Mnemônico SNOOP Adaptado à Pediatria (SBP 2024) • S - Sintomas Sistêmicos / Situações Especiais: • N - Sinais e Sintomas Neurológicos: • déficit focal • Papiledema na Fundoscopia • O - Início (*Onset*) Abrupto ou Muito Precoce: • crianças menores de 3 a 4 anos de vida • O - Idade (*Older*) e Mudança de Padrão (*Pattern Change*): • P - Padrão Temporal e Fatores Posturais (*Positional / Provocation*): • Cefaleia que desperta a criança no meio da noite • Cefaleia matinal ao acordar associada a vômitos em jato • Indicações Formais de Neuroimagem de Urgência (SBP 2024) • Presença de qualquer sinal de alarme (*Red Flag*)"},"ped-cefaleias-migranea":{"m":"ped-cefaleias","h1":"Migrânea (Enxaqueca) na Infância & Síndromes Periódicas da Infância","sub":"Peculiaridades semiológicas na criança, duração reduzida, localização bifrontal e equivalentes migranosos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Diagnósticos de Migrânea Pediátrica (ICHD-3 / SBP 2024) • Duração Mais Curta: • 2 e 72 horas • Localização Frequente Bifrontal ou Bitemporal: • frontal bilateral ou frontotemporal • Caráter e Intensidade: • piora com atividade física de rotina • Sintomas Associados Obrigatórios: • História familiar positiva de enxaqueca (mãe ou pai) em mais de 70% a 80% dos pacientes. • Síndromes Periódicas da Infância (Equivalentes Migranosos) • Manifestações Atípicas Precursoras de Enxaqueca: • Síndrome dos Vômitos Cíclicos: • Migrânea Abdominal: • Vertigem Paroxística Benigna da Infância:"},"ped-cefaleias-tensional":{"m":"ped-cefaleias","h1":"Cefaleia Tensional Pediátrica: Diagnóstico Diferencial & Fatores Psicossociais","sub":"Características da dor em aperto, ausência de náuseas graves, relação com sobrecarga escolar e telas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Características Semiológicas da Cefaleia do Tipo Tensão (CTT) • Localização e Caráter: • NÃO É PULSÁTIL • Intensidade Leve a Moderada: • NÃO piora com a atividade física rotineira • Ausência de Sintomas Digestivos Graves: • Gatilhos Comuns:"},"ped-cefaleias-fluxograma":{"m":"ped-cefaleias","h1":"Fluxograma Diagnóstico & Terapêutico das Cefaleias Pediátricas","sub":"Algoritmo decisório SBP: triagem por sinais de alarme, neuroimagem dirigida e escalonamento terapêutico.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma e Infográfico de Cefaleias Pediátricas (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-cefaleias-tratamento-agudo":{"m":"ped-cefaleias","h1":"Tratamento Farmacológico da Crise Aguda de Migrânea","sub":"Intervenção precoce, analgésicos de 1ª linha em mg/kg, uso de triptanos na infância e perigo da cefaleia rebote.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Regras de Ouro do Tratamento Abortivo da Crise (SBP 2024) • 1. Medicar o Mais Rápido Possível: • primeiros 20 a 30 minutos do início da dor • Fármaco • Dose Recomendada • Dose Máxima & Comentários • Maior taxa de eficácia comprovada • Alerta de Cefaleia por Uso Excessivo de Medicamentos: • máximo 2 a 3 dias por semana • Ibuprofeno VO (1ª Linha) • 10 mg/kg VO • Máx 600 a 800 mg/dose. Maior taxa de eficácia comprovada em ensaios clínicos pediátricos. • Paracetamol VO (1ª Linha) • 15 mg/kg VO • Máx 1.000 mg/dose. Excelente tolerabilidade gastrointestinal. • Dipirona VO / IV • 15 a 25 mg/kg VO/IV • Máx 1.000 mg/dose. Ótima opção se intolerância gástrica aos AINEs."},"ped-cefaleias-profilaxia":{"m":"ped-cefaleias","h1":"Profilaxia Farmacológica & Não Farmacológica da Enxaqueca","sub":"Critérios formais para início de tratamento preventivo, opções medicamentosas de 1ª linha e duração terapêutica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Indicações Formais de Tratamento Profilático Contínuo (SBP 2024) • Frequência elevada: ≥ 3 a 4 crises incapacitantes por mês • Crises muito prolongadas ou que causam absenteísmo escolar recorrente e prejuízo grave à qualidade de vida. • Má resposta ou intolerância significativa aos medicamentos abortivos de crise aguda. • Subtipos raros com risco de sequela (como a Migrânea Hemiplégica). • Opções Farmacológicas Preventivas Recomendadas (SBP 2024) • Fármaco Preventivo • Posologia Pediátrica • Indicação Preferencial & Efeitos • CONTRAINDICADO em pacientes com asma ativa ou broncoespasmo • Tempo Mínimo de Tratamento: • 4 a 6 meses após a estabilização"},"ped-cefaleias-caso":{"m":"ped-cefaleias","h1":"Caso Clínico Interativo: Escolar com Cefaleia Matinal, Vômitos em Jato e Avaliação de Sinais de Alarme","sub":"Tomada de decisão clínica rápida diante de sinais de hipertensão intracraniana segundo a SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • apagamento dos bordos da papila óptica bilateralmente e ingurgitamento venoso retiniano (Papiledema franco) • Desafio Terapêutico & Tomada de Decisão: • Cefaleias Pediátricas do Tratado de Pediatria SBP 2024 • Quais sinais de alarme (*Red Flags*) do mnemônico SNOOP estão presentes neste paciente? Como classificar o padrão temporal da dor? • Qual a principal hipótese diagnóstica sindrômica e etiológica a ser investigada com prioridade máxima? • Qual o exame complementar padrão-ouro mandatório e a conduta de encaminhamento imediato? • A punção lombar estaria indicada antes da neuroimagem neste cenário? Justifique o risco."},"ped-celiaca-definicao":{"m":"ped-celiaca","h1":"Doença Celíaca na Infância: Visão Geral, Genética & Fisiopatologia","sub":"Autoimunidade mediada pelo glúten, suscetibilidade HLA-DQ2/DQ8 e atrofia vilositária da mucosa do intestino delgado.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição Oficial e Epidemiologia (SBP / ESPGHAN 2024) • Doença Celíaca (DC) • glúten • trigo, centeio e cevada • HLA-DQ2 • HLA-DQ8 • 1:100 a 1:200 indivíduos (cerca de 0,5% a 1% da população infantil) • Cascata Imunopatogênica Celular • Digestão Incompleta do Glúten: • Desamidação pela Transglutaminase Tecidual (tTG): • Ativação de Linfócitos T CD4+ e Resposta Th1: • Ativação de Linfócitos Intraepiteliais (LIEs) Citotóxicos CD8+: • Produção de Autoanticorpos Específicos: • anti-Transglutaminase tecidual (anti-tTG), anti-Endomísio (EMA) e anti-Peptídeos Deamidados de Gliadina (anti-DGP) • Resultado Histológico Final: • síndrome de má absorção generalizada"},"ped-celiaca-manifestacoes":{"m":"ped-celiaca","h1":"Formas Clínicas: Clássica, Não Clássica & Grupos de Risco","sub":"Do lactente com atrofia glútea e diarreia crônica ao escolar com baixa estatura isolada ou anemia ferropriva.","flow":0,"info":0,"presc":0,"caso":0,"kw":"O Amplo Espectro Clínico da Doença Celíaca Pediátrica • Apresentação Clínica • Faixa Etária Típica • Sinais e Sintomas Cardinais • Forma Clássica (Gastrointestinal / Típica) • \"nádegas caídas em saco vazio\" • Forma Não Clássica (Atípica / Extraintestinal) • Baixa estatura inexplicada ou desaceleração da velocidade de crescimento • Anemia ferropriva refratária ao tratamento com ferro oral • Dermatite Herpetiforme • Grupos de Risco Assintomáticos (Rastreamento Mandatório) • Parentes de 1º grau de celíacos • Diabetes Mellitus Tipo 1 (DM1) • Tireoidite Autoimune de Hashimoto • Síndrome de Down (Trissomia 21) • Síndrome de Turner • Síndrome de Williams"},"ped-celiaca-sorologia":{"m":"ped-celiaca","h1":"Triagem Sorológica: Anti-tTG IgA, EMA & IgA Total","sub":"Sensibilidade, especificidade e a regra mandatória de dosar sempre a IgA sérica total para evitar falso-negativos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"O Painel Sorológico de Escolha na Pediatria (SBP / ESPGHAN 2024) • REGRA SAGRADA DE OURO: • COM A CRIANÇA EM DIETA HABITUAL CONTENDO GLÚTEN • Anticorpo Sérico • Acurácia Diagnóstica • Relevância & Aplicação Prática • Anti-Transglutaminase Tecidual IgA (anti-tTG IgA) + IgA Sérica Total • Sensibilidade > 98% Especificidade > 96% • TESTE DE ESCOLHA INICIAL UNIVERSAL (1ª LINHA). • Anti-Endomísio IgA (EMA-IgA) • Especificidade > 99% Sensibilidade ~95% • MAIOR ESPECIFICIDADE • Anti-Peptídeos Deamidados de Gliadina IgG (anti-DGP IgG) • Deficiência Seletiva de IgA • Anticorpo Anti-Gliadina Nativa (AGA) (Obsoleto!) • FORMALMENTE PROIBIDO / OBSOLETO"},"ped-celiaca-criterio-sem-biopsia":{"m":"ped-celiaca","h1":"Critério Diagnóstico Sem Biópsia (No-Biopsy Approach)","sub":"A grande revolução diagnóstica: confirmação sem anestesia geral ou endoscopia em crianças com anti-tTG elevado.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Oficiais para Dispensar a Endoscopia e Biópsia Duodenal • ESPGHAN (2020) • Tratado de Pediatria da SBP (2024) • SEM BIÓPSIA DUODENAL • Etapa do Protocolo Sem Biópsia • Critério Obrigatório SBP / ESPGHAN • Ação Médica Subsequente • Passo 1: Sorologia Inicial Elevada • Anti-tTG IgA ≥ 10× o limite superior da normalidade (LSN) • Passo 2: Segunda Amostra de Sangue • nova amostra de sangue independente • Anti-Endomísio IgA (EMA-IgA) • Passo 3: Confirmação Diagnóstica • EMA-IgA resulta POSITIVO • DIAGNÓSTICO DE DOENÇA CELÍACA CONFIRMADO COM 100% DE CERTEZA! • Atualização Crucial da Diretriz 2020:"},"ped-celiaca-fluxograma":{"m":"ped-celiaca","h1":"Fluxograma Diagnóstico da Doença Celíaca na Infância","sub":"Algoritmo decisório entre a abordagem sem biópsia e a indicação de endoscopia com biópsias duodenais.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma e Infográfico de Doença Celíaca (SBP / ESPGHAN) • Abrir em Tela Cheia • Infográfico HD"},"ped-celiaca-biopsia":{"m":"ped-celiaca","h1":"Biópsias Duodenais & Classificação Histológica de Marsh","sub":"Técnica correta de coleta endoscópica, estadiamento histológico e interpretação dos infiltrados intraepiteliais.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quando a Endoscopia com Biópsia é Obrigatória? • Quando o anti-tTG IgA for positivo, porém em título inferior a 10 vezes o limite da normalidade (< 10x LSN) • Quando a criança apresentar Deficiência de IgA • Em adolescentes ou casos com discordância entre sorologia e clínica. • Técnica de Coleta Obrigatória: • no mínimo 4 biópsias da segunda/terceira porção duodenal distal e pelo menos 1 a 2 biópsias do bulbo duodenal • Classificação Histopatológica de Marsh Modificada por Oberhuber • Estádio de Marsh • Aspecto Histopatológico • Significado Diagnóstico • Marsh 0 • Marsh 1 (Infiltrativa) • aumento de Linfócitos Intraepiteliais (> 25 LIEs por 100 enterócitos)"},"ped-celiaca-tratamento":{"m":"ped-celiaca","h1":"Tratamento: Dieta Isenta de Glúten & Monitoramento Clínico","sub":"Exclusão estrita de trigo, centeio, cevada e aveia, contaminação cruzada e acompanhamento da negativação sorológica.","flow":0,"info":0,"presc":1,"caso":0,"kw":"O Tratamento Único: Dieta 100% Isenta de Glúten por Toda a Vida • exclusão rigorosa, total e permanente de todos os alimentos, medicamentos e cosméticos que contenham glúten • Cereais Formalmente Proibidos: • Aveia pura • Alimentos Permitidos Naturais: • Atenção à Contaminação Cruzada: • Reposição Nutricional Inicial: • Cronograma de Seguimento e Monitorização • Recuperação Clínica: • Monitorização Sorológica (anti-tTG IgA): • 6 e 12 meses • Biópsia de Controle:"},"ped-celiaca-caso":{"m":"ped-celiaca","h1":"Caso Clínico: Diarreia Crônica, Distensão Abdominal e Desnutrição","sub":"Aplicação prática da abordagem sem biópsia (No-Biopsy), interpretação de sorologia e prescrição nutricional.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico e Nutricional: • Sinais Vitais: • Estado Geral & Nutricional: • perda intensa do coxim gorduroso e muscular dos glúteos, com pele redundante (aspecto de nádegas em saco vazio) • Exame do Abdome: • Exames Laboratoriais Solicitados em Dieta Normal com Glúten: • Hemograma: • IgA Sérica Total: • Anti-Transglutaminase Tecidual IgA (anti-tTG IgA): • > 250 U/mL (Valor de Referência / LSN: < 10 U/mL → Título > 25 vezes o LSN!) • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Aplicação do Critério Sem Biópsia (No-Biopsy Approach SBP / ESPGHAN 2020):"},"ped-choque-definicao":{"m":"ped-choque","h1":"Choque Pediátrico: Fisiopatologia, Estágios Evolutivos & Classificação Etiológica","sub":"Desbalanço crítico entre oferta e consumo de oxigênio tecidual, mecanismos adaptativos da infância e janelas de reversibilidade.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição Fisiopatológica Central (SBP 2024 / PALS) • Choque Pediátrico • oferta tecidual de oxigênio e nutrientes (\\(DO_2\\)) • demandas metabólicas celulares (\\(VO_2\\)) • frequência cardíaca (\\(DC = FC × VS\\)) • Estágios Evolutivos do Choque na Infância • 1. Choque Compensado: • pressão arterial NORMAL para a idade • taquicardia pronunciada e vasoconstrição periférica • 2. Choque Hipotensivo (Descompensado): • queda da pressão arterial sistólica abaixo do limite mínimo aceitável (percentil 5 para a idade) • 3. Choque Irreversível: • Classificação Etiológica do Choque Pediátrico • Choque Hipovolêmico: • Choque Distributivo: • Choque Cardiogênico: • Choque Obstrutivo:"},"ped-choque-semiologia":{"m":"ped-choque","h1":"Semiologia do Choque: Reconhecimento Imediato da Má Perfusão Tecidual","sub":"Triângulo de Avaliação Pediátrica (TAP), marcadores clínicos de hipoperfusão e o perigo de valorizar apenas a pressão arterial.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Os Cinco Pilares Semiológicos da Hipoperfusão Periférica (SBP 2024) • 1. Taquicardia Inexplicável: • sinal clínico mais precoce e sensível • 2. Tempo de Enchimento Capilar (TEC): • Choque Frio • Choque Quente • 3. Amplitude dos Pulsos Centrais e Periféricos: • 4. Gradiente Térmico Cutâneo: • 5. Débito Urinário (Diurese): • Oligúria • Alteração do Estado Mental & Respiração Acidótica • irritabilidade alternada com letargia, olhar vago, perda de contato visual com os pais e diminuição da resposta a estímulos dol... • taquipneia sem estridor ou esforço respiratório obstrutivo"},"ped-choque-compensado-hipotensivo":{"m":"ped-choque","h1":"Choque Compensado vs Hipotensivo: Tabela Oficial de Limites de Pressão Arterial","sub":"Por que a hipotensão é um sinal tardio e pré-parada na criança e a fórmula mnemônica do PALS para o Percentil 5.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição Rigorosa de Hipotensão Pediátrica (Percentil 5 de PAS - SBP 2024 / PALS) • Faixa Etária • Limite Inferior de Pressão Arterial Sistólica (Hipotensão) • Implicação Clínica Imediata • Regra de Ouro da Emergência Pediátrica: • \"NUNCA ESPERE A PRESSÃO ARTERIAL CAIR PARA DIAGNOSTICAR CHOQUE EM UMA CRIANÇA!\""},"ped-choque-golden-hour":{"m":"ped-choque","h1":"Protocolo da Primeira Hora (Golden Hour) no Choque Séptico Pediátrico","sub":"Cronograma minuto a minuto de intervenções salvadoras: oxigenioterapia, ressuscitação volêmica, antibiótico precoce e inotrópicos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Linha do Tempo Estruturada dos Primeiros 60 Minutos (Surviving Sepsis / SBP 2024) • 0 a 5 Minutos: Reconhecimento & Suporte Inicial: • 5 a 15 Minutos: Acesso Vascular Rápido: • 5 minutos ou 2 tentativas • Puncionar imediatamente um Acesso Intraósseo (IO)! • 15 a 45 Minutos: Ressuscitação Volêmica com Alíquotas Rápidas: • 10 a 20 mL/kg de solução cristaloide isotônica • Reavaliação Contínua Obrigatória: • INTERROMPER imediatamente o volume • Até 60 Minutos: Exames, Antibioticoterapia & Início de Vasoativos: • Glicemia Capilar Imediata: • Soro Glicosado a 10% na dose de 2 mL/kg em bolus IV/IO • Antibioticoterapia de Amplo Espectro: • Início Precoce de Drogas Vasoativas:"},"ped-choque-fluxograma":{"m":"ped-choque","h1":"Fluxograma de Manejo do Choque Pediátrico","sub":"Algoritmo decisório PALS/SBP: estratificação compensado vs hipotensivo, expansão volêmica e drogas vasoativas.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Reconhecimento & Manejo do Choque Pediátrico (SBP 2024 / PALS) • Abrir em Tela Cheia • Infográfico HD"},"ped-choque-drogas-vasoativas":{"m":"ped-choque","h1":"Drogas Vasoativas & Suporte Inotrópico no Choque Refratário a Volume","sub":"Indicação direcionada pelo fenótipo hemodinâmico (Choque Frio vs Choque Quente), doses e via de infusão.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Escolha da Droga Vasoativa pelo Fenótipo Clínico (SBP 2024 / PALS) • Fenótipo Hemodinâmico • Droga de 1ª Escolha • Mecanismo de Ação & Dose • Apresentação Clínica Típica • Dose: • Via de Infusão Periférica/Intraóssea Segura: • PODEM E DEVEM ser iniciadas imediatamente por via venosa periférica ou via intraóssea • Inodilatador (inotropismo positivo + vasodilatação sistêmica e pulmonar). Milrinona: 0,25 a 0,75 mcg/kg/min."},"ped-choque-acesso-io":{"m":"ped-choque","h1":"Acesso Intraósseo (IO) na Emergência Pediátrica: Técnica & Vantagens","sub":"Sítio anatômico de escolha na tíbia proximal, materiais, farmacocinética e cuidados na manutenção.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Por que a Via Intraóssea é a \"Veia Incolapsável\" na Criança? • o plexo venoso medular NUNCA colapsa • Sítio de Escolha Anatômico em Pediatria: Tíbia Proximal • Localização Exata: • 1 a 2 cm abaixo (distal) e 1 cm medialmente à Tuberosidade Anterior da Tíbia (TAT) • Vantagens: • Sítios Alternativos: • Técnica de Punção, Confirmação e Contraindicações (SBP 2024) • Técnica: • Sinais de Posicionamento Correto: • Contraindicações Absolutas:"},"ped-choque-caso":{"m":"ped-choque","h1":"Caso Clínico Interativo: Lactente com Desidratação Grave, Choque Hipotensivo e Reanimação","sub":"Aplicação do protocolo de Golden Hour e algoritmo PALS/SBP na abordagem imediata de choque refratário a tentativas periféricas.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • FC 192 bpm (taquicardia extrema), FR 56 irpm (taquipneia acidótica sem tiragens), PA 62x36 mmHg • Tempo de Enchimento Capilar (TEC) de 5 segundos • Desafio Terapêutico & Tomada de Decisão: • Choque Pediátrico do Tratado de Pediatria SBP 2024 / PALS • Como classificar hemodinamicamente o choque deste paciente (compensado vs hipotensivo / frio vs quente)? Qual o valor mínimo es... • Qual a conduta vascular prioritária diante da impossibilidade de acesso periférico após 5 minutos? • Qual a prescrição exata da ressuscitação volêmica imediata (tipo de líquido, volume e tempo de infusão)? Quais critérios de mon..."},"ped-constipacao-definicao":{"m":"ped-constipacao","h1":"Constipação Intestinal na Infância: Visão Geral e Fisiopatologia","sub":"O ciclo vicioso dor-retenção-fecaloma, distensão retal crônica e o papel das transições alimentares e desfralde.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Epidemiologia e Relevância Clínica (SBP 2024) • 3% a 5% de todas as consultas em pediatria geral • 25% a 30% das consultas especializadas em gastroenterologia pediátrica • 95% dos casos, a etiologia é estritamente funcional • O Ciclo Vicioso da Constipação Funcional • Etapa do Ciclo • Evento Fisiopatológico • Manifestação Clínica / Consequência • 1. Gatilho Inicial • resposta emocional aversiva à defecação • 2. Retenção Fecal Voluntária • Postura de Retenção Típica: • 3. Absorção Hídrica & Fecaloma • fecaloma volumoso impactado • 4. Megarreto & Perda de Sensibilidade • perda do reflexo fisiológico da urgência evacuatória"},"ped-constipacao-roma-iv":{"m":"ped-constipacao","h1":"Critérios Diagnósticos de Roma IV & Escala de Bristol","sub":"Padronização internacional para lactentes (< 4 anos) e escolares (> 4 anos), morfologia fecal e incontinência.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios de Roma IV para Constipação Funcional (SBP 2024) • Crianças < 4 Anos (Mínimo de 1 Mês) • Presença de pelo menos 2 dos seguintes critérios: • 2 ou menos evacuações por semana. • Histórico de retenção excessiva de fezes. • Histórico de dor ou dificuldade ao evacuar fezes endurecidas. • Histórico de fezes de grande calibre. • Presença de grande massa fecal na ampola retal ao exame físico. • Em crianças com controle esfincteriano: ≥ 1 episódio de incontinência por semana ou fezes volumosas que entopem o vaso sanitário. • Crianças ≥ 4 Anos & Adolescentes (Mínimo de 1 Mês) • Presença de pelo menos 2 dos seguintes critérios (sem critérios para SII):"},"ped-constipacao-organicas":{"m":"ped-constipacao","h1":"Diagnóstico Diferencial: Constipação Funcional vs Orgânica","sub":"Doença de Hirschsprung (Megacólon Aganglionar), causas endócrinas, anatômicas e sinais de alerta ao toque retal.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela Comparativa: Funcional vs Doença de Hirschsprung • Característica Clínica • Constipação Funcional (> 95%) • Doença de Hirschsprung (< 2-3%) • Início dos Sintomas • Período Neonatal imediato • Eliminação de Mecônio • Atrasada (> 48 horas de vida) • Vômitos & Distensão • Vômitos biliosos frequentes • Crescimento & Ganho de Peso • Déficit ponderal importante • Escape Fecal (Encoprese) • MUITO FREQUENTE • AUSENTE • Toque Retal • Ampola retal cheia de fezes volumosas • Ampola retal VAZIA • eliminação explosiva de fezes líquidas e gases sob pressão • Diagnóstico Padrão-Ouro • Biópsia retal por sucção: • Outras Causas Orgânicas a Serem Lembradas"},"ped-constipacao-desimpactacao":{"m":"ped-constipacao","h1":"Etapa 1: Desimpactação Fecal com Polietilenoglicol (PEG 4000)","sub":"A regra fundamental de esvaziamento completo do reto antes de qualquer intervenção de manutenção dietética ou laxativa.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Por que a Desimpactação é Obrigatória Antes da Manutenção? • Erro Clínico Frequente: • A desimpactação completa prévia é mandatória. • Esquema Farmacológico Padrão-Ouro de Desimpactação (SBP / ESPGHAN 2024): • Fármaco • Via & Dose Diária • Duração & Orientações Práticas • Polietilenoglicol 4000 sem Eletrólitos (PEG 4000) — 1ª Escolha Absoluta • Via Oral: 1,0 a 1,5 g/kg/dia • 3 a 6 dias consecutivos • Vantagens: • Lactulose Oral (Alternativa) • 1,5 a 3,0 mL/kg/dia • Enema Retal Fosfatado / Glicerina (Via Retal de Exceção) • CUIDADO: Enema fosfatado é FORMALMENTE CONTRAINDICADO em menores de 2 anos e nefropatas"},"ped-constipacao-fluxograma":{"m":"ped-constipacao","h1":"Fluxograma Decisório: Diagnóstico & Manejo da Constipação","sub":"Algoritmo visual integrado desde a triagem dos sinais de alarme até a desimpactação e desmame laxativo.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo de Manejo da Constipação Intestinal Funcional (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-constipacao-manutencao":{"m":"ped-constipacao","h1":"Etapa 2: Terapia de Manutenção & Desmame Gradual","sub":"Doses diárias de PEG 4000, lactulose, duração mínima do tratamento e estratégia para evitar recidivas precoces.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Princípios da Terapia de Manutenção (SBP 2024) • fase de manutenção • Dose de Manutenção do PEG 4000: • 0,4 a 0,8 g/kg/dia • 1 a 2 evacuações diárias macias sem dor ou esforço - Bristol tipo 3 ou 4 • Dose de Manutenção da Lactulose: • Óleo Mineral (Contraindicações): • FORMALMENTE EVITADO em menores de 1 a 2 anos, crianças com disfagia, vômitos ou neuropatias • DURAÇÃO MÍNIMA DO TRATAMENTO (2 a 6 meses): • pelo menos 2 a 6 meses de evacuações moles contínuas para recuperar seu tônus muscular elástico e sensibilidade mecanorreceptor... • Protocolo de Desmame: • 25% a cada 2 a 4 semanas"},"ped-constipacao-habitos":{"m":"ped-constipacao","h1":"Etapas 3 e 4: Treinamento de Hábitos, Apoio para os Pés & Dieta","sub":"Biofeedback natural, correção do ângulo anorretal, cálculo diário de fibras e abordagem psicológica sem punições.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Treinamento de Hábito Intestinal e Postura no Vaso • Aproveitamento do Reflexo Gastrocólico • 5 a 10 minutos após as principais refeições • O Apoio para os Pés é Fundamental! • O uso de um banquinho ou apoio sob os pés • Intervenção Dietética: Fibras e Hidratação • Regra do Cálculo de Fibras Diárias: • Idade da criança (em anos) + 5 a 10 gramas por dia • Fontes de Fibras Recomendadas: • Hidratação Farta: • Abordagem Sem Punições na Encoprese:"},"ped-constipacao-caso":{"m":"ped-constipacao","h1":"Caso Clínico: Escolar com Encoprese, Dor ao Evacuar e Postura de Retenção","sub":"Diferenciação com causas orgânicas, palpação de fecaloma e plano de desimpactação com PEG 4000.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico Minucioso: • Sinais Vitais: • Exame do Abdome: • massa cilíndrica endurecida, móvel e alongada (fecaloma volumoso) • Região Anorretal e Neurológica: • ampola retal encontra-se intensamente preenchida e distendida por fezes duras e compactas • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Diagnóstico Clínico e Desmistificação da \"Falsa Diarreia\": • DIAGNÓSTICO: CONSTIPAÇÃO INTESTINAL CRÔNICA FUNCIONAL COM FECALOMA IMPACTADO E INCONTINÊNCIA FECAL RETENTIVA (ENCOPRESE POR TRA... • Mecanismo do Escape: • Descarte de Causa Orgânica (Hirschsprung):"},"ped-convulsao-definicao":{"m":"ped-convulsao","h1":"Convulsão Febril na Infância: Visão Geral, Epidemiologia & Fisiopatologia","sub":"O evento neurológico agudo mais comum da primeira infância, imaturidade do limiar convulsivo e fatores de risco genéticos.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição Oficial Segundo o Tratado de Pediatria SBP 2024 • Convulsão Febril (CF) • idade entre 6 meses e 5 anos • 18 meses de vida • SEM evidência de infecção intracraniana (meningite ou encefalite) • SEM história prévia de convulsão afebril ou epilepsia diagnosticada • 2% a 5% de todas as crianças • Fisiopatologia da Suscetibilidade Térmica • Imaturidade Cerebral & Mielinização: • Velocidade da Ascensão Térmica: • velocidade rápida de elevação da temperatura corporal • Citocinas Pró-Inflamatórias: • Fluxograma de Crise Febril e Estado de Mal Epiléptico na Infância (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-convulsao-simples-complexa":{"m":"ped-convulsao","h1":"Classificação Semiológica: Convulsão Febril Simples vs Complexa","sub":"Diferenciação fundamental que define a necessidade de investigação armada, risco de recorrência e prognóstico.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz Comparativa Oficial (SBP 2024) • Parâmetro Clínico • Convulsão Febril Simples (80-85%) • Convulsão Febril Complexa (15-20%) • Generalizada • Focal • Breve: < 15 minutos • Prolongada: ≥ 15 minutos • Crise única • Múltiplas crises / Recorrência • Paralisia de Todd • Regra Mnemônica: • APENAS UM • Convulsão Febril Complexa"},"ped-convulsao-puncao-lombar":{"m":"ped-convulsao","h1":"Indicações Racionais de Punção Lombar, Neuroimagem & Eletroencefalograma","sub":"Quando o exame do líquor é obrigatório, o papel do status vacinal e o que NÃO solicitar na crise simples.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Oficiais para Punção Lombar (Líquor - SBP 2024 / AAP) • 1. Indicação Mandatória Absoluta (Fazer Sempre): • 2. Indicação Fortemente Recomendada / Considerar com Cautela: • 6 e 12 meses de vida com vacinação incompleta para Haemophilus influenzae tipo b (Hib) ou Streptococcus pneumoniae • Choosing Wisely SBP 2024: O que NÃO Fazer na Convulsão Febril Simples • NÃO solicitar Neuroimagem (Tomografia ou Ressonância de Crânio) • NÃO solicitar Eletroencefalograma (EEG) de rotina • NÃO prescrever terapia anticonvulsivante contínua"},"ped-convulsao-manejo-agudo":{"m":"ped-convulsao","h1":"Manejo Imediato da Crise Aguda: Vias Aéreas & Farmacoterapia Escalonada","sub":"Sequência de suporte respiratório, escolha do benzodiazepínico por via de acesso e dosagens em mg/kg.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Medidas Gerais Imediatas de Suporte (Minuto 0 ao 5) • Posicionar a criança em decúbito lateral • Abertura de via aérea e aspiração delicada de secreções se necessário. NUNCA introduzir objetos rígidos ou dedos na boca da cri... • Administrar oxigênio a 100% sob máscara facial com reservatório se houver cianose ou dessaturação (\\(SpO_2 < 94\\%\\)). • Checagem mandatória de Glicemia Capilar: • Glicose 10% (2 mL/kg em bolus IV/IO) • Aferir temperatura e administrar antitérmicos por via retal ou oral (quando consciente) para alívio térmico. • Benzodiazepínicos de 1ª Linha (Se Crise > 5 Minutos - SBP 2024 / PALS) • Fármaco & Via • Dose Recomendada • Particularidades Clínicas"},"ped-convulsao-fluxograma":{"m":"ped-convulsao","h1":"Fluxograma de Crise Convulsiva & Convulsão Febril","sub":"Algoritmo decisório integrado: manejo agudo cronometrado, triagem simples vs complexa e indicação de punção lombar.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma de Crise Febril e Estado de Mal Epiléptico na Infância (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-convulsao-status-epilepticus":{"m":"ped-convulsao","h1":"Estado de Mal Epiléptico Pediátrico (Status Epilepticus): Protocolo Cronometrado","sub":"Manejo das drogas de 2ª linha (Levetiracetam vs Fenitoína vs Fenobarbital) e suporte intensivo de via aérea.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição Operacional Moderna (\\(t_1\\) e \\(t_2\\)) • Estado de Mal Epiléptico (EME) • Ponto \\(t_1\\) (5 minutos para crises convulsivas): • Ponto \\(t_2\\) (30 minutos): • Drogas de 2ª Linha (Minuto 10 ao 20 - Choque Refratário a BZD) • Anticonvulsivante de 2ª Linha • Dose de Ataque IV/IO • Perfil de Segurança & Escolha • Fármaco de escolha moderna • Droga de PRIMEIRA ESCOLHA estrita em NEONATOS (< 28 dias) • 40 a 60 mg/kg IV (máx 4.500 mg) infundido em 5 a 10 min • 20 mg/kg IV (máx 1.000-1.500 mg) a no máximo 1 mg/kg/min (em SF 0,9%) • 40 mg/kg IV infundido em 5 a 10 min • 20 mg/kg IV lento"},"ped-convulsao-espasmos-west":{"m":"ped-convulsao","h1":"Espasmos Infantis & Síndrome de West: Diagnóstico e Emergência Terapêutica","sub":"Tríade patognomônica, padrão de hipsarritmia no EEG e farmacoterapia específica com ACTH ou Vigabatrina.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Tríade Clássica da Síndrome de West (SBP 2024) • Síndrome de West • 3 e 8 meses de vida • 1. Espasmos Epilépticos Infantis: • em salvas / agrupamentos • 2. Regressão ou Estagnação do Desenvolvimento Neuropsicomotor (DNPM): • 3. Hipsarritmia no Eletroencefalograma (EEG Intercrítico): • Tratamento Farmacológico Específico de 1ª Linha • Protocolo Terapêutico de Urgência: • Hormônio Adrenocorticotrófico (ACTH) ou Corticoide Oral em Altas Doses: • Vigabatrina: • Fármaco de PRIMEIRA ESCOLHA ABSOLUTA se a Síndrome de West for secundária à ESCLEROSE TUBEROSA"},"ped-convulsao-caso":{"m":"ped-convulsao","h1":"Caso Clínico Interativo: Lactente de 16 Meses com Crise Convulsiva Febril Aguda","sub":"Tomada de decisão clínica baseada nas diretrizes do Tratado de Pediatria SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Desafio Terapêutico & Tomada de Decisão: • Tratado de Pediatria da SBP (6ª Edição, 2024) • Como classificar a crise convulsiva deste lactente (Simples vs Complexa)? Justifique com base nos critérios clínicos observados. • A realização de Punção Lombar (Líquor), Tomografia de Crânio ou Eletroencefalograma está indicada neste momento? • Qual a conduta terapêutica e farmacológica imediata para este caso? • Quais orientações mandatórias devem ser transmitidas aos pais sobre o risco futuro de epilepsia e prevenção de novas crises? • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Classificação Semiológica:"},"ped-coqueluche-fc-definicao":{"m":"ped-coqueluche-fc","h1":"Coqueluche & Fibrose Cística: Visão Geral & Etiopatogenia","sub":"Duas causas cruciais de tosse persistente e morbidade respiratória grave na infância: infecção por Bordetella pertussis e mutações no gene CFTR.","flow":0,"info":1,"presc":0,"caso":0,"kw":"1. Coqueluche (\"Tosse Comprida\" / Pertussis) • Coqueluche • Tratado de Pediatria da SBP (6ª Edição, 2024) • Vulnerabilidade Máxima em Lactentes Jovens (< 6 meses): • Lactentes que ainda não completaram o esquema primário de três doses da vacina Pentavalente (2, 4 e 6 meses) concentram mais de... • A toxina pertussis causa paralisia do epitélio mucociliar, acúmulo de secreção viscosa e extrema hiperleucocitose com linfocito... • 2. Fibrose Cística (Mucoviscidose) • Fibrose Cística (FC) • Genética: • F508del (deleção do códon de fenilalanina na posição 508) • Fisiopatologia do Canal CFTR: • Tríade Clínica Clássica: • Fluxograma e Infográfico: Coqueluche & FC (SBP 2024)"},"ped-coqueluche-fc-semiologia":{"m":"ped-coqueluche-fc","h1":"Semiologia em 4 Eixos & As Três Fases da Coqueluche","sub":"Cronograma clínico temporal da B. pertussis: fase catarral, fase paroxística com guincho e fase de convalescença.","flow":0,"info":0,"presc":0,"caso":0,"kw":"As Três Fases Clínicas Clássicas da Coqueluche (SBP 2024) • Fase Clínica • Duração Temporal • Sintomas Cardinais • Relevância Terapêutica / Alerta • 1. Fase Catarral • 1 a 2 semanas • 2. Fase Paroxística • 2 a 6 semanas • Acessos de tosse paroxística em salva (5 a 15 golpes expiratórios sucessivos sem pausa) • Guincho Inspiratório • erradicar a transmissão bacteriana • 3. Fase de Convalescença • 2 a 4 semanas • Atenção Crítica: O Quadro Atípico no Lactente Jovem (< 3 Meses) • A Coqueluche Sem Guincho: • NÃO OCORRE • Episódios súbitos de APNEIA e CIANOSE perioral profunda • Engasgos repetidos durante as mamadas seguidos de flacidez muscular e palidez;"},"ped-coqueluche-fc-diagnostico":{"m":"ped-coqueluche-fc","h1":"Diagnóstico Laboratorial & O Marcador da Hiperleucocitose","sub":"Técnicas de PCR em tempo real, cultura de Bordet-Gengou e o valor prognóstico da linfocitose absoluta exuberante.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Métodos de Coleta & Confirmação Microbiológica (MS / SBP) • Método Diagnóstico • Técnica de Coleta Obrigatória • Sensibilidade & Janela de Oportunidade • Reação em Cadeia da Polimerase (PCR em Tempo Real) • Dacron ou Rayon • Alta sensibilidade (> 90%) • Cultura de Secreção Nasofaríngea • Bordet-Gengou ou Regan-Lowe • O Hemograma Típico da Coqueluche: Linfocitose Absoluta • Achado Hematológico Quase Patognomônico: • Leucocitose Exuberante: • 20.000 e 50.000/mm³ • Linfocitose Absoluta: • 60% a 80% de linfócitos maduros • Sinal de Alarme Crítico (Hiperleucocitose Maligna): • > 50.000 a 100.000/mm³"},"ped-coqueluche-fc-tratamento":{"m":"ped-coqueluche-fc","h1":"Manejo Farmacológico & Quimioprofilaxia de Contactantes","sub":"Esquemas terapêuticos de primeira linha com Azitromicina, Claritromicina e o bloqueio domiciliar de transmissão.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Esquema Antimicrobiano Padronizado (SBP / Ministério da Saúde 2024) • Antimicrobiano • Faixa Etária • Posologia & Duração • Vantagens Clínicas & Cuidados • Azitromicina (1ª Linha Universal) • Todas as idades • 10 mg/kg/dia • 5 dias • Droga de escolha absoluta. • Claritromicina (Alternativa) • 15 mg/kg/dia • 7 dias • Sulfametoxazol + Trimetoprima (SMX-TMP) • > 2 meses de idade • 8 mg/kg/dia de TMP • 14 dias • Quimioprofilaxia Pós-Exposição Obrigatória dos Contatos Domiciliares • Diretriz de Saúde Pública da SBP: • Azitromicina (mesma dose e tempo do tratamento) • TODOS OS CONTACTANTES DOMICILIARES ÍNTIMOS • Crianças e adultos que compartilham o mesmo domicílio;"},"ped-coqueluche-fc-fluxograma":{"m":"ped-coqueluche-fc","h1":"Fluxograma: Coqueluche & Triagem de Fibrose Cística","sub":"Árvore de decisão clínica sequencial da tosse paroxística à interpretação do teste do suor.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma e Infográfico: Coqueluche & FC (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-coqueluche-fc-triagemfc":{"m":"ped-coqueluche-fc","h1":"Triagem Neonatal (IRT) & O Teste do Suor Gibson-Cooke","sub":"Algoritmo oficial do Teste do Pezinho para Fibrose Cística e os pontos de corte diagnósticos de cloreto no suor.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Algoritmo de Triagem Neonatal: Tripsina Imunorreativa (IRT) • 1ª Amostra de IRT (Teste do Pezinho: 3º ao 5º dia de vida): • 2ª Amostra de IRT Obrigatória: • até no máximo 30 dias de vida • Interpretação do Teste do Suor por Iontoforese com Pilocarpina (Padrão-Ouro) • Concentração de Cloreto no Suor • Classificação Diagnóstica • Conduta Médica Mandatória (SBP 2024) • Cloreto no Suor < 30 mEq/L • Cloreto no Suor entre 30 e 59 mEq/L • Cloreto no Suor ≥ 60 mEq/L • Confirmação formal em 2 dosagens elevadas independentes"},"ped-coqueluche-fc-manejofc":{"m":"ped-coqueluche-fc","h1":"Manejo Multidisciplinar da FC & Terapia com Moduladores","sub":"Reposição de enzimas pancreáticas, suplementação vitamínica lipossolúvel (ADEK), fisioterapia respiratória e moduladores de CFTR.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Os 4 Pilares do Manejo Clínico Tradicional da Fibrose Cística • Pilar Terapêutico • Medicamentos & Modalidades • Objetivo Clínico • 1. Terapia de Reposição Enzimática Pancreática (TREP) • 2. Suplementação de Vitaminas Lipossolúveis (ADEK) • 3. Depuração Mucociliar Pulmonar Diária • Alfa-dornase inalatória (rhDNase 2,5 mg/dia): • Solução Salina Hipertônica a 7% inalatória: • Fisioterapia respiratória diária: • 4. Terapia Antimicrobiana & Supressão de Pseudomonas • A Revolução dos Moduladores de CFTR (Terapia Genética Alvo) • Modificadores da História Natural da Fibrose Cística: • Potencializadores (ex: Ivacaftor): • Corretores de CFTR (ex: Elexacaftor, Tezacaftor):"},"ped-coqueluche-fc-caso":{"m":"ped-coqueluche-fc","h1":"Caso Clínico: Lactente de 2 Meses com Acessos de Tosse e Cianose","sub":"Reconhecimento da coqueluche na emergência, interpretação do hemograma com linfocitose e profilaxia de contactantes.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico na Sala de Emergência: • Sinais Vitais: • Durante o Atendimento: • Ausculta Pulmonar: • Exames Laboratoriais Rápidos: • Hemograma Completo: • Leucócitos Totais: 38.500/mm³ • 74% de linfócitos típicos maduros • Radiografia de Tórax: • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Diagnóstico Sindrômico & Confirmação: • COQUELUCHE TÍPICA NA FASE PAROXÍSTICA (Bordetella pertussis): • leucocitose importante (38.500) com linfocitose absoluta marcante (> 28.000 linfócitos) • Confirmação Laboratorial Padrão:"},"ped-crescimento-definicao":{"m":"ped-crescimento","h1":"Crescimento Físico Infantil & Antropometria: Vigilância Sistemática","sub":"Conceituação do crescimento como indicador sentinela da saúde global da criança, fases biológicas e curvas de referência da OMS.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Fundamentos Biológicos do Crescimento Infantil • Tratado de Pediatria da SBP (6ª Ed., 2024) • Fases do Crescimento Humano (Modelo de Karlberg - ICP): • Fase Lactente (Infancy - 0 a 2 anos): • Fase Infantil (Childhood - 2 anos até o início da puberdade): • Fase Puberal (Puberty): • Padrão Oficial de Referência: Curvas da OMS (WHO 2006 / 2007) • Faixa Etária • Padrão de Referência • População Base do Estudo • Significado Clínico • 0 a 5 anos incompletos (0 a 59 meses) • Padrão Prescritivo: • 5 a 19 anos • Padrão Descritivo: • Fluxograma Oficial de Investigação da Baixa Estatura Infantil (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-crescimento-antropometria":{"m":"ped-crescimento","h1":"Semiotécnica da Medição Antropométrica & Interpretação de Escores-Z","sub":"Padronização metodológica para medição de comprimento, estatura, perímetro cefálico e classificação por desvios-padrão.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Técnica Correta de Aferição dos Parâmetros Antropométricos • Parâmetro • Idade & Instrumento • Técnica Semiológica Recomendada (SBP 2024) • Armadilhas & Cuidados • Comprimento (Decúbito Dorsal) • Estatura (Ortostática) • Plano Horizontal de Frankfurt • Perímetro Cefálico (PC) • Classificação Universal por Escore-Z e Percentis (OMS / SBP) • Escore-Z (DP) • Percentil Equivalente • Estatura / Idade (E/I) • Peso / Idade (P/I) • IMC / Idade (≥ 5 anos) • > +3 DP • > +2 a +3 DP • > +1 a +2 DP • -2 a +1 DP • -3 a < -2 DP • < -3 DP"},"ped-crescimento-velocidade":{"m":"ped-crescimento","h1":"Velocidade de Crescimento & Cálculo do Alvo Genético Parental","sub":"O parâmetro mais dinâmico da puericultura e a determinação do canal genético de crescimento estatural.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Velocidade de Crescimento (VC): O Parâmetro Mais Importante • a velocidade de crescimento (cm/ano) • Velocidades Médias de Crescimento Fisiológico por Faixa Etária (SBP 2024): • 1º Ano de Vida: • 25 cm/ano • 2º Ano de Vida: • 12 a 13 cm/ano • 3º Ano de Vida: • 8 a 9 cm/ano • 4º Ano até o início da Puberdade: • 5 a 7 cm/ano • Estirão Puberal: • Alerta Clínico: • Cálculo do Alvo Genético Parental (Fórmulas de Tanner) • Fórmula do Alvo Parental (Método de Tanner): • Para Meninos: • Para Meninas:"},"ped-crescimento-baixa-estatura":{"m":"ped-crescimento","h1":"Investigação Diagnóstica da Baixa Estatura: Roteiro em 4 Etapas","sub":"Diferenciação estruturada entre causas desproporcionadas, variantes normais e baixa estatura patológica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição Operacional de Baixa Estatura • Tratado de Pediatria SBP 2024 • Baixa Estatura • Escore Z -2 (ou abaixo do Percentil 3) • Etapa • Pergunta Clínica • Método de Avaliação • Direcionamento Diagnóstico • 1ª Etapa • Proporcionada • Desproporcionada • 2ª Etapa • Velocidade de Crescimento (VC) • 3ª Etapa • Idade Óssea (IO) • 4ª Etapa • Técnica da Relação Segmento Superior / Inferior (SS/SI) • Ao Nascimento: • 1,7 • Aos 3 Anos: • 1,3 • Aos 7 a 10 Anos: • 1,0 • No Adulto: • 0,9 a 1,0"},"ped-crescimento-fluxograma":{"m":"ped-crescimento","h1":"Fluxograma Oficial de Investigação da Baixa Estatura Infantil","sub":"Árvore de decisão clínica sequencial estruturada de acordo com as diretrizes da Sociedade Brasileira de Pediatria (2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Investigação da Baixa Estatura Infantil (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-crescimento-etiologias":{"m":"ped-crescimento","h1":"Variantes Normais do Crescimento vs Baixa Estatura Patológica","sub":"Diferenciação clínica precisa entre Retardo Constitucional (CDRN), Baixa Estatura Familiar e Causas Orgânicas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela Comparativa Mandatória: CDRN vs Baixa Estatura Familiar • Característica • Baixa Estatura Familiar • Retardo Constitucional do Crescimento e Puberdade (CDRN) • História Familiar • Velocidade de Crescimento • Idade Óssea (IO) • Idade Óssea = Idade Cronológica • Idade Óssea ATRASADA • Início da Puberdade • Puberdade Atrasada • Previsão de Estatura Final • NORMAL • Conduta Médica SBP • Principais Causas de Baixa Estatura Patológica Proporcionada • Desnutrição Energético-Proteica & Doença Celíaca: • Endocrinopatias: • Hipotireoidismo (Adquirido/Hashimoto): Ganho de peso com parada de crescimento estatural (velocidade de crescimento severamente..."},"ped-crescimento-alta-estatura":{"m":"ped-crescimento","h1":"Alta Estatura na Infância: Classificação e Abordagem Racional","sub":"Estatura > +2 DP, gigantismo hipofisário, síndromes genéticas e critérios de encaminhamento.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição & Diagnóstico Diferencial da Alta Estatura • Estatura para Idade > Escore Z +2 (ou Percentil > 97) • Grupo Etiológico • Exemplos Clínicos • Achados Clínicos & Laboratoriais • Conduta Especializada • Alta Estatura Familiar • Causas Endócrinas • Síndromes Genéticas Dismórficas • Síndrome de Marfan • Síndrome de Sotos • Síndrome de Klinefelter"},"ped-crescimento-caso":{"m":"ped-crescimento","h1":"Caso Clínico Simulado: Investigação de Baixa Estatura em Escolar","sub":"Avaliação antropométrica longitudinal, interpretação da idade óssea e tomada de decisão fundamentada na SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Exame Físico e Antropometria: • Estatura Atual: • Peso: • Segmentos Corporais: • Genitália e Pelos: • Histórico Antropométrico: • Dados Familiares: • Exames Complementares Trazidos: • Idade Óssea de 8 anos e 6 meses • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Diagnóstico Principal: • Retardo Constitucional do Crescimento e da Puberdade (CDRN) • 2. Raciocínio Diagnóstico Fundamentado: • Cálculo do Alvo Parental: • Velocidade de Crescimento (VC): • Idade Óssea Significativamente Atrasada: • Histórico Familiar Típico: • Prognóstico: • 3. Conduta Recomendada pela SBP: • Tranquilização e Orientação à Família e ao Paciente:"},"ped-cuidneonat-definicao":{"m":"ped-cuidneonat","h1":"Classificação por Idade Gestacional & Peso ao Nascer","sub":"Seção 10 (Neonatologia), Cap. 2 — Diretrizes Oficiais da Sociedade Brasileira de Pediatria (2024)","flow":0,"info":1,"presc":0,"caso":0,"kw":"Classificação pela Idade Gestacional (OMS / SBP) • Pré-termo (Prematuro): • < 37 semanas completas • Prematuro extremo: < 28 semanas • Muito prematuro: 28 a 31 semanas e 6 dias • Prematuro moderado: 32 a 33 semanas e 6 dias • Prematuro tardio: 34 a 36 semanas e 6 dias • A Termo: • 37 semanas e 41 semanas e 6 dias • Termo precoce: 37 a 38 semanas e 6 dias • Termo pleno: 39 a 40 semanas e 6 dias • Termo tardio: 41 semanas a 41 semanas e 6 dias • Pós-termo: • ≥ 42 semanas completas • Classificação pelo Peso ao Nascer & Relação Peso x IG • Faixas de Peso Absoluto: • Baixo Peso ao Nascer (BPN): • Muito Baixo Peso (MBPN): • Extremo Baixo Peso (EBPN): • Macrossômico:"},"ped-cuidneonat-idade-gestacional":{"m":"ped-cuidneonat","h1":"Avaliação Clínica da Idade Gestacional: Capurro & New Ballard","sub":"Métodos Físicos e Neurológicos Padronizados para Recém-Nascidos","flow":0,"info":0,"presc":0,"caso":0,"kw":"Método de Capurro Somático (RN ≥ 29 semanas) • Parâmetro Físico • 0 Pontos • 5 Pontos • 10 Pontos • 15 Pontos • 20 Pontos • Textura da Pele • Forma da Orelha • Glândula Mamária • Pregas Plantares • Formação do Mamilo • Escore de New Ballard (Prematuros Extremos de 20 a 44 semanas) • 6 critérios neuromusculares • 6 critérios físicos"},"ped-cuidneonat-exame-fisico":{"m":"ped-cuidneonat","h1":"Exame Físico Inicial do RN & Reflexos Primitivos","sub":"Diagnóstico Diferencial no Crânio, Lesões Benignas de Pele e Neurologia Primitiva","flow":0,"info":0,"presc":0,"caso":0,"kw":"Bossa Serossanguínea vs Cefaloematoma: Diferenciação Clássica • Característica • Bossa Serossanguínea (Caput Succedaneum) • Cefaloematoma • Localização Anatômica • Limites Suturais • ULTRAPASSA as linhas de sutura • RESPEITA as linhas de sutura • Consistência • Momento de Surgimento • Resolução • Risco Associado • Lesões Cutâneas Fisiológicas Benignas do Recém-Nascido • Mancha Mongólica: • Milium Sebáceo: • Eritema Tóxico Neonatal: • Reflexos Primitivos Arcaicos do Neonato • Reflexo de Moro: • Preensão Palmar e Plantar: • Reflexo Tônico-Cervical Assimétrico: • Reflexo de Sucção & Busca:"},"ped-cuidneonat-triagem":{"m":"ped-cuidneonat","h1":"As 4 Triagens Físicas Obrigatórias em Maternidade","sub":"Teste do Coraçãozinho, Teste do Olhinho, Teste da Orelhinha & Teste da Linguinha","flow":0,"info":0,"presc":0,"caso":0,"kw":"Teste do Coraçãozinho (Oximetria de Pulso) • Objetivo: • Momento Ideal: • 24 e 48 horas de vida • Locais de Medição Obrigatórios: • Membro Superior Direito (MSD – pré-ductal) • um dos Membros Inferiores (MI – pós-ductal) • Critério de NORMALIDADE: • Conduta se ALTERADO: • Repetir o exame em 1 hora • Solicitar Ecocardiograma nas primeiras 24 horas • Teste do Olhinho (Reflexo Vermelho de Bruckner) • Normal: • Alterado (Leucocoria / Assimetria / Manchas opacas): • urgente ao oftalmologista • Teste da Orelhinha & 👅 Teste da Linguinha • Triagem Auditiva (Orelhinha): • Sem Indicadores de Risco para Deficiência Auditiva (IRDA):"},"ped-cuidneonat-fluxograma":{"m":"ped-cuidneonat","h1":"Fluxograma de Triagens & Cuidados Neonatais","sub":"Algoritmo Visual Completo das Triagens Físicas e Biológicas com Critérios de Alta da Maternidade","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo de Triagens Neonatais Universais & Critérios de Alta (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-cuidneonat-teste-pezinho":{"m":"ped-cuidneonat","h1":"Triagem Neonatal Biológica: Teste do Pezinho (PNTN & Ampliado)","sub":"Momento de Coleta, Doenças do Programa Nacional e Ampliação pela Lei 14.154","flow":0,"info":0,"presc":0,"caso":0,"kw":"Momento Correto da Coleta • 3º e o 5º dia de vida • Por que não coletar nas primeiras 48h? • Coleta em Prematuros / Transfundidos: • Doenças Rastradas no Programa Nacional de Triagem Neonatal (PNTN) • Doença • Marcador Laboratorial • Importância do Diagnóstico Precoce • 1. Fenilcetonúria (PKU) • 2. Hipotireoidismo Congênito • 3. Doença Falciforme & Hemoglobinopatias • 4. Fibrose Cística • 5. Hiperplasia Adrenal Congênita (HAC) • 6. Deficiência de Biotinidase • 7. Toxoplasmose Congênita"},"ped-cuidneonat-profilaxias":{"m":"ped-cuidneonat","h1":"Profilaxias Obrigatórias em Sala de Parto & Primeiras Horas","sub":"Vitamina K1, Profilaxia da Oftalmia Neonatal e Imunização Primária (SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Vitamina K1 (Fitomenadiona) — Prevenção da Doença Hemorrágica do RN • Dose Pediátrica Oficial: • 1 mg por via Intramuscular (IM) • 2. Profilaxia da Oftalmia Neonatal (Conjuntivite por Neisseria gonorrhoeae) • Opções Preconizadas pela SBP / MS: • Nitrato de Prata a 1% (Método de Credé): • Pomada de Eritromicina a 0,5% • Pode ser postergada por até 4 horas após o nascimento para não interferir no contato pele a pele e vínculo afetivo inicial. • 3. Vacinas de Nascimento (Hepatite B & BCG) • Vacina Hepatite B: • Imunoglobulina Humana Anti-Hepatite B (HBIG) 0,5 mL IM • Vacina BCG:"},"ped-cuidneonat-caso":{"m":"ped-cuidneonat","h1":"Caso Clínico Simulado: Teste do Coraçãozinho Alterado em Maternidade","sub":"Simulação de Conduta Sequencial Frente a Rastreio Positivo para Cardiopatia Crítica","flow":0,"info":0,"presc":0,"caso":1,"kw":"História & Apresentação Clínica • Teste do Coraçãozinho • Saturação no Membro Superior Direito (MSD): 96% • Saturação no Membro Inferior Direito (MID): 91% • Diferença entre MSD e MID: 5% • DIAGNÓSTICO & CONDUTA PASSO A PASSO (DIRETRIZES SBP 2024): • 1. Interpretação do Teste: • ALTERADO • 2. Conduta Imediata de Confirmação (Passo 1): • De acordo com o protocolo da SBP e Ministério da Saúde, frente a um primeiro teste alterado, deve-se repetir a aferição em 1 hora • 3. Reavaliação após 1 hora: • 4. Conduta Definitiva Obrigatória (Passo 2): • O teste é POSITIVO definitivo para suspeita de Cardiopatia Congênita Crítica. • SUSPENDER A ALTA HOSPITALAR IMEDIATAMENTE:"},"ped-desnutricao-definicao":{"m":"ped-desnutricao","h1":"Desnutrição Energético-Proteica (DEP): Classificações & Diagnóstico","sub":"Conceituação fisiopatológica, classificação histórica de Gomez, classificação de Waterlow e critérios diagnósticos da OMS no Tratado SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Dimensão Clínica da Desnutrição Infantil • Tratado de Pediatria SBP 2024 • Classificação • Índice Antropométrico Utilizado • Graus / Categorias • Utilidade Clínica Atual (SBP 2024) • Critérios OMS 2006 (Padrão Oficial) • Peso para Estatura (P/E) • Estatura para Idade (E/I) • Desnutrição Moderada • presença de edema nutricional • DESNUTRIÇÃO GRAVE • Classificação de escolha na prática moderna. • Classificação de Waterlow (1977) • Peso/Estatura • Estatura/Idade • Desnutrido Agudo (Wasted) • Desnutrido Pregresso / Crônico Compensado (Stunted) • Desnutrido Crônico Agudizado • Classificação de Gomez (1956) • EDEMA"},"ped-desnutricao-formas":{"m":"ped-desnutricao","h1":"Formas Clínicas Graves: Marasmo vs Kwashiorkor","sub":"Diferenciação semiológica e fisiopatológica minuciosa entre a desnutrição seca e a desnutrição edematosa.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz Diferencial Mandatória: Marasmo vs Kwashiorkor • Achado Clínico • MARASMO (Desnutrição Calórica Global) • KWASHIORKOR (Desnutrição Proteica com Edema) • Mecanismo Básico • Edema Nutricional • Idade Típica • 1º ano de vida (< 12 meses) • Tecido Adiposo Subcutâneo • Bola de Bichat facial é consumida • Fácies Típica • Fácies senil ou simiesca • Fácies de lua cheia • Fígado (Hepatomegalia) • Hepatomegalia importante • esteatose hepática • Cabelos & Pele • \"Sinal da Bandeira\": • Estado Comportamental • Apatia profunda"},"ped-desnutricao-fisiopatologia":{"m":"ped-desnutricao","h1":"Fisiopatologia da Adaptação Redutiva: Os Riscos Fatais","sub":"As alterações homeostáticas que tornam a criança desnutrida suscetível a colapso circulatório e morte rápida.","flow":0,"info":0,"presc":0,"caso":0,"kw":"O Conceito de \"Adaptação Redutiva\" (Tratado SBP 2024) • As 4 Vulnerabilidades Fatais na Desnutrição Grave: • Atrofia Miocárdica & Sobrecarga de Volume: • Hipotermia Silenciosa: • Hipoglicemia Assintomática: • Anergia Imunológica & Infecções Silenciosas:"},"ped-desnutricao-estabilizacao":{"m":"ped-desnutricao","h1":"Fase 1: Estabilização Hospitalar & Hidratação com ReSoMal","sub":"Os primeiros 7 dias de internação, solução de reidratação oral para desnutridos e antibioticoterapia empírica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Solução ReSoMal (Rehydration Solution for Malnutrition) • solução ReSoMal • Composição • SRO Padrão da OMS • ReSoMal para Desnutridos Graves • Justificativa Fisiopatológica SBP • Sódio (Na+) • Potássio (K+) • Zinco e Cobre • Antibioticoterapia Empírica Mandatória • toda criança com desnutrição grave deve receber antibioticoterapia empírica de amplo espectro na admissão • Sem Sinais Clínicos de Infecção Aparente: • Amoxicilina oral • Com Letargia, Hipotermia ou Sinais de Sepse/Choque: • Ampicilina IV (200 mg/kg/dia 6/6h) + Gentamicina IV (7,5 mg/kg/dia 1x/dia) • Adicionados (Zinco ~6 mg/L, Cobre)"},"ped-desnutricao-fluxograma":{"m":"ped-desnutricao","h1":"Fluxograma Oficial de Manejo Hospitalar da Desnutrição Grave","sub":"Os 10 passos sequenciais da OMS e SBP distribuídos nas fases de Estabilização, Transição e Reabilitação.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Manejo da Desnutrição Grave em 3 Fases (SBP 2024 / OMS) • Abrir em Tela Cheia • Infográfico HD"},"ped-desnutricao-refeeding":{"m":"ped-desnutricao","h1":"Fórmulas F-75 e F-100 & Prevenção da Síndrome de Realimentação","sub":"Diferenças nutricionais entre as dietas terapêuticas da OMS e o mecanismo fatal do Refeeding Syndrome.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Comparativo das Fórmulas Terapêuticas F-75 e F-100 • Característica • Fórmula F-75 (Fase de Estabilização) • Fórmula F-100 (Fase de Reabilitação) • Densidade Calórica • 75 kcal / 100 mL • 100 kcal / 100 mL • Concentração Proteica • 0,9 g de proteína / 100 mL • 2,9 g de proteína / 100 mL • Objetivo Clínico • Volume e Fracionamento • A Síndrome de Realimentação (Refeeding Syndrome) • Fisiopatologia do Colapso por Realimentação Agressiva: • secreção de Insulina • carreando consigo Fósforo, Potássio e Magnésio • hipofosfatemia súbita e severa • hipocalemia • hipomagnesemia • 75 kcal / 100 mL (baixa densidade inicial) • 100 kcal / 100 mL (alta densidade)"},"ped-desnutricao-reabilitacao":{"m":"ped-desnutricao","h1":"Fase 3: Reabilitação Nutricional & A Regra do Ferro","sub":"Momento exato de introduzir a suplementação de ferro, recuperação do apetite e critérios de alta hospitalar.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Regra de Ouro da Suplementação de Ferro (SBP 2024) • POR QUE O FERRO É PROIBIDO NA FASE 1 E SÓ DEVE SER DADO NA REABILITAÇÃO? • Transferrina • O ferro fica sob a forma de ferro livre plasmático não ligado • Além disso, o ferro livre desencadeia reações de Fenton gerando radicais livres hidroxila que destroem as membranas celulares j... • CONSEQUÊNCIA: Sepse fulminante e óbito! • 3 a 6 mg/kg/dia de ferro elementar • Critérios Oficiais para Alta Hospitalar • Resolução completa do edema nutricional por pelo menos 2 semanas consecutivas. • Escore-Z de Peso para Estatura (P/E) > -2 DP. • Apetite voraz e ganho de peso sustentado (> 5 a 10 g/kg/dia)."},"ped-desnutricao-caso":{"m":"ped-desnutricao","h1":"Caso Clínico Simulado: Manejo Hospitalar de Kwashiorkor Grave","sub":"Tomada de decisão na admissão hospitalar de desnutrição grave com edema e prevenção de iatrogenias baseada na SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Exame Físico de Admissão: • Sinais Vitais: • 35,2°C (Hipotermia) • Inspeção Geral: • edema bilateral simétrico nos membros inferiores (++++) • Abdome: • hepatomegalia macia a 4 cm do rebordo costal direito • Glicemia Capilar Imediata: • 42 mg/dL (Hipoglicemia) • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Diagnóstico Principal: • Desnutrição Energético-Proteica Grave na Forma Edematosa (KWASHIORKOR) • Hipoglicemia • Hipotermia • 2. Raciocínio Clínico Fundamentado: • Presença de edema bilateral obrigatório"},"ped-diarreia-definicao":{"m":"ped-diarreia","h1":"Doença Diarreica Aguda (DDA): Visão Geral & Etiopatogenia","sub":"Conceituação operacional, mecanismos secretor vs osmótico vs invasivo e o impacto da vacinação contra Rotavírus.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição Operacional da Diarreia Aguda (OMS / SBP 2024) • Doença Diarreica Aguda (DDA) • 3 ou mais evacuações amolecidas ou líquidas em um período de 24 horas • 14 dias • Classificação por Duração Temporal: • Diarreia Aguda: • Diarreia Persistente: • Diarreia Crônica: • Mecanismos Fisiopatológicos e Principais Agentes Etiológicos • Mecanismo Fisiopatológico • Agentes Mais Prevalentes • Características Fecais & Fisiopatologia • Osmótico • Rotavírus, Norovírus, Adenovírus entérico • Secretor • Escherichia coli enterotoxigênica (ETEC) • Invasivo / Inflamatório (Disenteria) • Shigella spp. • muco, pus e sangue visível"},"ped-diarreia-semiologia":{"m":"ped-diarreia","h1":"Avaliação do Estado de Hidratação: Tabela dos 4 Eixos da OMS","sub":"Sinais semiológicos objetivos para classificar a desidratação em graus e direcionar para o Plano A, B ou C.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quadro de Avaliação do Estado de Hidratação (Ministério da Saúde / SBP 2024) • Sinal Semiológico Avaliado • Coluna A: Sem Desidratação • Coluna B: Desidratação Clínica • Coluna C: Desidratação Grave (Choque) • 1. Estado Geral & Consciência • 2. Olhos • 3. Lágrimas • 4. Boca & Língua • 5. Sede (Ingestão de Líquidos) • Bebe avidamente, com muita sede • Bebe mal ou é incapaz de beber • 6. Sinal da Prega (Turgor Cutâneo) • muito lentamente (> 2s) • 7. Pulso Periférico & Perfusão • Filiformes/débeis, TEC > 3 segundos • Perda Ponderal Estimada • CLASSIFICAÇÃO & CONDUTA • DESIDRATAÇÃO GRAVE → APLICAR PLANO C (EXPANSÃO IV)"},"ped-diarreia-plano-a":{"m":"ped-diarreia","h1":"Plano A: Manejo Domiciliar da Criança sem Desidratação","sub":"As 4 regras sagradas do Plano A, reposição de líquidos pós-evacuação e suplementação universal de Zinco.","flow":0,"info":0,"presc":0,"caso":0,"kw":"As 4 Regras de Ouro do Plano A (OMS / SBP 2024) • Regra • Ação Obrigatória da Equipe de Saúde • Instrução Prática para a Família • 1. Aumentar a Oferta de Líquidos Precocemente • Crianças < 1 ano: • Crianças ≥ 1 ano: • 2. Manter a Alimentação Habitual Sem Diluição • 3. Suplementar Zinco Universalmente (10 a 14 dias) • Idade < 6 meses: • 10 mg de Zinco elementar ao dia • Idade ≥ 6 meses: • 20 mg de Zinco elementar ao dia • 4. Ensinar os Sinais de Alarme para Retorno Imediato"},"ped-diarreia-plano-b":{"m":"ped-diarreia","h1":"Plano B: Terapia de Reidratação Oral (TRO) na Unidade de Saúde","sub":"Técnica de administração supervisionada da SRO, cálculo de volume por peso e conduta nos vômitos incoercíveis.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Protocolo da Terapia de Reidratação Oral (TRO) Supervisionada • Plano B • Volume Recomendado de SRO: • 50 a 100 mL/kg • 4 a 6 horas • Técnica de Oferta: • colher ou copinho • Dieta Durante a TRO: • A única exceção é o Aleitamento Materno, que NUNCA deve ser interrompido! • Conduta diante de Vômitos: • aguardar 10 minutos • Indicações de Gastróclise por Sonda Nasogástrica (SNG): • 20 a 30 mL/kg/hora • Reavaliação Contínua: • Plano A + Zinco • Converter para Plano C"},"ped-diarreia-fluxograma":{"m":"ped-diarreia","h1":"Fluxograma de Manejo da Diarreia Aguda & Desidratação","sub":"Algoritmo decisório dos Planos A, B e C da OMS adaptado pelo Tratado de Pediatria SBP 2024.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo Integrado da DDA e Reidratação (OMS / SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-diarreia-plano-c":{"m":"ped-diarreia","h1":"Plano C: Expansão Venosa Rápida na Desidratação Grave","sub":"Protocolo de hidratação parenteral por faixa etária, fases de expansão e prevenção de sobrecarga hídrica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Protocolo Oficial do Plano C (Ministério da Saúde / SBP 2024) • Plano C • Faixa Etária • Solução de Escolha • Fase 1: Expansão Rápida • Fase 2: Manutenção & Déficit • Tempo Total • Lactentes < 1 ano de vida • Ringer Lactato • 100 mL/kg • 30 mL/kg em 30 minutos • 70 mL/kg nas 5 horas e meia seguintes • 6 horas • Crianças ≥ 1 ano de idade • 70 mL/kg nas 2 horas e meia seguintes • 3 horas • Conduta se Houver Choque Descompensado (Hipotensão / TEC > 3s / Pulso Ausente): • bolus venoso rápido de Ringer Lactato ou SF 0,9% na dose de 20 mL/kg em 10 a 20 minutos • Critérios de Transição para Terapia Oral • iniciar oferta de SRO via oral na dose de 5 mL/kg/hora"},"ped-diarreia-disenteria":{"m":"ped-diarreia","h1":"Disenteria, Antibioticoterapia Racional & Síndrome Hemolítico-Urêmica","sub":"Indicações estritas de antimicrobianos na diarreia sanguinolenta e o perigo do uso inadvertido na suspeita de EHEC / SHU.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quando Indicar Antibióticos na Diarreia Pediátrica? (SBP 2024) • Regra Universal: ANTIBIÓTICOS NÃO SÃO INDICADOS NA DIARREIA AQUOSA COMUM! • Indicações Precisas de Antibioticoterapia: • Disenteria Aguda com Comprometimento do Estado Geral (*Shigella spp.*): • Ciprofloxacino 15 mg/kg/dose 2x ao dia (30 mg/kg/dia) por 3 dias • Azitromicina 10 a 12 mg/kg/dia no 1º dia, seguido de 5 a 6 mg/kg/dia por mais 4 dias • Cólera Grave (*Vibrio cholerae*): • Giardíase Comprovada ou Amebíase: • Alerta Crítico: E. coli Produtora de Toxina Shiga (STEC / EHEC) e Risco de SHU • Risco Fatal de Precipitação de Síndrome Hemolítico-Urêmica (SHU):"},"ped-diarreia-caso":{"m":"ped-diarreia","h1":"Caso Clínico: Lactente com Vômitos, Diarreia Profusa e Sede Intensa","sub":"Aplicação prática do exame semiológico dos 4 eixos, cálculo volumétrico de SRO e prescrição completa da TRO.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico na Admissão: • Sinais Vitais: • 8.300g (perda aguda de 700g = cerca de 7,8% do peso corporal) • Avaliação do Estado de Hidratação: • bebe avidamente, com sede intensa • Exame Segmentar: • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Estratificação Semiológica do Grau de Desidratação: • A paciente preenche TODOS OS CRITÉRIOS DA COLUNA B (DESIDRATAÇÃO CLÍNICA / MODERADA) • Bebe avidamente, com muita sede • CLASSIFICAÇÃO: DESIDRATAÇÃO CLÍNICA (SEM CHOQUE) → PLANO B DA OMS / SBP. • 2. Cálculo e Condução da Terapia de Reidratação Oral (TRO - Plano B):"},"ped-distresp-rn-definicao":{"m":"ped-distresp-rn","h1":"Avaliação do Desconforto Respiratório: Boletim de Silverman-Andersen","sub":"Seção 10 (Neonatologia), Cap. 12 — Diretrizes Oficiais da Sociedade Brasileira de Pediatria (2024)","flow":0,"info":1,"presc":0,"caso":0,"kw":"taquipneia (FR > 60 rpm) • tiragens intercostais/subcostais • retração esternal • batimento de asa nasal • gemido expiratório • Escala de Silverman-Andersen (BSA) • Boletim de Silverman-Andersen quanto maior a nota, MAIOR a gravidade do desconforto • Sinal Avaliado • 0 Pontos • 1 Ponto • 2 Pontos • Movimento Toracoabdominal • Tiragem Intercostal • Retração Xifoide • Batimento de Asa de Nariz • 0 pontos: • 1 a 5 pontos: • ≥ 6 pontos: • Algoritmo Diagnóstico & Terapêutico dos Distúrbios Respiratórios Neonatais • Abrir em Tela Cheia • Infográfico HD"},"ped-distresp-rn-sdrmh":{"m":"ped-distresp-rn","h1":"Síndrome do Desconforto Respiratório (Membrana Hialina)","sub":"Deficiência Primária de Surfactante em Prematuros & Reposição Exógena (SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fisiopatologia & Fatores de Risco • deficiência quantitativa e qualitativa de surfactante pulmonar • Fatores de Risco: • Prematuridade (< 34 semanas) • Filho de Mãe Diabética • Fatores de Proteção: • Radiografia de Tórax Típica • Infiltrado reticulogranular difuso e homogêneo com aspecto em \"vidro fosco\" ou \"vidro moído\". • Broncogramas aéreos visíveis • Volume pulmonar reduzido (hipoinsuflação) • Manejo Terapêutico & Surfactante Exógeno • Suporte Não Invasivo Precoce: • CPAP Nasal em sala de parto com PEEP de 5 a 6 cmH2O • Surfactante Exógeno Natural (Poractanto Alfa / Beractanto): • Dose de Ataque: • 100 a 200 mg/kg endotraqueal • Critério de Indicação SBP: • FiO2 > 30%"},"ped-distresp-rn-ttrn":{"m":"ped-distresp-rn","h1":"Taquipneia Transitória do Recém-Nascido (TTRN / Pulmão Úmido)","sub":"Retardo na Absorção do Líquido Pulmonar Fetal & Manejo Conservador","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fisiopatologia & Fatores Determinantes • cesarianas eletivas sem trabalho de parto • Perfil Típico: • Quadro Clínico: • bom estado geral e pouco esforço expiratório • 24 a 72 horas • Radiografia de Tórax Característica • Congestão Peri-Hilar Simétrica: • Líquido Cisural (Cisurite): • Hiperinsuflação Pulmonar: • Discreto derrame pleural laminar nos seios costofrênicos. • Conduta Terapêutica Baseada em Evidências • Suporte de Oxigênio: • CPAP Nasal se Desconforto Moderado: • O que NÃO Fazer (Erros Graves em Provas): • NUNCA usar Furosemida ou diuréticos!"},"ped-distresp-rn-sam-hppn":{"m":"ped-distresp-rn","h1":"Síndrome de Aspiração Meconial (SAM) & Hipertensão Pulmonar","sub":"Obstrução em Válvula, Pneumonite Química & Manejo com Óxido Nítrico Inalatório (iNO)","flow":0,"info":0,"presc":0,"caso":0,"kw":"Síndrome de Aspiração Meconial (SAM) • recém-nascidos a termo ou pós-termo (≥ 41 semanas) • Tríplice Mecanismo Patológico: • Obstrução Mecânica em Válvula: • altíssimo risco de Pneumotórax (15 a 30%) • Pneumonite Química e Inflamação: • Inativação Secundária do Surfactante: • Radiografia de Tórax: • Hipertensão Pulmonar Persistente Neonatal (HPPN) • shunt de sangue da direita para a esquerda (D-E) através do Forame Oval e do Canal Arterial • Semiologia & Diagnóstico Padrão-Ouro: • Gradiente de Oximetria Pré e Pós-Ductal: • > 5% a 10% • Teste da Hiperóxia Negativo: • Ecocardiograma: • Tratamento Padrão-Ouro da HPPN: • Óxido Nítrico Inalatório (iNO) na dose de 20 ppm"},"ped-distresp-rn-fluxograma":{"m":"ped-distresp-rn","h1":"Fluxograma de Distúrbios Respiratórios do RN","sub":"Diagnóstico Diferencial Clínico-Radiológico e Algoritmo de Suporte Escalonado (SBP 2024)","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo Diagnóstico & Terapêutico dos Distúrbios Respiratórios Neonatais • Abrir em Tela Cheia • Infográfico HD"},"ped-distresp-rn-suporte":{"m":"ped-distresp-rn","h1":"Suporte Ventilatório Escalonado & Antibioticoterapia","sub":"CPAP Nasal, Cânula de Alto Fluxo (CNAF), Ventilação Protetora e Esquemas Iniciais","flow":0,"info":0,"presc":0,"caso":0,"kw":"Escadinha de Suporte Ventilatório Neonatal (Diretrizes SBP) • CPAP Nasal (Padrão-Ouro Não Invasivo): • Cânula Nasal de Alto Fluxo (CNAF): • Ventilação Mecânica Invasiva Protetora: • Antibioticoterapia Empírica no Desconforto Respiratório Precoce • Pneumonia Neonatal / Sepse Precoce • Esquema de Escolha SBP: • Ampicilina IV: • Gentamicina IV:"},"ped-distresp-rn-complicacoes":{"m":"ped-distresp-rn","h1":"Complicações: Pneumotórax & Displasia Broncopulmonar","sub":"Escape Aéreo Agudo com Transiluminação e Critérios Atuais de Displasia (SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"Pneumotórax Neonatal Hipertensivo • Sinais de Alarme: • Diagnóstico à Beira do Leito: • Transiluminação Torácica com luz fria • Conduta Imediata de Emergência: • Displasia Broncopulmonar (DBP) — Nova Definição • Definição Oficial (Critérios NICHD / SBP 2024): • necessidade de oxigênio suplementar por pelo menos 28 dias de vida • 36 semanas de idade pós-menstrual • Leve: • Moderada: • Grave:"},"ped-distresp-rn-caso":{"m":"ped-distresp-rn","h1":"Caso Clínico Simulado: Desconforto Respiratório Precoce no Prematuro","sub":"Tomada de Decisão Terapêutica em Síndrome do Desconforto Respiratório","flow":0,"info":0,"presc":0,"caso":1,"kw":"História & Apresentação Clínica • Frequência respiratória: 76 rpm com gemido expiratório constante audível sem estetoscópio. • Tiragem intercostal acentuada com retração esternal e batimento de asa nasal evidente (Boletim de Silverman-Andersen = 7 pontos). • Oximetria em MSD marca 86% mesmo após aumento gradual da FiO2 no CPAP para 45%. • Gasometria arterial: pH = 7,22; PaCO2 = 58 mmHg; PaO2 = 49 mmHg; HCO3 = 20 mEq/L; BE = -5,5. • Radiografia de tórax: Infiltrado reticulogranular difuso homogêneo (\"vidro moído\") com broncogramas aéreos e volume pulmonar co... • DIAGNÓSTICO & CONDUTA PASSO A PASSO (DIRETRIZES SBP 2024): • 1. Diagnóstico Clínico-Radiológico:"},"ped-disturb-rn-definicao":{"m":"ped-disturb-rn","h1":"Distúrbios Metabólicos do RN: Homeostase da Transição","sub":"Seção 10 (Neonatologia), Cap. 8 e 22 — Diretrizes Oficiais da Sociedade Brasileira de Pediatria (2024)","flow":0,"info":1,"presc":0,"caso":0,"kw":"Transição Metabólica Feto-Neonatal • liberação de glucagon e catecolaminas • glicogenólise hepática • neoglicogênese • hipoglicemia neonatal patológica • Valores de Corte de Glicemia Preconizados pela SBP (2024) • Idade Pós-Natal • Meta Glicêmica Mínima Desejável • Nível de Alerta / Intervenção Imediata • Primeiras 4 horas de vida • 4 a 24 horas de vida • Após 24 horas de vida • Algoritmo Decisório de Hipoglicemia e Distúrbios Metabólicos Neonatais (SBP 2024) • Abrir em Tela Cheia • Infográfico HD • ≥ 40 mg/dL • < 25 mg/dL (Indicação de glicose IV imediata) • ≥ 45 mg/dL • < 35 mg/dL (Glicose IV se refratário a mamadas) • ≥ 45 a 50 mg/dL • < 45 mg/dL"},"ped-disturb-rn-hipoglicemia":{"m":"ped-disturb-rn","h1":"Hipoglicemia Neonatal: Rastreio de Risco & Sintomatologia","sub":"Filhos de Mães Diabéticas, PIG, GIG, Prematuros e Sinais Clínicos Neurolicopênicos","flow":0,"info":0,"presc":0,"caso":0,"kw":"Populações de Risco que Exigem Monitorização Glicêmica Sistemática • Filho de Mãe Diabética (FMD): • hiperinsulinismo fetal persistente • primeiras 1 a 2 horas de vida • Pequenos para a Idade Gestacional (PIG) e Prematuros (< 37 semanas): • primeiras 12 a 24 horas • Grandes para a Idade Gestacional (GIG > 4.000 g): • Asfixia Perinatal, Hipotermia ou Sepse: • Sinais Clínicos de Hipoglicemia (Adrenérgicos & Neurolicopênicos) • Sinais Adrenérgicos / Irritativos: • Tremores finos de extremidades (cessam ao segurar o membro) • Irritabilidade ao manuseio, choro estridente • Taquicardia e sudorese fria • Sinais Neurolicopênicos (Dano Cerebral):"},"ped-disturb-rn-tig":{"m":"ped-disturb-rn","h1":"Manejo da Hipoglicemia: Bolus de SG 10% & Cálculo da TIG","sub":"Posologia de Resgate Imediato e Fórmula Matemática da Taxa de Infusão de Glicose (SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Conduta na Hipoglicemia Sintomática ou Glicemia < 25 mg/dL • PASSO 1: BOLUS INTRAVENOSO DE RESGATE IMEDIATO • Soro Glicosado a 10% (SG 10%): • 2 mL/kg (equivale a 200 mg/kg de glicose pura) • Aviso de Segurança: • PASSO 2: MANUTENÇÃO CONTÍNUA COM TIG IMEDIATA • TIG de 4 a 6 mg/kg/min • 6 a 8 mg/kg/min • Fórmula Prática do Cálculo da TIG (SBP 2024) • TIG = [Volume total diário (mL/kg/dia) × % Glicose] / 144 • Exemplo Prático: • 5,0 mg/kg/min"},"ped-disturb-rn-hipocalcemia":{"m":"ped-disturb-rn","h1":"Hipocalcemia Neonatal: Diagnóstico & Correção","sub":"Valores de Corte, Manifestações de Irritabilidade Neuromuscular e Gluconato de Cálcio","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição & Fisiopatologia • Valores de Corte SBP: • Cálcio Iônico < 1,1 mmol/L • Cálcio Sérico Total: < 8,0 mg/dL • < 7,0 mg/dL • Hipocalcemia Precoce (≤ 72 horas): • Hipocalcemia Tardia (> 72 horas): • Tratamento da Hipocalcemia Sintomática (SBP 2024) • Correção de Urgência (Sintomas / Convulsão): • Gluconato de Cálcio a 10%: • 1 a 2 mL/kg (100 a 200 mg/kg) • via IV lenta em 10 a 15 minutos sob monitorização contínua da frequência cardíaca"},"ped-disturb-rn-fluxograma":{"m":"ped-disturb-rn","h1":"Fluxograma de Distúrbios Metabólicos do RN","sub":"Algoritmo Visual de Rastreio Glicêmico, Infusão de TIG e Manejo de Complicações","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo Decisório de Hipoglicemia e Distúrbios Metabólicos Neonatais (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-disturb-rn-policitemia":{"m":"ped-disturb-rn","h1":"Policitemia Neonatal & Exsanguinotransfusão Parcial","sub":"Hiperviscosidade Sanguínea, Trombose e Fórmula de Diluição Volêmica (SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição & Fatores Determinantes • Hematócrito venoso central ≥ 65% • Fatores de Risco: • Quadro Clínico: • Exsanguinotransfusão Parcial (ETP) com Soro Fisiológico • Indicação Formal: • Soro Fisiológico 0,9%"},"ped-disturb-rn-ecn":{"m":"ped-disturb-rn","h1":"Enterocolite Necrosante (ECN): Estadiamento de Bell","sub":"A Maior Emergência Gastrointestinal do Prematuro, Pneumatose e Conduta Clínica/Cirúrgica","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fisiopatologia Multifatorial • imaturidade da barreira mucosa intestinal • isquemia/lesão de hipofluxo mesentérico • alimentação enteral precoce com fórmula artificial • Critérios de Bell Modificados (Estadiamento SBP 2024) • Estágio de Bell • Quadro Clínico • Achado Radiológico • Conduta Terapêutica • I (Suspeita) • II (Confirmada) • PNEUMATOSE INTESTINAL • III (Avançada / Perfuração) • PNEUMOPERITÔNIO • LAPAROTOMIA EXPLORADORA DE URGÊNCIA"},"ped-disturb-rn-caso":{"m":"ped-disturb-rn","h1":"Caso Clínico Simulado: Hipoglicemia Sintomática em Filho de Mãe Diabética","sub":"Tomada de Decisão em Crise Hipoglicêmica com Cálculo Prático de TIG","flow":0,"info":0,"presc":0,"caso":1,"kw":"História & Apresentação Clínica • 2 horas de vida • 4.250 g (GIG > percentil 90) • tremores finos persistentes de membros superiores e mandíbula • 21 mg/dL • DIAGNÓSTICO & CONDUTA PASSO A PASSO (DIRETRIZES SBP 2024): • 1. Diagnóstico Clínico: • 2. Conduta Terapêutica de Emergência (NÃO aguardar o resultado laboratorial!): • Acesso Venoso e Bolus Imediato de Glicose: • Soro Glicosado a 10% (SG 10%) na dose de 2 mL/kg IV • 8,5 mL de SG 10% • Infusão Contínua Imediata de Manutenção (TIG): • TIG de 6 a 8 mg/kg/min • 15,3 mL/hora de SG 10% • Monitorização Glicêmica Estrita: • 30 minutos pós-bolus • 45 e 80 mg/dL • Estímulo da Dieta:"},"ped-dnpm-definicao":{"m":"ped-dnpm","h1":"Vigilância do Desenvolvimento Neuropsicomotor (DNPM)","sub":"Conceituação da neuroplasticidade precoce, princípios biológicos do desenvolvimento e metodologia de vigilância no Tratado SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Princípios Fundamentais do Neurodesenvolvimento Infantil • Tratado de Pediatria da SBP (6ª Ed., 2024) • neuroplasticidade • Leis Biológicas da Maturação do Sistema Nervoso Central: • Lei Craniocaudal: • Lei Próximo-Distal: • Da Reação Involuntária à Ação Voluntária: • Idade Corrigida em Prematuros: Regra Obrigatória • Idade Cronológica Corrigida • 2 anos de idade • 4 meses • Fluxograma Oficial de Vigilância do DNPM & Triagem de TEA (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-dnpm-marcos":{"m":"ped-dnpm","h1":"Matriz Completa de Marcos do DNPM nos Primeiros 24 Meses","sub":"Os 4 domínios clássicos de desenvolvimento avaliados sistematicamente em cada consulta de puericultura da SBP.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz Cronológica dos 4 Domínios (Tratado SBP 2024) • Idade • Motor Grosseiro • Motor Fino-Adaptativo • Linguagem & Comunicação • Pessoal-Social • 1 Mês • 2 Meses • Sustenta a cabeça • Sorriso Social Responsivo: • 3 Meses • 4 Meses • 6 Meses • Rola de prono para supino • Passa objetos de uma mão para a outra • Estranha pessoas desconhecidas • 9 Meses • Senta-se sem apoio de forma estável • Preensão com pinça inferior • 12 Meses (1 Ano) • anda com apoio ou dá os primeiros passos independentes • Pinça superior fina madura • Primeiras palavras com significado • 15 a 18 Meses • aponta com indicador para mostrar interesse • 24 Meses (2 Anos)"},"ped-dnpm-reflexos":{"m":"ped-dnpm","h1":"Reflexos Primitivos Arcaicos: Semiotécnica & Desaparecimento","sub":"Avaliação dos reflexos do tronco encefálico e medula, significado patológico de assimetria ou persistência além do prazo normal.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela dos Principais Reflexos Primitivos (SBP 2024) • Reflexo Primitivo • Estímulo & Resposta Fisiológica • Idade Normal de Desaparecimento • Significado Clínico & Patológico • Reflexo de Moro (Abraço) • 4 a 6 meses • Assimetria: • Ausência bilateral: • Persistência > 6m: • Tônico-Cervical Assimétrico (Magnus-de Kleijn / Esgrimista) • Preensão Palmar • 3 a 4 meses • Preensão Plantar • 9 a 12 meses • Reflexo de Sucção & Procura (Rooting) • Reflexo da Marcha e Apoio Plantar • 2 meses"},"ped-dnpm-escalas":{"m":"ped-dnpm","h1":"Escalas de Triagem do Desenvolvimento: Teste de Denver II","sub":"Aplicação prática do instrumento padronizado, interpretação dos 125 itens e pontuação de falhas e cautelas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Estrutura e Aplicação do Teste de Denver II • Teste de Triagem do Desenvolvimento de Denver II • não é um teste de inteligência (QI) nem gera diagnóstico definitivo • Interpretação dos Itens no Denver II: • Traçado da Linha de Idade: • Classificação do Desempenho em Cada Item: • Passou (P): A criança realizou a atividade com sucesso. • Falhou (F): A criança não conseguiu realizar a atividade. • Recusa (R): A criança recusou-se a cooperar. • Não Houve Oportunidade (NO): Cuidador nunca permitiu a experiência por receio. • Atraso (Delay): • Cautela (Caution): • Classificação Final do Teste de Denver II • Classificação do Teste • Critério Técnico • Conduta Médica SBP • Normal"},"ped-dnpm-fluxograma":{"m":"ped-dnpm","h1":"Fluxograma Oficial de Investigação de Atraso no DNPM","sub":"Algoritmo sequencial de rastreio de atraso neuropsicomotor e triagem de autismo infantil da SBP (2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Vigilância do DNPM & Triagem de TEA (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-dnpm-autismo":{"m":"ped-dnpm","h1":"Rastreio do Transtorno do Espectro Autista: M-CHAT-R/F","sub":"Aplicação do Modified Checklist for Autism in Toddlers entre 18 e 24 meses (Lei Federal nº 13.438/2017) e sinais de alerta precoces.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Marco Legal e Obrigação do Pediatra • M-CHAT-R/F (Modified Checklist for Autism in Toddlers, Revised with Follow-up) • 18 e 24 meses de idade • Os 3 Níveis de Risco do M-CHAT-R/F: • Baixo Risco (Escore 0 a 2): • Médio Risco (Escore 3 a 7): • Alto Risco (Escore 8 a 20): • Encaminhar imediatamente para intervenção precoce intensiva • Sinais Precoces de Alerta de TEA Antes dos 18 Meses (Red Flags) • Idade • Sinal de Alerta Vermelho (Red Flag) • Comportamento Esperado Normal • 6 Meses • 9 Meses • 12 Meses • Não atende quando chamado pelo nome • ausência de gestos comunicativos • 18 Meses • Ausência total de atenção compartilhada: • Qualquer Idade"},"ped-dnpm-intervencao":{"m":"ped-dnpm","h1":"Intervenção Precoce & Investigação de Atraso Global do DNPM","sub":"Diretriz de não-espera da SBP: encaminhar para estimulação antes mesmo de concluir a investigação etiológica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Princípio da Não-Espera: Janela de Oportunidade Terapêutica • \"NÃO ADOTE CONDUTA DE ESPERA ('VAMOS AGUARDAR O TEMPO DELE') DIANTE DE SINAIS DE ATRASO DO DNPM OU SUSPEITA DE TEA\" • Plano de Ação Interdisciplinar Imediato (SBP 2024): • Encaminhamento Imediato para Estimulação Precoce: • Terapia Baseada em Análise do Comportamento Aplicada (ABA): • Avaliação Auditiva Obrigatória: • PEATE / BERA • Investigação Etiológica Paralela:"},"ped-dnpm-caso":{"m":"ped-dnpm","h1":"Caso Clínico Simulado: Lactente com Suspeita de Atraso e Risco de TEA","sub":"Tomada de decisão em puericultura dos 18 meses, aplicação do M-CHAT-R/F e direcionamento baseado na SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Observação no Consultório e Exame Físico: • Motor Grosseiro: • Contato e Comunicação: • Atenção Compartilhada: • Brincadeira: • Aplicação do M-CHAT-R/F: • 9 pontos de falha • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Classificação do Risco: • Alto Risco de Transtorno do Espectro Autista (TEA) • 2. Raciocínio Diagnóstico Fundamentado: • O paciente apresenta a tríade clássica de prejuízo na comunicação social recíproca • Apresenta padrões repetitivos e restritos de comportamento • Por pontuar ≥ 8 no M-CHAT-R, o protocolo internacional e da SBP estabelece que não se perde tempo aplicando a entrevista de seg..."},"ped-drge-definicao":{"m":"ped-drge","h1":"Refluxo Gastroesofágico (RGE) & DRGE: Visão Geral e Fisiopatologia","sub":"Diferenciação conceitual obrigatória entre o processo maturacional fisiológico e a entidade patológica com morbidade clínica.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definições Operacionais (SBP / NASPGHAN / ESPGHAN 2024) • Conceito Clínico • Definição Fisiopatológica • Apresentação Clínica & Evolução • Refluxo Gastroesofágico Fisiológico (\"Refluxador Feliz\") • relaxamentos transitórios do esfíncter esofágico inferior (EEI) • excelente ganho de peso e estatura • Resolução espontânea em mais de 90-95% dos casos até 12 a 14 meses de vida • Doença do Refluxo Gastroesofágico (DRGE Pediátrica) • sintomas incômodos que afetam o bem-estar da criança e/ou complicações teciduais • Demanda intervenção terapêutica estruturada • Bases Fisiopatológicas no Lactente Jovem • Relaxamentos Transitórios do Esfíncter Esofágico Inferior (RTEEI):"},"ped-drge-semiologia":{"m":"ped-drge","h1":"Semiologia Clínica, Síndrome de Sandifer & Sinais de Alarme","sub":"Identificação minuciosa dos sinais de esofagite, repercussões sistêmicas e as bandeiras vermelhas de diagnósticos diferenciais cirúrgicos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Manifestações Clínicas da DRGE por Faixa Etária • Faixa Etária • Sintomas Típicos e Atípicos da DRGE • Manifestações Respiratórias Associadas • Lactentes (< 1-2 anos) • Síndrome de Sandifer • Crianças Maiores & Adolescentes • Sinais de Alarme (Red Flags): Diagnósticos Diferenciais Cruciais • Atenção Imediata: A presença de qualquer dos seguintes achados afasta o RGE fisiológico e exige investigação urgente: • Vômitos Biliosos (Verde-Escuro): • Vômitos em Jato, Explosivos, Não Biliosos no 1º Mês: • Estenose Hipertrófica do Piloro • Início Muito Precoce (< 1ª semana) ou Muito Tardio (> 6 meses): • Sintomas Neurológicos Associados: • Sinais Sistêmicos Graves:"},"ped-drge-diagnostico":{"m":"ped-drge","h1":"Diagnóstico Propedêutico: pHmetria, Impedanciometria & EDA","sub":"Indicações racionais de exames invasivos conforme as diretrizes conjuntas SBP / NASPGHAN / ESPGHAN 2024.","flow":0,"info":0,"presc":0,"caso":0,"kw":"O Papel de Cada Método Diagnóstico na DRGE Pediátrica • Exame Complementar • O que Avalia com Precisão • Indicações Principais & Limitações • Diagnóstico Clínico Puro • Padrão na atenção primária. • Impedanciometria Esofágica Multicanal associada à pHmetria (pH-IIM) • Padrão-Ouro para caracterizar o refluxo. • Endoscopia Digestiva Alta (EDA) com Múltiplas Biópsias • Obrigatória quando há sinais de esofagite grave: • Fundamental para diferenciar de Esofagite Eosinofílica (EoE: ≥ 15 eosinófilos por campo de grande aumento na biópsia). • Raio-X Contrastado de Esôfago, Estômago e Duodeno (REED / SEED) • NÃO serve para diagnosticar nem graduar DRGE!"},"ped-drge-conservador":{"m":"ped-drge","h1":"Manejo Não Farmacológico: Posição, Dieta & Espessamento","sub":"Intervenções posturais e nutricionais de 1ª linha recomendadas antes de qualquer intervenção medicamentosa.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Posicionamento Seguro vs Redução do Refluxo (SBP / AAP 2024) • Atenção Crucial de Segurança do Sono (Prevenção de Morte Súbita): • DECÚBITO DORSAL ESTRITO (BARRIGA PARA CIMA): • Elevação da Cabeceira do Berço: • Decúbito Ventral ou Lateral: • FORMALMENTE PROIBIDO DURANTE O SONO • Posição Vertical pós-mamada: • Intervenções Dietéticas e Fórmulas Anti-Regurgitação (AR) • Manutenção Rigorosa do Aleitamento Materno: • Fracionamento de Mamadas: • Espessamento da Dieta em Crianças sob Fórmula: • Teste de Exclusão de Proteína do Leite de Vaca (APLV): • 2 a 4 semanas"},"ped-drge-fluxograma":{"m":"ped-drge","h1":"Fluxograma Decisório: Do RGE Fisiológico ao Tratamento da DRGE","sub":"Árvore sequencial de tomada de decisão clínica para estratificação diagnóstica e escalonamento terapêutico.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo de Abordagem do RGE e DRGE no Lactente (SBP 2024) • Abrir em Tela Cheia • Infográfico HD • Síntese Estruturada dos Passos do Algoritmo Decisório • Triagem de Sinais de Alarme: • Avaliação do Estado Geral e Nutricional: • Presença de Sintomas Incômodos e Perda Ponderal: • Persistência de Esofagite ou Sintomas Graves:"},"ped-drge-farmacologico":{"m":"ped-drge","h1":"Tratamento Farmacológico da DRGE Pediátrica","sub":"Inibidores da Bomba de Prótons (IBP), antagonistas H2, dosagens em mg/kg e o papel dos procinéticos.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Supressores Ácidos: Inibidores da Bomba de Prótons (1ª Escolha) • Fármaco • Dose Pediátrica Padronizada • Instruções Práticas de Tomada & Apresentações • Omeprazol (1ª Linha) • 1,0 mg/kg/dia • 30 minutos antes da primeira refeição ou mamada da manhã • 4 a 8 semanas • Esomeprazol • Antagonistas dos Receptores H2 (Famotidina) • Famotidina: 0,5 a 1,0 mg/kg/dia • Limitação marcante: • Riscos do Uso Indiscriminado e Prolongado de IBP em Crianças: • pneumonia adquirida na comunidade, gastroenterite aguda bacteriana (*Clostridioides difficile*, *Salmonella*), enterocolite nec... • Por que os Procinéticos NÃO São Recomendados de Rotina? (Choosing Wisely SBP)"},"ped-drge-cirurgico":{"m":"ped-drge","h1":"Indicações Cirúrgicas, Esofagite Grave & Neuropatas","sub":"Critérios seletos para a realização da Fundoplicatura de Nissen e abordagem na paralisia cerebral.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fundoplicatura de Nissen Laparoscópica: Quando Indicar? • Indicações Formais • Falha documentada do tratamento farmacológico pleno otimizado por 8 a 12 semanas com IBP. • Episódios recorrentes de aspiração pulmonar com risco de vida (apneias obstrutivas com cianose / BRUE). • Estenose esofágica péptica refratária a dilatações endoscópicas. • Esofagite péptica erosiva persistente (Grau III ou IV de Savary-Miller) com sangramento ou Barrett. • A Criança com Encefalopatia Crônica (Neuropata) • Crianças com paralisia cerebral têm altíssima incidência de DRGE grave (> 50%) por alteração do tônus esofágico e espasticidade..."},"ped-drge-caso":{"m":"ped-drge","h1":"Caso Clínico: Irritabilidade às Mamadas, Arqueamento e Regurgitações","sub":"Diferenciação à beira do leito entre Refluxador Feliz e DRGE com Síndrome de Sandifer e conduta escalonada.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico e Antropometria: • Sinais Vitais: • Antropometria: • Exame Segmentar: • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Diagnóstico Clínico e Diferenciação do Refluxador Feliz: • DIAGNÓSTICO: DOENÇA DO REFLUXO GASTROESOFÁGICO (DRGE) COMPLICADA COM ESOFAGITE CLÍNICA. • Por que NÃO é Refluxador Feliz? • déficit evidente de ganho de peso • sintomas de sofrimento e dor • Reconhecimento da Síndrome de Sandifer: • Síndrome de Sandifer • 2. Necessidade de Exames Complementares: • NÃO HÁ INDICAÇÃO DE EXAMES INVASIVOS NO MOMENTO: • iniciar teste terapêutico empírico"},"ped-emerg-pcr-definicao":{"m":"ped-emerg-pcr","h1":"PCR Pediátrica: Peculiaridades Fisiopatológicas & Epidemiologia","sub":"Por que a PCR na infância é primariamente asfíxica/hipóxica e a distinção epidemiológica fundamental em relação à PCR no adulto.","flow":0,"info":1,"presc":1,"caso":0,"kw":"Diferença Fisiopatológica Fundamental: Criança vs Adulto (SBP 2024 / PALS) • Aspecto Clínico • Parada Cardiorrespiratória Pediátrica • Parada Cardiorrespiratória no Adulto • PCR Asfíxica / Hipóxica Progressiva: • PCR Súbita Cardíaca Primária: • Não-Chocáveis (> 80% a 90%): • Chocáveis (50% a 70% extra-hospitalar): • Crítica e Vital: • Prevenção: • Bradicardia Sintomática: A Emergência Pré-PCR na Infância • Conceito Clínico Fundamental SBP / PALS: • Frequência Cardíaca < 60 bpm associada a sinais de má perfusão tecidual sistêmica • DEVE-SE INICIAR IMEDIATAMENTE MASSAGEM CARDÍACA EXTERNA (RCP COMPLETA)! • PCR Pediátrica & Algoritmos PALS (SBP 2024) • Abrir em Tela Cheia"},"ped-emerg-pcr-bls":{"m":"ped-emerg-pcr","h1":"Suporte Básico de Vida (BLS Pediátrico): Técnicas de Alta Qualidade","sub":"Sequência C-A-B, relação compressão-ventilação, profundidade correta e técnicas específicas para lactente e criança.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Regras de Ouro da RCP de Alta Qualidade (SBP 2024 / PALS) • Frequência de Compressão: • 100 a 120 compressões por minuto • Profundidade Adequada: • 1/3 do diâmetro anteroposterior do tórax • 4 cm (1,5 polegada) em lactentes • 5 cm (2 polegadas) em crianças • Retorno Total do Tórax (*Chest Recoil*): • Minimizar Interrupções: • Evitar Hiperventilação: • Relação Compressão-Ventilação e Técnicas Anatômicas • Parâmetro de BLS • Lactente (< 1 ano) • Criança (1 ano até puberdade) • Pulso Braquial • Pulso Carotídeo • 30 compressões : 2 ventilações (30:2) • 15 compressões : 2 ventilações (15:2) • Técnica dos 2 Polegares com mãos circundando o tórax"},"ped-emerg-pcr-nao-chocaveis":{"m":"ped-emerg-pcr","h1":"Ritmos Não-Chocáveis: Assistolia & Atividade Elétrica Sem Pulso (AESP)","sub":"Prioridade máxima da Adrenalina ultraprecoce, protocolo da linha reta e busca ativa e reversão das causas 6H e 5T.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Algoritmo de Conduta Imediata nos Ritmos Não-Chocáveis (SBP 2024) • 1. RCP Imediata e Contínua (15:2 com 2 socorristas): • 2. Adrenalina Ultraprecoce (Prioridade Farmacológica Máxima): • Adrenalina deve ser administrada o mais rápido possível • Dose Pediátrica: • 0,01 mg/kg • 0,1 mL/kg da solução diluída a 1:10.000 • 3 a 5 minutos • 3. Ciclos de 2 Minutos de RCP: • Protocolo da Linha Reta na Suspeita de Assistolia (\"CAG\") • C - Cabos: • A - Amplitude (Ganho): • G - Guia / Derivação:"},"ped-emerg-pcr-chocaveis":{"m":"ped-emerg-pcr","h1":"Ritmos Chocáveis: Fibrilação Ventricular (FV) & TV sem Pulso","sub":"Sequência de desfibrilação escalonada (2 J/kg -> 4 J/kg), momento exato da Adrenalina e antiarrítmicos (Amiodarona e Lidocaína).","flow":0,"info":0,"presc":1,"caso":0,"kw":"Algoritmo Passo a Passo dos Ritmos Chocáveis (SBP 2024 / PALS) • 1. Reconhecimento de FV ou TV sem pulso no monitor: • 2. Primeiro Choque Desfibrilador: • 2 J/kg • IMEDIATAMENTE APÓS O CHOQUE: RETOMAR RCP POR 2 MINUTOS! • 3. Reavaliação de Ritmo após 2 minutos: Se persiste ritmo chocável: • Segundo Choque Desfibrilador: • 4 J/kg • Administrar Adrenalina: • 4. Reavaliação de Ritmo após 4 minutos: Se persiste ritmo chocável: • Terceiro Choque Desfibrilador: • Administrar Antiarrítmico de 1ª Escolha: • AMIODARONA: • 5 mg/kg em bolus rápido IV/IO • LIDOCAÍNA: • Situação Especial: Torsades de Pointes (TV Polimórfica) • Droga Específica:"},"ped-emerg-pcr-fluxograma":{"m":"ped-emerg-pcr","h1":"Fluxograma de Parada Cardiorrespiratória Pediátrica (PALS / SBP)","sub":"Algoritmo mestre integrado de reanimação avançada: diferenciação de ritmos, dosagens e protocolo dos 6 H's e 5 T's.","flow":1,"info":1,"presc":1,"caso":0,"kw":"PCR Pediátrica & Algoritmos PALS (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-emerg-pcr-etiologias":{"m":"ped-emerg-pcr","h1":"Causas Reversíveis de PCR na Infância: Os 6 H's e os 5 T's","sub":"Diagnóstico diferencial à beira-leito e terapias de reversão imediata preconizadas pelo PALS e SBP.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Os 6 H's da Pediatria (Etiologias Metabólicas e Respiratórias) • Causa (\"H\") • Pistas Diagnósticas • Tratamento Imediato Específico • Glicose 10% na dose de 2 mL/kg em bolus IV/IO • Os 5 T's (Etiologias Cardiovasculares, Mecânicas e Tóxicas) • 1. Tensão no Tórax (Pneumotórax Hipertensivo): • Toracocentese com agulha imediata • 2. Tamponamento Cardíaco: • Pericardiocentese de alívio • 3. Toxinas / Intoxicações Exógenas: • 4. Trombose Pulmonar (TEP): • 5. Trombose Coronariana: • Cristaloides isotônicos rápidos (10-20 mL/kg) ou concentrado de hemácias (10 mL/kg) • Hiperventilação moderada e Bicarbonato de sódio a 8,4% (1 mEq/kg) em casos selecionados"},"ped-emerg-pcr-pos-pcr":{"m":"ped-emerg-pcr","h1":"Cuidados Pós-Ressuscitação e Retorno da Circulação Espontânea (ROSC)","sub":"Metas de ventilação sem hiperóxia, controle hemodinâmico rigoroso e gerenciamento direcionado de temperatura (TTM).","flow":0,"info":0,"presc":1,"caso":0,"kw":"Metas Terapêuticas Imediatas no Pós-ROSC (SBP 2024 / PALS) • 1. Oxigenação e Ventilação Direcionadas (Evitar Hiperóxia e Hiperventilação): • Saturação de Oxigênio (\\(SpO_2\\)) entre 94% e 99% • hiperóxia é comprovadamente lesiva • Normocapnia (\\(PaCO_2\\) entre 35 e 45 mmHg) • 2. Otimização Hemodinâmica: • 3. Controle Direcionado de Temperatura (TTM - Targeted Temperature Management): • Prevenção Agressiva da Febre: • Normotermia estrita (36°C a 37,5°C) • Hipotermia terapêutica controlada (32°C a 34°C) • 4. Monitoramento Neurológico e Tratamento de Crises:"},"ped-emerg-pcr-caso":{"m":"ped-emerg-pcr","h1":"Caso Clínico Interativo: Criança em PCR Asfíxica por Aspiração de Corpo Estranho e Assistolia","sub":"Aplicação do algoritmo de suporte básico e avançado pediátrico do Tratado de Pediatria SBP 2024 em ritmo não-chocável.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • ausência total de pulso central • linha isoelétrica plana (linha reta) • Desafio Terapêutico & Tomada de Decisão: • Parada Cardiorrespiratória Pediátrica do Tratado de Pediatria SBP 2024 / PALS • Qual a relação compressão-ventilação e frequência de massagem cardíaca a serem aplicadas imediatamente pela equipe da emergênci... • Este ritmo é chocável ou não-chocável? Está indicada desfibrilação elétrica neste momento? • Qual o fármaco prioritário de primeira linha, dose exata para esta criança de 15 kg, via de administração e intervalo de repeti... • Qual a intervenção imediata sobre a causa reversível primária (hipóxia por corpo estranho na via aérea)?"},"ped-enurese-definicao":{"m":"ped-enurese","h1":"Enurese Noturna na Infância","sub":"Definição segundo a International Children's Continence Society (ICCS) e Tratado de Pediatria SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Epidemiologia • perda involuntária e intermitente de urina exclusivamente durante o sono em crianças com idade cronológica ≥ 5 anos • Herança Genética e Fatores de Risco • 77% • 44% • Diretriz Visual Integrada: Enurese Noturna • Abrir em Tela Cheia • Infográfico HD"},"ped-enurese-classificacao":{"m":"ped-enurese","h1":"Classificação Clínica: Monossintomática vs Não-Monossintomática","sub":"Diferenciação mandatória para conduta diagnóstica e prognóstica segundo a SBP 2024.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Subtipos Clínicos Fundamentais • Subtipo • Características Clínicas Distintivas • Implicação Terapêutica • Enurese Monossintomática (80% dos casos) • sem qualquer sintoma miccional diurno • Enurese Não-Monossintomática (20% dos casos) • Primária • Secundária"},"ped-enurese-etiologia":{"m":"ped-enurese","h1":"Tríade Fisiopatológica da Enurese Monossintomática","sub":"Interação entre poliúria noturna, capacidade vesical reduzida e limiar elevado do despertar.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Mecanismos Fisiopatológicos Integrados • 1. Poliúria Noturna por Menor Secreção Circadiana de ADH: • 2. Hiperatividade Detrusora Noturna e Redução da Capacidade Funcional da Bexiga: • 3. Distúrbio do Despertar (Sono Excessivamente Profundo):"},"ped-enurese-diagnostico":{"m":"ped-enurese","h1":"Investigação Diagnóstica & Diário Miccional","sub":"Abordagem racional, diário miccional de 48 horas e exames laboratoriais essenciais.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Roteiro de Investigação Ambulatorial (SBP 2024) • exames de imagem invasivos não são necessários • Diário Miccional de 48 Horas: • Exame de Urina Simples (EAS / Fita Reagente): • Exame Físico Dirigido: • Ultrassonografia Renal e de Vias Urinárias com Medida de Resíduo Pós-Miccional:"},"ped-enurese-fluxograma":{"m":"ped-enurese","h1":"Fluxograma Decisório: Enurese Noturna","sub":"Algoritmo clínico oficial baseado no Tratado de Pediatria SBP 2024.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretriz Visual Integrada: Enurese Noturna • Abrir em Tela Cheia • Infográfico HD"},"ped-enurese-tratamento":{"m":"ped-enurese","h1":"Uroterapia Padrão & Alarme Noturno","sub":"Medidas comportamentais fundamentais e uso do alarme sonoro como padrão-ouro curativo.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Uroterapia Comportamental (Obrigatória em Todos os Casos) • Restrição Hídrica Noturna: • Esvaziamento Vesical Programado: • Acesso Facilitado ao Banheiro: • Desmistificação e Ausência de Punições: • Tratamento da Constipação Intestinal: • Alarme Noturno (Tratamento de Escolha Curativo) • Protocolo de Uso do Alarme Noturno (SBP 2024): • único tratamento comprovadamente curativo • Mecanismo de ação: condicionamento operante que ensina o cérebro a reconhecer a sensação de plenitude vesical e interromper a m... • Duração do tratamento: mínimo de 2 a 3 meses contínuos • Critério de sucesso: manter o uso até que a criança atinja 14 noites secas consecutivas"},"ped-enurese-farmacologico":{"m":"ped-enurese","h1":"Tratamento Farmacológico com Posologia Rigorosa","sub":"Prescrição precisa de Desmopressina, contraindicações e prevenção de hiponatremia.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Protocolo de Desmopressina Oral (DDAVP) • Acetato de Desmopressina (Análogo Sintético da Vasopressina): • Apresentação em Comprimidos: • 0,2 mg oral • 0,4 mg/dia • Apresentação Melt (Liofilizado Sublingual): • 120 mcg sublingual • 240 mcg/dia • A formulação em spray nasal foi formalmente proscrita • Alerta Mandatório de Segurança: Prevenção de Hiponatremia e Convulsão • hiponatremia dilucional grave"},"ped-enurese-caso":{"m":"ped-enurese","h1":"Caso Clínico: Enurese Noturna","sub":"Tomada de decisão médica interativa baseada no Tratado de Pediatria SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"História Clínica & Exame Físico • Pergunta Clínica: • Discussão Clínica & Gabarito Oficial (SBP 2024): • 1. Diagnóstico Completo: ENURESE NOTURNA MONOSSINTOMÁTICA PRIMÁRIA. • 2. Opções Terapêuticas de Primeira Linha (SBP 2024): • Opção 1 (Padrão-Ouro Curativo): Alarme Noturno Sonoro • Opção 2 (Farmacológica): Acetato de Desmopressina oral (0,2 mg a 0,4 mg) ou Melt sublingual (120 mcg a 240 mcg) • Medidas comportamentais obrigatórias concomitantes: esvaziamento vesical antes de deitar e restrição de ingestão de líquidos na..."},"ped-exantematicas-definicao":{"m":"ped-exantematicas","h1":"Doenças Exantemáticas da Infância: Visão Geral & Classificação","sub":"Conceituação dos exantemas infecciosos e imunomediados, classificação morfológica elementar e vigilância epidemiológica nacional.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Importância Clínica dos Exantemas Pediátricos • Exantemas Pediátricos • Tratado de Pediatria da SBP (6ª Edição, 2024) • morfologia da lesão elementar • tempo de surgimento em relação à febre (pródromos) • presença de enantemas ou sinais patognomônicos • Classificação Morfológica das Lesões Elementares: • Exantema Maculopapular (Róseo ou Avermelhado): • Exantema Micropapular / Escarlatiniforme: • Exantema Vesiculobolhoso: • Exantema Purpúrico / Petequial: • NÃO desaparecem à digitopressão • Diagnóstico Diferencial das Doenças Exantemáticas (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-exantematicas-semiologia":{"m":"ped-exantematicas","h1":"Semiologia em 4 Eixos dos Exantemas Pediátricos","sub":"Roteiro metódico: evolução temporal em relação à febre, progressão anatômica, sinais enantemáticos e red flags.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Roteiro Semiológico em 4 Eixos dos Exantemas • junto com a febre • desaparece abruptamente no momento em que o exantema surge • Craniocaudal Lenta (2-3 dias): • Craniocaudal Rápida (< 24h): • Centrífuga (Inicia no Tronco): • Manchas de Koplik: • Manchas de Forchheimer: • Língua em Framboesa + Sinal de Pastia + Sinal de Filatov: • não clareiam à compressão por lâmina de vidro"},"ped-exantematicas-maculopapular":{"m":"ped-exantematicas","h1":"Sarampo, Rubéola, Exantema Súbito & Eritema Infeccioso","sub":"Diferenciação clínica minuciosa, períodos de incubação e transmissibilidade, manejo e profilaxia pós-exposição.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz Comparativa dos Principais Exantemas Maculopapulares (SBP 2024) • Doença / Etiologia • Pródromos & Sinais Clínicos Patognomônicos • Padrão do Exantema & Descamação • Tratamento / Conduta Específica SBP • Sarampo • tríade catarral (tosse seca intensa, coriza corpulenta e conjuntivite com fotofobia acentuada) • Manchas de Koplik • descamação furfurácea fina acastanhada • VITAMINA A EM 2 DOSES • Rubéola • Linfonodomegalia suboccipital, retroauricular e cervical posterior DOLOROSA • NÃO descama • Exantema Súbito (Roséola) • Febre alta súbita (39-40°C) por 3 a 5 dias • A febre CESSA EM CRISE (abruptamente) e surge o exantema maculopapular róseo no tronco"},"ped-exantematicas-vesiculares":{"m":"ped-exantematicas","h1":"Varicela, Escarlatina & Doença Mão-Pé-Boca","sub":"O polimorfismo regional da varicela, sinais clássicos da escarlatina bacteriana e manifestações do vírus Coxsackie.","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Varicela (Catapora • Vírus Varicela-Zóster - VVZ) • Achado Patognomônico: POLIMORFISMO REGIONAL • máculas, pápulas, vesículas com conteúdo claro em \"gota de orvalho\", pústulas e crostas • Distribuição centrípeta com intenso prurido, acometendo o couro cabeludo e mucosas. • Período de Contágio & Afastamento Escolar: • TODAS AS LESÕES ESTEJAM EM FASE DE CROSTA • Indicações Precisas de Aciclovir Oral (SBP 2024): • Indicar Aciclovir se: • 2. Escarlatina (Streptococcus pyogenes • Estreptococo do Grupo A) • Pródromos: • Exantema em \"Lixa\" / Escarlatiniforme: • Sinais Patognomônicos da Escarlatina: • Língua em Framboesa: • Sinal de Filatov (Fácies de Filatov):"},"ped-exantematicas-fluxograma":{"m":"ped-exantematicas","h1":"Fluxograma: Diagnóstico Diferencial dos Exantemas","sub":"Árvore de decisão estruturada baseada na morfologia da lesão e sinais de gravidade.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diagnóstico Diferencial das Doenças Exantemáticas (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-exantematicas-purpuricos":{"m":"ped-exantematicas","h1":"Red Flags: Exantemas Purpúricos & Meningococcemia","sub":"O teste da digitopressão, choque séptico fulminante por Neisseria meningitidis e diagnóstico diferencial com Púrpura de Henoch-Schönlein.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Meningococcemia Fulminante (Neisseria meningitidis) • A Emergência Pediátrica de Maior Letalidade: • Lesões Cutâneas Típicas: • púrpuras equimóticas com necrose central • Choque Séptico Vasoplégico: • CONDUTA IMEDIATA SEM QUALQUER ATRASO (SBP 2024): • CEFTRIAXONA 100 mg/kg IV IMEDIATAMENTE • Rifampicina oral • Diferenciação com a Púrpura de Henoch-Schönlein (Vasculite por IgA) • Aspecto Clínico • Meningococcemia Séptica • Púrpura de Henoch-Schönlein (PHS / IgA) • Estado Geral & Toxemia • Bom estado geral • Distribuição das Púrpuras • Púrpura Palpável simétrica gravitacional • membros inferiores e nádegas • Plaquetas no Sangue • Plaquetas NORMAIS ou ELEVADAS"},"ped-exantematicas-kawasaki":{"m":"ped-exantematicas","h1":"Doença de Kawasaki: Critérios Diagnósticos & Manejo","sub":"Vasculite de artérias de médio calibre, risco de aneurisma de artéria coronária e o protocolo de Imunoglobulina Humana IV + AAS.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Diagnósticos Formais da Doença de Kawasaki (AHA / SBP 2024) • Critério Obrigatório: FEBRE ALTA PERSISTENTE POR ≥ 5 DIAS, ASSOCIADA A PELO MENOS 4 DOS 5 CRITÉRIOS A SEGUIR: • Conjuntivite Bulbar Bilateral Não Exsudativa: • Alterações Labiais e de Cavidade Oral: • língua em framboesa • Exantema Polimorfo: • Alterações de Extremidades: • Linfonodomegalia Cervical Aguda: • ≥ 1,5 cm • Tratamento Padrão-Ouro & Prevenção de Aneurismas Coronarianos • Medicamento Padrão • Dose & Modo de Administração • Janela Crítica & Justificativa Médica • Imunoglobulina Humana Intravenosa (IVIG) • 2 g/kg IV em dose única"},"ped-exantematicas-caso":{"m":"ped-exantematicas","h1":"Caso Clínico: Escolar de 5 Anos com Faringite e Exantema Áspero","sub":"Tomada de decisão na escarlatina estreptocócica, identificação de sinais patognomônicos e profilaxia da febre reumática.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico Admissional: • Sinais Vitais: • Oroscopia: • Língua com aspecto de morango maduro / framboesa vermelha • Fácies: • Palidez perioral evidente contrastando com rubor malar acentuado nas bochechas (Sinal de Filatov) • Pele: • sensação tátil muito áspera, semelhante a lixa de madeira • linhas transversais intensamente eritematosas que não desaparecem à digitopressão na fossa antecubital bilateral (Sinal de Pastia) • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Diagnóstico Clínico Definitivo: • ESCARLATINA TÍPICA: • Sinais Patognomônicos Presentes no Caso: • Língua em Framboesa Vermelha"},"ped-febre-sem-foco-definicao":{"m":"ped-febre-sem-foco","h1":"Febre sem Foco (FSF) no Lactente: Visão Geral & Fisiopatologia","sub":"Conceituação oficial da FSF, risco estratificado de Infecção Bacteriana Grave (IBG) e o impacto das vacinas conjugadas.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição Operacional da Febre sem Foco (SBP / AAP 2024) • Febre sem Foco (FSF) • ≥ 37,8°C (ou retal ≥ 38,0°C) • 7 dias • não revelam a causa ou o sítio anatômico da infecção • Diferenciação Conceitual Obrigatória: • Febre sem Foco (FSF): • Febre de Origem Indeterminada (FOI): • ≥ 8 a 14 dias • O Espectro da Infecção Bacteriana Grave (IBG) vs Bacteremia Oculta • Infecções Bacterianas Graves (IBG) • Entidade Clínica • Definição Microbiológica • Prevalência Atual na Era Pós-Vacinal (Pneumo/Meningo) • Infecção do Trato Urinário (ITU Oculta) • A IBG MAIS PREVALENTE NO LACTENTE (> 80% de todas as IBGs)! • Bacteremia Oculta (BO) • menos de 0,5% a 1% atualmente"},"ped-febre-sem-foco-semiologia":{"m":"ped-febre-sem-foco","h1":"Semiologia em 4 Eixos & A Escala de Observação de Yale","sub":"Diferenciação clínica objetiva entre o \"lactente toxêmico\" e a criança em bom estado geral (Yale Observation Scale).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Roteiro Semiológico em 4 Eixos da Febre sem Foco • < 28 dias: • 29 a 60/90 dias: • 3 a 36 meses: • > 39,0°C a 39,5°C • NÃO descarta infecção bacteriana grave • após a defervescência térmica • Aparência Tóxica: • Escala de Observação de Yale (Para Lactentes de 1 a 36 Meses) • Item Clínico Avaliado • 1 Ponto (Normal / Ótimo) • 3 Pontos (Disfunção Moderada) • 5 Pontos (Disfunção Grave / Tóxico) • 1. Qualidade do Choro • 2. Reação ao Estímulo dos Pais • 3. Estado de Alerta / Vigília • 4. Coloração da Pele • 5. Nível de Hidratação • 6. Resposta Social / Olhar"},"ped-febre-sem-foco-neonatos":{"m":"ped-febre-sem-foco","h1":"Manejo do Neonato (< 28 Dias): Grupo de Alto Risco por Definição","sub":"Por que todo recém-nascido febril exige internação imediata, sepse screen completo e antibioticoterapia parenteral empírica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Regra Inviolável da Neonatologia (SBP 2024) • TODO NEONATO (< 28 DIAS) COM FEBRE SEM FOCO É CONSIDERADO PORTADOR DE SEPSE BACTERIANA POTENCIAL ATÉ PROVA EM CONTRÁRIO! • INTERNAÇÃO HOSPITALAR MANDATÓRIA • SEPSE SCREEN COMPLETO OBRIGATÓRIO (Antes do início do antibiótico): • Duas amostras de Hemocultura periférica • EAS e Urocultura colhida por Cateterismo Vesical ou Punção Suprapúbica • Punção Lombar (LCR): • ANTIBIOTICOTERAPIA PARENTERAL IMEDIATA: • Ampicilina IV (100 a 150 mg/kg/dia 12/12h ou 8/8h) + Gentamicina IV (4 a 5 mg/kg/dia dose única diária)"},"ped-febre-sem-foco-rochester":{"m":"ped-febre-sem-foco","h1":"Lactentes de 29 a 60/90 Dias: Critérios de Baixo Risco","sub":"Critérios de Rochester e Filadélfia para condução ambulatorial segura sem antibioticoterapia indiscriminada.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios de Baixo Risco de Rochester (SBP 2024) • BAIXO RISCO DE INFECÇÃO BACTERIANA GRAVE • TODOS OS CRITÉRIOS • Dimensão Avaliada • Critérios Obrigatórios de Baixo Risco (Rochester) • 1. Critérios Clínicos de História • 2. Critérios do Exame Físico • Bom estado geral preservado • 3. Critérios Laboratoriais • Leucócitos no sangue periférico: • 5.000 e 15.000/mm³ • Contagem absoluta de bastonetes: • < 1.500/mm³ • Sedimento Urinário (EAS): • < 10 leucócitos por campo • Conduta Escalonada Conforme a Classificação de Baixo Risco • Classificação • Conduta Médica Padrão-Ouro (SBP 2024) • BAIXO RISCO COMPLETO • Conduta Ambulatorial Segura: • Retorno Obrigatório em 24 Horas"},"ped-febre-sem-foco-fluxograma":{"m":"ped-febre-sem-foco","h1":"Fluxograma: Algoritmo da Febre sem Foco no Lactente","sub":"Árvore de decisão clínica sequencial da estratificação etária ao rastreio de infecção bacteriana grave.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo da Febre sem Foco (FSF) no Lactente (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-febre-sem-foco-itu":{"m":"ped-febre-sem-foco","h1":"A Busca da ITU Oculta no Lactente de 3 a 36 Meses","sub":"Critérios de indicação de urocultura e as armadilhas metodológicas do saco coletor de urina.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quando Investigar ITU Oculta no Lactente Vacinado (SBP 2024)? • Infecção do Trato Urinário é o foco bacteriano oculto responsável pela febre em mais de 90% dos casos • Meninas menores de 24 meses • Meninos não circuncidados menores de 12 meses • Meninos circuncidados menores de 6 meses; • História prévia de ITU confirmada, refluxo vesicoureteral ou malformação do trato urinário; • Febre com duração superior a 48 horas sem qualquer manifestação catarral de vias aéreas. • A Verdade Sobre o Saco Coletor de Urina: Advertência Formal SBP • Taxa de Falso-Positivo > 85% no Saco Coletor: • O Saco Coletor tem Utilidade EXCLUSIVAMENTE para TRIAGEM de NEGATIVIDADE:"},"ped-febre-sem-foco-biomarcadores":{"m":"ped-febre-sem-foco","h1":"Biomarcadores de Infecção Bacteriana Grave (IBG)","sub":"Procalcitonina (PCT), Proteína C Reativa (PCR) e Leucograma: sensibilidade, especificidade e cinética inflamatória.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Comparação entre os Principais Marcadores Inflamatórios • Biomarcador • Início de Elevação Pós-Estímulo • Pico Sérico • Ponto de Corte para Baixo Risco de IBG • Acurácia Diagnóstica & Vantagens (SBP 2024) • Procalcitonina (PCT) • 2 a 4 horas • < 0,5 ng/mL • Melhor sensibilidade e especificidade para IBG precoce. • Proteína C Reativa (PCR) • 6 a 8 horas • < 20 mg/L • Leucócitos Totais / Bastões"},"ped-febre-sem-foco-caso":{"m":"ped-febre-sem-foco","h1":"Caso Clínico: Lactente de 45 Dias com Febre de 38,6°C","sub":"Aplicação prática dos Critérios de Rochester, tomada de decisão propedêutica e segurança na conduta ambulatorial.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico (Afebril sob efeito de paracetamol): • Sinais Vitais: • Avaliação do Estado Geral (Yale): • Exame Segmentar Minucioso: • Resultados Laboratoriais Solicitados na Emergência: • Hemograma: • Leucócitos Totais: 9.800/mm³ • 1% bastonetes = 98 bastões/mm³ • Procalcitonina: • PCR sérica: • Urina Tipo 1 (EAS colhido por Cateterismo Vesical): • Leucócitos: 3 por campo • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Estratificação de Risco pelos Critérios de Rochester: • O paciente preenche TODOS OS CRITÉRIOS DE BAIXO RISCO DE ROCHESTER • Classificação:"},"ped-fibrose-cistica-definicao":{"m":"ped-fibrose-cistica","h1":"Fibrose Cística (Mucoviscidose)","sub":"Fisiopatologia do canal CFTR, genética autossômica recessiva e epidemiologia segundo a Sociedade Brasileira de Pediatria.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Fisiopatologia Molecular • F508del • Consequências Sistêmicas da Disfunção de CFTR • Secreções Mucosas Desidratadas e Hiperviscosas: • Insuficiência Pancreática Exócrina: • Perda Excessiva de Sal no Suor: • Diretriz Visual Integrada: Fibrose Cística • Abrir em Tela Cheia • Infográfico HD"},"ped-fibrose-cistica-triagem":{"m":"ped-fibrose-cistica","h1":"Triagem Neonatal Biológica: Protocolo IRT / IRT","sub":"Fluxo de triagem no Teste do Pezinho, valores de corte e janela temporal mandatória para diagnóstico precoce.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Protocolo IRT / IRT do Programa Nacional de Triagem Neonatal (SBP 2024) • Etapas Obrigatórias da Triagem: • 1ª Amostra de IRT (Imunorreatividade Tripsínica): • 3º e o 5º dia de vida • IRT ≥ 70 ng/mL • 2ª Amostra de IRT: • rigorosamente até os 30 dias de vida • Conduta se IRT 1 e IRT 2 Positivos: • Teste do Suor Quantitativo"},"ped-fibrose-cistica-clinica":{"m":"ped-fibrose-cistica","h1":"Manifestações Clínicas Respiratórias e Digestivas","sub":"Do íleo meconial neonatal às bronquiectasias crônicas, esteatorreia e baqueteamento digital.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Manifestações por Faixa Etária • Período • Manifestações Clínicas Predominantes • Neonatal • Íleo meconial (15% a 20% dos casos): • Lactente • Escolar & Adolescente"},"ped-fibrose-cistica-diagnostico":{"m":"ped-fibrose-cistica","h1":"Teste do Suor: Critérios Diagnósticos Definitivos","sub":"Dosagem quantitativa de cloreto por iontoforese com pilocarpina e análise genética molecular.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Interpretação do Teste do Suor (Método de Gibson e Cooke) • padrão-ouro indiscutível • Concentração de Cloreto • Interpretação Clínica (SBP 2024) • Conduta Recomendada • < 30 mEq/L • 30 a 59 mEq/L • ≥ 60 mEq/L • Diagnóstico Definitivo de Fibrose Cística"},"ped-fibrose-cistica-fluxograma":{"m":"ped-fibrose-cistica","h1":"Fluxograma Decisório: Fibrose Cística","sub":"Algoritmo sequencial de triagem, diagnóstico e manejo clínico (SBP 2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretriz Visual Integrada: Fibrose Cística • Abrir em Tela Cheia • Infográfico HD"},"ped-fibrose-cistica-tratamento":{"m":"ped-fibrose-cistica","h1":"Tratamento Farmacológico, Enzimático & Nutricional","sub":"Posologia precisa de reposição de enzimas pancreáticas, inaloterapia mucolítica e moduladores CFTR.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Manejo da Insuficiência Pancreática e Nutrição • Reposição de Enzimas Pancreáticas (Pancreatina Microesferas Gastrorresistentes): • Dose Inicial em Lactentes: 2.000 a 4.000 UI de lipase por cada mamada de 120 mL • Crianças < 4 anos: 1.000 UI de lipase/kg por refeição principal • Crianças > 4 anos: 500 UI de lipase/kg por refeição principal • Dose máxima de segurança: NUNCA ultrapassar 10.000 UI de lipase/kg/dia • As cápsulas devem ser abertas e as microesferas ingeridas com alimento ácido (compota de maçã) antes da alimentação, sem mastig... • Suplementação Nutricional e de Vitaminas Lipossolúveis: • Dieta Hipercalórica e Hiperlipídica: • Suplementação de NaCl:"},"ped-fibrose-cistica-exacerbacao":{"m":"ped-fibrose-cistica","h1":"Manejo da Exacerbação Pulmonar e Colonização Bacteriana","sub":"Vigilância microbiológica de Pseudomonas aeruginosa , antibioticoterapia combinada e critérios de internação.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Vigilância Microbiológica Respiratória • Lactentes e Pré-Escolares: • Escolares e Adolescentes: • Protocolo de Erradicação de Pseudomonas (Primeiro Isolamento): • Manejo da Exacerbação Pulmonar Aguda Hospitalar • Tratamento Hospitalar Endovenoso (SBP 2024): • Ceftazidima • Meropenem • Amicacina • Tobramicina"},"ped-fibrose-cistica-caso":{"m":"ped-fibrose-cistica","h1":"Caso Clínico: Fibrose Cística","sub":"Simulação com feedback imediato segundo o Tratado de Pediatria SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"História Clínica & Exame Físico • Pergunta Clínica: • Discussão Clínica & Gabarito Oficial (SBP 2024): • 1. Conduta Diagnóstica Mandatória: TESTE DO SUOR QUANTITATIVO IMEDIATO. • 2. Conduta Terapêutica Imediata: • Iniciar reposição de enzimas pancreáticas • Suplementação de vitaminas lipossolúveis (A, D, E, K) • Prescrição de solução salina hipertônica inalatória 7% • Coleta de swab de orofaringe para cultura microbiológica; • Encaminhamento prioritário ao Centro de Referência em Fibrose Cística da SBP."},"ped-genetica-definicao":{"m":"ped-genetica","h1":"Genética Clínica Pediátrica, Dismorfologia & Triagem Neonatal","sub":"Avaliação do dismorfismo na infância, aneuploidias cromossômicas, erros inatos do metabolismo e janelas de intervenção precoce.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Abordagem Diagnóstica Segundo o Tratado de Pediatria SBP 2024 • 3% a 5% dos recém-nascidos vivos • Classificação das Anomalias Morfológicas • Tipo de Defeito • Mecanismo Embriogênico • Exemplos Clínicos Típicos • Malformação • Deformação • Disrupção • Displasia • Indicações Mandatórias de Investigação Genética e Cariótipo / Microarray • Presença de três ou mais anomalias menores • uma anomalia congênita maior • Atraso global do desenvolvimento neuropsicomotor (DNPM) ou deficiência intelectual sem causa ambiental ou hipóxico-isquêmica ex..."},"ped-genetica-down":{"m":"ped-genetica","h1":"Síndrome de Down (Trissomia 21): Manejo & Diretrizes de Seguimento SBP","sub":"Fenótipo neonatal, genética cromossômica, cardiopatias associadas e protocolo longitudinal de puericultura especializada.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Bases Citogenéticas da Síndrome de Down • Trissomia Livre / Regular (95% dos casos): • Translocação Robertsoniana (3% a 4%): • Mosaicismo (1% a 2%): • Manifestações Clínicas e Critérios Diagnósticos Neonatais (Critérios de Hall) • Achados Físicos Mais Sensíveis ao Nascer: • Hipotonia muscular marcante • Fendas palpebrais oblíquas para cima (*up-slanting*) com pregas epicânticas. • Ponte nasal achatada e hipoplasia de terço médio da face. • Prega nucal espessada com excesso de pele na região posterior do pescoço. • Extremidades e Outros Estigmas: • Prega palmar única transversal • Clinodactilia e braquidactilia do quinto quirodáctilo (hipoplasia da falange média)."},"ped-genetica-turner-klinefelter":{"m":"ped-genetica","h1":"Síndromes de Turner (45,X) & Klinefelter (47,XXY)","sub":"Dismorfologia, baixa estatura em meninas, disgenesia gonadal, fenótipo eunucóide e reposição hormonal na adolescência.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Síndrome de Turner (45,X e Mosaicos) • Quadro Clínico & Rastreamento Diagnóstico na Infância: • Baixa Estatura Desproporcional Inexplicada: • Período Neonatal: • linfedema congênito doloroso • Estigmas Físicos Clássicos: • Cardiopatias Associadas (30% dos casos): • Coarctação de Aorta (CoAo) • Válvula Aórtica Bicúspide • Malformações Renais (30%): • Disgenesia Gonadal: • Hipogonadismo Hipergonadotrófico • Manejo Terapêutico Multidisciplinar (SBP 2024): • Hormônio de Crescimento Humano Recombinante (rhGH): • Terapia de Reposição Hormonal (TRH): • Síndrome de Klinefelter (47,XXY) • Quadro Clínico na Infância e Puberdade: • Infância e Idade Escolar: • Puberdade:"},"ped-genetica-teste-pezinho":{"m":"ped-genetica","h1":"Triagem Neonatal Biológica: O Teste do Pezinho & PNTN Ampliado","sub":"Momento ideal de coleta, doenças do teste básico e escalonamento para o teste ampliado (espectrometria de massas em tandem).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Metodologia e Janela Crítica de Coleta (SBP 2024) • Regra de Ouro da Coleta do Teste do Pezinho: • entre o 3º e o 5º dia de vida • Por que NUNCA coletar antes de 48 horas de vida? • Por que NUNCA atrasar a coleta além do 7º dia? • Doenças Rastreadas no Programa Nacional de Triagem Neonatal (PNTN) • Patologia • Marcador Bioquímico • Quadro se Não Tratado • Conduta Imediata • Hipotireoidismo Congênito • Fenilcetonúria (PKU) • Doença Falciforme & Hemoglobinopatias • Fibrose Cística • Hiperplasia Adrenal Congênita • Deficiência de Biotinidase • Toxoplasmose Congênita • Ampliação da Triagem Neonatal (Lei nº 14.154/2021) • Espectrometria de Massas em Tandem (MS/MS)"},"ped-genetica-fluxograma":{"m":"ped-genetica","h1":"Algoritmo Decisório: Síndromes Genéticas, Erros Inatos & Teste do Pezinho","sub":"Mapa visual integrado conectando estigmas dismórficos, rastreamento mandatório e urgências metabólicas neonatais.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Diretriz Visual Integrada: Genética & Dismorfologia • Abrir em Tela Cheia • Infográfico HD"},"ped-genetica-hipotireoidismo":{"m":"ped-genetica","h1":"Hipotireoidismo Congênito: Diagnóstico & Manejo Terapêutico Precoce","sub":"Etiologia, marcadores séricos, urgência da introdução de levotiroxina e proteção do neurodesenvolvimento infantil.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Etiologia e Relevância Clínica • Hipotireoidismo Congênito (HC) • causa mais comum de retardo mental prevenível • Disgenesia Tireoidiana • Ectopia Tireoidiana (60%): • Agenesia / Aplasia (25%): • Hipoplasia (15%): • Disormonogênese (10% a 15%): • Quadro Clínico: A Armadilha do Recém-Nascido Assintomático • Alerta Pediatria SBP 2024: • 95% dos recém-nascidos portadores de Hipotireoidismo Congênito são absolutamente ASSINTOMÁTICOS ao nascimento • Quadro Clínico Tardio (quando não triado precocemente): • Icterícia neonatal prolongada: • Fontanela posterior ampla: • Fácies mixedematosa: • Hérnia umbilical exuberante • Disfunção do sistema nervoso autônomo e tônus:"},"ped-genetica-hiperplasia-adrenal":{"m":"ped-genetica","h1":"Hiperplasia Adrenal Congênita: Crise Perdedora de Sal & HAC","sub":"Deficiência de 21-hidroxilase, virilização genital, choque hipovolêmico com desequilíbrio hidroeletrolítico e reposição hormonal.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fisiopatologia da Deficiência da 21-Hidroxilase (CYP21A2) • Hiperplasia Adrenal Congênita (HAC) • mais de 90% a 95% dos casos • 21-hidroxilase • Bloqueio Enzimático: • Cortisol • Aldosterona • Feedback Negativo Quebrado: • ACTH • Desvio Androgênico em Massa: • 17-alfa-hidroxiprogesterona [17-OHP] • Formas Clínicas e Apresentação Neonatal • Forma Clássica Perdedora de Sal (75% dos casos): • Déficit combinado profundo de aldosterona e cortisol. • Meninas (46,XX): • Genitália Ambígua / Virilização • Meninos (46,XY): • Crise Perdedora de Sal (entre o 7º e o 21º dia de vida): • Forma Clássica Virilizante Simples (25% dos casos):"},"ped-genetica-caso":{"m":"ped-genetica","h1":"Caso Clínico: Neonato com Desidratação Grave & Distúrbio Hidroeletrolítico Ameaçador","sub":"Investigação de colapso circulatório na 2ª semana de vida, raciocínio diferencial na genitália ambígua e intervenção de urgência.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • perda ponderal de 20% em relação ao nascimento! • Exames Laboratoriais Coletados na Sala Vermelha (Estat): • Gasometria Venosa: pH 7,18, HCO3 9,8 mEq/L, BE -16 mEq/L (Acidose metabólica severa). • Glicemia capilar: 44 mg/dL • Eletrólitos: Sódio (\\(Na^+\\)): 114 mEq/L • Potássio (\\(K^+\\)): 8,2 mEq/L • Eletrocardiograma de urgência: Taquicardia sinusal associada a ondas T apiculadas, simétricas e com base estreita (\"em tenda\"),... • Desafio Terapêutico & Tomada de Decisão: • Urgências e Genética Clínica do Tratado de Pediatria SBP 2024 • Qual o diagnóstico fisiopatológico e a síndrome subjacente mais provável? Qual a enzima deficitária responsável?"},"ped-hebiatria-definicao":{"m":"ped-hebiatria","h1":"Hebiatria: Marco Conceitual, Limites Etários & Estatuto Legal","sub":"Conceituação da adolescência segundo a OMS, Estatuto da Criança e do Adolescente (ECA) e o papel do hebiatra no Tratado SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definições e Faixas Etárias Oficiais • Tratado de Pediatria SBP 2024 • Órgão / Legislação • Faixa Etária Oficial • Significado Prático e Aplicabilidade • Organização Mundial da Saúde (OMS) • 10 a 19 anos, 11 meses e 29 dias • Estatuto da Criança e do Adolescente (ECA - Lei 8.069/1990) • 12 a 18 anos incompletos • Fluxograma Oficial de Atendimento Confidencial & Gestão de Risco (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-hebiatria-consulta":{"m":"ped-hebiatria","h1":"A Consulta com o Adolescente & As 4 Exceções do Sigilo Médico","sub":"Diretrizes do Conselho Federal de Medicina (CFM) e SBP sobre o momento a sós e os limites éticos da confidencialidade.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Estrutura Tripartida da Consulta Hebiátrica (Tratado SBP 2024) • 1. Primeiro Momento (Conjunto - Pais e Adolescente): • 2. Segundo Momento (A Sós com o Adolescente): • direito legal assegurado pelo Código de Ética Médica e pelo ECA • 3. Terceiro Momento (Retorno da Família): • As 4 Exceções Absolutas para Quebra do Sigilo Médico (CFM / SBP) • A quebra do sigilo sem autorização do adolescente é permitida e obrigatória APENAS nas seguintes circunstâncias de risco grave ... • Risco Iminente de Suicídio: • Vítima de Violência / Maus-Tratos / Abuso Sexual: • Ameaça de Dano a Terceiros: • Uso Abusivo Grave e Descontrolado de Substâncias:"},"ped-hebiatria-semiologia":{"m":"ped-hebiatria","h1":"Anamnese Hebiátrica Estruturada: O Mnemônico HEEADSSS","sub":"A ferramenta internacional recomendada pela SBP para rastreio psicossocial sistemático do adolescente.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Roteiro Mnemônico HEEADSSS (Tratado SBP 2024) • Letra • Domínio Clínico • Perguntas & Tópicos de Investigação Semiológica • Home (Casa / Família) • Education / Employment (Escola) • Eating (Alimentação & Imagem) • Activities (Atividades & Lazer) • Drugs (Álcool, Cigarro, Vape & Drogas) • Sexuality (Sexualidade & ISTs) • Suicide / Depression (Humor & Saúde Mental) • Safety (Segurança & Violência)"},"ped-hebiatria-saude-mental":{"m":"ped-hebiatria","h1":"Saúde Mental, Automutilação, Risco de Suicídio & Dependência Digital","sub":"Rastreamento de depressão e ansiedade no adolescente, síndrome FoMO, cyberbullying e intervenção imediata.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Impacto do Uso Excessivo de Telas no Cérebro do Adolescente • Tempo Máximo de Tela: • 2 a 3 horas diárias de tempo recreativo • Higiene do Sono Sem Telas: • Síndrome FoMO (Fear of Missing Out): • Automutilação Não Suicida vs Ideação Suicida • Abordagem de Risco: • lesão autoprovocada sem intenção suicida • Conduta Mandatória SBP: • CAPSi / Psiquiatria Infantil e Psicoterapia Cognitivo-Comportamental"},"ped-hebiatria-fluxograma":{"m":"ped-hebiatria","h1":"Fluxograma Oficial de Atendimento Confidencial & Gestão de Risco","sub":"Algoritmo de tomada de decisão médica no atendimento de adolescentes segundo as normas do CFM e SBP (2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Atendimento Confidencial & Gestão de Risco (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-hebiatria-drogas":{"m":"ped-hebiatria","h1":"Triagem de Substâncias no Adolescente: Questionário CRAFFT","sub":"Alerta nacional contra cigarros eletrônicos (vapes/pods), álcool na adolescência e técnica de intervenção breve.","flow":0,"info":0,"presc":0,"caso":0,"kw":"O Questionário CRAFFT (Versão Brasileira / SBP 2024) • Letra • Pergunta do Questionário CRAFFT • Pontuação & Risco • Carro (Car) • Interpretação: • 0 respostas \"SIM\": • ≥ 2 respostas \"SIM\": • Relaxar (Relax) • Sozinho (Alone) • Esqueceu (Forget) • Família ou Amigos (Friends) • Encrencas (Trouble) • Alerta SBP sobre Cigarros Eletrônicos (Vapes / Pods) • não são vapor de água inofensivo • Contêm sais de nicotina em altíssima concentração • Emitem substâncias tóxicas como formaldeído, acetaldeído, acroleína e metais pesados (níquel, chumbo). • Associados a EVALI (E-cigarette or Vaping product use-Associated Lung Injury)"},"ped-hebiatria-sexualidade":{"m":"ped-hebiatria","h1":"Direitos Sexuais & Prescrição de Contracepção no Adolescente","sub":"Prescrição desacompanhada dos pais garantida pelo Parecer CFM nº 25/2013, critérios da OMS e dupla proteção.","flow":0,"info":0,"presc":1,"caso":0,"kw":"A Legalidade da Prescrição de Contracepção a Adolescentes • Fundamentação Ética e Jurídica (Parecer CFM nº 25/2013 & SBP 2024): • dever ético de atender, acolher e prescrever métodos contraceptivos a adolescentes que solicitarem • A Revelação Aos Pais É Proibida: • O Conceito de Dupla Proteção (Estratégia Recomendada SBP) • Associação Obrigatória: • Preservativo Masculino ou Feminino • Infecções Sexualmente Transmissíveis (ISTs / HIV, Sífilis, HPV, Hepatites) • Métodos de Longa Ação (LARCs): • Categoria 1 ou 2 de Elegibilidade Médica"},"ped-hebiatria-caso":{"m":"ped-hebiatria","h1":"Caso Clínico Simulado: Consulta Confidencial de Adolescente","sub":"Tomada de decisão ética sobre sigilo médico, solicitação de contracepção desacompanhada e manejo segundo o CFM e SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Avaliação Médica no Atendimento: • Capacidade & Discernimento: • Triagem Semiológica (HEEADSSS): • Exame Físico: • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Decisão Ético-Legal Fundamentada: • Atendimento Pleno Assegurado: • MANUTENÇÃO RIGOROSA DO SIGILO MÉDICO: A atividade sexual consentida entre adolescentes (15 e 16 anos) NÃO autoriza a quebra de ... • Prescrição Contraceptiva Autorizada e Obrigatória: • 2. Conduta Clínica Completa Recomendada pela SBP: • Prescrição de Método de Escolha: • Orientação Obrigatória de Dupla Proteção: • Aconselhamento sobre Contracepção de Emergência: • Agendamento de Retorno & Vínculo:"},"ped-henoch-schonlein-definicao":{"m":"ped-henoch-schonlein","h1":"Púrpura de Henoch-Schönlein (Vasculite por IgA)","sub":"Epidemiologia, critérios de consenso internacional EULAR/PRINTO/PRES e Tratado de Pediatria SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Magnitude Clínica • Vasculite por IgA • Sazonalidade e Gatilhos Infecciosos • Algoritmo Clínico e Conduta Terapêutica na Púrpura de Henoch-Schönlein (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-henoch-schonlein-fisiopatologia":{"m":"ped-henoch-schonlein","h1":"Fisiopatologia & Deposição Imunomediada de IgA1","sub":"Galactosilação anômala da molécula de IgA1, formação de imunocomplexos e dano vascular leucocitoclástico.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Mecanismo Imunopatológico Molecular • O-glicosilação da região de dobradiça da imunoglobulina A1 (IgA1) • Formação de Autoanticorpos IgG anti-IgA1: • Deposição Tecidual em Vênulas e Capilares: • Vasculite Leucocitoclástica:"},"ped-henoch-schonlein-clinica":{"m":"ped-henoch-schonlein","h1":"Tétrade Clínica Clássica da Púrpura de Henoch-Schönlein","sub":"Manifestações dermatológicas, articulares, gastrointestinais e renais segundo a SBP 2024.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Manifestações Clínicas e Órgãos Acometidos • Sistema • Prevalência • Características Semiológicas Típicas • Pele (Cutâneo) • 100% • Púrpura palpável não-trombocitopênica: • Articular • 60% a 75% • Gastrointestinal • 50% a 65% • intussuscepção intestinal • Renal • 20% a 50%"},"ped-henoch-schonlein-criterios":{"m":"ped-henoch-schonlein","h1":"Critérios Diagnósticos Consensuais EULAR/PRINTO/PRES","sub":"Critério obrigatório de púrpura palpável associado a parâmetros clínicos e laboratoriais.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Oficiais para Diagnóstico de Vasculite por IgA (SBP 2024) • Critério Mandatório Obrigatório: • Associado a pelo menos UM dos seguintes quatro critérios: • Dor Abdominal Difusa: • Artrite ou Artralgia: • Comprometimento Renal: • Biópsia Compatível:"},"ped-henoch-schonlein-fluxograma":{"m":"ped-henoch-schonlein","h1":"Fluxograma Decisório: Púrpura de Henoch-Schönlein","sub":"Algoritmo clínico estruturado de diagnóstico, manejo sintomático e corticoterapia.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo Clínico e Conduta Terapêutica na Púrpura de Henoch-Schönlein (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-henoch-schonlein-conduta":{"m":"ped-henoch-schonlein","h1":"Conduta Terapêutica & Posologia de Corticoterapia","sub":"Analgesia segura, restrição de AINEs e indicações precisas de Prednisolona oral.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Suporte Clínico e Analgesia (SBP 2024) • Repouso Relativo: • Analgesia Preferencial: • Contraindicação Relativa de AINEs: • evitados • Indicações Precisas de Corticoterapia Sistêmica • Prednisolona Oral (1 a 2 mg/kg/dia, dose máxima 60 mg/dia): • Dor abdominal intensa em cólica refratária a analgésicos comuns; • Hemorragia digestiva alta ou baixa documentada; • Edema subcutâneo exuberante doloroso (bolsa escrotal, couro cabeludo, mãos e pés); • Comprometimento renal moderado a grave (síndrome nefrítica ou nefrótica)."},"ped-henoch-schonlein-complicacoes":{"m":"ped-henoch-schonlein","h1":"Complicações Cirúrgicas e Protocolo de Seguimento Renal","sub":"Vigilância de intussuscepção ileoileal e calendário de monitoramento da pressão arterial e urina por 6 a 12 meses.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Intussuscepção Intestinal: Emergência Cirúrgica Típica • ileoileal (em mais de 60% dos casos) • Calendário de Seguimento Renal Mandatório (SBP 2024) • Protocolo de Monitorização Urinária e Pressórica: • Semanas 1 a 4: • semanalmente • Meses 2 e 3: • a cada 2 semanas • Meses 4 a 6: • mensalmente • Se hematúria ou proteinúria presente: estender seguimento para 12 meses"},"ped-henoch-schonlein-caso":{"m":"ped-henoch-schonlein","h1":"Caso Clínico: Púrpura de Henoch-Schönlein","sub":"Simulação de atendimento em pronto-socorro com feedback imediato segundo o Tratado de Pediatria SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"História Clínica & Exame Físico • plaquetas 380.000/mm³ • Pergunta Clínica: • Discussão Clínica & Gabarito Oficial (SBP 2024): • 1. Diagnóstico Clínico: PÚRPURA DE HENOCH-SCHÖNLEIN (VASCULITE POR IGA). • 2. Conduta Terapêutica Inicial: • Repouso relativo com membros elevados; • Analgesia com Dipirona oral (15 a 25 mg/kg/dose 6/6h) ou Paracetamol; • Evitar AINEs; • Se a dor abdominal piorar significativamente ou se tornar refratária: prescrever Prednisolona oral 1 a 2 mg/kg/dia • 3. Seguimento Ambulatorial Obrigatório: • EAS e Pressão Arterial"},"ped-hiperplasia-adrenal-definicao":{"m":"ped-hiperplasia-adrenal","h1":"Hiperplasia Adrenal Congênita (HAC)","sub":"Deficiência da enzima 21-hidroxilase, genética molecular e fisiopatologia da esteroidogênese adrenal (SBP 2024).","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Fisiopatologia Molecular • deficiência da enzima 21-hidroxilase (21-OHP) • mais de 90% a 95% de todos os casos de HAC • Mecanismo Fisiopatológico em Cascata • Queda na Síntese de Cortisol: • Hiperestimulação por ACTH e Hiperplasia Adrenal: • Desvio em Cascata para a Esteroidogênese Androgênica: • androgênios adrenais (DHEA, androstenediona e testosterona) • Déficit de Aldosterona (Forma Perdedora de Sal): • Algoritmo Diagnóstico e Terapêutico Oficial da HAC (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-hiperplasia-adrenal-formas":{"m":"ped-hiperplasia-adrenal","h1":"Formas Clínicas da Deficiência de 21-Hidroxilase","sub":"Forma clássica perdedora de sal, virilizante simples e forma não clássica de início tardio.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Estratificação Clínica e Atividade Enzimática Residual • Forma Clínica • Atividade Enzimática • Apresentação Típica no Sexo Feminino (46,XX) • Apresentação Típica no Sexo Masculino (46,XY) • Clássica Perdedora de Sal (75% das clássicas) • Genitália externa completamente normal! • Clássica Virilizante Simples (25% das clássicas) • 1% a 2% • Não Clássica (Início Tardio) • 20% a 50%"},"ped-hiperplasia-adrenal-triagem":{"m":"ped-hiperplasia-adrenal","h1":"Triagem Neonatal Biológica: Dosagem de 17-OH-Progesterona","sub":"Correção dos pontos de corte por peso de nascimento e idade gestacional no Teste do Pezinho.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Interpretação da 17-OHP em Papel-Filtro (SBP 2024) • prevenir a morte de meninos com a forma perdedora de sal • Ajuste Crítico por Faixa de Peso ao Nascer • RN ≥ 2.500 g: • RN entre 2.000 e 2.499 g: • RN entre 1.500 e 1.999 g: • RN < 1.500 g: • Em todos os casos com 17-OHP no limiar de suspeita: recoleta imediata de sangue venoso para dosagem de 17-OHP, androstenediona,..."},"ped-hiperplasia-adrenal-clinica":{"m":"ped-hiperplasia-adrenal","h1":"Quadro Clínico Neonatal: Genitália Atípica & Crise Perdedora de Sal","sub":"Estadiamento de Prader em recém-nascidos 46,XX e o colapso hemodinâmico da perda de sal.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Genitália Atípica em Meninas 46,XX (Classificação de Prader) • causa mais comum de anomalia na diferenciação sexual / genitália atípica em recém-nascidos 46,XX • Prader I: • Prader II: • Prader III: • Prader IV: • Prader V: • A Crise Perdedora de Sal Aguda (Segunda a Terceira Semana de Vida) • Tétrade Laboratorial da Crise Adrenal Aguda Neonatal: • HIPONATREMIA Grave: • HIPERCALEMIA Severa: • ACIDOSE METABÓLICA: • HIPOGLICEMIA:"},"ped-hiperplasia-adrenal-fluxograma":{"m":"ped-hiperplasia-adrenal","h1":"Fluxograma Decisório: Hiperplasia Adrenal Congênita","sub":"Algoritmo clínico oficial baseado no Tratado de Pediatria SBP 2024.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo Diagnóstico e Terapêutico Oficial da HAC (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-hiperplasia-adrenal-crise":{"m":"ped-hiperplasia-adrenal","h1":"Tratamento de Emergência da Crise Adrenal Aguda","sub":"Protocolo de ressuscitação volêmica vigorosa, reposição glicocorticoide parenteral e manejo da hipercalemia.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Protocolo de Ressuscitação Imediata na Sala de Emergência (SBP 2024) • 1. Ressuscitação Volêmica e Correção Glicêmica Imediata: • Expansão Volêmica: • 20 mL/kg em bolus IV rápido • NUNCA ADICIONAR POTÁSSIO aos fluidos de ressuscitação! • Correção da Hipoglicemia: • 2 a 4 mL/kg IV em bolus lento • 2. Glicocorticoide Endovenoso em Dose de Estresse: • Succinato Sódico de Hidrocortisona IV: • 50 a 100 mg/m² em bolus IV imediato • Dose de Manutenção Contínua: • Manejo da Hipercalemia Ameaçadora com Alteração no ECG: Gluconato de Cálcio 10% (0,5 a 1,0 mL/kg IV lento sob monitorização car..."},"ped-hiperplasia-adrenal-manutencao":{"m":"ped-hiperplasia-adrenal","h1":"Terapia Crônica de Manutenção & Manejo em Dias de Doença","sub":"Posologias orais de Hidrocortisona, Fludrocortisona, suplementação de cloreto de sódio e regras de triplicação da dose.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tratamento de Manutenção a Longo Prazo (SBP 2024) • Tríade Terapêutica de Manutenção na Forma Perdedora de Sal: • 1. Glicocorticoide: Hidrocortisona Oral: • 10 a 15 mg/m²/dia fracionada em 3 tomadas diárias • 2. Mineralocorticoide: Fludrocortisona Oral: • 0,05 a 0,2 mg/dia em tomada única diária • 3. Suplementação de Cloreto de Sódio (NaCl): • 1 a 2 g/dia de sal de cozinha • Regras de Ouro em Dias de Estresse / Doença (Sick Day Rules) • Orientações Obrigatórias para a Família (SBP 2024): • Febre > 38,5°C, IVAS ou Gastroenterite Leve: • Triplicar a dose habitual de hidrocortisona oral • Vômitos Repetidos, Trauma Grave ou Cirurgia:"},"ped-hiperplasia-adrenal-caso":{"m":"ped-hiperplasia-adrenal","h1":"Caso Clínico: Hiperplasia Adrenal Congênita","sub":"Simulação de atendimento em pronto-socorro pediátrico com tomada de decisão imediata baseada na SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"História Clínica & Exame Físico • Genitália externa com pigmentação escura na rafe escrotal e aréolas mamárias, com bolsa escrotal vazia bilateralmente (sem gôna... • Sódio: 118 mEq/L; Potássio: 7,8 mEq/L • Pergunta Clínica: • Discussão Clínica & Gabarito Oficial (SBP 2024): • 1. Hipótese Diagnóstica Principal: HIPERPLASIA ADRENAL CONGÊNITA FORMA CLÁSSICA PERDEDORA DE SAL EM CRISE ADRENAL AGUDA COM CHO... • 2. Sexo Genético Provável: FEMININO (46,XX). • 3. Conduta Terapêutica Imediata de Emergência (SBP 2024): • Expansão volêmica rápida com Soro Fisiológico 0,9% 20 mL/kg IV em bolus • Correção imediata da hipoglicemia com Soro Glicosado 10% 2 a 4 mL/kg IV em bolus lento"},"ped-hipertensao-definicao":{"m":"ped-hipertensao","h1":"Hipertensão Arterial na Infância & Adolescência","sub":"Normatização da aferição da pressão arterial em puericultura, manguitos adequados e diretrizes SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Diretriz de Rastreamento Universal na Puericultura • anualmente em todas as crianças a partir dos 3 anos de idade • Técnica Correta de Aferição e Escolha do Manguito • Largura do Manguito (Bolsa Inflável): • 40% da circunferência do braço • Comprimento do Manguito: • 80% a 100% da circunferência braquial • Regra Semiológica: Um manguito muito estreito ou curto superestima artificialmente os valores da PA; um manguito excessivamente... • Fluxograma e Infográfico de Hipertensão Pediátrica (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-hipertensao-classificacao":{"m":"ped-hipertensao","h1":"Classificação da Pressão Arterial Segundo a SBP 2024 / AAP","sub":"Tabelas normativas baseadas em sexo, idade e percentil de estatura para crianças de 1 a 13 anos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Categorias Pressóricas em Crianças de 1 a < 13 anos • Categoria • Critério Clínico Normativo (SBP 2024) • Conduta Imediata • PA Normal • < Percentil 90 (P90) • PA Elevada • ≥ P90 e < P95 • Hipertensão Estágio 1 • ≥ P95 a < P95 + 12 mmHg • Hipertensão Estágio 2 • ≥ P95 + 12 mmHg"},"ped-hipertensao-etiologia":{"m":"ped-hipertensao","h1":"Etiologias da Hipertensão na Criança: O Domínio das Causas Secundárias","sub":"Doenças parenquimatosas renais, displasia renovascular e coarctação de aorta.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Regra Fundamental da Pediatria • Regra Clínica de Ouro (SBP 2024): • quanto mais jovem a criança e mais elevados os níveis pressóricos, maior a probabilidade de tratar-se de hipertensão secundária... • Principais Causas Secundárias por Faixa Etária • Recém-nascidos e Lactentes < 1 ano: • Crianças de 1 a 6 anos: • Crianças de 6 a 12 anos: • Adolescentes > 12 anos:"},"ped-hipertensao-propedeutica":{"m":"ped-hipertensao","h1":"Investigação Diagnóstica Escalonada & Lesão de Órgão-Alvo","sub":"Exames laboratoriais de 1ª linha, ultrassonografia com Doppler e rastreamento de hipertrofia ventricular esquerda.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Roteiro Propedêutico Escalonado • Exames Iniciais Obrigatórios: • Ultrassonografia Renal e de Vias Urinárias com Doppler de Artérias Renais: • Monitorização Ambulatorial da Pressão Arterial de 24 horas (MAPA): • Rastreamento de Lesão de Órgão-Alvo (SBP 2024) • Exames Mandatórios para Avaliação de Dano em Órgãos-Alvo: • Ecocardiograma Transtorácico Bidimensional: • Fundo de Olho: • Microalbuminúria em Amostra Isolada:"},"ped-hipertensao-fluxograma":{"m":"ped-hipertensao","h1":"Fluxograma Decisório: Hipertensão Arterial Pediátrica","sub":"Algoritmo clínico oficial baseado no Tratado de Pediatria SBP 2024.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma e Infográfico de Hipertensão Pediátrica (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-hipertensao-tratamento":{"m":"ped-hipertensao","h1":"Tratamento Farmacológico com Posologia Rigorosa","sub":"Classes anti-hipertensivas de 1ª linha na pediatria, doses diárias e titulação segura.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Indicações Precisas de Tratamento Medicamentoso • Hipertensão sintomática (cefaleia, alterações visuais, vertigem); • Hipertensão secundária a causa orgânica subjacente; • Presença de lesão de órgão-alvo (hipertrofia ventricular esquerda ou microalbuminúria); • Hipertensão Estágio 2 sem fator causal rapidamente modificável; • Falha de resposta às modificações de estilo de vida após 3 a 6 meses na HAS Estágio 1. • Classes de Medicamentos de Primeira Escolha (SBP 2024) • 1. Inibidores da ECA (IECA) e Bloqueadores de Receptor AT1 (BRA): • Enalapril: • 0,08 mg/kg/dia • Losartana: • 0,7 mg/kg/dia"},"ped-hipertensao-crise":{"m":"ped-hipertensao","h1":"Crise Hipertensiva na Pediatria: Urgência vs Emergência","sub":"Diferenciação crítica pela lesão aguda de órgão-alvo e protocolos de infusão de Nitroprussiato de Sódio.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Diferenciação Clínica Vital • Situação Clínica • Definição & Apresentação • Conduta Imediata • Urgência Hipertensiva • SEM lesão aguda em órgão-alvo • Emergência Hipertensiva • lesão aguda, progressiva e potencialmente fatal de órgão-alvo • Internação imediata em UTI Pediátrica • Manejo na UTI Pediátrica & Regra de Ouro da Redução Pressórica • Alerta Crítico: Prevenção de Isquemia Cerebral e Cegueira • A pressão arterial NUNCA deve ser normalizada abruptamente! • Meta: Reduzir a PA em no máximo 25% do valor planejado nas primeiras 6 a 8 horas • Fármaco de escolha: Nitroprussiato de Sódio IV contínuo • 0,5 a 8 mcg/kg/min"},"ped-hipertensao-caso":{"m":"ped-hipertensao","h1":"Caso Clínico: Hipertensão Arterial","sub":"Simulação de consulta pediátrica com tomada de decisão imediata baseada nas diretrizes SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"História Clínica & Exame Físico • Pergunta Clínica: • Discussão Clínica & Gabarito Oficial (SBP 2024): • 1. Diagnóstico Estadiado: HIPERTENSÃO ARTERIAL ESTÁGIO 1. • 2. Conduta Ambulatorial Imediata (SBP 2024): • Agendar 2 novas consultas no prazo de 1 a 2 semanas • Iniciar investigação de etiologia secundária • Ultrassonografia Renal e de Vias Urinárias com Doppler de Artérias Renais • Solicitar Ecocardiograma bidimensional • Orientar modificações do estilo de vida (redução de sódio na dieta e estímulo à atividade física recreativa). Se persistir conf..."},"ped-hipotireoidismo-definicao":{"m":"ped-hipotireoidismo","h1":"Hipotireoidismo Congênito (HC)","sub":"A causa mais comum de deficiência intelectual prevenível no período neonatal segundo a Sociedade Brasileira de Pediatria.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Magnitude da Triagem Neonatal • 1:2.500 e 1:4.000 nascidos vivos • A Janela de Ouro do Neurodesenvolvimento • Regra Cronológica Crítica (SBP 2024): • antes dos 14 dias de vida • Algoritmo Diagnóstico e Terapêutico Oficial do Hipotireoidismo Congênito (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-hipotireoidismo-etiologia":{"m":"ped-hipotireoidismo","h1":"Etiologias do Hipotireoidismo Congênito","sub":"Disgenesia tireoidiana primária versus defeitos de síntese hormonal (disormonogênese).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Classificação Etiológica Primária • Grupo Etiológico • Frequência • Mecanismo e Características • Disgenesia Tireoidiana (Primária Permanente) • 80% a 85% dos casos • tireoide ectópica • atireose / agenesia total • hipoplasia • Disormonogênese Tireoidiana • 10% a 15% dos casos • Hipotireoidismo Transitório • 5% a 10% dos casos"},"ped-hipotireoidismo-triagem":{"m":"ped-hipotireoidismo","h1":"Triagem Neonatal Biológica: Dosagem de TSH em Papel-Filtro","sub":"Momento ideal de coleta, valores de corte normativos e fluxo confirmatório sérico.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Interpretação Oficial do TSH Neonatal (SBP 2024) • idealmente entre o 3º e o 5º dia de vida • Valor de TSH em Papel-Filtro • Classificação • Conduta Imediata Recomendada • TSH < 10 μUI/mL • TSH entre 10 e 20 μUI/mL • TSH e T4 livre séricos • TSH ≥ 20 μUI/mL • Altamente Provável / Emergência • INICIAR LEVOTIROXINA IMEDIATAMENTE"},"ped-hipotireoidismo-clinica":{"m":"ped-hipotireoidismo","h1":"Quadro Clínico do Hipotireoidismo Congênito","sub":"O caráter traiçoeiro e silencioso no neonato e os sinais clássicos de diagnóstico tardio.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Por que Não Esperar os Sinais Clínicos? • 95% dos recém-nascidos com hipotireoidismo congênito são inteiramente assintomáticos ao nascimento • Sinais Semiológicos de Diagnóstico Tardio (SBP 2024) • Icterícia Neonatal Prolongada (> 14 dias de vida): • Fontanela Posterior Ampla (> 0,5 cm): • Fácies Mixedematosa Típica: • Hipotonia e Hipoatividade: • Gastrointestinal:"},"ped-hipotireoidismo-fluxograma":{"m":"ped-hipotireoidismo","h1":"Fluxograma Decisório: Hipotireoidismo Congênito","sub":"Algoritmo clínico oficial baseado no Tratado de Pediatria SBP 2024.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo Diagnóstico e Terapêutico Oficial do Hipotireoidismo Congênito (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-hipotireoidismo-tratamento":{"m":"ped-hipotireoidismo","h1":"Tratamento Farmacológico com Posologia Rigorosa","sub":"Dose de ataque inicial de Levotiroxina sódica oral, regras de administração e metas laboratoriais precoces.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Protocolo de Reposição Hormonal Neonatal (SBP 2024) • Levotiroxina Sódica Oral (L-T4): • Dose Inicial de Ataque: 10 a 15 μg/kg/dia em dose única matinal • Em recém-nascidos com valores de T4 livre extremamente baixos (< 0,4 ng/dL), iniciar preferencialmente com a dose mais alta (15... • Modo de Administração Correto: • Interferências de Absorção Proscritas: NÃO misturar em mamadeira com fórmula de soja, sulfato ferroso ou carbonato de cálcio, p... • Metas Terapêuticas Laboratoriais • O T4 livre deve normalizar em 1 a 2 semanas • O TSH deve normalizar (< 5 μUI/mL) dentro do primeiro mês"},"ped-hipotireoidismo-monitorizacao":{"m":"ped-hipotireoidismo","h1":"Monitorização Laboratorial e Reavaliação aos 3 Anos","sub":"Calendário de exames, rastreamento de hipotireoidismo transitório e aconselhamento genético.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Calendário de Consultas e Exames (SBP 2024) • Primeiro Semestre de Vida: • 1 a 2 meses • Segundo Semestre (6 a 12 meses): • 2 a 3 meses • De 1 a 3 anos de idade: • 3 a 4 meses • Reavaliação Diagnóstica aos 3 Anos de Idade • 3 anos de idade"},"ped-hipotireoidismo-caso":{"m":"ped-hipotireoidismo","h1":"Caso Clínico: Hipotireoidismo Congênito","sub":"Simulação de triagem neonatal com tomada de decisão médica imediata baseada nas diretrizes SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"História Clínica & Exame Físico • TSH neonatal em papel-filtro de 35 μUI/mL (valor de referência < 10 μUI/mL) • Fontanela posterior mede 1,2 cm • Pergunta Clínica: • Discussão Clínica & Gabarito Oficial (SBP 2024): • 1. Interpretação da Triagem: TSH ≥ 20 μUI/mL EM PAPEL-FILTRO DEFINE EMERGÊNCIA TERAPÊUTICA NEONATAL. • 2. Conduta Imediata Mandatória: • Coleta imediata de sangue venoso para dosagem confirmatória sérica de TSH e T4 livre • INICIAR LEVOTIROXINA SÓDICA ORAL IMEDIATAMENTE (10 a 15 μg/kg/dia) • Orientar a mãe a triturar o comprimido e diluir em água ou leite materno em jejum, nunca misturando com ferro ou cálcio;"},"ped-ictericia-sepse-definicao":{"m":"ped-ictericia-sepse","h1":"Icterícia Neonatal: Metabolismo da Bilirrubina & Zonas de Kramer","sub":"Seção 10 (Neonatologia), Cap. 18 — Diretrizes Oficiais da Sociedade Brasileira de Pediatria (2024)","flow":0,"info":1,"presc":0,"caso":0,"kw":"Metabolismo Neonatal da Bilirrubina • massa eritrocitária elevada • meia-vida mais curta das hemácias fetais (70 a 90 dias vs 120 dias no adulto) • beta-glicuronidase • Progressão Craniocaudal: Zonas Dérmicas de Kramer • Zona Dérmica • Segmento Anatômico Acometido • Nível Estimado de Bilirrubina Total • Zona 1 • Zona 2 • Zona 3 • Zona 4 • Zona 5 • Palmas das mãos e plantas dos pés • > 15 a 20 mg/dL (Zona Crítica) • Algoritmo Decisório de Hiperbilirrubinemia & Sepse Precoce/Tardia (SBP 2024) • Abrir em Tela Cheia • Infográfico HD • ~ 4 a 7 mg/dL • ~ 6 a 10 mg/dL • ~ 8 a 12 mg/dL • ~ 11 a 15 mg/dL"},"ped-ictericia-sepse-etiologia":{"m":"ped-ictericia-sepse","h1":"Icterícia Fisiológica vs Patológica: Isoimunização Rh & ABO","sub":"Critérios de Patologia, Isoimunização Eritrocitária e Investigação Laboratorial","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios para Definir Icterícia como Patológica (SBP 2024) • QUALQUER UM • Início Precoce: • primeiras 24 horas de vida • Velocidade de Aumento Rápida: • > 0,5 mg/dL por hora • Nível Sérico Excessivo: • Duração Prolongada: • 7 a 10 dias no RN a termo • 14 dias no prematuro • Componente Direto Aumentado (Colestase): • > 1,0 mg/dL • Incompatibilidade Rh vs Incompatibilidade ABO • Característica • Incompatibilidade Rh (Anti-D) • Incompatibilidade ABO • Binômio Mãe / Filho • Acometimento no 1º Filho • Comum no 1º filho (50%) • Gravidade Clínica • Muito Grave: • Leve a Moderada • Coombs Direto no RN • Fortemente Positivo (+++ ou ++++) • Negativo • Ectoscopia do Sangue"},"ped-ictericia-sepse-clinica":{"m":"ped-ictericia-sepse","h1":"Encefalopatia Bilirrubínica Aguda & Kernicterus Crônico","sub":"Neurotoxicidade da Bilirrubina Livre, Fases Clínicas e Lesão dos Gânglios da Base","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fisiopatologia da Neurotoxicidade • bilirrubina indireta livre (não ligada à albumina) • gânglios da base (globo pálido, corpo estriado, núcleos subtalâmicos), núcleos dos nervos cranianos e corno de Ammon • Estágios da Encefalopatia Bilirrubínica • Fase Aguda (Primeiros dias): • Fase 1 (Inicial): • Fase 2 (Intermediária): • Fase 3 (Avançada): • Fase Crônica (Kernicterus Definitivo): • Paralisia Cerebral Coreoatetoide: • Perda Auditiva Neurossensorial: • Paralisia do Olhar Vertical: • Displasia Dentária:"},"ped-ictericia-sepse-tratamento":{"m":"ped-ictericia-sepse","h1":"Curvas de Bhutani, Fototerapia & Exsanguinotransfusão","sub":"Diretrizes da SBP/AAP: Irradiância Eficaz, Imunoglobulina e Transfusão Duplo Volume","flow":0,"info":0,"presc":1,"caso":0,"kw":"Fototerapia de Alta Eficácia (LEDs Azuis) • Lumirrubina • Comprimento de Onda Padrão: • 460 a 490 nm (luz azul) • Irradiância Mínima Eficaz: • ≥ 30 μW/cm²/nm • Superfície Corpórea Exposta: • Proteção Ocular Obrigatória: • Hidratação: • Exsanguinotransfusão Total & Imunoglobulina (IGIV) • 1. Imunoglobulina Humana Endovenosa (IGIV) na Isoimunização: • 0,5 a 1,0 g/kg IV infundida em 2 horas • 2. Exsanguinotransfusão de Duplo Volume (160 mL/kg):"},"ped-ictericia-sepse-fluxograma":{"m":"ped-ictericia-sepse","h1":"Fluxograma de Icterícia & Sepse Neonatal","sub":"Algoritmo Decisório Sequencial de Avaliação de Risco, Fototerapia e Antibioticoterapia","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo Decisório de Hiperbilirrubinemia & Sepse Precoce/Tardia (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-ictericia-sepse-sepse":{"m":"ped-ictericia-sepse","h1":"Sepse Neonatal: Precoce vs Tardia & Esquemas Empíricos","sub":"Microbiologia, Fatores de Risco de Transmissão Vertical e Escolha do Esquema Antimicrobiano","flow":0,"info":0,"presc":0,"caso":0,"kw":"Classificação Temporal & Microbiologia (SBP 2024) • Parâmetro • Sepse Neonatal Precoce • Sepse Neonatal Tardia • Idade de Início • ≤ 48 a 72 horas de vida • > 72 horas de vida • Mecanismo de Infecção • Principais Patógenos • 1. Streptococcus agalactiae (GBS) 2. Escherichia coli 3. Listeria monocytogenes • 1. Staphylococcus coagulase-negativa (S. epidermidis) 2. Staphylococcus aureus 3. Gram-negativos multirresistentes (Klebsiella,... • Fatores de Risco • Esquema Empírico Inicial • AMPICILINA + GENTAMICINA • OXACILINA (ou VANCOMICINA) + AMICACINA (ou CEFEPIMA / MEROPENEM) • Posologia dos Antibióticos Neonatais (SBP 2024) • Ampicilina IV: • Gentamicina IV: • Vancomicina IV:"},"ped-ictericia-sepse-criterios":{"m":"ped-ictericia-sepse","h1":"Choque Séptico Neonatal, Punção Lombar & Complicações","sub":"Identificação da Falência Circulatória Neonatal, Investigação Liquórica e Manejo com Aminas","flow":0,"info":0,"presc":0,"caso":0,"kw":"Reconhecimento Clínico do Choque Séptico Neonatal • hipotensão arterial é um sinal TARDIO e pré-terminal • Tempo de Enchimento Capilar (TEC) prolongado (> 3 segundos) • Pulsos periféricos filiformes ou ausentes com extremidades frias e pálidas (\"choque frio\"). • Oligúria (< 1 mL/kg/hora) após as primeiras 24 horas de vida. • Acidose metabólica persistente com hiperlactatemia (> 2 a 4 mmol/L). • Punção Lombar (LCR) — Quando Realizar? • Na Sepse Tardia: • OBRIGATÓRIA • Na Sepse Precoce:"},"ped-ictericia-sepse-caso":{"m":"ped-ictericia-sepse","h1":"Caso Clínico Simulado: Icterícia Precoce com Isoimunização Rh","sub":"Tomada de Decisão em Hiperbilirrubinemia Grave nas Primeiras 24 Horas de Vida","flow":0,"info":0,"presc":0,"caso":1,"kw":"História & Apresentação Clínica • 16 horas de vida • O negativo • Zona 3 de Kramer • Resultados Laboratoriais de Urgência: • Tipagem sanguínea do RN: A positivo • Fortemente Positivo (++++) • Bilirrubina Total: 14,2 mg/dL • Hemoglobina: 11,2 g/dL | Hematócrito: 33% | Reticulócitos: 11% (reticulocitose marcante). • DIAGNÓSTICO & CONDUTA PASSO A PASSO (DIRETRIZES SBP 2024): • 1. Diagnóstico Clínico-Laboratorial: • 2. Conduta Imediata de Emergência: • Transferência Imediata para UTI Neonatal: • Fototerapia de Alta Eficácia (LEDs Azuis de Alta Intensidade) IMEDIATA: • Administração de Imunoglobulina Humana Endovenosa (IGIV): • 1,0 g/kg IV infundida em 2 horas"},"ped-imunizacoes-definicao":{"m":"ped-imunizacoes","h1":"Calendário Vacinal da Infância & Adolescência: Visão Geral","sub":"Conceituação da imunização ativa, memória imunológica, proteção coletiva (imunidade de rebanho) e o alinhamento SBP/PNI 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Fundamentos Biológicos da Imunização Ativa • Tratado de Pediatria da SBP (6ª Edição, 2024) • células de memória B e T • Tipos de Imunobiológicos & Diferenças Práticas: • Vacinas de Microrganismos Vivos Atenuados: • Vacinas Inativadas / Acelulares / Subunitárias: • Algoritmo do Calendário Vacinal SBP / PNI (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-imunizacoes-calendario":{"m":"ped-imunizacoes","h1":"Calendário Vacinal Completo da SBP / PNI (0 a 19 Anos)","sub":"Tabela cronológica completa de todas as vacinas recomendadas pela SBP na rede pública (PNI) e clínicas privadas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Cronograma Cronológico das Vacinas da Criança e do Adolescente • Idade da Criança • Vacinas Recomendadas no Calendário Básico (SUS / PNI) • Diferenciais Recomendados pela SBP (Rede Privada) • Ao Nascer • BCG • Hepatite B • 2 Meses • Pentavalente • VIP • Pneumocócica 10-valente • Rotavírus humano monovalente • Hexavalente acelular • Pneumocócica 13 ou 15-valente • Rotavírus pentavalente • 3 Meses • Meningocócica C conjugada • Meningocócica ACWY • Meningocócica B recombinante • 4 Meses • Rotavírus • 5 Meses • 6 Meses • Covid-19 • 9 Meses • Febre Amarela • 12 Meses (1 Ano) • Tríplice Viral - SCR • 15 Meses • DTP • Hepatite A • Tetraviral • 4 Anos • Varicela • 9 a 14 Anos"},"ped-imunizacoes-atrasos":{"m":"ped-imunizacoes","h1":"Manejo de Atrasos Vacinais & Regras de Recuperação (Catch-Up)","sub":"Diretrizes universais: por que doses prévias nunca são perdidas e intervalos mínimos entre vacinas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Regra Fundamental: NUNCA SE REINICIA ESQUEMA VACINAL ATRASADO! • Princípio Imunológico da Memória B: • as doses aplicadas anteriormente são sempre consideradas válidas • dar continuidade ao esquema, completando as doses faltantes • Regras Práticas de Intervalos Mínimos entre Doses e Vacinas • Situação de Aplicação • Regra de Intervalo Mínimo • Exceções & Justificativa Fisiológica • Doses consecutivas da MESMA vacina inativada • 30 dias (4 semanas) • Vacinas Inativadas Diferentes • simultaneamente no mesmo dia • Duas Vacinas de VÍRUS VIVOS Parenterais • intervalo mínimo obrigatório de 30 DIAS • Vacina Rotavírus Oral (VRH) • Limites de Idade Estritos e Inegociáveis:"},"ped-imunizacoes-crie":{"m":"ped-imunizacoes","h1":"Centros de Referência de Imunobiológicos Especiais (CRIE)","sub":"Indicações e acesso gratuito no SUS a vacinas acelulares e imunoglobulinas para pacientes imunodeprimidos, prematuros e cardiopatas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Principais Imunobiológicos Disponibilizados no CRIE • Imunobiológico Especial • Principais Indicações Clínicas Formais no CRIE • Justificativa Médica • Vacina DTPa (Tríplice Bacteriana Acelular) • Episódio Hipotônico-Hiporresponsivo (EHH) • Convulsão • Pneumocócica 13 ou 23-valente • Imunoglobulina Humana Antivaricela-Zóster (IGHAVZ) • até 96 horas • RN de mãe com varicela de 5 dias antes até 2 dias após o parto"},"ped-imunizacoes-fluxograma":{"m":"ped-imunizacoes","h1":"Fluxograma: Algoritmo Decisório do Calendário Vacinal","sub":"Árvore estruturada de decisão para esquemas básicos, manejo de atrasos e contraindicações.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo do Calendário Vacinal SBP / PNI (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-imunizacoes-falsascontra":{"m":"ped-imunizacoes","h1":"Falsas vs Verdadeiras Contraindicações à Vacinação","sub":"Desmistificação de situações cotidianas que provocam oportunidades perdidas de vacinação e as reais contraindicações médicas.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Falsas Contraindicações (Oportunidades Perdidas que Devem ser Vencidas) • Situações Clínicas que NÃO Contraindicam Vacinar a Criança (SBP 2024): • Resfriado Comum / Infecções Leves: • Uso de Antibióticos ou Antivirais Comuns: • História Familiar de Eventos Adversos: • Desnutrição Leve ou Moderada. • Alergia a Ovo Não Anafilática: • Verdadeiras Contraindicações Formais Absolutas • Contraindicação Verdadeira • Vacinas Envolvidas • Conduta Médica • Anafilaxia Prévia Comprovada a dose anterior ou componente • Imunodeficiência Primária Grave ou Imunossupressão Adquirida • Todas as vacinas de vírus vivos atenuados • Gestação"},"ped-imunizacoes-esavi":{"m":"ped-imunizacoes","h1":"Eventos Supostamente Atribuíveis à Vacinação (ESAVI)","sub":"Diagnóstico diferencial entre febre benigna, choro persistente, Episódio Hipotônico-Hiporresponsivo (EHH) e conduta nas próximas doses.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Manejo dos Principais Eventos Adversos Associados à Vacina Pentavalente (DTPw) • Evento Adverso Observado • Quadro Clínico Típico • Conduta para as Próximas Doses (SBP / PNI) • Reação Local e Febre Baixa • Manter o esquema habitual com DTPw. • Febre Alta (≥ 39,5°C) ou Choro Persistente Inconsolável • ≥ 3 horas seguidas • Manter a vacina DTPw • Episódio Hipotônico-Hiporresponsivo (EHH) • flacidez muscular acentuada (hipotonia) + palidez cutânea profunda + diminuição ou ausência de resposta a estímulos (hiporrespo... • DTPa (Tríplice Acelular) no CRIE • Convulsão Febril ou Afebril • DTPa no CRIE • Encefalopatia Aguda Grave • DT dupla infantil"},"ped-imunizacoes-caso":{"m":"ped-imunizacoes","h1":"Caso Clínico: Lactente de 7 Meses com Atraso Vacinal Importante","sub":"Tomada de decisão na recuperação de esquemas atrasados, cálculo de intervalos e aplicação de regras de ouro.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Regra de Ouro da Memória Imunológica: • NÃO REINICIAR NENHUM ESQUEMA! As primeiras doses recebidas aos 2 meses permanecem plenamente válidas. Deve-se apenas aplicar as... • 2. Vacinas a Serem Aplicadas HOJE (No Dia da Consulta): • Pentavalente (DTPw-Hib-HepB): • 2ª DOSE • VIP (Poliomielite inativada): • Pneumocócica 10-valente: • Meningocócica C conjugada: • 1ª DOSE • Vacina Covid-19: • Vacina Influenza (Gripe): • Nota Prática: Todas essas vacinas inativadas podem ser aplicadas com segurança no mesmo dia, distribuídas em membros diferentes..."},"ped-infecc-cong-definicao":{"m":"ped-infecc-cong","h1":"Infecções Congênitas: Vias de Transmissão Vertical","sub":"Seção 20 (Infectologia), Cap. 14 — Diretrizes Oficiais da Sociedade Brasileira de Pediatria (2024)","flow":0,"info":1,"presc":0,"caso":0,"kw":"Vias de Infecção Feto-Neonatal • Transplacentária (Hematogênica): • Canal de Parto (Ascendente / Intraparto): • Pós-Natal (Pela Amamentação): • Manifestações Clínicas Comuns a Todo o Complexo TORCH • assintomáticos (70 a 90%) • Algoritmo Decisório de Sífilis Congênita & Complexo STORCH (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-infecc-cong-sifilis-diagnostico":{"m":"ped-infecc-cong","h1":"Sífilis Congênita: Definição de Caso & VDRL Pareado","sub":"Critérios Oficiais do Ministério da Saúde / SBP 2024 e Quadro Clínico Precoce e Tardio","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios de Tratamento Materno Adequado (PCDT Sífilis / SBP) • ADEQUADO • TODOS OS 3 CRITÉRIOS • Uso exclusivo de Penicilina Benzatina • Tratamento iniciado e concluído pelo menos 30 dias antes do parto • Queda documentada do título de VDRL ou manutenção em títulos baixos (queda em ≥ 2 diluições em 3 meses). • Manifestações Clínicas da Sífilis Congênita • Precoces (Primeiros 2 Anos de Vida): • Rinite Sifilítica: • Pênfigo Palmoplantar Sifilítico: • Lesões Ósseas (70-80%): • Pseudoparalisia de Parrot • Sinal de Wimberger • Hepatoesplenomegalia volumosa, glomerulonefrite e icterícia. • Tardias (Após os 2 Anos de Vida): • Tríade de Hutchinson Clássica:"},"ped-infecc-cong-sifilis-conduta":{"m":"ped-infecc-cong","h1":"Tratamento da Sífilis Congênita: Esquemas com Penicilinas","sub":"Algoritmo Terapêutico Rigoroso com Penicilina Cristalina, Procaína e Benzatina (SBP/MS)","flow":0,"info":0,"presc":1,"caso":0,"kw":"Os 3 Esquemas Oficiais de Penicilina (SBP 2024) • ESQUEMA 1: PENICILINA G CRISTALINA IV (PADRÃO-OURO OBRIGATÓRIO NA NEUROSSÍFILIS) • Indicações: • Dose Pediátrica: • 50.000 UI/kg/dose por via intravenosa • Intervalo: • 12 em 12 horas • 8 em 8 horas • Duração Obrigatória: • 10 dias completos • Regra Crítica: • ESQUEMA 2: PENICILINA G PROCAÍNA IM (ALTERNATIVA SEM NEUROSSÍFILIS) • 50.000 UI/kg por via Intramuscular (IM) • 10 dias consecutivos • ESQUEMA 3: PENICILINA G BENZATINA IM (DOSE ÚNICA) • Indicação Estrita: • 50.000 UI/kg por via Intramuscular (IM) em DOSE ÚNICA"},"ped-infecc-cong-toxo":{"m":"ped-infecc-cong","h1":"Toxoplasmose Congênita: Tríade de Sabin & Esquema Anual","sub":"Quadro Oftalmológico, Calcificações Difusas e Tratamento com Sulfadiazina + Pirimetamina (SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tríade de Sabin & Apresentação Clínica • gravidade clínica fetal é inversamente proporcional à idade gestacional • Tríade Clássica de Sabin (Quatríade quando associada a retardo mental): • Coriorretinite em Maculopatia Cicatricial (80% dos casos): • Hidrocefalia Obstrutiva: • Calcificações Cerebrais DIFUSAS: • Convulsões e comprometimento neuropsicomotor grave. • Esquema Terapêutico Clássico de 1 Ano Completo (SBP 2024) • 12 meses consecutivos • 1. Sulfadiazina: • 100 mg/kg/dia VO • 2. Pirimetamina: • 2 mg/kg/dia VO • 1 mg/kg/dia VO • 3. Ácido Folínico (Leucovorina): • 10 mg VO 3 vezes por semana • 4. Corticosteroide (Prednisona 1 mg/kg/dia):"},"ped-infecc-cong-cmv-rubeola":{"m":"ped-infecc-cong","h1":"Citomegalovírus & Rubéola Congênita: Diagnóstico & Conduta","sub":"Surdez Neurossensorial, Calcificações Periventriculares, Tríade de Gregg e Valganciclovir","flow":0,"info":0,"presc":0,"caso":0,"kw":"Citomegalovírus Congênito (CMV) — A Causa Nº 1 de Surdez Não Genética • perda auditiva neurossensorial progressiva tardia • Quadro Clínico Grave: • calcificações cerebrais PERIVENTRICULARES • Diagnóstico Padrão-Ouro: • DNA viral de CMV por PCR na urina ou saliva • nas primeiras 2 a 3 semanas de vida • Tratamento (SBP 2024): • Valganciclovir Oral na dose de 16 mg/kg/dose 12/12h por 6 meses consecutivos • Rubéola Congênita (Tríade de Gregg) • Tríade Clássica de Gregg: • Catarata Congênita Central: • Cardiopatia Congênita: • Persistência do Canal Arterial (PCA) • Estenose da Artéria Pulmonar • Surdez Neurossensorial:"},"ped-infecc-cong-fluxograma":{"m":"ped-infecc-cong","h1":"Fluxograma Decisório: Infecções Congênitas (TORCH & Sífilis)","sub":"Algoritmo Visual Completo de Rastreio Sorológico, Investigação Complementar e Terapêutica","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo Decisório de Sífilis Congênita & Complexo STORCH (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-infecc-cong-herpes-outras":{"m":"ped-infecc-cong","h1":"Herpes Simples Neonatal (HSV): Formas Clínicas & Aciclovir","sub":"Doença Mucocutânea, Encefalite Herpética, Forma Disseminada e Terapia Antiviral Precoce","flow":0,"info":0,"presc":0,"caso":0,"kw":"Apresentação Clínica & Gravidade (HSV-1 e HSV-2) • 1. Forma Localizada de Pele, Olhos e Boca (SEM): • 2. Forma de Sistema Nervoso Central (Encefalite): • hemácias (líquor hemorrágico na ausência de acidente de punção) • 3. Forma Disseminada (Fulminante): • Tratamento de Emergência com Aciclovir em Alta Dose (SBP 2024) • Esquema Posológico Oficial: • Aciclovir Intravenoso: • 60 mg/kg/dia dividido de 8 em 8 horas • Duração do Tratamento: • 14 dias • 21 dias"},"ped-infecc-cong-caso":{"m":"ped-infecc-cong","h1":"Caso Clínico Simulado: Manejo Neonatal de Mãe com Sífilis no Parto","sub":"Tomada de Decisão Sequencial em Triagem, Exames Complementares e Tratamento Hospitalar","flow":0,"info":0,"presc":0,"caso":1,"kw":"História & Apresentação Clínica • VDRL materno resultou em 1:16 • VDRL do RN = 1:4 • DIAGNÓSTICO & CONDUTA PASSO A PASSO (DIRETRIZES SBP 2024 / MS): • 1. Avaliação do Tratamento Materno: • INADEQUADAMENTE TRATADA • 2. Interpretação do VDRL do RN: • PORÉM, como a mãe foi inadequadamente tratada, o RN é considerado com SUSPEITA de Sífilis Congênita e NÃO pode receber alta sem... • 3. Investigação Complementar Obrigatória: • Punção Lombar: • Radiografia de Ossos Longos: • Hemograma Completo com Plaquetas: • Avaliação oftalmológica e auditiva. • 4. Definição do Esquema Antimicrobiano: • Cenário A (Se QUALQUER exame estiver alterado ou LCR positivo):"},"ped-itu-enurese-definicao":{"m":"ped-itu-enurese","h1":"Infecção do Trato Urinário (ITU) na Infância: Visão Geral, Diferenciação Clínica & Fisiopatologia","sub":"Epidemiologia por faixa etária, fatores de virulência bacteriana e diferenciação crucial entre cistite e pielonefrite com risco de dano ao parênquima renal.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Epidemiologia Segundo o Tratado de Pediatria SBP 2024 • Infecção do Trato Urinário (ITU) • Distribuição Epidemiológica por Idade e Sexo: • Lactentes Jovens (< 3 meses de vida): • sexo masculino • A Partir dos 6 a 12 Meses de Vida: • sexo feminino • Diferenciação Clínica: Pielonefrite Aguda (ITU Alta) vs Cistite Aguda (ITU Baixa) • Parâmetro Clínico • Pielonefrite Aguda (ITU Alta) • Cistite Aguda (ITU Baixa) • Febre alta frequente (≥ 38,5°C) • Ausência de febre • Disúria, polaciúria, urgência miccional • Elevado (10% a 15%) • Etiologia Microbiológica (SBP 2024) • Escherichia coli uropatogênica (UPEC): • 80% a 85% dos episódios comunitários"},"ped-itu-enurese-coleta":{"m":"ped-itu-enurese","h1":"Métodos de Coleta Urinária e Critérios Diagnósticos da Urocultura","sub":"Técnicas assépticas, pontos de corte de UFC/mL por método e a conduta obrigatória diante do saco coletor plástico.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Pontos de Corte Diagnósticos da Urocultura Segundo o Tratado de Pediatria SBP 2024 • Método de Coleta • População Indicada • Ponto de Corte Positivo (UFC/mL) • Comentários Clínicos Oficiais • Padrão-ouro absoluto • Método de escolha habitual • Taxa de falso-positivo de 85% a 90%! • Interpretação do Exame de Urina Tipo 1 (EAS / Urina Rotina) • Leucocitúria / Piúria: • Esterase Leucocitária: • Teste do Nitrito: • Altamente específico (> 95%) • 4 horas • Piúria Estéril: • Qualquer crescimento (> 0 UFC/mL ou ≥ 1 colônia) de bacilo gram-negativo • ≥ 50.000 UFC/mL (patógeno único) • ≥ 100.000 UFC/mL (patógeno único)"},"ped-itu-enurese-tratamento":{"m":"ped-itu-enurese","h1":"Antibioticoterapia Empírica e Guiada por Antibiograma","sub":"Critérios formais de internação hospitalar, esquemas parenterais e orais e adequação da duração terapêutica.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Critérios Formais de Internação Hospitalar (SBP 2024) • Lactente jovem com idade < 2 a 3 meses • Presença de toxemia sistêmica • Vômitos incoercíveis • Suspeita de uropatia obstrutiva congênita associada (hidronefrose grave, bexiga palpável). • Condições socioeconômicas vulneráveis ou impossibilidade familiar de garantir o tratamento e seguimento ambulatorial. • Falha de resposta clínica após 48 a 72 horas de antibioticoterapia oral ambulatorial bem conduzida. • Esquemas Antimicrobianos Recomendados (SBP 2024) • Quadro Clínico • Via & Esquema Preferencial • Dose Pediátrica • Duração Total • Nitrofurantoína VO • Alerta Farmacológico Máximo:"},"ped-itu-enurese-propedeutica":{"m":"ped-itu-enurese","h1":"Investigação por Imagem Pós-ITU: Roteiro Racional da SBP 2024","sub":"Indicações e momento de realização da Ultrassonografia, Uretrocistografia Miccional e Cintilografia Renal DMSA.","flow":0,"info":0,"presc":0,"caso":0,"kw":"1. Ultrassonografia de Rins e Vias Urinárias (USG) • Indicação Formal: • primeiro episódio de ITU febril • Momento de Realização: • Limitação: • 2. Uretrocistografia Miccional (UCRM) • Padrão-Ouro: • Refluxo Vesicoureteral (RVU) • Indicações Selecionadas Segundo Diretriz SBP / AAP 2024: • 3. Cintilografia Renal com DMSA (Ácido Dimercaptossuccínico) • Padrão-Ouro para Cicatriz Renal: • Momento Fundamental: • no mínimo 4 a 6 meses após o término do episódio de pielonefrite aguda"},"ped-itu-enurese-fluxograma":{"m":"ped-itu-enurese","h1":"Fluxograma da ITU e Enurese Noturna na Infância","sub":"Algoritmo decisório integrado: diagnóstico asséptico, estratificação pielonefrite vs cistite e roteiro de imagem.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de ITU e Enurese Noturna na Infância (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-itu-enurese-refluxo":{"m":"ped-itu-enurese","h1":"Refluxo Vesicoureteral (RVU), Quimioprofilaxia & Prevenção de Dano Renal","sub":"Classificação em graus I a V, indicações contemporâneas de profilaxia antimicrobiana e tratamento da disfunção vesicointestinal.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Classificação Internacional do Refluxo Vesicoureteral (RVU) • Grau I: • Grau II: • Grau III: • Grau IV: • Grau V: • História Natural: • Indicações Contemporâneas de Quimioprofilaxia Antimicrobiana (SBP 2024) • RVU de Alto Grau (Graus IV e V) • RVU Grau III • Presença de cicatriz renal prévia comprovada no DMSA • Lactentes com hidronefrose antenatal de alto grau aguardando investigação definitiva pós-natal. • Fármacos e Posologia da Profilaxia (Dose Única Noturna): • Nitrofurantoína: • Cefalexina: • Sulfametoxazol + Trimetoprima:"},"ped-itu-enurese-enurese":{"m":"ped-itu-enurese","h1":"Enurese Noturna Monossintomática na Infância","sub":"Critérios diagnósticos aos 5 anos, alarme noturno de 1ª linha e uso criterioso da Desmopressina (DDAVP).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição & Classificação (SBP 2024) • Enurese Noturna • idade cronológica ≥ 5 anos • Enurese Monossintomática: • Enurese Não Monossintomática: • Primária vs Secundária: • Linhas de Tratamento Baseadas em Evidências (SBP 2024) • 1. Orientações Gerais Comportamentais: • 2. Alarme Noturno (Tratamento de Escolha / 1ª Linha Não Farmacológica): • Maior taxa de cura definitiva a longo prazo • 3. Desmopressina (DDAVP - Farmacoterapia de 1ª Linha): • Dose: • Alerta de Segurança Vital: • intoxicação hídrica e hiponatremia grave com convulsões"},"ped-itu-enurese-caso":{"m":"ped-itu-enurese","h1":"Caso Clínico Interativo: Lactente com Febre Alta Sem Foco, Saco Coletor e Decisão Propedêutica","sub":"Aplicação das diretrizes da Sociedade Brasileira de Pediatria no manejo diagnóstico asséptico e terapêutico da ITU febril.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • saco coletor plástico • Desafio Terapêutico & Tomada de Decisão: • Tratado de Pediatria da SBP (6ª Edição, 2024) • O laudo colhido por saco coletor é suficiente para fechar o diagnóstico e iniciar o tratamento definitivo de pielonefrite? Qual... • Qual o esquema antimicrobiano empírico e a via de administração mais adequados? • Qual o protocolo de investigação por imagem indicado para esta paciente? • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Conduta Imediata de Coleta & Invalidação do Saco Coletor: • O laudo do saco coletor NÃO É SUFICIENTE PARA CONFIRMAR O DIAGNÓSTICO • Conduta Obrigatória:"},"ped-nutricao-definicao":{"m":"ped-nutricao","h1":"Introdução Alimentar aos 6 Meses: Princípios & Prontidão","sub":"Diretrizes do Guia Alimentar para Crianças Brasileiras Menores de 2 Anos (MS/SBP) e maturação fisiológica do lactente.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Por Que Iniciar Exatamente aos 6 Meses de Vida? • Aleitamento Materno Exclusivo (AME) até os 6 meses de vida completos • Marcos da Prontidão Fisiológica e do Desenvolvimento aos 6 Meses: • Maturação Renal & Gastrointestinal: • Controle Motor & Axial: • Extinção do Reflexo de Protrusão da Língua: • Interesse Ativo & Coordenação: • Fluxograma Oficial de Introdução Alimentar & Puericultura (SBP 2024 / MS) • Abrir em Tela Cheia • Infográfico HD"},"ped-nutricao-metodos":{"m":"ped-nutricao","h1":"Métodos de Introdução Alimentar: Tradicional, BLW & Bliss","sub":"Comparativo técnico entre a oferta orientada por colher, autoalimentação conduzida pelo bebê e o método misto integrado.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quadro Comparativo dos 3 Métodos de Introdução Alimentar • Método • Descrição Técnica • Vantagens Comprovadas • Precauções & Pontos Críticos • Tradicional Participativo • BLW (Baby-Led Weaning) • BLISS / Integrado (Recomendado SBP)"},"ped-nutricao-grupos":{"m":"ped-nutricao","h1":"Composição do Prato & Evolução da Consistência Alimentar","sub":"Os 5 grupos alimentares obrigatórios no almoço e jantar e a progressão textural dos 6 aos 12 meses.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Estrutura do Prato Saudável (Guia Alimentar MS / SBP 2024) • 1 alimento de cada um dos seguintes 4 grupos basais • Grupo Alimentar • Exemplos Regionais Recomendados • Papel Nutricional Essencial • 1. Cereais ou Tubérculos • 2. Leguminosas • 3. Carnes e Ovos • Fonte primordial de Ferro Heme • 4. Hortaliças (Legumes & Verduras) • 5. Sobremesa: Fruta Fresca • Vitamina C (ácido ascórbico) • Evolução da Textura e Consistência (SBP 2024) • 6 a 8 Meses: • amassados no garfo • 9 a 11 Meses: • A Partir de 12 Meses: • alimentação da família"},"ped-nutricao-alergenicos":{"m":"ped-nutricao","h1":"Introdução Precoce de Alergênicos & Janela de Tolerância Oral","sub":"Evidências científicas recentes (estudos LEAP e EAT) que revolucionaram a conduta de introdução do ovo, amendoim, peixe e trigo.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Mudança Histórica de Paradigma na Alergia Alimentar • SBP (2024) • essa conduta estava equivocada e aumentava a prevalência de alergias graves • O Conceito da \"Janela Imunológica de Tolerância\" (6 a 9 Meses): • A mucosa intestinal nos primeiros meses é programada para desenvolver tolerância oral ativa • Ovo Inteiro (Gema + Clara): • 6 meses de idade • Peixes e Frutos do Mar: • Trigo / Glúten: • Amendoim e Castanhas:"},"ped-nutricao-fluxograma":{"m":"ped-nutricao","h1":"Fluxograma Oficial de Introdução Alimentar & Puericultura","sub":"Algoritmo decisório e de orientação prática para introdução alimentar segundo as normas do Ministério da Saúde e SBP (2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Introdução Alimentar & Puericultura (SBP 2024 / MS) • Abrir em Tela Cheia • Infográfico HD"},"ped-nutricao-proibicoes":{"m":"ped-nutricao","h1":"Alimentos Proibidos & Restrições Mandatórias até os 2 Anos","sub":"Diretrizes categóricas da SBP e Ministério da Saúde contra o açúcar precoce, botulismo por mel e alimentos ultraprocessados.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz de Proibições Alimentares Categóricas (SBP 2024) • Alimento / Substância • Faixa Etária de Proibição • Risco Clínico / Fisiopatologia • Açúcar de Adição • Mel de Abelha • Botulismo Intestinal Infantil • Leite de Vaca Integral • Sucos de Frutas (Mesmo 100% Naturais) • Alimentos Ultraprocessados"},"ped-nutricao-formulas":{"m":"ped-nutricao","h1":"Fórmulas Infantis Padronizadas & Especiais","sub":"Indicações clínicas estritas de fórmulas de partida, seguimento, hidrolisados extensos e fórmulas de aminoácidos segundo a SBP.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Classificação das Fórmulas Infantis para Lactentes • Tipo de Fórmula • Faixa Etária Indicada • Características Bioquímicas • Indicação Principal (se AME impossível) • Fórmula de Partida (Fase 1) • Fórmula de Seguimento (Fase 2) • Fórmula Extensamente Hidrolisada (eHF) • Alergia à Proteína do Leite de Vaca (APLV) • Fórmula de Aminoácidos Livres • APLV grave com anafilaxia"},"ped-nutricao-caso":{"m":"ped-nutricao","h1":"Caso Clínico Simulado: Introdução Alimentar & Manejo de Dificuldades","sub":"Consulta de puericultura dos 6 meses, sinais de prontidão, neofobia alimentar e orientações baseadas na SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Exame Físico & Avaliação de Prontidão: • Desenvolvimento: • Reflexos: • Antropometria: • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Identificação Crítica dos Equívocos Maternos: • USO DE MEL DE ABELHA: Erro grave com risco iminente de Botulismo Infantil • Alimentos Liquidificados / Processados: • Oferecer Suco de Laranja na Mamadeira: • Interpretação Equivocada da Recusa Inicial: • 2. Plano de Orientação & Conduta Prática SBP: • Suspender Imediatamente o Mel de Abelha: • Mudança de Consistência (Amassar no Garfo): • Respeitar a Autonomia e a Neofobia: • Zero Açúcar até 2 Anos: • Manter o Aleitamento Materno:"},"ped-obesidade-definicao":{"m":"ped-obesidade","h1":"Obesidade Infantil: Critérios Antropométricos Oficiais OMS","sub":"A epidemia global da adiposidade infantil, pontos de corte de escores-Z e diferenciação etária estrita no Tratado SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Pontos de Corte da OMS por Faixa Etária (SBP 2024) • Escore Z de IMC para a idade • Diagnóstico Nutricional • Crianças < 5 Anos (0 a 59 meses) • Crianças ≥ 5 Anos & Adolescentes (5 a 19 anos) • Risco de Sobrepeso • SOBREPESO • OBESIDADE • OBESIDADE GRAVE • Fluxograma Oficial de Rastreio e Manejo da Obesidade Infantil (SBP 2024) • Abrir em Tela Cheia • Infográfico HD • Escore Z > +1 DP até +2 DP (p85 a p97) • Escore Z > +2 DP até +3 DP (p97 a p99,9) • Escore Z > +3 DP (p > 99,9)"},"ped-obesidade-etiologia":{"m":"ped-obesidade","h1":"Etiologia: Obesidade Exógena vs Causas Endócrinas e Genéticas","sub":"O cruzamento semiológico crucial entre curva de peso e curva de estatura no consultório de puericultura.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Regra de Ouro Semiológica da Estatura (Tratado SBP 2024) • Como Diferenciar Imediatamente no Gráfico: • Obesidade Exógena / Comum (95% dos casos): • Estatura Normal ou AUMENTADA • Obesidade Secundária (Endócrina ou Genética - < 5%): • BAIXA ESTATURA OU PARADA DE CRESCIMENTO ESTATURAL • Causas Secundárias Sindrômicas & Endócrinas • Etiologia • Mecanismo Fisiopatológico • Sinais Semiológicos Concomitantes • Hipotireoidismo Adquirido • Síndrome de Cushing • Síndrome de Prader-Willi • hiperfagia voraz incontrolável"},"ped-obesidade-comorbidades":{"m":"ped-obesidade","h1":"Rastreio de Síndrome Metabólica, HAS & Esteatose Hepática","sub":"Critérios da International Diabetes Federation (IDF) adaptados para pediatria e avaliação de órgãos-alvo.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Diagnósticos de Síndrome Metabólica em ≥ 10 Anos (IDF / SBP) • Circunferência Abdominal ≥ Percentil 90 • dois • Triglicerídeos Elevados: • 150 mg/dL • HDL-Colesterol Baixo: • 40 mg/dL • Pressão Arterial Elevada: • 130 mmHg • 85 mmHg • Glicemia de Jejum Alterada: • 100 mg/dL • Esteatose Hepática Metabólica (MASLD / Antiga NAFLD) • Rastreio Laboratorial: • ALT > 26 U/L em meninas e > 22 U/L em meninos • Exame de Imagem:"},"ped-obesidade-propedeutica":{"m":"ped-obesidade","h1":"Propedêutica Armada & Exames Laboratoriais na Obesidade","sub":"Quando e quais exames complementares solicitar na criança com excesso de peso segundo as normas da SBP (2024).","flow":0,"info":0,"presc":0,"caso":0,"kw":"Indicações e Bateria de Exames de 1ª Linha • toda criança com Escore Z de IMC > +2 (Obesidade) • Sobrepeso (Z > +1 a +2) • Exame Complementar • Alvo de Detecção • Ponto de Corte Alterado (SBP 2024) • Perfil Lipídico em Jejum • Glicemia de Jejum & HbA1c • ALT (TGP) e AST (TGO) • TSH e T4 Livre • Polissonografia Noturna"},"ped-obesidade-fluxograma":{"m":"ped-obesidade","h1":"Fluxograma Oficial de Rastreio & Conduta na Obesidade","sub":"Árvore de decisão clínica para estratificação de risco, abordagem não farmacológica e seguimento da SBP (2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Rastreio e Manejo da Obesidade Infantil (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-obesidade-tratamento":{"m":"ped-obesidade","h1":"Intervenção Não Farmacológica: A Diretriz 5-2-1-0 da SBP","sub":"Abordagem centrada na família, metas realistas de mudança de comportamento e manejo de telas e sono.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Os 4 Pilares da Diretriz 5-2-1-0 (SBP 2024) • Porções de Frutas & Legumes • Tempo Recreativo de Telas • Atividade Física Diária • Bebidas Açucaradas"},"ped-obesidade-cirurgia":{"m":"ped-obesidade","h1":"Farmacoterapia & Critérios para Cirurgia Bariátrica no Adolescente","sub":"Indicações estritas de agonistas GLP-1, inibidores da lípase e diretrizes para cirurgia metabólica segundo a SBP e CFM.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tratamento Farmacológico da Obesidade no Adolescente (≥ 12 Anos) • nunca é monoterapia inicial • Fármaco • Mecanismo de Ação • Idade Mínima & Posologia • Efeitos Adversos & Monitoramento • Liraglutida • 3,0 mg/dia SC • Orlistate • 120 mg VO 3x/dia • Critérios Oficiais para Cirurgia Bariátrica no Adolescente (CFM / SBP) • Idade mínima recomendada: geralmente ≥ 14 a 16 anos. • Maturidade Óssea Consolidada: • Critérios Antropométricos Rígidos: • IMC > 35 kg/m² • OU IMC > 40 kg/m² • Falha documentada de pelo menos 2 anos de tratamento clínico e comportamental rigoroso. • ≥ 12 anos. Início 0,6 mg/dia SC, titulado semanalmente até a dose plena de 3,0 mg/dia SC ."},"ped-obesidade-caso":{"m":"ped-obesidade","h1":"Caso Clínico Simulado: Escolar com Obesidade & Acantose Nigricans","sub":"Investigação de comorbidades metabólicas, aferição de pressão e abordagem terapêutica familiar segundo a SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Exame Físico e Antropometria: • Peso: • Estatura: • IMC: • +3,4 DP -> Obesidade Grave • Circunferência Abdominal: • Pressão Arterial: • Hipertensão Estágio 1 • Ectoscopia: • Acantose Nigricans • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Diagnóstico Clínico Completo: • Obesidade Grave Exógena • Hipertensão Arterial Estágio 1 • Resistência Insulínica Grave • Esteatose Hepática (MASLD) • Apneia Obstrutiva do Sono (SAOS) • 2. Rastreio Laboratorial Imediato Obrigatório (SBP 2024): • Glicemia de Jejum & Hemoglobina Glicada (HbA1c): • Perfil Lipídico Completo: • Enzimas Hepáticas: • Ultrassonografia de Abdome Total:"},"ped-pneumonia-definicao":{"m":"ped-pneumonia","h1":"Pneumonia Adquirida na Comunidade (PAC): Visão Geral & Etiologia","sub":"Conceituação da PAC na infância, epidemiologia da morbimortalidade respiratória e agentes microbianos estratificados por faixa etária.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição Clínica da PAC (SBP / OMS) • Pneumonia Adquirida na Comunidade (PAC) • Tratado de Pediatria da SBP (6ª Edição, 2024) • essencialmente clínico • tosse associada a taquipneia (frequência respiratória aumentada para a idade) e febre • Impacto na Saúde Pública Infantil: • Permanece como a principal causa infecciosa isolada de mortalidade em crianças menores de 5 anos no mundo, apesar da queda subs... • No Brasil, as complicações supurativas (especialmente o derrame pleural parapneumônico e o empiema) ainda demandam longos perío... • Etiologia Microbiana Estratificada por Faixa Etária (SBP 2024) • Faixa Etária • Agentes Mais Prevalentes"},"ped-pneumonia-semiologia":{"m":"ped-pneumonia","h1":"Semiologia em 4 Eixos & Critérios de Taquipneia da OMS","sub":"Semiotécnica da contagem da frequência respiratória em 60 segundos, achados auscultatórios e semiologia da consolidação.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Pontos de Corte da Frequência Respiratória da OMS / SBP (Critério Cardinal) • A Taquipneia como Marcador Clínico Mais Sensível de Pneumonia: • 60 segundos completos • Menores de 2 meses: • ≥ 60 irpm • De 2 a 11 meses: • ≥ 50 irpm • De 1 a 4 anos (12 a 59 meses): • ≥ 40 irpm • Maiores de 5 anos: • ≥ 20 a 30 irpm • Roteiro Semiológico em 4 Eixos da PAC • Estertores crepitantes tele-inspiratórios localizados • 48 a 72 horas"},"ped-pneumonia-estratificacao":{"m":"ped-pneumonia","h1":"Estratificação de Gravidade & Indicações Precisas de Radiologia","sub":"Classificação em PAC Não Grave vs PAC Grave / Muito Grave e critérios racionais para solicitação de exames de imagem.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Classificação de Gravidade da SBP / OMS • Classificação • Critérios Clínicos Objetivos • Local de Atendimento • Conduta Farmacológica Inicial • PAC Não Grave • Tratamento Ambulatorial • Amoxicilina via oral • PAC Grave • Tiragem Subcostal importante • Internação Hospitalar • Ampicilina IV • PAC Muito Grave / Crítica • qualquer sinal de perigo geral • Internação em UTI Pediátrica • Ceftriaxona IV • Quando Solicitar Radiografia de Tórax (SBP 2024)? • Uso Racional do Rx de Tórax: • NÃO É OBRIGATÓRIA • Todas as crianças com critérios de PAC Grave ou Muito Grave • Falha terapêutica ou persistência de febre após 48 a 72 horas"},"ped-pneumonia-tratamento":{"m":"ped-pneumonia","h1":"Antibioticoterapia Escalonada por Peso & Apresentações","sub":"Doses terapêuticas em mg/kg/dia, intervalo entre doses, duração do tratamento e esquemas alternativos para alérgicos a penicilinas.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Tabela Posológica Completa de Antibióticos na PAC (SBP 2024) • Antimicrobiano • Dose Pediátrica Diária • Intervalo & Via • Indicação Clínica Principal • Amoxicilina (1ª Linha Ambulatorial) • 50 mg/kg/dia • 7 a 10 dias • Amoxicilina + Clavulanato • 50 a 90 mg/kg/dia • Ampicilina Sódica (1ª Linha Hospitalar) • 150 a 200 mg/kg/dia • Penicilina G Cristalina • 100.000 a 200.000 UI/kg/dia • Ceftriaxona • 50 a 100 mg/kg/dia • Oxacilina • Azitromicina • 10 mg/kg/dia • 5 dias • Claritromicina • 15 mg/kg/dia • 50 mg/kg/dia (dose padrão) ou 80 a 90 mg/kg/dia (alta dose) • De 8/8h (ou 12/12h se alta dose) VO por 7 a 10 dias • 50 a 90 mg/kg/dia (base amoxicilina)"},"ped-pneumonia-fluxograma":{"m":"ped-pneumonia","h1":"Fluxograma: Algoritmo da Pneumonia Comunitária","sub":"Árvore sequencial estruturada de diagnóstico, critérios de hospitalização e manejo de complicações.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo da Pneumonia Comunitária Pediátrica (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-pneumonia-complicacoes":{"m":"ped-pneumonia","h1":"Derrame Pleural Parapneumônico & Empiema Pediátrico","sub":"Critérios de Light modificados para líquido pleural, indicações de toracocentese diagnóstica e drenagem em selo d'água.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fases Evolutivas do Derrame Pleural Parapneumônico • Fase Exsudativa (Derrame Simples): • Fase Fibropurulenta (Derrame Complicado): • Indicação mandatória de drenagem torácica fechada. • Fase de Organização (Empiema Organizado): • Análise do Líquido Pleural por Toracocentese (Critérios SBP 2024) • Parâmetro Laboratorial • Derrame Parapneumônico Não Complicado • Derrame Complicado / Empiema (Drenagem Obrigatória) • Aspecto Macroscópico • Pus Franco • pH do Líquido • < 7,20 • Glicose • < 40 mg/dL • LDH (Desidrogenase Láctica) • > 1.000 UI/L • Bacterioscopia (Gram) e Cultura • Positivas para bactérias • > 40 a 60 mg/dL • < 40 mg/dL (consumo pelas bactérias e leucócitos)."},"ped-pneumonia-atipicos":{"m":"ped-pneumonia","h1":"Pneumonias Atípicas & Pneumonia Afebril do Lactente","sub":"Diferenciação clínica de Mycoplasma pneumoniae em escolares e Chlamydia trachomatis no primeiro trimestre de vida.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Pneumonia Afebril do Lactente (Chlamydia trachomatis) • 1 e 3 meses de vida • Histórico Típico: • Quadro Clínico: • Laboratório Típico: • Eosinofilia periférica absoluta (> 400 a 500/mm³) • Tratamento Padrão: • Azitromicina 10 mg/kg/dia por 5 dias • Pneumonia por Agentes Atípicos em Escolares (Mycoplasma pneumoniae) • A Síndrome da \"Walking Pneumonia\": • Início insidioso com cefaleia, odinofagia, mialgia e febre baixa, evoluindo com tosse seca persistente e irritativa que pode du... • Dissociação Clínico-Radiológica: • Manifestações extrapulmonares imunomediadas: miringite bolhosa, eritema multiforme, anemia hemolítica por crioaglutininas. • Tratamento de Escolha:"},"ped-pneumonia-caso":{"m":"ped-pneumonia","h1":"Caso Clínico: Lactente de 18 Meses com Tosse, Febre Alta e Taquipneia","sub":"Aplicação dos critérios de taquipneia da OMS, decisão de internação e manejo escalonado.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Exame Físico Admissional: • Sinais Vitais: • FR: 54 irpm (contada em 60 segundos com a criança sem chorar) • Aparelho Respiratório: • Outros Achados: • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Diagnóstico Sindrômico & Classificação de Gravidade: • PNEUMONIA ADQUIRIDA NA COMUNIDADE (PAC) BACTERIANA GRAVE: • Critérios de Gravidade: • Tiragem Subcostal • SpO2 < 92% em ar ambiente (91%) • INTERNAÇÃO HOSPITALAR • 2. Propedêutica Armada Indicada: • Radiografia de Tórax em PA e Perfil: • Hemograma, Proteína C Reativa (PCR) e 2 amostras de Hemocultura periférica:"},"ped-puberdade-definicao":{"m":"ped-puberdade","h1":"Fisiologia do Eixo Hipotálamo-Hipófise-Gonadal & Prazos da Puberdade","sub":"O despertar do gerador de pulsos de GnRH, adrenarca, telarca e os limites cronológicos normais segundo o Tratado SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Fisiologia do Despertar Puberal (Ativação do Eixo HHG) • Tratado de Pediatria SBP 2024 • Sequência Neuroendócrina: • Desinibição dos Neurônios Secretores de GnRH: • Secreção Pulsátil Noturna de GnRH: • LH (Hormônio Luteinizante) • FSH (Hormônio Folículo-Estimulante) • Estímulo Gonadal: • Adrenarca: • Limites Cronológicos Normais de Início Puberal (SBP 2024) • Sexo • Idade Mínima Normal (Precoce se antes) • Idade Média de Início • Idade Máxima Normal (Atraso se após) • Primeiro Sinal Físico Marcador • Feminino • TELARCA • Masculino • AUMENTO TESTICULAR ≥ 4 mL • Fluxograma Oficial de Investigação da Puberdade Precoce e Tardia (SBP 2024) • Abrir em Tela Cheia"},"ped-puberdade-tanner":{"m":"ped-puberdade","h1":"Estadiamento de Marshall & Tanner (M, P e G)","sub":"Descrição anatômica detalhada dos 5 estágios de desenvolvimento mamário, pelos pubianos e genitália masculina.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Desenvolvimento Mamário Feminino (Estágios M1 a M5 de Tanner) • Estágio • Descrição Anatômica da Mama • Significado Clínico & Correlação • Broto Mamário (Telarca): • O 1º marco da puberdade feminina! • Fase do Estirão do Crescimento Feminino • duplo relevo (\"montículo\") • Ocorre a MENARCA • Genitália Masculina (Estágios G1 a G5 de Tanner & Orquidômetro) • Volume Testicular (Prader) • Pênis e Bolsa Escrotal • Significado Clínico • O 1º marco da puberdade masculina! • comprimento • diâmetro (largura) • Fase do Estirão do Crescimento Masculino • Pelos Pubianos Femininos & Masculinos (Estágios P1 a P5) • P1: • P2: • P3: • P4: • P5: • < 4 mL (1 a 3 mL) • ≥ 4 mL (4 a 6 mL)"},"ped-puberdade-marcos":{"m":"ped-puberdade","h1":"A Ordem Cronológica dos Eventos Puberais & O Estirão","sub":"Por que as meninas estiram antes dos meninos e por que a menarca marca a desaceleração final do crescimento.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Diferença Temporal do Estirão entre os Sexos (Tratado SBP 2024) • Meninas: Estirão Precoce (Tanner M3) • M3 de Tanner • Menarca • Meninos: Estirão Tardio (Tanner G4) • G4 de Tanner • 13 cm maior"},"ped-puberdade-variantes":{"m":"ped-puberdade","h1":"Variantes Benignas da Puberdade: Telarca & Adrenarca Precoce","sub":"Critérios clínicos e propedêuticos estritos que dispensam tratamentos agressivos e evitam iatrogenias.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz Diferencial das Variantes Benignas (Tratado SBP 2024) • Variante Benigna • Faixa Etária Típica • Sinais Semiológicos Clínicos • Idade Óssea & Exames • Conduta Médica SBP • Telarca Precoce Isolada • primeiros 2 anos de vida • SEM pelos pubianos • Idade Óssea NORMAL • Expectante! • Adrenarca / Pubarca Precoce Isolada • SEM aumento mamário ou testicular • DHEA-S discretamente elevado • Acompanhamento clínico regular semestral."},"ped-puberdade-fluxograma":{"m":"ped-puberdade","h1":"Fluxograma Oficial de Diagnóstico da Puberdade Precoce","sub":"Árvore de decisão diagnóstica da Sociedade Brasileira de Pediatria para diferenciação entre Central e Periférica (2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Investigação da Puberdade Precoce e Tardia (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-puberdade-precoce":{"m":"ped-puberdade","h1":"Puberdade Precoce Central vs Puberdade Precoce Periférica","sub":"Diferenciação hormonal, investigação por imagem do SNC e condutas terapêuticas com análogos de GnRH.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quadro Comparativo: PPC vs PPP (Tratado SBP 2024) • Aspecto Clínico / Laboratorial • Puberdade Precoce Central (PPC / Verdadeira) • Puberdade Precoce Periférica (PPP / Pseudopuberdade) • Mecanismo Básico • secreção pulsátil de GnRH • INDEPENDENTE de GnRH • Perfil Gonadotrófico • LH basal elevado (> 0,3-0,6 mUI/mL) • pico de LH pós-estímulo com GnRH > 5,0 mUI/mL • LH e FSH suprimidos / indetectáveis • Sequência dos Caracteres • Etiologias Principais • Meninas (90%): • Meninos (50 a 70%): • Hamartoma hipotalâmico • Hiperplasia Adrenal Congênita • Síndrome de McCune-Albright • Exame de Imagem Mandatório • Ressonância Magnética de Encéfalo e Sela Túrcica:"},"ped-puberdade-atraso":{"m":"ped-puberdade","h1":"Atraso Puberal: Definição & Diagnóstico Diferencial","sub":"Ausência de caracteres sexuais aos 13 anos em meninas ou 14 anos em meninos; diferenciação entre CDRN e hipogonadismos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição Operacional de Atraso Puberal • Meninas: • 13 anos completos • Meninos: • 14 anos completos • Diferenciação Laboratorial do Atraso Puberal • Diagnóstico Etiológico • FSH e LH Séricos • Esteroides Sexuais • Exemplos Clínicos Típicos • Retardo Constitucional (CDRN) • Hipogonadismo Hipogonadotrófico • Síndrome de Kallmann • Hipogonadismo Hipergonadotrófico • Síndrome de Turner (45,X) • Síndrome de Klinefelter (47,XXY)"},"ped-puberdade-caso":{"m":"ped-puberdade","h1":"Caso Clínico Simulado: Menina de 7 Anos com Broto Mamário","sub":"Investigação de puberdade precoce, interpretação hormonal e conduta terapêutica fundamentada no Tratado SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Exame Físico e Antropometria: • Estatura Atual: • Velocidade de Crescimento: • 9,2 cm/ano • Exame das Mamas: • Estágio M3 de Tanner • Pelos Pubianos: • Estágio P2 de Tanner • Exames Complementares Solicitados: • Idade Óssea (Mão e Punho): • 10 anos e 6 meses • Ultrassonografia Pélvica: • Dosagens Hormonais: • LH basal = 1,4 mUI/mL • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Diagnóstico Principal: • Puberdade Precoce Central (PPC / GnRH-dependente) Verdadeira • 2. Raciocínio Clínico Fundamentado: • Surgimento de caracteres sexuais secundários em menina antes dos 8 anos de idade"},"ped-reanima-definicao":{"m":"ped-reanima","h1":"Reanimação Neonatal em Sala de Parto: Visão Geral & Minuto de Ouro","sub":"Seção 10 (Neonatologia), Cap. 1 — Diretrizes Oficiais da Sociedade Brasileira de Pediatria (2024)","flow":0,"info":1,"presc":0,"caso":0,"kw":"1 em cada 10 recém-nascidos (10%) • 1% requer medidas avançadas de reanimação • Ventilação com Pressão Positiva (VPP) • Fisiologia da Transição Feto-Neonatal • Expansão Alveolar: • Vasodilatação Pulmonar: • Fechamento dos Shunts Fetais: • Escala de Apgar: Papel & Limitações (SBP 2024) • Importante para a prática médica: O índice de Apgar NUNCA deve ser aguardado para decidir iniciar a reanimação neonatal! • Sinal Avaliado • 0 Pontos • 1 Ponto • 2 Pontos • Frequência Cardíaca • Respiração / Choro • Tônus Muscular • Irritabilidade Reflexa • Cor da Pele • Reanimação Neonatal em Sala de Parto (PRN-SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-reanima-fatores":{"m":"ped-reanima","h1":"Fatores de Risco Perinatais & Preparo da Equipe","sub":"Reconhecimento Antecipado de Risco & Verificação Obrigatória de Material (Checklist SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fatores de Risco Antenatais e Intraparto • Fatores Maternos / Gestacionais: • Idade materna < 16 ou > 35 anos • Diabetes gestacional ou pré-gestacional • Síndromes hipertensivas (Pré-eclâmpsia/Eclâmpsia) • Rotura prematura de membranas ≥ 18 horas • Infecção materna / Febre intraparto / Corioamnionite • Gestação múltipla / Polidrâmnio ou Oligoidrâmnio • Idade gestacional < 37 semanas ou ≥ 42 semanas • Fatores Intraparto e Fetais: • Descolamento Prematuro de Placenta (DPP) / Placenta prévia • Bradicardia fetal persistente ou desacelerações variáveis graves (DIP 2) • Líquido amniótico meconial espesso • Prolapso ou nó verdadeiro de cordão umbilical"},"ped-reanima-passos-iniciais":{"m":"ped-reanima","h1":"Passos Iniciais na Mesa Radiante & Clampeamento do Cordão","sub":"Decisão Inicial de Vitalidade & Sequência de Cuidados nos Primeiros 30 Segundos","flow":0,"info":0,"presc":0,"caso":0,"kw":"Triagem Rápida Imediata (5 a 10 segundos) • Se a resposta for SIM para as 3 perguntas (Boa Vitalidade): • Clampeamento Tardio do Cordão: • 1 a 3 minutos • Contato Pele a Pele Imediato: • Se a resposta for NÃO para qualquer uma das 3 perguntas: • Clampeamento imediato do cordão e transporte imediato para a mesa de reanimação sob calor radiante. • Sequência dos Passos Iniciais na Mesa (≤ 30 segundos) • Prover Calor: • 36,5°C e 37,5°C • Posicionar a Cabeça: • Aspirar Vias Aéreas (SOMENTE SE NECESSÁRIO): • Secar e Estimular: • Não se aspira mais a traqueia de rotina! • VPP imediatamente"},"ped-reanima-vpp":{"m":"ped-reanima","h1":"Ventilação com Pressão Positiva (VPP): O Procedimento Central","sub":"Técnica Correta, Titulação de Oxigênio, Ritmo & Resolução de Problemas (SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"Indicação Formal de VPP • Respiração • Indicações de VPP Imediata: • Apneia • Frequência Cardíaca < 100 batimentos por minuto • Parâmetros & Titulação da VPP (SBP 2024) • Dispositivo de Escolha: • Frequência e Ritmo: • 40 a 60 movimentos por minuto • Concentração Inicial de Oxigênio (FiO2): • RN ≥ 34 semanas: • Ar Ambiente (FiO2 21%) • RN < 34 semanas: • FiO2 30% • Monitorização Obrigatória: • Membro Superior Direito (MSD – pré-ductal) • Minutos de Vida • Meta de Saturação de O2 Pré-Ductal (MSD) • 70% a 80% • 80% a 90% • 85% a 95% • Correção de Falhas na VPP: O Mnemônico MR SOPA • M - Máscara: • R - Reposicionar: • S - Succionar: • O - Open mouth: • P - Pressão:"},"ped-reanima-fluxograma":{"m":"ped-reanima","h1":"Fluxograma Decisório Oficial: Reanimação Neonatal SBP 2024","sub":"Algoritmo Visual Completo para RN ≥ 34 semanas (Passos Iniciais, VPP, IOT, Massagem e Drogas)","flow":1,"info":1,"presc":0,"caso":0,"kw":"Reanimação Neonatal em Sala de Parto (PRN-SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-reanima-avancada":{"m":"ped-reanima","h1":"Intubação Traqueal, Massagem Cardíaca 3:1 & Medicações","sub":"Técnica dos Dois Polegares, Doses Precisas de Adrenalina & Expansão Volêmica (SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"Intubação Orotraqueal (IOT) no Recém-Nascido • Indicações Formais de IOT: • Peso ao Nascer • Idade Gestacional • Diâmetro Interno da Cânula • Fixação no Lábio Superior • 2,5 mm • 3,0 mm • 3,5 mm • 3,5 a 4,0 mm • Massagem Cardíaca Coordenada (Relação 3:1) • Indicação: • Técnica dos Dois Polegares: • 1/3 do diâmetro anteroposterior • Relação Massagem : Ventilação = 3 : 1: • Oxigênio durante a Massagem: • FiO2 para 100% • Farmacoterapia & Expansão Volêmica em Sala de Parto • 1. ADRENALINA (Epinefrina) — Dose Pediátrica Oficial SBP 2024 • Diluição Padrão: • Via Intravenosa / Intraóssea (PREFERENCIAL): • 0,02 mg/kg • 0,2 mL/kg"},"ped-reanima-cuidados-pos":{"m":"ped-reanima","h1":"Cuidados Pós-Reanimação & Hipotermia Terapêutica","sub":"Estabilização Pós-PCR, Diagnóstico de Asfixia Perinatal & Neuroproteção (SBP 2024)","flow":0,"info":0,"presc":0,"caso":0,"kw":"Protocolo de Hipotermia Terapêutica na Encefalopatia Hipóxico-Isquêmica (EHI) • única intervenção comprovada que reduz mortalidade e sequelas neurológicas graves (paralisia cerebral) • Critérios de Elegibilidade (SBP 2024): • Idade gestacional ≥ 35 semanas e peso ao nascer ≥ 1.800 g. • Idade pós-natal < 6 horas de vida • Evidência de asfixia perinatal: Apgar ≤ 5 no 10º minuto OU necessidade de VPP mantida por ≥ 10 min OU acidose grave no sangue d... • Evidência de encefalopatia moderada ou grave (Escala de Sarnat: letargia/coma, tônus diminuído, reflexos primitivos anormais, c... • Execução do Protocolo: • 33,5°C a 34,5°C • 72 horas"},"ped-reanima-caso":{"m":"ped-reanima","h1":"Caso Clínico Simulado: Depressão Perinatal Grave em Sala de Parto","sub":"Simulação Interativa de Tomada de Decisão Baseada nas Diretrizes da SBP 2024","flow":0,"info":0,"presc":0,"caso":1,"kw":"História & Apresentação Clínica • Avaliação Imediata nos primeiros 5 segundos: • Conduta Inicial: • Reavaliação aos 30 segundos de vida: • DIAGNÓSTICO & CONDUTA PASSO A PASSO (DIRETRIZES SBP 2024): • 1. Diagnóstico Clínico Imediato: • 2. Conduta Imediata no Minuto de Ouro: • Iniciar Ventilação com Pressão Positiva (VPP) Imediata: • iniciar em Ar Ambiente (FiO2 21%) • 3. Reavaliação após 30 segundos de VPP com máscara: • FC persistente a 48 bpm • Passo Seguinte Obrigatório: • Intubação Orotraqueal (IOT) • Massagem Cardíaca Externa • 3 compressões para 1 ventilação (3:1) • FiO2 para 100%"},"ped-reumato-aij-definicao":{"m":"ped-reumato-aij","h1":"Artrite na Infância: Visão Geral, Diagnóstico Diferencial & Fisiopatologia","sub":"A abordagem semiológica metódica da dor e edema articular na infância e a diferenciação entre causas infecciosas, reativas e crônicas.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição Semiológica de Artrite Segundo a SBP 2024 • Artrite • edema articular verdadeiro • limitação do arco de movimento com dor/sensibilidade à movimentação articular ou calor local • Artralgia • Tempo de Evolução: • Número de Articulações: • Padrão Evolutivo: • Diagnóstico Diferencial de Emergência: A Exclusão da Artrite Séptica • Regra de Ouro da Emergência Reumato-Ortopédica: • monoartrite aguda com febre alta e impotência funcional completa • ARTRITE SÉPTICA BACTERIANA • Fluxograma e Infográfico de Febre Reumática & Artrite (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-reumato-aij-jones-criterios":{"m":"ped-reumato-aij","h1":"Febre Reumática Aguda: Critérios de Jones Revisados (AHA / SBP 2024)","sub":"Evidência obrigatória de estreptococcia prévia, critérios maiores para populações de moderado/alto risco e o papel da Coreia de Sydenham.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Fisiopatologia & Mimetismo Molecular • Febre Reumática (FR) • 1 a 5 semanas (média de 2 a 3 semanas) • Critérios de Jones para Populações de Risco Moderado a Alto (Brasil - SBP 2024) • Requisito Obrigatório: • Antiestreptolisina O (ASLO) • Coreia de Sydenham • Cardite Reumática Insidiosa • Fórmula Diagnóstica: • 2 Critérios Maiores OU 1 Maior + 2 Menores • Critérios Maiores (Jones Revisados) • Critérios Menores • 1. Cardite (50-60%): • Subclínica detectada exclusivamente no Ecocardiograma Doppler • 1. Febre: • 2. Artrite: • Poliartrite migratória OU Mono/Oligoartrite • 2. Artralgia: • 3. Coreia de Sydenham (15%): • Suficiente por si só para diagnóstico definitivo"},"ped-reumato-aij-fr-tratamento":{"m":"ped-reumato-aij","h1":"Tratamento da Crise Aguda e Profilaxia Secundária da Febre Reumática","sub":"Erradicação com Penicilina Benzatina, manejo da cardite/artrite e o calendário rigoroso de profilaxia a cada 21 dias.","flow":0,"info":0,"presc":1,"caso":0,"kw":"1. Erradicação do Foco Estreptocócico (Fase Aguda) • Penicilina G Benzatina Intramuscular (IM) em DOSE ÚNICA: • < 27 kg: • 600.000 UI IM profunda • ≥ 27 kg e adolescentes: • 1.200.000 UI IM profunda • 2. Tratamento Anti-inflamatório Sintomático • Artrite Isolada: • Ácido Acetilsalicílico (AAS) na dose de 80 a 100 mg/kg/dia VO dividida a cada 6 horas • Cardite Reumática Moderada a Grave: • PREDNISONA na dose de 1 a 2 mg/kg/dia VO • Coreia de Sydenham: • 3. Profilaxia Secundária Obrigatória (Prevenção de Novos Surtos) • Categoria Clínica • Duração da Profilaxia Secundária (SBP 2024) • 21 anos de idade • 5 anos após o último surto • 25 anos de idade"},"ped-reumato-aij-subtipos":{"m":"ped-reumato-aij","h1":"Artrite Idiopática Juvenil (AIJ): Classificação nos Subtipos Clínicos da ILAR","sub":"Oligoarticular, Poliarticular (FR positivo vs negativo), Sistêmica e outras formas da infância.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Definição Operacional da ILAR (SBP 2024) • Artrite Idiopática Juvenil (AIJ) • no mínimo 6 semanas contínuas • idade menor que 16 anos • Os Três Principais Subtipos Clínicos da AIJ • 1. AIJ Oligoarticular (50% a 60% dos casos - mais comum): • até 4 articulações • meninas pré-escolares (2 a 4 anos) • Fator Antinuclear (FAN) Positivo em 70% a 80%: • ALTÍSSIMO RISCO DE UVEÍTE ANTERIOR CRÔNICA ASSINTOMÁTICA • 2. AIJ Poliarticular (20% a 25% dos casos): • 5 ou mais articulações • 3. AIJ Sistêmica / Doença de Still (10% a 15% dos casos): • Febre diária alta em agulhas (picos ≥ 39°C) por pelo menos 2 semanas • Exantema macular róseo-salmão evanescente"},"ped-reumato-aij-fluxograma":{"m":"ped-reumato-aij","h1":"Fluxograma Decisório Articular: Febre Reumática vs AIJ vs Artrite Séptica","sub":"Algoritmo diferencial integrado: padrão da artrite, temporalidade, exames imunológicos e rastreamento de uveíte.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma e Infográfico de Febre Reumática & Artrite (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-reumato-aij-uveite":{"m":"ped-reumato-aij","h1":"Uveíte Anterior Crônica na AIJ: O Perigo Silencioso & Triagem Oftalmológica","sub":"Por que o olho não fica vermelho nem dói, indicação formal de exame na lâmpada de fenda e calendário de triagem.","flow":0,"info":0,"presc":0,"caso":0,"kw":"A Uveíte Silenciosa: Maior Causa de Cegueira Adquirida na AIJ • Uveíte Anterior Crônica não granulomatosa • COMPLETAMENTE ASSINTOMÁTICA (\"olho branco, indolor e sem queixas visuais precoces\") • sinéquias posteriores com deformidade pupilar, catarata precoce, glaucoma secundário e ceratopatia em faixa • Calendário Mandatório de Rastreio com Lâmpada de Fenda (SBP 2024) • Grupo de Risco • Características Clínicas e Laboratoriais • Frequência de Exame na Lâmpada de Fenda • FAN POSITIVO • A cada 3 MESES • Tratamento da Uveíte: • Metotrexato e Adalimumabe"},"ped-reumato-aij-tratamento-dmard":{"m":"ped-reumato-aij","h1":"Escalonamento Farmacológico na AIJ: AINEs, Infiltração, MTX & Biológicos","sub":"Drogas modificadoras do curso da doença (DMARDs sintéticos e biológicos) e controle da atividade inflamatória.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Linhas de Tratamento Escalonado (SBP 2024) • 1ª Linha (Alívio Sintomático Inicial): • Anti-inflamatórios Não Esteroidais (AINEs): • Naproxeno (15 a 20 mg/kg/dia VO a cada 12h) • Infiltração Intra-articular com Corticoide: • Oligoarticular • Hexacetonida de Triancinolona • 2ª Linha (DMARD Sintético de Primeira Escolha): • METOTREXATO (MTX): • Dose Pediátrica: • 10 a 15 mg/m²/semana por via subcutânea (SC) ou oral (VO) em tomada ÚNICA semanal • 3ª Linha (Imunobiológicos - DMARDs Biológicos): • Inibidores de TNF-\\(\u0007lpha\\): • Adalimumabe • Etanercepte • Inibidores de IL-6 e IL-1: • Tocilizumabe • Anacinra • Sistêmico (Still)"},"ped-reumato-aij-caso":{"m":"ped-reumato-aij","h1":"Caso Clínico Interativo: Escolar com Poliartrite Migratória, Sopro Cardíaco e ASLO Elevada","sub":"Aplicação dos Critérios de Jones Revisados e conduta de erradicação/profilaxia segundo a SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • sopro holossistólico 3+/6+ com regurgitação mitral audível no ápice com irradiação para a axila esquerda • VHS = 68 mm/h (muito elevada), PCR sérica = 48 mg/L (normal < 3,0), e Antiestreptolisina O (ASLO) = 960 UI/mL (valor de referên... • Desafio Terapêutico & Tomada de Decisão: • Febre Reumática do Tratado de Pediatria SBP 2024 • Quais critérios de Jones revisados estão presentes nesta paciente? O diagnóstico de Febre Reumática Aguda está confirmado? • Qual a conduta para erradicação do estreptococo na orofaringe (fármaco, dose e via)? • Qual o medicamento anti-inflamatório de escolha para o manejo da cardite moderada associada à artrite?"},"ped-reumato-vasc-definicao":{"m":"ped-reumato-vasc","h1":"Vasculites Sistêmicas na Infância: Visão Geral, Classificação por Calibre & Fisiopatologia","sub":"Processos inflamatórios parietais vasculares, classificação de Chapel Hill pediátrica e a relevância epidemiológica da Púrpura por IgA e Kawasaki.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Epidemiologia Segundo o Tratado de Pediatria SBP 2024 • Vasculites Sistêmicas • mais de 90% de todas as vasculites diagnosticadas • Púrpura de Henoch-Schönlein (Vasculite por IgA): • pequenos vasos (vênulas e capilares) • Doença de Kawasaki: • médios vasos • artérias coronárias • Classificação Pediátrica pelo Calibre Vascular Predominante • Calibre Vascular • Entidades Principais • Vasos Acometidos & Complicações Típicas • Fluxograma de Investigação das Vasculites Sistêmicas Pediátricas (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-reumato-vasc-henoch-clinica":{"m":"ped-reumato-vasc","h1":"Púrpura de Henoch-Schönlein (Vasculite por IgA): A Tétrade Clínica Clássica","sub":"Critérios da EULAR/PRINTO/PRES: púrpura palpável não trombocitopênica, artrite, dor abdominal e nefropatia.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critério Obrigatório & Acometimentos Orgânicos (SBP 2024) • Critério Diagnóstico Obrigatório: • Púrpura Palpável (ou Petéquias agrupadas) • membros inferiores e nádegas • NÃO TROMBOCITOPÊNICA • pelo menos 1 dos seguintes 4 achados clínicos: • 1. Artrite ou Artralgia Aguda (60% a 80%): • 2. Dor Abdominal Aguda em Cólica (50% a 75%): • Invaginação Intestinal (Intussuscepção) • 3. Acometimento Renal / Nefrite por IgA (20% a 50%): • 4. Histopatologia Vascular Típica:"},"ped-reumato-vasc-henoch-manejo":{"m":"ped-reumato-vasc","h1":"Manejo Clínico de Henoch-Schönlein: Indicações de Corticoide & Seguimento da Nefrite","sub":"Terapêutica analgésica de suporte, indicações restritas de corticoides e o protocolo de rastreamento renal por 6 a 12 meses.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Abordagem Terapêutica Baseada em Evidências (SBP 2024) • Curso Autolimitado: • Analgesia: • Indicações Precisas de Corticoterapia Sistêmica (Prednisolona 1 a 2 mg/kg/dia VO por 1 a 2 semanas): • Alerta Crucial de Nefrologia: • NÃO PREVINE o surgimento nem a evolução da nefropatia por IgA • Protocolo de Rastreamento Renal Ambulatorial Obrigatório • Aferição de Pressão Arterial e Exame de Urina tipo 1 (EAS / fita reagente) • 6 a 12 meses de seguimento • Se proteinúria na fita reagente: Coletar relação proteína/creatinina em amostra isolada de urina (normal < 0,2 mg/mg)."},"ped-reumato-vasc-kawasaki-criterios":{"m":"ped-reumato-vasc","h1":"Doença de Kawasaki: Critérios Diagnósticos Clássicos & Fases Evolutivas","sub":"Diretrizes da American Heart Association (AHA) e SBP 2024: febre ≥ 5 dias e os cinco sinais cardinais clínicos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Critérios Diagnósticos Oficiais de Kawasaki Clássico (SBP 2024) • Critério Clínico Obrigatório: • FEBRE ALTA PERSISTENTE POR ≥ 5 DIAS • pelo menos 4 dos seguintes 5 critérios clínicos: • Critério Clínico • Manifestações Semiológicas Típicas • Frequência Relatada • Não exsudativa • língua em framboesa • Descamação periungueal laminar em dedos • unilateral, diâmetro ≥ 1,5 cm"},"ped-reumato-vasc-fluxograma":{"m":"ped-reumato-vasc","h1":"Fluxograma Decisório das Vasculites Pediátricas","sub":"Algoritmo integrado SBP: diferenciação entre vasculite por IgA (Henoch-Schönlein) e Doença de Kawasaki com protocolo de IVIG.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma de Investigação das Vasculites Sistêmicas Pediátricas (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-reumato-vasc-kawasaki-tratamento":{"m":"ped-reumato-vasc","h1":"Tratamento de Emergência na Doença de Kawasaki: A Janela dos Primeiros 10 Dias","sub":"A infusão salvadora de Imunoglobulina Humana Endovenosa (IVIG), doses anti-inflamatória e antiplaquetária do AAS e manejo refratário.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Por que o Tratamento Deve Ocorrer Idealmente nos Primeiros 10 Dias? • aneurismas de artérias coronárias • 20% a 25% • menos de 3% a 5% • Protocolo Farmacológico Padrão-Ouro (AHA / SBP 2024) • 1. IMUNOGLOBULINA HUMANA ENDOVENOSA (IVIG): • Dose Pediátrica: • 2 g/kg por via intravenosa em DOSE ÚNICA • 10 a 12 horas • 2. ÁCIDO ACETILSALICÍLICO (AAS) - Abordagem Bifásica: • 30 a 50 mg/kg/dia VO dividida a cada 6 horas • 3 a 5 mg/kg/dia VO em dose única diária • 6 a 8 semanas • Doença de Kawasaki Refratária (10% a 15% dos casos): • Segunda dose de IVIG (2 g/kg)"},"ped-reumato-vasc-kawasaki-incompleto":{"m":"ped-reumato-vasc","h1":"Kawasaki Incompleto (Atípico) & Monitoramento Ecocardiográfico dos Aneurismas","sub":"O perigo silencioso no lactente menor de 6 meses, algoritmo laboratorial complementar e classificação dos aneurismas por Escore Z.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Kawasaki Incompleto: O Desafio Máximo nos Menores de 6 Meses • NÃO preenchem os 4 critérios clássicos • MAIOR RISCO de desenvolverem aneurismas coronarianos gigantes • Algoritmo de Kawasaki Incompleto (SBP 2024 / AHA): • febre por ≥ 5 dias associada a apenas 2 ou 3 critérios clássicos • PCR sérica e VHS • PCR ≥ 3,0 mg/dL ou VHS ≥ 40 mm/h • TRATAR IMEDIATAMENTE COM IVIG E AAS • Monitoramento Ecocardiográfico & Escore Z Coronariano • Ecocardiograma Transtorácico • 1. No momento da suspeita diagnóstica / admissão (não atrasar a IVIG caso o eco inicial seja normal!). • 2. Entre 2 e 3 semanas após o início dos sintomas. • 3. Entre 6 e 8 semanas após a alta hospitalar."},"ped-reumato-vasc-caso":{"m":"ped-reumato-vasc","h1":"Caso Clínico Interativo: Lactente com Febre Prolongada, Olhos Vermelhos e Edema de Extremidades","sub":"Diagnóstico tempestivo de Doença de Kawasaki e indicação precisa de IVIG antes do 10º dia.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Desafio Terapêutico & Tomada de Decisão: • Tratado de Pediatria da SBP (6ª Edição, 2024) / Diretrizes AHA • Qual o diagnóstico nosológico definitivo desta paciente? Ela preenche os critérios para a forma clássica ou incompleta? • Qual a principal complicação cardiovascular a ser temida caso o tratamento não seja instituído oportunamente? • Qual a prescrição medicamentosa de emergência (fármaco de escolha, dose exata e via de administração)? • Qual exame de imagem complementar é obrigatório e qual o calendário de monitoramento cardiológico? • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Diagnóstico Clínico Definitivo:"},"ped-seguranca-definicao":{"m":"ped-seguranca","h1":"Epidemiologia dos Traumas Não Intencionais na Infância","sub":"Por que os acidentes não são \"obra do acaso\", principal causa de óbito de 1 a 14 anos e a cultura preventiva da SBP.","flow":0,"info":1,"presc":0,"caso":0,"kw":"A Epidemia Oculta dos Traumas Não Intencionais (Tratado SBP 2024) • Tratado de Pediatria SBP 2024 • principal causa de mortalidade em crianças e adolescentes entre 1 e 14 anos de idade no Brasil • O Conceito de \"Trauma Prevenível\": • A SBP rejeita terminantemente a palavra \"acidente\" entendida como fatalidade inevitável: mais de 90% dos traumas na infância sã... • Principais Causas de Morte por Faixa Etária: • Menores de 1 Ano: Sufocação / Asfixia mecânica • 1 a 4 Anos: Afogamento • 5 a 14 Anos: Acidentes de trânsito • Fluxograma Oficial de Prevenção & Conduta em Acidentes Infantis (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-seguranca-domiciliar":{"m":"ped-seguranca","h1":"Segurança Domiciliar por Faixa Etária & Prevenção de Quedas","sub":"Normas de adequação do ambiente doméstico da puericultura do lactente ao escolar.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Medidas Protetivas no Domicílio por Estágio de Desenvolvimento • Faixa Etária • Marcos Motores Predisponentes • Principais Riscos Domiciliares • Medidas Preventivas Mandatórias (SBP 2024) • 0 a 6 Meses • 6 a 12 Meses • 1 a 4 Anos"},"ped-seguranca-transito":{"m":"ped-seguranca","h1":"Dispositivos de Retenção Veicular: Lei 14.071/2021 & SBP","sub":"As 4 fases obrigatórias de transporte de crianças em veículos automotores e os critérios de peso e estatura.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Matriz Obrigatória dos Dispositivos de Retenção (CONTRAN / SBP 2024) • Dispositivo • Idade, Peso & Estatura Regulamentar • Posicionamento no Veículo • Justificativa Biomecânica • 1. Bebê-Conforto • 1 ano de idade • Banco traseiro, VOLTADO PARA TRÁS • 2. Cadeirinha (Cadeirinha de Segurança) • 1 a 4 anos de idade • voltada para a frente • 3. Assento de Elevação (Booster) • 4 a 10 anos de idade • 4. Banco Traseiro com Cinto de 3 Pontos • 10 anos de idade OU atingiram estatura > 1,45 m • Transporte no Banco Dianteiro • 10 anos completos de idade • Do nascimento até 1 ano de idade OU até atingir o limite de peso do fabricante (~13 kg)."},"ped-seguranca-afogamento":{"m":"ped-seguranca","h1":"Prevenção do Afogamento Pediátrico: A Regra do Toque da SBP","sub":"Diretrizes da SBP e Sobrasa para piscinas, banheiras e baldes; a ilusão do afogamento barulhento e coletes homologados.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Mitos e Fisiopatologia do Afogamento Infantil • O Afogamento na Infância É SILENCIOSO: • não grita, não debate os braços e não pede socorro • Apenas 2,5 cm de coluna d'água • Os 4 Mandamentos de Segurança Aquática da SBP • Supervisão a Distância de um Braço (\"Regra do Toque\"): • Cercas de Isolamento em Piscinas: • 1,5 metro e portões com travas automáticas • Boias de Braço e Infláveis Não Salvam Vidas: • Colete Salva-Vidas • Drenos Antiaprisionamento:"},"ped-seguranca-fluxograma":{"m":"ped-seguranca","h1":"Fluxograma Oficial de Prevenção & Conduta em Acidentes Infantis","sub":"Árvore decisória de prevenção primária e abordagem de urgência em asfixia, queimaduras e retenção veicular da SBP (2024).","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma Oficial de Prevenção & Conduta em Acidentes Infantis (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-seguranca-queimaduras":{"m":"ped-seguranca","h1":"Queimaduras, Intoxicações Agudas & Cáusticos","sub":"Primeiros socorros corretos, o perigo das embalagens reaproveitadas de refrigerante e o contato imediato com o CIATox.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Primeiros Socorros em Queimaduras Pediátricas (Tratado SBP 2024) • RESFRIAMENTO IMEDIATO COM ÁGUA CORRENTE: Colocar a área queimada sob água fria corrente de torneira por 15 a 20 minutos • O QUE NUNCA FAZER: Nunca aplicar gelo • Cobrir a lesão com plástico filme limpo ou pano úmido esterilizado e levar imediatamente ao serviço de emergência. • Intoxicações Exógenas Domiciliares (CIATox: 0800 722 6001) • Condutas Emergenciais em Ingestão Acidental: • Substâncias Cáusticas (Soda cáustica, água sanitária, desentupidores): • Baterias de Botão (Baterias de Lítio):"},"ped-seguranca-sufocacao":{"m":"ped-seguranca","h1":"Aspiração de Corpo Estranho & Manobra de Desobstrução","sub":"Técnica detalhada de desobstrução de via aérea no lactente (< 1 ano) e na criança maior segundo a SBP e o PALS.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Manejo do Engasgo / Obstrução de Via Aérea por Corpo Estranho (OVACE) • Idade do Paciente • Estado de Consciência • Técnica Sequencial Obrigatória (SBP / PALS) • Lactente (< 1 ano) • CONSCIENTE • decúbito ventral apoiado no antebraço • 5 GOLPES INTERESCAPULARES • 5 COMPRESSÕES TORÁCICAS • Criança ≥ 1 ano • Manobra de Heimlich: • Qualquer Idade • INCONSCIENTE • Ressuscitação Cardiopulmonar (RCP)"},"ped-seguranca-caso":{"m":"ped-seguranca","h1":"Caso Clínico Simulado: Puericultura dos 9 Meses & Prevenção de Traumas","sub":"Consulta de vigilância antecipatória, desmistificação do andador infantil e transporte veicular segundo a SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Exame Físico e Antropometria: • Peso: • Comprimento: • Desenvolvimento Motor: • Exame Geral: • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Identificação dos 3 Erros Críticos de Segurança: • USO DE ANDADOR INFANTIL COM RODINHAS: É formalmente contraindicado e condenado pela SBP. O andador confere velocidade excessiva... • VIRAR O DISPOSITIVO VEICULAR PARA A FRENTE ANTES DO TEMPO: O lactente tem 9 meses e 9,2 kg. O Código de Trânsito Brasileiro e a... • USO DE BOIAS DE BRAÇO EM PISCINA SEM SUPERVISÃO RIGOROSA: Boias infláveis não são dispositivos de salvamento, podem murchar ou ..."},"ped-sifilis-cong-definicao":{"m":"ped-sifilis-cong","h1":"Sífilis Gestacional & Sífilis Congênita","sub":"Epidemiologia nacional, vigilância da transmissão vertical do Treponema pallidum e critérios do Ministério da Saúde e SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"Definição & Magnitude Epidemiológica • Critérios Oficiais de Tratamento Materno Adequado (SBP 2024 / MS) • Critério Avaliado • Exigência para Tratamento Adequado • Implicação Pediátrica se Descumprido • Fármaco Utilizado • Penicilina Benzatina • Tempo até o Parto • 30 dias antes do parto • Intervalo das Doses • Queda Sorológica • Algoritmo Oficial de Abordagem do Recém-Nascido Exposto (SBP 2024 / MS) • Abrir em Tela Cheia • Infográfico HD"},"ped-sifilis-cong-transmissao":{"m":"ped-sifilis-cong","h1":"Transmissão Vertical & Fisiopatologia da Sífilis Congênita","sub":"Mecanismos de invasão transplacentária, resposta inflamatória fetal e vasculite obliterante.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Dinâmica da Transmissão Fetal • 70% a 100% na sífilis primária e secundária • Patogênese Fetal e Lesão Tecidual • Placentite Treponêmica: • Hepatoesplenomegalia e Disfunção Medular: • Comprometimento Osteocondral: • Neurossífilis Congênita:"},"ped-sifilis-cong-clinica":{"m":"ped-sifilis-cong","h1":"Manifestações Clínicas: Sífilis Precoce vs Tardia","sub":"Diferenciação cronológica essencial, estigmas osteoarticulares, mucocutâneos e neurológicos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Sífilis Congênita Precoce (Manifestações nos Primeiros 2 Anos de Vida) • 60% a 70% dos recém-nascidos infectados são totalmente assintomáticos ao nascimento • Sistema • Achados Clínicos Típicos • Mucocutâneo • Pênfigo palmoplantar: • Rinite sifilítica: • Osteoarticular • Pseudoparalisia de Parrot: • Hematológico / Hepático • Renal / Pulmonar • Sífilis Congênita Tardia (Surge Após os 2 Anos de Idade) • Tríade de Hutchinson: • Estigmas Ósseos: • Lesões Cutâneas e Faciais: • Sistema Nervoso Central:"},"ped-sifilis-cong-diagnostico":{"m":"ped-sifilis-cong","h1":"Diagnóstico Sorológico, Liquórico & Radiológico","sub":"Interpretação do VDRL no sangue periférico, parâmetros liquóricos de neurossífilis e radiologia de ossos longos.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Interpretação dos Testes Não-Treponêmicos (VDRL / RPR) • Regra Sorológica de Ouro (SBP 2024): • maior que o VDRL materno em pelo menos duas diluições • Investigação Complementar Obrigatória • Punção Lombar com Análise do LCR: • Radiografia de Ossos Longos (membros superiores e inferiores): • Hemograma Completo e Plaquetometria: • Função Hepática e Renal:"},"ped-sifilis-cong-fluxograma":{"m":"ped-sifilis-cong","h1":"Fluxograma Decisório: Sífilis Congênita","sub":"Algoritmo clínico-laboratorial estruturado segundo o Tratado de Pediatria SBP 2024.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo Oficial de Abordagem do Recém-Nascido Exposto (SBP 2024 / MS) • Abrir em Tela Cheia • Infográfico HD"},"ped-sifilis-cong-tratamento":{"m":"ped-sifilis-cong","h1":"Tratamento Farmacológico com Posologia Rigorosa","sub":"Esquemas terapêuticos com Penicilina Cristalina, Procaína e Benzatina conforme estadiamento clínico.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Protocolo de Antibioticoterapia Neonatal (SBP 2024 / MS) • Esquema 1: Neurossífilis Presente ou Líquor Não Avaliado / Inconclusivo • Penicilina Cristalina (G Potássica) Intravenosa: • Dose: 50.000 UI/kg por dose IV • Nos primeiros 7 dias de vida: a cada 12 horas • Após o 7º dia de vida: a cada 8 horas • Duração total: 10 dias completos ininterruptos • Esquema 2: Sífilis Congênita sem Alteração Liquórica (LCR Rigorosamente Normal) • Penicilina G Procaína Intramuscular: • Dose: 50.000 UI/kg em dose única diária IM • 10 dias consecutivos • Alternativa válida: Penicilina Cristalina IV nas doses do Esquema 1 por 10 dias."},"ped-sifilis-cong-seguimento":{"m":"ped-sifilis-cong","h1":"Seguimento Ambulatorial & Critérios de Cura","sub":"Calendário de testes não-treponêmicos, controle liquórico e critérios para retratamento.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Calendário de Monitoramento Sorológico • 1 mês de vida: • 3 meses de vida: • 6 meses de vida: • não reagente • 12 e 18 meses de vida: • Critérios Mandatórios de Retratamento (SBP 2024) • Indicações de Reinvestigação Completa e Retratamento com Penicilina Cristalina (10 dias):"},"ped-sifilis-cong-caso":{"m":"ped-sifilis-cong","h1":"Caso Clínico: Sífilis Congênita","sub":"Simulação interativa com tomada de decisão médica imediata baseada nas diretrizes SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"História Clínica & Exame Físico • Pergunta Clínica: • Discussão Clínica & Gabarito Oficial (SBP 2024): • 1. Classificação do Tratamento Materno: INADEQUADO. • 2. Conduta Imediata para o Recém-Nascido: • Punção lombar para análise do LCR (citologia, bioquímica e VDRL); • Radiografia de ossos longos (pesquisa de osteocondrite / periostite); • Hemograma completo e plaquetas; • Início de Penicilina Cristalina IV 50.000 UI/kg/dose 12/12h por 10 dias se líquor alterado ou Penicilina Procaína IM 50.000 UI/..."},"ped-tuberculose-definicao":{"m":"ped-tuberculose","h1":"Tuberculose na Infância: Visão Geral, Epidemiologia & Fisiopatologia","sub":"Particularidades da infecção paucibacilar pediátrica, criança como sentinela de transmissão e espectro das formas clínicas.","flow":0,"info":1,"presc":0,"caso":0,"kw":"A Criança como Sentinela Epidemiológica e o Desafio Paucibacilar (SBP / MS 2024) • 10% a 15% de todos os casos de TB • sentinela epidemiológica • Característica • Tuberculose Pediátrica (< 10 anos) • Tuberculose do Adolescente e Adulto (> 10-12 anos) • Carga Bacilar • Paucibacilar • Multibacilar • Transmissibilidade • Não transmissível • Altamente transmissível • Forma Anatômica Predominante • TB Primária: • TB Pós-Primária (Reativação): • Bacterioscopia de Escarro • Diagnóstico Base • Clínico-Radiológico-Epidemiológico • Microbiológico / Molecular • Fisiopatologia: Da Inalação ao Complexo Primário de Ranke • Nódulo Primário de Ghon: • Disseminação Linfática Local:"},"ped-tuberculose-semiologia":{"m":"ped-tuberculose","h1":"Semiologia Clínica & Investigação do Contato Domiciliar","sub":"Quadro clínico insidioso, tosse crônica arrastada, perda ponderal e a busca ativa do caso-índice adulto.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Sintomatologia Clínica da Tuberculose Pulmonar na Infância • insidiosa e progressiva • Sinal / Sintoma • Características Pediátricas Típicas • Relevância Semiomédica • Tosse Crônica e Persistente • ≥ 2 a 3 semanas • Febre Subfebril Vespertina • Comprometimento Nutricional • Sudorese Noturna & Astenia • Sibilos Localizados Unilaterais • compressão extrínseca da árvore brônquica • Investigação Ativa do Caso-Índice e Contato Domiciliar • Interrogatório Rigoroso sobre Tossidores Crônicos: • 2 anos • O Caso-Índice: • Busca Reversa: • TODOS os contactantes domiciliares"},"ped-tuberculose-escore":{"m":"ped-tuberculose","h1":"Sistema de Pontuação para Diagnóstico de TB Pulmonar","sub":"Escore validado nacionalmente para diagnóstico de tuberculose pulmonar em crianças paucibacilares sem confirmação bacteriológica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela Oficial do Sistema de Pontuação (MS / SBP 2024) • Critério Avaliado • Situação Clínica / Achados • Pontuação • 1. Quadro Clínico-Radiológico • 2. História Epidemiológica (Contato) • 3. Teste Tuberculínico (PPD ou IGRA) • ≥ 5 mm • 4. Estado Nutricional • 5. Resposta à Antibioticoterapia Prévia • Interpretação e Conduta Conforme o Escore Total (SBP 2024) • ≥ 40 PONTOS • Conduta Imediata: • 30 A 35 PONTOS • Conduta: • < 30 PONTOS"},"ped-tuberculose-propedeutica":{"m":"ped-tuberculose","h1":"Propedêutica Complementar: PPD, IGRA, Imagem & Microbiologia","sub":"Técnica de Mantoux, exames imunológicos, padrões radiológicos pediátricos e o papel do lavado gástrico e TRM-TB.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Testes Imunológicos: Prova Tuberculínica (PPD) vs IGRA • Aspecto • Prova Tuberculínica (PPD / Método de Mantoux) • IGRA (Interferon-Gamma Release Assays) • Técnica • Leitura • 48 a 72 horas • maior diâmetro transversal da enduração palpável • Ponto de Corte Brasil • ≥ 5 mm = REATOR • Interferência da BCG • SIM: • NÃO: • Falso-Negativos (Anergia) • Padrões Radiológicos de Tórax & Tomografia Computadorizada (SBP 2024) • Póstero-Anterior (PA) e PERFIL • Linfonodomegalia Hilar e/ou Paratraqueal: • Condensação Parenquimatosa de Evolução Arrastada: • Padrão Miliar: • Derrame Pleural: • Tomografia Computadorizada de Tórax com Contraste:"},"ped-tuberculose-fluxograma":{"m":"ped-tuberculose","h1":"Fluxograma do Escore & Abordagem da TB Pediátrica","sub":"Algoritmo decisório de estratificação, indicação de tratamento empírico e manejo de contatos assintomáticos.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Algoritmo de Diagnóstico e Conduta na Tuberculose na Infância (MS / SBP 2024) • Abrir em Tela Cheia • Infográfico HD • Passo a Passo da Aplicação Prática à Beira do Leito • Triagem de Sintomas e Duração: • +15 pontos • Investigação Imediata de Contato: • +10 pontos • Aplicação da Prova Tuberculínica (PPD): • Checagem do Peso: • +5 pontos • Totalização: • ≥ 40 pontos"},"ped-tuberculose-tratamento":{"m":"ped-tuberculose","h1":"Tratamento Farmacológico da Tuberculose Pediátrica","sub":"Esquemas RHZ e RHZE, doses diárias em mg/kg, formulações dispersíveis e protocolo para neurotuberculose.","flow":0,"info":0,"presc":1,"caso":0,"kw":"Esquema Padrão para Menores de 10 Anos: Esquema RHZ (SBP / MS 2024) • inferior a 10 anos • 6 meses com 3 drogas: RHZ • Fase do Tratamento • Drogas & Duração • Fármaco • Dose Pediátrica Diária (mg/kg/dia) • Dose Máxima Diária • Fase de Ataque • 2 RHZ • Rifampicina (R) • 15 mg/kg/dia • Isoniazida (H) • 10 mg/kg/dia • Pirazinamida (Z) • 35 mg/kg/dia • Fase de Manutenção • 4 RH • Por que o Etambutol NÃO é prescrito de rotina em menores de 10 anos? • neurite óptica retrobulbar dose-dependente • Esquema para Crianças ≥ 10 Anos e Adolescentes: 2 RHZE / 4 RH • Dose Fixa Combinada (DFC) 4 em 1 • 2 Meses de RHZE: • 4 Meses de RH:"},"ped-tuberculose-quimioprofilaxia":{"m":"ped-tuberculose","h1":"Infecção Latente por TB (ILTB) & Recém-Nascido Exposto","sub":"Protocolo de quimioprofilaxia primária e secundária, novos esquemas com rifampicina e conduta no binômio mãe-filho.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Manejo da Criança Contactante Assintomática de Adulto Bacilífero • Etapa • Ação Propedêutica • Resultado Encontrado • Conduta Padronizada SBP / MS 2024 • Etapa 1 • TUBERCULOSE ATIVA • Etapa 2 • PPD ≥ 5 mm • INFECÇÃO LATENTE POR TB (ILTB) • PPD < 5 mm • REPETIR O PPD EM 8 A 12 SEMANAS • Tratamento da ILTB • Esquemas Terapêuticos para Tratamento da ILTB na Pediatria (SBP 2024) • 1ª Escolha Pediátrica Atual (Esquema 4R): • Rifampicina 15 mg/kg/dia (máx 600 mg/dia) por 4 MESES (120 doses diárias) • Esquema Tradicional Alternativo (6H ou 9H): • Esquema Semanal 3HP: • Recém-Nascido Exposto à Mãe com Tuberculose Bacilífera • Protocolo Crucial do Recém-Nascido (SBP 2024):"},"ped-tuberculose-caso":{"m":"ped-tuberculose","h1":"Caso Clínico: Tosse Persistente, Perda Ponderal e Contato Domiciliar","sub":"Aplicação prática do Sistema de Pontuação MS/SBP, interpretação propedêutica e prescrição do Esquema RHZ.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Identificação & História Clínica: • Histórico de Atendimentos: • História Epidemiológica Rigorosa: • Exame Físico e Nutricional: • Sinais Vitais: • Estado Geral & Nutrição: • 15,1 kg • perda involuntária comprovada de 2,2 kg = mais de 12% do peso corporal • Aparelho Respiratório: • Outros Sistemas: • Exames Complementares Trazidos pela Mãe: • Radiografia de Tórax (PA e Perfil): • linfonodomegalia hilar direita • Prova Tuberculínica (PPD): • 14 mm (Reator) • Desafio Clínico: • Resolução Estruturada Baseada no Tratado de Pediatria SBP 2024 • 1. Cálculo Detalhado do Sistema de Pontuação (MS / SBP 2024): • Critério Avaliado • Dados da Paciente • Pontos Atribuídos"},"ped-vitaminas-definicao":{"m":"ped-vitaminas","h1":"Micronutrientes & Vitaminas na Infância: Fome Oculta","sub":"O papel essencial dos oligoelementos no desenvolvimento neurocognitivo, imunidade e crescimento linear segundo o Tratado SBP 2024.","flow":0,"info":1,"presc":0,"caso":0,"kw":"O Conceito de \"Fome Oculta\" na Pediatria Contemporânea • fome oculta • Tratado de Pediatria SBP 2024 • Fluxograma de Suplementação nos Primeiros 1.000 Dias & Hipovitaminoses (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-vitaminas-ferro":{"m":"ped-vitaminas","h1":"Prevenção da Anemia Ferropriva: Diretriz Oficial SBP 2024","sub":"Esquemas profiláticos detalhados por peso ao nascer e idade gestacional; momento exato de introdução e descontinuação.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Tabela Oficial de Suplementação Profilática de Ferro (SBP 2024) • Grupo de Risco Neonatal • Início da Suplementação • Dose de Ferro Elementar • Duração Recomendada • RN a Termo com Peso ≥ 2.500 g • 3 MESES DE VIDA • 24 meses de vida • NÃO NECESSITA • Prematuro ou Baixo Peso: • 1.500 g a 2.499 g • 30 DIAS DE VIDA • 24 meses • Prematuro / Muito Baixo Peso: • 1.000 g a 1.499 g • Prematuro Extremo: • < 1.000 g • Tratamento da Anemia Ferropriva Confirmada • Dose Terapêutica: • 3 a 6 mg/kg/dia de ferro elementar • Avaliação de Eficácia Precoce: • Reticulócitos • Tempo Total de Tratamento: • 3 meses consecutivos APÓS a normalização dos níveis de Hemoglobina"},"ped-vitaminas-vit-d":{"m":"ped-vitaminas","h1":"Suplementação de Vitamina D & Prevenção do Raquitismo","sub":"Diretriz da Sociedade Brasileira de Pediatria para prevenção do raquitismo carencial e otimização imunológica.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Diretriz Oficial de Suplementação de Vitamina D (SBP 2024) • Posologia Profilática Universal: • Início Obrigatório: • primeira semana de vida • Do Nascimento até os 12 Meses: • Dos 12 aos 24 Meses (2º Ano de Vida): • Crianças em Fórmula Infantil: • Sinais Clínicos e Radiológicos do Raquitismo Carencial • Craniotabes: • Rosário Raquítico: • Sulco de Harrison: • Alargamento de Punhos e Tornozelos: • Deformidades dos Membros Inferiores: • Sinais Radiológicos (Rx Mão/Punho):"},"ped-vitaminas-vit-a":{"m":"ped-vitaminas","h1":"Vitamina A & Prevenção da Xeroftalmia (Programa Nacional)","sub":"Esquema de megadoses de Palmitato de Retinol nas regiões de risco e estadiamento clínico da xeroftalmia.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Programa Nacional de Suplementação de Vitamina A (MS / SBP) • Faixa Etária • Dosagem Farmacológica • Periodicidade • 6 a 11 meses de idade • 100.000 UI • 12 a 59 meses de idade • 200.000 UI • 6 meses • Estadiamento Clínico da Xeroftalmia (Classificação OMS) • XN (Hemeralopia / Cegueira Noturna): • X1A (Xerose Conjuntival): • X1B (Manchas de Bitot): • X2 (Xerose Corneana): • X3A / X3B (Ulceração Corneana e Ceratomalácia): • 100.000 UI (1 cápsula azul de palmitato de retinol VO). • Dose única no semestre. • 200.000 UI (1 cápsula vermelha de palmitato de retinol VO)."},"ped-vitaminas-fluxograma":{"m":"ped-vitaminas","h1":"Fluxograma Oficial de Profilaxia de Micronutrientes (SBP 2024)","sub":"Algoritmo de decisão rápida para prescrição de Ferro, Vitamina D, Vitamina A e Zinco no lactente e na criança.","flow":1,"info":1,"presc":0,"caso":0,"kw":"Fluxograma de Suplementação nos Primeiros 1.000 Dias & Hipovitaminoses (SBP 2024) • Abrir em Tela Cheia • Infográfico HD"},"ped-vitaminas-zinco":{"m":"ped-vitaminas","h1":"Zinco na Diarreia Aguda & Crescimento Infantil","sub":"Diretriz conjunta OMS/UNICEF/SBP para o uso profilático e terapêutico do sulfato de zinco na infância.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Papel do Zinco na Diarreia Aguda Pediátrica • Esquema Terapêutico Padronizado na Diarreia Aguda (OMS / SBP 2024): • Crianças < 6 meses de vida: • 10 a 14 dias consecutivos • Crianças ≥ 6 meses de vida: • Benefícios Clínicos Comprovados:"},"ped-vitaminas-outras":{"m":"ped-vitaminas","h1":"Outras Hipovitaminoses: Escorbuto, Complexo B & Cálcio","sub":"Manifestações clínicas raras, porém de alto valor para diagnóstico diferencial no consultório de puericultura.","flow":0,"info":0,"presc":0,"caso":0,"kw":"Quadro Clínico das Hipovitaminoses Clássicas • Vitamina / Mineral • Nome da Doença Carencial • Sinais Semiológicos Típicos • Tratamento de Escolha • Vitamina C (Ácido Ascórbico) • Escorbuto • Vitamina B1 (Tiamina) • Beribéri • Vitamina B3 (Niacina) • Pelagra • Tríade dos \"3 Ds\": • Ácido ascórbico 100 a 300 mg/dia VO por 1 mês + frutas cítricas. • Tiamina IV/IM 10 a 25 mg/dia seguida de dose oral. • Nicotinamida 50 a 100 mg/dia VO."},"ped-vitaminas-caso":{"m":"ped-vitaminas","h1":"Caso Clínico Simulado: Anemia Ferropriva & Falha de Profilaxia","sub":"Manejo diagnóstico, interpretação laboratorial e prescrição terapêutica correta conforme o Consenso SBP 2024.","flow":0,"info":0,"presc":0,"caso":1,"kw":"Cenário Clínico • Exame Físico & Dados Laboratoriais Trazidos: • Exame Físico: • Hemograma: • Hemoglobina = 7,8 g/dL • VCM = 64 fL • HCM = 20 pg • RDW = 18,5% • Cinética do Ferro: • Ferritina sérica = 5 ng/mL • Pergunta de Decisão Clínica: • Gabarito Comentado Oficial (SBP 2024): • 1. Diagnóstico Clínico Completo: • Anemia Ferropriva Grave • Geofagia/Picacismo • 2. Fisiopatologia da Falha: • O RN a termo esgota seus estoques fisiológicos de ferro transplacentário por volta dos 4 a 6 meses de vida. A ausência da profi... • A introdução de leite de vaca integral fluido antes de 1 ano • 3. Prescrição Terapêutica Escalonada (SBP 2024): • Sulfato Ferroso Terapêutico:"}};

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
      "title": "Infertilidade & Sequelas",
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

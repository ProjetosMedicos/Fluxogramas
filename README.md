# 🩺 Fluxomed | Portal de Algoritmos Decisórios & Infográficos Clínicos

Portal interativo e **Web App (PWA)** de alta performance para tomada de decisão clínica, propedêutica, semiologia, visualização de fluxogramas vetoriais e condutas médicas baseadas em evidências. Construído com arquitetura modular de carregamento dinâmico (*zero runtime dependencies*), cobrindo integralmente **86 módulos clínicos estruturados** distribuídos entre **Ginecologia & Obstetrícia** (38 módulos fundamentados no **Tratado de Ginecologia FEBRASGO - 2ª Edição**) e **Pediatria** (48 módulos fundamentados no **Tratado de Pediatria SBP 2024 - 6ª Edição**).

---

## 🌟 Principais Recursos & Engenharia do Portal

1. **Página Inicial Minimalista & Busca Instantânea:**
   - **Canvas centralizado e limpo:** Página inicial com foco imediato na consulta médica, sem ruído visual periférico e com adaptação ultra limpa para dispositivos móveis.
   - **Busca Global Profunda (856 itens indexados):** Localização em tempo real de patologias, fármacos, posologias, critérios e condutas com sugestões dinâmicas, navegação por teclado (`↑`, `↓`, `Enter`, `Esc`, `/`, `Ctrl+K`) e histórico de navegação.
   - **Diretório Clínico Categorizado:** Acesso direto aos 86 módulos organizados por especialidade (**Todos 86**, **Ginecologia 38**, **Pediatria 48**) e eixos temáticos.

2. **Visualização Dupla (Infográficos HD & Fluxogramas SVG):**
   - **174 Infográficos Clínicos em Alta Resolução:** Pôsteres verticais de síntese clínica com hierarquia visual editorial, tabelas posológicas e alertas visuais.
   - **176 Fluxogramas Vetoriais SVG:** Árvores de decisão clínica interativas e nítidas em qualquer ampliação.
   - **Alternador Visual 1-Clique (`HD ↔ SVG`):** Alternância fluida e sincronizada no topo de cada seção decisória.
   - **Visualizador Lightbox Nativo (`<dialog>`):** Zoom dinâmico (`+`, `−`, `0` ou `Ctrl + Scroll`), arraste panorâmico (*pan & drag*), download em alta resolução e tecla de atalho (`Esc`).

3. **Prática Clínica & Prescrição Ágil:**
   - **300+ Tabelas Comparativas & Escores Oficiais:** Classificações internacionais (FIGO PALM-COEIN, POP-Q, BI-RADS, STRAW+10, Roma IV, GINA 2024, Wood-Downes, Jones, PALS).
   - **Guia de Prescrição com Cópia Rápida:** Botão de 1-clique para transferir posologias estruturadas diretamente para o prontuário.
   - **Casos Clínicos Simulados Interativos:** Cenários da vida real com revelação diagnóstica e justificativa fundamentada baseada nos tratados oficiais.

4. **Performance, Acessibilidade & Suporte Offline (PWA):**
   - **Zero Dependências Externas de Runtime:** Código nativo em HTML5 semântico, CSS3 moderno com suporte a temas Claro/Noturno e JavaScript modular.
   - **PWA com Suporte 100% Offline:** Service Worker com cache inteligente dos módulos e imagens para consulta em enfermarias, UTIs e plantões sem conectividade.
   - **Engenharia Mobile-First:** Conformidade com iOS Safe Areas (iPhone Notch e Dynamic Island) e tipografia fluida.

---

## 📊 Métricas do Portal

| Métrica | Quantidade | Observações |
| :--- | :---: | :--- |
| **Módulos Clínicos Ativos** | **86** | 38 Ginecologia (FEBRASGO) + 48 Pediatria (SBP 2024) |
| **Seções Clínicas Estruturadas** | **684** | 8 seções homogêneas por módulo |
| **Infográficos Clínicos HD** | **174** | Pôsteres verticais de alta resolução com dupla alternância |
| **Fluxogramas Vetoriais SVG** | **176** | Diagramas de decisão clínica com zoom vetorial |
| **Itens no Índice de Busca** | **856** | Módulos, infográficos, fluxogramas, casos e prescrições |
| **Tabelas Clínicas & Posológicas** | **300+** | Envolvidas em contêineres responsivos |
| **Suporte Offline** | **100%** | PWA via Service Worker |

---

## 🩺 Especialidade: Ginecologia & Obstetrícia (38 Módulos • FEBRASGO)

Todos os 38 módulos fundamentados no **Tratado de Ginecologia FEBRASGO (2ª Edição)**, organizados em 6 eixos temáticos:

| # | Módulo / Tema | Capítulos Tratado FEBRASGO | Destaques Propedêuticos, Tabelas & Algoritmos |
| :-: | :--- | :--- | :--- |
| **1** | **Disfunção Sexual Feminina (DSF)** | Cap. 10, 11 e 12 | Modelo Circular de Basson, modelo PLISSIT, critérios de Friedrich para vulvodinia, manejo de disfunções por ISRS em 5 passos. |
| **2** | **Sangramento Uterino Anormal (SUA)** | Cap. 20, 21 e 45 | Sistema FIGO PALM-COEIN, parâmetros menstruais 2018, protocolo de emergência aguda (Ácido Tranexâmico, Foley 30-50 mL) e escore STEPW de Lasmar. |
| **3** | **Contracepção Reversível (LARCs)** | Cap. 16, 17, 18, 70 e 74 | Critérios Médicos de Elegibilidade da OMS (Cat. 1 a 4), técnica de inserção, manejo de *spotting* e conduta em DIP com DIU in situ. |
| **4** | **Câncer de Mama** | Cap. 82 a 86 | Diretrizes FEBRASGO/SBM/CBR vs INCA, BI-RADS® 6ª Ed., tríplice diagnóstica (Core biopsy vs PAAF vs VAB) e critérios do estudo ACOSOG Z0011. |
| **5** | **Câncer de Colo Uterino** | Cap. 13, 14, 77 e 79 | Nomenclatura Colposcópica IFCPC 2011 (ZT 1-3, achados menores vs maiores), conduta em NICs e matriz cirúrgica por estádio FIGO 2018. |
| **6** | **Infertilidade Conjugal** | Cap. 34 e 48 a 52 | Os 4 pilares diagnósticos simultâneos, reserva ovariana (AMH/CFA), interpretação da Histerossalpingografia (Prova de Cotte) e reprodução assistida. |
| **7** | **Síndrome dos Ovários Policísticos (SOP)** | Cap. 38, 39, 42 e 43 | Critérios de Rotterdam, os 4 fenótipos (A a D), tabela de exclusão mandatória de mimetizadores, escore de Ferriman-Gallwey modificado. |
| **8** | **Adenomiose Uterina** | Cap. 34 | Fisiopatologia da Zona Juncional (TIAR), critérios ultrassonográficos MUSA / RM, tríade clínica e opções hormonais vs cirúrgicas. |
| **9** | **Endometriose Profunda** | Cap. 35 | Os 6 "D"s da endometriose, implantes peritoneais, endometrioma ovariano, estadiamento ESHRE/ASRM e preparo cirúrgico intestinal (*shaving* vs disco). |
| **10** | **Prolapso de Órgãos Pélvicos (POP)** | Cap. 68 | Os 3 Níveis de DeLancey, grade 3x3 do POP-Q (estádios 0 a IV), teste de IUE oculta (*kinking*) e Colpocleise de Le Fort vs Latzko. |
| **11** | **Incontinência Urinária Feminina** | Cap. 63 a 65 | Quadro diferencial completo (IUE hipermobilidade vs DEI, BH, IUM e fístulas), estudo urodinâmico, Escala de Oxford e slings TVT vs TOT. |
| **12** | **Climatério & Terapia Hormonal (THM)** | Cap. 56 a 60 | Estadiamento STRAW+10 completo (-5 a +2), Janela de Oportunidade, regimes terapêuticos e fármacos não hormonais (Fezolinetant, IRSNs). |
| **13** | **TRH Avançada & Androgênios** | Cap. 47 e 57 | Consenso Global de Testosterona no TDSH, investigação de sangramento inesperado e saúde óssea (FRAX, Denosumabe, Teriparatida). |
| **14** | **Vulvovaginites & Cervicites** | Cap. 26 e 27 | Eubiose vaginal (pH 3,8-4,5), diferenciação de Vaginose Bacteriana (Amsel/Nugent), Candidíase, Tricomoníase e as 5 grandes úlceras genitais (PCDT). |
| **15** | **Doença Inflamatória Pélvica (DIP)** | Cap. 28 | Critérios de Gainesville/CDC, estadiamento de Monif (I a IV), abscesso tubo-ovariano e prevenção de sequelas reprodutivas. |
| **16** | **Miomatose Uterina (Leiomiomas)** | Cap. 32 | Classificação FIGO WAM (subtipos 0 a 8: submucoso, intramural, subseroso), escore STEPW de Lasmar, condutas medicamentosas e cirúrgicas. |
| **17** | **Amenorreias Primária & Secundária** | Cap. 41 | Prazos etários, algoritmo dos 4 quadrantes, diferenciação Rokitansky vs Morris, e matriz diagnóstica em 4 passos da amenorreia secundária. |
| **18** | **Abdome Agudo em Ginecologia** | Cap. 37 e 39 | Triagem hemodinâmica imediata, Gravidez Ectópica (Metotrexato 50 mg/m² vs Salpingectomia), Torção Anexial com destorção e cisto roto. |
| **19** | **Tumores Anexiais & Câncer de Ovário** | Cap. 37 e 81 | Regras Simples IOTA (B-features vs M-features), Escore RMI de Jacobs, marcadores (CA-125, HE4, ROMA), Síndrome de Meigs e citorredução R0. |
| **20** | **Câncer de Corpo do Útero (Endométrio)** | Cap. 80 | Propedêutica do SUPM (eco > 4 mm e Pipelle), Hiperplasia Sem Atipia vs EIN, FIGO 2023 Molecular (POLE, MMRd, NSMP, p53abn) e Sarcomas. |
| **21** | **Doenças Benignas da Mama** | Cap. 82 | Classificação de Dupont & Page, nódulos mamários e Tumor Filodes, mastite lactacional vs Doença de Zuska e algoritmo de Ciatto para derrame papilar. |
| **22** | **Patologia Benigna & Pré-Neoplásica da Vulva** | Cap. 38, 77 e 78 | Classificação ISSVD 2015, Líquen Escleroso (Clobetasol 0,05%), glândula de Bartholin (Word vs marsupialização), uVIN/HSIL vs dVIN e Doença de Paget. |
| **23** | **Câncer de Vulva e de Vagina** | Cap. 78 | Estadiamento FIGO 2021, técnica cirúrgica de incisão tríplice, linfonodo sentinela (GROINSS-V I e II) e quimiorradioterapia definitiva (IMRT + IGABT). |
| **24** | **Dor Pélvica Crônica & Dismenorreia** | Cap. 30 e 36 | Sinal de Carnett, neurobiologia da sensibilização central, dismenorreia primária vs secundária, Síndrome da Bexiga Dolorosa e neuromoduladores. |
| **25** | **Síndrome Pré-Menstrual & TDPM** | Cap. 31 | Fisiopatologia gabaérgica/serotoninérgica, critérios ACOG e DSM-5-TR, diário DRSP, ISRS contínuo vs de fase lútea e supressão com Drospirenona + EE. |
| **26** | **Pólipos Uterinos Endometriais & Cervicais** | Cap. 33 e 76 | SUA-P, padrão vascular no Doppler, acurácia histeroscópica, estratificação de risco de malignidade na pós-menopausa/Tamoxifeno e polipectomia. |
| **27** | **Planejamento Familiar & Contracepção** | Cap. 70 a 76 | Critérios de Elegibilidade Médica da OMS (Cat. 1 a 4), contracepção de emergência (Levonorgestrel vs Ulipristal vs DIU-Cu) e a Nova Lei de Laqueadura. |
| **28** | **Assistência na Violência Sexual** | Cap. 40 e 88 | Marco ético-legal (Portaria MS 2.561/2020), PEP HIV em ≤ 72h (TDF+3TC+DTG por 28 dias), profilaxias IST não-virais, IGHAB e abortamento legal. |
| **29** | **Ginecologia da Infância & DDS** | Cap. 15, 20 a 24, 44 | Particularidades anatômicas da genitália infantil, vulvovaginites, sinéquia labial, Puberdade Precoce (Tanner, teste GnRH) e DDS (HAC, Morris, Swyer). |
| **30** | **Consulta Ginecológica, Vacinas & LGBTQIAPN+** | Cap. 4 a 9, 44 | Prevenção quaternária (Choosing Wisely), Calendário Vacinal SBIm/FEBRASGO (HPV, Shingrix, dTpa), saúde lésbica e homens trans sob testosterona. |
| **31** | **Fisiologia Menstrual & Esteroidogênese** | Cap. 1 a 3, 6 a 8 | Pulsatilidade do GnRH, Teoria das Duas Células e Duas Gonadotrofinas, recrutamento folicular, feedback positivo de estradiol e ciclo endometrial. |
| **32** | **Hiperprolactinemia & Galactorreia** | Cap. 44 | Controle tônico dopaminérgico, diferenciação de galactorreia verdadeira, armadilhas laboratoriais (macroprolactina e efeito gancho) e Cabergolina. |
| **33** | **Insuficiência Ovariana Prematura (IOP)** | Cap. 46 | Critérios ESHRE (idade < 40a, amenorreia ≥ 4m, 2x FSH > 25 UI/L), cariótipo, pesquisa FMR1, anti-21-hidroxilase e TRH fisiológica contínua até 50 anos. |
| **34** | **Perda Gestacional Recorrente (PGR)** | Cap. 53 e 61 | Definição ASRM/ESHRE (≥ 2 perdas), critérios de Sydney para SAAF obstétrica (AAS + Enoxaparina), septoplastia histeroscópica e FIV com PGT-SR. |
| **35** | **Uroginecologia Complexa & ITUR** | Cap. 66, 67 e 69 | ITU recorrente (estrogênio vaginal, D-manose, vacina OM-89); fístulas vesicovaginal vs ureterovaginal; cistite intersticial (úlceras de Hunner). |
| **36** | **Anatomia Cirúrgica, Embriologia & CMI** | Cap. 1-3, 5, 15-18, 69 | Espaços avasculares pélvicos, trajeto ureteral, anomalias müllerianas e meios de distensão histeroscópica (prevenção de hiponatremia dilucional). |
| **37** | **Exame Físico Ginecológico Completo** | Cap. 4 | Semiotécnica completa: mamas, abdome, genitália externa, exame especular, toque bimanual e toque retovaginal em tesoura. |
| **38** | **Método do Fluxograma Clínico** | Framework FEBRASGO | Metodologia ativa de raciocínio clínico visual em 5 etapas para estudantes de medicina e residentes. |

---

## 👶 Especialidade: Pediatria (48 Módulos • SBP 2024)

Todos os 48 módulos fundamentados no **Tratado de Pediatria SBP 2024 (6ª Edição)**, organizados em 7 eixos temáticos:

| # | Módulo / Tema | Seção / Cap. Tratado SBP 2024 | Destaques Propedêuticos, Tabelas & Algoritmos |
| :-: | :--- | :--- | :--- |
| **1** | **Reanimação Neonatal em Sala de Parto** | Seção 10, Cap. 1 | Minuto de Ouro, avaliação das 3 perguntas, VPP em 30s com balão autoinflável, IOT com cânula sem cuff, massagem cardíaca 3:1 e adrenalina. |
| **2** | **Cuidados & Triagem Neonatal** | Seção 10, Cap. 2-5 | Determinação de IG (Capurro somático/neurológico vs New Ballard), exame físico do RN, 4 triagens físicas (Olhinho, Orelhinha, Coraçãozinho, Linguinha) e Teste do Pezinho. |
| **3** | **Distúrbios Respiratórios do RN** | Seção 10, Cap. 12 | Boletim de Silverman-Andersen, SDRMH (membrana hialina e surfactante exógeno por LISA/INSURE), TTRN, SAM e HPPN com óxido nítrico inalatório (iNO). |
| **4** | **Icterícia & Sepse Neonatal** | Seção 10, Cap. 18 e 25 | Zonas de Kramer, nomograma de Bhutani, fototerapia de alta irradiância, exsanguineotransfusão, sepse precoce vs tardia e Ampicilina + Gentamicina. |
| **5** | **Distúrbios Metabólicos do RN** | Seção 10, Cap. 8 e 22 | Rastreio de hipoglicemia e cálculo da TIG (mg/kg/min), bolus de SG 10%, hipocalcemia precoce vs tardia e Enterocolite Necrosante (Bell modificados). |
| **6** | **Infecções Congênitas (TORCH)** | Seção 20, Cap. 14 | Toxoplasmose congênita (Tríade de Sabin e Sulfadiazina + Pirimetamina), CMV congênito e Valganciclovir, Rubéola e Herpes neonatal. |
| **7** | **Sífilis na Gestação & Congênita** | Seção 20, Cap. 14 | Diagnóstico sorológico materno (testes treponêmicos e não-treponêmicos), critérios de tratamento adequado da gestante e Penicilina Cristalina vs Procaína vs Benzatina. |
| **8** | **Crescimento & Antropometria** | Seção 24, Cap. 1 | Curvas OMS 2006/2007 (E/I, P/I, IMC/I, PC/I), Z-scores e percentis, velocidade de crescimento, Alvo Genético de Tanner e algoritmo de Baixa Estatura. |
| **9** | **Desenvolvimento Neuropsicomotor (DNPM)** | Seção 4, Cap. 2 | Os 4 domínios do desenvolvimento, marcos cronológicos de 1 a 24 meses, reflexos primitivos e sua integração, Triagem de Denver II e rastreio de TEA (M-CHAT-R/F). |
| **10** | **Aleitamento Materno & Lactação** | Seção 9, Cap. 1-6 | Fisiologia da prolactina e ocitocina, técnica de pega e posicionamento, manejo de fissuras mamárias e ingurgitamento, contraindicações absolutas (HIV/HTLV) e ordenha. |
| **11** | **Alimentação & Puericultura** | Seção 2 & 24 | Guia Alimentar SBP 2024, introdução aos 6 meses, Tradicional vs BLW vs BLISS, os 5 grupos alimentares e proibições estritas até 2 anos (açúcar, mel, ultraprocessados). |
| **12** | **Desnutrição Infantil (OMS)** | Seção 24, Cap. 8 | Classificações de Gomez, Waterlow e OMS, Marasmo vs Kwashiorkor, protocolo dos 10 Passos da OMS, reidratação com ReSoMal e dietas F-75 / F-100. |
| **13** | **Micronutrientes & Vitaminas** | Seção 24, Cap. 5 e 6 | Profilaxia universal de ferro elementar SBP 2024 por peso de nascimento e IG, profilaxia de Vitamina D, Raquitismo carencial e Vitamina A. |
| **14** | **Obesidade Infantil & Metabólica** | Seção 24, Cap. 10 | Critérios OMS < 5 anos vs ≥ 5 anos,延 Síndrome Metabólica em pediatria (IDF), rastreio de MASLD/esteatose hepática, regra 5-2-1-0 e opções farmacológicas > 12 anos. |
| **15** | **Puberdade Normal & Desvios** | Seção 11 & 16 | Estadiamento de Tanner feminino e masculino (orquidômetro de Prader), estirão puberal, Puberdade Precoce Central (PPC) vs Periférica (PPP) e atraso puberal. |
| **16** | **Hebiatria (Medicina do Adolescente)** | Seção 11, Cap. 1-4 | Marco ético-legal do ECA e sigilo médico, as 4 exceções da quebra de sigilo, mnemônico HEEADSSS, triagem de substâncias (CRAFFT) e dupla proteção contraceptiva. |
| **17** | **Segurança & Prevenção de Acidentes** | Seção 15, Cap. 1-4 | Traumas infantis por faixa etária, dispositivos de retenção veicular (Resolução CONTRAN 14.071/2021), berço seguro, prevenção de afogamentos e manobra de Heimlich. |
| **18** | **Asma na Infância & Lactente Sibilante** | Seção 29, Cap. 3 | Classificação GINA/SBP 2024, passos de manutenção escalonados (Etapas 1 a 5), estratégia MART, manejo da crise aguda e fenótipos de Tucson / PAPI. |
| **19** | **Bronquiolite Viral Aguda (BVA)** | Seção 29, Cap. 6 | Escore Wood-Downes modificado, suporte respiratório com CNAF, recomendações Choosing Wisely SBP (não fazer beta-2 ou corticoide) e profilaxia com Palivizumabe / Nirsevimabe. |
| **20** | **Pneumonia Comunitária (PAC)** | Seção 29, Cap. 8 | Critérios de Taquipneia da OMS, sinais de tiragem, antibioticoterapia empírica (Amoxicilina ambulatorial vs Ampicilina IV), derrame pleural parapneumônico e PAC atípica. |
| **21** | **Anafilaxia & Urticária Pediátrica** | Seção 12, Cap. 3 e 4 | Critérios diagnósticos WAO 2020 / SBP, Adrenalina intramuscular (IM) 1:1.000 como 1ª linha imediata (0,01 mg/kg no vasto lateral), plano de autoinjetores e anti-H1. |
| **22** | **Alergia Alimentar & APLV** | Seção 12, Cap. 6 | Classificação (IgE vs Não-IgE mediada), formas clínicas gastrointestinais (Proctocolite, FPIES), fórmulas de substituição (FEH vs Aminoácidos) e Teste de Provocação Oral. |
| **23** | **Coqueluche na Infância** | Seção 20, Cap. 12 | Fases clínicas (catarral, paroxística, convalescença), reação leucemoide com hiperlinfocitose, confirmação por PCR e antibioticoterapia/quimioprofilaxia com Azitromicina. |
| **24** | **Fibrose Cística (Mucoviscidose)** | Seção 29, Cap. 14 | Triagem neonatal (IRT duplo), Teste do Suor de Gibson-Cooke (Cloro > 60 mEq/L), reposição enzimática pancreática e moduladores CFTR (Ivacaftor / Elexacaftor). |
| **25** | **Calendário Vacinal (SBP/PNI)** | Seção 21, Cap. 1-4 | Calendário vacinal de 0 a 19 anos, vacinas acelulares (Hexavalente, DTPa), HPV nonavalente, Meningocócica ACWY/B, esquemas de atraso (*catch-up*) e CRIE. |
| **26** | **Febre sem Foco no Lactente** | Seção 3, Cap. 4 | Conduta no neonato (< 28 dias), critérios de baixo risco de Rochester e Philadelphia (29-90 dias), rastreio de ITU oculta e marcadores inflamatórios (Procalcitonina/PCR). |
| **27** | **Doenças Exantemáticas** | Seção 20, Cap. 8 | Diagnóstico diferencial morfológico: Sarampo (Koplik e Vitamina A), Rubéola, Exantema Súbito, Eritema Infeccioso, Escarlatina, Varicela e Síndrome Mão-Pé-Boca. |
| **28** | **Tuberculose na Infância (SBP)** | Seção 20, Cap. 18 | Sistema de Pontuação MS/SBP 2024, interpretação do PPD (Mantoux) e IGRA, TRM-TB GeneXpert, esquema RHZ (< 10 anos) e RHZE (≥ 10 anos) e profilaxia de ILTB. |
| **29** | **Refluxo Gastroesofágico (DRGE)** | Seção 17, Cap. 3 | Refluxador Feliz fisiológico vs DRGE patológica, Síndrome de Sandifer, medidas posturais/espessamento, teste terapêutico com IBP e Choosing Wisely SBP. |
| **30** | **Diarreia Aguda & Reidratação (TRO)** | Seção 17, Cap. 7 | Planos A, B e C da OMS/SBP, SRO com osmolaridade reduzida (245 mOsm/L), suplementação obrigatória de Zinco por 10-14 dias e prevenção de SHU por EHEC. |
| **31** | **Constipação Intestinal Funcional** | Seção 17, Cap. 11 | Critérios de Roma IV, diagnóstico diferencial com Hirschsprung, desimpactação com Polietilenoglicol (PEG 4000) e treinamento evacuatório. |
| **32** | **Doença Celíaca Pediátrica** | Seção 17, Cap. 13 | Imunogenética HLA-DQ2/DQ8, Diretriz ESPGHAN / SBP sem biópsia (anti-tTG IgA ≥ 10× LSN + EMA-IgA positivo), Classificação de Marsh e dieta isenta de glúten. |
| **33** | **Infecção Urinária (ITU)** | Seção 22, Cap. 4 | Cortes de urocultura por punção suprapúbica, sondagem vesical e jato médio; conduta na pielonefrite aguda e protocolo de imagem (USG, UCRM, DMSA). |
| **34** | **Enurese Noturna na Infância** | Seção 22, Cap. 9 | Enurese monossintomática vs não-monossintomática, diário miccional, terapia de primeira linha com Alarme Noturno e farmacoterapia com Desmopressina (DDAVP). |
| **35** | **Choque Pediátrico & Manejo** | Seção 3 & 31 | Choque Compensado vs Hipotensivo, Pacote da 1ª Hora, Acesso Intraósseo (IO) imediato, cristaloides balanceados (10-20 mL/kg) e DVA precoce (Adrenalina vs Noradrenalina). |
| **36** | **PCR & Algoritmos PALS** | Seção 3, Cap. 1 | PCR hipóxica/asfíxica, ritmos não-chocáveis (Assistolia/AESP) com Adrenalina precoce (0,01 mg/kg), ritmos chocáveis (FV/TVsp), protocolo 6 H's e 5 T's e metas pós-PCR. |
| **37** | **BRUE & Sono Seguro do Lactente** | Seção 3, Cap. 15 | Critérios AAP/SBP de Baixo Risco para BRUE, conduta conservadora com ECG e oximetria (evitar internações desnecessárias) e regras de sono seguro para prevenir SMSL. |
| **38** | **Convulsão Febril & Crises** | Seção 27, Cap. 2 | Crise febril Simples vs Complexa, indicações precisas de punção lombar, manejo da crise aguda em sala de emergência com benzodiazepínicos e algoritmo de EME. |
| **39** | **Cefaleias na Infância** | Seção 27, Cap. 5 | Mnemônico SNOOP Pediátrico para sinais de alerta, neuroimagem de urgência, diagnóstico diferencial de Enxaqueca vs CTT, equivalentes migranosos e profilaxia. |
| **40** | **Doença de Kawasaki** | Seção 13, Cap. 8 | Critérios diagnósticos AHA/SBP, Kawasaki incompleto, janelas de ouro de tratamento (IGIV 2 g/kg em dose única + AAS) e rastreio ecocardiográfico de aneurismas coronarianos. |
| **41** | **Púrpura de Henoch-Schönlein (IgA)** | Seção 13, Cap. 8 | Critérios EULAR/PRINTO (púrpura palpável sem plaquetopenia obrigatória + artralgia, dor abdominal ou nefropatia) e seguimento renal ambulatorial por 6 meses. |
| **42** | **Febre Reumática Aguda** | Seção 13, Cap. 4 | Critérios de Jones Revisados (AHA/SBP), cardite clínica/subclínica, Coreia de Sydenham, comprovação estreptocócica (ASLO) e profilaxia secundária com Penicilina Benzatina a cada 21 dias. |
| **43** | **Artrite Idiopática Juvenil (AIJ)** | Seção 13, Cap. 2 | Critérios ILAR, forma Oligoarticular (rastreio de uveíte assintomática a cada 3 meses com lâmpada de fenda se FAN+), Poliarticular, Doença de Still e escalonamento terapêutico. |
| **44** | **Cardiopatias Congênitas** | Seção 14, Cap. 1-6 | Teste do Coraçãozinho neonatal, cardiopatias acianogênicas (CIV, CIA, PCA, CoAo), cianogênicas (Tetralogia de Fallot e crise hipoxêmica em posição genupeitoral) e canal-dependentes com PGE1. |
| **45** | **Hipertensão Arterial na Criança** | Seção 14, Cap. 12 | Tabelas de percentil de PA para idade, sexo e estatura; investigação de causas secundárias (renais e renovasculares) e manejo da emergência hipertensiva. |
| **46** | **Hipotireoidismo Congênito** | Seção 16, Cap. 3 | Triagem Neonatal Biológica (janela ideal D3-D5), confirmação com TSH/T4L e introdução precoce de Levotiroxina (10-15 mcg/kg/dia) antes de 14-28 dias para prevenir déficit cognitivo. |
| **47** | **Hiperplasia Adrenal Congênita** | Seção 16, Cap. 7 | Deficiência de 21-hidroxilase, virilização pré-natal em meninas 46,XX e crise perdedora de sal na 2ª semana de vida tratada com hidrocortisona em dose de estresse e suporte hidroeletrolítico. |
| **48** | **Síndromes Genéticas & Erros Inatos** | Seção 18 & 19 | Síndrome de Down (T21: DSAV e tireoide), Turner (45,X: coarctação e baixa estatura), Klinefelter (47,XXY) e abordagem dos Erros Inatos do Metabolismo rastreados pelo Teste do Pezinho. |

---

## 💻 Como Executar Localmente

O portal foi construído em arquitetura estática pura de altíssimo rendimento (*zero runtime dependencies*):

1. **Execução Direta:**
   - Dê um duplo clique no arquivo [`index.html`](file:///home/candida/Área%20de%20Trabalho/Antigravity/Fluxogramas/index.html) ou abra-o em qualquer navegador moderno.
   - O portal carregará instantaneamente com todas as suas funcionalidades nativas (página inicial minimalista, busca em tempo real nos 856 itens, alternância `HD ↔ SVG`, lightbox com zoom e suporte offline).

2. **Execução via Servidor Local (Opcional para PWA Service Worker completo):**
   ```bash
   python3 -m http.server 8000
   ```
   Acesse no navegador: `http://localhost:8000`.

---

## 📱 Instalação como Aplicativo (PWA)

O portal é um **Progressive Web App (PWA)** totalmente instalável:

- **Android (Chrome):** Toque no banner de instalação ou no menu do navegador em **"Adicionar à tela inicial"** / **"Instalar aplicativo"**.
- **iOS / iPhone / iPad (Safari):** Toque no botão **Compartilhar** e selecione **"Adicionar à Tela de Início"**.
- **Computador (Chrome / Edge):** Clique no ícone de instalação na barra de endereços do navegador.
- **Modo Offline:** Após o primeiro acesso, todos os módulos clínicos, imagens e algoritmos permanecem acessíveis mesmo sem conexão com a internet.

---

## 📂 Estrutura de Arquivos do Projeto

```
Fluxogramas/
├── index.html                   # Aplicação principal (SPA semântica, cabeçalhos, layout responsivo e modais)
├── css/
│   └── main.css                 # Folha de estilos completa (tokens de design, dark mode, lightbox, mobile)
├── js/
│   ├── app.js                   # Lógica central (roteamento hash, carregamento dinâmico de módulos, temas, lightbox)
│   ├── search.js                # Motor de busca global instantânea e modal de pesquisa indexada
│   └── modules-data.js          # Metadados e índices estruturados dos 86 módulos clínicos
├── content/
│   ├── ginecologia/             # 38 módulos clínicos FEBRASGO em HTML semântico com infográficos e tabelas
│   └── pediatria/               # 48 módulos clínicos SBP 2024 em HTML semântico com infográficos e tabelas
├── imagens/                     # 174 infográficos clínicos HD (PNG) e 176 fluxogramas vetoriais (SVG)
├── manifest.webmanifest         # Configuração PWA (standalone, ícones, tema)
├── sw.js                        # Service Worker com cache e suporte offline
├── metodo_fluxograma.md         # Documentação metodológica do Framework Clínico-Visual
└── README.md                    # Documentação técnica e guia oficial do portal
```

---

## ⚖️ Curadoria Científica & Referências Oficiais

- **Ginecologia & Obstetrícia:** *Tratado de Ginecologia da FEBRASGO (Federação Brasileira das Associações de Ginecologia e Obstetrícia), 2ª Edição.*
- **Pediatria:** *Tratado de Pediatria da SBP (Sociedade Brasileira de Pediatria), 6ª Edição, 2024.*
- **Diretrizes Complementares:** *Ministério da Saúde do Brasil, OMS (Organização Mundial da Saúde), CDC, GINA, WAO, FIGO e PALS/AHA.*

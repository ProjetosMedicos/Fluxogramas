# 🩺 Fluxomed | Algoritmos & Infográficos Clínicos

Portal médico interativo e **Web App (PWA)** de alta performance voltado à tomada de decisão clínica rápida, visualização de fluxogramas editoriais, propedêutica e prescrição baseada em evidências.

Totalmente desenvolvido em arquitetura estática pura (*zero runtime dependencies*), com carregamento dinâmico modular e funcionamento **100% offline**.

---

## ⚡ Números do Portal

| Métrica | Total | Detalhes |
| :--- | :---: | :--- |
| **Módulos Clínicos** | **86** | 38 Ginecologia (FEBRASGO) + 48 Pediatria (SBP 2024) |
| **Seções Estruturadas** | **684** | 8 seções clínicas padronizadas por módulo |
| **Infográficos HD** | **86** | Pôsteres verticais editoriais em alta resolução (1 por módulo) |
| **Tabelas Clínicas Visuais HD** | **306** | 100% das tabelas convertidas em imagens HD com condutas integradas |
| **Índice de Busca** | **856** | Itens indexados para busca instantânea (`Ctrl + K`) |
| **Compatibilidade** | **PWA** | Acesso offline com cache Service Worker, instalável em Mobile e Desktop |

---

## 🌟 Recursos Principais

- **Página Inicial Minimalista & Mobile-First:** Interface limpa e direta ao ponto, com gaveta lateral otimizada para smartphones.
- **Cards Clínicos Limpos:** Foco visual imediato no conteúdo; botões de zoom e download foram centralizados exclusivamente dentro do visualizador expandido.
- **Visualizador Lightbox Otimizado:** Toque em qualquer imagem (infográfico ou tabela) para abrir em alta resolução com Pan & Zoom tátil, botão de **Baixar HD** e botão de **Fechar (✕)**.
- **Tabelas Clínicas em Formato Visual:** Eliminação completa de rolagem horizontal em telas móveis; tabelas estruturadas com cores semafóricas e notas de conduta no rodapé.
- **Busca Global Instantânea (`Ctrl + K` ou `/`):** Localização em tempo real de patologias, fármacos, critérios diagnósticos e escores.
- **Prescrições & Posologias Prontas:** Botão de 1-clique para copiar doses e esquemas terapêuticos direto para o prontuário.
- **Casos Clínicos Simulados:** Mais de 500 cenários interativos da prática diária com revelação comentada da conduta recomendada.

---

## 📚 Especialidades & Eixos Temáticos

### 🩺 Ginecologia & Obstetrícia (38 Módulos • Tratado FEBRASGO 2ª Ed.)
1. **Endocrinologia Ginecológica, Reprodução & Climatério (9):** Amenorreias, SOP, Hiperprolactinemia, IOP, Infertilidade Conjugal, PGR & Trombofilias, SPM/TDPM, Climatério/THM, TRH Avançada & Androgênios.
2. **Sangramento Uterino, Patologia Benigna & Dor Pélvica (6):** Sangramento Uterino Anormal (SUA/PALM-COEIN), Miomatose Uterina, Adenomiose, Pólipos Endometriais, Endometriose Profunda, Dor Pélvica Crônica.
3. **Contracepção, Sexualidade & Urgências (6):** Planejamento Familiar Geral, LARCs, Disfunção Sexual Feminina, Abdome Agudo em Ginecologia, Assistência à Violência Sexual, Anatomia Cirúrgica & CMI.
4. **Infecções Genitais & Uroginecologia (6):** Vulvovaginites & Cervicites, DIP, Patologia Benigna da Vulva, Incontinência Urinária, Prolapso Genital (POP), Uroginecologia Complexa & ITUR.
5. **Mastologia & Oncologia Pélvica (6):** Doenças Benignas da Mama, Câncer de Mama, Câncer de Colo Uterino, Câncer de Endométrio, Tumores Anexiais & Ovário, Câncer de Vulva e Vagina.
6. **Consulta, Propedêutica & Fundamentos (5):** Exame Físico Ginecológico, Saúde Integral/LGBTQIAPN+, Fisiologia Menstrual, Ginecologia da Infância & DDS, Método do Fluxograma.

### 👶 Pediatria (48 Módulos • Tratado SBP 2024 6ª Ed.)
1. **Neonatologia & Perinatologia (7):** Reanimação Neonatal, Cuidados & Triagem do RN, Distúrbios Respiratórios, Icterícia & Sepse Neonatal, Distúrbios Metabólicos, Infecções Congênitas (TORCH), Sífilis na Gestação & Congênita.
2. **Puericultura, Nutrologia & Adolescência (10):** Crescimento & Antropometria, DNPM & Triagem M-CHAT, Aleitamento Materno, Alimentação Complementar, Desnutrição Infantil (OMS), Micronutrientes & Vitaminas, Obesidade Infantil, Puberdade & Desvios, Hebiatria, Segurança & Prevenção de Acidentes.
3. **Pneumologia, Alergia & Imunologia (7):** Asma & Lactente Sibilante, Bronquiolite Viral Aguda (BVA), Pneumonia Comunitária (PAC), Coqueluche, Fibrose Cística, Anafilaxia & Urticária, Alergia Alimentar & APLV.
4. **Emergências & Neurologia (5):** Parada Cardiorrespiratória (PALS), Choque Pediátrico, BRUE & Sono Seguro, Convulsão Febril & Crises, Cefaleias na Infância.
5. **Infectologia & Imunizações (4):** Calendário Vacinal SBP/PNI 2024, Febre sem Foco no Lactente, Doenças Exantemáticas, Tuberculose na Infância.
6. **Gastroenterologia & Nefrologia (6):** Refluxo Gastroesofágico (DRGE), Diarreia Aguda & TRO, Constipação Intestinal Funcional, Doença Celíaca, Infecção Urinária (ITU), Enurese Noturna.
7. **Cardiologia, Endocrinologia, Reumatologia & Genética (9):** Cardiopatias Congênitas, Hipertensão Arterial Pediátrica, Hipotireoidismo Congênito, Hiperplasia Adrenal Congênita, Doença de Kawasaki, Púrpura de Henoch-Schönlein, Febre Reumática Aguda, Artrite Idiopática Juvenil (AIJ), Síndromes Genéticas & Erros Inatos.

---

## 🚀 Como Executar

O projeto não requer instalação de pacotes ou compiladores (*zero build step*):

### 1. Acesso Direto
Abra o arquivo [`index.html`](file:///home/candida/Área%20de%20Trabalho/Antigravity/Fluxogramas/index.html) em qualquer navegador moderno (Chrome, Safari, Edge, Firefox).

### 2. Servidor Local (Recomendado para testar PWA offline completo)
```bash
python3 -m http.server 8000
```
Acesse: `http://localhost:8000`

---

## 📱 Instalação como App (PWA)

- **Android (Chrome):** Toque no botão de instalação da barra lateral ou selecione *"Instalar aplicativo"* no menu do navegador.
- **iOS (Safari):** Toque no botão *Compartilhar* e selecione *"Adicionar à Tela de Início"*.
- **Desktop (Chrome/Edge):** Clique no ícone de instalação na barra de endereços do navegador.

---

## 📂 Estrutura do Projeto

```
Fluxogramas/
├── index.html              # Aplicação principal (SPA semântica, layout e modais)
├── css/main.css            # Sistema de design (modo claro/escuro, lightbox, mobile)
├── js/
│   ├── app.js              # Roteamento, carregamento dinâmico e controladores de UI
│   ├── search.js           # Mecanismo de busca indexada em tempo real
│   └── modules-data.js     # Metadados clínicos dos 86 módulos
├── content/
│   ├── ginecologia/        # 38 módulos clínicos FEBRASGO em HTML semântico
│   └── pediatria/          # 48 módulos clínicos SBP 2024 em HTML semântico
├── imagens/
│   ├── infografico-*.png   # 86 infográficos verticais editoriais HD
│   └── tabelas/            # 306 tabelas clínicas em formato visual HD
├── manifest.webmanifest    # Manifesto PWA
├── sw.js                   # Service Worker com estratégia de cache offline
├── metodo_fluxograma.md    # Manual metodológico do framework clínico-visual
└── README.md               # Documentação sucinta do projeto
```

---

## ⚖️ Referências Oficiais

- **Ginecologia:** Tratado de Ginecologia FEBRASGO (2ª Edição) & Protocolos Oficiais FEBRASGO.
- **Pediatria:** Tratado de Pediatria da Sociedade Brasileira de Pediatria - SBP (6ª Edição, 2024).
- **Emergências:** Diretrizes PALS/AHA, Diretrizes de Reanimação Neonatal SBP 2024 e Consensos Globais (GINA, GOLD, KDIGO).

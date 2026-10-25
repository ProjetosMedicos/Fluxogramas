# 🩺 Fluxomed | Algoritmos & Infográficos Clínicos

Portal médico interativo e **Web App (PWA)** de alta performance voltado à tomada de decisão clínica rápida, visualização de fluxogramas vetoriais, propedêutica e prescrição baseada em evidências.

Totalmente desenvolvido em arquitetura estática pura (*zero runtime dependencies*), com carregamento dinâmico modular e funcionamento **100% offline**.

---

## ⚡ Números do Portal

| Métrica | Total | Detalhes |
| :--- | :---: | :--- |
| **Módulos Clínicos** | **86** | 38 Ginecologia (FEBRASGO) + 48 Pediatria (SBP 2024) |
| **Seções Estruturadas** | **684** | 8 seções homogêneas por módulo clínico |
| **Infográficos HD** | **174** | Sínteses visuais de alta resolução em formato editorial |
| **Fluxogramas SVG** | **176** | Árvores decisórias vetoriais com zoom dinâmico |
| **Índice de Busca** | **856** | Itens indexados (fármacos, condutas, escores e tabelas) |
| **Compatibilidade** | **PWA** | Acesso offline, instalável em Android, iOS e Desktop |

---

## 🌟 Recursos Principais

- **Página Inicial Minimalista:** Canvas centralizado e direto ao ponto, com adaptação ultra limpa para smartphones.
- **Busca Global Instantânea (`Ctrl + K` ou `/`):** Localização em tempo real de patologias, dosagens, critérios diagnósticos e condutas em 856 itens indexados.
- **Alternador Visual Duplo (`HD ↔ SVG`):** Alternância instantânea em 1-clique entre o Infográfico Clínico em alta resolução e o Fluxograma Vetorial SVG.
- **Lightbox Clínico Interativo:** Zoom dinâmico (`+`, `−`, `0`, `Ctrl + Scroll`), arraste panorâmico e atalho `Esc`.
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

- **Android (Chrome):** Toque no botão de instalação da barra lateral ou selecione *"Instalar aplicativo"* no menu.
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
├── imagens/                # 174 infográficos HD (.png) e 176 fluxogramas (.svg)
├── manifest.webmanifest    # Manifesto PWA
├── sw.js                   # Service Worker com estratégia de cache offline
├── metodo_fluxograma.md    # Manual metodológico do framework clínico-visual
└── README.md               # Documentação sucinta do projeto
```

---

## ⚖️ Referências Oficiais

- **Ginecologia:** *Tratado de Ginecologia FEBRASGO (2ª Edição).*
- **Pediatria:** *Tratado de Pediatria SBP (6ª Edição, 2024).*
- **Diretrizes Complementares:** *Ministério da Saúde do Brasil, OMS, GINA, WAO, FIGO, AHA/PALS e ESHRE.*

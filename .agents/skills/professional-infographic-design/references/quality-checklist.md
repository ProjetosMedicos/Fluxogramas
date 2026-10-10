# Checklist de Controle de Qualidade — Infográficos Profissionais

Este checklist deve ser aplicado obrigatoriamente antes de finalizar qualquer infográfico ou considerá-lo pronto para publicação. A validação está estruturada em cinco dimensões com critérios essenciais e itens de excelência.

---

## Dimensão 1: Rigor de Conteúdo & Precisão Técnica

- [ ] **Fidelidade à Diretriz Oficial**: Todas as recomendações clínicas, faixas etárias, valores de corte e condutas estão estritamente alinhados ao tratado ou consenso oficial de referência (ex.: SBP 2024, FEBRASGO 2ª Ed., PCDT/MS).
- [ ] **Ausência de Alucinações**: Não há números, porcentagens, posologias ou afirmações inventadas ou sem sustentação documental.
- [ ] **Regra de Ouro Diagnóstica**: A definição operacional e o sinal patognomônico da patologia estão destacados de forma inequívoca no Bloco 1.
- [ ] **Sinais de Alarme (*Red Flags*)**: As situações de risco iminente de vida ou complicação grave estão explicitamente visíveis em caixa destacada com cor de alerta.
- [ ] **Prevenção Quaternária (*Choosing Wisely*)**: As condutas tradicionais desaconselhadas pela evidência científica foram documentadas com justificativas claras.
- [ ] **Ortografia e Terminologia Médica**: Revisão completa de português brasileiro, pontuação, acentuação e grafia correta de nomes de fármacos e termos semiológicos.
- [ ] **Atribuição Formal de Fonte**: O rodapé contém a citação completa e verificável (Sociedade, Tratado, Edição e Ano).

---

## Dimensão 2: Arquitetura da Informação & Narrativa

- [ ] **Fluxo Lógico Sequencial**: A leitura vertical progride organicamente:
  `Definição & Epidemiologia` → `Fisiopatologia` → `Semiologia & Red Flags` → `Escore Clínico` → `Algoritmo Decisório em 3 Vias` → `Choosing Wisely` → `Profilaxia & Fonte`.
- [ ] **Numeração Ordinal**: Cada bloco principal possui identificador numérico visível (1 a 7) para guiar o fluxo visual.
- [ ] **Estratificação Semafórica Objetiva**: O algoritmo decisório divide claramente os fluxos em:
  - **Verde**: Leve / Ambulatorial / Domiciliar.
  - **Amarelo**: Moderado / Observação / Internação em Enfermaria.
  - **Vermelho**: Grave / Suporte Avançado / UTI Pediátrica ou Adulto.
- [ ] **Equilíbrio entre Síntese e Praticidade**: O conteúdo é rápido de consultar à beira do leito (menos de 30 segundos), sem perder a solidez científica.

---

## Dimensão 3: Design, Cores & Tipografia

- [ ] **Orientação Estritamente Vertical**: O infográfico é formatado em retrato (largura base de 1200px com altura proporcional livre).
- [ ] **Regra Anti-Letra Miúda**: Nenhum texto útil tem tamanho menor que **15px**. Textos corridos têm entre **16.5px e 22px** e títulos entre **20px e 38px**.
- [ ] **Tipografia Padrão**: Uso consistente da família `Plus Jakarta Sans` (pesos 600 a 900) e `JetBrains Mono` para dados técnicos.
- [ ] **Contraste de Acessibilidade (WCAG AAA)**: Textos escuros (`#0f172a` e `#334155`) sobre fundos brancos puros (`#ffffff`) ou neutros claros (`#edf6f5`).
- [ ] **Design Flat / Limpo**: Cantos arredondados suaves (*squircles* de 14px a 24px), sombras sutis de elevação e ausência de elementos 3D pesados ou decorações arbitrárias.
- [ ] **Consistência de Espaçamento**: Paddings internos proporcionais em todos os cartões (20px a 32px) e margens verticais equilibradas (16px a 24px).

---

## Dimensão 4: Identidade Visual & Evolução Criativa

- [ ] **Respeito às Preferências Confirmadas**: Incorpora todas as preferências e correções estabelecidas pelo usuário no histórico do projeto.
- [ ] **Personalização Temática**: O infográfico reflete a linguagem, escores e desafios próprios do assunto clínico trabalhado, sem ser uma cópia mecânica de temas anteriores.
- [ ] **Integração com a Estética do Webapp**: Harmonia visual com os componentes do portal (cards, badges, botões e tabelas).
- [ ] **Modo Noturno Testado**: Contenção com borda de realce e conforto visual garantido no tema escuro.

---

## Dimensão 5: Entrega Técnica & Ergonomia Web

- [ ] **Imagem de Alta Resolução**: Arquivo PNG gerado em 1200px de largura com recorte exato de altura (sem espaços mortos no topo ou na base) e salvo em `imagens/`.
- [ ] **Interface com Alternador Visual**: O módulo webapp possui os botões de alternância: `📊 Infográfico NotebookLM (HD)` e `📐 Fluxograma SVG Clássico`.
- [ ] **Controles Interativos Operacionais**:
  - `Zoom +`, `Zoom −` e `100%` funcionando sem quebrar layout.
  - `↔ Expandir` ativo no desktop (expandindo até 1200px na tela).
  - `🔍 Abrir em Tela Cheia` abrindo o PNG em nova aba.
  - `💾 Baixar Imagem HD` realizando o download com nome de arquivo semântico.
- [ ] **Ergonomia Mobile (Sem Nested Scrolling)**: Container `.flowchart-img-container:has(.infographic-mode)` configurado com `max-height: none !important; overflow-y: visible !important;` em telas móveis, garantindo rolagem de página fluida com o polegar.
- [ ] **Ocultação do Botão Expandir no Mobile**: Botão `#bva-expand-btn` ocultado no mobile para evitar redundância.
- [ ] **Invalidação de Cache (Service Worker)**: Bumping de versão de cache realizado em `sw.js` (se aplicável) para atualização imediata nos celulares e PWAs instalados.
- [ ] **Versionamento**: Alterações adicionadas e commitadas com mensagem descritiva no Git.

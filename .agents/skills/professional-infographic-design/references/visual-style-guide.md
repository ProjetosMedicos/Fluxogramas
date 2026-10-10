# Guia de Estilo Visual — Infográficos Profissionais

Este documento estabelece as diretrizes de direção de arte, tokens de design, componentes gráficos e convenções visuais consolidadas no projeto. O objetivo é assegurar consistência estética, alto padrão de acabamento e legibilidade sem restringir a adaptação criativa a novos temas.

---

## 1. Classificação das Evidências Visuais

Em estrito cumprimento à regra de evidência do projeto, as diretrizes visuais são classificadas em três categorias:

### A. Preferências Confirmadas (Diretrizes Mandatórias)
*Explicitamente solicitadas, ajustadas ou aprovadas pelo usuário:*
1. **Orientação Estritamente Vertical (Retrato)**: O infográfico deve ser projetado em formato vertical (largura de 1200px com altura proporcional livre). Esse formato é prioritário para garantir leitura fluida e ergonômica em smartphones e tablets sem necessidade de rotação da tela.
2. **Tipografia Ampla e Alta Legibilidade**: Proibição terminante de fontes miúdas, ilegíveis ou espremidas. O corpo do texto deve ter tamanho visualmente confortável (16.5px a 22px) e os títulos entre 20px e 38px, com contraste WCAG AAA.
3. **Planejamento Textual Prévio**: O texto integral de todos os blocos deve ser estruturado, revisado clinicamente e aprovado antes de iniciar a renderização gráfica da imagem.
4. **Conteúdo Customizado e Temático**: O design e os blocos devem ser 100% calibrados para o assunto clínico específico. É vedado o uso de esquemas genéricos ou cópias cegas de estruturas anteriores.
5. **Estética Flat / Moderna (Apple Human Interface & Microsoft Fluent)**: Design limpo, profissional, sofisticado, com cantos arredondados suaves (*squircles*), cores sólidas bem equilibradas e ausência de ruídos ou ornamentos arbitrários (como traçados de ECG sem contexto).
6. **Entrega em Altíssima Resolução**: Master exportado em PNG nítido (largura base de 1200px), pronto para download HD e visualização em tela cheia com zoom no webapp.
7. **Ausência de Caixas de Rolagem Aninhadas (*Nested Scrolling*) no Mobile**: No ambiente web/PWA para celulares, o infográfico vertical deve expandir com altura natural (`max-height: none`), permitindo rolagem corrida de página sem prender o polegar do usuário.

### B. Padrões Observados (Soluções Consolidadas)
*Identificados recorrentemente nas peças aprovadas:*
1. **Fundo com Grid de Pontos (*Dot Grid*)**: Fundo geral em tom claro e repousante (`#edf6f5`) com padrão sutil de pontos radiais de 1.2px espaçados a cada 32px, conferindo textura editorial elegante estilo *NotebookLM*.
2. **Iluminação Ambiente com Blobs Difusos**: Uso de camadas de luz suaves e imperceptíveis nos cantos (`radial-gradient` com opacidade de 8% a 12%) em tons ciano, esmeralda ou carmesim para enriquecer a profundidade sem poluir o contraste.
3. **Estrutura Modular em Cartões Brancos (*Cards*)**: Blocos delimitados por cartões brancos puros (`#ffffff`), com bordas sutis (`1.5px solid rgba(203, 213, 225, 0.85)`), raios de curvatura de 16px a 24px e sombras de elevação suaves (`0 8px 24px rgba(15, 23, 42, 0.04)`).
4. **Numeração Ordinal em Círculos de Destaque**: Identificação clara de cada bloco com um número branco envolto em caixa/círculo azul sólido (`#0284c7`, 38×38px, `border-radius: 12px`), orientando a ordem de leitura.
5. **Semiótica Cromática Semafórica para Decisão Clínica**:
   - **Verde**: Cenários leves, seguros, manejo domiciliar ou ambulatorial.
   - **Amarelo / Âmbar**: Cenários moderados, observação, internação em enfermaria e suporte intermediário.
   - **Vermelho**: Cenários graves, emergências, UTI, sinais de alarme (*Red Flags*) e condutas invasivas.
6. **Hero Box com Destaque Lateral para Definições**: Borda esquerda espessa (6px) em verde ou azul e fundo suave para a definição operacional chave ou conceito patognomônico.
7. **Tabelas de Escores Clínicos Estruturadas**: Tabelas zebradas com cabeçalho escurecido (`#f1f5f9`), colunas de pontuação padronizadas (0 a 3 pontos) e cartões de estratificação cromática logo abaixo.
8. **Cartão de Prevenção Quaternária (*Choosing Wisely*)**: Seção dedicada com ícones de proibição (❌) em vermelho claro sobre o que NÃO deve ser realizado, baseada em evidências sólidas.

### C. Hipóteses em Aberto (Aguardando Confirmação em Futuros Temas)
*Aspectos com plausibilidade técnica que devem ser avaliados projeto a projeto:*
1. **Variação da Cor Primária de Acento por Especialidade**: Possibilidade de usar Magenta/Rosa (`#e11d48`) para Ginecologia/Obstetrícia, Ciano/Azul (`#0284c7`) para Pediatria e Laranja/Rubro (`#ea580c`) para Trauma/Cirurgia, mantendo a mesma matriz estrutural.
2. **Ícones Vetoriais Inline vs. Emojis**: O uso de ícones SVG vetorizados dedicados em substituição a emojis em cards específicos quando maior sobriedade for solicitada.
3. **Diagramas Anatômicos Integrados**: Inclusão de pequenos esquemas anatômicos simplificados dentro do fluxo vertical quando o tema depender de marcos topográficos.

---

## 2. Tokens de Design e Paleta Cromática

### 2.1 Paleta Principal (Modo Claro / Base Editorial)
| Elemento | Código HEX / Valor | Finalidade |
| :--- | :--- | :--- |
| **Fundo da Página** | `#edf6f5` | Base suave, repousante, neutra-fria |
| **Grid de Pontos** | `#cbdad8` | Pontos sutis de 1.2px a cada 32px |
| **Fundo dos Cards** | `#ffffff` | Branco puro para contraste absoluto |
| **Bordas dos Cards** | `rgba(203, 213, 225, 0.85)` | Contorno sutil e definido |
| **Texto Principal** | `#0f172a` (Slate 900) | Títulos, ênfases e valores numéricos |
| **Texto Secundário** | `#334155` (Slate 700) | Corpo de texto, listas e explicações |
| **Texto Muted** | `#64748b` (Slate 500) | Legendas, metadados e notas de rodapé |

### 2.2 Cores Semânticas de Ação Clínica
| Nível / Semântica | Cor de Destaque | Cor de Fundo | Cor de Borda | Aplicação Típica |
| :--- | :--- | :--- | :--- | :--- |
| **Primária / Ação** | `#0284c7` (Sky 600) | `#e0f2fe` | `#bae6fd` | Numeração de blocos, badges de diretriz, títulos |
| **Segurança / Leve** | `#15803d` (Green 700) | `#f0fdf4` | `#86efac` | Via Verde, conduta domiciliar, escores baixos |
| **Atenção / Moderado** | `#b45309` (Amber 700) | `#fefce8` | `#fde047` | Via Amarela, internação em enfermaria, monitorização |
| **Alarme / Grave** | `#dc2626` (Red 600) | `#fef2f2` | `#fca5a5` | Via Vermelha, UTI, Red Flags, Choosing Wisely |

### 2.3 Modo Noturno (Dark Mode)
Quando renderizado ou embutido em interfaces dark mode:
- **Fundo do Container**: `#0b0f19` (Navy escuro profundo)
- **Fundo do Card do Webapp**: `#151e2e`
- **Borda de Contenção**: `#38bdf8` (Cyan vibrante em 1px)
- **Ajuste da Imagem**: `filter: contrast(1.02) brightness(0.96);` para atenuar o brilho excessivo do fundo branco e proporcionar leitura noturna confortável sem distorcer as cores clínicas.

---

## 3. Tipografia e Escala de Hierarquia

### 3.1 Famílias Tipográficas
- **Fonte Principal (Display & Texto)**: `Plus Jakarta Sans`, com pesos `600` (SemiBold), `700` (Bold), `800` (ExtraBold) e `900` (Black).
- **Fonte Técnica / Dados Numéricos**: `JetBrains Mono` ou fontes monoespaçadas modernas para dosagens matemáticas complexas, constantes e fórmulas quando necessário.

### 3.2 Escala de Tamanhos Tipográficos (Vertical 1200px)
| Nível Hierárquico | Tamanho da Fonte | Peso | Altura da Linha (*Line-height*) |
| :--- | :--- | :--- | :--- |
| **Título do Pôster (H1)** | 38px | 900 (Black) | 1.15 |
| **Subtítulo do Pôster** | 20px | 600 (SemiBold) | 1.30 |
| **Títulos de Blocos (H2)** | 26px | 900 (Black) | 1.25 |
| **Títulos de Cartões Internos (H3)**| 20px – 21px | 800 (ExtraBold) | 1.25 |
| **Texto de Destaque / Definições** | 22px | 700 (Bold) | 1.50 |
| **Corpo de Texto / Listas** | 16.5px – 17px | 600 (SemiBold) | 1.45 – 1.50 |
| **Tabela: Cabeçalho** | 15.5px | 900 (Black, Uppercase) | 1.20 |
| **Tabela: Células de Dados** | 16px | 600 – 800 | 1.35 |
| **Badges e Metadados** | 13px – 15px | 800 (ExtraBold, Uppercase)| 1.00 |
| **Rodapé e Fontes Oficiais** | 15px – 16px | 600 (SemiBold) | 1.40 |

> [!IMPORTANT]
> **Regra Anti-Letra Miúda**: Nenhum texto explicativo, observação clínica ou dosagem no pôster de 1200px pode ter tamanho inferior a **15px**. Textos comprimidos em 10px ou 12px são terminantemente proibidos, pois ficam ilegíveis na visualização em smartphone sem zoom.

---

## 4. Componentes Estruturais Padronizados

### 4.1 Cabeçalho Executivo (*Poster Header*)
- Contém o ícone temático à esquerda (80×80px, gradiente suave, sombra colorida).
- Bloco de títulos com H1 imponente e subtítulo claro.
- Badges de chancela oficial no canto superior direito (ex.: `SBP 2024 • 6ª EDIÇÃO` e `MEDICINA BASEADA EM EVIDÊNCIAS`).

### 4.2 Caixa de Conceito Chave (*Definition Box*)
- Fundo verde claro `#f0fdf4`, borda esquerda verde esmeralda de 6px.
- Fonte 22px destacada, resumindo a regra diagnóstica definitiva na voz da diretriz.
- Grid complementar de metadados (2 colunas) detalhando agente etiológico, pico etário ou prevalência.

### 4.3 Grade Fisiopatológica em 3 Etapas (*Patho Grid*)
- 3 cartões horizontais dispostos lado a lado:
  - Etapa 1: Invasão / Causa primária.
  - Etapa 2: Resposta inflamatória / Alteração histológica.
  - Etapa 3: Mecanismo mecânico / Consequência funcional e radiológica.
- Callout inferior de "Ponto-Chave Fisiopatológico" em tom âmbar ressaltando a implicação clínica direta.

### 4.4 Matriz Semiológica em 4 Eixos (*Semiology Grid*)
- 4 cartões em grid 2×2:
  1. Cronologia e evolução temporal da doença.
  2. Sinais de exame físico e ausculta detalhada.
  3. Repercussão funcional, hidratação e impacto diário.
  4. Sinais de Alarme (*Red Flags*) destacados com cartão avermelhado `#fef2f2`.

### 4.5 Tabela de Escore Clínico de Gravidade
- Tabela com todas as categorias clínicas pontuadas de 0 a 3 pontos.
- Abaixo da tabela, 3 caixas de estratificação (Leve, Moderada e Grave) associando as faixas de pontos com a ação clínica recomendada imediata.

### 4.6 Algoritmo Decisório Sequencial em 3 Vias (*Sequential Track Tree*)
- Estrutura vertical de decisão em 3 vias independentes:
  - **Via Verde (Leve)**: Critérios de inclusão objetivos e prescrição/orientação domiciliar.
  - **Via Amarela (Moderada)**: Critérios de enfermaria e suporte intermediário (oxigenoterapia, hidratação, monitorização).
  - **Via Vermelha (Grave / Falência)**: Critérios de UTI e intervenções avançadas imediatas (CNAF, CPAP, IOT).

### 4.7 Bloco de Prevenção Quaternária (*Choosing Wisely*)
- Cartões com fundo avermelhado claro e itens com marcador ❌.
- Apresenta as condutas rotineiras que a evidência científica condena, com justificativa clínica objetiva em 1 a 2 linhas para cada item.

### 4.8 Bloco de Profilaxia e Rodapé
- Recomendações de imunobiológicos, vacinas ou prevenção secundária.
- Rodapé com a fonte bibliográfica oficial completa (ex.: Tratado oficial, Sociedade de especialidade, edição e ano).

---

## 5. Anti-Padrões Visuais (O Que NÃO Fazer)

1. ❌ **Não utilizar layout horizontal para infográficos completos**: Pôsteres horizontais (16:9 ou 2400×1400) obrigam o usuário em celular a rotacionar o aparelho ou navegar por pan horizontal desconfortável.
2. ❌ **Não usar fontes menores que 15px**: Qualquer informação secundária deve ser concisa, mas visualmente grande.
3. ❌ **Não gerar imagens sem planejamento de texto prévio**: Nunca iniciar a renderização gráfica sem antes aprovar o roteiro textual bloco a bloco.
4. ❌ **Não sobrecarregar com elementos 3D ou skeumórficos pesados**: Priorizar superfícies flat, sombras sutis de 1 ou 2 camadas e linhas de contorno finas.
5. ❌ **Não utilizar cores sem propósito semântico**: Cores quentes (vermelho/âmbar) e frias (verde/azul) devem comunicar exclusivamente níveis de gravidade e fluxos de decisão clínica.

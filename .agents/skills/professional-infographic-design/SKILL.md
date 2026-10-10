---
name: professional-infographic-design
description: >-
  Planeja, estrutura, cria, revisa e refina infográficos profissionais de alta
  resolução, preservando a identidade visual editorial e a metodologia clínica
  estabelecidas no projeto. Utilize sempre que for solicitado criar ou atualizar
  infográficos, sintetizar diretrizes complexas em pôsteres verticais, organizar
  árvores de decisão visual ou aplicar a metodologia clínica-visual do projeto.
---

# Professional Infographic Design — Metodologia & Padrão Visual

Esta Skill encapsula o processo metodológico completo de planejamento, estruturação textual, design visual, renderização técnica em alta definição e controle de qualidade para criação de infográficos profissionais.

Ela foi desenvolvida a partir da experiência prática acumulada no projeto, incorporando todas as preferências aprovadas, aprendizados técnicos e padrões de usabilidade em dispositivos móveis e desktops.

---

## 1. Quando Ativar Esta Skill

Ative esta Skill sempre que:
- O usuário solicitar a criação de um infográfico para um novo módulo ou tema.
- For necessário transformar diretrizes extensas, consensos ou tratados em um resumo visual executivo de alta densidade e rápida consulta.
- For preciso substituir ou complementar um diagrama/fluxograma vetorial por uma síntese visual estilo *NotebookLM*.
- For solicitado revisar, refinar ou otimizar a legibilidade, layout ou ergonomia de um infográfico existente.

---

## 2. Princípios Fundamentais & Regra Central

> [!IMPORTANT]
> **REGRA CENTRAL DE IDENTIDADE VISUAL E EVOLUÇÃO CRIATIVA**  
> *Preserve nossa identidade visual e metodologia de trabalho, mas não reproduza mecanicamente soluções de temas anteriores. Cada novo infográfico deve ser coerente com nossa linguagem estética, adaptado ao contexto do tema e suficientemente original para atender às particularidades do conteúdo.*

### Os 10 Mandamentos do Método:

1. **Preservar a Identidade Visual**: Respeite rigorosamente as preferências confirmadas (formato vertical, tipografia ampla, cards limpos estilo Apple/Microsoft Fluent, paleta semafórica e acabamento editorial).
2. **Adaptar ao Conteúdo Específico**: O tema clínico dita a estrutura. Não force um algoritmo de BVA em um tema cirúrgico ou ginecológico; personalize os eixos semiológicos, escores e vias de triagem para a patologia em questão.
3. **Evitar Repetição Mecânica**: Consistência não é cópia. Inove na diagramação interna de cartões, proporções e tabelas conforme a natureza da informação exigir.
4. **Priorizar Feedbacks Explícitos**: Trate correções expressas do usuário como referências de altíssima prioridade, diferenciando preferências confirmadas de meras hipóteses inferidas.
5. **Diferenciar Regras Permanentes de Exceções**: Não transforme automaticamente um ajuste pontual feito para uma patologia específica em regra universal para todos os infográficos futuros.
6. **Manter Consistência sem Limitar a Criatividade**: Mantenha o padrão de fontes (`Plus Jakarta Sans`), proporção (1200px de largura) e qualidade de contraste, permitindo variações funcionais de arranjo visual.
7. **Aprender com as Revisões**: Quando o usuário solicitar uma alteração, entenda o motivo subjacente, aplique a correção cirurgicamente e avalie se houve impacto colateral em outros elementos.
8. **Resolver Conflitos com Clareza**: Se uma nova solicitação entrar em conflito com uma convenção anterior, priorize a instrução explícita mais recente para o trabalho atual.
9. **Fidelidade e Rigor ao Conteúdo**: O design existe para tornar a decisão rápida e clara. Nunca sacrifique a precisão científica, faixas de corte ou doses farmacológicas em favor da estética.
10. **Validação Pré-Entrega Obrigatória**: Nenhum infográfico é considerado pronto sem passar pela inspeção em 5 dimensões e testes em viewports realistas (Desktop e Mobile).

---

## 3. Metodologia de Criação em 7 Etapas

O processo divide-se em sete etapas cronológicas que devem ser seguidas rigorosamente:

```
ETAPA A: Briefing & Definição do Objetivo
   ↓
ETAPA B: Pesquisa & Organização do Conteúdo Oficial
   ↓
ETAPA C: Arquitetura da Informação (Roteiro em 7 Blocos)
   ↓
   ★ VALIDAÇÃO OBRIGATÓRIA: Aprovação Prévia do Roteiro Textual pelo Usuário
   ↓
ETAPA D: Direção de Arte & Layout (HTML5 Semântico + CSS Grid/Flexbox)
   ↓
ETAPA E: Renderização Automatizada em Alta Resolução (Chrome Headless + PIL)
   ↓
ETAPA F: Integração no Webapp & Ergonomia Mobile (Sem Nested Scrolling)
   ↓
ETAPA G: Controle de Qualidade, Revisão & Publicação
```

### Detalhamento das Etapas:

- **Etapa A (Briefing)**: Compreensão do tema, público (estudantes/residentes/médicos), formato e objetivo imediato à beira do leito.
- **Etapa B (Pesquisa)**: Mineração dos tratados oficiais de referência do projeto (ex.: *Tratado de Pediatria SBP 6ª Ed 2024*, *Tratado de Ginecologia FEBRASGO 2ª Ed*). Zero alucinação ou dados inventados.
- **Etapa C (Arquitetura & Roteiro Textual)**:
  - *Bloco 1*: Definição Operacional, Regra de Ouro e Epidemiologia.
  - *Bloco 2*: Fisiopatologia em 3 Etapas e Ponto-Chave funcional.
  - *Bloco 3*: Semiologia em 4 Eixos e Sinais de Alarme (*Red Flags* em vermelho).
  - *Bloco 4*: Escore Clínico Estruturado e Faixas de Pontuação.
  - *Bloco 5*: Algoritmo Decisório Sequencial em 3 Vias (Verde, Amarela, Vermelha).
  - *Bloco 6*: Prevenção Quaternária (*Choosing Wisely* / O que NÃO fazer).
  - *Bloco 7*: Profilaxia, Seguimento e Citação Formal de Rodapé.
  - **Atenção**: Submeter o plano textual completo para aprovação do usuário antes de iniciar a etapa gráfica.
- **Etapa D (Direção de Arte)**: Construção do layout com largura fixa de 1200px, fundo `#edf6f5` com textura de grid radial, tipografia `Plus Jakarta Sans` ampliada e cartões brancos com cantos arredondados suaves.
- **Etapa E (Renderização)**: Execução de Chromium headless (`--window-size=1200,6000 --virtual-time-budget=6000`), medição do bounding box de `.poster-container` e recorte via Python/Pillow na altura exata para gerar PNG nítido e otimizado em `imagens/`.
- **Etapa F (Integração)**: Conectar no webapp com alternador de visualização (`📊 Infográfico HD | 📐 Fluxograma SVG Clássico`), botões de Zoom (+, −, 100%), Expandir (Wide Mode no desktop) e download HD. No mobile, assegurar `max-height: none !important; overflow-y: visible !important;` para rolagem fluida.
- **Etapa G (Controle de Qualidade)**: Aplicação do checklist em 5 dimensões, teste em Chrome (Desktop 1440×900 e Mobile 390×844), bumping de versão em `sw.js` (PWA) e commit no Git.

Consulte o passo a passo operacional completo em [`infographic-workflow.md`](references/infographic-workflow.md).

---

## 4. Regras Mandatórias de Identidade Visual

As decisões visuais devem seguir os padrões consolidados em [`visual-style-guide.md`](references/visual-style-guide.md):

1. **Orientação Vertical (Retrato)**: Proporção vertical contínua para fácil leitura em smartphones. Pôsteres horizontais (16:9) não são permitidos para infográficos completos.
2. **Regra Anti-Letra Miúda**: Nenhum texto explicativo útil deve ter tamanho inferior a **15px** (na escala de 1200px de largura).
   - Título principal: 38px (peso 900).
   - Títulos de blocos: 26px (peso 900).
   - Títulos internos: 20px–21px (peso 800).
   - Textos de destaque: 22px (peso 700).
   - Corpo de texto e listas: 16.5px–17px (peso 600, entrelinha 1.45–1.50).
   - Tabelas e badges: 15.5px–16px (peso 700–900).
3. **Semiótica Cromática Funcional**:
   - **Verde (`#15803d` / fundo `#f0fdf4`)**: Manejo ambulatorial, segurança, conduta leve.
   - **Amarelo/Âmbar (`#b45309` / fundo `#fefce8`)**: Internação em enfermaria, observação, risco moderado.
   - **Vermelho (`#dc2626` / fundo `#fef2f2`)**: UTI, emergência, Red Flags, contraindicações (*Choosing Wisely*).
   - **Azul Primário (`#0284c7` / fundo `#e0f2fe`)**: Numeração de blocos, badges de diretriz, títulos executivos.
4. **Textura e Acabamento**: Fundo com padrão de pontos sutis (*dot grid*), iluminação difusa suave nos cantos, cartões brancos com sombras sutis de 1 ou 2 níveis e bordas arredondadas (*squircles*).

---

## 5. Controle de Qualidade em 5 Dimensões

Antes da entrega final, valide rigorosamente cada dimensão:

| Dimensão | O que Verificar | Critério de Aceite |
| :--- | :--- | :--- |
| **1. Conteúdo** | Fidelidade a tratados oficiais, dosagens exatas, ausência de dados inventados e ortografia impecável. | 100% de conformidade documental |
| **2. Arquitetura** | Sequência lógica (1 a 7), numeração ordinal, triagem em 3 vias e clareza da mensagem central. | Leitura vertical intuitiva |
| **3. Design** | Tipografia $\ge 15\text{px}$, contraste WCAG AAA, composição limpa estilo Apple/Microsoft Fluent. | Zero letras miúdas ou poluição |
| **4. Identidade** | Consistência com o guia de estilo, adaptação ao tema e incorporação dos feedbacks do usuário. | Visual editorial característico |
| **5. Entrega** | PNG nítido em 1200px, visualizador webapp funcional, ausência de nested scroll no mobile e PWA atualizado. | Testes em Desktop e Mobile aprovados |

Consulte o checklist detalhado em [`quality-checklist.md`](references/quality-checklist.md).

---

## 6. Documentos de Referência Complementares

Esta Skill inclui os seguintes guias de apoio:

1. [`visual-style-guide.md`](references/visual-style-guide.md): Tokens de design, paletas HEX, escala tipográfica, anatomia dos componentes visuais e anti-padrões gráficos.
2. [`infographic-workflow.md`](references/infographic-workflow.md): Procedimentos operacionais detalhados, scripts de automação Chromium/Pillow e regras de integração webapp/PWA.
3. [`quality-checklist.md`](references/quality-checklist.md): Lista de verificação em 5 dimensões aplicada antes da entrega de qualquer infográfico.

---

## 7. Cuidados Críticos & O Que Evitar

- ⚠️ **NUNCA gere a imagem visual antes de aprovar o roteiro textual com o usuário.**
- ⚠️ **NUNCA utilize diagramação horizontal (16:9) para infográficos completos.**
- ⚠️ **NUNCA utilize fontes miniaturizadas (10–12px) que exijam zoom forçado no celular.**
- ⚠️ **NUNCA permita caixas de rolagem interna aninhadas (`max-height: 85vh`) para infográficos no mobile.**
- ⚠️ **NUNCA sacrifique a precisão de doses, critérios clínicos ou fontes para "economizar espaço visual".**

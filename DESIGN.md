# DESIGN.md — Portfólio Bruna Rodrigues

Guia de identidade visual, componentes e comportamento para manter o portfólio e suas novas páginas consistentes.

Atualizado em 05/11/2026. Referência: código do repositório `jbrunarodriguesde/Portifolio`, especialmente `app/globals.css`, `app/page.tsx`, `app/lib-motion.ts` e `app/lib-glass.ts`.

## 1. Como usar este documento

Antes de criar uma tela, leia este guia e reutilize as classes e variáveis existentes. Os valores apresentados como **atuais** foram extraídos do código. As **diretrizes** orientam extensões e não significam que todos os componentes já existam.

Em caso de divergência entre este arquivo e o código, confirme a implementação desejada e atualize ambos na mesma alteração. Não crie uma segunda paleta ou biblioteca de componentes para uma nova seção.

Este documento descreve a identidade do portfólio. Projetos de clientes, como Vetra Studio, preservam a própria marca: verde, marfim e bronze da Vetra não substituem o turquesa e os neutros do portfólio.

## 2. Direção visual

A identidade combina uma base editorial com acabamento tecnológico:

- Fundos neutros, predominantemente escuros, com tema claro automático.
- Títulos grandes, pouco peso e espaçamento entre letras reduzido.
- Destaques pontuais em serifa itálica e turquesa.
- Superfícies de vidro translúcido, bordas finas e auroras difusas.
- Espaço generoso entre seções; conteúdo organizado por hierarquia.
- Botões arredondados, ícones lineares e movimentos suaves.
- Imagens reais das interfaces dos projetos para demonstrar o trabalho.

A assinatura é `br.`, com ponto de destaque e nome Bruna Rodrigues na navegação. Não recriar como logotipo de outra marca.

## 3. Cores e temas — valores atuais

Use variáveis semânticas em vez de repetir valores hexadecimais nos componentes.

| Token | Escuro | Claro | Uso |
| --- | --- | --- | --- |
| `--bg` | `#07090c` | `#f3f6f5` | Fundo principal |
| `--bg-2` | `#0d1116` | `#e9efee` | Faixas e áreas alternadas |
| `--panel` | `#11161c` | `#ffffff` | Cartões e painéis |
| `--text` | `#ecf2f1` | `#0d1718` | Texto principal |
| `--muted` | `#9aa6ab` | `#4f5e61` | Texto de apoio |
| `--soft` | `#6f7b80` | `#7a888b` | Metadados discretos |
| `--accent` | `#8bede9` | `#0f7c77` | Ação principal e destaque |
| `--accent-ink` | `#06201f` | `#ffffff` | Texto sobre destaque |
| `--line` | Branco 9% | `rgb(10 30 30 / .1)` | Divisórias |
| `--line-2` | Branco 16% | `rgb(10 30 30 / .18)` | Bordas mais visíveis |
| `--aurora-1` | `#2bd4c8` | `#5fe3d8` | Aurora turquesa |
| `--aurora-2` | `#7b6cff` | `#a99cff` | Aurora violeta |
| `--aurora-3` | `#ff8f6b` | `#ffb59c` | Aurora quente |
| `--glass-tint` | Branco 6% | Branco 42% | Superfície de vidro |
| `--glass-edge` | Branco 38% | Branco 90% | Reflexo da borda |
| `--glass-shadow` | Preto 45% | `rgb(20 50 50 / .16)` | Sombra do vidro |

O tema claro é ativado por `prefers-color-scheme: light`. O código atual não depende de seletor manual de tema.

**Diretrizes:** use auroras como decoração; não como fundo de textos longos. Não use `--soft` para informações indispensáveis sem verificar contraste. Estados de erro, sucesso e aviso ainda não possuem tokens globais dedicados: ao adicioná-los, defina versões para os dois temas e acompanhe a cor com texto ou ícone.

## 4. Tipografia — valores atuais

Fonte principal: **Manrope**, arquivo local `public/manrope.woff2`, pesos 200–800 e `font-display: swap`.

Fontes complementares:

- Serifa: `Georgia, 'Times New Roman', serif`.
- Monoespaçada: `ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace`.
- Corpo: `15px / 1.7`, Manrope com alternativas do sistema.
- Títulos: peso 500, `text-wrap: balance`.
- `.serif`: serifa, itálico, peso 400.
- `.label`: 10px, peso 650, entrelinha 1.4, tracking 2px.
- `.mono`: 10px / 1.4, tracking 1px.

| Elemento | Tamanho | Entrelinha | Tracking |
| --- | --- | --- | --- |
| Título principal `.hero-title` | `clamp(60px,10.6vw,170px)` | .88 | -.065em |
| Título de seção `.h2` | `clamp(38px,4.6vw,66px)` | 1.08 | -.045em |
| Título de benefício | `clamp(30px,3.2vw,46px)` | 1.05 | -.045em |
| Título de projeto `.h-info h3` | 38px; 30px no celular | 1.05 | -.045em |
| Descrição principal | 16px | 1.8 | Normal |
| Texto de apoio `.muted-p` | 14px | 1.9 | Normal |
| Botão `.button` | 12px, peso 700 | Herdada | Normal |

**Diretrizes:** um H1 por página. Use H2 para seções e H3 para cartões. A escala gigante pertence a páginas de apresentação; tabelas, formulários e calendários precisam de títulos menores e leitura objetiva. Recomenda-se 16px nos campos de formulário para evitar zoom involuntário em celulares.

## 5. Layout e espaçamento

Valores atuais:

- `.container`: largura máxima 1320px, centralizado.
- Recuo horizontal mínimo: 24px, respeitando safe areas.
- `.section`: 130px de espaço acima e abaixo.
- Em até 640px: seções principais com 84px de espaço vertical.
- Layout dividido `.split`: colunas .9fr / 1.1fr e intervalo de 64px.
- Cabeçalho fixo com conteúdo de até 1120px.
- Âncoras: `scroll-padding-top: 100px`.
- Botões em grupo: intervalo de 10px; cartões normalmente 12–28px.

**Escala recomendada para extensões:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 84 e 130px. Esta escala organiza valores existentes; não é um conjunto de tokens já implementado.

Use `minmax(0,1fr)` nas grades para permitir que conteúdos encolham. Evite larguras mínimas que causem rolagem horizontal na página.

## 6. Superfícies, bordas e vidro

| Componente | Raio atual |
| --- | --- |
| Botões, chips e navegação | 999px |
| Cartão de serviço | 20px |
| Cartão de problema | 22px |
| Painel de segmento e projeto horizontal | 26px |
| Contato | 34px; 26px no celular |
| Miniatura flutuante | 14px |
| Tags pequenas | 6px |

Bordas: geralmente 1px, com `--line` ou `--line-2`.

`.liquid` e `.liquid-card` usam blur de 16px, saturação de 180%, reflexo interno e sombra. A refração avançada é aplicada por `app/lib-glass.ts`; o componente `Glass` inicializa o efeito. Existe fallback para painel quase opaco quando backdrop-filter não é suportado.

**Diretrizes:** use vidro em navegação, chamadas e cartões selecionados. Prefira `--panel` em áreas densas de dados. Nenhuma funcionalidade pode depender de refração, blur ou animação.

## 7. Componentes reutilizáveis

### Botões e links

- `.button.primary`: ação principal, fundo de destaque e texto `--accent-ink`.
- `.button.glass-btn.liquid`: ação secundária com superfície de vidro.
- `.text-link`: ação contextual.
- Altura mínima atual de `.button`: 52px.
- Padding: 15px 24px; raio 999px; ícones de 17px.
- Hover principal: sobe 2px e aumenta brilho para 1.08.
- Pressionado: escala .98.
- Links externos usam `Ext`, nova aba, `noopener noreferrer` e aviso para leitores de tela.
- Use botão para ação e link para navegação.

### Navegação

Barra flutuante fixa, em cápsula, com assinatura, links e chamada principal. Em até 900px, os links internos são ocultados; em até 640px, o nome ao lado da assinatura também é ocultado.

**Diretriz:** manter acesso às seções importantes no conteúdo ou acrescentar menu móvel acessível caso a navegação cresça. Não acrescentar links até estourar a largura da barra.

### Cabeçalhos de seção

Combine rótulo curto, numeração discreta, H2 e descrição com até 52 caracteres de largura aproximada (`52ch`). Destaque apenas uma parte do título com `.serif.accent`.

### Cartões de projeto

Imagem de interface, título, categoria, descrição, tags e ação. A galeria usa cartões de duas colunas no desktop e uma coluna em telas menores. Imagens com enquadramento no topo para mostrar a interface.

### Outros trabalhos

Grade de três colunas, com divisórias de 1px. Todos os links usam padding uniforme de 20px 20px 22px, inclusive o primeiro cartão. A primeira coluna de cada linha não recebe borda esquerda. Em até 900px, usar uma coluna e padding horizontal zero.

Esta regra evita repetir o desalinhamento que afetou o EduCash.

### Gestão de clientes

Seção `#gestao-clientes`, com:

1. Cabeçalho explicando o benefício.
2. Cartão do cliente com acesso ao agendamento.
3. Cartão da empresa com acesso ao painel.
4. Recursos: calendário, clientes, cancelamentos e acompanhamento.
5. Instruções para testar a demonstração e seus limites.
6. Chamada para orçamento.

Classes: `.client-management`, `.management-grid`, `.management-card`, `.management-features` e `.management-note`.

A demonstração Vetra abre em outra página e mantém a marca Vetra. Não apresentar armazenamento local como sincronização real entre dispositivos.

### Formulários, tabelas e calendários — diretrizes de extensão

- Rótulo visível em cada campo; placeholder serve somente como exemplo.
- Estados: padrão, foco, preenchido, inválido, desabilitado e envio em andamento.
- Erro junto ao campo e mensagem clara de como corrigir.
- Confirmações com texto, dados da operação e próximo passo.
- Datas em dd/mm/aaaa; moeda em BRL; fuso informado em agendamentos.
- Calendário com nome do mês, anterior/próximo, dia selecionado e quantidade de reservas.
- Diferenciar disponível, selecionado e indisponível com texto ou forma além da cor.
- Tabelas podem ter rolagem dentro do componente; não na página inteira.
- No celular, transformar registros em cartões quando isso preservar melhor a leitura.
- Cancelamento deve pedir confirmação e atualizar o estado da reserva.
- Carregamento, vazio e erro precisam ter mensagens específicas.

## 8. Ícones e imagens

Ícones atuais são SVG lineares, normalmente 15–18px, com `currentColor`. A seta diagonal indica saída ou acesso ao projeto; a horizontal pode indicar continuidade.

Imagens do portfólio ficam em `public/projetos`, majoritariamente WebP. Usar dimensões ou proporção reservada para reduzir deslocamentos. Texto alternativo descreve o conteúdo útil; decoração recebe alt vazio ou aria-hidden.

As cores dentro de uma captura pertencem ao projeto exibido, não à paleta do portfólio.

## 9. Movimento e interação

Implementação atual: GSAP, ScrollTrigger, SplitText e Lenis, inicializados por `Motion`.

- Conteúdo nasce visível; JavaScript aplica os estados de entrada.
- Lenis: `lerp: 0.11`, `wheelMultiplier: 1`.
- Âncoras animadas: duração .8s, deslocamento -90px.
- Entradas principais: em geral .8–1s, com easing `expo.out`.
- Hover e feedback: em geral .2–.25s.
- Auroras, lente e cursor acompanham ponteiro fino.
- Galeria pode usar rolagem horizontal controlada em telas largas.
- `prefers-reduced-motion: reduce` desliga animações e transições.
- A lente é ocultada em telas menores e com movimento reduzido.

**Diretrizes:** reservar efeitos mais expressivos à apresentação. Em formulários e painéis, priorizar resposta rápida, foco estável e ações previsíveis. Não esconder conteúdo permanentemente se a animação falhar.

## 10. Responsividade

| Limite atual | Adaptação principal |
| --- | --- |
| Até 1100px | Serviços em duas colunas; navegação mais compacta |
| Até 900px | Oculta links da navegação; layouts divididos em uma coluna; lente oculta |
| Até 640px | Seções mais compactas; grades principais em uma coluna; botões de chamada com largura total |
| Gestão até 900px | Recursos em duas colunas |
| Gestão até 600px | Cartões e recursos em uma coluna |

**Validação recomendada:** 320, 375, 390, 768, 1024 e 1440px, além de zoom de 200%. Esses tamanhos são alvos de teste, não novos breakpoints obrigatórios.

Verifique títulos longos, navegação, botões, campos de data, diálogos, teclado virtual e nomes de clientes extensos. Conteúdo não pode ficar encoberto pela navegação fixa ou pelo botão flutuante de WhatsApp.

## 11. Acessibilidade

O código atual possui link de pular para conteúdo, foco visível, classes para leitores de tela e suporte a movimento reduzido.

**Critérios para novas entregas:**

- Todas as ações utilizáveis por teclado, com ordem de foco coerente.
- Foco visível: contorno de 2px em `--accent`, offset 4px.
- Contraste mínimo recomendado de 4.5:1 para texto comum e 3:1 para texto grande.
- Não presumir conformidade apenas por usar a paleta: verificar cada combinação.
- Área de toque recomendada de pelo menos 44 × 44px.
- Ícones sem texto precisam de nome acessível.
- Mensagens dinâmicas importantes com aria-live ou role apropriado.
- Diálogos com título, foco inicial, fechamento e retorno do foco.
- Não usar apenas cor para transmitir status.

## 12. Conteúdo e voz

Português brasileiro, direto, próximo e concreto. Mostrar o benefício e uma ação clara.

Exemplos: “Fazer um agendamento”, “Abrir painel de gestão”, “Pedir orçamento”.

Usar descrições curtas, instruções específicas e informações reais. Diferenciar recurso implementado, demonstração e integração futura. Evitar prometer notificações, pagamento, banco ou autenticação se não estiverem operacionais.

## 13. Exemplo de nova seção

```tsx
<section className="container section" aria-labelledby="titulo-nova-secao">
  <p className="label">
    <span className="label-n">01 /</span> SEU PRÓXIMO PASSO
  </p>
  <h2 id="titulo-nova-secao" className="h2">
    Um título claro.<br />
    <span className="serif accent">Um destaque com intenção.</span>
  </h2>
  <p className="muted-p">Explique o benefício em uma frase objetiva.</p>
  <div className="hero-actions">
    <a className="button primary" href="#pedido">Pedir orçamento</a>
  </div>
</section>
```

Para links externos, reutilize o padrão `Ext` de `app/page.tsx`. Ele é local a esse arquivo; extraia um componente compartilhado antes de importá-lo em outras páginas.

## 14. Organização e manutenção

| Arquivo | Responsabilidade |
| --- | --- |
| `app/globals.css` | Tokens, temas, componentes e breakpoints |
| `app/page.tsx` | Composição da página, cabeçalhos e ações |
| `app/content.ts` | Textos, dados de projetos e contatos |
| `app/layout.tsx` | Fonte de estilos globais, metadados e estrutura |
| `app/lib-motion.ts` | Animação e rolagem |
| `app/lib-glass.ts` | Refração e efeitos de vidro |
| `public/manrope.woff2` | Fonte principal local |
| `public/projetos/` | Capturas dos projetos |
| `DESIGN.md` | Contrato visual e orientações de evolução |

Alguns textos da seção de gestão estão diretamente em `app/page.tsx`; não assumir que todo texto já esteja centralizado em `app/content.ts`.

Ao criar tokens novos, prefira nomes semânticos e defina os dois temas. Ao modificar um componente, revise suas variantes móveis, foco, hover e estado desabilitado. Atualize este guia quando uma decisão visual mudar.

## 15. Checklist de entrega

- [ ] Reutiliza paleta, fontes, componentes e escala deste documento.
- [ ] Mantém hierarquia de títulos e uma ação principal reconhecível.
- [ ] Funciona nos temas claro e escuro.
- [ ] Não causa rolagem horizontal indevida.
- [ ] Mantém padding e alinhamento uniformes entre cartões.
- [ ] Funciona com teclado, foco visível e movimento reduzido.
- [ ] Apresenta estados vazio, erro, carregando e sucesso quando aplicáveis.
- [ ] Usa imagens adequadas e conteúdo honesto sobre demonstrações.
- [ ] Verifica tipos e compilação quando houver alteração de código.
- [ ] Atualiza DESIGN.md quando houver mudança de padrão.

## 16. Instrução reutilizável para próximos trabalhos

> Use DESIGN.md como referência visual deste projeto. Reutilize a paleta semântica com temas claro e escuro, Manrope, serifa itálica nos destaques, contêiner de 1320px, botões em cápsula e componentes existentes. Preserve a responsividade, a navegação por teclado e o suporte a movimento reduzido. Efeitos de vidro e aurora são opcionais e não podem prejudicar a leitura. Para páginas de dados, priorize clareza e densidade adequada. Não altere a marca de um projeto de cliente para copiar a identidade do portfólio.

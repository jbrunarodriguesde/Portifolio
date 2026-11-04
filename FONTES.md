# Fontes e limites do conteúdo

Consulta: 03/11/2026. Dados pessoais e canais: fornecidos pela titular.
Os dois perfis públicos foram acessados pela API pública do GitHub, pois o conector exigiu reautenticação. Nenhum projeto privado foi consultado.

## Projeto em destaque: Ovo di Onça
Fonte: https://github.com/ovodioncadev-ux/sitegestao
- README.md, package.json, apps/gestao/src/app/page.tsx e packages/database/src/acesso.ts.
- Árvores apps/gestao, apps/assinante e apps/site: páginas e ações de clientes, assinaturas, entregas, faturas e configuração.
- packages/database/migrations e packages/database/tests: autenticação, políticas de acesso e testes SQL.
- O README descreve uma fase anterior à árvore atual. Não foi apresentado como uma confirmação de estado de produção.
- Não foram executados os testes do projeto original nem validadas suas conexões ao banco. O portfólio afirma a presença dos recursos no código.
- Diagrama do portfólio: ilustrativo, com conexões conceituais fundamentadas na estrutura do repositório.
- ovodionca.webp: captura real do site oficial https://ovodionca.com.br (03/11/2026), usada no hero. Página de receitas: https://ovodionca.com.br/Receitas.html.
- gestao-reference.webp: imagem versionada em Interface Stitch/02_sistema_de_gest_o_painel_operacional/screen.png. É uma referência de design, contém dados ilustrativos e elementos que não representam garantia do escopo implementado.

## FindOfertas
Fonte: https://github.com/jbrunarodriguesde/FindOfertas
- package.json: React, TypeScript, Tailwind e Vite.
- src/utils/effectivePriceCalculator.ts: preço, frete, descontos, cashback e pontos.
- src/services/productService.ts: catálogo mockado.
- src/App.tsx: páginas e controle de acesso.
- Demonstração: https://find-ofertas.vercel.app — HTTP 200. Captura real da tela pública de login. Nenhuma conta criada. Não foram validados alertas externos, atualização automática de preços ou resultados financeiros.

## V. A. Rodrigues
Fonte: https://github.com/jbrunarodriguesde/varodrigues
- README.md e package.json: React, Vite, Tailwind CSS e Framer Motion; seis linhas de serviço; formulário de orçamento que abre o WhatsApp; configuração centralizada.
- Sem demonstração publicada. A prévia do portfólio é tipográfica e identificada como ilustrativa.

## Landing pages locais
Fontes: LPbarbearia, LPodontologiaProf e LPbuffetInfantil (github.com/jbrunarodriguesde).
- README de LPodontologiaProf: menu responsivo, IntersectionObserver, lightbox, lazy loading, Open Graph e Schema.org.
- Demonstrações abertas em 03/11/2026: l-pbarbearia, l-podontologia-prof e l-pbuffet-infantil (.vercel.app). Captura real da página de barbearia.
- São modelos com dados de exemplo ("[Cidade]"); não se atribuem clientes reais.

## Seleção
Versão unificada: junta os projetos dos dois portfólios. Por decisão da titular, BuffetLorena e CorretoraImoveis (Jacqueline Almeida) foram retirados. O site OvoDiOnca0826 entrou junto ao projeto principal, como a demonstração publicada do Ovo di Onça. Repositórios sem código relevante disponível não foram promovidos como projetos completos.

## Referências visuais
Lapa Ninja, Land-book, SiteInspire, One Page Love e Httpster foram consultados como galerias de composição e hierarquia. Awwwards não respondeu dentro do prazo; Godly redirecionou para um endereço indisponível. Não foram copiados layouts ou elementos de marca.

## Canais
E-mail e ambos os perfis GitHub: fornecidos pela titular. LinkedIn foi mantido conforme informado; a tentativa automática recebeu HTTP 999, portanto o perfil não pôde ser validado automaticamente.

## Campos opcionais
Em app/content.ts, profile.availability está vazio para edição. Formação e TCC vêm de informações da titular.


## Versão atual (04/11/2026)
- Design do portfólio original (vidro, tipografia grande, detalhes em serifa) com nova paleta água-marinha/petróleo.
- Sem menção à Kroma, por decisão da titular.
- Textos de serviços, etapas e dúvidas: escritos com base nas informações da titular (prazo médio de landing page de 7 a 15 dias úteis).
- Capturas reais (04/11/2026): ovodionca.com.br, find-ofertas, second-brain-lovat-psi, l-pbarbearia, l-pbuffet-infantil, l-podontologia-prof e l-podontologia (.vercel.app).
- Fora do site: Corretora de Imóveis e Lorena Buffet (decisão da titular); varodrigues.vercel.app (404 em 04/11/2026); trabalho-maf-213-7460-7461 (não abriu); ovo-di-onca0826 (versão antiga do site oficial).
- Provas sociais: apenas números contados dos projetos publicados. Nenhum depoimento foi inventado; a lista `testimonials` está vazia até a titular incluir depoimentos reais.


## Regras de venda aplicadas (04/11/2026)
Lidas na pasta "05 - Projetos" da titular:
- `BuffetLorena/promptCriação.md`, `BuffetLorena/design.md`, `BuffetLorena/ENTREGA_E_PROPOSTA.md`, `BuffetNatalia/design.md`: conversão principal pelo WhatsApp em pontos estratégicos; o visitante nunca fica sem próximo passo; não inventar números, depoimentos ou clientes; mobile first (visitantes vindos do Instagram); imagens reais em destaque; "comercial sem parecer agressivo"; jornada em 3 passos; formulário de briefing ligado ao WhatsApp (próxima evolução sugerida na entrega da Lorena).
- Planilha "Lojas que não possuem site": público-alvo (barbearias, pet shops, odontologia, salões/estética, buffets da região que só usam Instagram/Facebook/Linktree com WhatsApp). Base da seção "O problema" e dos segmentos.
- `Proposta de orçamento - 008-2025.docx`: etapas do serviço (planejamento/UX, front-end responsivo e SEO, implantação e domínio, ajustes pós-lançamento, manual de uso). Base da seção "O que está incluso". Dados pessoais e valores da proposta não foram usados no site.
- Cidades atendidas: informadas pela titular (campanha de prospecção em MG).

## Vértice (loja virtual)
- Fonte: código do projeto em "05 - Projetos/vertice" (README.md, BACKEND.md, DESIGN.md, lib/catalog.ts).
- Foto: captura da página inicial rodando localmente a partir desse código (public/projetos/vertice.webp).
- A publicação no ChatGPT Sites é privada e o repositório no GitHub também; por isso o card usa "Pedir demonstração" pelo WhatsApp.
- Layout inspirado em Loja Virtual, de Ryan Menezes (MIT), conforme LICENSE.reference do projeto.

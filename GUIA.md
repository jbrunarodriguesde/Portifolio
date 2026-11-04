# Portfólio — Bruna Rodrigues de Jesus

Portfólio e página de vendas de serviços (sites, landing pages e sistemas web).
Next.js + TypeScript, exportado como site estático (pasta `out/`).

## Organização (jornada de venda)
1. **Topo**: promessa ("Seu site, pronto para vender.") para quem já tem Instagram; botões "Quero meu site" e "Ver um exemplo do meu ramo".
2. **01 O problema**: só Instagram e Linktree não fecham a venda.
3. **02 A solução**: o que um bom site faz pelo negócio.
4. **03 Qual é o seu negócio?**: o visitante escolhe o segmento e vê um modelo publicado.
5. **04 O que está incluso**: as etapas do serviço, com chamada para orçamento.
6. **05 Projetos**: galeria horizontal com sites no ar.
7. **06 Resultados**: números dos projetos e depoimentos (quando houver).
8. **07 Como funciona**: três passos.
9. **08 Pedir orçamento**: briefing em 4 perguntas que abre o WhatsApp com a mensagem pronta + cidades atendidas.
10. **09 Quem faz**, **10 Dúvidas** e chamada final.

## Atualizar
- Todo o conteúdo: `app/content.ts` (textos, projetos, segmentos, itens inclusos, cidades, WhatsApp, dúvidas).
- **Depoimentos**: preencha `testimonials` em `app/content.ts` com depoimentos reais e autorizados.
- Imagens: `public/projetos/`. Imagem de compartilhamento: `public/og.png`.
- Cores: `app/globals.css` (`--accent` no topo para o modo escuro; bloco `prefers-color-scheme: light` para o claro).
- Título e descrição para Google e WhatsApp: `app/layout.tsx` (confira o `origin`).

## Rodar
    npm ci
    npm run dev
    npm run build

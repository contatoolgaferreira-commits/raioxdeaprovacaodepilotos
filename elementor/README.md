# Piloto Preparado — página Elementor

`piloto-preparado-elementor.json` é o template da página de vendas com o novo design e as animações.

## Como importar
1. WordPress → **Templates → Modelos salvos → Importar modelos** → envie o `.json`.
2. Abra a página no Elementor → ícone de pasta (Adicionar template) → **Meus templates** → **Inserir**.
3. Publique e confira a página em uma aba anônima. As animações só rodam na página publicada; no editor tudo aparece estático.

## Como funciona
- O primeiro bloco, **"00 — Estilos e animações (não apagar)"**, tem um widget HTML com todo o CSS e o JS da página. Ele fica invisível no site.
- Os efeitos são ligados por classes em *Avançado → Classes CSS*:
  - `pp-reveal`: o bloco aparece suavemente ao rolar.
  - `pp-stagger`: os itens (bullets, cards, perguntas) entram em sequência.
  - `pp-title`: título com o traço amarelo animado.
  - `pp-card`: card com elevação e barra amarela no hover.
  - `pp-cta`: botão amarelo com brilho, pulso e seta.
  - `pp-grid pp-grid-2` / `pp-grid-3`: grade de cards em 2 ou 3 colunas (1 no celular).
- A barra de CTA fixa no rodapé aparece quando nenhum botão de compra está visível e some na seção de oferta (`#checkout`).
- A barra de progresso amarela no topo mostra quanto da página já foi lido.
- Quem usa a opção "reduzir movimento" no sistema vê a página sem as animações.

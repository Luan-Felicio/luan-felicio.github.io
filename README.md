# Portfólio — Luan Felicio

Base estática em HTML, CSS e JavaScript, sem instalação, bibliotecas ou build.

## Começar

Extraia o ZIP e abra `index.html` no navegador. No VS Code, também pode usar Live Server.

## Organização

- `index.html`: Início.
- `pages/sobre.html`: Sobre mim.
- `pages/projetos.html`: Projetos.
- `pages/tecnologias.html`: Tecnologias.
- `pages/contato.html`: Contato.
- `assets/css/style.css`: layout, cores, transparência e responsividade.
- `assets/js/config.js`: seus links de GitHub, LinkedIn e e-mail.
- `assets/js/main.js`: menu mobile, contatos e ano automático.
- `assets/img/avatar.svg`: avatar provisório LF.
- `.nojekyll`: mantém o projeto como arquivos estáticos no GitHub Pages.

## Colocar seu conteúdo

Cada HTML tem um `<main id="conteudo">` vazio com um comentário indicando onde trabalhar. Coloque seus títulos, seções e cards ali. Os links entre as cinco páginas já funcionam.

O cabeçalho e o rodapé estão escritos em cada HTML, permitindo abrir as páginas diretamente sem servidor. Ao alterar nome, menu ou avatar, repita a alteração nas cinco páginas. O CSS e JavaScript são compartilhados.

## Foto e contatos

Coloque sua foto em `assets/img/` e troque `assets/img/avatar.svg` no elemento de classe `avatar` das cinco páginas pelo caminho da foto. A imagem é decorativa ao lado do nome, portanto o `alt` vazio evita leitura repetida.

Preencha `assets/js/config.js` com seus endereços reais. Os contatos ficam ocultos enquanto não forem preenchidos, evitando links fictícios. A navegação principal funciona mesmo sem JavaScript.

## Personalização

As variáveis no início do CSS controlam as cores, largura máxima e arredondamento. O fundo usa gradientes CSS, sem imagens pesadas. A fonte é local: usa Inter se estiver instalada, depois Segoe UI ou Arial.

O rodapé ocupa o final da tela quando há pouco conteúdo e acompanha o final da página conforme ela cresce. Não fica sobreposto ao conteúdo. No celular, o menu pode ser expandido com o botão Menu. Escape fecha o menu.

## Publicar no GitHub Pages

Envie o conteúdo desta pasta para a raiz do repositório, mantendo `index.html` na raiz. Em Settings → Pages, use a publicação pela branch e selecione a pasta raiz. Os caminhos relativos funcionam tanto em domínio próprio como em endereço com nome de repositório. Não há backend nem Node.js em produção.

Antes de publicar, preencha seus contatos e personalize o título e a meta description de cada página. Esta base não inclui integração com API do GitHub ou conteúdo de projetos, pois o centro foi deixado para edição manual.

## Correções desta versão

As páginas internas ficam em `pages/`; a página inicial permanece na raiz, como exigido pelo GitHub Pages. CSS, JavaScript e imagens ficam em `assets/`. As pastas vazias e duplicadas `html/`, `css/` e `js/` foram removidas. Todos os caminhos de navegação, scripts, estilos e avatar foram ajustados.

O botão Menu e o ícone aparecem somente em telas de até 640 px, com JavaScript habilitado. Acima desse limite os links ficam visíveis e o botão oculto. Ao atravessar esse limite, o menu fecha e seu estado acessível é atualizado. Sem JavaScript, os links continuam acessíveis em todas as telas.

Para atualizar um repositório existente, substitua os arquivos do site e remova as antigas páginas internas da raiz e as pastas vazias citadas acima. Preserve a pasta `.git` do seu repositório; o ZIP de entrega contém apenas o código-fonte do site.

# Personagens - Rick and Morty

Aplicação em JavaScript puro (Vanilla JS) que consome a API pública do Rick and Morty, permitindo listar, buscar e favoritar personagens. Desenvolvida como teste técnico para a vaga de Desenvolvedor Junior na Vobys.

## Como executar

Não é necessário instalar nada. Basta:

1. Clonar ou baixar este repositório.
2. Abrir o arquivo `index.html` no navegador (duplo clique já funciona).

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript (Vanilla JS, sem frameworks)
- Fetch API para consumo da API
- localStorage para persistência dos favoritos

## Funcionalidades

- Listagem de personagens com nome, imagem, espécie e status
- Busca de personagens por nome em tempo real
- Marcar e desmarcar personagens como favoritos
- Visualizar apenas os favoritos
- Persistência dos favoritos ao recarregar ou reabrir a página
- Feedback visual de carregamento
- Mensagem amigável em caso de falha na API

## Decisões importantes

- **Vanilla JS:** optei por JavaScript puro para manter a solução simples, transparente e sem dependências, já que o escopo do desafio não exigia um framework.
- **localStorage para persistência:** como é uma aplicação frontend sem backend, usei o localStorage para manter os favoritos entre sessões, serializando a lista de ids com JSON.
- **Lista completa guardada em memória:** mantive todos os personagens em uma variável para que a busca e o filtro de favoritos funcionem sem novas chamadas à API a cada interação.
- **Reaproveitamento da função de renderização:** uma única função `mostrarPersonagens` desenha a lista em todos os cenários (todos, busca, favoritos), evitando código duplicado.

## O que eu melhoraria com mais tempo

- Adicionar paginação para carregar mais personagens além dos 20 iniciais.
- Incluir filtro por status (vivo, morto, desconhecido).
- Melhorar o layout e a responsividade com mais capricho visual.
- Adicionar testes automatizados.
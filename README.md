# Personagens - Rick and Morty

Aplicação em JavaScript puro (Vanilla JS) que consome a API pública do Rick and Morty, permitindo listar, buscar, filtrar e favoritar personagens. Desenvolvida como teste técnico para a vaga de Desenvolvedor Junior na Vobys.

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
- Filtro de personagens por status (vivo, morto, desconhecido)
- Marcar e desmarcar personagens como favoritos
- Visualizar apenas os favoritos
- Persistência dos favoritos ao recarregar ou reabrir a página
- Paginação com botão "Carregar mais", que some ao chegar na última página
- Carregamento das imagens sob demanda (lazy loading) para uma navegação mais fluida
- Feedback visual de carregamento
- Tratamento de erros, incluindo verificação do status da resposta HTTP

## Decisões importantes

- **Vanilla JS:** optei por JavaScript puro para manter a solução simples, transparente e sem dependências, já que o escopo do desafio não exigia um framework.
- **localStorage para persistência:** como é uma aplicação frontend sem backend, usei o localStorage para manter os favoritos entre sessões, serializando a lista de ids com JSON.
- **Lista completa guardada em memória:** mantenho todos os personagens carregados em uma variável para que a busca e os filtros funcionem sem novas chamadas à API a cada interação.
- **Reaproveitamento da função de renderização:** uma única função `mostrarPersonagens` desenha a lista em todos os cenários (todos, busca, filtro, favoritos), evitando código duplicado.
- **Paginação incremental:** o botão "Carregar mais" busca a próxima página e acrescenta os resultados à lista existente. Uso o campo `info.pages` da resposta para saber quando não há mais páginas e esconder o botão.
- **Verificação da resposta HTTP:** como o `fetch` não lança erro automaticamente para respostas com status de erro (como 404 ou 429), verifico `resposta.ok` e trato esses casos explicitamente.
- **Lazy loading das imagens:** as imagens usam `loading="lazy"` para carregar apenas quando estão prestes a aparecer na tela, deixando a navegação mais fluida.

## O que eu melhoraria com mais tempo

- Fazer a busca por nome direto na API (via `?name=`), para encontrar qualquer personagem, e não apenas os já carregados.
- Unificar busca, filtro e favoritos em um único estado, para que possam ser combinados entre si.
- Substituir o `alert` por uma mensagem de erro integrada ao layout.
- Adicionar indicador de carregamento também no botão "Carregar mais".
- Melhorar aspectos de qualidade e acessibilidade (evitar `innerHTML +=`, substituir `onclick` inline por event listeners).
- Adicionar testes automatizados.
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
- Paginação com botão "Carregar mais"
- Feedback visual de carregamento
- Tratamento de erros, incluindo limite de requisições da API (rate limit)

## Decisões importantes

- **Vanilla JS:** optei por JavaScript puro para manter a solução simples, transparente e sem dependências, já que o escopo do desafio não exigia um framework.
- **localStorage para persistência:** como é uma aplicação frontend sem backend, usei o localStorage para manter os favoritos entre sessões, serializando a lista de ids com JSON.
- **Lista completa guardada em memória:** mantenho todos os personagens carregados em uma variável para que a busca e os filtros funcionem sem novas chamadas à API a cada interação.
- **Reaproveitamento da função de renderização:** uma única função `mostrarPersonagens` desenha a lista em todos os cenários (todos, busca, filtro, favoritos), evitando código duplicado.
- **Paginação incremental:** o botão "Carregar mais" busca a próxima página e acrescenta os resultados à lista existente, em vez de substituí-la.
- **Tratamento de rate limit:** a API retorna erro 429 quando há muitas requisições em pouco tempo. Nesse caso, exibo um aviso ao usuário e reverto o contador de página, evitando pular conteúdo.

## O que eu melhoraria com mais tempo

- Substituir o `alert` por uma mensagem de erro integrada ao layout.
- Melhorar ainda mais a responsividade e os detalhes visuais.
- Adicionar testes automatizados.
- Desabilitar o botão "Carregar mais" ao chegar na última página.
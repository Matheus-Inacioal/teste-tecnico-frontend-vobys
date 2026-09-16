let todosPersonagens = [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let paginaAtual = 1;

async function buscarPersonagens(pagina = 1) {
  const lista = document.getElementById("lista");

  if (pagina === 1) {
    lista.innerHTML = "<p>Carregando personagens...</p>";
  }

  try {
    const resposta = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
    const dados = await resposta.json();

    if (pagina === 1) {
      todosPersonagens = dados.results;
    } else {
      todosPersonagens = todosPersonagens.concat(dados.results);
    }

    mostrarPersonagens(todosPersonagens);
  } catch (erro) {
    if (pagina === 1) {
      lista.innerHTML = "<p>Ops! Não foi possível carregar os personagens. Tente novamente mais tarde.</p>";
    } else {
      alert("Muitas requisições em pouco tempo. Aguarde alguns segundos e tente novamente.");
      paginaAtual = paginaAtual - 1;
    }
  }
}

function mostrarPersonagens(personagens) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  personagens.forEach((personagem) => {
    const ehFavorito = favoritos.includes(personagem.id);

    lista.innerHTML += `
      <div class="card ${ehFavorito ? "favorito" : ""}">
        <img src="${personagem.image}" alt="${personagem.name}">
        <h3>${personagem.name}</h3>
        <p>Espécie: ${personagem.species}</p>
        <p>Status: ${personagem.status}</p>
        <button onclick="alternarFavorito(${personagem.id})">
          ${ehFavorito ? "★ Favorito" : "☆ Favoritar"}
        </button>
      </div>
    `;
  });
}

function alternarFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((favId) => favId !== id);
  } else {
    favoritos.push(id);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  mostrarPersonagens(todosPersonagens);
}

function mostrarSoFavoritos() {
  const listaFavoritos = todosPersonagens.filter((personagem) =>
    favoritos.includes(personagem.id)
  );
  mostrarPersonagens(listaFavoritos);
}

function mostrarTodos() {
  mostrarPersonagens(todosPersonagens);
}

function filtrarPorStatus() {
  const statusEscolhido = document.getElementById("filtroStatus").value;

  if (statusEscolhido === "todos") {
    mostrarPersonagens(todosPersonagens);
  } else {
    const filtrados = todosPersonagens.filter((personagem) => {
      return personagem.status === statusEscolhido;
    });
    mostrarPersonagens(filtrados);
  }
}

function carregarMais() {
  paginaAtual = paginaAtual + 1;
  buscarPersonagens(paginaAtual);
}

const campoBusca = document.getElementById("busca");

campoBusca.addEventListener("input", () => {
  const termo = campoBusca.value.toLowerCase();

  const filtrados = todosPersonagens.filter((personagem) => {
    return personagem.name.toLowerCase().includes(termo);
  });

  mostrarPersonagens(filtrados);
});

buscarPersonagens();
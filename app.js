let todosPersonagens = [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

async function buscarPersonagens() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "<p>Carregando personagens...</p>"; // feedback de loading

  try {
    const resposta = await fetch("https://rickandmortyapi.com/api/character");
    const dados = await resposta.json();
    todosPersonagens = dados.results;
    mostrarPersonagens(todosPersonagens);
  } catch (erro) {
    lista.innerHTML =
      "<p>Ops! Não foi possível carregar os personagens. Tente novamente mais tarde.</p>";
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

const campoBusca = document.getElementById("busca");

campoBusca.addEventListener("input", () => {
  const termo = campoBusca.value.toLowerCase();

  const filtrados = todosPersonagens.filter((personagem) => {
    return personagem.name.toLowerCase().includes(termo);
  });

  mostrarPersonagens(filtrados);
});

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

buscarPersonagens();
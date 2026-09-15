let todosPersonagens = [];

async function buscarPersonagens() {
  try {
    const resposta = await fetch("https://rickandmortyapi.com/api/character");
    const dados = await resposta.json();
    todosPersonagens = dados.results;
    mostrarPersonagens(todosPersonagens);
  } catch (erro) {
    console.log("Deu ruim:", erro);
  }
}

function mostrarPersonagens(personagens) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  personagens.forEach((personagem) => {
    lista.innerHTML += `
      <div class="card">
        <img src="${personagem.image}" alt="${personagem.name}">
        <h3>${personagem.name}</h3>
        <p>Espécie: ${personagem.species}</p>
        <p>Status: ${personagem.status}</p>
      </div>
    `;
  });
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
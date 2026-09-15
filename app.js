async function buscarPersonagens() {
  try {
    const resposta = await fetch("https://rickandmortyapi.com/api/character");
    const dados = await resposta.json();
    mostrarPersonagens(dados.results);
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

buscarPersonagens();
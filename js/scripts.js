// IIFE that wraps the pokemonList

let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Harmander', height: 0.6, types: ['monster', 'dragon'] },
    { name: 'Squirtle', height: 0.5, types: ['monster', 'water'] },
    { name: 'Beedrill', height: 1, types: ['bug'] },
    { name: 'Raticate', height: 0.7, types: ['field'] },
    { name: 'Nidoking', height: 1.4, types: ['monster', 'field'] },
  ];

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function addListItem(pokemon) {
    let pokemonContainer = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemonBtn');
    listItem.appendChild(button);
    pokemonContainer.appendChild(listItem);

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }
  //function that displays the pokemom name
  function showDetails(pokemon) {
    console.log(pokemon.name);
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

pokemonRepository.add({ name: 'Hypno', height: 1.6, types: ['Human-like'] });
// for each loop that displays the pokemons
pokemonRepository.getAll().forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});

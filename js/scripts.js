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
  return {
    getAll: getAll,
    add: add,
  };
})();

pokemonRepository.add({ name: 'Hypno', height: 1.6, types: ['Human-like'] });
// for each loop that displays the pokemons
pokemonRepository.getAll().forEach((pokemon) => {
  document.write(
    `<p><b>Name</b>:${pokemon.name}  <b>Type:</b>${pokemon.types} <b>height:</b> ${pokemon.height}</p>`
  );
});

// trying to be adventurous ......filters greater than 0.7 Pokemons and writes in the console
const result = pokemonRepository
  .getAll()
  .filter((pokemon) => pokemon.name === 'Beedrill');
console.log(result);

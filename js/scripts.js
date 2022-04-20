// creates a new variable pokemonList with objects in the array
let pokemonList = [
  { name: 'Harmander', height: 0.6, types: ['monster', 'dragon'] },
  { name: 'Squirtle', height: 0.5, types: ['monster', 'water'] },
  { name: 'Beedrill', height: 1, types: ['bug'] },
  { name: 'Raticate', height: 0.7, types: ['field'] },
  { name: 'Nidoking', height: 1.4, types: ['monster', 'field'] },
];
// the foreach loop iterates over each item in the pokemonList
pokemonList.forEach((pokemon) => {
  document.write(
    `<p><b>Name</b>:${pokemon.name}  <b>Type:</b>${pokemon.types} <b>height:</b> ${pokemon.height}</p>`
  );
});

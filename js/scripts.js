// creates a new variable pokemonList with objects in the array
let pokemonList = [
  { name: 'Harmander', height: 0.6, types: ['monster', 'dragon'] },
  { name: 'Squirtle', height: 0.5, types: ['monster', 'water'] },
  { name: 'Beedrill', height: 1, types: ['bug'] },
  { name: 'Raticate', height: 0.7, types: ['field'] },
  { name: 'Nidoking', height: 1.4, types: ['monster', 'field'] },
];
// the for loop iterates over each item in the pokemonList
for (let i = 0; i < pokemonList.length; i++) {
  //Condition that checks if the height is greater than 1
  if (pokemonList[i].height > 1) {
    document.write(
      `${pokemonList[i].name} (height:${pokemonList[i].height}) Wow, that\'s big!<br> `
    );
  } else {
    document.write(
      `${pokemonList[i].name} (height:${pokemonList[i].height})<br> `
    );
  }
}

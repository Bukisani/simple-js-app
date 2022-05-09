// IIFE that wraps the pokemonList

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function addListItem(pokemon) {
    let pokemonContainer = $('.pokemon-list');
    let listItem = $('<div></div>');

    let button = $(
      '<button type="button" class="btn " data-toggle="modal" data-target="#exampleModal"></button>'
    );
    button.append(pokemon.name);
    button.addClass('pokemonBtn');
    listItem.append(button);
    listItem.addClass('group-list-item');
    pokemonContainer.append(listItem);

    button.on('click', function (event) {
      showDetails(pokemon);
    });
  }

  //function for creating a modal
  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');

    //clear existing content of the model

    modalTitle.empty();
    modalBody.empty();

    //creating element for name in modal content
    let nameElement = $('<h1>' + pokemon.name + '</h1>');

    //  creating img in modal content
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr('src', pokemon.imageUrl);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');

    // creating element for height in modal content
    let heightElement = $('<h3>' + 'height : ' + pokemon.height + '</h3>');

    // creating element for weight in modal content
    let weightElement = $('<h3>' + 'weight : ' + pokemon.weight + '</h3>');

    //appending all the elements  inside their containers
    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
  }

  //fetching the pokemon details (API)

  function loadList() {
    return $.ajax(apiUrl)
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return $.ajax(url)
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        item.weight = details.weight;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //function that displays the pokemon details
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

// for each loop that displays the pokemons
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});

//displays searched values (i'm super proud of this lol)

$('#myInput').keyup(function (event) {
  let myInput = $('input').val().toLowerCase();
  $('.group-list-item').each((i, pokemon) => {
    if (
      myInput === '' ||
      $(pokemon).text().toLowerCase().indexOf(myInput) > -1
    ) {
      $(pokemon).show();
    } else {
      $(pokemon).hide();
    }
  });
});

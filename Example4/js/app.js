const BASE_URL = 'https://pokeapi.co'
const BASE_API_URL = `${BASE_URL}/api/v2/pokemon`
const BASE_SPRITES_URL = 'https://img.pokemondb.net/sprites/home/normal'

const inputSearch = document.querySelector('input[type=text]')
const btnSearch = document.querySelector('button#search')
const pokemonResult = document.querySelector('article#result')

const header = document.createElement('h2')
const picture = document.createElement('img')

const search = function() {
  
  const pokemonName = inputSearch.value;

  fetch(`${BASE_API_URL}/${pokemonName}`)
    .then(response => response.json())
    .then(result => {
      const pokemon = result;
      // console.log(pokemon)
      const nameCapitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

      header.innerText = nameCapitalized
      picture.src = `${BASE_SPRITES_URL}/${pokemon.name}.png`

      pokemonResult.appendChild(header)
      pokemonResult.appendChild(picture)
    })
    .catch((e) => console.log('No se encontraron resultados'))

  inputSearch.value = ''
}

btnSearch.addEventListener('click', search)

/*
        <h2>
          Ditto
        </h2>
        <img src="ditto.png" alt="sprite">

*/
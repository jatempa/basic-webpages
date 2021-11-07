const BASE_URL = 'https://pokeapi.co'
const BASE_API_URL = `${BASE_URL}/api/v2/pokemon`
const BASE_SPRITES_URL = 'https://img.pokemondb.net/sprites/home/normal'

const rootElement = document.getElementById('root')

const searchPokemon = async (name) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${name.toLowerCase()}`)
    const result_1 = await response.json()
    return (result_1 && result_1.name) ? result_1 : { error: 'No se encontraron resultados'}
  } catch (e) {
    return null
  }
}

const PokeApp = () => {
  const [name, setName] = React.useState(() => '')
  const [pokemon, setPokemon] = React.useState(() => {})

  const handleChange = event => setName(event.target.value)

  const handleSearch = (event) => {
    event.preventDefault()
    searchPokemon(name).then(setPokemon)
  }

  return (
    <>
      <section id="searchBar">
        <input type="text" value={name} onChange={handleChange} />
        <button id="search" onClick={handleSearch}>Buscar</button>
      </section>
      {(pokemon)
        ? <article id="result">
            (pokemon.error)
            ? <h2>{pokemon?.error}</h2>
            : <> 
                <h2>{pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1)}</h2>
                <img src={`${BASE_SPRITES_URL}/${pokemon.name}.png`} />
              </>
          </article>
        : null
      }
    </>
  )
}

ReactDOM.render(<PokeApp />, rootElement)
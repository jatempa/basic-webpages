const BASE_URL = 'https://pokeapi.co'
const BASE_API_URL = `${BASE_URL}/api/v2/pokemon`
const BASE_SPRITES_URL = 'https://img.pokemondb.net/sprites/home/normal'

const rootElement = document.getElementById('root')

const Header = () => (
  <header>
    <h1>Pokedex</h1>
  </header>
)

const Footer = () => (
  <footer>
    <p>&copy; Jorge Atempa - <a href="https://twitter.com/atempa09">@atempa09</a></p>
  </footer>
)

const searchPokemon = async (name) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${name.toLowerCase()}`)
    const result_1 = await response.json()
    return (result_1 && result_1.name) ? result_1 : { error: 'No se encontraron resultados'}
  } catch (e) {
    return null
  }
}

const SearchBar = ({name, handleChange, handleSearch}) => {
  return (
    <section id="searchBar">
      <input type="text" value={name} onChange={handleChange} />
      <button id="search" onClick={handleSearch}>Buscar</button>
    </section>
  )
}

const Result = ({name}) => {
  const nameCapitalized = name?.charAt(0).toUpperCase() + name?.slice(1)
  return (
    <>
      <h2>{nameCapitalized}</h2>
      <img src={`${BASE_SPRITES_URL}/${name}.png`} />
    </>
  )
}

const Error = ({err}) => <h2>{err}</h2>

const Pokemon = ({pokemon}) => {
  if (!pokemon)
    return null

  return (
    <article id="result">
      {(pokemon.error)
        ? <Error err={pokemon?.error} />
        : <Result name={pokemon?.name} />
      }
    </article>
  )
}

const PokeApp = () => {
  const [name, setName] = React.useState(() => '')
  const [pokemon, setPokemon] = React.useState(() => {})

  const handleChange = event => setName(event.target.value)

  const handleSearch = (event) => {
    event.preventDefault()
    searchPokemon(name).then(setPokemon)
    setName('')
  }

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <SearchBar name={name} handleChange={handleChange} handleSearch={handleSearch} />
          <Pokemon pokemon={pokemon} />
        </div>
      </main>
      <Footer />
    </>
  )
}

ReactDOM.render(<PokeApp />, rootElement)
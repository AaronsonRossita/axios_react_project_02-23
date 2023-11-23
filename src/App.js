import { useState } from 'react';
import './App.css';
import { getPokemonByName } from './services/api';
import { Pokemon } from './components/Pokemon';

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleInput = (event) => {
    setPokemonName(event.target.value);
  }

  const fetchPokemon = async () => {
    try {
      setIsLoading(true);
      const response = await getPokemonByName(pokemonName);
      setPokemon(response.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    await fetchPokemon();
    console.log(pokemon);
    setPokemonName('');
  };

  return (
    <div className="App">
      <input onChange={handleInput} value={pokemonName}/>
      <br/>
      <button onClick={handleClick}>Get Pokemon</button>
      {isLoading ? 
        <p>Waiting for pokemon name...</p> :
         pokemon ?
         <Pokemon name={pokemon.name} img={pokemon.sprites.other.dream_world.front_default}/> : 
         <h1>No pokemon</h1>
      }
    </div>
  );
}

export default App;

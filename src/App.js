import { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Pokedex from './components/Pokedex';
import GameSound from './components/GameSound';
import Loading from './components/Loading';
import { getPokeApi, getPokeApiData } from './services/getPokeApi';
import Level from './components/Level';
import EndGame from './components/EndGame';
const App = () => {
  const [kantonPokemones, setKantonPokemones] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState(null)
  const [myPokemones, setMyPokemones] = useState([])
  const [missedPokemones, setMissedPokemones] = useState([])
  const [openPokedex, setOpenPokedex] = useState(false)
  const [loading, setLoading] = useState(false)
  const [gameStart, setGameStart] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const catchPokemon = (success, pokemon) => {
    // setCatched(success)
    if (success) {
      setMyPokemones([...myPokemones, pokemon])
      alert(`Atrapaste el pokemon ${pokemon.name}`)
    } else {
      setMissedPokemones([...missedPokemones, pokemon])
      alert(`Se escapó el pokemon ${pokemon.name}`)
      console.log(missedPokemones)
    }
    let cleanPokemon = kantonPokemones.filter(item => item.id  !== pokemon.id)
    setKantonPokemones(cleanPokemon)
  }
  //Función para el inicio del juego
  const StartGame = () => {
    setGameStart(true);
    getAllPokemons()
  }

  //Llama a la Api
  const getAllPokemons = async () => {
    setLoading(true)
    function getRandomArbitrary(min, max) {
      min = 1;
      max = 257;
      return Math.random() * (max - min) + min;
    }
    getPokeApi(getRandomArbitrary()).then(async pokemons => { //Me trae 20 pokemones 
      const all = await Promise.all(pokemons.results.map(async (pokemon) => { return await getPokeApiData(pokemon.url) }),
        console.log(pokemons)
      )
      return all
    }).then(all => {
      const item = all[Math.floor(Math.random() * all.length)];
      setCurrentPokemon(item)
      setKantonPokemones(all)
      setLoading(false)
      console.log(all)
    })
  }



  //Finalizar juego
  const endGame = async () => {
    if (gameStart) {
      setGameOver(true)
    }
  }

  //Para para el juego si no hay pokemones
  useEffect(() => {
    if (missedPokemones.length < 3 ) {
      const item = kantonPokemones[Math.floor(Math.random() * kantonPokemones.length)];
      setCurrentPokemon(item);
    } else {
      endGame()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kantonPokemones]);


  return (
    <div>
      <div className="App">
        <div className='game-title'>PokeGame </div>
        <div className='game-container'>
          {gameStart && !loading ? <Level availablePokemons={kantonPokemones}
            catchPokemon={catchPokemon} currentPokemon={currentPokemon} /> : null}
          {gameOver ? <EndGame missedPokemons={missedPokemones} myPokemons={myPokemones} startGame={StartGame} /> : null}
          {!gameStart ? <Intro startGame={StartGame} /> : null}
          {loading ? <Loading /> : null}
          {/* {showStatus ? <Status pokemon={statusPokemon} catched={catched} /> : null} */}
        </div>
      </div>
      <div onClick={() => { setOpenPokedex(!openPokedex) }} className="pokeball">
        <div className='pokeball__button'></div>
      </div>
      {
        openPokedex ? <Pokedex toogle={setOpenPokedex} myPokemones={myPokemones} /> : null
      }
      <GameSound />

    </div>
  );
}

export default App;

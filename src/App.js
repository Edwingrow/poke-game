import { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Pokedex from './components/Pokedex';
import GameSound from './components/GameSound';
import Loading from './components/Loading';
import {getPokeApi, getPokeApiData}   from './services/getPokeApi';
import Level from './components/Level';
import EndGame from './components/EndGame';
const App = () => {
  const [kantonPokemones, setKantonPokemones] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [myPokemones, setMyPokemones] = useState([]);
  const [missedPokemones, setMissedPokemones] = useState([]);
  const [openPokedex, setOpenPokedex] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [ setShowStats] = useState(false);
  const [setCatched] = useState(false)
  const [ startusPokemon, setStatusPokemon] = useState(null);


  const catchPokemon = (success, pokemon) => {
    if (success) {
      setMyPokemones([...myPokemones, pokemon])     
    } else {
      setMissedPokemones([...missedPokemones, pokemon])
    }
    // setStatusPokemon(pokemon)
    // setShowStats(true)
    setTimeout(() => {
        let cleanPokemon = kantonPokemones.filter(item => item.id !== pokemon.id)
        setKantonPokemones(cleanPokemon)      
    }, 1500);

  }
//Función para el inicio del juego
const StartGame = () => {
  setGameStart(true);
  getAllPokemons()
  }
  const getAllPokemons = async () => { //Me trae 20 pokemones 
    setLoading(true)    
    getPokeApi("20").then(async pokemons => {
      const all = await Promise.all(
        pokemons.results.map(async (pokemon) => {return await getPokeApiData(pokemon.url)})
      ) 
      return all
    }).then(all => {
      const item = all[Math.floor(Math.random()*all.length)];
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
  useEffect(() => {
    if (kantonPokemones.length > 0)  {
      const item = kantonPokemones[Math.floor(Math.random()*kantonPokemones.length)];
      setCurrentPokemon(item);
    } else {
      endGame()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kantonPokemones]);

 
  return (
    <div className="App">
      <div className='game-title'>PokeGame </div>
      <div className='game-container'>
        {gameStart && !loading ? <Level availablePokemons={kantonPokemones} catchPokemon={catchPokemon} currentPokemon={currentPokemon} /> : null}
        {gameOver ? <EndGame missedPokemons={missedPokemones} myPokemons={myPokemones} /> : null }
        {!gameStart ? <Intro startGame={StartGame} /> : null}
        {loading ? <Loading /> : null}
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

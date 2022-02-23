import { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Pokedex from './components/Pokedex';
import GameSound from './components/GameSound';
import Loading from './components/Loading';
import {getPokeApi}   from './services/getPokeApi';

const App = () => {
  const [kantonPokemones, setKantonPokemones] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [myPokemones, setMyPokemones] = useState([]);
  const [missedPokemones, setMissedPokemones] = useState([]);
  const [openPokedex, setOpenPokedex] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const catchPokemon = (success, pokemon) => {

  }
const StartGame = () => {

  }
  const getAllPokemones = async () => {

  }
const endGame = () => {

  }

  useEffect(() => {
    getPokeApi(10).then(response => {
      console.log(response.data.results);
    })
  },[]) 
  return (
    <div className="App">
      <div className='game-title'>PokeGame </div>
      <div className='game-container'>
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

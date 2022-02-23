import { useState } from 'react';
import Intro from './components/Intro';
import GameSound from './components/GameSound';
const App = () => {

  return (
    <div className="App">
      <div className='game-title'>PokeGame</div>
      <Intro/>
      <GameSound/>
    </div>
  );
}

export default App;

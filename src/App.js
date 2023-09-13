import './App.css';
import Game from './components/game/Game';
import React, { useState } from 'react';
import Board from './components/board/Board';
function App() {
  const [start, setStart] = useState(false)
  return (
    <>
      {!start ? <button className='start-btn' onClick={() => setStart(true)}>Start Game</button> : null}
      {start ? <Game /> : <Board setMoves={null} setIsFinished={null} />}
    </>
  )
}

export default App;

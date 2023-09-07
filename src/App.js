import './App.css';
import Board from './components/board/Board';
import Score from './components/score/Score';
import Options from './components/options/Options';
import React, { useState } from 'react';

function App() {

  const [score, setScore] = useState(0);

  return (
    <div className='container'>
      <Score score={score} />
      <Board setScore={setScore}>

      </Board>
      <Options />
    </div>
  );
}

export default App;

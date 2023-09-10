import './App.css';
import Board from './components/board/Board';
import Score from './components/score/Score';
import Options from './components/options/Options';
import WinScreen from './components/winscreen/WinScreen';
import React, { useState } from 'react';

function App() {

  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);


  return (
    <div className='container'>
      {isFinished ? <WinScreen score={score} isFinished={isFinished} /> : null}
      <Score score={score} />
      <Board setScore={setScore} setIsFinished={setIsFinished}>

      </Board>
      <Options />
    </div>
  );
}

export default App;

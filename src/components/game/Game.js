
import Board from '../board/Board'
import Score from '../score/Score';
import Options from '../options/Options';
import WinScreen from '../winscreen/WinScreen';
import React, { useState } from 'react';

function Game() {

    const [moves, setMoves] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [time, setTime] = useState(0)

    return (
        <div className='container'>
            {isFinished ? <WinScreen moves={moves} isFinished={isFinished} time={time} /> : null}
            <Score moves={moves} time={time} setTime={setTime} isFinished={isFinished} />
            <Board setMoves={setMoves} setIsFinished={setIsFinished}>

            </Board>
            <Options />
        </div>
    );
}

export default Game;

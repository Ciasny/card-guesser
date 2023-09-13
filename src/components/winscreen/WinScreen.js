import React from "react";
import './winscreen.css';

function WinScreen({ moves, time }) {

    function calculateScore() {
        let res = 100 - (moves + time);
        if (res < 0) {
            res = res * -1 / 10
        }
        return res
    }
    const score = calculateScore()

    function playAgain() {
        window.location.reload()
    }

    return (
        <div className="background">
            <div className="win-container">
                <h2>Congratulations!</h2>
                <p>You finished the game with <b>{score}</b> score!</p>
                <button className="playagain-btn" onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default WinScreen;
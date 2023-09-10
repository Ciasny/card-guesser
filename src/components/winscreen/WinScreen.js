import React from "react";
import './winscreen.css';

function WinScreen({ score }) {

    function playAgain() {

    }

    return (
        <div className="background">
            <div className="win-container">
                <h2>Congratulations!</h2>
                <p>You finished the game in <b>{score}</b> moves!</p>
                <button className="playagain-btn">Play Again</button>
            </div>
        </div>
    )
}

export default WinScreen;
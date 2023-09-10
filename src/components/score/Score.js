import React from "react";
import './score.css'
function Score({ score }) {
    return (
        <>
            <div className="scoreboard">
                <p className="score-value">{score}</p>
            </div>
        </>
    )
}

export default Score;
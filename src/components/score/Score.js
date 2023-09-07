import React from "react";
import './score.css'
function Score({ score }) {
    return (
        <>
            <p className="score-value">{score}</p>
        </>
    )
}

export default Score;
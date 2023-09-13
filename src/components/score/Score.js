import React, { useEffect } from "react";
import './score.css'
function Score({ moves, time, setTime, isFinished }) {



    useEffect(() => {
        if (!isFinished) {
            setTimeout(() => {
                setTime(prev => prev + 1)
            }, 1000)
            clearTimeout()
        }
    }, [time, isFinished])

    return (
        <>
            <div className="scoreboard">
                <p className="score-value">Moves: {moves}</p>
                <p className='timer-value'>Time: {time}</p>
            </div>
        </>
    )
}

export default Score;
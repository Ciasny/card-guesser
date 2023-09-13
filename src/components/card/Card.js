import React from "react";
import './card.css'

function Card({ symbol, setCardsClicked, cardsClicked, setMoves }) {

    function handleClick(e) {
        if (e.target.className === 'card guessed-card') {

        } else if (cardsClicked <= 1) {
            e.target.className = 'clicked-card card';
            setCardsClicked(prev => prev + 1);
            setMoves(prev => prev + 1)
        }
    }


    return (
        <div className="card" onClick={handleClick}>
            {symbol}
        </div>
    )
}

export default Card;
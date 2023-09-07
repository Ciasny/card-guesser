import React, { useEffect } from "react";
import './card.css'

function Card({ symbol, setCardsClicked, cardsClicked }) {

    function handleClick(e) {
        if (cardsClicked <= 1) {
            e.target.className = 'clicked-card card';
            setCardsClicked(prev => prev + 1)
        }
    }

    useEffect(() => {
        if (cardsClicked > 2) {

        }
    }, [cardsClicked])

    return (
        <div className="card" onClick={handleClick}>
            {symbol}
        </div>
    )
}

export default Card;
import React, { useState, useEffect } from "react";
import Card from "../card/Card";

function createSymbolArray(size) {
    const symbols = [1, 2, 3, 4, 5, 6, 7, 8];
    let result = createEmptyMatrix(size);
    let id = 0;
    for (let symbol in symbols) {
        let isPassedIn = '';
        while (isPassedIn !== 'inin') {
            const y = Math.floor(Math.random() * size)
            const x = Math.floor(Math.random() * size)

            if (result[x][y].id === undefined) {

                result[x][y].symbol = symbols[symbol];
                result[x][y].id = id;
                id++;
                isPassedIn += 'in';
            }
        }
    }
    return result;

}

function createEmptyMatrix(size) {
    let res = []
    for (let i = 0; i < size; i++) {
        res.push([]);
        for (let a = 0; a < size; a++) {
            res[i].push({});
        }
    }
    return res;
}

const symbolsObj = createSymbolArray(4);

function Board() {

    const [cardsClicked, setCardsClicked] = useState(0);

    useEffect(() => {
        if (cardsClicked > 1) {
            setTimeout(() => {
                const card1 = document.getElementsByClassName('clicked-card')[0]
                const card2 = document.getElementsByClassName('clicked-card')[1]

                card1.className = 'card'
                card2.className = 'card'

                console.log('a')
                setCardsClicked(0)
            }, 2000)
            clearTimeout()
        }
    }, [cardsClicked])

    return (
        <>
            {symbolsObj.map(item => {
                return (
                    <div className="board-row" key={`${item[0].id}`}>
                        {item.map(data => <Card symbol={data.symbol} key={`${data.id}`} setCardsClicked={setCardsClicked} cardsClicked={cardsClicked} />)}
                    </div>
                )
            })}
        </>
    );
}

export default Board;
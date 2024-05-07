import { useEffect, useState } from "react";
import Card from "./Card";
import data from "./data";

function Board() {
    const [cardsArray, setCardsArray] = useState([])
    const [moves, setMoves] = useState(0)
    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)
    const [stopFlip, setStopFlip] = useState(false)
    const [won, setWon] = useState(0)

    const newGame = () => {
        setCardsArray(data.sort(() => Math.random() - 0.5))
        setMoves(0)
        setFirstCard(null)
        setSecondCard(null)
        setStopFlip(false)
        setWon(0)
    }

    useEffect(() => {
        newGame()
    }, [])

    const handleSelectedCards = (item) => {
        if (firstCard !== null && firstCard.id !== item.id) {
            setSecondCard(item)
        }
        else {
            setFirstCard(item)
        }
    }

    useEffect(() => {
        if (firstCard && secondCard) {
            setStopFlip(true)
            if (firstCard.name === secondCard.name) {
                setCardsArray((prevArray) => {
                    return prevArray.map((unit) => {
                        if (unit.name === firstCard.name) {
                            return { ...unit, matched: true }
                        } else {
                            return unit
                        }
                    })
                })
                setWon((preVal) => preVal + 1);
                removeSelection()
            } else {
                const id = setTimeout(() => {
                    removeSelection()
                }, 1000)

                return () => {
                    clearTimeout(id)
                }
            }
        }
    }, [firstCard, secondCard]);

    const removeSelection = () => {
        setFirstCard(null)
        setSecondCard(null)
        setStopFlip(false)
        setMoves((prevValue) => prevValue + 1)
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Hafıza oyunu</h1>
            </div>
            <div className="board">
                {
                    cardsArray.map((item) => (
                        <Card
                            item={item}
                            key={item.id}
                            handleSelectedCards={handleSelectedCards}
                            toggled={item === firstCard || item === secondCard || item.matched === true}
                            stopflip={stopFlip}
                        />
                    ))
                }
            </div>

            {/* 6 olunca yani tüm kartlar eşleştiğinde */}
            {won !== 6
                ? (
                    <div className="comments">Hamle : {moves}</div>
                )
                : (
                    <div className="comments">
                        {moves} hamlede kazandın
                    </div>
                )}
            <button className="button" onClick={() => newGame()}>
                Yeni oyun
            </button>
        </div>
    )
}

export default Board

import { useState } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import './Game.css';

function Game() {
    const TAS = 'Taş'
    const KAGIT = 'Kağıt'
    const MAKAS = 'Makas'

    const [playerVal, setPlayerVal] = useState(null)
    const [computerVal, setComputerVal] = useState(null)
    const [playerScore, setPlayerScore] = useState(0)
    const [compScore, setCompScore] = useState(0)

    const logic = (playerVal, computerVal) => {
        if (playerVal === computerVal) {
            return 0
        }
        else if (
            (playerVal === TAS && computerVal === MAKAS) ||
            (playerVal === MAKAS && computerVal === KAGIT) ||
            (playerVal === KAGIT && computerVal === TAS)) {
            return 1
        }
        else {
            return -1
        }
    }

    const decision = (playerChoice) => {
        const choices = [TAS, KAGIT, MAKAS];
        const compChoice = choices[Math.floor(Math.random() * choices.length)];
        const val = logic(playerChoice, compChoice)
        if (val === 1) {
            setPlayerVal(playerChoice)
            setComputerVal(compChoice)
            setPlayerScore(playerScore + 1)
        }
        else if (val === -1) {
            setPlayerVal(playerChoice)
            setComputerVal(compChoice)
            setCompScore(compScore + 1)
        }
        else {
            setPlayerVal(playerChoice)
            setComputerVal(compChoice)
        }
    }

    return (
        <div className="container">
            <h1>Taş, Kağıt, Makas oyununa hoş geldiniz</h1>
            <div >
                <button onClick={() => decision(TAS)}>
                    <FaHandRock /> Taş
                </button>
                <button onClick={() => decision(KAGIT)}>
                    <FaHandPaper /> Kağıt
                </button>
                <button onClick={() => decision(MAKAS)}>
                    <FaHandScissors /> Makas
                </button>
            </div>

            <div className="content">
                <p>Seçimin : {playerVal}</p>
                <p>Bilgisayarın seçimi: {computerVal}</p>
                <h2>Skorun:{playerScore}</h2>
                <h2>Bilgisayarın skoru: {compScore}</h2>
            </div>
        </div>
    )
}

export default Game

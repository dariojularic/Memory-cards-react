import { useState, useEffect } from 'react'
import './App.css'
import cards from './data'
import Card from "./Card"

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [myCards, setMyCards] = useState(cards)


  useEffect(() => {
    if(cards.every(card => card.isChecked === true)) {
      handleGameOver()
    } else {
      currentScore > highScore ? setHighScore(currentScore) : null
    }
  }, [currentScore])
  // jel mi treba u dependency arrayu i highScore ili ne???


  // useEffect, ako su sve kartice kliknute -> game over, a ako nisu, provjeri za highscore
  // console.log(myCards)
  // console.log(typeof(currentScore))

  // zasto mi je potrebna ova funkcija? 
  function handleNewHighScore(newScore) {
    setHighScore(newScore)
  }

  function handleGameOver() {
    alert("game over")
  }

  function shuffleArray() {
    const newArray = myCards.sort(() => Math.random() - 0.5);
    setMyCards(newArray)
    console.log(myCards)
  }

  return (

      <div className="app">
        <header>
          <h1>Rick and Morty memory game</h1>
        </header>

        <main>
          <div className="score">
            <p className="current-score">Current Score: {currentScore}</p>
            <p className="high-score">High Score: {highScore}</p>
          </div>
          <ul className="cards-grid">
            {myCards.map(card => {
              console.log(card.isChecked)
              return <Card key={card.id} {...card} handleGameOver={handleGameOver} shuffleArray={shuffleArray} highScore={highScore} setHighScore={setHighScore} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
            })}
          </ul>
          <div className="game-over">
            <h3>Game Over!</h3>
            <p className="score-result">{currentScore}</p>
            <button className="play-again-btn">Play again</button>
          </div>
        </main>

        <footer>

        </footer>
      </div>

  )
}

export default App

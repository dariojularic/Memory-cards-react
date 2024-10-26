import { useState, useEffect } from 'react'
import './App.css'
import cards from './data'
import Card from "./Card"

// oce mi overlay bit jos jedna komponenta??

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [myCards, setMyCards] = useState(cards)

  // const originalArray = myCards;

  function handleClickCard(cardId) {
    const newArray = myCards.map((card) => {
      if (card.id === cardId) card.isClicked = true
      return card
    })
    setMyCards(newArray)
    shuffleArray()
  }

  useEffect(() => {
    if(cards.every(card => card.isClicked === true)) {
      handleGameOver()
      console.log("you win")
    } else {
      currentScore > highScore ? setHighScore(currentScore) : null
    }
  }, [currentScore, highScore])
  // jel mi treba u dependency arrayu highScore i handleGameOver ili ne???

  // useEffect, ako su sve kartice kliknute -> game over, a ako nisu, provjeri za highscore

  // zasto mi je potrebna ova funkcija?
  function handleNewHighScore(newScore) {
    setHighScore(newScore)
  }

  // function handleGameOver() {
  //   const newArray = myCards.map(card => {
  //     card.isClicked = false
  //   })
  //   setMyCards(newArray)
  //   setCurrentScore(0)
  //   alert("game over")
  // }

  function handleGameOver() {
    setMyCards(myCards.map(card => card.isClicked = false))
    // setMyCards(originalArray)
    setCurrentScore(0)
    alert("game over")
  }

  function shuffleArray() {
    const newArray = myCards.sort(() => Math.random() - 0.5);
    setMyCards(newArray)
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
              return <Card key={card.id} {...card} handleGameOver={handleGameOver} handleClickCard={handleClickCard} setCurrentScore={setCurrentScore}/>
            })}
          </ul>
          <div className="game-over">
            <h3>Game Over!</h3>
            <p className="score-result">{currentScore}</p>
            <button className="play-again-btn">Play again</button>
          </div>
        </main>
      </div>

  )
}

export default App

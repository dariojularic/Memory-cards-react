import { useState, useEffect } from 'react'
import './App.css'
import cards from './data'
import Card from "./Card"
import Modal from "./Modal"

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [myCards, setMyCards] = useState(cards)

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
    } else {
      currentScore > highScore ? setHighScore(currentScore) : null
    }
  }, [currentScore, highScore])

  function handleGameOver() {
    setOverlayVisibility(true)
    const resetCards = myCards.map((card) => {
      return {...card, isClicked: false}
    })
    setMyCards(resetCards)
  }

  function shuffleArray() {
    const newArray = myCards.sort(() => Math.random() - 0.5);
    setMyCards(newArray)
  }

  return (
    <>
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
        </main>
      </div>
      {overlayVisibility &&
        <Modal>
            <h3 className="game-over-header">Game Over!</h3>
            <p className="score-result">Your score: {currentScore}</p>
            <button className="play-again-btn" onClick={
              () => {
                setOverlayVisibility(false)
                setCurrentScore(0)
              }
            }>Play again</button>
        </Modal>
      }
    </>
  )
}

export default App

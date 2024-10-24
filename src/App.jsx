import { useState } from 'react'
import './App.css'
import cards from './data'
import Card from "./Card"

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [myCards, setMyCards] = useState(cards)
  console.log(myCards)

  function handleGameOver(score) {

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
              return <Card key={card.id} {...card} handleGameOver={handleGameOver} setCurrentScore={setCurrentScore}/>
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

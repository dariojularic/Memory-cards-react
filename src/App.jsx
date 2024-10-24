import { useState } from 'react'
import './App.css'
import cards from './data'
import Card from "./Card"

function App() {
  // const [count, setCount] = useState(0)
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

          </div>
          <ul className="cards-grid">
            {myCards.map(card => {
              return <Card key={card.id} {...card}/>
            })}

          </ul>
        </main>

        <footer>

        </footer>
      </div>

  )
}

export default App

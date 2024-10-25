import {useState} from "react"
import "./Card.css"
import PropTypes from "prop-types";

function Card(props) {
  const [isClicked, setIsClicked] = useState(false)
  // console.log(props)
  const {id, image, name, handleGameOver, shuffleArray, currentScore, setCurrentScore, highScore, setHighScore} = props;
  // console.log(isClicked)
  return (
    <li className="card" onClick={() => {
      if (isClicked === false) {
        // console.log("gagaag")
        setCurrentScore((currentScore) => currentScore + 1)
        shuffleArray()
        setIsClicked(true)
        console.log("current score", currentScore)
        // console.log(highScore)
        currentScore > highScore ? setHighScore(currentScore) : console.log("eeee")
      }
      else {
        console.log("error")
        handleGameOver()
      }
    }}>
      <img className="character-image" src={`public/${image}.png`} alt="" />
      <p className="character-name">{name}</p>
    </li>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  handleGameOver: PropTypes.func,
  shuffleArray: PropTypes.func,
  currentScore: PropTypes.number,
  setCurrentScore: PropTypes.func
}

export default Card

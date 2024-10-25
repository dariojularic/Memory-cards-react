import {useEffect, useState} from "react"
import "./Card.css"
import PropTypes from "prop-types";

function Card(props) {
  // const [isClicked, setIsClicked] = useState(cards)
  // console.log("props", props)
  const {id, image, name, isClicked, handleGameOver, shuffleArray, handleClickCard, currentScore, setCurrentScore, highScore, setHighScore} = props;
  // console.log("isClicked",isClicked)

  // function handleClick()  {
  //   if(!isClicked) {
  //     setIsClicked(true);
  //   } else {
  //     handleGameOver();
  //   }
  // }

  return (
    <li className="card" onClick={() => {
      // console.log(isClicked)
      if (isClicked === false) {
        // console.log("gagaag")
        setCurrentScore((currentScore) => currentScore + 1)
        shuffleArray()
        handleClickCard(id)
        // setIsClicked(true)
        // console.log("current score", currentScore)
        // console.log(highScore)
        // currentScore > highScore ? setHighScore(currentScore) : console.log("currentScore je manji od highScore")
      }
      else {
        console.log("isClicked je true")
        // handleGameOver()
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
  isClicked: PropTypes.bool,
  handleGameOver: PropTypes.func,
  shuffleArray: PropTypes.func,
  currentScore: PropTypes.number,
  setCurrentScore: PropTypes.func,
  handleClickCard: PropTypes.func
}

export default Card

import {useState} from "react"
import "./Card.css"

function Card(props) {
  const [isClicked, setIsClicked] = useState(false)
  const {id, image, name, handleGameOver} = props;
  console.log(isClicked)
  return (
    <li className="card" onClick={() => {
      if (isClicked === false) setIsClicked(true)
      else handleGameOver()
    }}>
      <img className="character-image" src={`public/${image}.png`} alt="" />
      <p className="character-name">{name}</p>
    </li>
  )
}

export default Card

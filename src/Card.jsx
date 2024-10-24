import {useState} from "react"
import "./Card.css"

function Card(props) {
  const [isClicked, setIsClicked] = useState(false)
  const {id, image, name} = props;
  console.log(isClicked)
  return (
    <li onClick={() => setIsClicked(true)}>
      <img className="character-image" src={`public/${image}.png`} alt="" />
      <p className="character-name">{name}</p>
    </li>
  )
}

export default Card

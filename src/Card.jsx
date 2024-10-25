import "./Card.css"
import PropTypes from "prop-types";

function Card(props) {
  const {id, image, name, isClicked, handleGameOver, shuffleArray, handleClickCard, setCurrentScore} = props;

  return (
    <li className="card" onClick={() => {
      if (isClicked === false) {
        setCurrentScore((prev) => prev + 1)
        // shuffleArray()
        handleClickCard(id)
      }
      else {
        // console.log("isClicked je true")
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
  isClicked: PropTypes.bool,
  handleGameOver: PropTypes.func,
  shuffleArray: PropTypes.func,
  setCurrentScore: PropTypes.func,
  handleClickCard: PropTypes.func
}

export default Card

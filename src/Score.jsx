import "./Score.css"
import PropTypes from "prop-types";

function Score(props) {
  const {currentScore, highScore} = props;

  return (
    <div className="score">
      <p className="current-score">Current Score: {currentScore}</p>
      <p className="high-score">High Score: {highScore}</p>
    </div>
  )
}

Score.propTypes = {
  currentScore: PropTypes.number,
  highScore: PropTypes.number
}

export default Score

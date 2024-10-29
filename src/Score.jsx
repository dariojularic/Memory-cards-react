import "./Score.css"

function Score(props) {
  const {currentScore, highScore} = props;

  return (
    <div className="score">
      <p className="current-score">Current Score: {currentScore}</p>
      <p className="high-score">High Score: {highScore}</p>
    </div>
  )
}

export default Score

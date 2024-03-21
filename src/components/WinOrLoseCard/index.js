// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const gameStatus = isWon ? 'You Won' : 'You Lose'

  return (
    <div className="win-lose-container">
      <div className="score-deatails-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-status">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section-container">
        <img src={imgUrl} alt="win or lose" className="win-lose-image" />
      </div>
    </div>
  )
}

export default WinOrLoseCard

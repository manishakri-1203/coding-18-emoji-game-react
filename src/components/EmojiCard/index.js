// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard

import {useState} from "react"

const ButtonLike = ({liked, disliked, checked}) => {
    const [like, setLike] = useState(checked);

    const handleLiked = () => {
        setLike(!like)
    }

    return(
        <button onClick={handleLiked}>
            <span>{like ? <img src={liked} alt="liked outline"/> : <img src={disliked} alt="liked solid"/>}</span>
          </button>
    )
}

export default ButtonLike
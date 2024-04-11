import '../Card.css'
import { SlDislike, SlLike } from "react-icons/sl";


type ResultType = {
    author: string,
    current_vote: string,
    defid: number,
    definition: string,
    example: string,
    permalink: string,
    thumbs_down: number,
    thumbs_up: number,
    word: string,
    written_on: string
}

interface CardProps {
    result: ResultType
}
const Card: React.FC<CardProps> = ( { result } ) => {
  return (
    <div className="card">
      <p className="definition">{result.definition}</p>
      <p className="example">{result.example}</p>
      <div className="votes">
        <span className='thumbs'><SlLike className='like'/>{result.thumbs_up}</span>
        <span className='thumbs'><SlDislike className='dislike'/>{result.thumbs_down}</span>
      </div>
    </div>
  )
}

export default Card

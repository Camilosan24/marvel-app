import { Link } from 'react-router-dom'
import { removeParentesisContent } from '../../assets'
import './style.css'

const SmallCard = ({ image, name, id, onClickCard }) => {

   return (
      <Link to={`/characters/${id}`} className="small-card-box" style={{ width: "100%", display: 'flex' }} aria-label="small-card-box" onClick={onClickCard}>
         <img src={image.path + "/portrait_small." + image.extension} alt="" />
         <span aria-label="character-name">
            {removeParentesisContent(name)}
         </span>
      </Link>
   )
}

export default SmallCard

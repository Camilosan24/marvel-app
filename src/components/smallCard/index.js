import { Link } from 'react-router-dom'
import { removeParentesisContent } from '../../assets'
import './style.css'

const SmallCard = ({ image, name, id, onClickCard }) => {

   return (
      <Link to={`/characters/${id}`} className="searcher__smallcard" style={{ width: "100%", display: 'flex' }} aria-label="small-card-box" onClick={onClickCard}>
         <img  className="searcher__smallcard-img"src={image.path + "/portrait_small." + image.extension} alt="" />
         <span className="searcher__smallcard-title" aria-label="character-name">
            {removeParentesisContent(name)}
         </span>
      </Link>
   )
}

export default SmallCard

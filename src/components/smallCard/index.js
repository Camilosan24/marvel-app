import {  Link } from 'react-router-dom'
import './style.css'

const SmallCard = ({ image, name, id }) => {
   const changeName = () => {
      const regex = /(\(|\))/;
      if (name.includes("(")) return name.substr(0, name.match(regex).index)
      return name;
   }
   return (
      <Link to={`/characters/${id}`} className="small-card-box" style={{ width: "100%", display: 'flex' }} aria-label="small-card-box">
         <img src={image.path + "/portrait_small." + image.extension} alt="" />
         <span aria-label="character-name">
            {changeName()}
         </span>
      </Link>
   )
}

export default SmallCard

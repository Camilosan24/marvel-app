import { useHistory } from 'react-router-dom'
import './style.css'

const SmallCard = ({ image, name, id }) => {
   const history = useHistory()
   const changeName = () => {
      // const regex = /\(([^)]+)\)/;
      const regex = /(\(|\))/;
      if (name.includes("(")) return name.substr(0, name.match(regex).index)
      return name;
   }

   const hanldeClick = () => {
      history.push(`/characters/${id}`)
   }
   return (
      <div className="small-card-box" style={{ width: "100%", display: 'flex' }} onClick={hanldeClick} aria-label="small-card-box">
         <img src={image.path + "/portrait_small." + image.extension} alt="" />
         <span aria-label="character-name">
            {changeName()}
         </span>
      </div>
   )
}

export default SmallCard

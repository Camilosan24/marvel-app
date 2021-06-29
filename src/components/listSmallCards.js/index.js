import SmallCard from '../smallCard'
import './style.css'

const ListSmallCards = ({ charactersFound, onClickCard, sectionName }) => {
   return (
      <ul className="searcher__list" style={charactersFound.length !== 0 ? { height: `${charactersFound.length * 50}px` } : {display: 'none'}}>
         {charactersFound.map((cardItem) => {
            return <SmallCard
               image={cardItem.thumbnail}
               name={cardItem.name}
               key={cardItem.id}
               id={cardItem.id}
               onClickCard={() => onClickCard({ id: cardItem.id, sectionName, cardItem })} />
         })}
      </ul>
   )
}

export default ListSmallCards

import SmallCard from '../smallCard'

const ListSmallCards = ({ charactersFound, onClickCard, sectionName }) => {
   return (
      <div className="characters-found" style={charactersFound.length !== 0 ? { height: `${charactersFound.length * 50}px`, paddingTop: '25px' } : {}}>
         {charactersFound.map((cardItem) => {
            return <SmallCard
               image={cardItem.thumbnail}
               name={cardItem.name}
               key={cardItem.id}
               id={cardItem.id}
               onClickCard={() => onClickCard({ id: cardItem.id, sectionName, cardItem })} />
         })}
      </div>
   )
}

export default ListSmallCards

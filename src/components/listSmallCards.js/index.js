import SmallCard from '../smallCard'

const ListSmallCards = ({ charactersFound }) => {
   return (
      <div className="characters-found" style={charactersFound.length !== 0 ? { height: `${charactersFound.length * 50}px`, paddingTop: '25px' } : {}}>
         {charactersFound.map((character) => {
            return <SmallCard image={character.thumbnail} name={character.name} key={character.id} id={character.id} />
         })}
      </div>
   )
}

export default ListSmallCards

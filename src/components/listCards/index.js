import React from 'react'
import Card from '../card/Card';

const ListCards = ({ itemsInformation, sectionName, onClickCard }) => {
   return (
      <div className="cards-container-box" placeholder="cards-container-box">
         {
            itemsInformation?.map((cardItem, i) => {
               return <Card {...cardItem} key={i} sectionName={sectionName} onClickCard={() => onClickCard({id: cardItem.id, sectionName, cardItem})} />;
            })
         }
      </div>
   )
}

export default ListCards

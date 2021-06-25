import React from 'react'
import Card from '../card/Card';

const ListCards = ({ itemsInformation, locationPathname }) => {
   return (
      <div className="cards-container-box" placeholder="cards-container-box">
         {
            itemsInformation?.map((cardItem, i) => {
               return <Card {...cardItem} key={i} locationPathname={locationPathname} />;
            })
         }
      </div>
   )
}

export default ListCards

import React from 'react'
import "./style.css"

const SingleSection = ({ title, items }) => {
   return (
      <section className="item-content">
         <h1 className="item-content__title">{title}</h1>
         <ul className="item-content__list">
            {!items.length && items.name ?
               <li className="item-content__list-item">{items.name || items.title}</li> : items?.length !== 0 ?
                  items.map((item, index) => {
                     return <li className="item-content__list-item" key={index}>{item.name || item.title}</li>
                  }) : "No content avaible"}
         </ul>
      </section>
   )
}

export default SingleSection

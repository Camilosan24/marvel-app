import React from 'react'
import { setDate } from '../../assets'
import './style.css'

const DetailsItem = ({ itemInfo }) => {
   return (
      <header className="details">
         <figure className="details__thumbnail">
            <img
               src={itemInfo.thumbnail?.path + "/portrait_uncanny." + itemInfo.thumbnail?.extension}
               alt={itemInfo.name}
               className="details_img"
            />
         </figure>
         <div className="details__container-list" aria-label="character information section">
            <ul className="details__list">
               <li className="details__list-item">
                  <span className="details__list-title">id:</span><p> {itemInfo.id}</p>
               </li>
               <li className="details__list-item">
                  <span className="details__list-title">{itemInfo.name ? 'name' : 'title'}:</span> <p>{itemInfo.name || itemInfo.title}</p>
               </li >
               <li className="details__list-item">
                  <span className="details__list-title">modified:</span> <time dateTime={setDate(itemInfo.modified)}> {setDate(itemInfo.modified)}</time>
               </li>
               <li className="details__list-item">
                  <span className="details__list-title">description:</span> <p>{itemInfo.description ? itemInfo.description : 'No description available'}</p>
               </li>
            </ul>
         </div>
      </header>
   )
}

export default DetailsItem

import React from 'react'
import { setDate } from '../../assets'

const DetailsItem = ({ itemInfo }) => {
   return (
      <>
         <figure>
            <img
               src={itemInfo.thumbnail?.path + "/portrait_uncanny." + itemInfo.thumbnail?.extension}
               alt={itemInfo.name}
            />
         </figure>
         <div className="info" aria-label="character information section">
            <ul>
               <li>
                  <span className="info-tag">id:</span><p> {itemInfo.id}</p>
               </li>
               <li>
                  <span className="info-tag">{itemInfo.name ? 'name' : 'title'}:</span> <p>{itemInfo.name || itemInfo.title}</p>
               </li>
               <li>
                  <span className="info-tag">modified:</span> <time dateTime={setDate(itemInfo.modified)}> {setDate(itemInfo.modified)}</time>
               </li>
               <li>
                  <span className="info-tag">description:</span> <p>{itemInfo.description ? itemInfo.description : 'No description available'}</p>
               </li>
            </ul>
         </div>
      </>
   )
}

export default DetailsItem

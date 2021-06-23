import React from 'react'

const SingleSection = ({ title, items }) => {


   return (
      <section>
         <h1>{title}</h1>
         <ul>
            {!items.length && items.name?
               <li >{items.name || items.title}</li> : items?.length !== 0 ?
                  items.map((item, index) => {
                     return <li key={index}>{item.name || item.title}</li>
                  }) : "No content avaible"}
         </ul>
      </section>
   )
}

export default SingleSection

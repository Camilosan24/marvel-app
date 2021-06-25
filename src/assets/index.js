import { UPDATE_CHARACTERS, UPDATE_COMICS, UPDATE_EVENTS, UPDATE_SERIES,  } from '../context/types'

export const setDate = (date)=>{
   return new Date(date).toUTCString()
}

export const pageExist = (sectionItems, page) => {
   const ItemsFound = sectionItems.find(section => section.page === page)
   if (ItemsFound) return ItemsFound
   return false
}

export const chooseSectionToUpdate = (route, data) => {
   if (route === "characters") return { type: UPDATE_CHARACTERS, payload: data }
   if (route === "comics") return { type: UPDATE_COMICS, payload: data }
   if (route === "series") return { type: UPDATE_SERIES, payload: data }
   if (route === "events") return { type: UPDATE_EVENTS, payload: data }
}

export const removeParentesisContent = (name) => {
   const regex = /(\(|\))/;
   if (name.includes("(")) return name.substr(0, name.match(regex).index)
   return name;
}
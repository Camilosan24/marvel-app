import ItemsContext from './ItemsContext'
import { useReducer } from 'react'
import { getAllItems, getSingleItemById } from '../../requests'
import { CHANGE_SELECTED_ITEM } from '../types'
import itemsReducers from './ItemsReducer'
import { pageExist, chooseSectionToUpdate } from '../../assets'

const initialState = {
   charactersItems: [],
   comicsItems: [],
   seriesItems: [],
   eventsItems: [],
   tempItemToShow: {}
}




export default function ItemsState({ children }) {
   const [state, dispatch] = useReducer(itemsReducers, initialState)




   //this function fetch the request page
   const getItems = async (page, offset, route) => {
      if (pageExist(state[`${route}Items`], page)) return;
      try {
         const res = await getAllItems(offset, route);
         if (res.ok) {
            const parseRes = await res.json();
            dispatch(chooseSectionToUpdate(route, { page, results: parseRes.data.results }))
         }
         throw new Error()
      } catch (error) {

      }
   }

   const setItemToShow = async (item) => {
      if (item.cardItem) return dispatch({ type: CHANGE_SELECTED_ITEM, payload: item.cardItem });
      try {
         const res = await getSingleItemById(item.sectionName, item.id)
         if (res.ok) {
            const parseRes = await res.json()
            dispatch({ type: CHANGE_SELECTED_ITEM, payload: parseRes.data.results[0] })
         }
      } catch (error) {
      }
   }

   return (
      <ItemsContext.Provider value={{
         state,
         getItems,
         setItemToShow
      }}>
         {children}
      </ItemsContext.Provider>
   )
}
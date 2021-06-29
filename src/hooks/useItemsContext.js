import { useContext } from 'react'
import ItemsContext from '../context/ItemsContext/ItemsContext'

export const useItemsContext = () => {
   const { setItems, setItemToShow, state } = useContext(ItemsContext)
   return { setItems, setItemToShow, state }
}

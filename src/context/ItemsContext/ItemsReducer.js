import { UPDATE_CHARACTERS, UPDATE_COMICS, UPDATE_SERIES, UPDATE_EVENTS, CHANGE_SELECTED_ITEM } from '../types'

const itemsReducers = (state, action) => {
   switch (action.type) {
      case UPDATE_CHARACTERS:
         return {
            ...state,
            charactersItems: [...state.charactersItems, action.payload]
         }

      case UPDATE_COMICS:
         return {
            ...state,
            comicsItems: [...state.comicsItems, action.payload]
         }

      case UPDATE_SERIES:
         return {
            ...state,
            seriesItems: [...state.seriesItems, action.payload]
         }
      case UPDATE_EVENTS:
         return {
            ...state,
            eventsItems: [...state.eventsItems, action.payload]
         }
      case CHANGE_SELECTED_ITEM:
         return {
            ...state,
            tempItemToShow: action.payload
         }

      default:
         return state;
   }
}

export default itemsReducers;
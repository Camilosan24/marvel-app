import { useState, useEffect } from 'react'

import './style.css'
import { getSingleCharacterByStartName } from '../../requests'

const Searcher = ({ setItemsInformation }) => {

   const [showInput, setShowInput] = useState(false)
   const [inputValue, setInputValue] = useState('')
   const [errorSearching, setErrorSearching] = useState(false)
   const onClickButton = () => {
      if (inputValue === '') return setShowInput(!showInput)
   }

   const handleOnChange = (e) => {
      setInputValue(e.currentTarget.value)
   }

   //fetch a single character when inputValue change
   useEffect(() => {
      const searchCharacterByStartName = async () => {
         try {
            const res = await getSingleCharacterByStartName(inputValue)
            if (res) {
               setErrorSearching(false)
               return setItemsInformation([res])
            }
            throw new Error('No se encontro')
         } catch (e) {
            setErrorSearching(true)
            setItemsInformation([])
         }
      }
      if (inputValue.length > 0) searchCharacterByStartName()
   }, [inputValue])

   return (
      <fieldset className="fielset-for-search">
         <div className="input-box">
            <div className={`complete-input-box ${!showInput && "hide"}`}>
               <div className="rounded"></div>
               <input type="text" placeholder="Enter a charater's name" onChange={handleOnChange} value={inputValue} />
            </div>
         </div>
         <button onClick={onClickButton} style={{ background: errorSearching && 'red' }}><i className="fas fa-search"></i></button>
      </fieldset>
   )
}

export default Searcher

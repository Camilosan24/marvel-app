import { useState, useEffect } from 'react'
import './style.css'
import { getSingleCharacterByStartName } from '../../requests'

const Searcher = ({ setItemsInformation }) => {

   const [showInput, setShowInput] = useState(false)
   const [inputValue, setInputValue] = useState('')
   const onClickButton = () => {
      if (inputValue === '') return setShowInput(!showInput)
   }

   useEffect(() => {
      const searchCharacterByStartName = async () => {
         const res = await getSingleCharacterByStartName(inputValue)
         setItemsInformation([res])
      }
      if (inputValue !== '') {
         searchCharacterByStartName()
      }

   }, [inputValue])

   return (
      <fieldset className="fielset-for-search">
         <div className="input-box">
            <div className={`complete-input-box ${!showInput && "hide"}`}>
               <div className="rounded"></div>
               <input type="text" placeholder="Enter a charater's name" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
            </div>
         </div>
         <button onClick={onClickButton}><i className="fas fa-search"></i></button>
      </fieldset>
   )
}

export default Searcher

import { getAllCharactersByStartName } from '../../requests'
import { useState, useEffect } from 'react'
import useInputMediator from '../../hooks/useInputMediator'
import ListSmallCards from '../listSmallCards.js'
import './style.css'


const Searcher = ({ onClickCard, sectionName }) => {
   const [showInput, setShowInput] = useState(false)
   const [inputValue, setInputValue] = useState('')
   const inputValueToRead = useInputMediator(inputValue)
   const [errorSearching, setErrorSearching] = useState(false)
   const [charactersFound, setcharactersFound] = useState([])

   const onClickButton = () => {
      if (inputValue === '') setShowInput(!showInput)
   }

   const handleOnChange = (e) => {
      setInputValue(e.currentTarget.value)
   }

   //fetch a single character when inputValue change
   useEffect(() => {
      const searchCharacterByStartName = async () => {
         try {
            const res = await getAllCharactersByStartName(inputValueToRead)
            if (res.length > 0) {
               setErrorSearching(false)
               setcharactersFound(res)
               return;
            }
            throw new Error()
         } catch (error) {
            setErrorSearching(true)
            setcharactersFound([])
         }
      }
      if (inputValueToRead.length > 0) return searchCharacterByStartName();
      setcharactersFound([])
      setErrorSearching(false)
   }, [inputValueToRead])

   return (
      <fieldset className="fielset-for-search">
         <div className="input-box">
            <div className={`complete-input-box ${!showInput && "hide"}`} placeholder="hider-box">
               <div className="rounded"></div>
               <input type="text" placeholder="Enter a charater's name" onChange={handleOnChange} value={inputValue} />
               {showInput && <ListSmallCards charactersFound={charactersFound} onClickCard={onClickCard} sectionName={sectionName} />}
            </div>
         </div>
         <button onClick={onClickButton} style={{ background: errorSearching && 'red' }} aria-label="toggle input searcher"><i className="fas fa-search"></i></button>
      </fieldset >
   )
}

export default Searcher

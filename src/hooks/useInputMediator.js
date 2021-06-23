import { useState, useEffect } from 'react'

export default function useInputMediator(inputValue) {
   const [localInputValue, setLocalInputValue] = useState('')
   useEffect(() => {
      const timer = setTimeout(() => {
         setLocalInputValue(inputValue)
      }, 300)

      return () => {
         clearTimeout(timer)
      }
   }, [inputValue])
   return localInputValue
}
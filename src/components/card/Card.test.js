import Card from './Card'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'


const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
   useLocation: () => ({
      pathname: '/characters',
   }),
   useHistory: () => ({
      push: mockHistoryPush
   })
}))

describe('card tests', () => {
   test('should print the params sent by props (image source and character name)', () => {
      const character = {
         id: 1011334,
         name: '3-D Man',
         thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg'
         }
      }
      const component = render(<BrowserRouter><Card {...character} /></BrowserRouter>)
      const image = component.getByRole('img')
      expect(component.container).toHaveTextContent(character.name)
      expect(image.src).toEqual('http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_fantastic.jpg')
   })

   test('should print the params sent by props (image source and character name)', () => {
      const character = {
         id: 1011334,
         name: '3-D Man',
         thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg'
         }
      }
      const component = render(<BrowserRouter><Card {...character} /></BrowserRouter>)
      const image = component.getByRole('img')
      fireEvent.click(image)
      expect(mockHistoryPush).toBeCalledWith('/characters/1011334')
   })
})

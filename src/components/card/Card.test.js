import Card from './Card'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

jest.mock('react-router-dom', () => ({
   useLocation: jest.fn().mockReturnValue({
      pathname: '/characters',
   }),
   useHistory: jest.fn().mockReturnValue({
      push: jest.fn()
   })
}))

describe('card tests', () => {
   test('should print the params sent by props (image source and character name)', () => {
      const character = {
         name: '3-D Man',
         thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
            extension: 'jpg'
         }
      }
      const component = render(<Card {...character} />)
      const image = component.getByRole('img')
      expect(component.container).toHaveTextContent(character.name)
      expect(image.src).toEqual('http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/portrait_fantastic.jpg')
   })
})

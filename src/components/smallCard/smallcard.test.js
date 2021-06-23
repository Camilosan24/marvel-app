import SmallCard from "./index";
import { render } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
   useLocation: () => ({
      pathname: '/characters',
   }),
   useHistory: () => ({
      push: mockHistoryPush
   })
}))

describe('tests for SmallCard', () => {

   const character = {
      id: 1011334,
      name: '3-D Man',
      thumbnail: {
         path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
         extension: 'jpg'
      }
   }

   test('should have property id', () => {
      const component = render(<SmallCard image={character.thumbnail} name={character.name} key={character.id} id={character.id} />)
      expect(component.props).toHaveProperty('id', character.id,)
   })

   test('should have property id', () => {
      const component = render(<SmallCard image={character.thumbnail} name={character.name} key={character.id} id={character.id} />)
      expect(component.getByLabelText('small-card-box')).toBeDefined()
   })

});
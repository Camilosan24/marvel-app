import Character from './index'
import { render, act } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import * as requests from '../../requests'
import '@testing-library/jest-dom/extend-expect'



jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useParams: () => ({
      id: 1017100
   })
}));

const ironMan = {
   id: 1017100,
   name: 'iron man',
   comics: {
      items: [
         { name: 'ironman1' },
         { name: 'ironman2' },
         { name: 'ironman3' }
      ]
   }
}

beforeEach(() => {
   jest.spyOn(requests, 'getSingleCharacterById').mockImplementation(() => {
      return Promise.resolve(ironMan)
   })
})

describe('Name of the group', () => {
   test('should contain property name', async () => {
      let component;
      await act(async () => {
         component = render(<Character />)
      })
      // expect(component).toHaveBeenCalled
   });
});
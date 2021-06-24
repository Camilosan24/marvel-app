import CardsContainer from './index'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as requests from '../../requests'
import { act } from 'react-dom/test-utils'


const items = [
   {
      name: 'A-Bomb (HAS)',
      thumbnail: {
         path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
         extension: 'jpg'
      }
   },
   {
      name: 'A.I.M',
      thumbnail: {
         path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
         extension: 'jpg'
      }
   }
]


jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useLocation: () => ({
      pathname: "/characters"
   }),
}));

describe('tests for cardsContainer component', () => {
   beforeEach(() => {
      jest.spyOn(requests, 'getAllItems').mockImplementation(() => {
         return Promise.resolve(items)
      })
   })
   test('should render two childrens inside of cardsBox', async () => {
      let component;
      await act(async () => {
         component = render(< CardsContainer />)

      })
      let cardsBox = component.getByPlaceholderText('cards-container-box')
      await waitFor(() => {
         expect(cardsBox.childNodes.length).toBe(2)
      })
   })

   test('should have parameters page (0) and location.pathname (/characters)', async () => {
      render(< CardsContainer />)
      await waitFor(() => {
         expect(requests.getAllItems).toHaveBeenCalledWith(0, '/characters')
      })
   })

   test('should increment the number of the page to 2', async () => {
      let component = render(< CardsContainer />)
      let buttonNext = component.getByLabelText('go to the next page')
      let pageNumber = component.getByLabelText('page number')
      act(() => {
         fireEvent.click(buttonNext)
         component = render(< CardsContainer />)
      })
      expect(pageNumber.innerHTML).toEqual('2')
   })

   test('should decrement the number of the page to 1', async () => {
      let component = render(< CardsContainer />)
      let buttonNext = component.getByLabelText('go to the next page')
      let buttonPrev = component.getByLabelText('go to the previous page')
      let pageNumber = component.getByLabelText('page number')
      act(() => {
         fireEvent.click(buttonNext)
         component = render(< CardsContainer />)
      })
      act(() => {
         fireEvent.click(buttonPrev)
         component = render(< CardsContainer />)
      })

      expect(pageNumber.innerHTML).toEqual('1')
   })

   test('should do nothing the number is the same', async () => {
      let component = render(<CardsContainer />)
      let buttonPrev = component.getByLabelText('go to the previous page')
      let pageNumber = component.getByLabelText('page number')
      act(() => {
         fireEvent.click(buttonPrev)
         component = render(< CardsContainer />)
      })

      expect(pageNumber.innerHTML).toEqual('1')
   })

})

import CardsContainer from './index'
import { render, screen, waitFor } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import { getAllItems } from '../../requests'

jest.mock('../../requests')


jest.mock('react-router-dom', () => ({
   useLocation: jest.fn().mockReturnValue({
      pathname: '/characters'
   }),
   useHistory: jest.fn().mockReturnValue({
      push: jest.fn()
   })
}))

describe('tests for cardsContainer component', () => {
   // test('should ', async () => {
   //    let component = render(< CardsContainer />)
   //    let cardsBox = component.getByPlaceholderText('cards-container-box')

   //    const items = [
   //       {
   //          name: 'A-Bomb (HAS)',
   //          thumbnail: {
   //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
   //             extension: 'jpg'
   //          }
   //       },
   //       {
   //          title: 'A.I.M',
   //          thumbnail: {
   //             path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec',
   //             extension: 'jpg'
   //          }
   //       }
   //    ]
   //    getAllItems.mockReturnValueOnce(items)
   //    // console.log(prettyDOM(cardsBox))

   //    await waitFor(() => expect(cardsBox.childNodes).toBe(2))
   // })

})

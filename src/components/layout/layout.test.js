import Layout from './index'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useHistory: () => ({
      push: mockHistoryPush,
   }),
}));


const setup = () => {
   let component = render(
      <MemoryRouter>
         <Layout />
      </MemoryRouter>
   )
   return { component, history }
}

describe('Layout component tests', () => {
   test('should have property href defined', () => {
      const { component } = setup()
      const li = component.getAllByRole('link')
      li.forEach((element) => {
         expect(element.href).toBeDefined()
      })
   })
});
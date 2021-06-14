import Searcher from "./Searcher"
import { render, fireEvent } from '@testing-library/react'


const setup = () => {
   const mock = jest.fn()
   const utils = render(<Searcher setItemsInformation={mock} />)
   const input = utils.getByPlaceholderText("Enter a charater's name")
   return { ...utils, input, mock }
}

describe("testing for searcher component", () => {
   test('should change input value', () => {
      const { input } = setup()
      fireEvent.change(input, { target: { value: "iron man" } })
      expect(input.value).toBe('iron man')
   })
})
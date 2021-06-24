import Searcher from "./Searcher"
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { getAllCharactersByStartName } from '../../requests'
import { act } from "react-dom/test-utils"

jest.mock("../../requests")

const setup = () => {
   const container = render(<Searcher />)
   const input = container.getByPlaceholderText("Enter a charater's name")
   return { container, input }
}

describe("testing for searcher component", () => {
   test('should change input value', () => {
      const { input } = setup()
      fireEvent.change(input, { target: { value: "iron man" } })
      expect(input.value).toBe('iron man')
   })

   test("hiderBox should be hide when it's render it by first time", () => {
      const { container } = setup()
      const hiderBox = container.getByPlaceholderText('hider-box')
      expect(hiderBox).toHaveClass('hide')
   })

   test("hiderBox should be show when we click on button", () => {
      const { container } = setup()
      const buttonSearcher = container.getByLabelText('toggle input searcher')
      const hiderBox = container.getByPlaceholderText('hider-box')
      act(() => {
         fireEvent.click(buttonSearcher)
      })
      expect(hiderBox).not.toHaveClass('hide')
   })

   test("should have called getAllCharactersByStartName with iron man as parameter", async () => {
      let component = render(<Searcher />)
      const input = component.getByPlaceholderText("Enter a charater's name")
      fireEvent.change(input, { target: { value: "iron man" } })
      setTimeout(() => {
         expect(getAllCharactersByStartName).toHaveBeenCalledWith('iron man')
      }, 300)
   })
})
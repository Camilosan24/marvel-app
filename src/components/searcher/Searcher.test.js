import Searcher from "./Searcher"
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM } from '@testing-library/dom'
import { getSingleCharacterByStartName } from '../../requests'
import { act } from "react-dom/test-utils"

jest.mock("../../requests")

const setup = () => {
   const mock = jest.fn()
   const container = render(<Searcher setItemsInformation={mock} />)
   const input = container.getByPlaceholderText("Enter a charater's name")
   return { container, input, mock }
}

describe("testing for searcher component", () => {
   test('should change input value', () => {
      const { input } = setup()
      fireEvent.change(input, { target: { value: "iron man" } })
      expect(input.value).toBe('iron man')
   })

   test("hiderBox should be hide when it's render it by first time", () => {
      const { input, container } = setup()
      const buttonSearcher = container.getByLabelText('toggle input searcher')
      const hiderBox = container.getByPlaceholderText('hider-box')
      expect(hiderBox).toHaveClass('hide')
   })

   test("hiderBox should be show when we click on button", () => {
      const { input, container } = setup()
      const buttonSearcher = container.getByLabelText('toggle input searcher')
      const hiderBox = container.getByPlaceholderText('hider-box')
      fireEvent.click(buttonSearcher)
      expect(hiderBox).not.toHaveClass('hide')
   })

   test("should have called getSingleCharacterByStartName with iron man as parameter", async () => {
      let mock = jest.fn()
      let component = render(<Searcher setItemsInformation={mock} />)
      const input = component.getByPlaceholderText("Enter a charater's name")
      fireEvent.change(input, { target: { value: "iron man" } })
      expect(getSingleCharacterByStartName).toHaveBeenCalledWith('iron man')

   })

   test("should mock with [] as parameter because response wasnt good", async () => {
      let mock = jest.fn()
      let component = render(<Searcher setItemsInformation={mock} />)

      getSingleCharacterByStartName.mockResolvedValueOnce(null)

      const input = component.getByPlaceholderText("Enter a charater's name")
      fireEvent.change(input, { target: { value: "iron man" } })

      await waitFor(() => expect(mock).toBeCalledWith([]))

   })

   test("should mock with [] as parameter because response wasnt good", async () => {
      let mock = jest.fn()
      let component = render(<Searcher setItemsInformation={mock} />)

      const ironMan = {
         id: 1009368,
         name: 'iron man'
      }
      getSingleCharacterByStartName.mockResolvedValueOnce(ironMan)

      const input = component.getByPlaceholderText("Enter a charater's name")
      fireEvent.change(input, { target: { value: "iron man" } })

      await waitFor(() => expect(mock).toBeCalledWith([ironMan]))

   })
})
import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('TEST APP', () => {
  test("should render correctly", () => {
    render(<App />)
    const headingElement = screen.getByRole("heading", { level: 1 })
    const inputElement = screen.getByPlaceholderText(/what needs to be done?/i)
    const buttonElement = screen.queryByTestId('button')

    expect(headingElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue("")
    expect(inputElement).toHaveFocus()
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toBeDisabled()
  })

  test('INPUT EVENT', () => {
    render(<App />)
    const input = screen.getByPlaceholderText(/what needs to be done?/i)
    expect(screen.queryByTestId('input_value')).toContainHTML('')
    userEvent.type(input, 'test')
    expect(screen.queryByTestId('input_value')).toContainHTML('test')
  })

  test("should enable the button once the input field has a value", () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/what needs to be done?/i)
    const buttonElement = screen.queryByTestId('button')
    userEvent.type(inputElement, "walk the cat")
    expect(inputElement).toHaveValue("walk the cat")
    expect(buttonElement).toBeEnabled()
  })

  test("should disable the button once the input field is empty", () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/what needs to be done?/i)
    const buttonElement = screen.queryByTestId('button')
    userEvent.type(inputElement, "walk the cat")
    expect(buttonElement).toBeEnabled()
    userEvent.clear(inputElement)
    expect(buttonElement).toBeDisabled()
  })

  // test("should clear the input value once the submit button is clicked", () => {
  //   render(<App />);
  //   const inputElement = screen.getByPlaceholderText(/what needs to be done?/i)
  //   const buttonElement = screen.queryByTestId('button')
  //   userEvent.type(inputElement, "walk the cat")
  //   userEvent.click(buttonElement)
  //   expect(inputElement).toHaveValue("")
  // })

  // test("should list the todos submited", async () => {
  //   render(<App />)
  //   const inputElement = screen.getByPlaceholderText(/what needs to be done?/i)
  //   const buttonElement = screen.queryByTestId('button')
  //   userEvent.type(inputElement, "walk the cat")
  //   userEvent.click(buttonElement)
  //   userEvent.type(inputElement, "walk the dog")
  //   userEvent.click(buttonElement)
  //   const todos = screen.queryByTestId("todoList")
  //   expect(todos[0]).toHaveTextContent("walk the cat")
  //   expect(todos[1]).toHaveTextContent("walk the dog")
  //   expect(todos).toHaveLength(2)
  // })

  // test("should remove a todo when its delete button is clicked", () => {
  //   render(<App />);
  //   const inputElement = screen.getByPlaceholderText(/what needs to be done?/i)
  //   const buttonElement = screen.queryByTestId('button')
  //   userEvent.type(inputElement, "walk the cat")
  //   userEvent.click(buttonElement)
  //   const todo = screen.queryByTestId("todoList")
  //   const deleteButtonElement = screen.getByRole("button", { name: "delete" })
  //   userEvent.click(deleteButtonElement)
  //   expect(todo).not.toBeInTheDocument()
  // })
})
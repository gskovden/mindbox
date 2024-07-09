import { BaseSyntheticEvent } from 'react'
import './index.css'
import { IconChevronDown } from '@tabler/icons-react'
import { Todo } from '../../types/types'

interface FormProps {
  todo: Todo
  todos: Todo[]
  setTodo: (todo: Todo) => void
  setTodos: (todos: Todo[]) => void
}

const Form = ({ todo, todos, setTodo, setTodos }: FormProps) => {

  const handleAddTodo = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo({input_value: '', is_completed: false})
  }

  return (
    <form onSubmit={handleAddTodo} className='todoForm'>
      <button 
        className='todoButton'
        disabled={!todo.input_value}
        type='submit'
      >
        <IconChevronDown />
      </button>
      <input 
        className='todoInput'
        placeholder='What needs to be done?'
        value={todo.input_value}
        onChange={(e) => setTodo({ input_value: e.target.value, is_completed: false })}
      />
    </form>
  )
}

export default Form
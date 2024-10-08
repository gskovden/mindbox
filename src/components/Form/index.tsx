import { BaseSyntheticEvent } from 'react'
import './index.css'
import { IconChevronDown } from '@tabler/icons-react'
import { Todo } from 'types/types'
import { v4 as uuidv4 } from 'uuid'

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
    setTodo({ ...todo, id: uuidv4(), input_value: '' })
  }

  const onChange = (value: string) => {
    setTodo({ ...todo, input_value: value })
  }

  return (
    <form onSubmit={handleAddTodo} className='todoForm'>
      <button 
        className='todoButton'
        disabled={!todo.input_value}
        type='submit'
        aria-label='submit'
      >
        <IconChevronDown />
      </button>
      <input
        type='text'
        name='input_value'
        autoFocus
        className='todoInput'
        placeholder='What needs to be done?'
        value={todo.input_value}
        onChange={e => onChange(e.target.value)}
      />
    </form>
  )
}

export default Form
import { Todo } from 'types/types'
import './index.css'

interface TodoListProps {
  mappedTodos: Todo[]
  todos?: Todo[]
  onChangeCompleted: (index: number) => void
}

const TodoList = ({ todos, mappedTodos, onChangeCompleted }: TodoListProps) => {
  const onChange = (row: Todo, index: number) => {
    if (todos) {
      const todosIndex = todos.findIndex(todo => todo === row)
      onChangeCompleted(todosIndex)
    } else {
      onChangeCompleted(index)
    }
  }

  return (
    <ul className='todoList'>
      {mappedTodos.map((todo, index) => (
        <li key={todo.id} className='todos'>
          <label className='container'>
            <input
              type='checkbox'
              name='is_completed'
              aria-label='is_completed'
              checked={todo.is_completed}
              onChange={() => onChange(todo, index)}
            />
            <span className='checkmark'></span>
          </label>
          <p
            className={todo.is_completed ? 'todoCompleted' : 'todo'}
            aria-label='todo'
          >
            {todo.input_value}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default TodoList

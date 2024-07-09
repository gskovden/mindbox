import { Todo } from 'types/types'
import './index.css'

interface TodoListProps {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const onChangeCompleted = (index: number) => {
    const newTodos = [...todos]
    const newTodo = {
      ...todos[index],
      is_completed: !newTodos[index].is_completed,
    }
    newTodos[index] = newTodo
    setTodos(newTodos)
  }
  return (
    <ul className='todoList' data-testid='todoList'>
      {todos.map((todo, index) => (
        <li key={index} className='todos'>
          <label className='container'>
            <input type='checkbox' checked={todo.is_completed} onChange={() => onChangeCompleted(index)} />
            <span className='checkmark'></span>
          </label>
          <p data-testId='todo' className={todo.is_completed ? 'todoCompleted' : 'todo'}>
            {todo.input_value}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
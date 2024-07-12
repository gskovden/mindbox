import { useState } from 'react'
import './index.css'
import { Todo } from 'types/types'
import TodoList from 'components/TodoList'
import Form from "components/Form"
import TabList from 'components/Tabs/TabList'
import TabItem from 'components/Tabs/TabItem'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todo, setTodo] = useState<Todo>({
    id: uuidv4(),
    input_value: '',
    is_completed: false,
  })
  const [todos, setTodos] = useState<Todo[]>([])

  const activeTodos = todos.filter((todo) => !todo.is_completed)
  const completedTodos = todos.filter((todo) => todo.is_completed)

  const onChangeCompleted = (index: number) => {
    const newTodos = [...todos]    
    const newTodo = {
      ...todos[index],
      is_completed: !newTodos[index].is_completed,
    }
    newTodos[index] = newTodo
    setTodos(newTodos)
  }

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.is_completed))
  }

  const quantityItemsLeft = todos.filter((todo) => !todo.is_completed).length

  return (
    <div className="App">
      <h1 className="title">todos</h1>
      <div className="box">
        <Form todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos} />
        <TabList activeTabIndex={0} quantityItemsLeft={quantityItemsLeft} handleClearCompleted={handleClearCompleted}>
          <TabItem label='All'>
            <TodoList mappedTodos={todos} onChangeCompleted={onChangeCompleted} />
          </TabItem>
          <TabItem label='Active'>
            <TodoList mappedTodos={activeTodos} todos={todos} onChangeCompleted={onChangeCompleted} />
          </TabItem>
          <TabItem label='Completed'>
            <TodoList mappedTodos={completedTodos} todos={todos} onChangeCompleted={onChangeCompleted} />
          </TabItem>
        </TabList>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './index.css'
import { Todo } from './types/types'
import TodoList from './components/TodoList'
import Form from "./components/Form"
import TabList from './components/Tabs/TabList'
import TabItem from './components/Tabs/TabItem'

function App() {
  const [todo, setTodo] = useState<Todo>({
    input_value: '',
    is_completed: false,
  })
  const [todos, setTodos] = useState<Todo[]>([])

  const handleClearCompleted = () => {
    const notCompletedTodos = todos.filter((todo) => !todo.is_completed)
    setTodos(notCompletedTodos);
  }

  const quantityItemsLeft = todos.filter((todo) => !todo.is_completed).length

  return (
    <div className="App">
      <p className="title">todos</p>
      <div className="box">
        <Form todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos} />
          <TabList activeTabIndex={0} quantityItemsLeft={quantityItemsLeft} handleClearCompleted={handleClearCompleted}>
            <TabItem label='All'>
              <TodoList todos={todos} setTodos={setTodos} />
            </TabItem>
            <TabItem label='Active'>
              <TodoList todos={todos.filter((todo) => !todo.is_completed)} setTodos={setTodos} />
            </TabItem>
            <TabItem label='Completed'>
              <TodoList todos={todos.filter((todo) => todo.is_completed)} setTodos={setTodos} />
            </TabItem>
          </TabList>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './index.css'
import { Todo } from 'types/types'
import TodoList from 'components/TodoList'
import Form from "components/Form"
import TabList from 'components/Tabs/TabList'
import TabItem from 'components/Tabs/TabItem'

function App() {
  const [todo, setTodo] = useState<Todo>({
    input_value: '',
    is_completed: false,
  })
  const [todos, setTodos] = useState<Todo[]>([])

  const activeTodos = todos.filter((todo) => !todo.is_completed)
  const completedTodos = todos.filter((todo) => todo.is_completed)

  return (
    <div className="App">
      <h1 className="title">todos</h1>
      <div className="box">
        <Form todo={todo} todos={todos} setTodo={setTodo} setTodos={setTodos} />
        <TabList activeTabIndex={0} todos={todos} setTodos={setTodos}>
          <TabItem label='All'>
            <TodoList todos={todos} setTodos={setTodos} />
          </TabItem>
          <TabItem label='Active'>
            <TodoList todos={activeTodos} setTodos={setTodos} />
          </TabItem>
          <TabItem label='Completed'>
            <TodoList todos={completedTodos} setTodos={setTodos} />
          </TabItem>
        </TabList>
      </div>
    </div>
  )
}

export default App

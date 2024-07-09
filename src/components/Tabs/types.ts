import { ReactElement, ReactNode } from "react"
import { Todo } from "../../types/types"

export interface TabProps {
  label: string
  children: ReactNode
}

export interface TabListProps {
  activeTabIndex: number
  children: ReactElement<TabProps> | ReactElement<TabProps>[]
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}
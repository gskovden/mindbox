import { ReactElement, ReactNode } from "react"

export interface TabProps {
  label: string
  children: ReactNode
}

export interface TabListProps {
  activeTabIndex: number
  children: ReactElement<TabProps> | ReactElement<TabProps>[]
  quantityItemsLeft: number
  handleClearCompleted: () => void
}
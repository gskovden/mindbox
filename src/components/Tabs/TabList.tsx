import { Children, isValidElement, ReactElement, useState } from 'react'
import { TabListProps, TabProps } from './types'
import TabItem from './TabItem'
import './index.css'

const TabList = ({ children, activeTabIndex = 0, quantityItemsLeft, handleClearCompleted }: TabListProps) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex)
  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }
  const tabs = Children.toArray(children).filter(
    (child): child is ReactElement<TabProps> =>
      isValidElement(child) && child.type === TabItem
  )

  return (
    <div>
      {tabs[activeTab]}
      <div className='controlBox'>
        <p className='quantityItemsLeft'>{quantityItemsLeft} items left</p>
        <ul className='tabsButtons' role='tablist' aria-orientation='horizontal'>
          {tabs.map((tab, index) => (
            <li key={`tab-${index}`}>
              <button
                key={`tab-btn-${index}`}
                role='tab'
                id={`tab-${tab.props.label}`}
                aria-controls={`panel-${tab.props.label}`}
                aria-selected={activeTab === index}
                onClick={() => handleTabClick(index)}
                className={`controlButton ${
                  activeTab === index && 'controlButton-active'
                }`}
              >
                {tab.props.label}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleClearCompleted} className='clearButton' aria-label='clearCompleted'>
          Clear completed
        </button>
      </div>
    </div>
  )
}

export default TabList
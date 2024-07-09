import { TabProps } from './types'
import './index.css'

const TabItem: React.FC<TabProps> = ({ label, children }) => (
  <div
    role='tabpanel'
    aria-labelledby={`tab-${label}`}
    id={`panel-${label}`}
  >
    {children}
  </div>
)

export default TabItem

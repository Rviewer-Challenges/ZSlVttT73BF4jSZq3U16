import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { RightSidebar } from './components/RightSidebar'
import TwitterProvider from './context/TwitterContext'

function App () {
  return (
    <TwitterProvider>
      <div className="flex justify-center divide-x">
        <Sidebar/>
        <Home/>
        <RightSidebar/>
      </div>
    </TwitterProvider>
  )
}
export default App

import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { RightSidebar } from './components/RightSidebar'
import TwitterProvider from './context/TwitterContext'

function App () {
  return (
    <TwitterProvider>
      <div className="container mx-auto px-16 flex divide-x justify-center">
        <Sidebar/>
        <Home/>
        <RightSidebar/>
      </div>
    </TwitterProvider>
  )
}
export default App

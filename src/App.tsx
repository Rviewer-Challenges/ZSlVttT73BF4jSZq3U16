import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { RightSidebar } from './components/RightSidebar'

function App () {
  return (
    <div className="container mx-auto px-16 flex divide-x justify-center">
      <Sidebar/>
      <Home/>
      <RightSidebar/>
    </div>
  )
}
export default App

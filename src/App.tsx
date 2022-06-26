import { Sidebar } from './components/Sidebar'
import { Navigator } from './navigator/Navigator'
import { RightSidebar } from './components/RightSidebar'
import TwitterProvider from './context/TwitterContext'

function App () {
  return (
    <TwitterProvider>
      <div className="flex justify-center divide-x">
        <Sidebar/>
        {/* <Home/> */}
        <Navigator/>
        <RightSidebar/>
      </div>
    </TwitterProvider>
  )
}
export default App

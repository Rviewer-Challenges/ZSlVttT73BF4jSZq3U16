import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { RightSidebar } from './components/RightSidebar'
import { useTwitter } from './hooks/useTwitter'

function App () {
  const twitterManager = useTwitter()
  return (
    <div className="container mx-auto px-16 flex divide-x justify-center">
      <Sidebar/>
      <Home twitterManager={twitterManager}/>
      <RightSidebar/>
    </div>
  )
}
export default App

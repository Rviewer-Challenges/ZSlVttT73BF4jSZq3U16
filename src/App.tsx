import { TweetCard } from './components/TweetCard'
import { CreateTweet } from './components/CreateTweet'
import { Sidebar } from './components/Sidebar'
import { RightSidebar } from './components/RightSidebar'

function App () {
  return (
    <div className="flex flex-row divide-x px-60">
      <Sidebar/>
      <div className="grid grid-cols-1 divide-y flex-1">
        <CreateTweet/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
      </div>
      <div className="pl-5">
        <RightSidebar/>
      </div>
    </div>
  )
}

export default App

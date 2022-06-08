import { TweetCard } from './components/TweetCard'
import { CreateTweet } from './components/CreateTweet'
import { Sidebar } from './components/Sidebar'

function App () {
  return (
    <div className="flex flex-row divide-x">
      <Sidebar/>
      <div className="grid grid-cols-1 divide-y mx-10">
        <CreateTweet/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
      </div>
    </div>
  )
}

export default App

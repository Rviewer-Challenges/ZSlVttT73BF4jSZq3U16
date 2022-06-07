import { TweetCard } from './components/TweetCard'
import { CreateTweet } from './components/CreateTweet'

function App () {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Twitter Mirroring</h1>
      <div className="grid grid-cols-1 divide-y">
        <CreateTweet/>
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
      </div>
    </div>
  )
}

export default App

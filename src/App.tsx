import { TweetCard } from './components/TweetCard'

function App () {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Twitter Mirroring</h1>
      <div className="container mx-auto">
        <TweetCard/>
        <TweetCard/>
        <TweetCard/>
      </div>
    </div>
  )
}

export default App

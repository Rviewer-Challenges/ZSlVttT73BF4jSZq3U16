import { TweetCard } from '../components/TweetCard'
import { CreateTweet } from '../components/CreateTweet'

export const Feed = () => {
  return (
    <div className="grid grid-cols-1 divide-y flex-1">
      <CreateTweet/>
      <TweetCard/>
      <TweetCard/>
      <TweetCard/>
      <TweetCard/>
    </div>
  )
}

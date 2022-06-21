import { TweetCard } from '../components/TweetCard'
import { CreateTweet } from '../components/CreateTweet'
import { Tweet } from '../interfaces/Tweet'

interface Props {
  data: Tweet[];
}
export const Feed = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 divide-y flex-1">
      <CreateTweet/>
      { data.map((tweet, key) => <TweetCard tweet={tweet} key={key}/>)}
    </div>
  )
}

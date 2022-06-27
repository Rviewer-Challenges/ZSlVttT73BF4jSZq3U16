import { TweetCard } from '../components/TweetCard'
import { Tweet } from '../interfaces/Tweet'

interface Props {
  data: Tweet[];
}
export const Feed = ({ data }: Props) => {
  return (
    <div className="flex flex-1 flex-col divide-y">
      { data.map((tweet, key) => <TweetCard tweet={tweet} key={key}/>)}
    </div>
  )
}

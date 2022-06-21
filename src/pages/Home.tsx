import { CreateTweet } from '../components/CreateTweet'
import { Feed } from '../components/Feed'
import { Tweet } from '../interfaces/Tweet'

interface Props {
  twitterManager: {
    data: Tweet[];
    createTweet: (tweet: Tweet) => void;
  }
}
export const Home = ({ twitterManager }:Props) => {
  const { data, createTweet } = twitterManager
  return (
    <div className="max-w-2xl divide-y">
      <div>
        <div className="flex justify-between mx-10 mt-2">
          <h3 className="font-semibold text-xl">Home</h3>
        </div>
        <CreateTweet onSubmit={createTweet}/>
      </div>
      <Feed data={data}/>
    </div>
  )
}

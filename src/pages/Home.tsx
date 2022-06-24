import { useContext } from 'react'
import { CreateTweet } from '../components/CreateTweet'
import { Feed } from '../components/Feed'
import { Context } from '../context/TwitterContext'
import { TwitterContext } from '../types/TwitterContext'

export const Home = () => {
  const { data } = useContext(Context) as TwitterContext
  return (
    <div className="max-w-2xl divide-y">
      <div>
        <div className="flex justify-between mx-10 mt-2">
          <h3 className="font-semibold text-xl">Home</h3>
        </div>
        <CreateTweet/>
      </div>
      <Feed data={data}/>
    </div>
  )
}

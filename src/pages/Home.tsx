import { useContext } from 'react'
import { CreateTweet } from '../components/CreateTweet'
import { Feed } from '../components/Feed'
import { Context } from '../context/TwitterContext'
import { TwitterContext } from '../types/TwitterContext'
import { Header } from '../components/shared/Header'

export const Home = () => {
  const { data } = useContext(Context) as TwitterContext
  return (
    <div className="divide-y">
      <div>
        <Header header='Home'/>
        <CreateTweet/>
      </div>
      <Feed data={data}/>
    </div>
  )
}

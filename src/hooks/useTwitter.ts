import { useState } from 'react'
import { Tweet } from '../interfaces/Tweet'
import { defaultData, defaultUser } from '../utils/data'

export const useTwitter = () => {
  const [data, setData] = useState(defaultData)

  const parseTweetBeforeSave = (tweet: Tweet):Tweet => {
    tweet.date = Date.now()
    tweet.user = defaultUser

    return tweet
  }
  const createTweet = (tweet: Tweet) => {
    const tweetCompleted = parseTweetBeforeSave(tweet)
    setData([tweetCompleted, ...data])
  }

  return {
    data,
    createTweet
  }
}

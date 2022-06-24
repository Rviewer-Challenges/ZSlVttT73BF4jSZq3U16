import React, { createContext, useState } from 'react'
import { Tweet } from '../interfaces/Tweet'
import { TwitterContext } from '../types/TwitterContext'
import { defaultData, defaultUser } from '../utils/data'

export const Context = createContext<TwitterContext| null>(null)

interface Props {
  children?: React.ReactNode
}

const TwitterProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<Tweet[]>(defaultData)
  const [media, setMedia] = useState<string[]>([])

  const createTweet = (tweet:Tweet) => {
    tweet = {
      ...tweet,
      id: Math.random(),
      user: defaultUser,
      likes: 0,
      retweets: 0,
      comments: 0,
      date: Date.now()
    }
    setData([tweet, ...data])
  }

  const uploadMedia = (mediaToUpdate: string) => {
    if (media.length < 4) {
      setMedia([...media, mediaToUpdate])
    }
  }

  const clearMediaList = () => {
    setMedia([])
  }

  const editTweet = (tweet: Tweet) => {
    const newData = data.map((item) => item.id === tweet.id ? tweet : item)
    setData(newData)
  }

  return (
    <Context.Provider value={{ data, media, createTweet, uploadMedia, clearMediaList, editTweet }}>
      {children}
    </Context.Provider>
  )
}

export default TwitterProvider

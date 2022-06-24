import { Tweet } from '../interfaces/Tweet'
import { useForm } from 'react-hook-form'
import { TweetSchema } from '../schemas/Tweet'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { Context } from '../context/TwitterContext'
import { TwitterContext } from '../types/TwitterContext'

export const useCreateTweet = () => {
  const { createTweet, media, clearMediaList, deleteImageFromMedia } = useContext(Context) as TwitterContext

  const { register, handleSubmit, reset } = useForm<Tweet>({
    resolver: yupResolver(TweetSchema)
  })

  const onSubmit = (tweet: Tweet) => {
    tweet.images = media
    createTweet(tweet)
    // reset values
    clearMediaList()
    reset()
  }

  return {
    media,
    register,
    handleSubmit,
    onSubmit,
    deleteImageFromMedia
  }
}

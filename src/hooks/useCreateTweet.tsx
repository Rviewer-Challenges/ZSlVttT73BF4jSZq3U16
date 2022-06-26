import { Tweet } from '../interfaces/Tweet'
import { useForm } from 'react-hook-form'
import { TweetSchema } from '../schemas/Tweet'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { Context } from '../context/TwitterContext'
import { TwitterContext } from '../types/TwitterContext'

export const useCreateTweet = () => {
  const { createTweet, media, clearMediaList, deleteImageFromMedia } = useContext(Context) as TwitterContext

  const methods = useForm<Tweet>({
    resolver: yupResolver(TweetSchema)
  })

  const { register, handleSubmit, reset } = methods

  const onSubmit = (tweet: Tweet) => {
    tweet.images = media
    createTweet(tweet)
    // reset values
    clearMediaList()
    reset()
  }

  return {
    media,
    methods,
    register,
    handleSubmit,
    onSubmit,
    deleteImageFromMedia
  }
}

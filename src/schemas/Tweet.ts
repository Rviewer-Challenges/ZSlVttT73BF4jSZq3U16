import * as yup from 'yup'

export const TweetSchema = yup.object({
  tweet: yup.string().min(1).max(280).required()
})

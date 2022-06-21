import * as yup from 'yup'

export const TweetSchema = yup.object({
  tweet: yup.string().max(280).required(),
  media: yup.array().max(4).of(yup.string())
})

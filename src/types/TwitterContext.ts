import { Tweet } from '../interfaces/Tweet'

export type TwitterContext = {
  data: Tweet[]
  media: string[]
  createTweet: (tweet: Tweet) => void
  uploadMedia: (media:string) => void
  clearMediaList: () => void
  editTweet: (tweet:Tweet) => void
}

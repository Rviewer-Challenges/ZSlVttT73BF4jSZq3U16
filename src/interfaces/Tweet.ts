import { User } from './User'

export interface Tweet {
  id: number
  tweet: string;
  images?: string[];
  user: User;
  likes: number;
  retweets: number;
  comments: number;
  date: number;
}

import { Tweet } from '../interfaces/Tweet'
import { User } from '../interfaces/User'

const users:User[] = [
  { id: 1, name: 'Jose Rodolfo Rojas', username: 'jrodolforojas', photo: 'https://pbs.twimg.com/profile_images/1520583033346269184/SqYY-5kz_400x400.jpg', isVerified: false },
  { id: 2, name: 'Brais Moure', username: 'mouredev', photo: 'https://pbs.twimg.com/profile_images/1538973859902373888/mHUxStmy_400x400.jpg', isVerified: true },
  { id: 3, name: 'Rviewer', username: 'rviewer_', photo: 'https://pbs.twimg.com/profile_images/1504130953983180802/T-2OXy5W_400x400.png', isVerified: false }

]
export const defaultData:Tweet[] = [
  { id: 1, tweet: 'Hello World', user: users[0], comments: 0, likes: 100, retweets: 50, date: Date.now(), images: ['https://c.tenor.com/pvFJwncehzIAAAAC/hello-there-private-from-penguins-of-madagascar.gif'] },
  { id: 2, tweet: 'Follow me as @jrodolforojas', user: users[0], comments: 0, likes: 100, retweets: 50, date: Date.now() },
  { id: 3, tweet: 'Estoy en directo en twitch.tv/mouredev', user: users[1], comments: 10, likes: 10000, retweets: 100, date: Date.now() },
  { id: 4, tweet: 'Look this amazing challenge project #challenge #project', user: users[2], comments: 0, likes: 500, retweets: 100, date: Date.now() },
  { id: 5, tweet: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour', user: users[1], comments: 0, likes: 100, retweets: 50, date: Date.now() }
]

export const defaultUser:User = users[0]

import { Tweet } from '../interfaces/Tweet'
import { User } from '../interfaces/User'

const users:User[] = [
  { id: 1, name: 'Jose Rodolfo Rojas', username: 'jrodolforojas', photo: 'https://pbs.twimg.com/profile_images/1520583033346269184/SqYY-5kz_400x400.jpg', isVerified: false },
  { id: 2, name: 'Brais Moure', username: 'mouredev', photo: 'https://pbs.twimg.com/profile_images/1541512048424665090/zz6jA1mM_400x400.jpg', isVerified: true },
  { id: 3, name: 'Rviewer', username: 'rviewer_', photo: 'https://pbs.twimg.com/profile_images/1504130953983180802/T-2OXy5W_400x400.png', isVerified: false },
  { id: 4, name: 'Peter Parker', username: 'spiderman', photo: 'https://i.pinimg.com/originals/cc/35/13/cc35139a1e84ce860f2c627e1d6c232c.png', isVerified: true }

]
export const defaultData:Tweet[] = [
  {
    id: 1,
    tweet: 'Another day in the office.',
    user: users[3],
    comments: 10,
    likes: 100,
    retweets: 30,
    date: Date.now(),
    images: [
      'https://media.vanityfair.com/photos/62040ac95d7a3b1cad729049/master/pass/spider-man-no-way-home-05.jpg',
      'https://static.onecms.io/wp-content/uploads/sites/6/2019/09/df-15250_rv2-2000.jpg',
      'https://static01.nyt.com/images/2021/12/17/arts/16spider-man-review/merlin_199080312_33263efe-93b3-432c-84ca-6e040624dfdf-videoSixteenByNine3000.jpg',
      'https://i.blogs.es/4172c9/ffxdh5lx0acd7ic/1366_2000.jpeg']
  },
  {
    id: 1,
    tweet: 'Hello World',
    user: users[0],
    comments: 10,
    likes: 100,
    retweets: 30,
    date: Date.now(),
    images: ['https://c.tenor.com/pvFJwncehzIAAAAC/hello-there-private-from-penguins-of-madagascar.gif']
  },
  {
    id: 2,
    tweet: '🎮 Have you ever played the classic Rock🪨 Paper📝 Scissors✂️  game? #Challenge25 #JavaScript @jrodolforojas',
    user: users[0],
    comments: 0,
    likes: 100,
    retweets: 50,
    date: Date.now(),
    images: ['https://pbs.twimg.com/media/FVvCiofXsAUwT2B?format=jpg&name=4096x4096']
  },
  {
    id: 3,
    tweet: '📢 Nuevo vídeo \n 10 BUENAS PRÁCTICAS para MEJORAR tu PROYECTO de SOFTWARE 🚀 \n 📺 https://youtu.be/Vd1H08L0nyY',
    user: users[1],
    comments: 10,
    likes: 10000,
    retweets: 100,
    date: Date.now(),
    images: ['https://pbs.twimg.com/media/FWBx-29X0AAYhEd?format=jpg&name=small']
  },
  {
    id: 4,
    tweet: 'Look this amazing challenge project #challenge #project \n https://github.com/Rviewer-Challenges/ZSlVttT73BF4jSZq3U16',
    user: users[2],
    comments: 0,
    likes: 500,
    retweets: 100,
    date: Date.now()
  },
  {
    id: 5,
    tweet: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    user: users[1],
    comments: 0,
    likes: 100,
    retweets: 50,
    date: Date.now()
  },
  {
    id: 6,
    tweet: 'Made with ❤️ by @jrodolforojas',
    user: users[0],
    comments: 0,
    likes: 23,
    retweets: 23,
    date: Date.now()
  }
]

export const defaultUser:User = users[3]

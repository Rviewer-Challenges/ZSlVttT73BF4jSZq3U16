import { UserPicture } from './shared/UserPicture'
import { TweetAction } from './shared/TweetAction'
import { Tweet } from '../interfaces/Tweet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from './shared/Text'
import moment from 'moment'
// import { useStat } from '../hooks/useStat'
import { useContext, useState } from 'react'
import { Context } from '../context/TwitterContext'
import { TwitterContext } from '../types/TwitterContext'

interface Props {
  tweet: Tweet
}

export const TweetCard = ({ tweet }: Props) => {
  const { comments, date, tweet: text, user, images, likes, retweets } = tweet
  const { username, photo, name, isVerified } = user
  const dateFormatted = moment(date).startOf('day').fromNow()

  const { editTweet } = useContext(Context) as TwitterContext

  const [isLikeClicked, setIsLikeClicked] = useState(false)
  const [isRetweetClicked, setIsRetweetClicked] = useState(false)

  const handleLikes = () => {
    if (!isLikeClicked) {
      tweet.likes++
      setIsLikeClicked(true)
    } else {
      tweet.likes--
      setIsLikeClicked(false)
    }
    editTweet(tweet)
  }

  const handleRetweets = () => {
    if (!isRetweetClicked) {
      tweet.retweets++
      setIsRetweetClicked(true)
    } else {
      tweet.retweets--
      setIsRetweetClicked(false)
    }
    editTweet(tweet)
  }

  return (
    <div className="flex items-start space-x-5 px-6 pt-2">
      <div>
        <UserPicture url={photo} width={60} heigth={60}/>
      </div>
      <div className="flex-1">
        {/* Name */}
        <label className="font-semibold text-slate-900">{name}</label>
        {isVerified && <FontAwesomeIcon className="ml-1" icon={['fas', 'circle-check']} color='#1d9bf0'/>}
        {/* Username */}
        <label className="ml-2 mr-1">@{username}</label>
        {/* hour */}
        <label className="ml-1">· {dateFormatted}</label>
        {/* Text */}
        <Text text={text}/>
        <div className="container grid grid-cols-2 gap-2 mx-auto mb-2">
          {
            images?.map((image, key) => (
              <div key={key} >
                <img src={image}className="w-full rounded-md col-span-2 row-span-2"/>
              </div>
            ))
          }
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mr-2">
          <TweetAction prefix='far'icon='comment'stat={comments}/>
          <TweetAction prefix='fas'icon='retweet' stat={retweets} handleOnClick={handleRetweets}/>
          <TweetAction prefix='far'icon='heart' stat={likes} handleOnClick={handleLikes}/>
          <TweetAction prefix='fas'icon='arrow-up-from-bracket'/>
        </div>
      </div>
    </div>
  )
}

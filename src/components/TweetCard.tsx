import { UserPicture } from './shared/UserPicture'
import { TweetAction } from './shared/TweetAction'
import { Tweet } from '../interfaces/Tweet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text } from './shared/Text'
import moment from 'moment'

interface Props {
  tweet: Tweet
}

export const TweetCard = ({ tweet }: Props) => {
  const { comments, likes, date, retweets, tweet: text, user } = tweet
  const { username, photo, name, isVerified } = user
  const dateFormatted = moment(date).startOf('day').fromNow()

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
        {/* <p>{text}</p> */}
        <Text text={text}/>
        {/* Action Buttons */}
        <div className="flex justify-between mr-2">
          <TweetAction prefix='far'icon='comment'stat={comments}/>
          <TweetAction prefix='fas'icon='retweet' stat={retweets}/>
          <TweetAction prefix='far'icon='heart' stat={likes}/>
          <TweetAction prefix='fas'icon='arrow-up-from-bracket'/>
        </div>
      </div>
    </div>
  )
}

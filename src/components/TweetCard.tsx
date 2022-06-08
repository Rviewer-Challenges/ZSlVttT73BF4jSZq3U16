import { UserPicture } from './shared/UserPicture'
import { IconButton } from './shared/IconButton'

export const TEST_USER_PROFILE_URL = 'https://pbs.twimg.com/profile_images/1520583033346269184/SqYY-5kz_400x400.jpg'
export const TEST_USER_NAME = 'Jose Rodolfo Rojas'
export const TEST_USERNAME = 'jrodolforojas'

export const TweetCard = () => {
  return (
    <div className="flex items-start space-x-5 px-6 pt-2">
      <UserPicture url={TEST_USER_PROFILE_URL} width={60} heigth={60}/>
      <div className="flex-1">
        {/* Name */}
        <label className="font-semibold text-slate-900 mr-2">{TEST_USER_NAME}</label>
        {/* Username */}
        <label className="mr-1">@{TEST_USERNAME}</label>
        {/* hour */}
        <label className="ml-1">· 20h</label>
        {/* Text */}
        <p>It is a long established fact that a reader will be distracted by the readable content
        of a page when looking at its layout</p>
        {/* Action Buttons */}
        <div className="flex justify-between mr-2">
          <IconButton prefix='far'icon='comment' color='#536471'/>
          <IconButton prefix='fas'icon='retweet' statLabel={5} color='#536471'/>
          <IconButton prefix='far'icon='heart' statLabel={10} color='#536471'/>
          <IconButton prefix='fas'icon='arrow-up-from-bracket' color='#536471'/>
        </div>
      </div>
    </div>
  )
}

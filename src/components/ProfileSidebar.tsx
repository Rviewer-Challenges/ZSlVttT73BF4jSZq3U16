import { IconButton } from './shared/IconButton'
import { UserPicture } from './shared/UserPicture'
import { TEST_USER_PROFILE_URL, TEST_USER_NAME, TEST_USERNAME } from './TweetCard'

export const ProfileSidebar = () => {
  return (
    <div className="flex items-center space-x-2 p-2 bg-green-300 rounded-full justify-center">
      <UserPicture url={TEST_USER_PROFILE_URL} heigth={40} width={40}/>
      <div className="flex flex-col">
        <span className="font-semibold">{TEST_USER_NAME}</span>
        <span>@{TEST_USERNAME}</span>
      </div>
      <IconButton icon='ellipsis' prefix='fas' color='#0f1419'/>
    </div>
  )
}

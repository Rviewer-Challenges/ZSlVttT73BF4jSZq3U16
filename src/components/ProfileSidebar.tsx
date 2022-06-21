import { IconButton } from './shared/IconButton'
import { UserPicture } from './shared/UserPicture'
import { defaultUser } from '../utils/data'

export const ProfileSidebar = () => {
  return (
    <div className="flex items-center space-x-2 p-2 rounded-full justify-center">
      <UserPicture url={defaultUser.photo} heigth={40} width={40}/>
      <div className="flex flex-col">
        <span className="font-semibold">{defaultUser.name}</span>
        <span>@{defaultUser.username}</span>
      </div>
      <IconButton icon='ellipsis' prefix='fas' color='#0f1419'/>
    </div>
  )
}

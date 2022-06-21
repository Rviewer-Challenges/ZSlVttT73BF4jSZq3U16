import { UserPicture } from './shared/UserPicture'
import { TextButton } from './shared/TextButton'
import { defaultUser } from '../utils/data'
import { CreateTweetActionIcon } from './shared/CreateTweetActionIcon'

export const CreateTweet = () => {
  return (
    <div className="flex items-start space-x-6 px-6">
      <div className="pt-4">
        <UserPicture url={defaultUser.photo} width={60} heigth={60}/>
      </div>
      <div className="flex-1">
        <input placeholder="Whats happening?" type="text" className="w-full p-4 my-3 border-none outline-none"/>
        <div className="justify-between flex flex-row">
          <div>
            <CreateTweetActionIcon prefix='far' icon='image' requiredMedia={true} type='file' accept='image/x-png, image/jpeg, image/jpg, image/gif'/>
            <CreateTweetActionIcon icon='chart-bar' prefix='far' disabled={true}/>
            <CreateTweetActionIcon icon='face-smile' prefix='far' disabled={true}/>
            <CreateTweetActionIcon icon='calendar' prefix='far' disabled={true}/>
            <CreateTweetActionIcon icon='location-dot' prefix='fas' disabled={true}/>
          </div>
          <div className="pb-3">
            <TextButton label="Tweet"/>
          </div>
        </div>

      </div>
    </div>
  )
}

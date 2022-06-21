import { UserPicture } from './shared/UserPicture'
import { TextButton } from './shared/TextButton'
import { defaultUser } from '../utils/data'
import { CreateTweetActionIcon } from './shared/CreateTweetActionIcon'
import { Tweet } from '../interfaces/Tweet'
import { useForm } from 'react-hook-form'

interface Props {
  onSubmit: (tweet: Tweet) => void
}

export const CreateTweet = ({ onSubmit }:Props) => {
  const { register, handleSubmit } = useForm<Tweet>()

  return (
    <div className="flex items-start space-x-6 px-6">
      <div className="pt-4">
        <UserPicture url={defaultUser.photo} width={60} heigth={60}/>
      </div>
      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            id="tweet"
            type="textarea"
            placeholder="Whats happening?"
            className="w-full p-3 my-3 border-none outline-none text-xl"
            {...register('tweet')}/>
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
        </form>
      </div>
    </div>
  )
}

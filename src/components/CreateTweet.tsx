import { UserPicture } from './shared/UserPicture'
import { TextButton } from './shared/TextButton'
import { defaultUser } from '../utils/data'
import { CreateTweetActionIcon } from './shared/CreateTweetActionIcon'
import { useCreateTweet } from '../hooks/useCreateTweet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CreateTweet = () => {
  const { media, register, handleSubmit, onSubmit, deleteImageFromMedia } = useCreateTweet()

  return (
    <div className="flex items-start space-x-6 px-6">
      <div className="pt-4">
        <UserPicture url={defaultUser.photo} width={60} heigth={60}/>
      </div>
      <div className="flex-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Whats happening?"
            className="w-full p-3 my-3 border-none outline-none text-xl"
            {...register('tweet')}/>
          <div className="container grid grid-cols-2 gap-2 mx-auto mb-2">
            {media.map((item, key) => (
              <div key={key} className="relative">
                <button className="rounded-full bg-black absolute top-1 left-1 px-5 py-3 opacity-75"
                  onClick={() => deleteImageFromMedia(item)}>
                  <FontAwesomeIcon icon={['fas', 'xmark']} color='white'/>
                </button>
                <img src={item} className="w-full rounded-md col-span-4 row-span-4"/>
              </div>
            ))}
          </div>
          <div className="justify-between flex flex-row">
            <div>
              <CreateTweetActionIcon
                icon='image'
                prefix='far'
                requiredMedia={true}
                type='file'
                accept='image/x-png, image/jpeg, image/jpg, image/gif'/>
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

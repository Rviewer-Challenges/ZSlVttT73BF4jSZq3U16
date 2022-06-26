import { defaultUser } from '../utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProfileSidebar = () => {
  return (
    <div className="flex flex-row justify-center rounded-full w-full mb-2 items-center ml-2">
      <img src={defaultUser.photo} className="rounded-full h-10 w-10"/>
      <div className="flex flex-1 flex-col xl:ml-2">
        <div className="flex flex-row items-start">
          <span className="hidden xl:block font-semibold">{defaultUser.name}</span>
          {defaultUser.isVerified && <FontAwesomeIcon className="ml-1 mt-1" icon={['fas', 'circle-check']} color='#1d9bf0'/>}
        </div>
        <span className="hidden xl:block">@{defaultUser.username}</span>
      </div>
      <div className="invisible xl:visible lg:mr-2">
        <FontAwesomeIcon icon={['fas', 'ellipsis']} color='#0f1419'/>
      </div>
    </div>
  )
}

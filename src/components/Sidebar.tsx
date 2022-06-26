import { IconButton } from './shared/IconButton'
import { ProfileSidebar } from './ProfileSidebar'
import { TwitterOriginal } from './icons/TwitterOriginal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between pr-5 xl:w-72 h-screen pl-1 w-16">
      <div className="flex flex-col items-start">
        <div className="rounded-full p-3">
          <TwitterOriginal width={28} height={28} />
        </div>
        <IconButton icon='home' prefix='fas' color='#0f1419' statLabel='Home' navbarItem/>
        <IconButton icon='hashtag' prefix='fas' color='#0f1419' statLabel='Explore' navbarItem/>
        <IconButton icon='bell' prefix='far' color='#0f1419' statLabel='Notifications' navbarItem/>
        <IconButton icon='envelope' prefix='far' color='#0f1419' statLabel='Messages'navbarItem/>
        <IconButton icon='bookmark' prefix='far' color='#0f1419' statLabel='Bookmarks' navbarItem/>
        <IconButton icon='list' prefix='fas' color='#0f1419' statLabel='Lists' navbarItem/>
        <IconButton icon='user' prefix='far' color='#0f1419' statLabel='Profile' navbarItem/>
        <IconButton icon='ellipsis' prefix='fas' color='#0f1419' statLabel='More' navbarItem/>
        <button className="flex flex-row justify-center rounded-full bg-[#1d9bf0] p-4 xl:w-full">
          <FontAwesomeIcon icon={['fas', 'feather']} color='white' size='lg' className="block xl:hidden"/>
          <span className="text-xl font-bold text-zinc-50 hidden xl:block">Tweet</span>
        </button>
      </div>
      <ProfileSidebar/>
    </div>
  )
}

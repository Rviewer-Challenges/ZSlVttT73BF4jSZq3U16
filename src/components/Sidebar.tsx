import { IconButton } from './shared/IconButton'
import { ProfileSidebar } from './ProfileSidebar'
import { TwitterLogo } from './icons/TwitterLogo'

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between ml-10">
      <div className="flex flex-col items-start">
        <div className="rounded-full p-3">
          <TwitterLogo width={28} height={28} />
        </div>
        <IconButton icon='home' prefix='fas' color='#0f1419' statLabel='Home' navbarItem/>
        <IconButton icon='hashtag' prefix='fas' color='#0f1419' statLabel='Explore' navbarItem/>
        <IconButton icon='bell' prefix='far' color='#0f1419' statLabel='Notifications' navbarItem/>
        <IconButton icon='envelope' prefix='far' color='#0f1419' statLabel='Messages'navbarItem/>
        <IconButton icon='bookmark' prefix='far' color='#0f1419' statLabel='Bookmarks' navbarItem/>
        <IconButton icon='list' prefix='fas' color='#0f1419' statLabel='Lists' navbarItem/>
        <IconButton icon='user' prefix='far' color='#0f1419' statLabel='Profile' navbarItem/>
        <IconButton icon='ellipsis' prefix='fas' color='#0f1419' statLabel='More' navbarItem/>
        <button className="rounded-full bg-[#1d9bf0] w-full p-4 font-bold text-zinc-50 mt-5">Tweet</button>
      </div>
      <ProfileSidebar/>
    </div>
  )
}

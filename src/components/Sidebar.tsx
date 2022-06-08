import { IconButton } from './shared/IconButton'
import { TextButton } from './shared/TextButton'
import { ProfileSidebar } from './ProfileSidebar'

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col items-start mx-5">
        <IconButton icon='home' prefix='fas' color='#0f1419' statLabel='Home' navbarItem/>
        <IconButton icon='hashtag' prefix='fas' color='#0f1419' statLabel='Explore' navbarItem/>
        <IconButton icon='bell' prefix='far' color='#0f1419' statLabel='Notifications' navbarItem/>
        <IconButton icon='envelope' prefix='far' color='#0f1419' statLabel='Messages'navbarItem/>
        <IconButton icon='bookmark' prefix='far' color='#0f1419' statLabel='Bookmarks' navbarItem/>
        <IconButton icon='list' prefix='fas' color='#0f1419' statLabel='Lists' navbarItem/>
        <IconButton icon='user' prefix='far' color='#0f1419' statLabel='Profile' navbarItem/>
        <IconButton icon='ellipsis' prefix='fas' color='#0f1419' statLabel='More' navbarItem/>
        <TextButton label='Tweet'/>
      </div>
      <ProfileSidebar/>
    </div>
  )
}

import { SidebarItem } from './shared/SidebarItem'
import { ProfileSidebar } from './ProfileSidebar'
import { TwitterOriginal } from './icons/TwitterOriginal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import routes from '../navigator/routes'

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between pr-5 xl:w-72 h-screen pl-1 w-16">
      <div className="flex flex-col items-start">
        <div className="rounded-full p-3">
          <TwitterOriginal width={28} height={28} />
        </div>
        {routes.map((route, key) => (
          <SidebarItem key={key} prefix={route.prefix} icon={route.icon} path={route.path} name={route.name}/>
        ))}
        <button className="flex flex-row justify-center rounded-full bg-[#1d9bf0] p-4 xl:w-full">
          <FontAwesomeIcon icon={['fas', 'feather']} color='white' size='lg' className="block xl:hidden"/>
          <span className="text-xl font-bold text-zinc-50 hidden xl:block">Tweet</span>
        </button>
      </div>
      <ProfileSidebar/>
    </div>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core'
import { faRetweet, faArrowUpFromBracket, faLocationDot, faEarthAmerica, faHome, faHashtag, faList, faEllipsis, faMagnifyingGlass, faStar, faCircleCheck, faGift, faXmark, faFeather } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart, faImage, faChartBar, faFaceSmile, faCalendar, faBell, faEnvelope, faBookmark, faUser } from '@fortawesome/free-regular-svg-icons'
library.add(faComment, faRetweet, faHeart, faArrowUpFromBracket, faImage, faChartBar, faFaceSmile, faCalendar,
  faLocationDot, faEarthAmerica, faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis,
  faMagnifyingGlass, faStar, faCircleCheck, faGift, faXmark, faFeather)

interface Props{
  icon: IconName
  prefix: IconPrefix
  statLabel?:number|string
  color?:string
  handleOnClick?: () => void
  navbarItem?: boolean
}
export const IconButton = ({ icon, statLabel, prefix, color = '#1d9bf0', handleOnClick, navbarItem = false }:Props) => {
  return (
    <button className="flex ... flex-row items-center justify-center rounded-full mr-3 my-3 px-2" onClick={handleOnClick}>
      <div className="rounded-full p-1">
        <FontAwesomeIcon icon={[prefix, icon]} color={color} size={navbarItem ? 'lg' : '1x'}/>
      </div>
      { navbarItem
        ? <span className="ml-2 font-normal text-xl invisible xl:visible">{statLabel}</span>
        : <span className="ml-2 text-sm md:block invisible xl:visible">{statLabel}</span>
      }
    </button>
  )
}

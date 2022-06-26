import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'wouter'
import { faRetweet, faArrowUpFromBracket, faLocationDot, faEarthAmerica, faHome, faHashtag, faList, faEllipsis, faMagnifyingGlass, faStar, faCircleCheck, faGift, faXmark, faFeather, faLink } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart, faImage, faChartBar, faFaceSmile, faCalendar, faBell, faEnvelope, faBookmark, faUser } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faComment, faRetweet, faHeart, faArrowUpFromBracket, faImage, faChartBar, faFaceSmile, faCalendar,
  faLocationDot, faEarthAmerica, faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsis,
  faMagnifyingGlass, faStar, faCircleCheck, faGift, faXmark, faFeather, faLinkedin, faGithub, faInstagram,
  faTwitter, faLink)

interface Props{
  path: string
  name: string
  icon: IconName
  prefix: IconPrefix
}
export const SidebarItem = ({ path, name, icon, prefix }:Props) => {
  return (
    <Link href={path}>
      <a className="flex ... flex-row items-center justify-center rounded-full mr-3 my-3 px-2 py-1">
        <FontAwesomeIcon icon={[prefix, icon]} color='#0f1419' size='lg' className="rounded-full p-1"/>
        <span className="ml-2 font-normal text-xl invisible xl:visible">{name}</span>
      </a>
    </Link>
  )
}

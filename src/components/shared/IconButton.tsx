import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core'
import { faRetweet, faArrowUpFromBracket, faLocationDot, faEarthAmerica } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart, faImage, faChartBar, faFaceSmile, faCalendar } from '@fortawesome/free-regular-svg-icons'
library.add(faComment, faRetweet, faHeart, faArrowUpFromBracket, faImage, faChartBar, faFaceSmile, faCalendar,
  faLocationDot, faEarthAmerica)

interface Props{
  icon: IconName
  prefix: IconPrefix
  statLabel?:number|string
  color?:string
  handleOnClick?: () => void
}
export const IconButton = ({ icon, statLabel, prefix, color = '#1d9bf0', handleOnClick }:Props) => {
  return (
    <button onClick={handleOnClick}><FontAwesomeIcon icon={[prefix, icon]} color={color} className="mr-2"/>{statLabel}</button>
  )
}

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix, library } from '@fortawesome/fontawesome-svg-core'
import { faRetweet, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
library.add(faComment, faRetweet, faHeart, faArrowUpFromBracket)

interface Props{
  icon: IconName
  prefix: IconPrefix
  statLabel?:number
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
export const IconButton = ({ icon, statLabel, prefix, onClick }:Props) => {
  return (
    <div onClick={onClick}>
      <FontAwesomeIcon icon={[prefix, icon]}/>
      {statLabel && <label className="ml-3">{statLabel}</label>}
    </div>
  )
}

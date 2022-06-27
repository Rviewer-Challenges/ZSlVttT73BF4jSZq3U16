import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  link: string
  icon: IconName
  prefix: IconPrefix
}

export const SocialLink = ({ link, icon, prefix }:Props) => {
  return (
    <div>
      <a target='_blank' rel='noreferrer' href={link}>
        <FontAwesomeIcon icon={[prefix, icon]} color='#1d9bf0' size='1x' className="rounded-full p-4 mx-2 w-5 h-5 bg-slate-100"/>
      </a>
    </div>
  )
}

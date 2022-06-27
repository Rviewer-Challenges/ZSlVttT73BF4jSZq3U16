import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import numeral from 'numeral'

interface Props {
  prefix: IconPrefix;
  icon: IconName;
  stat?: number;
  handleOnClick?: () => void;
}

export const TweetAction = ({ prefix, icon, stat = 0, handleOnClick }:Props) => {
  const statFormatted = numeral(stat)
  return (
    <button onClick={handleOnClick} className="flex flex-row items-center justify-center mr-3 my-3 px-2">
      <div className="rounded-full p-1">
        <FontAwesomeIcon icon={[prefix, icon]} color='#536471' size='1x'/>
      </div>
      {stat > 0 && <span className="ml-2 text-sm text-[#536471]">{statFormatted.format('0a')}</span>}
    </button>
  )
}

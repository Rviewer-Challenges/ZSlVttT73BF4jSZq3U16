import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import numeral from 'numeral'

interface Props {
  category: string
  title: string
  amount: number
}

export const TrendingCard = ({ category, title, amount }: Props) => {
  const amountFormated = numeral(amount)

  return (
    <button className="w-full">
      <div className="py-3 px-6 flex justify-between">
        <div className="flex flex-col items-start">
          <span className="text-xs">{category}</span>
          <span className="font-semibold">{title}</span>
          <span className="text-xs">{amountFormated.format('0 a')} Tweets</span>
        </div>
        <button>
          <FontAwesomeIcon icon={['fas', 'ellipsis']}/>
        </button>
      </div>
    </button>
  )
}

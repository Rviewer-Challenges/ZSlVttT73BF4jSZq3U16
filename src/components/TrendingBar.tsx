import { TrendingCard } from './shared/TrendingCard'

export const TrendingBar = () => {
  return (
    <div className="flex flex-col items-start bg-gray-100 rounded-lg pt-2">
      <h3 className="font-bold ml-5 my-3 rounded-t text-xl">Trends for you</h3>
      <TrendingCard category='Trending in Costa Rica' title='Rodolfo Rojas' amount={17000}/>
      <TrendingCard category='Trending in Costa Rica' title='Rodolfo Rojas' amount={3001}/>
      <TrendingCard category='Trending in Costa Rica' title='Rodolfo Rojas' amount={22500}/>
      <TrendingCard category='Trending in Costa Rica' title='Rodolfo Rojas' amount={22500}/>
      <TrendingCard category='Trending in Costa Rica' title='Rodolfo Rojas' amount={22500}/>
      <TrendingCard category='Trending in Costa Rica' title='Rodolfo Rojas' amount={22500}/>
      <TrendingCard category='Trending in Costa Rica' title='Rodolfo Rojas' amount={100}/>
    </div>
  )
}

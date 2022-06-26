import { TrendingCard } from './shared/TrendingCard'

export const TrendingBar = () => {
  return (
    <div className="flex flex-col items-start bg-gray-100 rounded-lg pt-2">
      <h3 className="font-bold ml-5 my-3 rounded-t text-xl">Trends for you</h3>
      <TrendingCard category='Entertainment · Trending' title='Batman' amount={500000}/>
      <TrendingCard category='Entertainment · Trending' title='Auron' amount={164000}/>
      <TrendingCard category='Sports · Trending' title='Costa Rica' amount={5000}/>
      <TrendingCard category='Trending in Gaming influencers' title='#LaVeladaDelAño2' amount={1000000}/>
      <TrendingCard category='Music · Trending' title='Biza' amount={22500}/>
      <TrendingCard category='Music · Trending' title='Paulo Londra' amount={22500}/>
      <TrendingCard category='Trending in Costa Rica' title='Jose Rodolfo Rojas' amount={1000}/>
    </div>
  )
}

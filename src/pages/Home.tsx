import { Feed } from '../components/Feed'
import { useHome } from '../hooks/useHome'

export const Home = () => {
  const { data } = useHome()
  return (
    <div className="max-w-2xl">
      <div className="flex justify-between mx-10 mt-2">
        <h3 className="font-semibold text-xl">Home</h3>
      </div>
      <Feed data={data}/>
    </div>
  )
}

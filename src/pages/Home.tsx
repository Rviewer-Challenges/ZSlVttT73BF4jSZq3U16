import { Feed } from '../components/Feed'

export const Home = () => {
  return (
    <div>
      <div className="flex justify-between mx-10 mt-2">
        <h3 className="font-semibold text-xl">Home</h3>
      </div>
      <Feed/>
    </div>
  )
}

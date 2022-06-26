import { SocialLink } from '../components/shared/SocialLink'

const PHOTO_URL = 'https://pbs.twimg.com/profile_images/1520583033346269184/SqYY-5kz_400x400.jpg'

export const ComingSoon = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-start px-10 mt-10">
      <img src={PHOTO_URL} className="rounded-full p-2 bg-slate-50" height={250} width={250}/>
      <h2 className="font-semibold text-3xl">Coming Soon</h2>
      <p className="my-2">Meanwhile, check my socials to see how the app is going!</p>
      <div className="flex flex-row">
        <SocialLink icon='linkedin' prefix='fab' link='https://www.linkedin.com/in/jrodolforojas/'/>
        <SocialLink icon='github' prefix='fab' link='https://github.com/jrodolforojas'/>
        <SocialLink icon='instagram' prefix='fab' link='https://www.instagram.com/jrodolforojas/'/>
        <SocialLink icon='twitter' prefix='fab' link='https://twitter.com/jrodolforojas'/>
        <SocialLink icon='link' prefix='fas' link='https://www.linkedin.com/in/jrodolforojas/'/>
      </div>
    </div>
  )
}

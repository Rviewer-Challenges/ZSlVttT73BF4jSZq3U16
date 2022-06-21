import React from 'react'
import { IconButton } from './shared/IconButton'
import { UserPicture } from './shared/UserPicture'
import { TextButton } from './shared/TextButton'
import { TEST_USER_PROFILE_URL } from './TweetCard'

export const CreateTweet = () => {
  return (
    <div className="flex items-start space-x-6 px-6">
      <div className="pt-4">
        <UserPicture url={TEST_USER_PROFILE_URL} width={60} heigth={60}/>
      </div>
      <div className="flex-1">
        <input placeholder="Whats happening?" type="text" className="w-full p-4 my-3 border-none outline-none"/>
        <div className="justify-between flex flex-row">
          <div>
            <IconButton icon='image' prefix='far' />
            <IconButton icon='chart-bar' prefix='far'/>
            <IconButton icon='face-smile' prefix='far'/>
            <IconButton icon='calendar' prefix='far'/>
            <IconButton icon='location-dot' prefix='fas'/>
          </div>
          <div>
            <TextButton label="Tweet"/>
          </div>
        </div>

      </div>
    </div>
  )
}

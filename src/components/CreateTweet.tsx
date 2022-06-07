import React from 'react'
import { IconButton } from './shared/IconButton'
import { UserPicture } from './shared/UserPicture'
import { TextButton } from './shared/TextButton'
import { TEST_USER_PROFILE_URL } from './TweetCard'

export const CreateTweet = () => {
  return (
    <div className="flex items-start space-x-6 p-6">
      <UserPicture url={TEST_USER_PROFILE_URL} width={60} heigth={60}/>
      <div className="w-full">
        {/* Text Input */}
        <input placeholder="Whats happening?" className="w-full p-4"/>
        <div className="ml-4">
          <IconButton icon='earth-america' prefix='fas' statLabel='Everyone can reply'/>
        </div>

        <div className="flex justify-between mt-3 py-4">
          {/* Image */}
          <IconButton icon='image' prefix='far' />
          {/* Poll */}
          <IconButton icon='chart-bar' prefix='far'/>
          {/* Emoji */}
          <IconButton icon='face-smile' prefix='far'/>
          {/* Calendar */}
          <IconButton icon='calendar' prefix='far'/>
          {/* Location */}
          <IconButton icon='location-dot' prefix='fas'/>
          <TextButton label='Tweet'/>
        </div>

      </div>
    </div>
  )
}

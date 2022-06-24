import React, { HTMLInputTypeAttribute, useContext, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types'
import { Context } from '../../context/TwitterContext'
import { TwitterContext } from '../../types/TwitterContext'

interface Props {
  type?: HTMLInputTypeAttribute;
  accept?: string;
  prefix: IconPrefix;
  icon: IconName;
  requiredMedia?: boolean;
  disabled?:boolean;
}

export const CreateTweetActionIcon = ({ type, accept, prefix, icon, requiredMedia = false, disabled = false }:Props) => {
  const { uploadMedia } = useContext(Context) as TwitterContext
  const fileRef = useRef<HTMLInputElement>(null)

  const handleChange = (event:any) => {
    const file = event.target.files[0] as File
    uploadMedia(URL.createObjectURL(file))
  }

  const handleClick = () => {
    fileRef?.current?.click()
  }

  return (
    <button className="rounded-full p-2" onClick={handleClick} disabled={disabled}>
      {requiredMedia && (
        <input
          type={type}
          accept={accept}
          ref={fileRef}
          onChange={handleChange}
          style={{ display: 'none' }}
        />)}
      <FontAwesomeIcon icon={[prefix, icon]} color='#1d9bf0' size='1x'/>
    </button>
  )
}

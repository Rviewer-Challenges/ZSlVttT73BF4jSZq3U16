import React from 'react'

interface Props {
  url: string
  alt?: string
  width: number
  heigth: number
}

export const UserPicture = ({ url, alt, width, heigth }:Props) => {
  return (
    <img
      className="rounded-full"
      src={url}
      alt={alt}
      width={width}
      height={heigth}/>
  )
}

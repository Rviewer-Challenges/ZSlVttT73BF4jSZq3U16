import React from 'react'

interface Props {
  header:string
}

export const Header = ({ header }:Props) => {
  return (
    <div className="flex justify-between mx-10 mt-2">
      <h3 className="font-semibold text-xl">{header}</h3>
    </div>
  )
}

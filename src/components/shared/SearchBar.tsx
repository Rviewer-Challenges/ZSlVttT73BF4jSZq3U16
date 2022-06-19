import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const SearchBar = () => {
  return (
    <div className="rounded-full bg-gray-100 px-4 py-2 mb-5 mt-2 w-full">
      <FontAwesomeIcon className="mr-4" icon={['fas', 'magnifying-glass']}/>
      <span>Search Text</span>
    </div>
  )
}

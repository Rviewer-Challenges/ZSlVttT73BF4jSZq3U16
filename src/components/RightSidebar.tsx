import React from 'react'
import { SearchBar } from './shared/SearchBar'
import { TrendingBar } from './TrendingBar'

export const RightSidebar = () => {
  return (
    <div className="flex flex-col items-start pl-8">
      <SearchBar/>
      <TrendingBar/>
    </div>
  )
}

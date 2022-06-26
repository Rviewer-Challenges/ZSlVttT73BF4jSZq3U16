import React from 'react'
import { SearchBar } from './shared/SearchBar'
import { TrendingBar } from './TrendingBar'

export const RightSidebar = () => {
  return (
    <div className="flex-col items-start pl-8 hidden lg:block">
      <SearchBar/>
      <TrendingBar/>
    </div>
  )
}

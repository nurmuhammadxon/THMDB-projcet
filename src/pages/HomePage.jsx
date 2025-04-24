import React from 'react'

// components
import { HomeBanner, Leaderboard, PopularMovie, PopularTv, Trailers } from '../components'

function HomePage() {
  return (
    <div >
      <HomeBanner />
      <PopularMovie />
      <Trailers />
      <PopularTv />
      <Leaderboard />
    </div>
  )
}

export default HomePage
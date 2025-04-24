import React from 'react'

// components
import { HomeBanner, PopularMovie, PopularTv, Trailers } from '../components'

function HomePage() {
  return (
    <div >
      <HomeBanner />
      <PopularMovie />
      <Trailers />
      <PopularTv />
    </div>
  )
}

export default HomePage
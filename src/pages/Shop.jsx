import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollections from '../components/NewCollections'
import NewsLetter from '../components/NewsLetter'

function Shop() {
  return (
    <div className='p-4'>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
     
    </div>
  )
}

export default Shop

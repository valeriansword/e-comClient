import React from 'react'
import nikeHero from "../assets/nikeHero.jpg"
function Hero() {
  return (
    <div className='px-[30px] max-md:px-[10px]  border py-[5px] rounded-md'>
      <img src={nikeHero} className='mb-[20px] max-md:h-[200px]  max-md:object-cover'/>
      <h1 className='font-hero text-7xl font-bold text-center max-md:text-3xl'>Top of the wishlist kicks</h1>
      <p className='font-sans text-lg text-center mb-[10px]'>All-time icons and sport-inspired gifts to make everyone on your list look and feel their best.</p>
     <span className='w-full flex justify-center'> <button className='border-2 border-black bg-black text-white rounded-[30px] px-[10px] py-[5px] '>Shop latest Kicks</button></span>
    </div>
  )
}

export default Hero

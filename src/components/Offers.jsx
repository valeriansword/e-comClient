import React from 'react'
import newArrival from "../assets/newArrival.png"
function Offers() {
  return (
    <div>
    <div className='md:w-[65%] max-md:hidden md:h-[60vh] flex mx-auto px-[100px]  mb-[150px]  '>
      <div className='md:flex-1 md:flex-col justify-center max-md:hidden'>
        <h1 className='text-[#171717] font-bold text-[80px] max-md:text-xl'>Exclusive</h1>
        <h1 className='text-[#171717] font-bold text-[80px] max-md:text-xl'>Offers For You</h1>
        <p className='max-md:hidden uppercase text-[#171717] text-[22px] font-semibold '>Only on best seller products</p>
        <button className='max-md:hidden h-[50px] w-[220px] rounded-md bg-black text-white border-none text-lg cursor-pointer mt-[30px]'>check now</button>
      </div>
      {/* for mobile */}
      
      <div className='md:flex-1 justify-end items-center pt-[40px]'>
        <img src={newArrival} className="" />
      </div>
    </div>
    <div className='md:hidden flex flex-col items-center space-y-[10px]'>
      <h1 className='text-2xl text-center font-semibold'>Exclusive Offers For You</h1>
      <img src={newArrival} className="w-[90%] h-[300px] object-cover rounded-md" />
      <p className='text-lg font-normal'>Only on best seller products</p>
      <button className='bg-black text-white rounded-md w-[60%] py-[10px]'>check now</button>
    </div>
    </div>
  )
}

export default Offers

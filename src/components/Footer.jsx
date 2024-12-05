import React from 'react'
import nikeLogo from "/nikeLogo.jpg"
import { FaXTwitter } from "react-icons/fa6";

import { FaWhatsapp } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center gap-[50px] border-t py-[30px]'>
      {/* <img src={nikeLogo} className='h-[50px] w-[60px] '/> */}
      <ul className='flex gap-[50px] text-[#252525] max-md:gap-[30px]'>
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Cotact</li>
      </ul>
      <div className='flex gap-[20px]'>
      <FaXTwitter className='cursor-pointer'/>
      <FaWhatsapp  className='cursor-pointer'/>
      <FaInstagram  className='cursor-pointer'/>
      </div>
      <div className='flex flex-col items-center gap-[30px] mb-[20px] text-[20px]'>
        <hr className='w-[80%] border-none h-[3px] bg-[#c7c7c7] max-md:hidden'/>
        <p>© 2024 Nike, Inc. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer

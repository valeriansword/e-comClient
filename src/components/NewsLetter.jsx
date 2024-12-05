import React from 'react'

function NewsLetter() {
  return (
    <div>
    <div className='w-[75%] max-md:hidden h-[40vh] flex flex-col justify-center items-center m-auto px-[140px] mb-[100px] gap-[30px] '>
        <h1 className='text-[50px] text-[#454545] font-bold'>Get exclusive offers on your email</h1>
        <p className='text-[25px] text-[#454545]'>subscribe to our newsletter and stay updated</p>
        <form onSubmit={(e)=>{e.preventDefault() ;alert("subscribed");}} className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-2 border-solid border-[#e3e3e3]'>
            <input type='email' className='w-[500px]  ml-[30px] border-none text-[#616161] outline-none text-[16px]' placeholder='enter your email' required />
            <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[#16px] cursor-pointer'>subscribe</button>
        </form>
      
    </div>
    <div className='md:hidden space-y-[5px] mb-[50px]'>
    <h1 className='text-xl text-[#454545] font-bold text-center'>Get exclusive offers on your email</h1>
        <p className='text-lg text-[#454545] text-center'>subscribe to our newsletter and stay updated</p>
        <form onSubmit={(e)=>{e.preventDefault() ;alert("subscribed");}} className='flex items-center justify-between bg-white w-full h-[50px] rounded-[80px] border-2 border-solid border-[#e3e3e3]'>
            <input type='email' className='  ml-[10px] border-none text-[#616161] outline-none text-[16px]' placeholder='enter your email' required />
            <button  className='w-[300px] h-[50px] rounded-[80px] bg-black text-white text-[#16px] cursor-pointer'>subscribe</button>
        </form>
    </div>
    </div>
  )
}

export default NewsLetter

import React from 'react'
import data from '../assets/data'
import Item from './Item'
function Popular() {
    console.log(data)
  return (
    <div className=' flex flex-col items-center gap-[10px] md:h-[80vh]  '>
    <div className='flex flex-col items-center'>
      <h1 className='uppercase text-2xl font-bold text-[#171717] text-center mt-[50px]'>classics spotlight </h1>
      <hr className='w-[100px]  h-[6px] bg-[#252525] rounded-[10px]' />
    </div>
    <div className='flex my-[50px] gap-[30px] max-md:w-full max-md:overflow-x-scroll'>
        {
            data.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.images[0]} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            }
                
            )
        }
    </div>
    </div>
  )
}

export default Popular

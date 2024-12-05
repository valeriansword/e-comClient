import React from 'react'

import ScrollImage from './ScrollImage'
function RelatedProduct() {
  return (
    <div className='  '>
   
      <h1 className='capitalize text-2xl font-normal text-[#171717] text-left mt-[50px]'>You may also like </h1>
      {/* <hr className='w-[100px]  h-[6px] bg-[#252525] rounded-[10px]' /> */}
  
    <div className=''>
        
            
               <ScrollImage />
            
                
            
        
    </div>
    </div>
  )
}

export default RelatedProduct
{/* <Item key={i} id={item.id} name={item.name} image={item.images[0]} newPrice={item.newPrice} oldPrice={item.oldPrice}/> */}
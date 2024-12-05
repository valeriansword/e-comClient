import React, { useContext } from 'react'
 import newCollections from '../assets/newCollection'
import Item from './Item'
import { ShopContext } from '../context/ShopContext'
function NewCollections() {
  // const {newProducts,fetchAllProducts,isNewProd,setNewProd}=useContext(ShopContext)
  
  return (
    <div className=' flex flex-col items-center gap-[10px] max-md:mb-[50px] mb-[100px] '>
    <div className='flex flex-col items-center'>
      <h1 className='uppercase text-2xl font-bold text-[#171717] text-center mt-[50px]'>new collections </h1>
      <hr className='w-[100px]  h-[6px] bg-[#252525] rounded-[10px]' />
    </div>
    <div className='md:grid md:grid-cols-4 my-[50px] gap-[30px] max-md:flex max-md:w-full max-md:overflow-x-scroll'>
        {
            newCollections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.images[0]} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
            }
                
            )
        }
    </div>
    </div>
  )
}

export default NewCollections

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from '../components/Item';

function ShopCategory(props) {
  const {allProducts}=useContext(ShopContext)
  return (
    <div className=''>
      <img src={props.banner} className='w-[95%] mx-auto my-[30px] ' />     
        <h1 className='font-hero text-7xl font-bold text-center '>{props.name}</h1>
      <div className='flex justify-end   '>
       <span className='flex border-2 items-center max-md:py-[2px] max-md:px-[5px] py-[5px] px-[8px] mr-[5%] cursor-pointer  rounded-[40px]  border-solid border-[#888] '> sort by <RiArrowDropDownLine size={30}/></span>
      </div>
      <div className='my-[20px] md:mx-[170px] max-md:ml-[20px]  md:grid md:grid-cols-4 md:gap-[40px] max-md:grid max-md:grid-cols-2'>
       {
        allProducts.map((item,i)=>{
          if(props.category===item.category){
           return  <Item key={i} id={item.id} name={item.name} image={item.images[0]} newPrice={item.newPrice} oldPrice={item.oldPrice}/>
          }else{
            return null
          }
})
       }

      </div>
       <span className='flex justify-center items-center mx-auto my-[100px] w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-semibold cursor-pointer'>
        Discover More ...
       </span>
    </div>
  )
}

export default ShopCategory

import React from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md";

import { RiListUnordered } from "react-icons/ri";
import { Link } from 'react-router-dom';

function AdminSideBar(props) {
  return (
    <div className='md:min-h-screen md:bg-white p-4 w-[250px] max-md:flex max-md:justify-between max-md:w-full md:border-r border-gray-300'>
        {/* <span  className='flex items-center space-x-2  border border-gray-100  '>
            <MdOutlineAddShoppingCart />
            <button> Add Products</button>
          
        </span> */}
        <span onClick={()=>{props.setIsListProduct(true);props.setIsAddProduct(false);}}  className={`flex cursor-pointer text-xl max-md:text-lg justify-center items-center md:mb-[10px] space-x-4 border rounded-md p-2 bg-gray-100  hover:border-black ${props.isListProduct?" border-black max-md:bg-black max-md:text-white ":"  border-gray-100 max-md:bg-white "}`}>
             <RiListUnordered />

            <button> Product List </button>
            
         </span>
        <span onClick={()=>{props.setIsListProduct(false);props.setIsAddProduct(true);}} className={`flex text-xl max-md:text-lg  cursor-pointer justify-center items-center  space-x-4 border  rounded-md p-2 bg-gray-100 hover:border-black ${props.isAddProduct?" border-black max-md:text-white max-md:bg-black ":"  border-gray-100 max-md:bg-white "}`}>
         <MdOutlineAddShoppingCart />
            <button>Add Product</button>
            
         </span>
       
           
    </div>
  )
}

export default AdminSideBar

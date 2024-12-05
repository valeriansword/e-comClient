import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Item from './Item';
import { ShopContext } from '../context/ShopContext';

const confirmAction=(handleDelete,id)=>{
    const userConfirm=window.confirm("Are you sure ,you want to delete this product")
    if(userConfirm){
        handleDelete(id);
    }else{
        console.log("action cancelled")
    }

}
function ListProduct() {
   const {newProducts,fetchAllProducts}=useContext(ShopContext)
    const handleDelete=(id)=>{
        
        axios.post("https://e-comserver-udnf.onrender.com/products/deleteProduct",{id}).
        then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err)
        })
       
            fetchAllProducts()
        
    }
  return (
    <div className='p-4   bg-white  w-[100%] py-[30px] md:px-[50px] md:mx-[30px] max-md:w-[90%] max-md:shadow-lg  max-md:m-[20px] my-[20px] rounded-md'>
   
      <h1 className='text-xl font-semibold text-center '>List Of Products</h1>
      <p className='text-md font-thin text-gray-700 text-center'>(You have added)</p>

      <div className='grid grid-cols-4 my-[30px] md:gap-[20px]'>
        {
            newProducts.map((prod,id)=>{
                if(prod){
                    return (
                        <div className='w-[250px] bg-gray-100 rounded-md hover:shadow-xl'>
                            <img src={prod.images[0]} className="w-full h-[200px] max-md:w-[150px] max-md:h-[150px] max-md:shadow-md object-cover rounded-lg" />
                            <div className='p-2 text-lg capitalize '>

                                <span className='flex space-x-2'><p className='font-semibold'>Name: </p><p>{prod.name}</p></span>
                                <span className='flex space-x-2'><p className='font-semibold'>Category: </p><p>{prod.category}</p></span>
                                <span className='flex space-x-2'><p className='font-semibold'>Old Price: </p><p>{prod.oldPrice}</p></span>
                                <span className='flex space-x-2'><p className='font-semibold'>New Price: </p><p>{prod.newPrice}</p></span>
                                <button className='text-white bg-red-500 rounded-md px-2 cursor-pointer' onClick={()=>{confirmAction(handleDelete,prod.id)}}>Remove Product</button>    
                            </div>
                            
                        </div>
                    )
                }
            })
        }
      </div>
    </div>
  )
}

export default ListProduct

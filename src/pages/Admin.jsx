import React, { useState } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import AddProduct from '../components/AddProduct';
import ListProduct from '../components/ListProduct';

function Admin() {
    const [isAddProduct,setIsAddProduct]=useState(false);
    const [isListProduct,setIsListProduct]=useState(true)
  return (
    <div className='bg-gray-100 min-h-screen md:flex'>
      <AdminSideBar  setIsAddProduct={setIsAddProduct} isAddProduct={isAddProduct} isListProduct={isListProduct}  setIsListProduct={setIsListProduct}/>
      {
        isAddProduct?<AddProduct />:<ListProduct />
      }
    </div>
  )
}

export default Admin

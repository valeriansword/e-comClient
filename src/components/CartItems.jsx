import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaRegTrashCan } from "react-icons/fa6";
import { RiQuestionFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function CartItems() {
  const { allProducts, cartItems,addToCart, getTotalCartItems,getTotalCartAmount,removeFromCart } = useContext(ShopContext);
  const [noOfItems,setNoOfItems]=useState(0)
  useEffect(()=>{
    allProducts.map((prod,i)=>{
      if(cartItems[prod.id]>0){
        setNoOfItems(noOfItems+1)
      }
    })
  },[])
  return (
    getTotalCartItems()>0?(
      <div className="md:w-[80%] md:mx-auto md:gap-[20px] md:flex justify-between ">
      <div className="md:w-3/5">
      <h1 className="text-2xl font-semibold max-md:[10px] md:mb-[20px] max-md:text-center  ">Bag</h1>
      <span className="md:hidden flex justify-center items-center space-x-[10px] mb-[20px]">
        <p>{getTotalCartItems()} Items | </p>
        <p>${getTotalCartAmount()}.00</p>
       
      </span>
      <hr className="md:hidden"/>
    {allProducts.map((prod) => {
      if (cartItems[prod.id] > 0) {
        return (
          <div className="flex justify-between mt-[20px]">
            {/* bag */}
            <div className="w-full">
             
              
              <div className="flex justify-between  "> 
                <div className="flex space-x-[10px]">
                  <img src={prod.images[0]} className="h-[150px] rounded-md object-cover w-[150px]"/>
                  <span className="space-y-[5px]">
                        <p className="text-lg font-semibold md:hidden">MRP:${prod.newPrice*cartItems[prod.id]}.00</p>
                      <h1 className="text-lg font-semibold">{prod.name}</h1>
                      <p className="text-gray-600 text-semibold text-md">{prod.category}</p>
                      <p className="text-gray-600 text-semibold text-md">Size 11</p>
                  </span>
                  
                </div>
                <p className="text-lg font-semibold max-md:hidden">MRP:${prod.newPrice*cartItems[prod.id]}.00</p>
                </div>
               
              <div className="my-[30px] ">
                      <span className="border-2  flex w-fit space-x-[20px] items-center border-gray-300 rounded-[30px]  p-2">
                        <FaRegTrashCan onClick={()=>{removeFromCart(prod.id)}} className="  cursor-pointer  "/>
                        <p>{cartItems[prod.id]}</p>
                        <p onClick={()=>addToCart(prod.id)} className="text-xl font-normal mt-[-3px] cursor-pointer  ">+</p>
                      </span>
                     
                  </div>
               <hr />
                
            </div>
            
            
              
          </div>
        );
      }
    })}
     {/* summary */}</div>
    {
       noOfItems &&(
        <div className="md:w-[40%]">
              <h1 className="text-2xl font-semibold capitalize mb-[20px]">summary</h1>
              <div className="">
              {/* total */}
              <div className="text-lg font-normal mb-[20px] flex justify-between items-center">
                <span className="text-lg flex space-x-[10px] items-center">
                 <h1>Subtotal</h1>
                 <RiQuestionFill />
                </span>
                <h1>$ {getTotalCartAmount()}.00</h1>
              </div>
              {/* estimated delivery */}
              <div className="flex text-lg justify-between mb-[20px] ">
                <span>
                 <h1>Estimated delivery & Handling</h1>
                 
                </span>
                <h1>free</h1>
              </div>
              </div>
              <hr />
              <div className="my-[20px] flex justify-between text-lg">
                <p>Total</p>
                <p>${getTotalCartAmount()}.00</p>
              </div>
              <hr />
              <div className="flex justify-center items-center ">
                <button className="text-lg text-white bg-black rounded-[30px] p-4  w-[70%]  mt-[20px]">Member Checkout</button>
              </div>
       </div>
       )
    } 
  </div>

    ):(
      <div className="h-screen flex flex-col items-center  space-y-[10px] ">
        <h1 className="text-2xl font-normal text-center">Empty cart!</h1>
        <Link to="/">
          <button className="text-white text-lg bg-black rounded-md p-2">Shop now</button>
        </Link>
      </div>
    )
     );
}

export default CartItems;

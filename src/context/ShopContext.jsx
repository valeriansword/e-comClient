import React, { createContext, useEffect, useState } from 'react'
import allProducts from '../assets/allProducts';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext=createContext();

const getDefaultCart=()=>{
  let cart={};
  for(let index=0;index<allProducts.length+1;index++){
    cart[index]=0;
  }
  return cart;
}
function ShopContextProvider({children}) {
    const [isNewProd,setNewProd]=useState(false);

    const [cartItems,setCartItems]=useState(getDefaultCart());
    const navigate=useNavigate();
    const [user,setUser]=useState("");
    const [isCartLoaded,setLoaded]=useState(false)

    const addToCart=(itemId)=>{
      console.log(user?user.token:" ")
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
      if(user?user.token:" "){
        const id=user.user.id
        axios.post("http://localhost:3000/user/addToCart",{itemId,id},{
          headers:{
             "Content-Type":"application/json",
           
          }
        }).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)})
      }
    }

    const removeFromCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
      if(user?user.token:" "){
        const id=user.user.id
        axios.post("http://localhost:3000/user/removeFromCart",{itemId,id},{
          headers:{
             "Content-Type":"application/json",
           
          }
        }).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)})
      }
    }

    const getTotalCartAmount=()=>{
      let totalItem=0;
      
        for(const item in cartItems){
          if(cartItems[item]>0){
            let itemInfo=allProducts.find((prod)=>prod.id===Number(item))
            totalItem+=itemInfo.newPrice*cartItems[item]
          }
         
        
      }
     
      
      return totalItem;
    }
    const getTotalCartItems=()=>{
      let totalItem=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          totalItem+=cartItems[item];
        }
      }
      return totalItem
    }
   
    const [newProducts,setNewProducts]=useState([]);

    const fetchAllProducts=()=>{
        axios.get("http://localhost:3000/products").
        then(res=>{
            console.log(res.data.products);
            setNewProducts(res.data.products);
            //allProducts.push(...res.data.products);
            //console.log(allProducts)
        }).catch(err=>console.log(err));
    }
    useEffect(()=>{
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      setUser(userInfo);
    }
    },[])
    useEffect(()=>{
        fetchAllProducts();
        
    },[])
    useEffect(()=>{
      if(user?user.token:false){
        const id=user.user.id
        axios.post("http://localhost:3000/user/getCart",{id},{
          headers:{
             "Content-Type":"application/json",
           
          }
        }).then(res=>{
          console.log(res.data.cartData);
          setLoaded(true)
          setCartItems(res.data.cartData)
        }).catch(err=>console.log(err))
      }
    },[user])
    const contextValue={allProducts,cartItems,getTotalCartAmount,getTotalCartItems,isNewProd,setNewProd,addToCart,removeFromCart,user,newProducts,fetchAllProducts};

  return (
    <ShopContext.Provider value={contextValue}>

    {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider

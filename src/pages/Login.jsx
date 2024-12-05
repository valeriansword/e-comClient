import React, { useState } from 'react'
import nikeLogin from "../assets/nikeLogin.jpeg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [isLogin,setIsLogin]=useState(false);
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    userName:"",
    password:"",
    email:"",
  })
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login=(e)=>{
    e.preventDefault()
    if(!formData.email || !formData.password){
      alert("enter form details");
      return ;
    }
    axios.post("https://e-comserver-udnf.onrender.com/user/login",formData,{
      headers:{
        "Content-Type":"application/json"
      }
    }).then(res=>{
      console.log(res.data);
      alert("user logged in");
      localStorage.setItem("userInfo",JSON.stringify(res.data));
      navigate("/")
    }).catch(err=>{
      console.log(err);
      alert(err.response.data.msg)
    })
  }
  const signUp=(e)=>{
    e.preventDefault()
    if(!formData.email || !formData.password || !formData.userName){
      alert("enter form details");
      return ;
    }
    axios.post("https://e-comserver-udnf.onrender.com/user/signup",formData,{
      headers:{
        "Content-Type":"application/json"
      }
    }).then(res=>{
      console.log(res.data);
      alert("user successfully registered");
      localStorage.setItem("userInfo",JSON.stringify(res.data));
      navigate("/")
    }).catch(err=>{
      console.log(err);
      alert(err.response.data.message)
    })
    
  }
  return (
    <div className='w-[100%] flex justify-center items-center py-[120px] max-md:bg-black '>
      <div className='md:flex  justify-between shadow-lg  '>
        {/* for mobile  */}
      

        <div className='md:w-[400px] p-2 h-[500px] bg-white  rounded-md'>
          <h1 className='my-[20px] text-center text-3xl font-bold' >{isLogin?"Login":"Sign Up"}</h1>
          <form className='flex flex-col mb-[20px]  space-y-[20px] mt-[30px]' onSubmit={isLogin?login:signUp}>
            {
              isLogin?<div className='flex flex-col space-y-[20px]'>
                  <input onChange={handleChange} type='email' required className=" outline-none border-b-2 px-2 border-black h-[40px]" placeholder='your email' name='email' value={formData.email}/>
            <input onChange={handleChange} type='password' required  className=" outline-none border-b-2 px-2 border-black h-[40px]" placeholder='your password' name='password' value={formData.password}/>
          
              </div>:<div className='flex flex-col space-y-[20px]'>
              <input onChange={handleChange} type='text' required className=" outline-none border-b-2 px-2 border-black h-[40px]" placeholder='your name' name='userName' value={formData.userName}/>
            <input onChange={handleChange} type='email' required className=" outline-none border-b-2 px-2 border-black h-[40px]" placeholder='your email' name='email' value={formData.email}/>
            <input onChange={handleChange} type='password' required  className=" outline-none border-b-2 px-2 border-black h-[40px]" placeholder='your password' name='password' value={formData.password}/>
           
              </div>
            }
           <div className='flex justify-center items-center space-x-2 '>
               <input  type='checkbox' name='' required/>
               <p>I agree to your terms and conditions</p>
            </div>
            <button className='w-[95%] bg-black text-white py-2 mx-auto rounded-md' >Continue</button>

          </form>
          <span className=' flex space-x-2 items-center justify-center  '>
             <p>Already have an account?</p>
              <p className='text-gray-700 text-lg cursor-pointer font-semibold ' onClick={()=>setIsLogin(!isLogin)}>{isLogin?"Signup":"Login"}</p>
          </span>
         
        </div>
        <img src={nikeLogin} className='p-2 h-[500px] max-md:hidden' />
        </div>
    </div>
  )
}

export default Login

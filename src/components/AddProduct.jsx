import React, { useContext, useState } from 'react'
import uploadFile from "../assets/upload_area.svg"
import axios from "axios";
import { ShopContext } from '../context/ShopContext';
function AddProduct() {
    const {fetchAllProducts}=useContext(ShopContext)
    const [products,setProducts]=useState({
        name:"",
        category:"women",
        oldPrice:"",
        newPrice:"",
        images:[]
    })
    const [image,setImage]=useState(false);
    const [frontimage,setFrontImage]=useState(false);
    const [backimage,setBackImage]=useState(false);
    const [bothimage,setBothImage]=useState(false);
    const [closeimage,setCloseImage]=useState(false);
    const handleImage=(e)=>{
        setImage(e.target.files[0])
        

    }
    const handlechange=(e)=>{
            setProducts({...products,[e.target.name]:e.target.value});
            
    }
    const handleImageUpload = () => {
        const formData = new FormData();
    
        // Append images to FormData
        if (image) formData.append('products', image);
        if (frontimage) formData.append('products', frontimage);
        if (backimage) formData.append('products', backimage);
        if (bothimage) formData.append('products', bothimage);
        if (closeimage) formData.append('products', closeimage);
    
        // Return the promise to allow chaining
        return axios.post("http://localhost:3000/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res) => {
            if (res.data.success && res.status === 200) {
                console.log("Uploaded image URLs:", res.data.imageUrls);
                return res.data.imageUrls; // Return image URLs
            } else {
                console.error("Image upload failed");
                throw new Error("Image upload failed");
            }
        })
        .catch((err) => {
            console.error("Error during image upload:", err.message);
            throw err; // Propagate the error to the caller
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        handleImageUpload()
            .then((uploadedImageUrls) => {
                // Step 1: Create Product Data
                const productData = { ...products, images: uploadedImageUrls };
    
                // Step 2: Submit Product Data to Backend
                return axios.post("http://localhost:3000/products/addProduct", productData);
            })
            .then((res) => {
                if (res.status === 200 && res.data.success) {
                    alert("Product added successfully!");
                    setProducts({
                        name: "",
                    category: "women",
                    oldPrice: "",
                    newPrice: "",
                    images: []
                    });
                    fetchAllProducts()
                } else {
                    throw new Error(res.data.message || "Failed to add product");
                }
            })
            .catch((err) => {
                console.error("Error adding product:", err.message);
                alert("Error adding product: " + err.message);
            });
    };
   
    
    
  return (
    <div className='p-4  md:max-w-[800px] bg-white  w-[100%] py-[30px] md:px-[50px] md:mx-[30px] max-md:w-[90%] max-md:shadow-lg  max-md:m-[20px] my-[20px] rounded-md'>
      <form className='space-y-[20px]' onSubmit={handleSubmit}>
        <h1 className='text-xl font-semibold text-black '>Add New Product</h1>
        <div>
            <p className='text-[16px] '>Product Title</p>
            <input type='text' name='name' onChange={handlechange} className="w-full h-[50px] rounded-md pl-[15px] border border-[#c3c3c3] focus:border-black text-[#7b7b7b] outline-none" required value={products.name} placeholder='enter your name' />
        </div>
        <div className='flex space-x-[20px] '>
            <span className='w-[50%] '>
            <p className='text-[16px] '>Price</p>
            <input type='text' name='oldPrice'  onChange={handlechange} className="w-full h-[50px] rounded-md pl-[15px] border border-[#c3c3c3] focus:border-black text-[#7b7b7b] outline-none" required value={products.oldPrice} placeholder='enter your name' />
            </span>
            <span className='w-[50%]'>
            <p className='text-[16px] '>Offer Price</p>
            <input type='text' name='newPrice' onChange={handlechange}  className="w-full h-[50px] rounded-md pl-[15px] border border-[#c3c3c3] focus:border-black text-[#7b7b7b] outline-none" required value={products.newPrice} placeholder='enter your name' />
            </span>
        </div>
        <div className='mb-[30px] '>
            <p className='text-[16px]  mb-[5px]'>Product Category</p>
            <select name='category' className='outline-none border-b border-black' onChange={handlechange} value={products.category} required>
                <option>Women</option>
                <option>Men</option>
                <option>Kids</option>

            </select>
        </div>
        <div className='mt-[30px] flex flex-wrap space-x-[10px]'>
            <span>
            <p className='text-[16px] mb-[5px] '>Upload images</p>
            <label htmlFor='file-input'>
                <img src={image?URL.createObjectURL(image):uploadFile} className='inline-block h-[130px] w-[130px] object-cover rounded-md' />
            </label>
            <input onChange={handleImage} type='file' name="images"   id='file-input'  hidden/>
            </span>

            <span>
            <p className='text-[16px] mb-[5px] '>Front images</p>
            <label htmlFor='file-input1'>
                <img src={frontimage?URL.createObjectURL(frontimage):uploadFile} className='inline-block h-[130px] w-[130px] object-cover rounded-md' />
            </label>
            <input onChange={(e)=>setFrontImage(e.target.files[0])} type='file' name="images"   id='file-input1'  hidden/>
            </span>

            <span>
            <p className='text-[16px] mb-[5px] '>Back images</p>
            <label htmlFor='file-input11'>
                <img src={backimage?URL.createObjectURL(backimage):uploadFile} className='inline-block h-[130px] w-[130px] object-cover rounded-md' />
            </label>
            <input onChange={(e)=>setBackImage(e.target.files[0])} type='file' name="images"   id='file-input11'  hidden/>
            </span>

            <span>
            <p className='text-[16px] mb-[5px] '>Both Shoes images</p>
            <label htmlFor='file-input12'>
                <img src={bothimage?URL.createObjectURL(bothimage):uploadFile} className='inline-block h-[130px] w-[130px] object-cover rounded-md' />
            </label>
            <input onChange={(e)=>setBothImage(e.target.files[0])} type='file' name="images"   id='file-input12'  hidden/>
            </span>

            <span>
            <p className='text-[16px] mb-[5px] '>Close images</p>
            <label htmlFor='file-input3'>
                <img src={closeimage?URL.createObjectURL(closeimage):uploadFile} className='inline-block h-[130px] w-[130px] object-cover rounded-md' />
            </label>
            <input onChange={(e)=>setCloseImage(e.target.files[0])} type='file' name="images"   id='file-input3'  hidden/>
            </span>
        </div>
        <button className='text-lg text-white bg-black px-[10px] rounded-md py-[5px]'>Add Product</button>
      </form>
      
    </div>
  )
}

export default AddProduct

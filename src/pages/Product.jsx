import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import RelatedProduct from "../components/RelatedProduct";
import ImageSlideshow from "../components/ImageSlideShow";

function Product() {
  const { allProducts, addToCart, RemoveFromCart,newProducts } = useContext(ShopContext);
  const { productId } = useParams();
  
  const product = allProducts.find((e) => e.id === Number(productId));
  console.log(product)
  const [mainImg, setMainImg] = useState(product.images[0]);
  useEffect(() => {
    setMainImg(product.images[0]);
  }, [product]);

  const size = [
    "UK 6 (EU 40)",
    "UK 6.5",
    "UK 7",
    "UK 7.5",
    "UK 8",
    "UK 8.5",
    "UK 9",
    "UK 9.5",
    "UK 10",
    "UK 11",
  ];
  return (
    <div className="py-[30px]">
      <div className="w-full flex justify-center space-x-[20px] max-md:hidden">
        {/* left side */}
        <div className="flex space-x-[20px] h-[580px]">
          {/* side images */}
          <div className=" space-y-[20px]">
            {product.images&& product.images.map((img, i) => {
              return (
                <img
                  key={i}
                  src={img}
                  onClick={() => setMainImg(img)}
                  className="h-[100px] cursor-pointer w-[100px] rounded-md"
                />
              );
            })}
          </div>
          {/* main Images */}
          <img src={mainImg} className="w-[500px] h-[580px] rounded-md" />
        </div>
        {/* right sides */}
        <div className="h-[580px] overflow-y-scroll">
          <h1 className="text-2xl font-semibold ">{product.name}</h1>
          <p className="text-lg text-gray-500 capitalize mb-[20px] font-semibold">
            {product.category}
          </p>
          <p className="text-xl font-semibold">MRP:${product.newPrice}.00</p>
          <p className="text-xl  text-gray-500">Inclusive of all taxes</p>
          <p className="text-xl text-gray-500 mb-[20px]">
            (Also includes all applicable duties)
          </p>
          <div>
            <div className="flex justify-between mb-[20px]">
              <h1 className="text-lg font-semibold ">Select Size</h1>
              <span className="flex space-x-[2px]">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"
                  ></path>
                </svg>
                <h1 className="text-lg font-semibold"> size guide</h1>
              </span>{" "}
            </div>
            <div className="grid grid-cols-2 gap-[10px]">
              {size.map((shoeSize, i) => (
                <button className="border-2 border-gray-200 rounded-md hover:border-black p-2 px-[10px]">
                  {shoeSize}
                </button>
              ))}
            </div>
          </div>
          <div>
            <button
              className="text-white bg-black rounded-[30px] text-center w-full my-[20px] p-4 font-semibold text-lg"
              onClick={() => addToCart(product.id)}
            >
              Add to Bag
            </button>
          </div>
          <div className="text-black bg-white rounded-[30px] text-center w-full mb-[20px] border-2 border-gray-300 flex items-center justify-center space-x-2  p-4 font-semibold text-lg">
            <button>Favourite </button>
            <FaRegHeart size={20} />
          </div>
          <div>
            <h1 className="text-lg font-semibold underline">Product Details</h1>
            <span className="flex justify-between items-center">
              <p className="text-lg font-semibold ">Reviews(2)</p>
              <span className="flex">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
                <IoIosStar />
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* desc box */}
      <div className="px-[100px] max-md:hidden">
        <RelatedProduct />
      </div>
      {/* for mobile */}
      <div className="md:hidden px-[20px] mb-[100px]">
        {/* details */}
        <div>
          <h1 className="text-2xl font-semibold ">{product.name}</h1>
          <p className="text-lg text-gray-500 capitalize mb-[20px] font-semibold">
            {product.category}
          </p>
          <p className="text-lg font-semibold">MRP:${product.newPrice}.00</p>
          <p className="text-lg  text-gray-500">Inclusive of all taxes</p>
          <p className="text-md text-gray-500 mb-[20px]">
            (Also includes all applicable duties)
          </p>
        </div>
        {/* images */}
        <div className="mb-[30px]">
          <ImageSlideshow  images={product.images} />
        </div>
        {/* size */}
        <div>
            <div className="flex justify-between mb-[20px]">
              <h1 className="text-lg font-semibold ">Select Size</h1>
              <span className="flex space-x-[2px]">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"
                  ></path>
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"
                  ></path>
                </svg>
                <h1 className="text-lg font-semibold"> size guide</h1>
              </span>{" "}
            </div>
            <div className="grid grid-cols-2 gap-[10px]">
              {size.map((shoeSize, i) => (
                <button className="border-2 border-gray-200 rounded-md hover:border-black p-2 px-[10px]">
                  {shoeSize}
                </button>
              ))}
            </div>
          </div>
          {/* add to cart  */}
          <div>
            <button
              className="text-white bg-black rounded-[30px] text-center w-full my-[20px] p-4 font-semibold text-lg"
              onClick={() => addToCart(product.id)}
            >
              Add to Bag
            </button>
          </div>
          <div className="text-black bg-white rounded-[30px] text-center w-full mb-[20px] border-2 border-gray-300 flex items-center justify-center space-x-2  p-4 font-semibold text-lg">
            <button>Favourite </button>
            <FaRegHeart size={20} />
          </div>
          <div>
            <h1 className="text-lg font-semibold underline">Product Details</h1>
            <span className="flex justify-between items-center">
              <p className="text-lg font-semibold ">Reviews(2)</p>
              <span className="flex">
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />{" "}
                <IoIosStar />
              </span>
            </span>
          </div>
          {/* RelatedProduct */}
          <div className="">
        <RelatedProduct />
      </div>
      </div>
    </div>
  );
}

export default Product;

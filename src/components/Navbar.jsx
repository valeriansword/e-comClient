import React, { useContext, useState } from 'react';
import nikeLogo from "/nikeLogo.jpg";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Close icon for mobile menu

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems,user } = useContext(ShopContext);
  const [hideMenu, setHideMenu] = useState(false);
  const navigate=useNavigate();

  return (
    <div className=''>
      <div className="flex p-4 justify-between items-center px-[30px] text-lg border-b border-gray-300 ">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={nikeLogo} className="h-[50px] w-[60px]" alt="Nike Logo" />
          </Link>
        </div>

        {/* Links for desktop */}
        <ul className="flex gap-4 items-center max-md:hidden">
          {['shop', 'men', 'women', 'kids'].map((item) => (
            <li key={item} onClick={() => setMenu(item)}>
              <Link to={`/${item === 'shop' ? '' : item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
              {menu === item && (
                <hr className="h-[3px] w-[90%] bg-black rounded-[30px]" />
              )}
            </li>
          ))}
        </ul>

        {/* Right section for desktop */}
        <div className="flex gap-2 items-center max-md:hidden">
          <Link to="/login">
            <button
              className="border-2 ml-[20px] border-black rounded-md px-[15px] hover:rounded-[30px] hover:bg-black hover:text-white"
              onClick={() => {setMenu("login");localStorage.removeItem("userInfo")}}
            >
              {localStorage.getItem("userInfo")?" Logout ":"Login"}
            </button>
          </Link>
          <Link to="/cart">
            <span className="flex items-center">
              <IoCartOutline size={35} />
              <p className="h-[22px] w-[22px] bg-black rounded-full text-white flex items-center justify-center text-md mt-[-28px] ml-[-15px]">
                {getTotalCartItems()}
              </p>
            </span>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <GiHamburgerMenu
          onClick={() => setHideMenu(true)}
          className="md:hidden cursor-pointer"
          size={30}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white w-[70%] z-50 transform ${
          hideMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end items-center p-4 border-b border-gray-300">
          {/* <img src={nikeLogo} className="h-[50px] w-[60px]" alt="Nike Logo" /> */}
          <AiOutlineClose
            size={30}
            className="cursor-pointer"
            onClick={() => setHideMenu(false)}
          />
        </div>
        <ul className="flex flex-col gap-6 p-6">
          {['shop', 'men', 'women', 'kids', 'login', 'cart'].map((item) => (
            <li
              key={item}
              onClick={() => setHideMenu(false)}
              className="text-lg font-semibold"
            >
              <Link to={`/${item === 'shop' ? '' : item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

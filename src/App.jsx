import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Footer from './components/Footer'
import ShopContextProvider from './context/ShopContext'
import menBanner from "./assets/menBanner.jpg";
import kidBanner from "./assets/kidBanner.png";
import womenBanner from "./assets/womenBanner.jpg";
import "./App.css"
import Admin from './pages/Admin'
function App() {
  return (
    <BrowserRouter>
    <ShopContextProvider>
    <Navbar />
      <Routes>
        <Route  path="/" element={<Shop />}/>
        <Route  path="/men" element={<ShopCategory name="top of the wishlist kicks" banner={menBanner} category="men" />}/>
        <Route  path="/women" element={<ShopCategory  name="run in the dark" banner={womenBanner} category="women" />}/>
        <Route  path="/kids" element={<ShopCategory banner={kidBanner} name="elevate their game" category="kids" />}/>
        <Route  path="/product/:productId" element={<Product />}/>
        <Route  path="/cart" element={<Cart />}/>
        <Route  path="/login" element={<Login />}/>
        <Route path='/admin' element={<Admin />} />
      </Routes>
    <Footer />
    </ShopContextProvider>
    </BrowserRouter>
  )
}

export default App

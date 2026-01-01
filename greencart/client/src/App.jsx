import React from 'react'
import NavBar from './components/NavBar'
import { Routes, useLocation } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
import Login from './components/Login'

import { useAppContext } from './context/AppContext'
import AllProducts from './pages/AllProducts'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetail'
import Cart from './components/cart'
import AddAddress from './pages/AddAddress'
import MyOrders from './pages/MyOrders'

const App = () => {
  const {showUserLogin}=useAppContext();
  
  const isSellerPath=useLocation().pathname.includes("seller")
  return (
    <>
    {isSellerPath ? null :<NavBar/>}
    {showUserLogin ? <Login/>:null}
    <Toaster/>
    <div className={`${isSellerPath ? "" :"px-6 md:px-16 lg:px-24 xl:px-32"}`}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/products/:category' element={<ProductCategory/>}/>
        <Route path='/products/:category/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/add-address' element={<AddAddress/>}/>
        <Route path='/my-orders' element={<MyOrders/>}/>
      </Routes>
    </div>

    {!isSellerPath && <Footer/>}
    </>
  )
}

export default App
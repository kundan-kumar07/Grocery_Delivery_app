import React from 'react'
import NavBar from './components/NavBar'
import { Routes, useLocation } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const isSellerPath=useLocation().pathname.includes("seller")
  return (
    <>
    {isSellerPath ? null :<NavBar/>}
    <div className={`${isSellerPath ? "" :"px-6 md:px-16 lg:px-24 xl:px-32"}`}>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
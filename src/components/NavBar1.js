import React from 'react'
import logo from "../assests/logo.png"
import { Link } from "react-router-dom"

const NavBar = () => {
  return<>
  <div className='flex border space-x-8 items-center pl-3 py-2 bg-orange-300'>
    <img src={logo} className='w-[70px]'  alt="logo" />
    <Link to="" className='text-red-500 text-3xl  font-sans font-bold'>HOME</Link>
    <Link to="/watchlist" className='text-red-500 text-3xl font-sans font-bold'>WATCHLIST</Link>
  </div>
  </>
  
}
export default NavBar
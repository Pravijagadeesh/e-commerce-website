import React from 'react'
import {assets} from "../assets/assets"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="" srcset="" />
      <h1>helo</h1>
    </nav>
  )
}

export default Navbar

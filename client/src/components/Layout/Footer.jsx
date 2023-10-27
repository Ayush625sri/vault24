import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white text-2xl h-fit max-w-screen flex flex-col  items-center gap-6 py-4'>
      
      <div className="flex ">
        <Link to="/about" className='mx-5 hover:text-teal-300'> About </Link>  |
        <Link to="/contact" className='mx-5 hover:text-teal-300'> Contact </Link>  |  
        <Link to="/policy" className='mx-5 hover:text-teal-300'> Privacy Policy </Link>
      </div>
      <h4 className=" ">All Right reserved &copy; eCommerce </h4>
    </div>
  )
}

export default Footer
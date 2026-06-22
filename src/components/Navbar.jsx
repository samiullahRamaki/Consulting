import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <>
  <div className='flex gap-8 items-center justify-center '>


        <ul className='flex gap-8 items-center justify-center '>
            <Link to="/" className='cursor-pointer'>Home</Link >
            <Link to="/about" className='cursor-pointer'>About</Link >
            <Link to="/services" className='cursor-pointer'>Services</Link >
            <Link to="/blog" className='cursor-pointer'>Blog</Link>
        </ul>

            <Link to="/contact" className='border py-2 px-6 rounded-3xl cursor-pointer hover:text-white/40 transition-colors'>Contact</Link>
  </div>
  </>
}

export default Navbar
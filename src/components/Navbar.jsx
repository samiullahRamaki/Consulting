import React from 'react'

const Navbar = () => {
  return <>
  <div className='flex gap-8 items-center justify-center '>


        <ul className='flex gap-8 items-center justify-center '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Blog</li>
        </ul>

            <button className='border py-2 px-6 rounded-3xl cursor-pointer hover:text-gray-600 transition-colors'>Contact</button>
  </div>
  </>
}

export default Navbar
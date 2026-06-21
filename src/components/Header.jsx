import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return <>

      <div className='flex items-center justify-between bg-black/5 backdrop-blur-xl container'>
          <div className='flex items-center justify-center '>
              <img src="https://framerusercontent.com/images/yCXJEe4mAPqMjNVFhzw8oRDeh8.png?width=310&height=72" alt="" className='w-40' />
          </div>
          <nav>
            <Navbar/>
          </nav>
      </div>
  
  </>
}

export default Header
import React from 'react'
import Header from '../components/Header';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className='flex flex-col items-center justify-center'>

        <Header/>
        <Outlet />  
    </main>
  )
}

export default MainLayout
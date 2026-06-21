import React from 'react'
import { Routes, Route } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';

const AppRoutes = () => {
  return (
   <Routes>
   <Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
   </Route>

   </Routes>
  )
}

export default AppRoutes
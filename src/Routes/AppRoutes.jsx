import React from 'react'
import { Routes, Route } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import Services from '../Pages/Services/Services';

const AppRoutes = () => {
  return (
   <Routes>
   <Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
  <Route path='about' element = {<About/>} />
  <Route path='blog' element = {<Blog/>} />
  <Route path='contact' element = {<Contact/>} />
  <Route path='services' element = {<Services/>} />
   </Route>

   </Routes>
  )
}

export default AppRoutes
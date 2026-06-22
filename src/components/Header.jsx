import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl
      flex items-center justify-between  bg-black/20  text-white/80 p-4 rounded-full">

      {/* Logo */}
      <img
        src="https://framerusercontent.com/images/yCXJEe4mAPqMjNVFhzw8oRDeh8.png"
        className="w-28"
      />

      {/* Desktop menu */}
      <nav className="hidden md:block">
        <Navbar />
      </nav>

      {/* Mobile icon */}
      <div className="md:hidden">
        <FaList size={28} onClick={() => setOpen(!open)} />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 
                        bg-white text-gray-700 backdrop-blur-md 
                        w-[90%] p-5 rounded-xl text-center">

          <ul className="flex flex-col gap-4 items-center justify-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact" className="bg-blue-500 max-w-30 w-full text-white p-2 rounded-3xl">
              Contact
            </Link>
          </ul>

        </div>
      )}

    </div>
  );
};

export default Header;
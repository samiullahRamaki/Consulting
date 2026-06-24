import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const headerRef = useRef(null);

  // Hide/Show Header on Scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHide(true);
      } else {
        setHide(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl
      flex items-center justify-between bg-black/20 text-white/80 p-4 rounded-full
      transition-all duration-300 ${
        hide
          ? "-translate-y-24 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      {/* Logo */}
      <img
        src="https://framerusercontent.com/images/yCXJEe4mAPqMjNVFhzw8oRDeh8.png"
        alt="Logo"
        className="w-28"
      />

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <Navbar />
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        <FaList size={28} />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2
          bg-white text-gray-700 w-[90%] p-5 rounded-xl text-center shadow-lg"
        >
          <ul className="flex flex-col gap-4 items-center">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>

            <Link to="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-blue-500 max-w-30 w-full text-white p-2 rounded-3xl"
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="w-full bg-blue-600 text-white/80 flex flex-col items-center justify-center mt-30 p-10">
      <div className="flex flex-col gap-10 md:flex-row items-center justify-between max-w-6xl w-full py-20 border-b ">
        <h1 className="text-4xl text-white text-center">
          Ready to transform your business?
        </h1>
        <Link
          to="/contact"
          className="border py-2 rounded-3xl w-35 flex items-center justify-center hover:opacity-70 transition-all duration-300"
        >
          Get started
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-6xl pb-20 mt-20 gap-20">
        {/* First Part */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Link to="/">
              <img
                src="https://framerusercontent.com/images/eTtGrZ53EwsOvt2WKev3eOgmmfU.png?width=310&height=72"
                alt=""
                className="w-30 opacity-90"
              />
            </Link>
            <p className="max-w-[35ch] text-white/60">
              Industry-leading consulting firm with innovative solutions
            </p>
          </div>
          <div className="flex gap-3 text-xl">
            <FiFacebook />
            <BsTwitterX />
            <FaInstagram />
            <CiYoutube />
          </div>
        </div>
        {/* second Part */}

        <nav className="flex flex-col gap-1">
          <h1 className="text-xl text-white mb-5">Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
        </nav>

        {/* Third part */}

        <nav className="flex flex-col gap-1">
          <h1 className="text-xl text-white mb-5">Pages</h1>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">404</Link>
        </nav>

        {/* Fourth part */}
        <nav className="flex flex-col gap-1 ">
          <h1 className="text-xl text-white mb-5">Services</h1>
          <a href="#">Market research</a>
          <a href="#">Strategic planning</a>
          <a href="#">Financial advisory</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;

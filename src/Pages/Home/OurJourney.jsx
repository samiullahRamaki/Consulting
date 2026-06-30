import React from "react";
import { Link } from "react-router-dom";

const OurJourney = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://framerusercontent.com/images/5HKlRNWxRP9pKorHGF6OWxCVdmM.jpg?scale-down-to=2048&width=3873&height=2181)",
      }}
      className="relative w-full h-200 bg-cover bg-center mt-30"
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex h-full items-end justify-center pb-20">
        <div className="flex flex-col md:flex-row gap-5  w-full max-w-7xl items-center justify-between px-6">
          <h1 className="text-white text-5xl text-wrap font-semibold text-center">
            Our journey began 20 years ago
          </h1>

          <Link
            to="/about"
            className="border border-white/60 text-white px-8 py-3 text-nowrap rounded-full hover:brightness-70 transition-all duration-100"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;

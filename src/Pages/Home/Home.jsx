import React from "react";
import homeBg from "../../assets/homeBg.jpg";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import OurServices from "./OurServices";
import Request from "./Request";
import OurApproach from "./OurApproach";
import OurJourney from "./OurJourney.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import OurProcess from "./OurProcess.jsx";
import OurCommitment from "./OurCommitment.jsx";
import Testimonials from "./Testimonials.jsx";

const Home = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center pb-24"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* content */}
        <main className="relative z-10 ">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10 justify-center h-screen">
            <h1 className="text-7xl text-white text-wrap max-w-xl w-full">
              Grow your business faster
            </h1>
            <p className="text-white/70 max-w-150 text-wrap w-full">
              With our expertise and dedication, we'll help you navigate
              challenges, seize opportunities, and achieve your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 ">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-4xl cursor-pointer hover:brightness-80 transition-all ">
                Get template for free
              </button>
              <Link
                to="/contact"
                className="border border-white/60 text-white px-8 py-3 rounded-4xl hover:brightness-80 transition-all"
              >
                Contact page
              </Link>
            </div>

            <div>
              <Scroll />
            </div>
          </div>
        </main>
        {/* Our Services Section */}

        <div>
          <OurServices />
        </div>

        <div>
          <Request />
        </div>

        <div>
          <OurApproach />
        </div>

        <div>
          <OurJourney />
        </div>

        <div>
          <WhyChooseUs />
        </div>

        <div>
          <OurProcess />
        </div>

        <div>
          <OurCommitment />
        </div>

        <div>
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default Home;

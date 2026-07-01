import React from "react";
import { Link } from "react-router-dom";
import { PiChartLineUpLight } from "react-icons/pi";
import { PiChartPieLight } from "react-icons/pi";

const OurCommitment = () => {
  return (
    <div className="flex items-center justify-center p-5 mt-25">
      <main className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-7xl w-full ">
        <div className="relative rounded-3xl overflow-hidden flex items-center justify-center max-w-150 h-160 w-full">
          <img
            src="https://framerusercontent.com/images/umz1vAsNQy3hz5TGm8mgalWPqq4.jpg?scale-down-to=1024&width=5066&height=3377"
            className="w-auto h-auto max-w-none relative z-0"
          />

          <div className="absolute bottom-25 left-12 bg-blue-500 text-white p-8 rounded-xl z-20 flex flex-col items-center justify-center max-w-30 md:max-w-60 w-full h-60 md:h-50 gap-5">
            <PiChartLineUpLight className="text-4xl " />
            <h1 className="text-4xl font-bold ">30%</h1>
            <p className="text-xl">Growth measured</p>
          </div>

          <div className="absolute bottom-17 right-12 bg-white text-black p-8 rounded-xl z-20 flex flex-col items-center justify-center max-w-30 md:max-w-60 w-full h-60 md:h-50 gap-5">
            <PiChartPieLight className="text-4xl" />
            <h1 className="text-4xl font-bold">30%</h1>
            <p className="text-xl">Growth measured</p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <p className="pb-4.5 text-blue-700 text-xl">______</p>
            <h1 className="text-blue-700 text-xl">Our Commitment</h1>
          </div>
          <h1 className="text-6xl">We build solutions to drive results</h1>
          <p className="max-w-[70ch] w-full text-wrap text-gray-700">
            With our proven track record, collaborative approach, and commitment
            to excellence, we are uniquely positioned to help you overcome
            challenges, seize opportunities.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white/90 p-3 rounded-full flex items-center justify-center max-w-40 hover:opacity-60 transition-all duration-200"
          >
            Request an audit
          </Link>
        </div>
      </main>
    </div>
  );
};

export default OurCommitment;

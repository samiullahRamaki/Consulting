import React from "react";
import { LuCheck } from "react-icons/lu";

const OurApproach = () => {
  return (
    <div className="flex items-center justify-center">
      <main className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-7xl w-full ">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://framerusercontent.com/images/ImUfonalQMOKWjsL2OcxwGINE.jpg?scale-down-to=1024&width=5081&height=3387"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <p className="pb-4.5 text-blue-700 text-xl">______</p>
            <h1 className="text-blue-700 text-xl">Our Approach</h1>
          </div>
          <h1 className="text-5xl max-w-[18ch] w-full text-wrap font-semibold">
            Innovative approach to consulting
          </h1>
          <p className="text-gray-700 text-lg text-wrap max-w-[97ch] w-full">
            By combining our industry knowledge with cutting-edge tools and
            methodologies, we develop actionable strategies that drive
            measurable results.
          </p>
          <div className="flex flex-col gap-5 mt-8">
            <div className="flex gap-5">
              <LuCheck
                color="white"
                className="bg-blue-700/80 p-1 w-7 h-7 rounded"
              />
              <h1 className="text-xl">
                We believe in fostering long-term partnerships
              </h1>
            </div>
            <div className="flex gap-5">
              <LuCheck
                color="white"
                className="bg-blue-700/80 p-1 w-7 h-7 rounded"
              />
              <h1 className="text-xl">
                We develop actionable plans to achieve your goals
              </h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurApproach;

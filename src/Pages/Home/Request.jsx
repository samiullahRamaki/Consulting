import React from "react";
import { Link } from "react-router-dom";
const Request = () => {
  return (
    <main className="bg-blue-800/80 w-full h-60 flex items-center justify-center mt-40 p-5">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl w-full ">
        <h1 className="text-white text-5xl font-semibold ">
          Need customized services?
        </h1>

        <Link
          to="/contact"
          className="border border-white/60 text-white px-12 py-3 rounded-4xl hover:brightness-85 transition-all duration-300"
        >
          Request a personalized service
        </Link>
      </div>
    </main>
  );
};

export default Request;

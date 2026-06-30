import React from "react";

const Card = ({ icon, title, description, button }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start lg:flex-row lg:text-start text-center gap-8 hover:cursor-pointer group">
      <div className="bg-blue-600/80 w-16 text-white p-4 text-3xl rounded-xl group-hover:bg-gray-200 group-hover:text-black transition-all duration-300 flex items-center justify-center ">
        {icon}
      </div>
      <div className="flex flex-col gap-4 lg:justify-start justify-center">
        <h1 className="text-2xl font-semibold text-wrap">{title}</h1>
        <p className="text-gray-600 max-w-[37ch] w-full">{description}</p>
        <button className="text-blue-600 font-semibold flex justify-center md:justify-start">
          {button}
        </button>
      </div>
    </div>
  );
};

export default Card;

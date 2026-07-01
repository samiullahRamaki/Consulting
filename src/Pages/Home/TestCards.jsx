import React from "react";
import { FaStar } from "react-icons/fa";

const TestCards = ({ rating, description, img, name, possition }) => {
  return (
    <div className="bg-white w-80 rounded-xl px-9 py-10 flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <div className="flex gap-1 text-yellow-400 text-sm">
          {Array.from({ length: rating }).map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <p className="text-sm max-w-[30ch] w-full text-black/90">
          {description}
        </p>
      </div>
      <div className="flex gap-5">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 flex items-center justify-center">
          <img src={img} alt="" className="w-full h-full object-conver" />
        </div>
        <div className="">
          <h1 className="font-semibold">{name}</h1>
          <h2 className="text-sm text-gray-400">{possition}</h2>
        </div>
      </div>
    </div>
  );
};

export default TestCards;

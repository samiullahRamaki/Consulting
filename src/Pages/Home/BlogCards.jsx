import React from "react";

const BlogCards = ({ img, date, icon, title }) => {
  return (
    <div
      className="group relative bg-center bg-cover max-w-90 w-full h-85 rounded-2xl overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200"></div>

      <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-center justify-between">
          <h1 className="bg-blue-600 p-2 rounded-md text-sm">{date}</h1>

          <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {icon}
          </div>
        </div>

        <div className="font-semibold text-xl">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;

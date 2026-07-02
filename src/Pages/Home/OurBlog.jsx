import React from "react";
import { GoArrowRight } from "react-icons/go";
import BlogCards from "./BlogCards";

const items = [
  {
    img: "https://framerusercontent.com/images/qklsR65YylztpJZUzOpPagyXoI.jpg?scale-down-to=2048",
    date: "Apr 8, 2022",
    icon: <GoArrowRight />,
    title: "The power of strategic planning: a roadmap to success",
  },

  {
    img: "https://framerusercontent.com/images/vyet712c80Y4J9fhSnep20f2mlU.jpg?scale-down-to=2048",
    date: "Mar 15, 2022",
    icon: <GoArrowRight />,
    title: "The importance of good leadership in a growing business",
  },

  {
    img: "https://framerusercontent.com/images/XOgTNGhNhIIdGFoazkqqnG9QmE.jpg?scale-down-to=2048",
    date: "Feb 28, 2022",
    icon: <GoArrowRight />,
    title: "Unlocking growth: strategies for scaling your business",
  },
];

const OurBlog = () => {
  return (
    <div className="flex justify-center items-center pt-30">
      <div className="flex flex-col justify-center items-center gap-5 max-w-7xl w-full">
        <div className="flex items-center gap-3">
          <p className="pb-4.5 text-blue-700 text-xl">______</p>
          <h1 className="text-blue-700 text-xl">Our Blog</h1>
        </div>
        <div className=" flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl max-w-[15ch] w-full text-center">
            Explore insights and stay ahead
          </h1>
          <p className=" text-center max-w-[60ch] w-full mb-12 text-gray-700">
            Our blog features insights from our team of consultants, who share
            their best practices on a wide range of topics.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          {items.map((item, index) => (
            <BlogCards key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlog;

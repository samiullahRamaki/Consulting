import React from "react";
import TestCards from "./TestCards";
const items = [
  {
    rating: 5,
    description:
      "The impact of Consulting's work on our organization has been transformative. Their dedication to our success have helped us achieve remarkable growth.",
    img: "https://framerusercontent.com/images/vZW3QExeafY8ogiiWnlsg3Z00.jpg?scale-down-to=1024&width=4000&height=6000",
    name: "Alex Peterson",
    possition: "Thompson Industries",
  },
  {
    rating: 4,
    description:
      "Their team's depth of knowledge, strategic thinking, and commitment to excellence have been instrumental in helping us navigate complex challenges.",
    img: "https://framerusercontent.com/images/6YEx3JiYIJRZsLw9TyBaZ8jK1kM.jpg?scale-down-to=512&width=4328&height=2885",
    name: "David Martinez",
    possition: "Johnson Enterprises",
  },
  {
    rating: 5,
    description:
      "The team at Consulting exceeded our expectations in every way. We are grateful for their partnership and the positive impact they've had on our business.",
    img: "https://framerusercontent.com/images/9Eojl9xKz48ZbfN2wukMx7GvI.jpg?scale-down-to=1024&width=2592&height=3872",
    name: "John Smith",
    possition: "JS Solutions",
  },
  {
    rating: 5,
    description:
      "Their collaborative approach, attention to detail, and commitment to delivering results set them apart from other consulting firms. I would't hesitate to recommend..",
    img: "https://framerusercontent.com/images/vHMSEWw5B42ZyOnn7b3crhvXwSY.jpg?scale-down-to=512&width=5472&height=3648",
    name: "Ryan Johnson",
    possition: "Tech Solutions",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full bg-gray-100 flex justify-center items-center">
      <main className="flex flex-col gap-20 max-w-7xl w-full py-20 px-5">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <p className="pb-4.5 text-blue-700 text-xl">______</p>
              <h2 className="text-blue-700 text-xl">Testimonials</h2>
            </div>
            <h1 className="text-5xl leading-15">
              Trusted by <br /> 10k+ customers
            </h1>
          </div>
          <div>
            <p className="max-w-[57ch] text-gray-700">
              Whether you're a small startup or a multinational corporation, let
              us be your trusted advisor on the path to success.
            </p>
          </div>
        </div>

        <div
          className="w-full mx-auto px-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0px, black 80px, black calc(100% - 150px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0px, black 80px, black calc(100% - 150px), transparent 100%)",
          }}
        >
          <div className="overflow-hidden">
            <div className="flex max-w-7xl animate-[scroll_20s_linear_infinite] gap-5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-5 shrink-0">
                  {items.map((item, index) => (
                    <TestCards key={`${i}-${index}`} {...item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;

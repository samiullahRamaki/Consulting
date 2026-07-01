import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const items = [
  {
    icon: "01.",
    title: "Discovery",
    description:
      "The first step is to gain a deep understanding of your business.",
  },
  {
    icon: "03.",
    title: "Implementation",
    description:
      "We will work closely with your team to implement the changes.",
  },
  {
    icon: "02.",
    title: "Development",
    description:
      "We'll work with you to develop a strategy that fits your objectives.",
  },
  {
    icon: "04.",
    title: "Monitoring",
    description:
      "We'll monitor key performance indicators and gather feedback.",
  },
];

const OurProcess = () => {
  return (
    <div className="w-full bg-blue-700/80 flex items-center justify-center px-5 py-30 mt-20">
      <div className="max-w-7xl w-full text-white/90 flex flex-col md:flex-row justify-center items-start gap-25">
        <div className="flex flex-col gap-7">
          <h1 className="text-5xl">Our process</h1>
          <p className="text-white/70 max-w-[75ch] w-full">
            We developed an innovative and flexible process that allows us to
            understand your business better
          </p>
          <Link
            to="/about"
            className="border border-white/70 px-3 py-2.5 rounded-full max-w-35 flex items-center justify-center "
          >
            Learn more
          </Link>
        </div>
        <Link to="/about" className="flex flex-wrap gap-5">
          {items.map((item, index) => (
            <div key={index}>
              <Card {...item} variant="process" />
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default OurProcess;

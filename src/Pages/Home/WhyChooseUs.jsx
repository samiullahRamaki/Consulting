import React from "react";
import Card from "./Card";
import { LuArchive, LuMessageSquare, LuBriefcase } from "react-icons/lu";
import { Link } from "react-router-dom";

const items = [
  {
    icon: <LuArchive />,
    title: "Proven track record",
    description: "We have helped countless businesses overcome challenges.",
    button: <Link to="/about">Our track record →</Link>,
  },
  {
    icon: <LuMessageSquare />,
    title: "Collaborative approach",
    description: "We ensure transparency throughout the process.",
    button: <Link to="/about">Our process →</Link>,
  },
  {
    icon: <LuBriefcase />,
    title: "Innovative solutions",
    description: "We leverage the latest technologies  to deliver solutions.",
    button: <Link to="/about">Our solutions →</Link>,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="flex items-center justify-center p-5 mt-20">
      <main className="flex flex-col max-w-7xl w-full items-center justify-center">
        <div className="flex items-center gap-3">
          <p className="pb-4.5 text-blue-600 text-xl">______</p>
          <h1 className="text-blue-600 text-xl">Why choose us</h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 mt-5">
          <h1 className="text-5xl max-w-[20ch] w-full text-center">
            We strive to deliver value to our clients
          </h1>
          <p className="text-xl max-w-[60ch] w-full text-center">
            We are dedicated to providing the highest level of service,
            delivering innovative solutions, and exceeding expectations in
            everything we do.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-20">
          {items.map((items, index) => (
            <Card key={index} {...items} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default WhyChooseUs;

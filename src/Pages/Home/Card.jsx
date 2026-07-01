import React from "react";

const variants = {
  default: {
    container:
      "flex flex-col items-center justify-center lg:items-start lg:flex-row lg:text-start text-center gap-8 hover:cursor-pointer group",

    icon: "bg-blue-600/80 w-16 text-white p-4 text-3xl rounded-xl group-hover:bg-gray-200 group-hover:text-black transition-all duration-300 flex items-center justify-center",

    content: "flex flex-col gap-4 lg:justify-start justify-center",

    title: "text-2xl font-semibold text-wrap",

    description: "text-gray-600 max-w-[37ch] w-full",

    button: "text-blue-600 font-semibold flex justify-center md:justify-start",
  },

  process: {
    container:
      "bg-blue-800/30 p-7 rounded-2xl hover:bg-white/90 group transition-all duration-700",

    icon: "text-5xl mb-15 group-hover:text-black",

    content:
      "flex flex-col gap-4 lg:justify-start justify-center group-hover:text-black",

    title: "text-xl font-semibold text-wrap group-hover:text-black",

    description:
      " max-w-[37ch] w-full text-sm text-white/80 group-hover:text-black",
  },
};

const Card = ({ icon, title, description, button, variant = "default" }) => {
  const style = variants[variant];

  return (
    <div className={style.container}>
      <div className={style.icon}>{icon}</div>

      <div className={style.content}>
        <h1 className={style.title}>{title}</h1>

        <p className={style.description}>{description}</p>

        <button className={style.button}>{button}</button>
      </div>
    </div>
  );
};

export default Card;

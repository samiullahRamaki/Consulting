import React from "react";

const Scroll = () => {
  return (
    <div className="absolute bottom-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden brightness-50">
        {/* سه کپی پشت سر هم */}
        <div className="flex w-max animate-[scroll_50s_linear_infinite] will-change-transform">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-15 px-10">
              <img
                src="https://framerusercontent.com/images/C74rJldf1AX4ml3glGIfUaSeSk.png"
                className="w-24 h-10 object-contain"
                alt="logo"
              />
              <img
                src="https://framerusercontent.com/images/tYYUVQNdDSm9oBSCAvxf1G8Voe8.png"
                className="w-24 h-10 object-contain"
                alt="logo"
              />
              <img
                src="https://framerusercontent.com/images/u9M8UmTkdOTylINg9VFaom3OOyQ.png"
                className="w-24 h-10 object-contain"
                alt="logo"
              />
              <img
                src="https://framerusercontent.com/images/xVwUn1pAAZzVoqlsp4BmZ9XZbI.png"
                className="w-24 h-10 object-contain"
                alt="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
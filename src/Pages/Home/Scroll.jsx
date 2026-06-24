import React from "react";

const Scroll = () => {
  return (
    <div className="absolute bottom-10 left-0 right-0 w-full overflow-hidden">
      

      <div
        className="max-w-7xl mx-auto px-4 brightness-50"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0px, black 60px, black calc(100% - 60px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0px, black 60px, black calc(100% - 60px), transparent 100%)",
        }}
      >
        
        <div className="flex w-max animate-[scroll_50s_linear_infinite] will-change-transform">
          
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-15 px-10 shrink-0">
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
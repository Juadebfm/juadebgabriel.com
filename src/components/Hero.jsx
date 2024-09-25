import React, { useContext } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { GridBg } from "./reusable/GridBg";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      <GridBg />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center justify-center border ${
              isDarkMode
                ? "border-white/50 text-white"
                : "border-black/50 text-black"
            } px-7 py-2 gap-2 rounded-full mb-6 ${
              isDarkMode ? "bg-black/30" : "bg-white/30"
            }`}
          >
            <GiReturnArrow
              className={isDarkMode ? "text-white" : "text-black"}
            />
            <span className="text-sm sm:text-base capitalize">
              Subscription. Pause or cancel anytime
            </span>
          </div>
          <h1
            className={`text-4xl sm:text-5xl lg:text-[62px] leading-tight sm:leading-none capitalize font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="block mb-2 sm:mb-0">All-in-one solution</span>
            <span className="block">Unlimited design & development</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

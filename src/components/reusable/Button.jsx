import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Button = ({ btnText, btnFunc, btnStyle, showPulse = false }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <button
      className={`${btnStyle} flex items-center justify-center gap-3 font-nunito border ${
        isDarkMode
          ? "border-primary_white hover:bg-primary_white hover:text-primary_black"
          : "border-primary_black hover:bg-primary_black hover:text-primary_white"
      } rounded-full h-[53px] w-auto transition-colors duration-300 px-5 pr-6`}
      onClick={btnFunc}
    >
      {showPulse && (
        <div className="bg-red-500 animate-pulse h-[7px] w-[7px] rounded-full"></div>
      )}
      {btnText}
    </button>
  );
};

export default Button;

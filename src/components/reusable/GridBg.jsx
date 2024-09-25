import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function GridBg() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="absolute inset-0 z-0">
      <div className={`h-full w-full ${isDarkMode ? "bg-black" : "bg-white"}`}>
        <div
          className={`h-full w-full ${
            isDarkMode ? "bg-dot-white/[0.2]" : "bg-dot-black/[0.2]"
          }`}
        ></div>
      </div>
      <div
        className={`absolute inset-0 ${
          isDarkMode ? "bg-black" : "bg-white"
        } [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-80`}
      ></div>
    </div>
  );
}

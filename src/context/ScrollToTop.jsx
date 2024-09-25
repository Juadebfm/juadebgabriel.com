import React, { createContext, useContext } from "react";

const ScrollToTopContext = createContext();

export const ScrollToTopProvider = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollToTopContext.Provider value={{ scrollToTop }}>
      {children}
    </ScrollToTopContext.Provider>
  );
};

export const useScrollToTopContext = () => useContext(ScrollToTopContext);

import React, { createContext, useState, useEffect } from "react";

export const ScrollContext = createContext({
  scrollDirection: "up",
  scrollY: 0,
});

export const ScrollProvider = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <ScrollContext.Provider value={{ scrollDirection, scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

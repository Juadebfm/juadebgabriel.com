import React, { useEffect, useState } from "react";

const CustomScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollHeight(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "10px",
        top: "40%",
        width: "5px",
        height: "20vh",
        backgroundColor: "black",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: `${scrollHeight}%`,
          backgroundColor: "orange",
          borderRadius: "5px",
          transition: "height 0.3s ease",
        }}
      />
    </div>
  );
};

export default CustomScroll;

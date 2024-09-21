import React, { useEffect, useState } from "react";
import gsap from "gsap";

const CustomScroll = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the percentage of scroll
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
        right: "10px", // Adjust as needed for positioning
        top: "40%", // Keeps the scrollbar centered vertically
        width: "10px", // Width of the scrollbar
        height: "20vh", // Height is 20% of the viewport
        backgroundColor: "black", // The track of the scrollbar
        borderRadius: "5px", // Optional for rounded edges
      }}
    >
      <div
        style={{
          width: "100%",
          height: `${scrollHeight}%`, // Dynamically set based on scroll progress
          backgroundColor: "orange", // Scroll thumb color
          borderRadius: "5px", // Optional for rounded thumb
          transition: "height 0.3s ease", // Smooth transition
        }}
      />
    </div>
  );
};

export default CustomScroll;

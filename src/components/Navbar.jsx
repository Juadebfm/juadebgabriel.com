import React, { useContext, useEffect, useRef } from "react";
import logo from "../assets/logoround.png";
import { ScrollContext } from "../context/ScrollContext";
import gsap from "gsap";
import Button from "./reusable/Button";
import CustomButton from "../context/CustomButton";

const Navbar = () => {
  const { scrollDirection } = useContext(ScrollContext);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (scrollDirection === "down") {
      gsap.to(navbarRef.current, {
        y: -200,
        duration: 0.8,
        ease: "power3.out",
      });
    } else {
      gsap.to(navbarRef.current, {
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }
  }, [scrollDirection]);

  return (
    <nav
      ref={navbarRef}
      className="w-[90%] mx-auto border-[0.5px] border-primary_white rounded-[999px] fixed top-10 left-1/2 transform -translate-x-1/2 p-4 flex items-center justify-between"
    >
      <div className="flex item-center justify-normal gap-3">
        <img src={logo} alt="Juadeb Designs" height={45} width={45} />
        <div className="flex items-center justify-center text-[25px] font-nunito_sans">
          Juadeb Gabriel
        </div>
      </div>

      <ul></ul>

      <div>
        <CustomButton />
      </div>
    </nav>
  );
};

export default Navbar;

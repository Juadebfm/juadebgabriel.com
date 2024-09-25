import React, { useContext, useEffect, useRef } from "react";
import logo from "../assets/logoround.png";
import { ScrollContext } from "../context/ScrollContext";
import { ThemeContext } from "../context/ThemeContext";
import gsap from "gsap";
import Button from "./reusable/Button";
import { IoSunnySharp, IoMoon } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { scrollDirection } = useContext(ScrollContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navbarRef = useRef(null);

  // List of navigation links
  const navLinks = [
    { name: "Process", href: "/process" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Let's Talk", href: "/contact" },
  ];

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
      className={`w-[95%] bg-primary_black/10 backdrop-blur-lg backdrop-opacity-40 mx-auto z-20 border-[0.5px] ${
        isDarkMode ? "border-primary_white" : "border-primary_black"
      } rounded-full fixed top-10 left-1/2 transform -translate-x-1/2 px-5 py-4 grid grid-cols-3 items-stretch justify-between transition-colors duration-300 ${
        isDarkMode
          ? "bg-primary_black text-primary_white"
          : "bg-white_mode_bg text-primary_black"
      }`}
    >
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src={logo} alt="Juadeb Designs" height={45} width={45} />
        </Link>
      </div>

      {/* Render navigation links dynamically */}
      <ul className="flex items-center gap-14">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className="capitalize hover:text-main_orange transition-colors duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-5">
        <button onClick={toggleTheme} className="focus:outline-none">
          {isDarkMode ? <IoSunnySharp size={24} /> : <IoMoon size={24} />}
        </button>
        <Button btnText="Book a call" showPulse={true} btnStyle="capitalize" />
      </div>
    </nav>
  );
};

export default Navbar;

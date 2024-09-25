import React, { useContext } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { getCurrentYear } from "../utils/date";
import { ThemeContext } from "../context/ThemeContext";
import { useScrollToTopContext } from "../context/ScrollToTop";

const Footer = () => {
  const { scrollToTop } = useScrollToTopContext();
  const { isDarkMode } = useContext(ThemeContext);

  const date = getCurrentYear();
  return (
    <footer
      className={`w-full relative py-20 px-16 transition-colors duration-300 ${
        isDarkMode
          ? "bg-white_mode_bg text-primary_black"
          : "bg-primary_black text-primary_white border-t border-primary_white/20"
      }`}
    >
      <section className="flex items-center justify-start w-[70%] gap-16">
        <div className="flex flex-col items-start justify-start">
          <h3 className="font-bold">Follow Me</h3>
          <div className="flex items-center justify-start gap-5 mt-[20px]">
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://x.com/Juadeb1"
            >
              <FaXTwitter />
            </Link>
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://www.instagram.com/juadebgabriel/"
            >
              <FaInstagram />
            </Link>
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://web.facebook.com/profile.php?id=61557265640179"
            >
              <FiFacebook />
            </Link>
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://www.linkedin.com/in/juadebade/"
            >
              <CiLinkedin />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="font-bold">Contact Me</h3>
          <div className="flex items-center justify-start gap-5 mt-[20px]">
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://t.me/Juadebgabriel"
            >
              <PiTelegramLogoLight />
            </Link>
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://wa.me/7063116133"
            >
              <BsWhatsapp />
            </Link>
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="tel:+2347063116133"
            >
              <MdOutlinePhoneInTalk />
            </Link>
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://twitter.com/Juadeb1"
            >
              <CiMail />
            </Link>
          </div>
        </div>
      </section>
      <section className="w-[70%] flex items-center justify-start gap-56 text-[#7f7f7f] capitalize mt-16">
        <div>
          <span>
            <Link
              className="hover:underline duration-150 underline-offset-2"
              href="/privacy"
            >
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link
              className="hover:underline duration-150 underline-offset-2"
              href="/terms"
            >
              Terms & Conditions
            </Link>
          </span>
        </div>
        <div>
          &copy;<span>{date} Juadeb Creative Designs</span>
        </div>
      </section>

      <div
        className={`absolute right-14 top-1/2 rounded-full p-3 cursor-pointer ${
          isDarkMode
            ? "bg-primary_black text-primary_white hover:text-primary_black hover:bg-white_mode_bg hover:border hover:border-primary_black"
            : "bg-white_mode_bg text-primary_black hover:text-primary_white hover:bg-primary_black hover:border hover:border-primary_white"
        }`}
        onClick={scrollToTop}
      >
        <IoIosArrowRoundUp size={30} />
      </div>
    </footer>
  );
};

export default Footer;

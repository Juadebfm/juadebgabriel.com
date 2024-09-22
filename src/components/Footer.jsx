import React from "react";
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

const Footer = () => {
  const date = getCurrentYear();
  return (
    <footer className="w-full fixed bottom-0 left-0 bg-white_mode_bg text-primary_black p-10">
      <section className="flex items-center justify-start w-[70%] gap-16">
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-[24px]">Follow Me</h3>
          <div className="flex items-center justify-start gap-5 mt-[20px]">
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://twitter.com/Juadeb1"
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
              href="https://twitter.com/Juadeb1"
            >
              <FiFacebook />
            </Link>
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://twitter.com/Juadeb1"
            >
              <CiLinkedin />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h3 className="text-[24px]">Contact Me</h3>
          <div className="flex items-center justify-start gap-5 mt-[20px]">
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://twitter.com/Juadeb1"
            >
              <PiTelegramLogoLight />
            </Link>
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://twitter.com/Juadeb1"
            >
              <BsWhatsapp />
            </Link>
            <Link
              className=" hover:text-primary_white hover:bg-primary_black cursor-pointer hover:border hover:border-primary_black text-[21px] border border-[#7f7f7f] rounded-full p-3 duration-150 transition-all"
              href="https://twitter.com/Juadeb1"
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

      <div className="absolute right-14 top-1/2 bg-primary_black text-primary_white rounded-full p-4 hover:text-primary_black hover:bg-white_mode_bg cursor-pointer hover:border hover:border-primary_black">
        <IoIosArrowRoundUp size={45} />
      </div>
    </footer>
  );
};

export default Footer;

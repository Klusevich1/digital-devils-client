import React, { useState, useEffect } from "react";
import Image from "next/image";
import Inst from "../../public/inst.svg";
import Tg from "../../public/tg.svg";
import HeaderLogo from "@/components/HeaderLogo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <div
          className={`transition-transform bg-white duration-300 ${
            isSticky ? "translate-y-[-48px]" : "translate-y-0"
          } mx-auto max-w-[1440px] w-full py-[10px] px-[61px] justify-end items-center hidden md:flex`}
        >
          <a href="https://www.instagram.com/digital_devils_official?igsh=azB2MTQ2bWlzaXd6" className="flex items-center outline-none">
            <Image src={Inst} className="size-[28px]" alt="Instagram Logo" />
            <span className="ms-[5px] text-black">instagram</span>
          </a>
          <a href="https://t.me/devilsmanager" className="flex items-center ms-[20px] outline-none">
            <Image src={Tg} className="size-[28px]" alt="Telegram Logo" />
            <span className="ms-[5px] text-black">telegram</span>
          </a>
          <a href="tel:+375296342190">
            <span className="ms-[60px] text-[16px] font- text-black">
              +375 29 634 21 90
            </span>
          </a>
        </div>
        <div
          className={`shadow-md bg-white transition-all duration-300 py-[9px] ps-[10px] pe-[20px] md:py-[15px] md:px-[46px] border-t-black_10 border-t-[1px] flex items-center justify-between ${
            isSticky && window.innerWidth > 768
              ? "sticky w-full bg-white shadow-lg translate-y-[-48px]"
              : "translate-y-0"
          }`}
        >
          <div className="mx-auto max-w-[1440px] w-full flex items-center justify-between ">
            <HeaderLogo />
            <nav className="hidden lg:flex space-x-8 items-center">
              <a
                href="/services"
                className="text-black font-medium transition-all duration-300 hover:text-blue-600"
              >
                Услуги
              </a>
              <a
                href="/portfolio"
                className="text-black font-medium transition-all duration-300 hover:text-blue-600"
              >
                Портфолио
              </a>
              <a
                href="/about"
                className="text-black font-medium transition-all duration-300 hover:text-blue-600 text-nowrap"
              >
                О нас
              </a>
              <a
                href="/blog"
                className="text-black font-medium transition-all duration-300 hover:text-blue-600"
              >
                Блог
              </a>
              <a
                href="/contacts"
                className="text-black font-medium transition-all duration-300 hover:text-blue-600"
              >
                Контакты
              </a>
              <a
                href="/application"
                rel="nofollow"
                className="bg-blue_main min-h-[50px] py-3.5 text-center rounded-full max-w-[227px] text-white px-[39px] w-full text-[18px]  hover:bg-blue-700 mx-8 "
              >
                Обсудить проект
              </a>
            </nav>
          </div>
          <button
            className="lg:hidden flex-col items-end flex text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <span
              className={`block w-5 h-[1.6px] bg-gray-800 transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <div className="flex mt-[5px] h-[1.6px] mb-[5px]">
              <span
                className={`w-[6px] me-[2px] h-full bg-gray-800 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } `}
              ></span>
              <span
                className={`w-5 h-full bg-gray-800 transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
            </div>
            <span
              className={`block h-[2px] bg-gray-800 transition-transform duration-300 ${
                isMenuOpen ? "w-5 -rotate-45 -translate-y-1.5" : "w-7 "
              }`}
            ></span>
          </button>
          <div
            className={`bg-white h-screen fixed top-0 left-0 w-full transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } z-60`}
          >
            <div className="flex items-center justify-between py-[9px] ps-[10px] pe-[20px] md:py-[15px] md:px-[46px]">
              <HeaderLogo />
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none"
              >
                <span
                  className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  } my-1`}
                ></span>
                <span
                  className={`block w-5 h-0.5 bg-gray-800 transition-transform duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </button>
            </div>
            <nav className="flex mx-8 flex-col items-start space-y-8 mt-8 mb-[30px]">
              <a
                href="/services"
                className="text-black font-bold transition-all duration-300 hover:text-blue-600"
              >
                Услуги
              </a>
              <a
                href="/portfolio"
                className="text-black font-bold transition-all duration-300 hover:text-blue-600"
              >
                Портфолио
              </a>
              <a
                href="/about"
                className="text-black font-bold transition-all duration-300 hover:text-blue-600"
              >
                О нас
              </a>
              <a
                href="/blog"
                className="text-black font-bold transition-all duration-300 hover:text-blue-600"
              >
                Блог
              </a>
              <a
                href="/contacts"
                className="text-black font-bold transition-all duration-300 hover:text-blue-600"
              >
                Контакты
              </a>
            </nav>
            <a
              href="/application"
              rel="nofollow"
              className="bg-blue_main min-h-[50px] py-3.5 text-center rounded-full max-w-[279px] text-white px-[65px] w-full text-[18px]  hover:bg-blue-700 mx-8 "
            >
              Обсудить проект
            </a>
          </div>
        </div>
      </header>
      <div className="block h-[59px] md:h-[139px]  w-full"></div>
    </>
  );
};

export default Header;

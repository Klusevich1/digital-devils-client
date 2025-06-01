import React, { useState, useEffect } from "react";
import Image from "next/image";
import HeaderLogo from "@/components/HeaderLogo";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuMenu } from "react-icons/lu";
import { useRouter } from "next/router";

interface HeaderProps {
  theme?: string;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [dopServiceIndex, setDopServiceIndex] = useState<number>(0);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [dopMobileServicesOpenIndex, setDopMobileServicesOpenIndex] =
    useState<number>(0);
  const router = useRouter();

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

  const DOP_SERVICES = [
    { services: [] },
    {
      services: [
        { name: "Корпоротивные сайты", href: "corporate-website" },
        { name: "Интернет-магазин", href: "online-store" },
        { name: "Landing page", href: "landing" },
        { name: "B2B сайты", href: "b2b" },
        { name: "Сайт-визитка", href: "card-website" },
        { name: "Портал", href: "portal" },
        { name: "Сайт-каталог", href: "website-catalog" },
        { name: "Информационный сайт", href: "information-site" },
        { name: "Маркетплейс", href: "marketplace" },
      ],
    },
    {
      services: [
        { name: "Tilda", href: "tilda" },
        { name: "Wordpress", href: "wordpress" },
        { name: "Joomla", href: "joomla" },
        { name: "1C Битрикс", href: "bitrix" },
        { name: "Django", href: "django" },
        { name: "Opencart", href: "opencart" },
        { name: "Laravel", href: "laravel" },
      ],
    },
    {
      services: [
        { name: "Разработка мобильных приложений", href: "mob-apps" },
        { name: "IOS разработка", href: "mob-ios" },
        { name: "Android разработка", href: "mob-android" },
        { name: "ASO продвижение", href: "mob-aso" },
        { name: "PWA разработка", href: "mob-pwa" },
        { name: "Дизайн мобильных приложений", href: "mob-design" },
        { name: "Разработка веб-приложений", href: "mob-web" },
      ],
    },
    {
      services: [
        { name: "Продвижение сайтов", href: "seo" },
        { name: "Продвижение сайтов в ТОП", href: "seo-top" },
        { name: "Продвижение в Яндекс", href: "seo-yandex" },
        { name: "Продвижение интернет-магазина", href: "seo-store" },
        { name: "SEO аудит", href: "seo-audit" },
        { name: "Продвижение в Google", href: "seo-google" },
        { name: "Продвижение молодых сайтов", href: "seo-young" },
      ],
    },
    {
      services: [
        { name: "Разработка дизайна", href: "design" },
        { name: "Разработка логотипа", href: "design-logo" },
        { name: "Редизайн", href: "redesign" },
        { name: "Разработка фирменного стиля", href: "design-style" },
        { name: "Графический дизайн", href: "graph-design" },
        { name: "Motion-дизайн", href: "motion-design" },
        { name: "Разработка брендбука", href: "brandbook" },
      ],
    },
    {
      services: [
        { name: "6 Корпоротивные сайты", href: "corporate-website" },
        { name: "6 Интернет-магазин", href: "online-store" },
        { name: "6 Landing page", href: "landing" },
        { name: "6 B2B сайты", href: "b2b" },
        { name: "6 Сайт-визитка", href: "card-website" },
        { name: "6 Портал", href: "portal" },
        { name: "6 Сайт-каталог", href: "website-catalog" },
        { name: "6 Информационный сайт", href: "information-site" },
        { name: "6 Маркетплейс", href: "marketplace" },
      ],
    },
  ];

  const handleDropdowmBlock = () => {
    if (isMobileServicesOpen) {
      router.push("/services");
    } else {
      setIsMobileServicesOpen(true);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 ${
          isSticky
            ? "bg-transparent"
            : `${theme === "dark" ? "bg-black" : "bg-white"}`
        } ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        <div
          className={`transition-transform ${
            theme === "dark" ? "bg-black" : "bg-white"
          } duration-300 ${
            isSticky ? "translate-y-[-48px]" : "translate-y-0"
          } mx-auto max-w-[1440px] w-full py-[10px] px-[61px] justify-between items-center hidden md:flex`}
        >
          {/* <div
            style={{
              width: "150px",
              height: "96px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <iframe
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
                boxSizing: "border-box",
              }}
              className=""
              src="https://yandex.ru/maps-reviews-widget/192647371670?size=s"
            ></iframe>
          </div> */}
          <div className="flex flex-row gap-2">
            <Image
              src={"/resources/arrow-right.svg"}
              width={20}
              height={20}
              alt="Arrow"
            />
            <p className="text-[16px] font-medium">Игуменский тракт 20</p>
          </div>
          <div className="flex flex-row items-center">
            <a
              target="_blank"
              rel="nofollow"
              href="https://www.instagram.com/digital_devils_official?igsh=azB2MTQ2bWlzaXd6"
              className="flex items-center outline-none"
            >
              <Image
                src="/resources/inst.svg"
                width={28}
                height={28}
                className="size-[28px]"
                alt="Instagram Logo"
                priority={true}
              />
              <span
                className={`ms-[5px] ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                instagram
              </span>
            </a>
            <a
              target="_blank"
              rel="nofollow"
              href="https://t.me/devilsmanager"
              className="flex items-center ms-[20px] outline-none"
            >
              <Image
                src="/resources/tg.svg"
                width={28}
                height={28}
                className="size-[28px]"
                alt="Telegram Logo"
                priority={true}
              />
              <span
                className={`ms-[5px] ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                telegram
              </span>
            </a>
            <a href="tel:+375296342190">
              <span
                className={`ms-[60px] text-[16px] ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                +375 29 634 21 90
              </span>
            </a>
          </div>
        </div>
        <div
          className={`shadow-md ${
            theme === "dark" ? "bg-black" : "bg-white"
          } transition-all duration-300 py-[9px] ps-[10px] pe-[20px] md:py-[15px] md:px-[46px] ${
            theme === "dark" ? "border-t-black_80" : "border-t-black_10"
          } border-t-[1px] flex items-center justify-between ${
            isSticky && window.innerWidth > 768
              ? `sticky w-full ${
                  theme === "dark" ? "bg-black" : "bg-white"
                } shadow-lg translate-y-[-48px]`
              : "translate-y-0"
          }`}
        >
          <div className="services-dropdown custom_container max-w-[1440px] mx-auto w-full flex items-center justify-between ">
            <HeaderLogo theme={theme ? theme : ""} />
            <nav className="hidden xlg:flex space-x-8 items-center">
              <div
                className="relative"
                onMouseOver={() => setIsServicesOpen(true)}
                onMouseOut={(e) => {
                  const relatedTarget = e.relatedTarget as HTMLElement;
                  if (
                    !relatedTarget ||
                    !relatedTarget.closest(".services-dropdown")
                  ) {
                    setIsServicesOpen(false);
                  }
                }}
              >
                <a
                  href="/services"
                  className={`flex items-center ${
                    theme === "dark" ? "text-white" : "text-black"
                  } font-medium transition-all duration-300 hover:text-blue-600`}
                >
                  <LuMenu className="me-1" />
                  <span>Услуги</span>
                </a>
                <div
                  className={`services-dropdown fixed left-0 top-[100%] w-screen shadow-lg ${
                    theme === "dark" ? "bg-black" : "bg-white"
                  } transition-transform duration-500 ${
                    theme === "dark" ? "border-t-black_80" : "border-t-black_10"
                  } border-t-[1px] ${
                    isServicesOpen
                      ? " opacity-100"
                      : " opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="max-w-[1440px] mx-auto md:px-[46px] py-[30px] justify-around flex">
                    <div className="flex w-full dop-services-dropdown">
                      <ul className="min-w-[400px] space-y-2.5 w-1/3">
                        <li>
                          <p
                            className="hover:text-blue-600 flex items-center duration-300 cursor-pointer"
                            onMouseOver={() => setDopServiceIndex(1)}
                            onMouseOut={(e) => {
                              const relatedTarget =
                                e.relatedTarget as HTMLElement;
                              if (
                                !relatedTarget ||
                                !relatedTarget.closest(".dop-services-dropdown")
                              ) {
                                setDopServiceIndex(0);
                              }
                            }}
                          >
                            <span className="text-[24px] font-medium me-1">
                              Веб-разработка
                            </span>
                            <GoArrowRight className="size-[24px]" />
                          </p>
                        </li>
                        <li>
                          <p
                            className="hover:text-blue-600 flex items-center duration-300 cursor-pointer"
                            onMouseOver={() => setDopServiceIndex(2)}
                            onMouseOut={(e) => {
                              const relatedTarget =
                                e.relatedTarget as HTMLElement;
                              if (
                                !relatedTarget ||
                                !relatedTarget.closest(".dop-services-dropdown")
                              ) {
                                setDopServiceIndex(0);
                              }
                            }}
                          >
                            <span className="text-[24px] font-medium me-1">
                              CMS
                            </span>
                            <GoArrowRight className="size-[24px]" />
                          </p>
                        </li>
                        <li>
                          <p
                            className="hover:text-blue-600 flex items-center duration-300 cursor-pointer"
                            onMouseOver={() => setDopServiceIndex(3)}
                            onMouseOut={(e) => {
                              const relatedTarget =
                                e.relatedTarget as HTMLElement;
                              if (
                                !relatedTarget ||
                                !relatedTarget.closest(".dop-services-dropdown")
                              ) {
                                setDopServiceIndex(0);
                              }
                            }}
                          >
                            <span className="text-[24px] font-medium me-1">
                              Мобильные приложения
                            </span>
                            <GoArrowRight className="size-[24px]" />
                          </p>
                        </li>
                        <li>
                          <p
                            className="hover:text-blue-600 flex items-center duration-300 cursor-pointer"
                            onMouseOver={() => setDopServiceIndex(4)}
                            onMouseOut={(e) => {
                              const relatedTarget =
                                e.relatedTarget as HTMLElement;
                              if (
                                !relatedTarget ||
                                !relatedTarget.closest(".dop-services-dropdown")
                              ) {
                                setDopServiceIndex(0);
                              }
                            }}
                          >
                            <span className="text-[24px] font-medium me-1">
                              SEO
                            </span>
                            <GoArrowRight className="size-[24px]" />
                          </p>
                        </li>
                        <li>
                          <p
                            className="hover:text-blue-600 flex items-center duration-300 cursor-pointer"
                            onMouseOver={() => setDopServiceIndex(5)}
                            onMouseOut={(e) => {
                              const relatedTarget =
                                e.relatedTarget as HTMLElement;
                              if (
                                !relatedTarget ||
                                !relatedTarget.closest(".dop-services-dropdown")
                              ) {
                                setDopServiceIndex(0);
                              }
                            }}
                          >
                            <span className="text-[24px] font-medium me-1">
                              Дизайн
                            </span>
                            <GoArrowRight className="size-[24px]" />
                          </p>
                        </li>
                        {/* <li>
                          <p className="hover:text-blue-600 flex items-center duration-300">
                            <span className="text-[24px] font-medium me-1">
                              Motion-дизайн
                            </span>
                            <GoArrowRight className="size-[24px]" />
                          </p>
                        </li> */}
                      </ul>
                      <ul className="w-full max-w-[300px]">
                        {DOP_SERVICES[dopServiceIndex].services.map(
                          (item, index) => (
                            <li className="mb-[8px]">
                              <a
                                href={item.href}
                                className="hover:text-blue-600 text-[18px] font-medium"
                              >
                                {item.name}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="min-w-[252px] h-[288px] text-[18px] font-medium flex items-end dop-services-dropdown">
                      <div className="">
                        <p className="mb-2.5">
                          Телефон:{" "}
                          <a href="tel:+375296342190">+375 29 634 21 90</a>
                        </p>
                        <p className="mb-2.5">
                          E-mail:{" "}
                          <a href="malito:info@digitaldevils.by">
                            info@digitaldevils.by
                          </a>
                        </p>
                        <div className="flex">
                          <Image
                            src="/resources/inst.svg"
                            width={28}
                            height={28}
                            className="size-[28px] me-2.5"
                            alt="Instagram Logo"
                          />
                          <Image
                            src="/resources/tg.svg"
                            width={28}
                            height={28}
                            className="size-[28px]"
                            alt="Telegram Logo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/portfolio"
                className={`${
                  theme === "dark" ? "text-white" : "text-dark"
                } font-medium transition-all duration-300 hover:text-blue-600`}
              >
                Портфолио
              </a>
              <a
                href="/about"
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } font-medium transition-all duration-300 hover:text-blue-600 whitespace-nowrap`}
              >
                О нас
              </a>
              <a
                href="/blog"
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } font-medium transition-all duration-300 hover:text-blue-600`}
              >
                Блог
              </a>
              <a
                href="/contacts"
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } font-medium transition-all duration-300 hover:text-blue-600`}
              >
                Контакты
              </a>
            </nav>
            <a
              href="/application"
              rel="nofollow"
              className="hidden xlg:block bg-blue_main min-h-[50px] py-3.5 text-center rounded-full max-w-[227px] text-white px-[39px] w-full text-[18px]  hover:bg-blue-700"
            >
              Обсудить проект
            </a>
          </div>
          <button
            className={`xlg:hidden flex-col items-end flex ${
              theme === "dark" ? "text-white" : "text-gray-700"
            } focus:outline-none`}
            onClick={toggleMenu}
          >
            <span
              className={`block w-5 h-[1.6px] ${
                theme === "dark" ? "bg-white" : "bg-gray-800"
              } transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <div className="flex mt-[5px] h-[1.6px] mb-[5px]">
              <span
                className={`w-[6px] me-[2px] h-full ${
                  theme === "dark" ? "bg-white" : "bg-gray-800"
                } transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                } `}
              ></span>
              <span
                className={`w-5 h-full ${
                  theme === "dark" ? "bg-white" : "bg-gray-800"
                } transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
            </div>
            <span
              className={`block h-[2px] ${
                theme === "dark" ? "bg-white" : "bg-gray-800"
              } transition-transform duration-300 ${
                isMenuOpen ? "w-5 -rotate-45 -translate-y-1.5" : "w-7 "
              }`}
            ></span>
          </button>
          <div
            className={`${
              theme === "dark" ? "bg-black" : "bg-white"
            } h-screen fixed top-0 left-0 w-full transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } z-60`}
          >
            <div className="flex items-center justify-between py-[9px] ps-[10px] pe-[20px] md:py-[15px] md:px-[46px]">
              <HeaderLogo theme={theme ? theme : ""} />
              <button
                onClick={() => {
                  toggleMenu();
                  isMobileServicesOpen
                    ? setIsMobileServicesOpen(!isMobileServicesOpen)
                    : setIsMobileServicesOpen(isMobileServicesOpen);
                  setDopMobileServicesOpenIndex(0);
                }}
                className="text-gray-700 focus:outline-none"
              >
                <span
                  className={`block w-5 h-0.5 ${
                    theme === "dark" ? "bg-white" : "bg-gray-800"
                  } transition-transform duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-5 h-0.5 ${
                    theme === "dark" ? "bg-white" : "bg-gray-800"
                  } transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  } my-1`}
                ></span>
                <span
                  className={`block w-5 h-0.5 ${
                    theme === "dark" ? "bg-white" : "bg-gray-800"
                  } transition-transform duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </button>
            </div>
            <nav className="flex mx-8 flex-col items-start space-y-8 mt-8 mb-[30px]">
              <div
                className={`flex items-center duration-500 translate-x-[-29px]
                                ${
                                  dopMobileServicesOpenIndex !== 0
                                    ? "translate-y-[-10%] opacity-0"
                                    : "translate-y-0 opacity-100"
                                }
                            `}
              >
                <div
                  className={`flex ${
                    !isMobileServicesOpen ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <GoArrowLeft
                    onClick={() => setIsMobileServicesOpen(false)}
                    className={`size-[22px] me-[5px] duration-500 ${
                      !isMobileServicesOpen
                        ? "translate-x-[-29px] opacity-0"
                        : "translate-x-[0px] opacity-100 text-blue-600"
                    }`}
                  />
                  <LuMenu
                    onClick={() => setIsMobileServicesOpen(true)}
                    className={`size-[22px] me-[5px] hover:text-blue-600 duration-500 ${
                      isMobileServicesOpen
                        ? "translate-x-[-29px] opacity-0"
                        : "translate-x-[0px] opacity-100"
                    }`}
                  />
                </div>
                <button
                  onClick={handleDropdowmBlock}
                  className={`font-medium transition-all duration-300 ${
                    isMobileServicesOpen
                      ? "text-blue-600"
                      : theme === "dark"
                      ? "text-white"
                      : "text-black"
                  } text-[22px]`}
                >
                  Услуги
                </button>
              </div>
              {isMobileServicesOpen ? (
                <ul className="text-[22px] font-medium ">
                  <li
                    className={`mb-[20px] flex items-center cursor-pointer duration-300
                        ${
                          dopMobileServicesOpenIndex === 0
                            ? "translate-x-[-29px]"
                            : "translate-x-[0px]"
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0
                            ? "translate-y-[-65px] text-blue_main"
                            : `translate-y-0 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0 &&
                          dopMobileServicesOpenIndex !== 1
                            ? "hidden"
                            : "block"
                        }`}
                    onClick={() =>
                      dopMobileServicesOpenIndex === 1
                        ? setDopMobileServicesOpenIndex(0)
                        : setDopMobileServicesOpenIndex(1)
                    }
                  >
                    <GoArrowLeft
                      onClick={() => setDopMobileServicesOpenIndex(0)}
                      className={`size-[22px] me-[5px] duration-500 ${
                        !dopMobileServicesOpenIndex
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                    Веб-разработка
                    <GoArrowRight
                      className={`size-[22px] duration-500 ${
                        dopMobileServicesOpenIndex != 0
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                  </li>
                  <li
                    className={`mb-[20px] flex items-center cursor-pointer duration-300
                        ${
                          dopMobileServicesOpenIndex === 0
                            ? "translate-x-[-29px]"
                            : "translate-x-[0px]"
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0
                            ? "translate-y-[-65px] text-blue_main"
                            : `translate-y-0 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0 &&
                          dopMobileServicesOpenIndex !== 2
                            ? "hidden"
                            : "block"
                        }`}
                    onClick={() =>
                      dopMobileServicesOpenIndex === 2
                        ? setDopMobileServicesOpenIndex(0)
                        : setDopMobileServicesOpenIndex(2)
                    }
                  >
                    <GoArrowLeft
                      onClick={() => setDopMobileServicesOpenIndex(0)}
                      className={`size-[22px] me-[5px] duration-500 ${
                        !dopMobileServicesOpenIndex
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                    CMS
                    <GoArrowRight
                      className={`size-[22px] font-medium duration-500 ${
                        dopMobileServicesOpenIndex != 0
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                  </li>
                  <li
                    className={`mb-[20px] flex items-center cursor-pointer duration-300
                        ${
                          dopMobileServicesOpenIndex === 0
                            ? "translate-x-[-29px]"
                            : "translate-x-[0px]"
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0
                            ? "translate-y-[-65px] text-blue_main"
                            : `translate-y-0 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0 &&
                          dopMobileServicesOpenIndex !== 3
                            ? "hidden"
                            : "block"
                        }`}
                    onClick={() =>
                      dopMobileServicesOpenIndex === 3
                        ? setDopMobileServicesOpenIndex(0)
                        : setDopMobileServicesOpenIndex(3)
                    }
                  >
                    <GoArrowLeft
                      onClick={() => setDopMobileServicesOpenIndex(0)}
                      className={`size-[22px] me-[5px] duration-500 ${
                        !dopMobileServicesOpenIndex
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                    Мобильные приложения
                    <GoArrowRight
                      className={`size-[22px] duration-500 ${
                        dopMobileServicesOpenIndex != 0
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                  </li>
                  <li
                    className={`mb-[20px] flex items-center cursor-pointer duration-300
                        ${
                          dopMobileServicesOpenIndex === 0
                            ? "translate-x-[-29px]"
                            : "translate-x-[0px]"
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0
                            ? "translate-y-[-65px] text-blue_main"
                            : `translate-y-0 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0 &&
                          dopMobileServicesOpenIndex !== 4
                            ? "hidden"
                            : "block"
                        }`}
                    onClick={() =>
                      dopMobileServicesOpenIndex === 4
                        ? setDopMobileServicesOpenIndex(0)
                        : setDopMobileServicesOpenIndex(4)
                    }
                  >
                    <GoArrowLeft
                      onClick={() => setDopMobileServicesOpenIndex(0)}
                      className={`size-[22px] me-[5px] duration-500 ${
                        !dopMobileServicesOpenIndex
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                    SEO
                    <GoArrowRight
                      className={`size-[22px] duration-500 ${
                        dopMobileServicesOpenIndex != 0
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                  </li>
                  <li
                    className={`mb-[20px] flex items-center cursor-pointer duration-300
                        ${
                          dopMobileServicesOpenIndex === 0
                            ? "translate-x-[-29px]"
                            : "translate-x-[0px]"
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0
                            ? "translate-y-[-65px] text-blue_main"
                            : `translate-y-0 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0 &&
                          dopMobileServicesOpenIndex !== 5
                            ? "hidden"
                            : "block"
                        }`}
                    onClick={() =>
                      dopMobileServicesOpenIndex === 5
                        ? setDopMobileServicesOpenIndex(0)
                        : setDopMobileServicesOpenIndex(5)
                    }
                  >
                    <GoArrowLeft
                      onClick={() => setDopMobileServicesOpenIndex(0)}
                      className={`size-[22px] me-[5px] duration-500 ${
                        !dopMobileServicesOpenIndex
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                    Дизайн
                    <GoArrowRight
                      className={`size-[22px] duration-500 ${
                        dopMobileServicesOpenIndex != 0
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                  </li>
                  {/* <li
                    className={`mb-[20px] flex items-center cursor-pointer duration-300
                        ${
                          dopMobileServicesOpenIndex === 0
                            ? "translate-x-[-29px]"
                            : "translate-x-[0px]"
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0
                            ? "translate-y-[-65px] text-blue_main"
                            : `translate-y-0 ${
                                theme === "dark" ? "text-white" : "text-black"
                              }`
                        }
                        ${
                          dopMobileServicesOpenIndex !== 0 &&
                          dopMobileServicesOpenIndex !== 5
                            ? "hidden"
                            : "block"
                        }`}
                    // onClick={() =>
                    //     dopMobileServicesOpenIndex === 6 ?
                    //         setDopMobileServicesOpenIndex(0) :
                    //         setDopMobileServicesOpenIndex(6)}
                  >
                    <GoArrowLeft
                      onClick={() => setDopMobileServicesOpenIndex(0)}
                      className={`size-[22px] me-[5px] duration-500 ${
                        !dopMobileServicesOpenIndex
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                    Motion-дизайн
                    <GoArrowRight
                      className={`size-[22px] duration-500 ${
                        dopMobileServicesOpenIndex != 0
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    />
                  </li> */}

                  {dopMobileServicesOpenIndex === 0 ? (
                    <></>
                  ) : (
                    <>
                      {DOP_SERVICES[dopMobileServicesOpenIndex].services.map(
                        (item, index) => (
                          <li
                            className={`mb-[8px] duration-500 ${
                              dopMobileServicesOpenIndex !== 0
                                ? "translate-y-[-65px]"
                                : "translate-y-0"
                            }`}
                          >
                            <a
                              href={item.href}
                              className="hover:text-blue-600 text-[18[px] font-medium"
                            >
                              {item.name}
                            </a>
                          </li>
                        )
                      )}
                    </>
                  )}
                </ul>
              ) : (
                <div
                  className={`duration-500 flex flex-col items-start space-y-8 mt-8 mb-[30px] ${
                    isMobileServicesOpen ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <a
                    href="/portfolio"
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } font-medium transition-all duration-300 hover:text-blue-600 text-[22px]`}
                  >
                    Портфолио
                  </a>
                  <a
                    href="/about"
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } font-medium transition-all duration-300 hover:text-blue-600 text-[22px]`}
                  >
                    О нас
                  </a>
                  <a
                    href="/blog"
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } font-medium transition-all duration-300 hover:text-blue-600 text-[22px]`}
                  >
                    Блог
                  </a>
                  <a
                    href="/contacts"
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    } font-medium transition-all duration-300 hover:text-blue-600 text-[22px]`}
                  >
                    Контакты
                  </a>
                </div>
              )}
            </nav>
            <a
              href="/application"
              rel="nofollow"
              className={`bg-blue_main min-h-[50px] py-3.5 text-center rounded-full max-w-[279px] text-white px-[65px] w-full text-[18px]  hover:bg-blue-700 mx-8 duration-500 
                                ${
                                  isMobileServicesOpen
                                    ? "hidden opacity-0"
                                    : "block opacity-100"
                                }
                            `}
            >
              Обсудить проект
            </a>
            <div className="min-w-[252px] text-[18px] font-medium flex items-end dop-services-dropdown custom_container mt-[20px]">
              <div className="">
                <p className="mb-2.5">
                  Телефон: <a href="tel:+375296342190">+375 29 634 21 90</a>
                </p>
                <p className="mb-2.5">
                  E-mail:{" "}
                  <a href="malito:info@digitaldevils.by">
                    info@digitaldevils.by
                  </a>
                </p>
                <div className="flex">
                  <Image
                    src="/resources/inst.svg"
                    width={28}
                    height={28}
                    className="size-[28px] me-2.5"
                    alt="Instagram Logo"
                  />
                  <Image
                    src="/resources/tg.svg"
                    width={28}
                    height={28}
                    className="size-[28px]"
                    alt="Telegram Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isServicesOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div className="block h-[59px] md:h-[139px]  w-full"></div>
    </>
  );
};

export default Header;

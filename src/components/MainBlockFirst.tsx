import React, { useEffect, useRef, useState } from "react";
import SmallMainBlockCard from "@/components/SmallMainBlockCard";
import { GoArrowUpRight } from "react-icons/go";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import SmoothScrollLink from "./SmoothScollLink";

const MainBlockFirst: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <StandardMarginsLayout
        styles="mt-[20px] sm:mt-[30px] sm:mb-[60px] mb-[50px]"
        children={
          <>
            <h1 className="font-bold text-[40px] md:text-[50px] lg:text-[75px] xl:text-[90px]">
              Ваша команда по разработке{" "}
              <span className="text-blue_main ">современных сайтов</span> любой
              сложности
            </h1>
            <div className="flex md:flex-row flex-col md:items-center md:gap-9 mb-[10px]">
              <p className="max-w-[666px] md:text-[24px] text-[18px] font-bold md:mt-0 mt-[20px]">
                Узнайте стоимость своего будущего сайта <br className="sm:block hidden"/>
                <span className="border-b-[1px] border-black">
                  за 60 секунд и забронируйте скидку 10%
                </span>{" "}
                на разработку
              </p>
              <SmoothScrollLink
                className="w-fit order-3 flex transition-all"
                href="#quiz"
              >
                {/* <div className="lg:w-[319px] w-[301px] lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center bg-blue_main rounded-full text-white">
                Получить скидку
              </div> */}
                <div className="relative w-[140px] h-[140px] flex items-center justify-center">
                  {/* Вращающийся текст */}
                  <svg
                    className="w-full h-full animate-spin-slow"
                    viewBox="0 0 200 200"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M100,100 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0"
                      />
                    </defs>
                    <text
                      fill="#000"
                      fontSize="18"
                      fontFamily="sans-serif"
                      letterSpacing="1px"
                    >
                      <textPath xlinkHref="#circlePath" startOffset="0%">
                        хочу скидку хочу скидку хочу скидку
                      </textPath>
                    </text>
                  </svg>

                  {/* Кнопка в центре */}
                  <div className="absolute z-10 w-[50px] h-[50px] flex items-center justify-center bg-blue-600 text-white rounded-full text-xl">
                    <GoArrowUpRight />
                  </div>
                </div>
              </SmoothScrollLink>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] justify-between lg:flex">
              <SmallMainBlockCard
                title="10 из 10"
                description="наших проектов выполняются в оговорённый срок"
                needAnimation={false}
              />
              <SmallMainBlockCard
                title="5+"
                description="лет разрабатываем успешные сайты для вашего бизнеса"
                needAnimation={false}
              />
              <SmallMainBlockCard
                title="100%"
                description="уникальность - с нами вы не повторяете за конкурентами"
                needAnimation={false}
              />
              <SmallMainBlockCard
                title="ТОП 1"
                description="сайты нашей разработки любят поисковые системы"
                needAnimation={false}
                margin=""
              />
            </div>
          </>
        }
      />
      {/* <div className="w-full mx-auto max-w-[1440px] sm:px-[45px] px-[0px]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-[0px] sm:rounded-[40px] mt-[60px] w-full shadow-lg"
          preload="none"
        >
          <source src="/resources/main.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div> */}
    </>
  );
};

export default MainBlockFirst;

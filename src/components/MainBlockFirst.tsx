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
            <p className="text-[24px] font-bold mt-[20px]">
              Скидка 10% на разработку при заказе в течение 14 дней
            </p>
            <SmoothScrollLink
              className="order-3 flex transition-all mt-[20px] mb-[40px]"
              href="#quiz"
            >
              <div className="lg:w-[319px] w-[301px] lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center bg-blue_main rounded-full text-white">
                Получить скидку
              </div>
              <div className="ms-[-10px] lg:text-[28px] text-[24px] lg:size-[60px] size-[50px] flex justify-center items-center  bg-blue_main rounded-full text-white">
                <GoArrowUpRight />
              </div>
            </SmoothScrollLink>
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

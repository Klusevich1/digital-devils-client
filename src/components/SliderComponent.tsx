import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Импорт модуля Navigation
import "swiper/css";
import "swiper/css/navigation";
import Image, { StaticImageData } from "next/image";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Типы для входных данных
interface SliderItem {
  title: string;
  description: string;
  technologies: string[];
  works: string[];
  imageSrc: string;
}

// Компонент слайда
const Slide: React.FC<SliderItem> = ({
  title,
  description,
  technologies,
  works,
  imageSrc,
}) => {
  const technologiesHTML = technologies
    .map((tech) => `<span class="technology">${tech}</span>`)
    .join(" · ");
  return (
    <div className="flex flex-col md:flex-row w-full gap-8">
      <div className="w-full md:w-1/2">
        <Image
          src={`/resources/${imageSrc}`}
          alt={title}
          width={830}
          height={515}
          className="w-full h-auto object-cover rounded-lg"
        />
        {/* <div
          className={`${
            imageLoading ? "opacity-0" : "opacity-100"
          } transition-all`}
        >
          <Image src={imageSrc} width={} />
          <IKImage
            urlEndpoint={urlEndpoint}
            path={imageSrc}
            width={830}
            height={515}
            alt={title}
            className="w-full h-auto object-cover rounded-lg"
            transformation={[{ quality: "95" }]}
          />
        </div> */}
      </div>
      <div className="w-full md:w-1/2 flex flex-col ">
        <h3 className="text-[22px] lg:text-[24px] xl:text-[28px] font-bold mb-[20px]">
          {title}
        </h3>
        <p
          className="text-[18px] lg:text-[20px] mb-[5px] xl:text-[24px]"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <p className="text-[18px] mb-[5px] lg:text-[20px] xl:text-[24px]">
          <span className="font-bold">Технологии:</span>{" "}
          <span dangerouslySetInnerHTML={{__html: technologiesHTML}}></span>
        </p>
        <p className="text-[18px] lg:text-[20px] xl:text-[24px]">
          <span className="font-bold">Виды работ:</span> {works.join(" · ")}
        </p>
        <a
          href="/application"
          rel="nofollow"
          className="px-[30px] py-[10px] lg:max-w-72 mt-[20px] flex justify-center items-center  bg-blue_main rounded-full text-white border border-white hover:bg-white hover:text-blue_main hover:border-blue_main transition-all duration-100"
        >
          <span className="me-[10px] text-[22px] md:text-[24]">
            Хочу так же
          </span>
          <GoArrowRight className="size-[28px] md:size-[32px]" />
        </a>
      </div>
    </div>
  );
};

// Основной компонент слайдера
const SliderComponent: React.FC<{ data: SliderItem[] }> = ({ data }) => {
  const swiperProjRef = useRef<any>(null);
  return (
    <div className="relative w-full">
      {/* Навигационные стрелки */}
      <div className="flex justify-end my-4">
        <button
          className="swiper-button-prev me-3"
          style={{ position: "inherit" }}
        >
          <GoArrowLeft className="text-[32px] text-black" />
        </button>
        <button className="swiper-button-next" style={{ position: "inherit" }}>
          <GoArrowRight className="text-[32px] text-black" />
        </button>
      </div>

      {/* Слайдер */}
      <Swiper
        modules={[Navigation]} // Подключение модуля Navigation
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        onSwiper={(swiper) => (swiperProjRef.current = swiper)}
        navigation={{
          prevEl: ".swiper-button-prev", // Связывание кнопки "назад"
          nextEl: ".swiper-button-next", // Связывание кнопки "вперед"
        }}
        className="swiper-container"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide {...slide} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;

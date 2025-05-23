import {ChevronLeft, ChevronRight} from "lucide-react";
import Image, {StaticImageData} from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import Link from "next/link";
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import React from "react";

interface Slide {
    image: StaticImageData | string;
    title: string;
    description: string;
    href: string;
    duration: string;
}

interface SliderProps {
    slides: Slide[];
}

export default function Slider({slides}: SliderProps) {

    return (
        <div className="xl:flex-col xl:min-h-[457px] flex-col-reverse w-full xl:w-[813px] flex items-end xl:items-start justify-between">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1.5}
                breakpoints={{
                    0: {slidesPerView: 1, spaceBetween: 20},
                    850: {slidesPerView: 1.5, spaceBetween: 39},
                }}
                loop={true}
                navigation={{nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
                className="w-full mt-[20px] xl:mt-0"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx} >
                        <Link href={slide.href} rel="nofollow" target="_blank">
                            <div className="p-2">
                                <div className="relative w-full xl:w-[527px] py-[24px] px-[24.5px] custom-shadow-swiper-slide rounded-[40px] overflow-hidden">
                                    <Image src={slide.image} width={477} height={192} alt={slide.title} className="w-full xl:max-w-[477px] object-cover"/>
                                    <div className="">
                                        <h3 className="text-[18px] lg:text-[20px] font-medium mt-[20px]">{slide.title}</h3>
                                        <p className="text-[14px] lg:text-[16px] font-medium mt-[15px]">{slide.description}</p>
                                        <p className="text-[16px] lg:text-[18px] font-medium mt-[8px]">{slide.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="flex space-x-[20px]  tilda-slider xl:mt-0 mt-[30px]">
                <button className="border-[1px] min-h-[50px] lg:min-h-[60px] min-w-[50px] lg:min-w-[60px] border-gray-500 rounded-full p-[9px] swiper-button-prev">
                    <GoArrowLeft className="max-w-[28px] max-h-[28px] lg:max-w-[32px] lg:max-h-[32px] text-black"/>
                </button>
                <button className="border-[1px] min-h-[50px] lg:min-h-[60px] min-w-[50px] lg:min-w-[60px] border-gray-500 rounded-full p-[9px] swiper-button-next">
                    <GoArrowRight className="max-w-[28px] max-h-[28px] lg:max-w-[32px] lg:max-h-[32px] text-black"/>
                </button>
            </div>
        </div>
    );
}


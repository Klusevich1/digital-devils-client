import React, { FC } from "react";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

type OnlineStoreProps = {
  title?: string;
  margin?: string;
};

const HeaderLogo: FC<OnlineStoreProps> = ({ title, margin }) => {
  return (
    <StandardMarginsLayout
      styles={margin ?? "pb-[50px] md:pb-[60px]"}
      children={
        <div className="w-full">
          <h2 className="mb-[30px] text-[32px] md:text-[42px] lg:text-[60px] font-bold">
            {title}
          </h2>
          <div className="flex lg:flex-row flex-col justify-self-center gap-[20px] md:gap-[40px] items-center w-full ">
            <div className="sm:flex hidden gap-[20px] md:gap-[40px] lg:flex-col flex-row justify-around w-full lg:max-w-[418px]">
              <div className="w-full">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full lg:max-w-[413px] lg:h-[450px] h-[320px]">
                  <Image
                    className="w-full h-full object-cover duration-300 hover:scale-105"
                    src="/resources/portfolio1.png"
                    width={413}
                    height={450}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Keel Market LLP
                </p>
              </div>
              <div className="w-full">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full lg:max-w-[413px] lg:h-[300px] h-[320px]">
                  <Image
                    className="w-full h-full object-cover duration-300 hover:scale-105"
                    src="/resources/case_giftstree.png"
                    width={413}
                    height={300}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Giftstree
                </p>
              </div>
            </div>
            <div className="sm:flex hidden lg:flex-col flex-row md:gap-[40px] gap-[20px] w-full">
              <div className="w-full">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full lg:max-w-[418px] h-[300px]">
                  <Image
                    className="w-full h-full object-cover duration-300 hover:scale-105"
                    src="/resources/portfolio4.png"
                    width={418}
                    height={300}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Motion-дизайн
                </p>
              </div>
              <div className="lg:hidden w-full">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full lg:max-w-[418px] h-[300px]">
                  <Image
                    className="w-full h-full object-cover duration-300 hover:scale-105"
                    src="/resources/case_seo.png"
                    width={418}
                    height={300}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  SEO
                </p>
              </div>
              <div className="w-full lg:block hidden">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] max-w-full w-full h-[450px]">
                  <Image
                    className="object-cover duration-300 hover:scale-105"
                    src="/resources/case_toptyre.png"
                    width={415}
                    height={450}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  TopTyre
                </p>
              </div>
            </div>
            <div className="sm:flex hidden lg:flex-col flex-row gap-[20px] md:gap-[40px] w-full">
              <div className="w-full lg:block hidden">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full max-w-[418px] h-[300px]">
                  <Image
                    className="w-full h-full object-cover duration-300 hover:scale-105"
                    src="/resources/case_seo.png"
                    width={418}
                    height={300}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  SEO
                </p>
              </div>
              <div className="w-full lg:hidden">
                <div className="max-w-full w-full overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] h-[450px]">
                  <Image
                    className="h-full object-cover duration-300 hover:scale-105"
                    src="/resources/case_toptyre.png"
                    width={415}
                    height={450}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  TopTyre
                </p>
              </div>
              <div className="w-full">
                <div className="w-full h-[450px] overflow-hidden inline-flex rounded-[40px]">
                  <video
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full duration-300 scale-105 hover:scale-110 sm:rounded-[40px] shadow-lg object-cover"
                    onMouseEnter={(e) => {
                      if (!/Mobi|Android/i.test(navigator.userAgent)) {
                        e.currentTarget.play();
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!/Mobi|Android/i.test(navigator.userAgent)) {
                        e.currentTarget.pause();
                      }
                    }}
                  >
                    <source src="/resources/main2.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Motion-дизайн
                </p>
              </div>
            </div>
            <div className="sm:hidden flex flex-col gap-[40px] w-full">
              <div className="w-full">
                <div className="overflow-hidden inline-flex rounded-[30px] w-full max-w-full max-h-[350px] ">
                  <Image
                    className="w-full h-[350px] object-cover duration-300 hover:scale-105"
                    src="/resources/portfolio1.png"
                    width={340}
                    height={350}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Keel Market LLP
                </p>
              </div>
              <div className="w-full">
                <div className="w-full h-[350px] overflow-hidden inline-flex rounded-[40px]">
                  <video
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full duration-300 scale-105 hover:scale-110 sm:rounded-[40px] shadow-lg object-cover"
                    onMouseEnter={(e) => {
                      if (!/Mobi|Android/i.test(navigator.userAgent)) {
                        e.currentTarget.play();
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!/Mobi|Android/i.test(navigator.userAgent)) {
                        e.currentTarget.pause();
                      }
                    }}
                  >
                    <source src="/resources/main2.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Motion-дизайн
                </p>
              </div>
              <div className="w-full">
                <div className="overflow-hidden inline-flex rounded-[30px] w-full max-w-full h-[350px]">
                  <Image
                    className="w-full h-[350px] object-cover duration-300 hover:scale-105"
                    src="/resources/case_seo.png"
                    width={340}
                    height={350}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  SEO
                </p>
              </div>
              <div className="w-full">
                <div className="max-w-full w-full overflow-hidden inline-flex rounded-[30px] max-h-[350px]">
                  <Image
                    className="w-full h-[350px] object-cover duration-300 hover:scale-105"
                    src="/resources/case_toptyre.png"
                    width={340}
                    height={350}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  TopTyre
                </p>
              </div>
              <div className="w-full">
                <div className="overflow-hidden inline-flex rounded-[30px] w-full max-h-[350px]">
                  <Image
                    className="w-full h-[350px] object-cover duration-300 hover:scale-105"
                    src="/resources/case_giftstreesmall.png"
                    width={340}
                    height={350}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Giftstree
                </p>
              </div>
              <div className="w-full">
                <div className="overflow-hidden inline-flex rounded-[30px] w-full h-[350px]">
                  <Image
                    className="w-full h-[350px] object-cover duration-300 hover:scale-105"
                    src="/resources/portfolio4.png"
                    width={340}
                    height={350}
                    alt={"Portfolio"}
                  />
                </div>
                <p className="mt-[10px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Motion-дизайн
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default HeaderLogo;

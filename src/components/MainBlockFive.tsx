import React, {FC} from "react";
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
          <div className="flex flex-col xl:flex-row justify-self-center md:gap-[40px] items-center  w-full ">
            <div className="flex gap-[10px] md:gap-[40px] xl:gap-0 flex-col md:flex-row xl:flex-col justify-around w-full xl:max-w-[418px]">
              <div className="w-full flex-col flex justify-center mb-[40px]">
                <div className="w-full h-[500px] xl:max-w-[417px] xl:h-[545px] overflow-hidden inline-flex rounded-[40px]">
                  <video
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full duration-300 hover:scale-105 sm:rounded-[40px] shadow-lg object-cover"
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
                <p className="mt-[20px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Motion-дизайн
                </p>
              </div>

              <div className="w-full md:mb-0 mb-[40px]">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full h-[500px] xl:max-w-[417px] xl:max-h-[371px]">
                  <Image
                    className="w-full h-full object-cover duration-300 hover:scale-105"
                    src="/resources/portfolio6.png"
                    width={417}
                    height={371}
                    alt={"Portfolio"}
                  />
                </div>
                <p className=" mt-[20px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  Giftstree
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[40px] md:gap-[55px] w-full">
              <div className="flex gap-[40px]">
                <div className="w-full">
                  <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full xl:max-w-[417px] max-h-[371px]">
                    <Image
                      className="w-full h-full object-cover duration-300 hover:scale-105"
                      src="/resources/portfolio1.png"
                      width={400}
                      height={350}
                      alt={"Portfolio"}
                    />
                  </div>
                  <p className="mt-[20px] font-bold md:text-[28px] text-[20px] leading-[1]">
                    Keel Market LLP
                  </p>
                </div>
                <div className="w-full">
                  <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full xl:max-w-[417px] max-h-[371px]">
                    <Image
                      className="w-full h-full object-cover duration-300 hover:scale-105"
                      src="/resources/portfolio5.png"
                      width={400}
                      height={350}
                      alt={"Portfolio"}
                    />
                  </div>
                  <p className=" mt-[20px] font-bold md:text-[28px] text-[20px] leading-[1]">
                    SEO
                  </p>
                </div>
              </div>
              <div className="xl:max-w-[870px]">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] max-w-full w-full">
                  <Image
                    className="w-full h-full object-cover duration-300 hover:scale-105"
                    src="/resources/slide1.png"
                    width={830}
                    height={516}
                    alt={"Portfolio"}
                  />
                </div>
                <p className=" mt-[20px] font-bold md:text-[28px] text-[20px] leading-[1]">
                  TopTyre
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

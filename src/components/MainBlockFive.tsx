import React from "react";
import Image from "next/image";
import partfolio1 from "../../public/portfolio1.png";
import partfolio5 from "../../public/portfolio5.png";
import partfolio6 from "../../public/portfolio6.png";
import toptyre from "../../public/slide1.png";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

const HeaderLogo: React.FC = () => {
  return (
    <StandardMarginsLayout
      styles="mt-[50px] sm:mt-[60px]"
      children={
        <div className="mb-[50px] sm:mb-[60px] w-full">
          <h1 className="text-[32px] mb-[30px] lg:text-[60px] font-bold">
            Кейсы
          </h1>
          <div className="flex flex-col xl:flex-row justify-self-center md:gap-[40px] items-center  w-full ">
            <div className="flex gap-[10px] md:gap-[40px] xl:gap-0 flex-col md:flex-row xl:flex-col justify-around w-full xl:max-w-[418px]">
              <div className="w-full flex-col flex justify-center mb-[40px]">
                <div className="w-full h-[500px] xl:max-w-[417px] xl:h-[545px] overflow-hidden inline-flex rounded-[40px]">
                  <video
                    loop
                    muted
                    className="w-full h-full duration-300 hover:scale-105 sm:rounded-[40px]  shadow-lg object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  >
                    <source src="/main2.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                <h3 className="mt-[20px] font-bold md:text-[28px] text-[20px]">
                  Motion-дизайн
                </h3>
              </div>

              <div className="w-full md:mb-0 mb-[40px]">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full h-[500px] xl:max-w-[417px] xl:max-h-[371px]">
                  <Image
                    className="w-full h-full object-cover duration-300 hover:scale-105"
                    src={partfolio6}
                    alt={"portfolio1"}
                  />
                </div>
                <h3 className=" mt-[20px] font-bold md:text-[28px] text-[20px]">
                  Giftstree
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-[40px] md:gap-[55px] w-full">
              <div className="flex gap-[40px]">
                <div className="w-full">
                  <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full xl:max-w-[417px] max-h-[371px]">
                    <Image
                      className="w-full h-full object-cover duration-300 hover:scale-105"
                      src={partfolio1}
                      alt={"portfolio1"}
                    />
                  </div>
                  <h1 className="mt-[20px] font-bold md:text-[28px] text-[20px]">
                    Keel Market LLP
                  </h1>
                </div>
                <div className="w-full">
                  <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] w-full xl:max-w-[417px] max-h-[371px]">
                    <Image
                      className="w-full h-full object-cover duration-300 hover:scale-105"
                      src={partfolio5}
                      alt={"portfolio1"}
                    />
                  </div>
                  <h1 className=" mt-[20px] font-bold md:text-[28px] text-[20px]">
                    SEO
                  </h1>
                </div>
              </div>
              <div className="xl:max-w-[870px]">
                <div className="overflow-hidden inline-flex md:rounded-[40px] rounded-[30px] max-w-full w-full">
                  <Image
                    className="w-full h-full object-cover duration-300 hover:scale-105"
                    src={toptyre}
                    alt={"portfolio1"}
                  />
                </div>
                <h1 className=" mt-[20px] font-bold md:text-[28px] text-[20px]">
                  TopTyre
                </h1>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default HeaderLogo;

import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React, { ReactNode, useRef } from "react";
import SmallMainBlockCard from "./SmallMainBlockCard";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface Case {
  miniTitle: string;
  text1: string;
  text2: string;
  text3?: string;
  imageUrl: string;
  numbers: ReactNode;
  analiticsImg?: string;
  analiticsImgSmall?: string;
}

interface OurCaseBlockProps {
  title: string;
  cases: Case[];
  bg?: string;
  margin?: string;
}

const OurCaseBlock: React.FC<OurCaseBlockProps> = ({
  cases,
  title,
  bg = "white",
  margin = "md:pt-[60px] pt-[50px]",
}) => {
  const swiperCaseRef = useRef<any>(null);

  return (
    <>
      <StandardMarginsLayout
        styles={` ${margin} ${
          bg === "white" ? "bg-white text-black" : "bg-black text-white"
        }`}
        children={
          <>
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] lg:leading-[1]">
                {title}
              </h2>
              {cases.length > 1 && (
                <div className="flex justify-end my-4">
                  <button
                    className="swiper-button-prev me-3"
                    style={{ position: "inherit" }}
                  >
                    <GoArrowLeft className="text-[32px] text-black" />
                  </button>
                  <button
                    className="swiper-button-next"
                    style={{ position: "inherit" }}
                  >
                    <GoArrowRight className="text-[32px] text-black" />
                  </button>
                </div>
              )}
            </div>
            {cases.length === 1 && cases[0] ? (
              <>
                <div className="flex flex-row justify-between gap-[40px]">
                  <div className="flex flex-col lg:gap-[10px] gap-[20px]">
                    <p className="md:text-[24px] text-[22px] font-bold">
                      {cases[0].miniTitle}
                    </p>
                    <div className="lg:hidden block xl:min-w-[640px] min-w-[50%]">
                      <Image
                        alt={title}
                        src={cases[0].imageUrl}
                        width={640}
                        height={339}
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <p
                        className="text-[18px] font-medium"
                        dangerouslySetInnerHTML={{ __html: cases[0].text1 }}
                      ></p>
                      <p
                        className="text-[18px] font-medium"
                        dangerouslySetInnerHTML={{ __html: cases[0].text2 }}
                      ></p>
                      {cases[0].text3 && (
                        <p
                          className="text-[18px] font-medium"
                          dangerouslySetInnerHTML={{ __html: cases[0].text3 }}
                        ></p>
                      )}
                    </div>
                  </div>
                  <div className="lg:block hidden xl:min-w-[640px] min-w-[50%]">
                    <Image
                      alt={title}
                      src={cases[0].imageUrl}
                      width={640}
                      height={339}
                      className="w-full"
                    />
                  </div>
                </div>
                {cases[0].numbers}
                {cases[0].analiticsImg && cases[0].analiticsImgSmall && (
                  <>
                    <div className="sm:flex hidden lg:flex-row flex-col justify-between lg:gap-[41px] gap-[30px]">
                      <div>
                        <Image
                          alt="Numbers"
                          src={cases[0].analiticsImg}
                          width={640}
                          height={401}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Image
                          alt="Numbers"
                          src={"/resources/seo-numbers2.png"}
                          width={640}
                          height={401}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="sm:hidden flex flex-col justify-between gap-[30px]">
                      <div>
                        <Image
                          alt="Numbers"
                          src={cases[0].analiticsImgSmall}
                          width={640}
                          height={401}
                        />
                      </div>
                      <div>
                        <Image
                          alt="Numbers"
                          src={"/resources/seo-numbers2mobile.png"}
                          width={640}
                          height={401}
                        />
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="relative w-full">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  grabCursor={true}
                  onSwiper={(swiper) => (swiperCaseRef.current = swiper)}
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                  }}
                  autoHeight={true}
                  className="relative"
                >
                  {cases.map((item, index) => (
                    <SwiperSlide key={index}>
                      <>
                        <div className="flex flex-row justify-between gap-[40px]">
                          <div className="flex flex-col lg:gap-[10px] gap-[20px]">
                            <p className="md:text-[24px] text-[22px] font-bold">
                              {item.miniTitle}
                            </p>
                            <div className="lg:hidden block xl:min-w-[640px] min-w-[50%]">
                              <Image
                                alt={title}
                                src={item.imageUrl}
                                width={640}
                                height={339}
                                className="w-full"
                              />
                            </div>
                            <div className="flex flex-col gap-[10px]">
                              <p
                                className="text-[18px] font-medium"
                                dangerouslySetInnerHTML={{
                                  __html: item.text1,
                                }}
                              ></p>
                              <p
                                className="text-[18px] font-medium"
                                dangerouslySetInnerHTML={{
                                  __html: item.text2,
                                }}
                              ></p>
                              {item.text3 && (
                                <p
                                  className="text-[18px] font-medium"
                                  dangerouslySetInnerHTML={{
                                    __html: item.text3,
                                  }}
                                ></p>
                              )}
                            </div>
                          </div>
                          <div className="lg:block hidden xl:min-w-[640px] min-w-[50%]">
                            <Image
                              alt={title}
                              src={item.imageUrl}
                              width={640}
                              height={339}
                              className="w-full"
                            />
                          </div>
                        </div>
                        {item.numbers}
                        {item.analiticsImg && item.analiticsImgSmall && (
                          <>
                            <div className="sm:flex hidden lg:flex-row flex-col justify-between lg:gap-[41px] gap-[30px]">
                              <div>
                                <Image
                                  alt="Numbers"
                                  src={item.analiticsImg}
                                  width={640}
                                  height={401}
                                  className="w-full"
                                />
                              </div>
                              <div>
                                <Image
                                  alt="Numbers"
                                  src={"/resources/seo-numbers2.png"}
                                  width={640}
                                  height={401}
                                  className="w-full"
                                />
                              </div>
                            </div>
                            <div className="sm:hidden flex flex-col justify-between gap-[30px]">
                              <div>
                                <Image
                                  alt="Numbers"
                                  src={item.analiticsImgSmall}
                                  width={640}
                                  height={401}
                                />
                              </div>
                              <div>
                                <Image
                                  alt="Numbers"
                                  src={"/resources/seo-numbers2mobile.png"}
                                  width={640}
                                  height={401}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </>
        }
      />
    </>
  );
};

export default OurCaseBlock;

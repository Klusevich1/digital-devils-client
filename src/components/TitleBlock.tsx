import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React, { FC } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image, { StaticImageData } from "next/image";
import SmoothScrollLink from "./SmoothScollLink";

type TitleBlockProps = {
  title: string;
  description: string;
  imagePath: string | StaticImageData;
  hasQuiz?: boolean;
  adText?: string;
};

export const TitleBlock: FC<TitleBlockProps> = ({
  title,
  description,
  imagePath,
  hasQuiz = false,
  adText = "",
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles={`${hasQuiz ? "pb-[20px]" : "pb-[50px]"} md:pb-[60px]`}
        children={
          <>
            <div className="lg:flex lg:justify-between">
              <div className="lg:block flex flex-col items-center">
                <h1 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] lg:mb-[30px] mb-[20px] w-full">
                  {title}
                </h1>
                <div className="max-w-[639px] my-[20px] lg:hidden block">
                  <Image
                    src={imagePath}
                    width={639}
                    height={384}
                    className="object-cover h-fit"
                    style={{ height: "initial !important" }}
                    alt={title}
                  />
                </div>
                <p
                  className={`md:text-[18px] text-[16px] lg:max-w-[640px] max-w-max ${
                    hasQuiz ? "" : "md:mb-[30px] mb-[20px]"
                  }`}
                >
                  {description}
                </p>
                {hasQuiz ? (
                  <div className="w-full flex sm:flex-row flex-col sm:items-center xl:gap-[70px] md:justify-start justify-between">
                    <p className="lg:max-w-[422px] sm:max-w-full max-w-[320px] sm:text-[24px] text-[18px] font-bold sm:mt-0 mt-[20px]">
                      {adText}{" "}
                      {title === "Разработка маркетплейса" ? (
                        <></>
                      ) : (
                        <br className="xl:block hidden" />
                      )}{" "}
                      +{" "}
                      <span className="border-b-[1px] border-black">
                        хостинг в подарок на 3 месяца!
                      </span>{" "}
                    </p>
                    <SmoothScrollLink
                      className="w-fit order-3 flex transition-all"
                      href="#quiz"
                    >
                      {/* <div className="lg:w-[319px] w-[301px] lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center bg-blue_main rounded-full text-white">
                Получить скидку
              </div> */}
                      <div className="relative w-[150px] h-[150px] flex items-center justify-center">
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
                            fontSize="14"
                            fontFamily="sans-serif"
                            letterSpacing="1px"
                          >
                            <textPath xlinkHref="#circlePath" startOffset="0%">
                              ХОЧУ СКИДКУ ХОЧУ СКИДКУ ХОЧУ СКИДКУ
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
                ) : (
                  <a
                    className="order-2 lg:order-1 flex transition-all lg:w-fit w-full mt-[20px] lg:mt-0"
                    href="/application"
                    rel="nofollow"
                  >
                    <div
                      className={`lg:w-[319px] w-full lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center rounded-full text-white bg-blue_main`}
                    >
                      Бесплатная консультация
                    </div>
                    <div
                      className={`ms-[-10px] lg:text-[28px] text-[18px] md:text-[24px] lg:size-[60px] size-[50px] lg:min-w-[60px] min-w-[50px] flex justify-center items-center rounded-full text-white bg-blue_main`}
                    >
                      <GoArrowUpRight />
                    </div>
                  </a>
                )}
              </div>
              <div className="max-w-[639px] hidden lg:block">
                <Image
                  src={imagePath}
                  width={639}
                  height={421}
                  className="object-cover h-fit"
                  alt={title}
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

import React, { FC, ReactNode } from "react";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { IKImage } from "imagekitio-next";
import Image, { StaticImageData } from "next/image";

type Paragraph = {
  title: string;
  text: string;
  badges: { name: string }[];
  link?: string;
  buttonText: string;
  imagePath: string;
};

type YourIdeasBlockProps = {
  bigTitle: string;
  smallText: string;
  paragraphs: Paragraph[];
  isDark?: boolean;
  isOnlyBottomPadding?: boolean;
};

export const YourIdeasBlock: FC<YourIdeasBlockProps> = ({
  bigTitle,
  smallText,
  paragraphs,
  isDark = true,
  isOnlyBottomPadding = true,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles={` ${isDark ? "bg-black text-white" : "bg-white text-black"} ${
          isOnlyBottomPadding
            ? "pb-[50px] md:pb-[60px]"
            : "py-[50px] md:py-[60px]"
        } `}
        children={
          <>
            <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
              {bigTitle}
            </h2>
            <div className="flex flex-col gap-[30px]">
              {paragraphs.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex lg:flex-row flex-col justify-between ${
                    isDark ? "pb-[30px] border-b-[1px]" : ""
                  } border-b-white`}
                >
                  <p className="md:text-[28px] text-[24px] font-bold lg:mb-0 mb-[30px] mr-[15px] xlg:max-w-[303px] lg:max-w-[250px]">
                    {item.title}
                  </p>
                  <div className="xl:max-w-[75%] lg:max-w-[85%] flex lg:flex-row flex-col-reverse lg:gap-[40px] gap-[30px]">
                    <div
                      className={`flex flex-col justify-between md:gap-[20px] lg:max-w-[525px] ${
                        !isDark ? "lg:bg-black_5 lg:p-5" : ""
                      }`}
                    >
                      <p
                        className={`font-medium ${
                          isDark
                            ? "md:text-[22px] text-[18px]"
                            : "md:text-[20px] text-[18px]"
                        }`}
                      >
                        {item.text}
                      </p>
                      <div className="flex md:flex-row flex-col justify-between md:items-center">
                        <div className="flex flex-row gap-[10px] mt-[20px] md:mt-0">
                          {item.badges.map((badge, idx) => (
                            <p
                              key={idx}
                              className={`w-fit border p-[10px] text-[16px] font-medium rounded-full ${
                                isDark
                                  ? "text-white border-black_10"
                                  : "text-black border-blue_main"
                              }  transition-all duration-100`}
                            >
                              {badge.name}
                            </p>
                          ))}
                        </div>
                        {item.link && (
                          <a
                            className="lg:block hidden"
                            href={item.link}
                            rel="nofollow"
                          >
                            <div
                              className={`lg:text-[28px] text-[18px] md:text-[24px] lg:size-[60px] size-[50px] lg:min-w-[60px] min-w-[50px] flex justify-center items-center rounded-full text-white bg-blue_main`}
                            >
                              <GoArrowUpRight />
                            </div>
                          </a>
                        )}
                        <a
                          className="lg:hidden order-2 lg:order-1 flex transition-all lg:w-fit w-full md:mt-0 mt-[30px] md:max-w-[340px]"
                          href="/application"
                          rel="nofollow"
                        >
                          <div
                            className={`lg:w-[319px] w-full lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center rounded-full text-white bg-blue_main`}
                          >
                            {item.buttonText}
                          </div>
                          <div
                            className={`ms-[-10px] lg:text-[28px] text-[18px] md:text-[24px] lg:size-[60px] size-[50px] lg:min-w-[60px] min-w-[50px] flex justify-center items-center rounded-full text-white bg-blue_main`}
                          >
                            <GoArrowUpRight />
                          </div>
                        </a>
                      </div>
                    </div>
                    <Image
                      src={item.imagePath}
                      width={414}
                      height={300}
                      alt={item.title}
                      className="xl:w-full lg:w-[350px] w-full lg:max-h-[300px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />
    </>
  );
};

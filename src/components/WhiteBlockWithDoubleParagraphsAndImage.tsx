import React, { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { GoArrowRight } from "react-icons/go";

interface WhiteBlockWithDoubleParagraphsAndImageProps {
  title: string;
  p1: string;
  p2: string;
  text: ReactNode;
  imagePath: string | StaticImageData;
  margin: string;
  smallTitle: string;
  smallText: string;
  imageMargin?: string;
  widthImage: number;
  heightImage: number;
}

const WhiteBlockWithDoubleParagraphsAndImage: FC<
  WhiteBlockWithDoubleParagraphsAndImageProps
> = ({
  title,
  p1,
  p2,
  imagePath,
  margin,
  smallTitle,
  smallText,
  text,
  imageMargin,
  widthImage,
  heightImage,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles={margin}
        children={
          <>
            <div
              className={`flex md:flex-row flex-col justify-between flex-wrap`}
            >
              <div className="w-full  mb-[30px]">
                <h2 className="text-[32px] md:text-[60px] font-bold">
                  {title}
                </h2>
              </div>
              {p1 && p2 && (
                <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-[20px] mb-[30px]">
                  {p1 && (
                    <p className="text-[22px] lg:text-[24px] mb-[10px] font-bold lg:max-w-[586px] lg:w-1/2">
                      {p1}
                    </p>
                  )}
                  {p2 && (
                    <p className="text-[16px] lg:text-[18px] lg:max-w-[640px] lg:w-1/2">
                      {p2}
                    </p>
                  )}
                </div>
              )}
              <div className="w-full flex justify-between">
                <div className="hidden lg:block ">
                  <Image
                    src={imagePath}
                    width={widthImage}
                    height={heightImage}
                    className={`object-cover h-fit ${imageMargin && imageMargin}`}
                    alt={title}
                  />
                </div>
                <div className="lg:block flex flex-col items-center lg:max-w-[638px] text-[18px]  lg:md:w-6/12">
                  {p1 && p2 && (
                    <div className=" lg:hidden block lg:w-1/2">
                      <Image
                        src={imagePath}
                        width={700}
                        height={519}
                        className="object-cover h-fit"
                        alt={title}
                      />
                    </div>
                  )}
                  {text}
                  {smallTitle && (
                    <h3 className="text-[22px] lg:text-[32px] font-bold lg:mb-[20px] mb-[10px] w-full">
                      {smallTitle}
                    </h3>
                  )}
                  {smallText && (
                    <p className="text-[16px] lg:text-[18px]">
                      {smallText}
                    </p>
                  )}
                  {!p1 && !p2 && (
                    <div className=" lg:hidden block lg:w-1/2">
                      <Image
                        src={imagePath}
                        width={700}
                        height={519}
                        className="object-cover h-fit"
                        alt={title}
                      />
                    </div>
                  )}
                  <a
                    href="/application"
                    rel="nofollow"
                    className={`${imagePath === '/resources/inforamtion_site_image.png' ? 'lg:block hidden' : 'block'} text-center px-[30px] py-[10px] lg:max-w-72 lg:w-fit w-full justify-center items-center  bg-blue_main rounded-full text-white mt-[20px]`}
                  >
                    <span className="text-[18px] font-medium">
                      Обсудить проект
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default WhiteBlockWithDoubleParagraphsAndImage;

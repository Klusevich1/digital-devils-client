import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface HalfImageBlockProps {
  title: string;
  smallTitle: string;
  description: ReactNode;
  image: string | StaticImageData;
  smallImage: string | StaticImageData;
  buttonText: string;
  buttonColor: string;
  isRevert?: boolean;
  isOnlyBottomPadding?: boolean;
  widthImage: number;
  heightImage: number;
  isImageCenter?: boolean;
  isDark?: boolean;
}

const HalfImageText: React.FC<HalfImageBlockProps> = ({
  title,
  smallTitle,
  description,
  image,
  buttonText,
  smallImage,
  buttonColor,
  widthImage,
  heightImage,
  isRevert = false,
  isOnlyBottomPadding = true,
  isDark = false,
  isImageCenter = false,
}) => {
  return (
    <StandardMarginsLayout
      styles={`${
        isOnlyBottomPadding
          ? "pb-[50px] md:pb-[60px]"
          : "py-[50px] md:py-[60px]"
      } ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
      children={
        <div className="flex flex-col">
          <div
            className={`flex flex-col  justify-between ${
              isRevert ? " lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div>
              <h1 className="mb-[30px] font-bold text-[32px] lg:max-w-[641px] lg:text-[60px] me-[20px]">
                {title}
              </h1>
              <div
                className={`hidden rounded-[40px] me-[20px]  ${
                  isImageCenter ? " lg:flex justify-center w-full" : " lg:block"
                }`}
              >
                <Image
                  src={image}
                  alt={title}
                  className="w-[99%]"
                  width={widthImage}
                  height={heightImage}
                  style={{
                    minWidth: widthImage / 2 + 100,
                    maxWidth: widthImage,
                    maxHeight: heightImage,
                  }}
                />
              </div>
            </div>
            <div className="lg:max-w-[640px]">
              <p className="font-bold text-[24px] lg:text-[28px] mb-[20px]">
                {smallTitle}
              </p>
              <div className="block lg:hidden mb-[10px] rounded-[40px]">
                <Image
                  src={smallImage}
                  alt={title}
                  className="w-full"
                  width={widthImage}
                  height={heightImage}
                />
              </div>
              {description}
              <a
                className="flex lg:w-fit w-full"
                href="/application"
                rel="nofollow"
              >
                <div
                  className={`font-medium text-[18px]  lg:w-fit w-full py-[12.5px] px-[20px] text-center rounded-full text-white`}
                  style={{ backgroundColor: buttonColor }}
                >
                  {buttonText}
                </div>
              </a>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default HalfImageText;

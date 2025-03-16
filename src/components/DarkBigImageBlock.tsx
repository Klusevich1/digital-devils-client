import React, { FC, ReactNode } from "react";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { GoArrowRight } from "react-icons/go";
import { IKImage } from "imagekitio-next";
import Image, { StaticImageData } from "next/image";

type DarkBigImageBlockProps = {
  bigTitle: string;
  smallTitle?: string;
  smallTitle1?: string;
  smallTitle2?: string;
  text1: string;
  text2: string;
  imagePath: string | StaticImageData;
  widthImage: number;
  heightImage: number
};

export const DarkBigImageBlock: FC<DarkBigImageBlockProps> = ({
  bigTitle,
  smallTitle,
  smallTitle1,
  smallTitle2,
  text1,
  text2,
  imagePath,
  widthImage,
  heightImage
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles=" py-[50px] md:py-[60px] bg-black text-white"
        children={
          <div className="px-[22px] py-[30px] lg:px-0 lg:py-0 bg-[#2B2B2B] lg:bg-black rounded-[40px]">
            <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px]">
              {bigTitle}
            </h2>
            <div className="flex rounded-[40px] lg:px-[30px] xl:px-[80px] lg:py-[30px] md:flex-row flex-col gap-12 justify-around bg-[#2B2B2B]">
              <div className="hidden lg:flex items-center max-w-[640px]">
                <Image
                  src={imagePath}
                  width={widthImage}
                  height={heightImage}
                  className="object-cover"
                  alt={bigTitle}
                />
              </div>
              <div className="lg:max-w-[550px] text-[18px]  lg:w-1/2">
                {smallTitle && (
                  <h2 className="font-bold text-[22px] lg:text-[28px] mb-[20px]">
                    {smallTitle}
                  </h2>
                )}
                {smallTitle1 && (
                  <h3 className="font-bold text-[22px] lg:text-[24px] mb-[5px]">
                    {smallTitle1}
                  </h3>
                )}
                <p className="md:text-[18px] text-[16px] font-medium mb-[20px]">
                  {text1}
                </p>
                {smallTitle2 && (
                  <h3 className="font-bold text-[22px] lg:text-[24px] mb-[5px]">
                    {smallTitle2}
                  </h3>
                )}
                <p className="md:text-[18px] text-[16px] font-medium" dangerouslySetInnerHTML={{ __html: text2 }}>
                </p>
                <div className="lg:hidden flex justify-center">
                  <Image
                    src={imagePath}
                    width={476}
                    height={374}
                    className="object-cover"
                    alt={bigTitle}
                  />
                </div>
                <a
                  href="/application"
                  rel="nofollow"
                  className="px-[30px] py-[10px] lg:max-w-72 mt-[20px] flex justify-center items-center  bg-blue_main rounded-full text-white"
                >
                  <span className="me-[10px] text-[18px] font-medium">
                    Обсудить проект
                  </span>
                </a>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

interface B2bSecondBlockProps {
  title: string;
  miniTitle: string;
  blueText: string;
  text_1: string;
  text_2: string;
  imagePath: string | StaticImageData;
  isRevert: boolean;
}

const B2bSecondBlock: FC<B2bSecondBlockProps> = ({
  title,
  miniTitle,
  blueText,
  text_1,
  text_2,
  imagePath,
  isRevert = false,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles=""
        children={
          <>
            <div
              className={`flex md:flex-row flex-col justify-between ${
                !isRevert ? "md:flex-row-reverse" : "md:flex-row "
              }`}
            >
              <div className="lg:block flex flex-col items-center lg:max-w-[638px] text-[18px]  lg:md:w-6/12">
                <h2 className="lg:hidden font-bold text-[32px] md:text-[55px] mb-[30px] w-full">
                  {title}
                </h2>
                <h3 className="font-bold md:text-[32px] text-[22px] mb-[20px]">
                  {miniTitle}
                </h3>
                <div className=" lg:hidden block my-[30px] lg:w-5/12">
                  <Image
                    src={imagePath}
                    width={544}
                    height={519}
                    className="object-cover h-fit"
                    alt={title}
                  />
                </div>
                <p className="md:text-[24px] text-[22px] font-bold text-blue_main mb-[10px]">
                  {blueText}
                </p>
                <p className="md:text-[18px] text-[16px] mb-[10px] font-medium">
                  {text_1}
                </p>
                <p className="md:text-[18px] text-[16px] mb-[10px] font-medium">
                  {text_2}
                </p>
                <a
                  href="/application"
                  rel="nofollow"
                  className="px-[20px] py-[12px] w-full lg:w-fit lg:max-w-[340px] mt-[20px] flex justify-center items-center  bg-blue_main rounded-full text-white"
                >
                  <span className="text-[18px] font-medium">
                    Связаться с нами
                  </span>
                </a>
              </div>

              <div className="hidden lg:block max-w-[640px] md:w-1/2">
                <h2 className="font-bold text-[32px] md:text-[55px] mb-[30px] w-full">
                  {title}
                </h2>
                <Image
                  src={imagePath}
                  width={530}
                  height={272}
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

export default B2bSecondBlock;

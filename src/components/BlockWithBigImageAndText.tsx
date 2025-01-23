import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

interface BlockWithBigImageAndTextProps {
  title: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text: ReactNode;
  imagePath: string | StaticImageData;
  margin: string;
  isRevert: boolean;
}

const BlockWithBigImageAndText: FC<BlockWithBigImageAndTextProps> = ({
  title,
  text_1,
  text_2,
  text_3,
  text,
  imagePath,
  margin,
  isRevert = false,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles={margin}
        children={
          <>
            <div
              className={`flex md:flex-row flex-col justify-between ${
                !isRevert ? "md:flex-row-reverse" : "md:flex-row "
              }`}
            >
              <div className="lg:block flex flex-col items-center lg:max-w-[638px] text-[18px]  lg:md:w-6/12">
                <h2 className=" lg:hidden  font-bold text-[32px] md:text-[60px] mb-[30px] w-full">
                  {title}
                </h2>
                {text_1 && (
                  <p className="text-[24px] xl:text-[28px] mb-[20px] font-bold w-full">
                    {text_1}
                  </p>
                )}
                {text}
                <div className=" lg:hidden block my-[30px] lg:w-5/12">
                  <Image
                    src={imagePath}
                    width={544}
                    height={519}
                    className="object-cover"
                    alt={title}
                  />
                </div>
                {text_2 && (
                  <p className="text-[22x] xl:text-[24px] my-[20px] font-bold">
                    {text_2}
                  </p>
                )}
                {text_3 && (
                  <p className="text-[16x] xl:text-[18px]">{text_3}</p>
                )}
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

              <div className="hidden lg:block max-w-[640px] md:w-5/12">
                <h2 className="font-bold text-[32px] md:text-[55px] mb-[30px]">
                  {title}
                </h2>
                <div className="flex justify-center">
                  <Image
                    src={imagePath}
                    width={400}
                    height={350}
                    className="object-cover"
                    alt={title}
                  />
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default BlockWithBigImageAndText;

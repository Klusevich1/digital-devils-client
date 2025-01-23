import React, { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

type WhiteImageBlockWithBlueTextProps = {
  title: string;
  h1: string;
  blueText: string;
  h2: string;
  text: ReactNode;
  imagePath: string | StaticImageData;
  isRevert: boolean;
};

const WhiteImageBlockWithBlueText: FC<WhiteImageBlockWithBlueTextProps> = ({
  title,
  h1,
  blueText,
  h2,
  text,
  imagePath,
  isRevert = false,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles="py-[50px] md:py-[60px]"
        children={
          <>
            <div
              className={`flex md:flex-row flex-col gap-12 justify-between ${
                isRevert ? "md:flex-row-reverse" : "md:flex-row "
              }`}
            >
              <div className="hidden lg:block max-w-[640px] md:w-5/12">
                <Image
                  src={imagePath}
                  width={445}
                  height={445}
                  className="object-cover"
                  alt={title}
                />
              </div>
              <div className="lg:block flex flex-col items-center lg:max-w-[760px] lg:w-7/12 text-[18px]">
                <h2 className="text-[30px] md:text-[60px] font-bold mb-[30px] w-full">
                  {title}
                </h2>
                <div className=" lg:hidden block my-[30px] lg:w-5/12">
                  <Image
                    src={imagePath}
                    width={445}
                    height={445}
                    className="object-cover"
                    alt={title}
                  />
                </div>
                {h1 && (
                  <h2 className="w-full text-[22px] font-bold mb-[5px]">
                    {h1}
                  </h2>
                )}
                <p className="text-[22px] text-blue_main font-bold mb-[20px] w-full">
                  {blueText}
                </p>
                {text}
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default WhiteImageBlockWithBlueText;

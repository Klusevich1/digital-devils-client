import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface CaseBlockProps {
  bigTitle: string;
  smallTitle: string;
  text: ReactNode;
  imagePath: string | StaticImageData;
  margin: string;
  buttonText: string;
  isRevert: boolean;
}

const CaseBlock: React.FC<CaseBlockProps> = ({
  bigTitle,
  buttonText,
  imagePath,
  isRevert,
  margin,
  smallTitle,
  text,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles={margin}
        children={
          <>
            <div
              className={`flex md:flex-row flex-col gap-12 justify-between ${
                isRevert ? "md:flex-row-reverse" : "md:flex-row "
              }`}
            >
              <div className="relative h-full max-w-[753px] min-w-[40%] hidden lg:block">
                <Image
                  src={imagePath}
                  width={524}
                  height={543}
                  className="object-cover"
                  alt={bigTitle}
                />
                <a
                  href="/application"
                  rel="nofollow"
                  className="absolute bottom-3 left-3 px-[30px] py-[9px] lg:py-[10px] lg:px-[40px] w-fit mt-[20px] flex justify-center items-center  bg-blue_main rounded-full text-white"
                >
                  <span className=" text-[22px] md:text-[24]">Кейс</span>
                </a>
              </div>
              <div className="flex flex-col lg:block items-center">
                <h2 className="font-bold text-[32px] md:text-[60px] mb-[30px] w-full">
                  {bigTitle}
                </h2>
                <p className="lg:block hidden text-[22px] xl:text-[32px] font-bold mb-[20px]">
                  {smallTitle}
                </p>
                <div className="max-w-[500px] mb-[30px] lg:hidden block">
                  <Image
                    src={imagePath}
                    width={639}
                    height={421}
                    className="object-cover"
                    alt={bigTitle}
                  />
                </div>
                <p className="lg:hidden block text-[22px] xl:text-[32px] font-bold mb-[20px] w-full">
                  {smallTitle}
                </p>
                {text}
                <a
                  href="/application"
                  rel="nofollow"
                  className="px-[20px] py-[12px] mt-[20px] w-full lg:w-fit lg:max-w-[340px] flex justify-center items-center  bg-blue_main rounded-full text-white"
                >
                  <span className="text-[18px] font-medium">{buttonText}</span>
                </a>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default CaseBlock;

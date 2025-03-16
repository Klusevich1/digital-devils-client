import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface B2bAreasBlockProps {
  bigTitle: string;
  paragraphTitle1: string;
  paragraphTitle2: string;
  paragraphTitle3: string;
  paragraphText1: string;
  paragraphText1_2: string;
  paragraphText2: string;
  paragraphArray3: string[];
  paragraphButton1: string;
  paragraphButton2: string;
  paragraphButton3: string;
  paragraphImage1: string | StaticImageData;
  paragraphImage2: string | StaticImageData;
  paragraphImage3: string | StaticImageData;
}

const B2bAreasBlock: React.FC<B2bAreasBlockProps> = ({
  bigTitle,
  paragraphButton1,
  paragraphButton2,
  paragraphButton3,
  paragraphImage1,
  paragraphImage2,
  paragraphImage3,
  paragraphText1,
  paragraphText1_2,
  paragraphText2,
  paragraphArray3,
  paragraphTitle1,
  paragraphTitle2,
  paragraphTitle3,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles="py-[50px] md:py-[60px]"
        children={
          <>
            <div>
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                {bigTitle}
              </h2>
              <div className="flex flex-col gap-[20px] mt-[30px]">
                <div className="flex flex-row lg:max-w-[90%] max-w-max lg:ml-auto  justify-between">
                  <div className="min-w-[300px] hidden lg:block">
                    <Image
                      src={paragraphImage1}
                      width={300}
                      height={349}
                      className="object-cover h-fit"
                      alt={paragraphTitle1}
                    />
                  </div>
                  <div className="lg:max-w-[60%] max-w-max">
                    <p className="md:text-[32px] text-[24px] font-bold mb-[20px]">
                      {paragraphTitle1}
                    </p>
                    <span className="block text-[18px] font-medium mb-[10px]">
                      {paragraphText1}
                    </span>
                    <span className="text-[18px] font-medium">
                      {paragraphText1_2}
                    </span>
                    <div className="md:my-[30px] my-[20px] lg:hidden flex justify-center">
                      <Image
                        src={paragraphImage1}
                        width={300}
                        height={349}
                        className="object-cover h-fit"
                        alt={paragraphTitle1}
                      />
                    </div>
                    <a
                      href="/application"
                      rel="nofollow"
                      className="py-[12px] lg:px-[20px] lg:w-fit w-full mt-[20px] flex justify-center items-center bg-blue_main rounded-full text-white"
                    >
                      <span className=" text-[18px] font-medium">
                        {paragraphButton1}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row lg:max-w-[90%] max-w-max lg:mr-auto  justify-between">
                  <div className="lg:max-w-[60%] max-w-max">
                    <p className="md:text-[32px] text-[24px] font-bold mb-[20px]">
                      {paragraphTitle2}
                    </p>
                    <span className="text-[18px] font-medium">
                      {paragraphText2}
                    </span>
                    <div className="md:my-[30px] my-[20px] lg:hidden flex justify-center">
                      <Image
                        src={paragraphImage2}
                        width={300}
                        height={349}
                        className="object-cover h-fit"
                        alt={paragraphTitle2}
                      />
                    </div>
                    <a
                      href="/application"
                      rel="nofollow"
                      className="py-[12px] lg:px-[20px] lg:w-fit w-full mt-[20px] flex justify-center items-center bg-blue_main rounded-full text-white"
                    >
                      <span className=" text-[18px] font-medium">
                        {paragraphButton2}
                      </span>
                    </a>
                  </div>
                  <div className="min-w-[300px] hidden lg:block">
                    <Image
                      src={paragraphImage2}
                      width={300}
                      height={349}
                      className="object-cover h-fit"
                      alt={paragraphTitle2}
                    />
                  </div>
                </div>
                <div className="flex flex-row lg:max-w-[90%] max-w-max lg:ml-[120px]  justify-between">
                  <div className="min-w-[320px] hidden lg:block">
                    <Image
                      src={paragraphImage3}
                      width={300}
                      height={349}
                      className="object-cover h-fit"
                      alt={paragraphTitle3}
                    />
                  </div>
                  <div className="lg:max-w-[60%] max-w-max w-full">
                    <p className="md:text-[32px] text-[24px] font-bold mb-[20px]">
                      {paragraphTitle3}
                    </p>
                    {paragraphArray3.map((text, idx) => (
                      <div key={idx}>
                        <p><span className="text-custom_yellow text-[16px] font-medium">/</span> {text}</p>
                      </div>
                    ))}
                    <div className="md:my-[30px] my-[20px] lg:hidden flex justify-center">
                      <Image
                        src={paragraphImage3}
                        width={300}
                        height={349}
                        className="object-cover h-fit"
                        alt={paragraphTitle3}
                      />
                    </div>
                    <a
                      href="/application"
                      rel="nofollow"
                      className="py-[12px] lg:px-[20px] lg:w-fit w-full mt-[20px] flex justify-center items-center bg-blue_main rounded-full text-white"
                    >
                      <span className=" text-[18px] font-medium">
                        {paragraphButton3}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default B2bAreasBlock;

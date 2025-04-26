import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React from "react";
import SmallMainBlockCard from "./SmallMainBlockCard";
import Image from "next/image";

interface OurCaseBlockProps {
  title: string;
  miniTitle: string;
  text1: string;
  text2: string;
  text3?: string;
  imageUrl: string;
  bg?: string;
  margin?: string;
}

const OurCaseBlock: React.FC<OurCaseBlockProps> = ({
  imageUrl,
  miniTitle,
  text1,
  text2,
  text3,
  title,
  bg = "white",
  margin = "md:pt-[60px] pt-[50px]",
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles={` ${margin} ${
          bg === "white" ? "bg-white text-black" : "bg-black text-white"
        }`}
        children={
          <>
            <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
              {title}
            </h2>
            <div className="flex flex-row justify-between gap-[40px]">
              <div className="flex flex-col lg:gap-[10px] gap-[20px]">
                <p className="md:text-[24px] text-[22px] font-bold">
                  {miniTitle}
                </p>
                <div className="lg:hidden block xl:min-w-[640px] min-w-[50%]">
                  <Image
                    alt={title}
                    src={imageUrl}
                    width={640}
                    height={339}
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p
                    className="text-[18px] font-medium"
                    dangerouslySetInnerHTML={{ __html: text1 }}
                  ></p>
                  <p
                    className="text-[18px] font-medium"
                    dangerouslySetInnerHTML={{ __html: text2 }}
                  ></p>
                  {text3 && (
                    <p
                      className="text-[18px] font-medium"
                      dangerouslySetInnerHTML={{ __html: text3 }}
                    ></p>
                  )}
                </div>
              </div>
              <div className="lg:block hidden xl:min-w-[640px] min-w-[50%]">
                <Image
                  alt={title}
                  src={imageUrl}
                  width={640}
                  height={339}
                  className="w-full"
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default OurCaseBlock;

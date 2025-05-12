import { IKImage } from "imagekitio-next";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React, { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type DarkBigImageBlockProps = {
  title: string;
  text: ReactNode;
  smallText: string;
  smallTitle: string;
  badges: { name: string, link?: string }[];
  imagePath: string | StaticImageData;
  margin: string;
  isRevert: boolean;
  bigHeader?: string | null | undefined;
};

export const WhiteMediumImageBlock: FC<DarkBigImageBlockProps> = ({
  title,
  text,
  smallText,
  smallTitle,
  badges,
  imagePath,
  margin,
  isRevert = false,
  bigHeader,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles={margin}
        children={
          <>
            {bigHeader && (
              <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px]">
                {bigHeader}
              </h2>
            )}
            <div
              className={`flex md:flex-row flex-col gap-[150px] justify-between ${
                isRevert ? "md:flex-row-reverse" : "md:flex-row "
              }`}
            >
              <div className="lg:block flex flex-col items-center lg:max-w-[751px] lg:w-7/12 text-[18px]">
                <h2 className="w-full font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[20px]">
                  {title}
                </h2>
                <div className=" lg:hidden block my-[30px] lg:w-5/12">
                  <Image
                    src={imagePath}
                    width={544}
                    height={519}
                    className="object-cover h-fit"
                    alt="Medium Image"
                  />
                </div>
                {text}
                <p className="text-[18x] xl:text-[18px]">{smallText}</p>
                {smallTitle && (
                  <h3 className="text-[22px] font-medium mt-[20px] md:mb-[20px] mb-[15px] w-full">
                    {smallTitle}
                  </h3>
                )}
                {badges && (
                    <div className="flex flex-wrap w-full mt-[15px]">
                      {badges.map((badge, idx) => (
                        <a key={idx} href={badge.link}>
                          <p className="mb-[5px] me-[15px] border px-[20px] py-[10px] text-[18px] font-medium rounded-full text-black border-blue_main hover:bg-blue_main hover:text-white transition-all duration-100">
                            {badge.name}
                          </p>
                        </a>
                      ))}
                    </div>
                  )}
              </div>

              <div className="hidden lg:flex justify-center max-w-1/2 md:w-1/2">
                <Image
                  src={imagePath}
                  width={544}
                  height={519}
                  className="object-cover h-fit"
                  alt="Medium Image"
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

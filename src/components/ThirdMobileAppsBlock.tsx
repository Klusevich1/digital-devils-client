import React, { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { GoArrowRight } from "react-icons/go";

interface ThirdMobileAppsBlockProps {
  bigTitle: string;
  title: string;
  text: ReactNode;
  imagePath: string | StaticImageData;
  widthImage: number;
  heightImage: number;
  styles: string;
}

const ThirdMobileAppsBlock: FC<ThirdMobileAppsBlockProps> = ({
  bigTitle,
  title,
  imagePath,
  text,
  widthImage,
  heightImage,
  styles,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles={styles}
        children={
          <>
            <div
              className={`flex md:flex-row flex-col justify-between flex-wrap gap-[30px]`}
            >
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold">
                {bigTitle}
              </h2>
              <div className="w-full flex justify-between gap-[30px]">
                <div className="hidden lg:block ">
                  <Image
                    src={imagePath}
                    width={widthImage}
                    height={heightImage}
                    className={"object-cover h-fit"}
                    alt={title}
                  />
                </div>
                <div className="lg:block flex flex-col lg:max-w-[640px] text-[18px]  lg:md:w-6/12">
                  <h3 className="text-[24px] font-bold">{title}</h3>
                  <div className=" lg:hidden block w-full mt-[20px]">
                    <Image
                      src={imagePath}
                      width={widthImage}
                      height={heightImage}
                      className="object-cover h-fit w-full"
                      alt={title}
                    />
                  </div>
                  <p className="text-[18px] font-medium mb-[20px] mt-[10px]">{text}</p>
                  <a
                    href="/application"
                    rel="nofollow"
                    className={`${
                      imagePath === "/resources/inforamtion_site_image.png"
                        ? "lg:block hidden"
                        : "block"
                    } text-center px-[20px] py-[12px] lg:max-w-72 lg:w-fit w-full justify-center items-center  bg-blue_main rounded-full text-white`}
                  >
                    <span className="text-[16px] font-medium">
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

export default ThirdMobileAppsBlock;

import React from "react";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import Image, { StaticImageData } from "next/image";
import { GoArrowUpRight } from "react-icons/go";

interface BlockApproachProps {
  mainTitle: string;
  leftBlock_p1: string;
  leftBlock_p2: string;
  leftBlock_p3: string;
  rightBlockTitle: string;
  rightBlockPrice: string;
  rightBlockList: string[];
  rightBlockImage: string | StaticImageData;
  buttonColor: string;
  isWide?: boolean;
  arrowColor: "orange" | "blue" | "light_blue" | "green_arrow";
  bg_color: "dark" | "green" | "light_green";
  isOnlyBottomPadding?: boolean;
}

const BlockApproach: React.FC<BlockApproachProps> = ({
  mainTitle,
  leftBlock_p1,
  leftBlock_p2,
  leftBlock_p3,
  rightBlockTitle,
  rightBlockPrice,
  rightBlockList,
  rightBlockImage,
  buttonColor,
  arrowColor,
  bg_color,
  isWide = false,
  isOnlyBottomPadding = true,
}) => {
  let ARROW = '/resources/blue_arrow.svg';
  let BG_COLOR = '/resources/blue_arrow.svg';

  switch (arrowColor) {
    case "orange":
      ARROW = '/resources/orange_arrow.svg';
      break;
    case "blue":
      ARROW = '/resources/blue_arrow.svg';
      break;
    case "light_blue":
      ARROW = '/resources/light_blue_arrow.svg';
      break;
    case "green_arrow":
      ARROW = '/resources/green_arrow.svg';
      break;
  }
  switch (bg_color) {
    case "dark":
      BG_COLOR = "bg_approach_block bg_approach_dark text-white";
      break;
    case "green":
      BG_COLOR = "bg_approach_block bg_approach_green text-white";
      break;
    case "light_green":
      BG_COLOR = "bg_approach_block bg_approach_light_green text-black";
      break;
  }

  return (
    <StandardMarginsLayout
      styles={
        isOnlyBottomPadding
          ? "pb-[50px] md:pb-[60px]"
          : "py-[50px] md:py-[60px]"
      }
      children={
        <div className="flex flex-col w-full">
          <h1 className="mb-[30px] font-bold text-[32px] lg:text-[60px]">
            {mainTitle}
          </h1>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:max-w-[640px]">
              <p className="text-[22px] font-bold mb-[10px]" dangerouslySetInnerHTML={{__html: leftBlock_p1}}></p>
              <p className="text-[16px] lg:text-[18px] font-medium mb-[10px]" dangerouslySetInnerHTML={{__html: leftBlock_p2}}>
              </p>
              <p className="text-[16px] lg:text-[18px] font-medium mb-[10px]" dangerouslySetInnerHTML={{__html: leftBlock_p3}}>
              </p>
              <div className="hidden lg:flex justify-end">
                <Image src={ARROW} width={112} height={9} alt={arrowColor} />
              </div>
            </div>
            <div className="lg:block flex justify-center sm:ms-[40px] pt-[35px] sm:pe-[20px] pe-0 ps-0 lg:ps-[30px]">
              <div className="max-w-[313px] sm:max-w-[400px] h-[375px] sm:h-[405px] lg:h-[427px] shadow-lg rounded-[40px] px-[20px] py-[15px]">
                <p className="text-[16px] lg:text-[18px] font-medium">
                  {rightBlockTitle}
                </p>
                <div className={BG_COLOR}>
                  <div className="md:flex hidden w-full justify-end">
                    <Image
                      src={rightBlockImage}
                      width={isWide ? 88 : 36}
                      height={36}
                      alt={rightBlockTitle}
                      className="relative right-[22px] top-[22px]"
                    />
                  </div>
                  <div className="md:hidden flex w-full justify-end">
                    <Image
                      src={rightBlockImage}
                      width={isWide ? 60 : 28}
                      height={28}
                      alt={rightBlockTitle}
                      className="relative right-[22px] top-[22px]"
                    />
                  </div>
                  <div className="flex max-w-[100px] flex-col text-[18px] lg:text-[22px] font-medium relative left-[70px] bottom-[-60px] sm:bottom-[-80px]">
                    <p
                      className={`text-[18px] lg:text-[22px] font-medium ${
                        isWide ? "mt-[16px]" : "mt-[6px]"
                      }`}
                    >
                      Стоимость
                    </p>
                    <div className="flex items-end">
                      <p className="text-[18px] lg:text-[22px] font-medium">
                        от
                      </p>
                      <p className="ms-2.5 text-[40px] lg:text-[50px] font-bold">
                        {rightBlockPrice}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="translate-y-[-60px]">
                  <p className="text-[18px] lg:text-[20px] font-bold">
                    Что входит:
                  </p>
                  <ul>
                    {rightBlockList.map((item, idx) => (
                      <li key={idx} className="text-[16px] font-medium" dangerouslySetInnerHTML={{__html: item}}>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center mt-[20px]">
                    <a className="flex" href="/application" rel="nofollow">
                      <div
                        className={`font-medium text-[16px] lg:text-[18px] py-[12.5px] px-[73px] text-nowrap md:px-[20px] text-center rounded-full text-white`}
                        style={{ backgroundColor: buttonColor }}
                      >
                        Заказать проект
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default BlockApproach;

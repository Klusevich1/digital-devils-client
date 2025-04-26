import React, { FC, ReactNode } from "react";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { GoArrowRight } from "react-icons/go";
import { IKImage } from "imagekitio-next";
import Image, { StaticImageData } from "next/image";

type Paragraph = {
  title: string;
  text: string;
};

type DifferentTasksBlockProps = {
  bigTitle: string;
  smallText: string;
  paragraphs: Paragraph[];
  isDark?: boolean;
  isOnlyBottomPadding?: boolean;
  maxwSmallText?: string;
};

export const DifferentTasksBlock: FC<DifferentTasksBlockProps> = ({
  bigTitle,
  smallText,
  paragraphs,
  isDark = true,
  isOnlyBottomPadding = false,
  maxwSmallText = 'max-w-[866px]'
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles={`${
          isOnlyBottomPadding
            ? "pb-[50px] md:pb-[60px]"
            : "py-[50px] md:py-[60px]"
        } ${isDark ? "bg-black text-white" : "bg-white text-black"} `}
        children={
          <div
            className={`flex flex-col ${smallText ? "gap-[30px]" : "gap-0"}`}
          >
            <div>
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                {bigTitle}
              </h2>
              {smallText && (
                <p className={`text-[22px] font-medium ${maxwSmallText}`}>
                  {smallText}
                </p>
              )}
            </div>
            <div
              className={`grid ${paragraphs.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} grid-cols-1 md:gap-[40px] gap-[20px] ${
                smallText
                  ? `border-t-[1px] pt-[30px] ${
                      isDark ? "border-t-white" : "border-t-black"
                    } `
                  : ``
              }`}
            >
              {paragraphs.map((item, idx) => (
                <div key={idx}>
                  {item.title && (
                    <p className="text-[16px] font-medium md:mb-[20px] mb-[10px]">
                      {item.title}
                    </p>
                  )}
                  <span className="text-[22px] font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        }
      />
    </>
  );
};

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

interface SeoTitleBlockProps {
  title: string;
  max_weight?: number | string;
}

const SeoTitleBlock: React.FC<SeoTitleBlockProps> = ({ title, max_weight }) => {
  return (
    <StandardMarginsLayout
      styles="mt-[20px] sm:mt-[30px] mb-[50px] md:mb-[60px]"
      children={
        <>
          <h1
            className={`font-bold text-[40px] md:text-[50px] lg:text-[85px] xl:text-[110px]  leading-[55px] md:leading-[60px] lg:leading-[80px] xl:leading-[120px] ${
              max_weight ? `max-w-[${max_weight}px]` : "w-full"
            }`}
          >
            {title}
          </h1>
          <a
            className="order-2 lg:order-1 flex transition-all lg:w-fit w-full mt-[20px] lg:mt-[30px]"
            href="/application"
            rel="nofollow"
          >
            <div
              className={`lg:w-[319px] w-full lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center rounded-full text-white bg-blue_main`}
            >
              Бесплатная консультация
            </div>
            <div
              className={`ms-[-10px] lg:text-[28px] text-[18px] md:text-[24px] lg:size-[60px] size-[50px] lg:min-w-[60px] min-w-[50px] flex justify-center items-center rounded-full text-white bg-blue_main`}
            >
              <GoArrowUpRight />
            </div>
          </a>
        </>
      }
    />
  );
};

export default SeoTitleBlock;

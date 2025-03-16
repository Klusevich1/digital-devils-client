import React, { ReactNode } from "react";
import { GoArrowUpRight } from "react-icons/go";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

interface MobileTitleBlockProps {
  title: ReactNode;
}

const MobileTitleBlock: React.FC<MobileTitleBlockProps> = ({ title }) => {
  return (
    <StandardMarginsLayout
      styles="pb-[50px] md:pb-[60px]"
      children={
        <>
          <div className="flex flex-col">
            <div className="w-full mb-[30px]">{title}</div>
            <div className="flex flex-col lg:flex-row w-full items-center justify-between">
              <a
                className="order-2 lg:order-1 flex transition-all lg:w-fit w-full mt-0"
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
            </div>
          </div>
        </>
      }
    />
  );
};

export default MobileTitleBlock;

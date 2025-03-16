import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React, { FC } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image, { StaticImageData } from "next/image";

type TitleBlockProps = {
  title: string;
  description: string;
  imagePath: string | StaticImageData;
};

export const TitleBlock: FC<TitleBlockProps> = ({
  title,
  description,
  imagePath,
}) => {
  return (
    <>
      <StandardMarginsLayout
        styles="pb-[50px] md:pb-[60px]"
        children={
          <>
            <div className="lg:flex lg:justify-between">
              <div className="lg:block flex flex-col items-center">
                <h1 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] lg:mb-[30px] mb-[20px] w-full">
                  {title}
                </h1>
                <div className="max-w-[639px] my-[20px] lg:hidden block">
                  <Image
                    src={imagePath}
                    width={639}
                    height={384}
                    className="object-cover h-fit"
                    style={{ height: "initial !important" }}
                    alt={title}
                  />
                </div>
                <p className="text-[18px] lg:max-w-[640px] max-w-max md:mb-[30px] mb-[20px]">
                  {description}
                </p>
                <a
                  className="order-2 lg:order-1 flex transition-all lg:w-fit w-full mt-[20px] lg:mt-0"
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
              <div className="max-w-[639px] hidden lg:block">
                <Image
                  src={imagePath}
                  width={639}
                  height={421}
                  className="object-cover h-fit"
                  alt={title}
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

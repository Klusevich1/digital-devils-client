import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

interface MainBlockFourthProps {
  title?: string;
  description?: string;
  buttonText?: string;
  margin?: string;
}

const MainBlockFourth: React.FC<MainBlockFourthProps> = ({
  title = "Хотите заказать разработку сайта под ключ?",
  description = "Вас бесплатно проконсультирует web-разработчик со стажем работы 5 лет",
  buttonText = "Бесплатная консультация",
  margin="my-[50px] sm:my-[60px]"
}) => {
  return (
    <StandardMarginsLayout
      styles={`text-white bg-black sm:py-[60px] py-[50px] ${margin}`}
      children={
        <>
          <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[20px]">
            {title}
          </h2>
          <p className="text-[18px] max-w-[764px] md:text-[24px] mb-[20px]">
            {description}
          </p>
          <a
            className="order-3 flex transition-all md:m-0 mt-[20px] w-fit"
            href="/application"
            rel="nofollow"
          >
            <div className="lg:w-[319px] w-[301px] lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center bg-blue_main rounded-full text-white">
              {buttonText}
            </div>
            <div className="ms-[-10px] lg:text-[28px] text-[24px] lg:size-[60px] size-[50px] flex justify-center items-center  bg-blue_main rounded-full text-white">
              <GoArrowUpRight />
            </div>
          </a>
        </>
      }
    />
  );
};

export default MainBlockFourth;

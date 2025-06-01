import React from "react";
import AccordionItem from "@/components/AccordionItem";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

export interface DataItem {
  title: string;
  description: React.ReactNode;
}

interface MainBlockTenthProps {
  data: DataItem[];
  isOnlyBottomPadding?: boolean;
}

const MainBlockTenth: React.FC<MainBlockTenthProps> = ({
  data,
  isOnlyBottomPadding = true,
}) => {
  return (
    <StandardMarginsLayout
      styles={`bg-white text-black ${
        isOnlyBottomPadding
          ? "pb-[50px] md:pb-[60px]"
          : "py-[50px] md:py-[60px]"
      }`}
      children={
        <div className="flex lg:flex-row flex-col xl:gap-[153px] lg:gap-[60px] gap-[30px]">
          <h2 className="text-[32px] md:text-[42px] lg:text-[50px] xl:text-[60px] font-bold lg:max-w-[300px] w-full">
            Вопрос & ответ
          </h2>
          <div className="flex flex-col gap-7">
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      }
    />
  );
};

export default MainBlockTenth;

import React, { ReactNode, useState } from "react";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { IoIosArrowDown } from "react-icons/io";
import { BsPlusCircle } from "react-icons/bs";

interface DataItem {
  title: string;
  description: string[];
}

interface BlockWithImageAndDropDownMenuProps {
  title: string;
  miniTitle?: string;
  firstBlock: ReactNode;
  data: DataItem[];
  borderColor: string;
  margin?: string;
  isDark?: boolean;
}

const BlockWithImageAndDropDownMenu: React.FC<
  BlockWithImageAndDropDownMenuProps
> = ({
  title,
  miniTitle,
  firstBlock,
  data,
  borderColor,
  margin,
  isDark = false,
}) => {
  return (
    <StandardMarginsLayout
      styles={`${margin && margin} ${
        isDark ? " bg-black !text-white" : "lg:bg-[#F7F7F7]"
      }`}
      children={
        <>
          <h2 className="text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] font-bold">
            {title}
          </h2>
          {miniTitle && (
            <p className="text-[18px] font-medium max-w-[911px] mb-[30px]">
              {miniTitle}
            </p>
          )}
          <div className="flex flex-col lg:flex-row justify-between lg:gap-[40px]">
            <div className="lg:min-w-[529px] min-w-[40%]">{firstBlock}</div>
            <div className="lg:max-w-[753px] lg:mt-0 mt-[30px]">
              {data.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  borderColor={borderColor}
                  padding={index === 0 ? "pb-[20px]" : "py-[20px]"}
                />
              ))}
            </div>
          </div>
        </>
      }
    />
  );
};

const AccordionItem: React.FC<{
  title: string;
  description: string[];
  borderColor: string;
  padding: string;
}> = ({ title, description, borderColor, padding }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${padding} mb-[20px] border-b-2`}
      style={{ borderColor: borderColor }}
    >
      <div
        className="mb-[20px] flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-[22px] md:text-[28px] font-bold">{title}</h2>
        <BsPlusCircle
          className={`size-[25px] min-w-[25px] md:min-w-[45px] md:size-[45px] transform transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
          style={{ color: borderColor }}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-[10px]`}
        style={{
          maxHeight: isOpen ? "600px" : "0",
        }}
      >
        {description.map((text, idx) => (
          <div
            className="text-[16px] md:text-[18px]"
            dangerouslySetInnerHTML={{ __html: text }}
            key={idx}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BlockWithImageAndDropDownMenu;

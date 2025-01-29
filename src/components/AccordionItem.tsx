import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionItemProps {
  title: string;
  description: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="bg-black_5 rounded-[25px] py-[20px] px-[15px] md:px-[20px] mb-[20px]">
      <div
        className="flex justify-between items-center py-2 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-[18px] md:text-[22px] font-bold">{title}</h2>
        <IoIosArrowDown
          className={`md:size-[32px] size-[24px] md:min-w-[32px] min-w-[24px] transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out`}
        style={{
          maxHeight: isOpen ? "600px" : "0",
        }}
      >
        <div className="py-2 text-gray-700">{description}</div>
      </div>
    </div>
  );
};

export default AccordionItem;

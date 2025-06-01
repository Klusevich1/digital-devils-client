import Image from "next/image";
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
    <div className="">
      <div
        className="flex justify-between items-center py-2 cursor-pointer pb-4 border-b-[1px] border-black"
        onClick={toggleAccordion}
      >
        <h3 className="w-full text-[16px] md:text-[22px] font-medium">{title}</h3>
        <Image
          src={"/resources/arrow-right.svg"}
          width={20}
          height={20}
          alt="Arrow"
          className={`size-[20px] min-w-[20px] transform transition-transform ${
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
        <div className="pt-5 text-[16px] font-medium text-black">{description}</div>
      </div>
    </div>
  );
};

export default AccordionItem;

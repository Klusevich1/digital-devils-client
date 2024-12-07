import React, { useState, useEffect } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { GoArrowDown } from "react-icons/go";

interface Item {
  title: string;
  text: string[];
}

interface ListComponentProps {
  data: Item[];
}

const ListComponent: React.FC<ListComponentProps> = ({ data }) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Проверка ширины экрана при монтировании и при изменении размера окна
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Если десктоп, раскрываем все строки по умолчанию
    setActiveIndexes(data.map((_, index) => index));
  }, [isDesktop, data]);

  const toggleText = (index: number) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="w-full">
      {data.map((item, index) => (
        <div key={index} className="border-b py-[20px] flex flex-col">
          {/* Mobile version */}
          <div
            className="md:hidden flex items-center"
            onClick={() => toggleText(index)}
          >
            <button className="min-w-[40px] min-h-[40px] size-[40px] flex items-center justify-center border-blue_20 border-[1px] rounded-full">
              <GoArrowDown
                className={`text-[24px] duration-300 transform transition-transform ${
                  activeIndexes.includes(index) ? "rotate-180" : ""
                }`}
              />
            </button>
            <span className="ml-4 text-lg font-semibold">{item.title}</span>
          </div>

          {/* Desktop version */}
          <div className="hidden md:flex w-full gap-[40px] items-start">
            <div className="min-w-[100px] max-w-[185px] xl:w-1/5">
              <button
                className={`w-12 h-12 mt-[12px] flex items-center justify-center border-[1px] border-gray-300 rounded-full duration-300 transform transition-all ${
                  activeIndexes.includes(index) ? "bg-blue_main text-white" : ""
                }`}
                onClick={() => toggleText(index)}
              >
                <GoArrowDown
                  className={`text-[24px] duration-300 transform transition-transform ${
                    activeIndexes.includes(index)
                      ? "-rotate-90 text-[28px]"
                      : ""
                  }`}
                />
              </button>
            </div>
            <h3 className="ml-4 font-bold lg:text-[32px] text-[26px] lg:max-w-[413px] max-w-[300px] w-full">
              {item.title}
            </h3>
            <div
              className={`w-4/5 grid grid-cols-2 gap-4 transition-all duration-700 ease-in-out overflow-hidden ${
                activeIndexes.includes(index)
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {item.text.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-[15px] text-[18px]"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
              ))}
            </div>
          </div>

          {/* Mobile toggle for paragraphs */}
          <div
            className={`w-full md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              activeIndexes.includes(index)
                ? "mt-4 max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-2">
              {item.text.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-[15px]"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListComponent;

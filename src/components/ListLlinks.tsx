import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

interface Item {
  id: number;
  title: string;
  description: string;
  badges: {
    name: string;
    link: string;
  }[];
}

interface MainBlockThirdProps {
  items: Item[];
}

const ListLinks: React.FC<MainBlockThirdProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`lg:grid flex flex-col lg:grid-cols-[3fr,7fr] border-b border-black_80 py-4 ${
            index === 0 ? "border-t" : ""
          }`}
        >
          <h3 className="max-w-[300px] mb-[10px] w-full text-[24px] md:text-[28px] font-bold">
            {item.title}
          </h3>

          <div className="w-full">
            <p className="text-[16px] font-medium" dangerouslySetInnerHTML={{__html: item.description}}>
            </p>
            <div className="flex mt-2 flex-wrap">
              {item.id === 1 || item.id === 2 || item.id === 3 || item.id === 4 || item.id === 5 || item.id === 6
                ? item.badges.map((badge, idx) => (
                    <a key={idx} href={badge.link}>
                      <p className="mb-[15px] me-[15px] border px-[20px] py-[10px] text-[16px] font-medium rounded-full text-black border-blue_main hover:bg-blue_main hover:text-white transition-all duration-100">
                        {badge.name}
                      </p>
                    </a>
                  ))
                : item.badges.map((badge, idx) => (
                    <p
                      key={idx}
                      className="mb-[15px] me-[15px] border px-[20px] py-[10px] text-[16px] font-medium rounded-full text-black border-blue_main"
                    >
                      {badge.name}
                    </p>
                  ))}
            </div>
          </div>

          {/* <div className="max-w-full lg:max-w-[80px] justify-end w-full">
            <button className="hidden lg:flex ms-[10px] size-[70px] border-[1px] rounded-full items-center justify-center hover:bg-blue_main transition-all hover:text-white duration-300">
              <GoArrowRight className="size-[32px]" />
            </button>
            <button className="w-full h-[50px] mt-[20px] text-[18px] bg-blue_main text-white lg:hidden block rounded-full">
              Подробнее
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default ListLinks;

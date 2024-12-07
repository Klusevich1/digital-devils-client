import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import {GoArrowRight} from "react-icons/go";

interface Item {
    title: string;
    description: string;
    badges: string[];
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
                    className={`lg:grid flex flex-col lg:grid-cols-[3fr,7fr,1fr] border-b py-4 ${index === 0 ? 'border-t' : ''}`}
                >
                    <h3 className="max-w-fit mb-[10px] w-full text-[24px] md:text-[32px] font-bold">
                        {item.title}
                    </h3>

                    <div className="max-w-[750px] w-full">
                        <p className="text-[18px] md:text-[22px]">{item.description}</p>
                        <div className="flex mt-2 flex-wrap">
                            {item.badges.map((badge, idx) => (
                                <span
                                    key={idx}
                                    className="mb-3 me-3 border px-3 py-1 text-[16px] md:text-[18px] rounded-full text-gray-700 border-gray-300"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-full lg:max-w-[80px] justify-end w-full">
                        <button
                            className="hidden lg:flex ms-[10px] size-[70px] border-[1px] rounded-full items-center justify-center hover:bg-blue_main transition-all hover:text-white duration-300">
                            <GoArrowRight className="size-[32px]" />
                        </button>
                        <button
                            className="w-full h-[50px] mt-[20px] text-[18px] bg-blue_main text-white lg:hidden block rounded-full">
                            Подробнее
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListLinks;

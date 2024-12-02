import React, { useState } from 'react';
import { IoIosArrowRoundDown } from 'react-icons/io';

interface Item {
    title: string;
    text: string[];
}

interface ListComponentProps {
    data: Item[];
}

const ListComponent: React.FC<ListComponentProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleText = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {data.map((item, index) => (
                <div key={index} className="border-b py-[20px] flex flex-col">
                    {/* Mobile version */}
                    <div className="md:hidden flex items-center" onClick={() => toggleText(index)}>
                        <button
                            className="min-w-[40px] min-h-[40px] size-[40px] flex items-center justify-center border-blue_20 border-[1px] rounded-full"
                        >
                            <IoIosArrowRoundDown
                                className={`text-[24px] duration-300 transform transition-transform ${
                                    activeIndex === index ? 'rotate-180' : ''
                                }`}
                            />
                        </button>
                        <span className="ml-4 text-lg font-semibold">{item.title}</span>
                    </div>

                    {/* Desktop version */}
                    <div className="hidden md:flex w-full gap-[40px] items-start ">
                        <div className="min-w-[100px] max-w-[185px] xl:w-1/5">
                            <button
                                className={`w-12 h-12 mt-[12px] flex items-center justify-center border-[1px] border-gray-300 rounded-full  duration-300 transform transition-all
                                ${activeIndex === index ? 'bg-blue_main text-white' : ''}`}
                                onClick={() => toggleText(index)}
                            >
                                <IoIosArrowRoundDown
                                    className={`text-[24px] duration-300 transform transition-transform ${
                                        activeIndex === index ? '-rotate-90 text-[28px]' : ''
                                    }`}
                                />
                            </button>
                        </div>
                        <h3 className="ml-4 font-bold text-[32px] max-w-[413px] w-full">{item.title}</h3>
                        <div
                            className={`w-4/5 grid grid-cols-2 gap-4 transition-all duration-700 ease-in-out overflow-hidden ${
                                activeIndex === index
                                    ? 'max-h-screen opacity-100'
                                    : 'max-h-0 opacity-0'
                            }`}
                        >
                            {item.text.map((paragraph, i) => (
                                <p key={i} className="mb-[15px] text-[18px]">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Mobile toggle for paragraphs */}
                    <div
                        className={`w-full md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                            activeIndex === index
                                ? 'mt-4 max-h-screen opacity-100'
                                : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="p-2">
                            {item.text.map((paragraph, i) => (
                                <p key={i} className="mb-[15px]">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListComponent;

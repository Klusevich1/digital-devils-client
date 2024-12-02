import React, { useState } from 'react';
import { IoIosArrowRoundDown } from 'react-icons/io';

interface Item {
    title: string;
    text: string[];
}

interface ListAboutComponentProps {
    data: Item[];
}

const ListAboutComponent: React.FC<ListAboutComponentProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleText = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div>
            {data.map((item, index) => (
                <div
                    key={index}
                    className=" border-b border-black_20 justify-between md:py-[30px] py-[20px]"
                >
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
                    <div
                        className={`w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                            activeIndex === index
                                ? 'max-h-screen opacity-100'
                                : 'max-h-0 opacity-0'
                        }`}
                    >
                        <div className="p-2">
                            {item.text}
                        </div>
                    </div>
                    <div className="hidden md:flex flex-row justify-between ">
                        <h2 className="text-[32px] font-bold w-2/5">{item.title}</h2>
                        <span className="text-[24px] font-medium justify-end w-1/2">
                {item.text}
            </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListAboutComponent;

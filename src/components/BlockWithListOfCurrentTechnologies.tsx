import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React from "react";

interface BlockWithListOfCurrentTechnologiesProps {
    title: string;
    list: string[];
    isOnlyBottomPadding?: boolean;
    isDark?: boolean
}

export const BlockWithListOfCurrentTechnologies: React.FC<BlockWithListOfCurrentTechnologiesProps> = ({title, list, isOnlyBottomPadding = true, isDark = true}) => {
    return (
        <StandardMarginsLayout
            styles={`${isOnlyBottomPadding ? "pb-[50px] md:pb-[60px]" : "py-[50px] md:py-[60px]"} ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
            children={
                <>
                    <h1 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">{title}</h1>
                    <ul className="">
                        {list.map((item, index) => (
                            <li className="text-[22px] lg:text-[26px] font-medium pb-[20px] border-b-[1px] border-gray-500 mt-[20px]" key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            }
        />
    );
}

export default BlockWithListOfCurrentTechnologies;
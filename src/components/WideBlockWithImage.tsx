import Image, {StaticImageData} from "next/image";
import React from "react";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

interface WideBlockWithImageProps {
    title: string;
    text_1: string;
    text_2: string;
}

const WideBlockWithImage: React.FC<WideBlockWithImageProps> = ({title, text_1, text_2,}) => {
    return (
        <StandardMarginsLayout
            styles=" py-[50px] md:py-[60px] bg-[#F5F5F5]"
            children={
                <>
                    <h1 className="mb-[30px] font-bold text-[32px] lg:text-[60px]">{title}</h1>
                    <div className="flex flex-col md:flex-row justify-between gap-[20px]">
                        <p className="text-[22px] font-bold  md:max-w-[640px]">{text_1}</p>
                        <p className="text-[18px] font-medium  md:max-w-[640px]">{text_2}</p>
                    </div>
                </>
            }/>
    );
}

export default WideBlockWithImage;
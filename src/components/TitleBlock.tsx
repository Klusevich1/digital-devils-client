import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React, {FC} from "react";
import {GoArrowUpRight} from "react-icons/go";
import Image, {StaticImageData} from "next/image";

type TitleBlockProps = {
    title: string;
    description: string;
    imagePath: string | StaticImageData;
};


export const TitleBlock: FC<TitleBlockProps> = ({ title, description, imagePath, }) => {
    return (
        <>
            <StandardMarginsLayout
                styles="pb-[50px] md:pb-[60px]"
                children={
                    <>
                        <div className="lg:flex lg:justify-between">
                            <div className="lg:block flex flex-col items-center">
                                <h1 className="font-bold text-[32px] md:text-[60px] lg:mb-[30px] mb-[20px] w-full">{title}</h1>
                                <div className="max-w-[639px] my-[20px] lg:hidden block">
                                    <Image
                                        src={imagePath}
                                        width={639}
                                        height={384}
                                        className="object-cover h-fit"
                                        style={{height: "initial !important"}}
                                        alt={title}
                                    />
                                </div>
                                <p className="text-[18px] lg:max-w-[640px] max-w-max md:mb-[30px] mb-[20px]">{description}</p>
                                <button className="order-3 flex transition-all m-0">
                                    <div
                                        className="lg:w-[319px] w-[301px] lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center bg-blue_main rounded-full text-white">
                                        Бесплатная консультация
                                    </div>
                                    <div
                                        className="ms-[-10px] lg:text-[28px] text-[24px] lg:size-[60px] size-[50px] flex justify-center items-center  bg-blue_main rounded-full text-white">
                                        <GoArrowUpRight/>
                                    </div>
                                </button>
                            </div>
                            <div className="max-w-[639px] hidden lg:block">
                                <Image
                                    src={imagePath}
                                    width={639}
                                    height={421}
                                    className="object-cover h-fit"
                                    alt={title}
                                />
                            </div>
                        </div>
                    </>
                }/>
        </>
    )
}
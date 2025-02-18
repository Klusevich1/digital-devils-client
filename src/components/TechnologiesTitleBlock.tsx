import React, {ReactNode} from "react";
import {GoArrowUpRight} from "react-icons/go";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

interface TechnologiesTitleBlockProps {
    title: ReactNode;
    description: string;
    buttonText?: string;
    buttonColor: string;
}

const TechnologiesTitleBlock: React.FC<TechnologiesTitleBlockProps> = ({
                                                                           title,
                                                                           description,
                                                                           buttonColor,
                                                                           buttonText = "Бесплатная консультация"
                                                                       }) => {
    return (
        <StandardMarginsLayout
            styles="pb-[50px] md:pb-[60px]"
            children={
                <>
                    <div className="flex flex-col">
                        <div className="w-full mb-[30px]">
                            <p className="font-bold text-[40px] sm:text-[55px] md:text-[75px] lg:text-[90px] xl:text-[110px] leading-[55px] md:leading-[70px] lg:leading-[100px] xl:leading-[120px]">
                                {title}
                            </p>
                        </div>
                        <div className="flex flex-col lg:flex-row w-full items-center justify-between">
                            <a className="order-2 lg:order-1 flex transition-all lg:w-fit w-full mt-[20px] lg:mt-0" href="/application">
                                <div className={`lg:w-[319px] w-full lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center rounded-full text-white`}
                                    style={{backgroundColor: buttonColor}}>
                                    {buttonText}
                                </div>
                                <div className={`ms-[-10px] lg:text-[28px] text-[18px] md:text-[24px] lg:size-[60px] size-[50px] lg:min-w-[60px] min-w-[50px] flex justify-center items-center rounded-full text-white`}
                                    style={{backgroundColor: buttonColor}}>
                                    <GoArrowUpRight/>
                                </div>
                            </a>
                            <p className="order-1 lg:order-2  lg:max-w-[445px] text-[16px] lg:text-[18px] font-medium">
                                {description}
                            </p>
                        </div>
                    </div>
                </>
            }
        />
    );
}

export default TechnologiesTitleBlock;
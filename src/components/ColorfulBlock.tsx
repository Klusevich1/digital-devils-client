import React, {ReactNode} from "react";
import circle from "@/../public/direct-up.svg"
import circle_white from "@/../public/direct-up_white.svg"
import Image, {StaticImageData} from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

interface ColorfulBlockProps {
    title: string;
    bigTitle?: string;
    titleCircleBgColor_1: string;
    titleCircleBgColor_2: string;
    text_1: ReactNode;
    text_2: ReactNode;
    description: ReactNode;
    imagePath: string | StaticImageData;
    smallImagePath: string | StaticImageData;
    BgColor: string;
    isNotDark_1?: boolean;
    isNotDark_2?: boolean;
    showText?: boolean;
}

const ColorfulBlock: React.FC<ColorfulBlockProps> = ({
                                                         title,
                                                         titleCircleBgColor_1,
                                                         titleCircleBgColor_2,
                                                         text_1,
                                                         text_2,
                                                         description,
                                                         imagePath,
                                                         smallImagePath,
                                                         BgColor,
                                                         bigTitle = "Вы получаете:",
                                                         isNotDark_1 = false,
                                                         isNotDark_2 = false,
                                                         showText = true
                                                     }) => {
    return (
        <>
            <article className="py-[50px] md:py-[60px] text-white" style={{backgroundColor: BgColor}}>
                <div className="w-full mx-auto max-w-[1440px] custom_container ">

                    <h2 className="font-bold text-[32px] sm:text-[40px] lg:text-[60px] mb-[30px]">{bigTitle}</h2>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="md:block hidden min-w-[339px] w-full min-h-[250px] lg:max-w-[523px] lg:max-h-[272px] rounded-[40px] me-[20px] mb-[30px]">
                            <Image src={imagePath} alt={title} className="w-full" width={523} height={272}/>
                        </div>
                        <div className="md:hidden block min-w-[339px] w-full min-h-[250px] lg:max-w-[568px] lg:max-h-[300px] rounded-[40px] me-[20px] mb-[30px]">
                            <Image src={smallImagePath} alt={title} className="w-full" width={523} height={272}/>
                        </div>
                        <div className="flex flex-col lg:max-w-[641px]">
                            <h1 className={`text-[22px] lg:text-[32px] font-bold mb-[20px] lg:mb-[30px] ${title == "" ? "hidden" : "block"}`}>
                                {title}
                            </h1>
                            <div className={`flex flex-col sm:flex-row justify-between mb-[20px     ] lg:mb-[30px] ${showText ? "block" : "hidden"}`}>
                                <div className="flex flex-col w-full sm:max-w-[300px] mb-[10px] sm:m-0">
                                    <div className={`items-center size-[28px] rounded-full justify-center mb-[15px] ${titleCircleBgColor_1 == "none" ? "hidden" : "flex"}`}
                                         style={{backgroundColor: titleCircleBgColor_1}}>
                                        <Image src={isNotDark_1 ? '/resources/direct-up_white.svg' : '/resources/direct-up.svg'} alt="circle" width={12.5} height={12.5}/>
                                    </div>
                                    {text_1}
                                </div>
                                <div className="flex flex-col w-full sm:max-w-[300px] mb-[10px]">
                                    <div className={`items-center size-[28px] rounded-full justify-center mb-[15px] ${titleCircleBgColor_1 == "none" ? "hidden" : "flex"}`}
                                         style={{backgroundColor: titleCircleBgColor_2}}>
                                        <Image src={isNotDark_2 ? '/resources/direct-up_white.svg' : '/resources/direct-up.svg'} alt="circle" width={12.5} height={12.5}/>
                                    </div>
                                    {text_2}
                                </div>
                            </div>
                            <div className="border-s-2 ps-[20px] text-[16px] lg:text-[18px] font-medium">
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default ColorfulBlock;
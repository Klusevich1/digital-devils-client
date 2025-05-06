import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React, {ReactNode} from "react";
import Image, {StaticImageData} from "next/image";

interface HalfImageBlockProps {
    title: string;
    smallTitle: string;
    description: ReactNode;
    buttonText: string;
    buttonColor: string;
    image: string | StaticImageData;
    smallImage: string | StaticImageData;
    isRevert?: boolean;
    isOnlyBottomPadding?: boolean;
    widthImage: number;
    heightImage: number;
    isImageCenter?: boolean;
    isDark?: boolean;
}

const HalfImageBlock: React.FC<HalfImageBlockProps> = ({title, smallTitle, description, buttonText, buttonColor, image, widthImage, heightImage, smallImage, isRevert = false, isOnlyBottomPadding = true, isDark = false, isImageCenter = false}) => {
    return (
        <StandardMarginsLayout
            styles={(isOnlyBottomPadding ? "pb-[50px] md:pb-[60px]" : "py-[50px] md:py-[60px]") + (isDark ? " bg-black text-white": " bg-white text-black")}
            children={
                <div className="flex flex-col">
                    <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">{title}</h2>
                    <div className={`flex flex-col  justify-between ${isRevert ? " lg:flex-row-reverse" : "lg:flex-row"}`}>
                       <div className={`hidden h-full rounded-[40px] xl:min-w-[${widthImage}px] ${isImageCenter ? " lg:flex justify-center w-full" : " lg:block"}`}>
                            <Image src={image} alt={smallTitle} className={`${!isRevert ? "" : "ms-[30px]"} `} width={widthImage} height={heightImage}
                                style={{minWidth: widthImage / 2 + 100, maxWidth: widthImage, maxHeight: heightImage}}
                            />
                        </div>
                        <div className={`lg:max-w-[640px] ${isRevert ? "" : "lg:ms-[30px]"}`}>
                            {smallTitle && <h2 className="font-bold text-[24px] lg:mb-[10px] mb-[20px]">{smallTitle}</h2>}
                            {!smallTitle && description}
                            <div className="block lg:hidden mb-[20px] rounded-[40px]">
                                <Image src={smallImage} alt={smallTitle} className="w-full" width={widthImage} height={heightImage}/>
                            </div>
                            {smallTitle && description}
                            {buttonText == "" ? <></> :
                                <a className="flex lg:w-fit w-full mt-[20px]"
                                   href="/application" rel="nofollow">
                                    <div
                                        className={`font-medium text-[18px] lg:w-fit w-full py-[12.5px] px-[20px] text-center rounded-full text-white`}
                                        style={{backgroundColor: buttonColor}}>
                                        {buttonText}
                                    </div>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            }
        />
    );
}

export default HalfImageBlock;
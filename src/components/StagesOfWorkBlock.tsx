import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React, {FC, ReactNode} from "react";

interface CardData {
    title: string;
    text: string;
    circles: number;
}

interface CardGridProps {
    data: CardData[];
}

export const StagesOfWorkBlock: FC<{ title: string, text: ReactNode; data: CardData[], margin: string  }> = ({ title, text, data, margin }) => {
    return (
        <StandardMarginsLayout
            styles={margin}
            children={
            <>
                <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px]">{title}</h2>
                {text}
                <CardGrid data={data} />
            </>
        }/>
    )
}

const CardGrid: React.FC<CardGridProps> = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`drop-shadow-lg md:max-w-[413px] h-full rounded-[30px] p-[20px] flex flex-col  ${--index % 2 ? "bg-white" : "bg-black text-white"}`}
                >
                    <div className="flex mb-[10px]">
                        {Array.from({ length: item.circles }).map((_, i) => (
                            <div
                                key={i}
                                className={`size-[20px] bg-custom_yellow rounded-full ${i === 0 ? 'mr-1' : 'mx-1'}`}
                            ></div>
                        ))}
                    </div>
                    <h2 className="font-bold text-[22px] md:text-[24px]">{item.title}</h2>
                    <p className="mt-[10px] text-[18px]" dangerouslySetInnerHTML={{__html: item.text}}></p>
                </div>
            ))}
        </div>
    );
};
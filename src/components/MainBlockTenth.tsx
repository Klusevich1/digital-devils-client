import React from 'react';
import AccordionItem from '@/components/AccordionItem';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';

export interface DataItem {
    title: string;
    description: React.ReactNode;
}

interface MainBlockTenthProps {
    data: DataItem[]
    isOnlyBottomPadding?: boolean;
}

const MainBlockTenth: React.FC<MainBlockTenthProps> = ({data, isOnlyBottomPadding = true}) => {
    return (
        <StandardMarginsLayout styles={`bg-white text-black ${isOnlyBottomPadding ? "pb-[50px] md:pb-[60px]" : "py-[50px] md:py-[60px]"}`} children={
            <>
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] font-bold">Вопрос & ответ</h2>
                {data.map((item, index) => (
                    <AccordionItem key={index} title={item.title} description={item.description} />
                ))}
            </>
        } />
    );
};

export default MainBlockTenth;
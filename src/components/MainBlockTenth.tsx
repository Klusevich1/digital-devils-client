import React from 'react';
import AccordionItem from '@/components/AccordionItem';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';

export interface DataItem {
    title: string;
    description: React.ReactNode;
}

interface MainBlockTenthProps {
    data: DataItem[]
}

const MainBlockTenth: React.FC<MainBlockTenthProps> = ({data}) => {
    return (
        <StandardMarginsLayout styles="pb-[50px] md:pb-[60px]" children={
            <>
                <h2 className="text-[32px] md:text-[60px] mb-[30px] font-bold">Вопрос & ответ</h2>
                {data.map((item, index) => (
                    <AccordionItem key={index} title={item.title} description={item.description} />
                ))}
            </>
        } />
    );
};

export default MainBlockTenth;
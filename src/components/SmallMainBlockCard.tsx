import React from 'react';

interface SmallMainBlockCardProps {
    title: string;
    description: string;
}

const SmallMainBlockCard: React.FC<SmallMainBlockCardProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col max-w-full md:max-w-[269px] w-full mb-[15px]">
            <h1 className="text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] font-bold">{title}</h1>
            <p className="text-[18px]">{description}</p>
        </div>
    );
};

export default SmallMainBlockCard;
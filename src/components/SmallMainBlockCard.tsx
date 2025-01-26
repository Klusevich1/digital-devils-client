import React from 'react';

interface SmallMainBlockCardProps {
    title: string;
    description: string;
}

const SmallMainBlockCard: React.FC<SmallMainBlockCardProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col max-w-full md:max-w-[269px] w-full mb-[15px]">
            <p className="text-[40px] md:text-[60px] font-bold">{title}</p>
            <span className="text-[18px]">{description}</span>
        </div>
    );
};

export default SmallMainBlockCard;
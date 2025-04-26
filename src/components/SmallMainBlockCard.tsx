import React from 'react';

interface SmallMainBlockCardProps {
    title: string;
    description: string;
    margin?: string;
}

const SmallMainBlockCard: React.FC<SmallMainBlockCardProps> = ({ title, description, margin = 'mb-[15px]' }) => {
    return (
        <div className={`flex flex-col max-w-full md:max-w-[300px] w-full ${margin}`}>
            <p className="text-[40px] md:leading-[1] leading-[1.3] md:text-6xl font-bold">{title}</p>
            <span className="text-[18px]">{description}</span>
        </div>
    );
};

export default SmallMainBlockCard;
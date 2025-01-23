import React from 'react';

interface ServicesDarkBlockProps {
    title: string;
    description: string;
}

const ServicesDarkBlock: React.FC<ServicesDarkBlockProps> = ({ title, description }) => {
    return (
        <>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
        </>
    );
};

export default ServicesDarkBlock;
import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo-header.svg';

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
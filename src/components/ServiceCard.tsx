import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    stackName?: string;
    stack: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, stack, stackName}) => {
    return (
        <div
            className="flex flex-col justify-between py-[30px] max-w-[413px] rounded-[30px] px-[22px] md:px-[25.5px] bg-back mt-[30px]">
            <div>
                <h3 className="font-bold md:text-[32px] text-[24px]">{title}</h3>
                <p className="text-[18px]">{description}</p>
            </div>
            <div>
                {stack.length !== 0 && (
                    <>
                        <h5 className="font-bold text-[18px] mt-[15px] mb-[10px]">{stackName}</h5>
                        <p className="text-[18px]">
                            {stack.map((tech, index) => (
                                <>
                                    {index > 0 && <span className="text-yellow-400"> / </span>}
                                    {tech}
                                </>
                            ))}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;

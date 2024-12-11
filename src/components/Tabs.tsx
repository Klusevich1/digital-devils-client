import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface PortfolioItem {
    title: string;
    imagePath: StaticImageData;
    link: string;
    category: string;
    description: string;
    technologies: string[];
    typesOfWork: string[];
}

interface Tab {
    label: string;
    content: PortfolioItem[];
}

interface TabsProps {
    title: string;
    arr: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ arr, title }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTabClick = (index: number) => {
        if (index === activeTab) return;
        setIsTransitioning(true);

        setTimeout(() => {
            setActiveTab(index);
            setIsTransitioning(false);
        }, 200);
    };

    return (
        <div className="space-y-4">
            <div className="flex xl:items-end justify-between xl:flex-row flex-col mb-[30px] gap-[30px]">
                <h1 className="text-[32px] md:text-[60px] font-bold">{title}</h1>
                <div className="flex pb-2 flex-wrap gap-[15px]">
                    {arr.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`px-[10px] py-[11px] text-[16px] font-medium rounded-[20px] cursor-pointer transition-all ${
                                activeTab === index
                                    ? 'bg-blue_main text-white'
                                    : 'text-black hover:text-blue-500 bg-black_5'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-[20px] w-[95%]'>
                <p className='text-[24px] font-medium'>Наша команда — эксперты в создании современных IT-решений, которые помогают бизнесу развиваться и достигать новых высот. Мы разрабатываем веб-сайты, мобильные приложения, сложные backend-системы и уникальные UX/UI-дизайны, полностью адаптированные под задачи клиента. В портфолио представлены проекты для различных отраслей: от создания дизайна до сложного e-commerce.</p>
                <p className='text-[24px] mb-[30px] font-medium'>Каждую задачу мы решаем с вниманием к деталям, прозрачностью процессов и стремлением превзойти ожидания. Независимо от сложности проекта, мы используем передовые технологии и креативный подход, чтобы создавать решения, которые работают и вдохновляют.</p>
            </div>

            <div
                className={`justify-between flex flex-col flex-wrap transition-opacity duration-200 gap-1 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
            >
                {arr[activeTab].content
                    .filter(item =>
                        arr[activeTab].label === "Все" || item.category === arr[activeTab].label
                    ) // Фильтрация по категории, если таб не "Все"
                    .map((item, index) => (
                        <a
                            href={item.link}
                            key={index}
                            className="flex flex-col items-center lg:grid grid-cols-[30%,62%] w-full mb-[40px] md:gap-[70px] gap-[20px]"
                        >
                            <div className="overflow-hidden inline-flex rounded-[40px] w-full min-w-[300px] min-h-[300px] max-w-auto max-h-auto md:max-w-[417px] md:max-h-[371px]">
                                <Image
                                    className="w-full h-full object-cover duration-300 hover:scale-105"
                                    src={item.imagePath}
                                    alt={item.title}
                                />
                            </div>
                            <div className="sm:text-[24px] text-[18px]">
                                <h2 className="mb-[20px] font-bold text-[20px] sm:text-[28px]">{item.title}</h2>
                                <p>{item.description}</p>
                                <p className="my-[5px]">
                                    <span className="font-bold">Технологии: </span>
                                    {item.technologies.map((tech, i) => (
                                        <span key={i}>{tech}{i < item.technologies.length - 1 ? ' · ' : ''}</span>
                                    ))}
                                </p>
                                <p>
                                    <span className="font-bold">Виды работ: </span>
                                    {item.typesOfWork.map((work, i) => (
                                        <span key={i}>{work}{i < item.typesOfWork.length - 1 ? ' · ' : ''}</span>
                                    ))}
                                </p>
                            </div>
                        </a>
                    ))}
            </div>
        </div>
    );
};

export default Tabs;

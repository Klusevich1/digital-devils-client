import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';

const ServiceBlockFourth: React.FC = () => {
    const services = [
        {
            title: 'Frontend-разработка',
            description: 'Разрабатываем современный SPA с использованием серверного рендеринга на базе React-фреймворков, обеспечивая надежную типизацию через TypeScript. Серверная часть реализуется на Node.js с применением Express.js, что гарантирует высокую производительность и гибкость. Для seamless интеграции frontend и backend используем RESTful API, обеспечивая надежное взаимодействие компонентов и масштабируемость ваших приложений.',
            stackName: "Стэк Frontend’a",
            stack: ['HTML', 'CSS', 'React', 'Next.js', 'Typescript'],
        },
        {
            title: 'Backend-разработка',
            description: 'Разрабатываем надежную архитектуру backend на базе современных технологий и фреймворков, уделяя особое внимание безопасности и производительности. Используем собственную библиотеку компонентов, адаптированную под различные отрасли — от недвижимости и банков до интеграций с CRM. Применяем микросервисную архитектуру, которая обеспечивает гибкость, масштабируемость и возможность легко адаптироваться к растущим требованиям вашего веб-приложения.',
            stackName: "Стэк Backend’a",
            stack: ['Express.js', 'Node.js', 'Nest.js'],
        },
        {
            title: 'QA-исследования',
            description: 'Обеспечиваем высокое качество продукта на каждом этапе разработки и внедрения. Покрываем код тестами, проводим функциональное и приемочное тестирование для гарантии стабильной работы. Используем сочетание ручного и автоматизированного тестирования, чтобы охватить все аспекты проверки. Для анализа производительности highload-сервисов применяем нагрузочное тестирование и специализированные инструменты, которые помогают выявить узкие места и оптимизировать систему.',
            stack: [],
        },
    ];

    return (
        <StandardMarginsLayout styles="mt-[50px] sm:mt-[60px] py-[50px] bg-black text-white" children={
            <>
                <h2 className="font-bold text-[32px] md:text-[60px] max-w-[1100px] ">Работаем со всеми современными
                    технологиями</h2>
                <div className="flex flex-wrap justify-around gap-[15px]">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            stackName={service.stackName}
                            stack={service.stack}
                        />
                    ))}
                </div>
            </>
        } />
    );
};

export default ServiceBlockFourth;
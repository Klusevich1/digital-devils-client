import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import BasicLayout from '@/layouts/BasicLayout';
import Tabs from '@/components/Tabs';
import partfolio1 from '../../public/portfolio1.png';
import partfolio2 from '../../public/portfolio2.png';
import partfolio3 from '../../public/portfolio3.png';
import partfolio4 from '../../public/portfolio4.png';
import partfolio5 from '../../public/portfolio5.png';
import partfolio6 from '../../public/portfolio6.png';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';
import SEO from '@/components/SEO';

const breadcrumbs = [
    { name: 'Главная', link: '/' },
    { name: 'Портфолио', link: '/portfolio' },
];

const Portfolio = () => {
    const all = [
        {
            title: 'Разработка интернет-магазина шин',
            imagePath: partfolio2,
            link: '#',
            category: "Интернет-магазин",
            description: 'Спроектировали и разработали полноценный интернет-магазин с эксклюзивным дизайном. Разработку провели по принципам SEO Driven Development.',
            technologies: ['CMS Wordpress', 'WooCommerce', 'IP GeoAPI'],
            typesOfWork: ['UX/UI', 'backend', 'frontend'],

        },
        {
            title: 'Разработка лендинга Keel Market PLL',
            imagePath: partfolio1,
            link: '#',
            category: "Лендинг",
            description: 'Проект включал полный цикл веб-разработки: от концепции и дизайна до реализации и тестирования. Используя Agile-методологию, внедрили основные функции лендинга, проводя регулярные тестирования и собирая обратную связь от клиентов.',
            technologies: ['CMS Wordpress', 'WooCommerce', 'IP GeoAPI'],
            typesOfWork: ['UX/UI', 'backend', 'frontend'],

        },
        {
            title: 'Motion-дизайн',
            imagePath: partfolio3,
            link: '#',
            category: "Моушен",
            description: 'Создали 30-секундный видео-контент, который включал анимационные элементы и кейс-стадии, показывающие проделанную работу',
            technologies: ['Adobe After Effects', 'Sketch и Figma', 'CSS-анимации'],
            typesOfWork: ['motion-дизайн'],

        },
        {
            title: 'SEO-продвижение сайта по ремонту квартир',
            imagePath: partfolio5,
            link: '#',
            category: "SEO",
            description: 'Продвижение сайта услуг по ремонту квартир с 0 до 12 тысяч посетителей в месяц. Полное закрытие семантического ядра в нише. Разработка контент стратегии, внутренняя и внешняя SEO оптимизация. Настройка контекстной рекламы.',
            technologies: ['Wordpress', 'Яндекс Вебмастер', 'Google Search Console'],
            typesOfWork: ['SEO'],

        },
        {
            title: 'Motion-дизайн',
            imagePath: partfolio4,
            link: '#',
            category: "Моушен",
            description: 'Создали 30-секундный видео-контент, который включал анимационные элементы и кейс-стадии, показывающие проделанную работу',
            technologies: ['Adobe After Effects', 'Sketch и Figma', 'CSS-анимации'],
            typesOfWork: ['motion-дизайн'],

        },
        {
            title: 'Создание сайта для компании Giftstree',
            imagePath: partfolio6,
            link: '#',
            category: "Приложения",
            description: 'Разработка интернет-магазина осуществлялось в несколько этапов, начиная с изучения их уникальных услуг и подхода к созданию открыток. Мы предложили решение, отражающее креативность и качество продукции.',
            technologies: ['Adobe After Effects', 'Sketch и Figma', 'CSS-анимации'],
            typesOfWork: ['UX/UI', 'backend', 'frontend'],

        },
    ];

    const tabs = [
        { label: 'Все', content: all },
        { label: 'Интернет-магазин', content: all },
        { label: 'Приложения', content: all },
        { label: 'Лендинг', content: all },
        { label: 'Моушен', content: all },
    ];

    return (
        <>
            <SEO
                title="Портфолио работ IT-компании Digital Devils"
                description="Создаем проекты, которые вдохновляют и решают реальные бизнес-задачи. В нашем портфолио вы найдете примеры веб-сайтов, мобильных приложений и комплексных IT-решений, разработанных с использованием передовых технологий и инновационных подходов. Заходите."
            />
            <BasicLayout>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <StandardMarginsLayout styles="sm:pb-[60px] pb-[50px]" children={
                    <Tabs title="Портфолио" arr={tabs} />
                } />
            </BasicLayout>
        </>
    );
};

export default Portfolio;

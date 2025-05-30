import React from 'react';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';
import SliderComponent from '@/components/SliderComponent';

const data = [
    {
        title: 'Разработка интернет-магазина TopTyre',
        description: 'Спроектировали онлайн-магазин с эксклюзивным дизайном, ориентированным на целевую аудиторию бренда - автовладельцев из Минска и Беларуси. Добавили каталог товаров и услуг. Провели интеграцию сайта с 1С Битрикс.',
        technologies: ['Next.js', 'TypeScript', 'Nest.js', 'MongoDB'],
        works: ['UX/UI', 'Backend', 'Frontend'],
        imageSrc: "slide1.png",
    },
    {
        title: 'Разработка Landing Page Keel Market LLP',
        description: 'Проект включал полный цикл WEB-разработки: от концепции и дизайна сайта до реализации. Используя Agile-методологию, внедрили основные функции лендинга, проводя регулярные тестирования и собирая обратную связь от клиентов.',
        technologies: ['React', 'TypeScript', 'Express.js'],
        works: ['UX/UI', 'Backend', 'Frontend'],
        imageSrc: "slide2.png",
    },
    {
        title: 'Создание сайта для компании Giftstree',
        description: 'Разработка интернет-магазина осуществлялось в несколько этапов, начиная с изучения их уникальных услуг и подхода к созданию открыток. Мы предложили решение, отражающее креативность и качество продукции.',
        technologies: ['Adobe After Effects', 'Sketch и Figma', 'CSS-анимации'],
        works: ['UX/UI', 'Backend', 'Frontend'],
        imageSrc: "slide3.png",
    },
    {
        title: 'SEO продвижение сайта по ремонту квартир',
        description: 'Продвижение сайта услуг по ремонту квартир с 0 до 12 тысяч посетителей в месяц. Полное закрытие семантического ядра в нише. Разработка контент стратегии, внутренняя и внешняя SEO оптимизация. Настройка контекстной рекламы.',
        technologies: ['Wordpress', 'Яндекс Вебмастер', 'Google Search Console'],
        works: ['SEO'],
        imageSrc: "slide4.png",
    }
];

const MainBlockSecond: React.FC = () => {
    return (
        <StandardMarginsLayout styles="mt-[50px] sm:mt-[60px]" children={
            <>
                <h2 className="text-[28px] lg:text-[48px] xl:text-[60px] font-bold">Digital Devils - слаженная команда
                    профессионалов, готовых воплотить
                    в реальность ваши идеи</h2>
                <p className="text-[22px] max-w-[920px] mt-[30px]">Индивидуально подходим к созданию сайтов и работе над
                    каждым проектом.<br></br> Внедряем актуальные IT решения, уделяем максимум внимания дизайну и
                    юзабилити.<br></br>
                    Грамотная SEO оптимизация уже на этапе разработки.</p>

                <SliderComponent data={data}/>
            </>
        }/>
    );
};

export default MainBlockSecond;

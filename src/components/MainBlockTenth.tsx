import React from 'react';
import AccordionItem from '@/components/AccordionItem';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';

interface DataItem {
    title: string;
    description: React.ReactNode;
}

const MainBlockTenth: React.FC = () => {
    const data: DataItem[] = [
        {
            title: 'Какой срок создания нового сайта с нуля?',
            description:
                <p className="text-[18px] ">
                    Срок изготовления несложного сайта по готовым шаблонам - от 2
                    дней. Этого времени достаточно для создания одностраничной продающей визитки, чтобы уже через 10-15
                    дней после публикации в интернете принесет первые заявки. Для разработки индивидуального дизайна
                    потребуется больше времени, к тому же дополнительно нужно закладывать сроки на верстку и наполнение.
                </p>,
        },
        {
            title: 'Кто будет работать над разработкой моего web – сайта?',
            description:
                <>
                    <p className="text-[18px]">У нас трудится команда профессионалов, и каждый выполняет свои
                        задачи:</p>
                    <p className="text-[18px]">Аккаунт-менеджер, выясняет цели и ожидания от сайта</p>
                    <p className="text-[18px]">SEO - специалист отвечает за оптимизацию, текстовое наполнение, подбор
                        ключей
                        и запросов, продвижение ресурса</p>
                    <p className="text-[18px]">Frontend-разработчики создают пользовательские интерфейсы</p>
                    <p className="text-[18px]">Backend-разработчики занимаются настройкой функциональной части</p>
                    <p className="text-[18px]">UX/UI дизайнеры отвечают за удобство пользования интерфейсом и визуальную
                        привлекательность</p>
                </>,
        },
        {
            title: 'Можете ли вы помочь если нет технического задания на создание сайта?',
            description:
                <p className="text-[18px] ">
                    Мы предоставляем помощь в разработке ТЗ, включая сбор требований, формулирование спецификаций
                    проекта.
                </p>,
        },
        {
            title: 'Сколько стоит сделать сайт в Беларуси?',
            description:
                <>
                    <p className="text-[18px] ">
                        Единой цены на разработку веб-сайтов не существует. При расчете итоговой стоимости, мы учитываем
                        множество факторов: сфера деятельности компании или предприятия, используемые платформы,
                        сложность дизайна, техподдержки и дальнейшего обслуживания.
                    </p>
                    <br />
                    <p className="text-[18px] ">
                        Напишите или позвоните нам, чтобы обсудить с менеджером варианты реализации вашего проекта под
                        конкретные задачи и потребности бизнеса. Ориентируясь на полученную информации, мы сможем
                        подготовить коммерческое предложение и составить поэтапный план работ.
                    </p>
                </>,
        },

    ];

    return (
        <StandardMarginsLayout styles="mt-[50px] sm:mt-[60px] mb-[50px] sm:mb-[60px] " children={
            <>
                <h1 className="text-[32px] md:text-[60px] mb-[30px] font-semibold">Вопрос & ответ</h1>
                {data.map((item, index) => (
                    <AccordionItem key={index} title={item.title} description={item.description} />
                ))}
            </>
        } />
    );
};

export default MainBlockTenth;
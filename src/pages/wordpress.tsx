import SEO, {ListItem} from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import BasicLayout from "@/layouts/BasicLayout";
import MainBlockTenth, {DataItem} from "@/components/MainBlockTenth";
import TechnologiesTitleBlock from "@/components/TechnologiesTitleBlock";
import ColorfulBlock from "@/components/ColorfulBlock";
import BlockApproach from "@/components/BlockApproach";
import HalfImageBlock from "@/components/HalfImageBlock";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import Image from "next/image";

const PAGE_NAME = "wordpress";
const BREADCRUMB_PAGE_NAME = "Wordpress";

const breadcrumbs = [
    { name: "Главная", link: "/" },
    { name: BREADCRUMB_PAGE_NAME, link: `/${PAGE_NAME}` },
];

const breadcrumbsSchema: ListItem[] = [
    {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://digitaldevils.by",
    },
    {
        "@type": "ListItem",
        position: 2,
        name: BREADCRUMB_PAGE_NAME,
        item: `https://digitaldevils.by/${PAGE_NAME}`,
    },
];

const data: DataItem[] = [
    {
        title: "Сможем ли мы самостоятельно редактировать информацию на сайте?",
        description: (
            <p className="text-[18px] ">
                Да, для управления сайтом на WordPress не нужны какие-то особые знания и навыки программирования. Добавление или удаление контента со страниц производится в интуитивно понятном редакторе.
            </p>
        ),
    },
    {
        title: "Какие сайты можно создавать на WordPress?",
        description: (
            <p className="text-[18px] ">
                SMC платформа подходит для реализации практически любых проектов: от простейших визиток и лендингов до сложных корпоративных порталов и интернет-магазинов.
            </p>
        ),
    },
    {
        title: "Обучаете ли вы администрированию сайтов на WordPress?",
        description: (
            <p className="text-[18px] ">
                Для по завершению проекта, мы проводим обучение сотрудников заказчика, предоставляем услуги консультативной и технической поддержки бизнеса в Минске.
            </p>
        ),
    },
];

const wordpress = () => {
    return (
        <>
            <SEO
                title="Создание сайта на Вордпресс | Цена на разработку сайтов на Wordpress"
                description="Разрабатываем сайты на Wordpress, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего сайта на Wordpress экспертам и получите проект, который работает на ваш успех!"
                canonical={`https://digitaldevils.by/${PAGE_NAME}`}
                breadcrumbsSchema={breadcrumbsSchema}
            />
            <BasicLayout>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <TechnologiesTitleBlock
                    title={<>Разработка <br/> сайта на Wordpress</>}
                    description="Индивидуальный подход к созданию сайтов на WordPress. Быстро. Качественно. Недорого. По другому мы попросту не умеем!"
                    buttonColor="#345CFF"
                />
                <HalfImageBlock
                    title="Почему выбирают разработку на Wordpress"
                    smallTitle="Не знаете, как решить стоящую перед вами задачу?"
                        description={
                        <p className="font-medium text-[18px] mb-[20px]">
                            Команда Digital Devils поможет найти оптимальное решение по лучшим ценам в Минске. Стоимость разработки продающих и информационных сайтов на движке WordPress рассчитывается индивидуально с учетом масштабов предстоящих работ, необходимого функционала, дизайна. Оставьте заявку на бесплатную консультацию для старта.
                        </p>
                    }
                    buttonColor="#345CFF"
                    buttonText="Обсудить проект"
                    image={'/resources/wordpress_half-image-block.png'}
                    smallImage={'/resources/wordpress_half-image-block.png'}
                    widthImage={558}
                    heightImage={314}
                />
                <StandardMarginsLayout
                    styles=" py-[50px] md:py-[60px]  bg-black text-white"
                    children={
                        <>
                            <h1 className="mb-[30px] font-bold text-[32px] lg:text-[60px]">Преимущеcтва CMS Wordpress</h1>
                            <div className="flex flex-col flex-wrap md:flex-row justify-between gap-[20px]">
                                {[
                                    "Процесс создания <a href='https://digitaldevils.by/landing' class='no-underline text-blue_main'>лендингов</a>, <a href='https://digitaldevils.by/card-website' class='no-underline text-blue_main'>визиток</a>, <a href='https://digitaldevils.by/website-catalog' class='no-underline text-blue_main'>каталогов</a> и <a href='https://digitaldevils.by/online-store' class='no-underline text-blue_main'>магазинов</a> отработан до мелочей",
                                    "Пользователям доступна обширная библиотека плагинов для расширения функционала проекта",
                                    "Простая и удобная панель управления, понятная даже для человека без опыта использования CMS",
                                    "Выгодная цена реализации проектов любой сложности и формата под ключ",
                                    "WordPress поддерживает различные типы медиа, включая изображения, видео, аудио контент",
                                    "SEO-оптимизация - сайты, созданные на этом движке отлично ранжируются в поисковых системах",
                                ].map((item, idx) => (
                                    <div className="flex items-start lg:max-w-[413px]" key={idx}>
                                        <Image src={'/resources/Vector_wordpress.svg'} alt={"+"} width={17} height={15} />
                                        <p className="text-[18px] lg:text-[22px] ms-[10px] font-bold lg:max-w-[640px]" dangerouslySetInnerHTML={{__html: item}}></p>
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                />
                <BlockWithImageAndDropDownMenu
                    title="Создание сложных сайтов"
                    borderColor="#345CFF"
                    data={[
                        {title: "Учитываем все детали", description: "Прежде чем приступить к разработке, мы анализируем целевую аудиторию, исследуем бизнес заказчика, оцениваем конкурентов, для подбора наиболее эффективных технологий, шаблонов, дизайна. "},
                        {title: "Ориентированы на результат", description: "Для нас важно качество, а не количество. Стараемся сосредоточиться на реализации каждого проекта, уделить максимум внимания планированию структуры и страниц будущем веб-ресурса. "},
                        {title: "Всегда на связи и не оставляем без поддержки", description: "Оперативно реагируем на обращения клиентов, предоставляем консультацию и гарантийную поддержку в течение нескольких месяцев после размещения сайта на хостинге и его запуска. Добавляем плагины, выполняем интеграции. "},
                        {title: "Удобный и индивидуальный дизайн", description: "Знаем, как создать нешаблонный <a href='https://digitaldevils.by/information-site' class='no-underline text-blue_main'>информационный</a> или <a href='https://digitaldevils.by/corporate-website' class='no-underline text-blue_main'>корпоративный сайт</a>, <a href='https://digitaldevils.by/card-website' class='no-underline text-blue_main'>креативную визитку</a>. При создании дизайна ориентируемся на фирменный стиль и пожелания заказчика, актуальные тренды. "},
                        {title: "Выполняем заказы под ключ", description: "Команды Digital Devils - это высококлассные специалисты, которым можно заказать практически любые <a href='https://digitaldevils.by/' class='no-underline text-blue_main'>услуги по разработке и запуску сайтов</a> на WordPress, программированию, интернет-маркетингу и SEO-продвижению."},
                    ]}
                    firstBlock={
                        <div className="relative h-full lg:max-w-[753px] block lg:min-w-[422px] lg:mb-0 lg:me-[30px]">
                            <Image
                                src={'/resources/wordpress7.png'}
                                width={524}
                                height={543}
                                className="object-cover w-full"
                                alt="Создание сложных сайтов"
                            />
                        </div>
                    }
                    margin={'mt-[50px]'}
                />
                <BlockApproach
                    isOnlyBottomPadding={false}
                    mainTitle="Создаем сайты, которые помогают бизнесу"
                    leftBlock_p1="Создание веб-порталов на WordPress"
                    leftBlock_p2="Это быстрый и относительно недорогой способ запустить сайт, который будет не только функциональным и удобным для пользователей, но и легким в управлении и администрировании. Благодаря гибкости настроек платформы и большому количеству плагинов, она подходит для компаний любого масштаба и направлений деятельности."
                    leftBlock_p3="Нам отлично известно, что каждый бизнес имеет свою специфику, цели и требования, поэтому мы не используем шаблонные решения. Исходя из задач клиента, продумываем каждый шаг, составляем стратегию, которой придерживаемся на каждом этапе разработки."
                    rightBlockTitle="Прозрачные цены"
                    rightBlockPrice="400$"
                    rightBlockList={["Разработка сайта под ключ", "Правки", "Гайд пользования сайтом"]}
                    rightBlockImage={'/resources/wordpress_logo.svg'}
                    buttonColor="#345CFF"
                    arrowColor="blue"
                    bg_color="dark"
                />
                <ColorfulBlock
                    title=""
                    bigTitle="Сайт на Wordpress под ключ"
                    titleCircleBgColor_1="none"
                    titleCircleBgColor_2="none"
                    text_1={<></>}
                    text_2={<></>}
                    showText={false}
                    description={
                            <p>
                                Мы нацелены на долгосрочное и взаимовыгодное сотрудничества, поэтому работаем на результат и всегда добиваемся успеха. Выполняем создание одностраничных и многостраничных сайтов на WordPress: от составления уникальных авторских макетов и внедрения кастомных программных кодов до адаптивной верстки, размещения текстового, графического, видео контента на страницах и в разделах ресурса.
                            </p>
                    }
                    imagePath={'/resources/wordpress_colorfulblock.png'}
                    smallImagePath={'/resources/wordpress_colorfulblock_small.png'}
                    BgColor="#345CFF"
                    isNotDark_1={true}
                    isNotDark_2={true}
                />
                <StandardMarginsLayout
                    styles="py-[50px] md:py-[60px]"
                    children={
                        <div className="flex flex-col">
                            <div className={`flex flex-col  justify-between lg:flex-row-reverse`}>
                                <div className="lg:block hidden rounded-[40px] lg:max-w-[640px] ms-[30px]">
                                    <Image src={'/resources/wordpress4.png'} alt={"Поддержка 24/7"} className="w-[99%] min-w-[500px]" width={639} height={372}/>
                                </div>
                                <div className="lg:max-w-[640px]">
                                    <h1 className="mb-[30px] font-bold text-[32px] lg:text-[60px]">Поддержка 24/7</h1>
                                    <div className="block lg:hidden mb-[30px] mx-auto rounded-[40px]">
                                        <Image src={'/resources/wordpress4.png'} alt={"Поддержка 24/7"} className="w-full" width={639} height={372}/>
                                    </div>
                                    <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                                        Не бросаем клиентов на произвол судьбы после размещения сайта на хостинге.
                                    </p>
                                    <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                                        Перед публикацией ресурса тщательно проверяем его работоспособность, при необходимости выполняем дополнительные настройки, передаем заказчику все доступны к системе и видео инструкцию по работе с сайтом. В течение нескольких месяцев остаемся на связи и предоставляем гарантийную поддержку.
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                />
                <MainBlockTenth data={data} />
            </BasicLayout>
        </>
    );
}

export default wordpress;
import SEO, {ListItem} from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import BasicLayout from "@/layouts/BasicLayout";
import MainBlockTenth, {DataItem} from "@/components/MainBlockTenth";
import TechnologiesTitleBlock from "@/components/TechnologiesTitleBlock";
import BlockApproach from "@/components/BlockApproach";
import HalfImageText from "@/components/HalfImageText";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import ColorfulBlock from "@/components/ColorfulBlock";
import BlockWithListOfCurrentTechnologies from "@/components/BlockWithListOfCurrentTechnologies";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import TildaSlider from "@/components/TildaSlider";

const PAGE_NAME = "tilda";
const BREADCRUMB_PAGE_NAME = "Tilda";

const breadcrumbs = [
    {name: "Главная", link: "/"},
    {name: BREADCRUMB_PAGE_NAME, link: `/${PAGE_NAME}`},
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
        title: "Вы работаете по договору?",
        description: (
            <p className="text-[18px] ">
                Да, перед началом работ мы подписываем официальный договор, выставляем счет и ожидаем оплату. По завершении проекта передаем сайт клиенту и подписываем акт выполненных работ.
            </p>
        ),
    },
    {
        title: "Сколько по времени занимает разработка сайта на Tilda?",
        description: (
            <p className="text-[18px] ">
                Конкретные сроки зависят от проекта и ряда других факторов: объема предстоящих работ, формата и структуры веб-ресурса, скорости получения обратной связи от заказчика и т.д. В среднем
                мы создаем визитки, лендинги и каталоги товаров на Тильда в течение 2-3 недель.
            </p>
        ),
    },
    {
        title: "Возьмете ли вы в разработку сайт, если заказчик находится не в Минске?",
        description: (
            <p className="text-[18px] ">
                Место нахождения клиента для нас не имеет значения. Мы работаем по всей страны и с любыми регионами Беларуси. Обсудить условия сотрудничества можно по телефону или видеосвязи.
            </p>
        ),
    },
];

const tilda = () => {
    return (
        <>
            <SEO
                title="Разработка сайта на Тильде | Цена на создание сайтов на Tilda в Минске"
                description="Разрабатываем сайты на Tilda, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего сайта на Тильде экспертам и получите проект, который работает на ваш успех!"
                canonical={`https://digitaldevils.by/${PAGE_NAME}`}
                breadcrumbsSchema={breadcrumbsSchema}
            />
            <BasicLayout>
                <Breadcrumbs breadcrumbs={breadcrumbs}/>
                <TechnologiesTitleBlock
                    title={<>Разработка <br/> сайта на Tilda</>}
                    description="Создаем уникальные и полезные сайты на Tilda. Учитываем особенности бизнеса заказчика, запросы целевой аудитории."
                    buttonColor="#EA6021"
                />
                <BlockWithImageAndDropDownMenu
                    title="Преимущеcтва разработки на Tilda"
                    borderColor="#EA6021"
                    data={[
                        {
                            title: "Высокая скорость разработки сайта на Tilda",
                            description: "На реализацию небольшого проекта у специалистов нашего агентства уходит 2-3 недели. Конкретные сроки зависят от предпочтений заказчика в дизайне и поставленных им задач. "
                        },
                        {
                            title: "Широкие возможности для SEO продвижения",
                            description: "Далеко не все веб-ресурсы, собранные на конструкторах, пригодны для последующей поисковой оптимизации. В случае с Тильда этот минус отсутствует. Еще на этапе разработки мы помогаем настроить протокол HTTPS, получить сертификат SSL, заполнить метатеги, выставить редиректы, создать robots.txt."
                        },
                    ]}
                    firstBlock={
                        <div className="relative h-fit lg:max-w-[753px] block lg:min-w-[422px] lg:me-[30px]">
                            <Image
                                src='/resources/tilda6.png'
                                width={524}
                                height={543}
                                className="object-cover w-full"
                                alt="Почему выбирают CMS Joomla"
                            />
                            <div className="w-full flex justify-end absolute bottom-[15px] right-5 lg:right-3">
                                <a
                                    href="https://www.azstudio.agency/?ref=https://tilda.cc/ru/madeontilda/"
                                    rel="nofollow"
                                    target="_blank"
                                    className="max-h-[50px] max-w-[138px] px-[30px] py-[9px] lg:py-[10px] lg:px-[40px] w-fit mt-[20px] flex justify-center items-center bg-[#FAFAFA] rounded-full text-white"
                                >
                                    <span className="md:text-[22px] text-[16px] lg:text-[24px] text-black">Сайт</span>
                                </a>
                            </div>
                        </div>
                    }
                />
                <StandardMarginsLayout
                    styles="py-[50px] md:py-[56px] tilda-slider"
                    children={
                        <>
                            <div className="flex  flex-col xl:flex-row items-center justify-between">
                                <div className="bg-[#171717] xl:max-w-[528px] xl:translate-y-[16px] w-full text-white lg:p-[40px] px-[20px] py-[30px] flex flex-col rounded-[40px] xl:me-[39px]  mb-[30px]">
                                    <h1 className="text-[22px] md:text-[26px] lg:text-[32px] font-bold">Работать с нами выгодно и приятно</h1>
                                    <div className="flex space-x-3 items-center xl:justify-between mt-[25px] bg-[#242730] p-[20px]">
                                        <p className="text-[24px] lg:text-[36px] font-bold">10+</p>
                                        <p className="text-[16px] lg:text-[18px] font-medium">среднее количество запускаемых нами сайтов на Tilda в месяц</p>
                                    </div>
                                    <p className="text-[16px] lg:text-[18px] font-medium mt-[25px]">
                                        Разработаем по вашему запросу <a href='https://digitaldevils.by/landing' className='no-underline text-blue_main'>лендинг</a>, <a href='https://digitaldevils.by/website-catalog' className='no-underline text-blue_main'>электронный каталог</a>, <a href='https://digitaldevils.by/online-store' className='no-underline text-blue_main'>интернет-магазин</a>, <a href='https://digitaldevils.by/corporate-website' className='no-underline text-blue_main'>корпоративную визитку</a>.
                                    </p>
                                    <p className="text-[16px] lg:text-[18px] font-medium mt-[10px]">
                                        Наши сайты быстро индексируются, имеют продуманный интерфейс.
                                    </p>
                                </div>
                                <TildaSlider
                                    slides={
                                        [
                                            {
                                                image: '/resources/tilda_slide_1.png',
                                                title: "Разработка сайта для ветеринарной клиники",
                                                description: "Срок проекта",
                                                duration: "1 неделя",
                                                href: "https://lapkivet.tilda.ws/?ref=https://tilda.cc/ru/madeontilda/"
                                            },
                                            {
                                                image: '/resources/tilda_slide_2.png',
                                                title: "Разработка сайта для магазина украшений",
                                                description: "Срок проекта",
                                                duration: "2 недели",
                                                href: "https://giodiamonds.ru/?ref=https://tilda.cc/ru/madeontilda/"
                                            },
                                            {
                                                image: '/resources/tilda_slide_3.png',
                                                title: "Разработка сайта для магазина мебели",
                                                description: "Срок проекта",
                                                duration: "2 неделя",
                                                href: "https://lagomhome.ru/?ref=https://tilda.cc/ru/madeontilda/"
                                            },
                                        ]
                                    }
                                />
                            </div>
                        </>
                    }
                />
                <ColorfulBlock
                    title="Наш фокус - продуманные эффективные решения для вашего бизнеса"
                    bigTitle="С нами вы не преживаете"
                    titleCircleBgColor_1="#171717"
                    titleCircleBgColor_2="#171717"
                    text_1={
                        <div className="flex flex-col">
                            <p className="text-[18px] lg:text-[20px] font-bold mb-[10px]">
                                Комплексный подход к реализации проектов
                            </p>
                            <p className="text-[16px] lg:text-[18px] font-medium">
                                Все процессы студии оптимизированы - прежде чем создать сайт на Tilda оцениваем конкурентные преимущества продукта и особенности бизнеса. До мелочей продумываем
                                концепцию и прототип. Создаем дизайн с применением базовых блоков и авторских элементов.
                            </p>
                        </div>
                    }
                    text_2={
                        <div className="flex flex-col">
                            <p className="text-[18px] lg:text-[20px] font-bold mb-[10px]">
                                Предоставляем услуги технического сопровождения
                            </p>
                            <p className="text-[16px] lg:text-[18px] font-medium">
                                Готовый сайт передаем заказчику вместе с видео инструкцией, учетными данными для доступа к личному кабинету аккаунта. При необходимости наши мастера оперативно ответят
                                на возникающие вопросы, помогут с подключением сторонних сервисов и дополнительных инструментов.
                            </p>
                        </div>
                    }
                    description=""
                    imagePath={'/resources/tilda_colorfulblock.png'}
                    smallImagePath={'/resources/tilda_colorfulblock_small.png'}
                    BgColor="#EA6021"
                    isNotDark_1={true}
                    isNotDark_2={true}
                />
                <StandardMarginsLayout
                    styles={"py-[50px] md:py-[60px]"}
                    children={
                        <div className="flex flex-col">
                            <div className={`flex flex-col  justify-between lg:flex-row-reverse`}>
                                <div className="lg:block hidden rounded-[40px] xl:min-w-[640px] ms-[30px]">
                                    <Image src='/resources/tilda4.png' alt={"Разработка под ключ"} className="w-[99%] min-w-[500px]" width={641} height={320}/>
                                </div>
                                <div className="lg:max-w-[640px]">
                                    <h1 className="mb-[30px] font-bold text-[32px] lg:text-[60px]">Разработка под ключ</h1>
                                    <div className="block lg:hidden mb-[30px] mx-auto rounded-[40px]">
                                        <Image src='/resources/tilda_4_small.png' alt={"Разработка под ключ"} className="w-full" width={641} height={320}/>
                                    </div>
                                    <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                                        Отталкиваясь от особенностей и сферы вашего бизнеса, текущей ситуации на белорусском и международном рынке, мы не просто предлагаем создание сайтов на Tilda, а
                                        подбираем комплекс инструментов, технологий и интеграций, которые будут наиболее эффективно и качественно работать на увеличение продаж через интернет.
                                    </p>
                                    <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                                        Огромный опыт и высокая квалификация позволяют нам разрабатывать проекты под ключ любой сложности. Используем в работе все популярные CMS, фреймворки. По
                                        результатам
                                        нашего сотрудничества вы получаете полностью работоспособный веб-ресурс, на который не стыдно приглашать пользователей.
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                />
                <BlockWithListOfCurrentTechnologies
                    title="Мы используем актуальные технологии"
                    list={[
                        "Опираемся на экспертные знания в нишевых и сложных технология",
                        "Внедряем адаптивный дизайн под любые мобильные устройства и ПК",
                        "Выполняем индивидуальную верстку в редакторе",
                        "Создаем интерактивные прототипы, подбираем референсы",
                        "Позаботимся о текстовом контенте для людей и машин",
                        "Добавим на сайт видео, графику, анимацию",
                    ]}
                />
                <BlockApproach
                    mainTitle="Выбери подход, который нужен бизнесу"
                    leftBlock_p1="Один из главных плюсов создания сайтов на Tilda - выгодная цена готового ресурса."
                    leftBlock_p2="Чтобы рассчитать стоимость реализации вашего проекта - позвоните или напишите менеджерам Digital Devils. Итоговая сумма по договору рассчитывается индивидуально, в зависимости от целей заказчика, формата веб-ресурса, его структуры и функционала."
                    leftBlock_p3="Под каждый заказ мы формируем собственную команду, которая движется вперед в строгом соответствии с согласованным графиком работ и планом действий."
                    rightBlockTitle="Прозрачные цены"
                    rightBlockPrice="400$"
                    rightBlockList={["<a href='https://digitaldevils.by/' class='no-underline'>Разработка сайта под ключ</a>", "Правки", "Гайд пользования сайтом"]}
                    rightBlockImage={'/resources/tilda.svg'}
                    buttonColor="#EA6021"
                    arrowColor="orange"
                    bg_color="dark"
                />
                <HalfImageText
                    title={"Создаем сайты, которые помогают бизнесу"}
                    smallTitle={"Как увеличить количество заказов и повысить прибыль?"}
                    image='/resources/tilda_halfimagetext.png'
                    smallImage={'/resources/tilda_small_2.png'}
                    widthImage={640}
                    heightImage={280}
                    buttonColor="#EA6021"
                    buttonText="Связаться с нами"
                    description={
                        <>
                            <p className="font-bold text-[22px] mb-[10px]">
                                Специалисты Digital Devils знают, насколько важно присутствие в интернете для развития современного бизнеса
                            </p>
                            <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                                Своим клиентам мы предлагаем комплексные и персонализированные решения, позволяющие превращать идеи в успешные онлайн-проекты. На постоянной основе внедряем новейшие
                                методы и технологии, которые помогают вам быть лучше конкурентов, получать постоянный поток клиентов.
                            </p>
                            <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                                Мы не работаем “на поток”. К запуску каждого сайта подходим индивидуально и со всей ответственностью.
                            </p>
                        </>
                    }
                />
                <MainBlockTenth data={data}/>
            </BasicLayout>
        </>
    );
}

export default tilda;
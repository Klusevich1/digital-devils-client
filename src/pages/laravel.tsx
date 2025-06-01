import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React, { ReactNode } from "react";
import BasicLayout from "@/layouts/BasicLayout";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import TechnologiesTitleBlock from "@/components/TechnologiesTitleBlock";
import ColorfulBlock from "@/components/ColorfulBlock";
import Image, { StaticImageData } from "next/image";
import BlockApproach from "@/components/BlockApproach";
import HalfImageBlock from "@/components/HalfImageBlock";
import HalfImageText from "@/components/HalfImageText";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";

const PAGE_NAME = "laravel";
const BREADCRUMB_PAGE_NAME = "Laravel";

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
    title: "Какие сайты можно создавать на Laravel?",
    description: (
      <p>
        Востребованный среди программистов и разработчиков фреймворк
        используется для реализации нестандартных ресурсов любого формата с
        уникальной структурой, сложными правилами взаимодействия и модулями,
        создания серверной части веб-приложений.
      </p>
    ),
  },
  {
    title: "Какие сроки разработки сайтов на Laravel?",
    description: (
      <p>
        Время разработки зависит от разрабатываемого проекта, его сложности,
        функционала, особенностей дизайна и пожеланий. В среднем речь может идти
        о 2-6 месяцев.
      </p>
    ),
  },
  {
    title: "Можно ли на Laravel запустить интернет-магазин?",
    description: (
      <p>
        Да, но все типовые функции придется реализовывать с нуля. По этой
        причине, фреймворк задействуют для реализации непростых и долгосрочных
        проектов, рассчитанных на дальнейшее масштабирование и модернизацию.
      </p>
    ),
  },
];

const laravel = () => {
  return (
    <>
      <SEO
        title="Разработка сайта на Laravel | Цена на создание сайтов на Laravel в Минске"
        description="Разрабатываем сайты на Laravel, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего сайта на Laravel экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TechnologiesTitleBlock
          title={
            <>
              Разработка <br /> сайта на Laravel
            </>
          }
          description="Расскажите нам о своем проекты и мы подберем лучший вариант его реализации! Выполним разработку сайтов на Laravel под ключ и любой бюджет. "
          buttonColor="#FF2D20"
        />
        <HalfImageBlock
          title="Создаем сайты, которые помогают бизнесу"
          smallTitle="Laravel - один из лучших framework в мире"
          description={
            <p className="font-medium text-[18px] mb-[20px]">
              Специалисты Digital Devils разрабатывают{" "}
              <a
                href="https://digitaldevils.by/corporate-website"
                className="no-underline text-blue_main"
              >
                корпоративные сайты
              </a>
              ,{" "}
              <a
                href="https://digitaldevils.by/online-store"
                className="no-underline text-blue_main"
              >
                интернет-магазины
              </a>
              , личные блоги и портфолио на одном из самых популярных
              PHP-framework в Беларуси и мире. Laravel часто называют
              “фреймворком для ремесленников”. Он открывает перед программистами
              и дизайнерами абсолютную свободу творчества, позволяет воплощать в
              жизнь любые идеи.
            </p>
          }
          buttonColor="#FF2D20"
          buttonText="Обсудить проект"
          image={"/resources/laravel_half-image-block.png"}
          smallImage={"/resources/laravel_small.png"}
          isRevert={true}
          widthImage={636}
          heightImage={300}
        />
        <BlockWithImageAndDropDownMenu
          title="Чем Laravel лучше других PHP‑фреймворков"
          borderColor="#FF2D20"
          margin="py-[50px] md:py-[60px] "
          data={[
            {
              title: "Стандартные системные требования",
              description: [
                "Это значит, что для запуска сайтов на Ларавел подходят почти все хостинги, представленные на рынке Минска и РБ.",
              ],
            },
            {
              title: "Простота в управлении и масштабируемость",
              description: [
                "Поможем настроить административную панель под вас и вашу команду. Управлять сайтами на Laravel просто и комфортно. В будущем для расширения системы можно подключить новые функции и опции.",
              ],
            },
            {
              title: "Гибкий и широкий функционал",
              description: [
                "Встроенные инструменты и возможности системы позволяют выстраивать структуру и дизайн под конкретные запросы заказчика. Границ практически нет!",
              ],
            },
          ]}
          firstBlock={
            <div className="relative h-fit lg:max-w-[753px] block lg:min-w-[422px] lg:me-[30px]">
              <Image
                src={"/resources/laravel6.png"}
                width={524}
                height={543}
                className="object-cover w-full"
                alt="Чем Laravel лучше других PHP‑фреймворков"
              />
              <div className="w-full flex justify-end absolute bottom-[15px] right-5 lg:right-3">
                <a
                  href="https://shelbygrooming.ru/"
                  rel="nofollow"
                  target="_blank"
                  className="max-h-[50px] max-w-[138px] px-[30px] py-[9px] lg:py-[10px] lg:px-[40px] w-fit mt-[20px] flex justify-center items-center bg-[#171717] rounded-full text-white"
                >
                  <span className="md:text-[22px] text-[16px] lg:text-[24px]">
                    Сайт
                  </span>
                </a>
              </div>
            </div>
          }
        />
        <HalfImageText
          isOnlyBottomPadding={false}
          title={"Разработка под ключ"}
          smallTitle={"Как увеличить количество заказов и повысить прибыль?"}
          image={"/resources/laravel_halfimagetext.png"}
          smallImage={"/resources/laravel_small2.png"}
          widthImage={640}
          heightImage={300}
          buttonColor="#FF2D20"
          buttonText="Связаться с нами"
          description={
            <>
              <p className="font-bold text-[22px] mb-[10px]">
                Команда Digital Devils осознанно и ответственно подходит к
                работе с каждым клиентом.
              </p>
              <p className="font-medium text-[18px] mb-[10px]">
                Мы кастомизируем процессы под проекты, тратим попусту время и
                ресурсы. Ежедневно к нам обращаются заказчика из Минска и других
                городов Беларуси с разными запросами и все они получают
                оптимальные именно для них решения. Не используем шаблоны.
              </p>
              <p className="font-medium text-[18px] mb-[10px]">
                <a
                  href="https://digitaldevils.by/"
                  className="no-underline text-blue_main"
                >
                  Создаем сайты
                </a>{" "}
                на Laravel с нуля и под ключ: от обсуждения возможных идей и
                составления стратегии до переноса ресурса на хостинг. С помощью
                современных технологий и собственных наработок совершенствуем
                уже существующие проекты, предоставляем услуги технической
                поддержки.
              </p>
            </>
          }
        />
        <BlockApproach
          mainTitle="Стоимость разработки на Laravel"
          leftBlock_p1="Итоговая цена проектов на Laravel рассчитывается с учетом формата и масштаба будущего сайта, желаемого функционала, существующих требований к интеграции и адаптации."
          leftBlock_p2="В нашей компании действует честная и прозрачная ценовая политика, основанная на актуальных тенденциях рынка. Осуществляем разработку под любые запросы. Интернет-магазин, корпоративный портал, <a href='https://digitaldevils.by/information-site' class='no-underline text-blue_main'>информационный ресурс</a> или веб-приложение — в Ларавел есть инструменты под эти задачи и многие другие задачи."
          leftBlock_p3=""
          rightBlockTitle="Прозрачные цены"
          rightBlockPrice="400$"
          rightBlockList={[
            "Разработка сайта под ключ",
            "Правки",
            "Гайд пользования сайтом",
          ]}
          rightBlockImage={"/resources/laravel_logo.svg"}
          buttonColor="#FF2D20"
          arrowColor="orange"
          bg_color="dark"
        />
        <ColorfulBlock
          bigTitle="Почему сегодня выбирают Laravel"
          title="Если вы решили заказать разработку сайта на Laravel команде Digital Devils, вы получаете"
          titleCircleBgColor_1="#FAFAFA"
          titleCircleBgColor_2="#FAFAFA"
          text_1={
            <p className="font-medium text-[18px]">
              Готовое к публикации в сети решение, способное работать на пользу
              вашему бизнесу
            </p>
          }
          text_2={
            <p className="font-medium text-[18px]">
              Эффективную настройку ресурса под{" "}
              <a href="/seo" className="text-blue_main">SEO продвижение в поисковых системах</a>
            </p>
          }
          description="Гарантийную поддержку и техническое сопровождение - при появлении вопросов, вы всегда можете обратиться к нам за помощью."
          imagePath={"/resources/laravel_colorfulblock.png"}
          smallImagePath={"/resources/laravel_colorfulblock_small.png"}
          BgColor="#FF2D20"
        />
        <MainBlockTenth isOnlyBottomPadding={false} data={data} />
      </BasicLayout>
    </>
  );
};

export default laravel;

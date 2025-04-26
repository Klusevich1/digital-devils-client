import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import BasicLayout from "@/layouts/BasicLayout";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import TechnologiesTitleBlock from "@/components/TechnologiesTitleBlock";
import ColorfulBlock from "@/components/ColorfulBlock";
import BlockApproach from "@/components/BlockApproach";
import HalfImageBlock from "@/components/HalfImageBlock";
import HalfImageText from "@/components/HalfImageText";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

const PAGE_NAME = "joomla";
const BREADCRUMB_PAGE_NAME = "Joomla";

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
    title:
      "Существуют ли ограничения по количеству страниц, разделов, категорий и товаров при разработке интернет-магазина на Joomla?",
    description: (
      <p className="text-[18px] ">
        Нет, на платформе нет никаких ограничений по объему и размеру контента.
      </p>
    ),
  },
  {
    title:
      "Что требуется от меня для оформления заказа на создание сайта на Джумла?",
    description: (
      <p className="text-[18px] ">
        Будьте готовы рассказать нам о своем видении и концепции будущем
        веб-ресурса. Все остальные моменты: от регистрации домена до запуска
        готового сайта и его настройку под СЕО-продвижения мы возмем на себя.
      </p>
    ),
  },
  {
    title: "Предоставляете ли вы услуги сопровождения и технической поддержки?",
    description: (
      <p className="text-[18px] ">
        Да, в течение двух месяцев после запуска сайта мы оказываем
        информационную и консультационную помощь по гарантии. О возможности
        дальнейшей поддержки и администрировании ресурса уточните у наших
        менеджеров.
      </p>
    ),
  },
];

const joomla = () => {
  return (
    <>
      <SEO
        title="Разработка сайта на Joomla | Цена на создание сайтов на Joomla в Минске"
        description="Разрабатываем сайты на Joomla, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего сайта на Joomla экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TechnologiesTitleBlock
          title={
            <>
              Разработка <br /> сайта на Joomla
            </>
          }
          description="Закажите сайт на гибкой, понятной и бесплатной CMS Joomla в студии Digital Devils. Разрабатываем лендинги, визитки, интернет-магазины под ключ."
          buttonColor="#345CFF"
        />
        <StandardMarginsLayout
          styles=""
          children={
            <div className="flex flex-col">
              <div
                className={`flex flex-col  justify-between lg:flex-row-reverse`}
              >
                <div className="lg:flex w-full justify-start hidden rounded-[40px] lg:max-w-[445px] ms-[30px]">
                  <Image
                    src={"/resources/joomla4.png"}
                    alt={"Разработка под ключ"}
                    className="max-w-[371px] max-h-[371px]"
                    width={371}
                    height={371}
                  />
                </div>
                <div className="lg:max-w-[640px]">
                  <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                    Разработка под ключ
                  </h2>
                  <div className="block lg:hidden mb-[30px] mx-auto rounded-[40px]">
                    <Image
                      src={"/resources/joomla4.png"}
                      alt={"Разработка под ключ"}
                      className="w-full"
                      width={371}
                      height={371}
                    />
                  </div>
                  <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                    Команды специалистов Digital Devils выполнят разработку
                    профессиональной сайтов любой сложности на Joomla - одной из
                    самых популярных систем управления контентом в Беларуси.
                  </p>
                  <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                    Воплощаем в жизнь любые дизайнерские идеи и функциональные
                    возможности. Создаем по запросу наших клиентов блоги,{" "}
                    <a
                      href="https://digitaldevils.by/online-store"
                      className="no-underline text-blue_main"
                    >
                      интернет-магазины
                    </a>
                    ,{" "}
                    <a
                      href="https://digitaldevils.by/website-catalog"
                      className="no-underline text-blue_main"
                    >
                      электронные каталоги
                    </a>
                    ,
                    <a
                      href="https://digitaldevils.by/landing"
                      className="no-underline text-blue_main"
                    >
                      одностраничные
                    </a>
                    и многостраничные{" "}
                    <a
                      href="https://digitaldevils.by/portal"
                      className="no-underline text-blue_main"
                    >
                      корпоративные порталы
                    </a>
                    . Мы знаем, как сделать так, чтобы ваш сайт был
                    привлекателен и полезен для пользователей, функционировал
                    без сбоев и ошибок.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        <BlockWithImageAndDropDownMenu
          title="Почему выбирают CMS Joomla"
          borderColor="#345CFF"
          margin="pb-0 py-[50px] md:py-[60px] "
          data={[
            {
              title: "Простота использования",
              description: [
                "Joomla - это интуитивно понятная система управления контентом. Конструктор платформы позволяет быстро создавать, редактировать и публиковать контент даже без знания программирования.",
              ],
            },
            {
              title: "Масштабируемость и гибкость",
              description: [
                "На базе CMS можно <a href='https://digitaldevils.by/' class='no-underline text-blue_main'>создавать сайты любой сложности</a>. В системе имеется множество расширений, которые позволяет масштабировать и изменять уже функционирующий\t ресурс по мере развития бизнеса.",
              ],
            },
            {
              title: "Постоянное развитие",
              description: [
                "Движок и его расширения обновляются на постоянной основе - актуальные тенденции в дизайне и веб-разработке оперативно реализуются на Joomla. Проблемы, связанные с безопасностью оперативно устраняются.",
              ],
            },
          ]}
          firstBlock={
            <div className="relative h-fit lg:max-w-[753px] block lg:min-w-[422px] lg:me-[30px]">
              <Image
                src={"/resources/joomla6.png"}
                width={524}
                height={543}
                className="object-cover w-full"
                alt="Почему выбирают CMS Joomla"
              />
              <div className="w-full flex justify-end absolute bottom-[15px] right-5 lg:right-3">
                <a
                  href="https://siciliaflowers.ru/"
                  rel="nofollow"
                  target="_blank"
                  className="max-h-[50px] max-w-[138px] px-[30px] py-[9px] lg:py-[10px] lg:px-[40px] w-fit mt-[20px] flex justify-center items-center bg-[#FF4C61] rounded-full text-white"
                >
                  <span className="md:text-[22px] text-[16px] lg:text-[24px] text-white">
                    Сайт
                  </span>
                </a>
              </div>
            </div>
          }
        />
        <HalfImageText
          isOnlyBottomPadding={false}
          title={"Самое время начать"}
          image={"/resources/joomla5.png"}
          smallImage={"/resources/joomla_small2.png"}
          widthImage={528}
          heightImage={300}
          smallTitle={
            "Разработка сайта на Joomla - комплексная задача, решение которой требует индивидуального подхода."
          }
          buttonColor="#345CFF"
          buttonText="Связаться с нами"
          description={
            <>
              <p className="font-bold text-[18px] lg:text-[22px] mb-[10px]">
                По результатам сотрудничества с Digital Devils вы получаете
                простой в администрировании и визуально привлекательный ресурс с
                набором самых необходимых функций и компонентов:
              </p>
              <ul className="my-[20px]">
                {[
                  " Уникальный текстовый контент, видео, фотографии",
                  " Формы обратной связи, различные кнопки, ссылки на социальные сети и мессенджеры",
                  " Разделы с ознакомительной информацией о компании и продукте, контактных данных",
                ].map((item, idx) => (
                  <li key={idx}>
                    <span className="text-custom_yellow text-[16px] lg:text-[18px] font-medium">
                      /
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </>
          }
        />
        <BlockApproach
          mainTitle="Создаем сайты, которые помогают бизнесу"
          leftBlock_p1="Заказать разработку сайта на Джумле может владелец любого бизнеса из Минска и Беларуси: небольшой фирмы, интернет-магазина, крупного регионального предприятия или международной корпорации. "
          leftBlock_p2="CMS платформа отличается гибкостью и интуитивно понятным интерфейсом, что позволяет нашим заказчикам вести свой ресурс самостоятельно, без привлечения сторонних специалистов."
          leftBlock_p3=""
          rightBlockTitle="Прозрачные цены"
          rightBlockPrice="400$"
          rightBlockList={[
            "Разработка сайта под ключ",
            "Правки",
            "Гайд пользования сайтом",
          ]}
          rightBlockImage={"/resources/jomla_logo.svg"}
          buttonColor="#345CFF"
          arrowColor="blue"
          bg_color="dark"
        />
        <ColorfulBlock
          title="Студия Digital Devils имеет огромный опыт в разработке, запуске, SEO оптимизации и технической поддержки сайтов на Joomla"
          bigTitle="Сайт на Joomla под ключ"
          titleCircleBgColor_1="#171717"
          titleCircleBgColor_2="#171717"
          text_1={
            <p className="text-[16px] lg:text-[18px]">
              С каждым клиентом мы стараемся выстраивать взаимовыгодные и
              доверительные отношения.
            </p>
          }
          text_2={
            <p className="text-[16px] lg:text-[18px]">
              Ориентируемся в своей работе на белорусские и европейские
              стандарты, специфику местных рынков сбыта.
            </p>
          }
          description="Внимательно следим за обновлениями и тенденциями развития веб-разработки на Джумла. Используем инновационные технологии, разнообразные инструменты, специальные и универсальные сервисы. Предоставляем официальную гарантию на каждый заказ."
          imagePath={"/resources/joomla_colorfulblock.png"}
          smallImagePath={"/resources/joomla_colorfulblock_small.png"}
          BgColor="#345CFF"
          isNotDark_1={true}
          isNotDark_2={true}
        />

        <HalfImageBlock
          isOnlyBottomPadding={false}
          title="Мы разрабатываем - Вы наблюдаете"
          smallTitle="Сколько стоит создать информационный сайт с нуля?"
          description={
            <p className="font-medium text-[18px] mb-[20px]">
              Цена разработки сайтов на Джумла рассчитывается индивидуально под
              конкретные проекты. Итоговая стоимость будет зависеть от ряда
              факторов: сложности и особенностей заказа, формата, структуры,
              количества страниц, функционала ресурса, необходимости в получении
              дополнительных услуг: выбор и оформление домена, размещение сайта
              на хостинге, антивирусная защита.
            </p>
          }
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/joomla_half-image-text.png"}
          smallImage={"/resources/joomla_half-image-text.png"}
          isImageCenter={true}
          widthImage={343}
          heightImage={360}
        />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default joomla;

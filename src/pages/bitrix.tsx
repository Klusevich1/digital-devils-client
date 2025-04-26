import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import BasicLayout from "@/layouts/BasicLayout";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import TechnologiesTitleBlock from "@/components/TechnologiesTitleBlock";
import ColorfulBlock from "@/components/ColorfulBlock";
import BlockApproach from "@/components/BlockApproach";
import HalfImageBlock from "@/components/HalfImageBlock";
import Image from "next/image";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import BlockWithListOfCurrentTechnologies from "@/components/BlockWithListOfCurrentTechnologies";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

const PAGE_NAME = "bitrix";
const BREADCRUMB_PAGE_NAME = "1C Битрикс";

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
    title: "Как быть, если недостаточно базовых функций Битрикс?",
    description: (
      <p className="text-[18px] ">
        Расширить стандартный функционал веб-ресурса можно с помощью встроенных
        модулей и блоков, полезных сторонних инструментов из маркетплейса
        платформы.
      </p>
    ),
  },
  {
    title: "Созданием каких сайтов на 1С Битрикс вы занимаетесь?",
    description: (
      <p className="text-[18px] ">
        Мы воплощаем в жизнь любые идеи и проекты. Коммерческий движок подходит
        для разработки лендингов, корпоративных порталов, визиток,
        интернет-магазинов, информационные ресурсов.
      </p>
    ),
  },
  {
    title: "Насколько безопасен магазин на 1C Bitrix?",
    description: (
      <p className="text-[18px] ">
        Разработчики CMS прилагают немало сил для обеспечения сайтов, созданных
        на базе платформы. Готовые ресурсы отлично защищены от хакерских атак и
        взломов. Являются надежными решениями в плане сохранения
        конфиденциальности и неприкосновенности пользовательской информации.
      </p>
    ),
  },
];

const bitrix = () => {
  return (
    <>
      <SEO
        title="Разработка интернет-магазина на 1С-Битрикс | Цена на создание сайтов на Bitrix в Минске"
        description="Разрабатываем интернет-магазины на 1С-Битрикс, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего сайта на 1С-Битрикс экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TechnologiesTitleBlock
          title={
            <>
              Разработка <br /> сайта на 1С Битрикс
            </>
          }
          description="Выполняем индивидуальную разработку сайтов на 1С Битрикс под ключ. Учитываем требования и ожидания заказчиков. Реализуем проекты любой сложности."
          buttonColor="#00BAFF"
        />
        <WideBlockWithImage
          title="Создаем только продающие сайты"
          text_1="1С-Битрикс - одна из самых популярных CMS систем в Минске и Беларуси, которая отлично подходит для создания практически любых сайтов: <a href='https://digitaldevils.by/corporate-website' class='no-underline text-blue_main'>корпоративные порталы</a>, <a href='https://digitaldevils.by/information-site' class='no-underline text-blue_main'>информационные ресурсы</a>, <a href='https://digitaldevils.by/online-store' class='no-underline text-blue_main'>интернет-магазины</a>, <a href='https://digitaldevils.by/website-catalog' class='no-underline text-blue_main'>каталоги</a>, <a href='https://digitaldevils.by/card-website' class='no-underline text-blue_main'>визитки</a>."
          text_2="Аттестованные bitrix-разработчики Digital Devils, знают, как найти и подобрать инструменты и технологии для решения даже самых сложных и нестандартных задач бизнеса. Создадим продающий сайт с нуля. Добавим функции, выполним интеграции и доработку уже существующих ресурсов. Настроим платформу для удобного управления, SEO-продвижения и активных продаж."
        />
        <StandardMarginsLayout
          styles="py-[50px] md:py-[60px]"
          children={
            <div className="flex flex-col">
              <div
                className={`flex flex-col  justify-between lg:flex-row-reverse`}
              >
                <div className="lg:block hidden rounded-[40px] xl:min-w-[640px] ms-[30px]">
                  <Image
                    src={"/resources/bitrix5.png"}
                    alt={"Разработка под ключ"}
                    className="w-[99%] min-w-[500px]"
                    width={639}
                    height={300}
                  />
                </div>
                <div className="lg:max-w-[640px]">
                  <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                    Разработка под ключ
                  </h2>
                  <div className="block lg:hidden mb-[30px] mx-auto rounded-[40px]">
                    <Image
                      src={"/resources/bitrix_5_small.png"}
                      alt={"Разработка под ключ"}
                      className="w-full"
                      width={641}
                      height={320}
                    />
                  </div>
                  <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                    Создание интернет-магазина на Битрикс под ключ - это
                    стабильная и надежная работа проекта, продуманный до мелочей
                    интерфейс, удобный функционал, высокая посещаемость.
                  </p>
                  <p className="font-medium text-[18px] lg:text-[20px] mb-[10px]">
                    Огромный опыт и квалификация мастеров Digital Devils в
                    сочетании с передовыми инструментами и авторскими
                    наработками позволяют нам в короткое сроки запускать не
                    только визуально привлекательные ресурсы, но и максимально
                    эффективные с точки зрения интернет-маркетинга и
                    SEO-продвижения. Конкретные сроки реализации зависят от
                    сложности заказа и могут составлять от нескольких недель до
                    нескольких месяцев.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        <BlockWithImageAndDropDownMenu
          title="Почему выбирают CMS 1С Битрикс"
          borderColor="#00BAFF"
          data={[
            {
              title: "Универсальная платформа для сайтов любого формата",
              description: [
                "CMS подходит подходит для создания сайтов любой сложности и тематики.",
              ],
            },
            {
              title: "Надежная и стабильная работа",
              description: [
                "Ресурсы на Битрикс загружаются без сбоев и задержек даже во время пиковой посещаемости.",
              ],
            },
            {
              title: "Гибкость и масштабируемость",
              description: [
                "По мере развития бизнеса сайт можно дорабатывать, изменять, добавлять на него новые возможности, интеграции, разделы.",
              ],
            },
            {
              title: "Встроенные инструменты веб-аналитики",
              description: [
                "Функционал и возможности 1С Битрикс позволяют оптимизировать веб-ресурсы под ключевые бизнес-задачи, упрощают запуск рекламы и продвижения.",
              ],
            },
          ]}
          firstBlock={
            <div className="relative h-fit lg:max-w-[753px] block lg:min-w-[422px] lg:me-[30px]">
              <Image
                src={"/resources/bitrix6.png"}
                width={524}
                height={543}
                className="object-cover w-full"
                alt="Почему выбирают CMS 1С Битрикс"
              />
              <div className="w-full flex justify-end absolute bottom-[15px] right-5 lg:right-3">
                <a
                  href="https://www.myvis.ru/?srsltid=AfmBOoquvbRv_NUZUR6cOYVL2OjamMyDgOFUZe3Fq7kK1QmImKB5S6iL"
                  rel="nofollow"
                  target="_blank"
                  className="max-h-[50px] max-w-[138px] px-[30px] py-[9px] lg:py-[10px] lg:px-[40px] w-fit mt-[20px] flex justify-center items-center bg-[#FAFAFA] rounded-full text-white"
                >
                  <span className="md:text-[22px] text-[16px] lg:text-[24px] text-black">
                    Сайт
                  </span>
                </a>
              </div>
            </div>
          }
        />
        <BlockApproach
          isOnlyBottomPadding={true}
          mainTitle="Создаем сайты, которые помогают бизнесу"
          leftBlock_p1="Разработчики, программисты, дизайнеры и менеджеры Digital Devils - говорят с заказчиками на одном языке."
          leftBlock_p2="Никаких сложных терминов и непонятных цифр - все четко, прозрачно и понятно. В основе сотрудничества с каждым клиентом - индивидуальный и взвешенный подход."
          leftBlock_p3="Наши сайты на 1С Bitrix работают и продают 24 на 7. Вы можете доверить нам решение любой задачи - мы подберем технологии, модули, плагины и инструменты, учтем все важные нюансы развития вашего бизнеса в интернете."
          rightBlockTitle="Прозрачные цены"
          rightBlockPrice="400$"
          rightBlockList={[
            "Разработка сайта под ключ",
            "Правки",
            "Гайд пользования сайтом",
          ]}
          rightBlockImage={"/resources/bitrix_logo.svg"}
          buttonColor="#00BAFF"
          arrowColor="light_blue"
          bg_color="light_green"
          isWide={true}
        />
        <BlockWithListOfCurrentTechnologies
          title="Мы используем актуальные технологии"
          list={[
            "Выполняем прототипирование, подготовку современного и креативного дизайна",
            "Реализуем адаптивную верстку под разные разрешения и браузеры",
            "Наполняем сайт уникальным контентом под ключевые SEO запросы",
            "Гарантируем высокое качество кода и профессиональную настройку платформы",
            "Предоставляем техническую поддержку запущенных сайтов",
          ]}
          isOnlyBottomPadding={false}
        />
        <ColorfulBlock
          bigTitle="Преимущеcтва 1С Битрикс"
          title=""
          showText={false}
          titleCircleBgColor_1="none"
          titleCircleBgColor_2="none"
          text_1={<></>}
          text_2={<></>}
          description={
            <>
              <p className="text-[16px] lg:text-[18px] mb-[5px]">
                Bitrix постоянно обновляется и совершенствуется, разработчик
                системы добавляет в нее новые модули, сервисы и инструменты.
              </p>
              <p className="text-[16px] lg:text-[18px]">
                По умолчанию в CMS встроена защита от вирусов, автоматическое
                создание резервных копий и восстановления веб-ресурсов в случае
                сбоев. В зависимости от потребностей бизнеса к сайту можно
                подключать сторонние программы для управления заказами,
                персоналом, выгрузки товаров, обновления прайс-листов,
                оформления документов.
              </p>
            </>
          }
          imagePath={"/resources/bitrix_colorfulblock.png"}
          smallImagePath={"/resources/bitrix_colorfulblock_small.png"}
          BgColor="#00BAFF"
          isNotDark_1={true}
          isNotDark_2={true}
        />
        <HalfImageBlock
          isOnlyBottomPadding={false}
          title="Мы разрабатываем - Вы наблюдаете"
          smallTitle="Итоговая цена создания сайта на Bitrix рассчитывается в соответствии с требованиями заказчика к функциональности, программным модулям, интеграциям."
          description={
            <p className="font-medium text-[18px] mb-[20px]">
              Студия Digital Devils выполняем все работы: от проектирования
              структуры до размещения на хостинге готового проекта и выставления
              основных настроек для SEO продвижения и привлечения заявок.
            </p>
          }
          buttonColor="#00BAFF"
          buttonText="Обсудить проект"
          image={"/resources/bitrix_half-image-block.png"}
          smallImage={"/resources/bitrix_half-image-block.png"}
          widthImage={529}
          heightImage={361}
        />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default bitrix;

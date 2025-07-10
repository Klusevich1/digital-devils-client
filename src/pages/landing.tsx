import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TitleBlock } from "@/components/TitleBlock";
import { ChooseTheRightOneBlock } from "@/components/ChooseTheRightOneBlock";
import { WhiteMediumImageBlock } from "@/components/WhiteMediumImageBlock";
import { StagesOfWorkBlock } from "@/components/StagesOfWorkBlock";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import MainBlockFive from "@/components/MainBlockFive";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import CaseBlock from "@/components/CaseBlock";
import Image from "next/image";
import QuizBlock from "@/components/QuizBlock";
import PricingPlansBlock from "@/components/PricingPlansBlock";
import { FaCircleChevronRight } from "react-icons/fa6";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Landing page", link: "/landing" },
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
    name: "Landing page",
    item: "https://digitaldevils.by/landing",
  },
];

const data: DataItem[] = [
  {
    title: "Можно ли будет добавить страницы на лендинг?",
    description: (
      <p>
        Да, в будущем лендинг можно расширить: добавить разделы и новые функции,
        переработать в более сложный по структуре сайт.
      </p>
    ),
  },
  {
    title: "Что нужно учесть при разработке продающего лендинга?",
    description: (
      <p>
        В большинстве случаев лендинги создаются по определенной структуре, от
        которой зависит их конверсия. При заказе сайте заранее продумайте УТП,
        подготовьте реальные отзывы и призыв к действию, подберите
        привлекательные фото или видео для рекламы вашего продукта. 
      </p>
    ),
  },
  {
    title: "От чего зависит стоимость создания лендинга?",
    description: (
      <p>
        При ценообразовании одностраничных продающих сайтов учитывается
        множество факторов: дизайн, сроки, функционал, контент, качество
        исходных файлов и т.д.
      </p>
    ),
  },
];

const quizQuestions = [
  {
    title: "Какую основную задачу должен решать ваш будущий лендинг?",
    options: [
      "Привлечение клиентов / заявок",
      "Продажа конкретного продукта или услуги",
      "Презентация компании / проекта",
      "Другое (опишите)",
    ],
    textField: "Опишите задачу",
  },
  {
    title: "Что вы хотите, чтобы посетитель сделал на лендинге?",
    options: [
      "Оставил заявку",
      "Купил продукт",
      "Ознакомился с услугами",
      "Подписался / зарегистрировался",
      "Что-то другое (уточните)",
    ],
    textField: "Опишите задачу",
  },
  {
    title: "Насколько чётко у вас сформулирована идея лендинга?",
    options: [
      "Всё готово, нужен исполнитель",
      "Есть концепция, нужно доработать",
      "Пока только общее понимание",
      "Ищу человека, который поможет с идеей",
    ],
  },
  {
    title: "Когда вы хотите запустить лендинг?",
    options: [
      "Уже вчера",
      "В течение 1–2 недель",
      "В ближайший месяц",
      "Пока без сроков, просто собираю информацию",
    ],
  },
  {
    title: "Где вам удобнее его получить?",
    options: ["Telegram", "Viber", "WhatsApp", "Звонок"],
  },
];

const landing = () => {
  return (
    <>
      <SEO
        title="Разработка landing page | Цена на создание однастроничного сайта"
        description="Создаем продающие одностраничные сайты, которые выделяют ваш бизнес среди конкурентов.
Стильный дизайн, передовые технологии и адаптивность —
ваши клиенты оценят каждый клик. Доверяйте разработку своего landing page экспертам и получите сайт,
который работает на ваш успех!"
        canonical="https://digitaldevils.by/landing"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TitleBlock
          title="Разработка Landing Page"
          description="Созднание одностраничных сайтов с нешаблонным дизайном и эффективными маркетинговыми решениями для высокой конверсии, целевой лидогенерации и роста продаж"
          imagePath="/resources/landing_title.png"
          hasQuiz={true}
          adText="Разработка продающего лендинга"
        />
        <QuizBlock
          quizQuestions={quizQuestions}
          page="Landing"
          title="Забронируйте скидку 10% на разработку сайта"
          description="Ответьте на 5 простых вопросов — и получите персональную скидку 10% на разработку своего будущего сайта."
          padding="mb-[50px] sm:mb-[60px]"
        />
        <StandardMarginsLayout
          styles="pb-[50px] md:pb-[60px]"
          children={
            <>
              <div
                className={`flex md:flex-row flex-col justify-between flex-wrap`}
              >
                <div className="w-full  mb-[30px]">
                  <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold">
                    Уникальный дизайн и функционал
                  </h2>
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-between lg:gap-[20px] mb-[30px]">
                  <p className="text-[22px] lg:text-[24px] mb-[10px] font-bold lg:max-w-[586px] lg:w-1/2">
                    Закажите создание продающего сайта и получайте новых
                    клиентов 24/7 даже, когда спите!
                  </p>
                  <p className="text-[18px] lg:text-[20px] text-blue_main lg:max-w-[640px] lg:w-1/2">
                    «Если вашего бизнеса нет в интернете, то вас нет в бизнесе!»
                    Разработка Landing Page - отличное решение, если вам нужно
                    быстро и недорого получить эффективный инструмент для
                    привлечения новых клиентов, генерации лидов, роста прибыли.
                  </p>
                  {/*<p className="text-blue_main font-bold mb-[20px]">{blueText}</p>*/}
                </div>
                <div className="w-full flex justify-between">
                  <div className="hidden lg:flex justify-center md:w-5/12">
                    <Image
                      src="/resources/landing_image.png"
                      width={377}
                      height={396}
                      className="object-cover"
                      alt={"Уникальный дизайн и функционал"}
                    />
                  </div>
                  <div className="lg:block flex flex-col items-center lg:max-w-[638px] text-[18px]  lg:md:w-6/12">
                    <div className=" lg:hidden block mb-[30px] lg:w-5/12">
                      <Image
                        src="/resources/landing_image.png"
                        width={544}
                        height={519}
                        className="object-cover"
                        alt={"Уникальный дизайн и функционал"}
                      />
                    </div>
                    <h2 className="text-[22px] lg:text-[32px] font-bold lg:mb-[20px] mb-[10px] w-full">
                      Команда профессиональных разработчиков Digital Devils
                    </h2>
                    <p className="text-[16px] lg:text-[18px] mb-[20px]">
                      За 5-14 дней создадим продающий одностраничный сайт,
                      посадочную страницу для портфолио, запуска продаж или
                      просто сбора заявок. Мы работаем с заказчиками из Минска и
                      других городов Беларуси независимо от их масштаба. Знаем,
                      как продвигать в сети товары и услуги практически в любой
                      сфере деятельности: от строительства до изготовления
                      капкейков.
                    </p>
                    <a
                      href="/application"
                      rel="nofollow"
                      className="px-[30px] py-[10px] lg:max-w-72 lg:w-fit w-full flex justify-center items-center  bg-blue_main rounded-full text-white"
                    >
                      <span className="text-[18px] font-medium">
                        Связаться с нами
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <CaseBlock
          bigTitle="Одностраничный сайт для вашего бизнеса"
          smallTitle=""
          text={
            <div className="">
              <p className="text-[22px] mb-[10px] font-bold">
                Landing Page (лендинг пейдж) - одностраничный сайт, мотивирующий
                пользователей из сети на совершение конкретного действия.
              </p>
              <p className="text-[18px] mb-[20px]">
                Его основная задача - заинтересовать посетителя уникальным
                коммерческим предложением. Лендинг, как инструмент продвижения
                бренда, товаров, услуг, должен присутствовать в портфеле каждой
                современной компании, нацеленной на развитие.
              </p>
              <p className="text-[20px] mb-[10px] font-medium">
                Запуск посадочной страницы с простой и понятной структурой,
                удобной навигацией, продуманным интерфейсом позволяет:
              </p>
              <ul>
                <li className="flex flex-row gap-1">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>
                  Увеличивать средний чек и продажи
                </li>
                <li className="flex flex-row gap-1">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>
                  Быстро и понятно рассказывать потенциальным покупателям о
                  продукте и компании
                </li>
                <li className="flex flex-row gap-1">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>
                  Поднимать уровень доверия к бренду и товару
                </li>
                <li className="flex flex-row gap-1">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>
                  Улучшать экспертность персонала и повышать количество сделок
                </li>
                <li className="flex flex-row gap-1">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>
                  Формировать положительный имидж фирмы
                </li>
                <li className="flex flex-row gap-1">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>
                  Привлекать новых клиентов и удерживать уже имеющихся
                </li>
              </ul>
            </div>
          }
          imagePath="/resources/landing-case.png"
          margin="pb-[50px] md:pb-[60px]"
          buttonText="Сделать лендинг"
          isRevert={true}
        />

        <StagesOfWorkBlock
          title="Этапы работы"
          data={[
            {
              title: "Маркетинговое исследование и анализ",
              text: "Изучаем специфику и особенности бизнеса заказчика. Определяем конкурентные преимущества бренда и товара, выгоды для клиентов.",
              circles: 1,
            },
            {
              title: "Проектирование структуры и написание продающих текстов",
              text: "Под нашим чутким руководством каждый элемент сайта будет продвигать продукт, подталкивать посетителя к покупке и принятию нужного решения. При подготовке текстового контента мы оперируем фактами, а не мнениями, поэтому нашим текстам доверяют поисковые системы и пользователи.",
              circles: 2,
            },
            {
              title: "Создание дизайна, анимации, элементов рефлексии",
              text: 'Разрабатываем интерфейс продающего сайта, который максимально полно раскроет преимущества продукта и бренда. Не забудем об элементах рефлексии, благодаря чему лендинг получится "живым" и интерактивным.',
              circles: 3,
            },
            {
              title: "Адаптивная верстка",
              text: "Проведем оптимизацию макета и дизайна так, чтобы одностраничник отлично работал и выглядел на всех устройствах, разрешениях и браузерах. Сверстаем все блоки, настроим элементы анимации, продумаем формы обратной связи, привяжем телефон для быстрых звонков.",
              circles: 4,
            },
            {
              title: "Интеграции и аналитика",
              text: "Настроим аналитику, которая позволит отслеживать все заявки с сайта. Вы будете знать с точностью до процента какова конверсия продающей страницы, во сколько вам обходится каждый лид. Привяжем лендинг к CRM-системе, подключим онлайн-кассы. Проработаем первичную <a href='/seo' class='text-blue_main'>SEO оптимизацию под Google и Яндекс</a>.",
              circles: 5,
            },
            {
              title: "Тестирование и запуск",
              text: "Проведем тестирование площадки на ошибки и баги, быстро устраним выявленные недочеты. Перенесем лендинг на выбранный заказчиком хостинг. Запустим одностраничник в работу. Предоставляем услуги технического сопровождения.",
              circles: 6,
            },
          ]}
          text={
            <>
              <p className="text-[18px] font-bold max-w-[867px]">
                За прошедшие годы мы довели процесс создания продающих сайтов до
                идеала.{" "}
              </p>
              <p className="text-[18px] font-bold max-w-[867px] mb-[20px]">
                Дизайнеры, программисты, специалисты по рекламе и маркетингу
                тесно взаимодействуют между собой, чтобы завершить каждый этап
                работы точно в срок.
              </p>
            </>
          }
          margin="pb-[50px] md:pb-[60px]"
        />
        <WhiteMediumImageBlock
          title="Доступные цены на одностраничные сайты"
          text={
            <div>
              <p className="text-[20px] mb-[20px] font-medium">
                Стоимость разработки Landing Page рассчитывается индивидуально
                для каждого проекта в зависимости от сроков и технического
                задания. Вы можете заказать{" "}
                <a
                  href="https://digitaldevils.by/"
                  className="no-underline text-blue_main"
                >
                  создание сайта под ключ
                </a>{" "}
                или выбрать другой формат работы в нашем прайсе. Оставьте заявку
                и свои контактные данные в форме обратной связи. Мы обязательно
                перезвоним в самое ближайшее время и ответим на все ваши
                вопросы.
              </p>
              <p className="text-blue_main text-[24px] font-bold mb-[10px]">
                Мы предлагаем своим клиентам
              </p>
              <ul>
                <li className="text-[16px] font-medium">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>{" "}
                  Адаптивную верстку лендинга под любые устройства и браузеры
                </li>
                <li className="text-[16px] font-medium">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>{" "}
                  Уникальный текстовый, качественный визуальный контент
                </li>
                <li className="text-[16px] font-medium">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>{" "}
                  Настроенные системы веб-аналитики
                </li>
                <li className="text-[16px] font-medium">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>{" "}
                  Высокую скорость загрузки страниц
                </li>
                <li className="text-[16px] font-medium">
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>{" "}
                  Подробную инструкцию по дальнейшей работе с сайтом
                </li>
              </ul>
            </div>
          }
          smallText=""
          smallTitle=""
          badges={[]}
          margin="pb-[50px] md:pb-[60px]"
          imagePath="/resources/online_store_white_block_2.png"
          isRevert={true}
        />

        <PricingPlansBlock
          title="Цены на создание Landing Page"
          plans={[
            {
              buttonText: "Связаться с нами",
              buttonColor: "#214BF6",
              buttonBgColor: "#FAFAFA",
              bgColor: "",
              list: [
                "Готовый шаблон WordPress/Tilda",
                "Базовая настройка",
                "Одностраничный лендинг",
              ],
              smallTitle: "Базовый",
              secondSmallTitle: "",
              price: "1000 BYN",
            },
            {
              buttonText: "Связаться с нами",
              buttonColor: "#FAFAFA",
              buttonBgColor: "#214BF6",
              bgColor: "#FAFAFA",
              list: [
                "Готовый шаблон WordPress/Tilda",
                "Индивидуальный дизайн",
                "Базовое SEO",
                "Простая админка для редактирования",
              ],
              smallTitle: "Стандартный",
              secondSmallTitle: "",
              price: "1600 BYN",
            },
            {
              buttonText: "Связаться с нами",
              buttonColor: "#214BF6",
              buttonBgColor: "#FAFAFA",
              bgColor: "",
              list: [
                "Чистый код (React/Next.js + Nest.js)",
                "Уникальный UX/UI",
                "Полная оптимизация SEO",
                "Быстрая загрузка",
              ],
              smallTitle: "Премиум",
              secondSmallTitle: "",
              price: "2500 BYN",
            },
          ]}
          min_h_ticket_list={180}
          isOnlyBottomPadding={true}
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-white bg-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Разработка продающих Landing Page
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-bold">
                    При разработке Landing Page используем новейшие инструменты
                    маркетинга и рекламы для привлечения новых посетителей. В
                    нашем арсенале более 90 методов продвижения. В зависимости
                    от особенностей и масштаба бизнеса заказчика
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Сайты - квизы - коротких лендингов, посетители которых
                      отвечают на вопросы и получают за это призы. Задача таких
                      одностраничников - получение контактных данных
                      потенциальных клиентов и информации об их интересах. 
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Мультилендинги - автоматически подстраиваются под
                      пользовательские запросы и предлагают покупателям то, что
                      им интересно. Эти сайты актуальны для компаний с большим
                      количеством товаров и услуг. 
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Лид-магниты - продают не конкретную компанию, а лишь
                      определенную услугу, предназначенную для конкретной ЦА.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <WhiteMediumImageBlock
          title="Быстрые технологии"
          text={
            <>
              <p className="text-[18px] font-medium mb-[20px] ">
                Благодаря новейшим web технологиями (HTML5, CSS3, jQuery
                анимация и Parallax) созданные нами одностраничники выглядят
                максимально эффектно.{" "}
              </p>
              <p className="text-[18px] font-medium mb-[20px] ">
                Мы не используем скучные и однотипные шаблоны. Только
                уникальные, отрисованные под конкретного заказчика макета,
                креативные и запоминающиеся дизайнерские фишки и решения. Стиль,
                цветовая гамма и шрифты подбираются с учетом особенностей вашей
                целевой аудитории.{" "}
              </p>
              <p className="text-[18px] font-medium mb-[20px] ">
                Для увеличения конверсии выполняем внедрение анимации. Наши
                Лендинги производят нужное впечатление с самых первых секунд!
              </p>
            </>
          }
          smallText=""
          smallTitle="Технологии для лединга"
          badges={[
            { name: "HTML/CSS" },
            { name: "React" },
            { name: "Next.js" },
            { name: "Typescript" },
            { name: "Express/Nest.js" },
          ]}
          margin="py-[50px] md:py-[60px]"
          imagePath="/resources/landing_black_1.png"
          isRevert={true}
        />
        <MainBlockFive title="Наши проекты" />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default landing;

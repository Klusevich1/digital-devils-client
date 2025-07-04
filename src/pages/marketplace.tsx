import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TitleBlock } from "@/components/TitleBlock";
import { DarkBigImageBlock } from "@/components/DarkBigImageBlock";
import { StagesOfWorkBlock } from "@/components/StagesOfWorkBlock";
import { WhiteMediumImageBlock } from "@/components/WhiteMediumImageBlock";
import MainBlockFive from "@/components/MainBlockFive";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import Image from "next/image";
import QuizBlock from "@/components/QuizBlock";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Маркетплейс", link: "/marketplace" },
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
    name: "Маркетплейс",
    item: "https://digitaldevils.by/marketplace",
  },
];

const quizQuestions = [
  {
    title: "Какой тип маркетплейса вы хотите создать?",
    options: [
      "Товары (например, как Wildberries, Ozon)",
      "Услуги (например, YouDo, Profi.ru)",
      "Недвижимость / аренда",
      "Работа / фриланс",
      "Другое (опишите)",
    ],
    textField: "Опишите задачу",
  },
  {
    title: "Какую основную задачу должен решать маркетплейс?",
    options: [
      "Продавать товары",
      "Предоставлять услуги",
      "Автоматизировать процесс заказов",
      "Объединять продавцов и покупателей",
      "Другое (опишите)",
    ],
    textField: "Опишите задачу",
  },
  {
    title: "Как планируете зарабатывать на платформе?",
    options: [
      "Комиссия с заказов",
      "Подписка для продавцов",
      "Реклама / продвижение внутри портала",
      "Это некоммерческий проект",
      "Пока не решили — нужна консультация",
    ],
  },
  {
    title: "У вас уже есть структура и прототип?",
    options: [
      "Да, всё проработано",
      "Есть базовая структура",
      "Пока только идея, нужна помощь",
      "Ищем технического партнёра",
    ],
  },
  {
    title: "Когда вы хотите запустить проект?",
    options: [
      "Срочно (1–2 месяца MVP)",
      "3–4 месяца",
      "5–6 месяцев",
      "Пока в стадии изучения",
    ],
  },
  {
    title: "Где вам удобнее его получить?",
    options: ["Telegram", "Viber", "WhatsApp", "Звонок"],
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько по времени занимает создание маркетплейса на заказ?",
      description: (
        <p className="text-[18px] ">
          В среднем весь процесс занимает от 3 до 6 месяцев. Первая версия
          площадки с базовыми бизнес-функциями будет готова через несколько
          месяцев, на более глубокую доработку уходит до полугода. 
        </p>
      ),
    },
    {
      title:
        "Какие технологии используются для обеспечения безопасности и конфиденциальности пользовательских данных на созданных вами маркетплейсах?",
      description: (
        <p className="text-[18px]">
          Для обеспечения безопасности мы реализуем комплексный подход,
          включающий современные методы шифрования, постоянные обновления ПО.
        </p>
      ),
    },
    {
      title: "Сколько стоит разработка маркетплейса в Беларуси?",
      description: (
        <p className="text-[18px] ">
          Стоимость создания маркетплейсов рассчитывается индивидуально с учетом
          сложности и масштаба проекта, дизайна, сроков, используемого контента.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Разработка сайта маркетплейса | Цена на создание маркетплейса"
        description="Разрабатываем маркетплейсы, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши клиенты оценят каждый клик. Доверяйте создание своего сайта агрегатора экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/marketplace"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TitleBlock
          title="Разработка маркетплейса"
          description="Выполним разработку маркетплейса на базе современных веб и мобильных решений для электронной коммерции. Запустим, оптимизируем и масштабируем ваш проект на региональные и глобальные рынки. Вы занимаетесь бизнесом - мы позаботимся о вашем  продвижении в интернете."
          imagePath="/resources/marketplace.png"
          hasQuiz={true}
          adText="Разработка продающего маркетплейса"
        />
        <QuizBlock
          quizQuestions={quizQuestions}
          page="Маркетплейс"
          title="Забронируйте скидку 10% на разработку сайта"
          description="Ответьте на 6 простых вопросов — и получите персональную скидку 10% на разработку своего будущего сайта."
          padding="mb-[50px] sm:mb-[60px]"
        />
        <StandardMarginsLayout
          styles="pb-[50px] md:pb-[60px]"
          children={
            <>
              <div className={`flex md:flex-row flex-col justify-between`}>
                <div className="lg:block flex flex-col items-center lg:max-w-[638px] text-[18px]  lg:md:w-1/2">
                  <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] w-full">
                    Создайте свой агрегатор
                  </h2>
                  <p className="text-[24px] xl:text-[28px] font-bold mb-[20px]">
                    84% пользователей покупают товары на крупнейших
                    маркетплейсах страны не реже 1 раза в месяц. Безусловными
                    лидерами продаж в этом сегменте являются Wildberries и Ozon
                  </p>
                  <p className="text-[22px] xl:text-[24px] mb-[20px] font-bold">
                    Команда разработчиков компании Digital Devils выполняет
                    полный цикл работ по созданию маркетплейсов - от анализа до
                    запуска и технической поддержки.
                  </p>
                  <div className=" lg:hidden block mt-[30px] lg:w-5/12">
                    <Image
                      src="/resources/marketplace_22.png"
                      width={640}
                      height={610}
                      className="object-cover"
                      alt="Обращаем внимание на каждую деталь"
                    />
                  </div>
                  <p className="text-[16x] xl:text-[18px] mb-[10px]">
                    Каждый этап веб-разработки тщательно продуман и направлен на
                    получение качественного продукта, соответствующего
                    потребностям конкретного бизнеса.
                  </p>
                  <p className="text-[16x] xl:text-[18px]">
                    Мы уделяем максимум внимания применению передовых технологий
                    и{" "}
                    <a href="/design" className="text-blue_main">
                      уникального дизайна
                    </a>
                    , предоставляем клиентам инновационные и эффективные решения
                    в области программирования, администрирования, настройки
                    контекстной рекламы,
                    <a href="/seo" className="text-blue_main">
                      SEO-продвижения
                    </a>
                    .
                  </p>
                  <a
                    href="/application"
                    rel="nofollow"
                    className="px-[20px] py-[12px] w-full lg:w-fit lg:max-w-[340px] mt-[20px] flex justify-center items-center  bg-blue_main rounded-full text-white"
                  >
                    <span className="text-[18px] font-medium">
                      Связаться с нами
                    </span>
                  </a>
                </div>

                <div className="hidden lg:block max-w-[640px] md:w-1/2">
                  <Image
                    src="/resources/marketplace_22.png"
                    width={640}
                    height={610}
                    className="object-cover"
                    alt="Обращаем внимание на каждую деталь"
                  />
                </div>
              </div>
            </>
          }
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
                    Будьте ближе к своим клиентам
                  </h2>
                </div>
                <div className="w-full flex justify-between">
                  <div className="hidden lg:flex justify-center max-w-[550px] md:w-5/12">
                    <Image
                      src="/resources/marketplace_33.png"
                      width={400}
                      height={336}
                      className="object-cover"
                      alt="Уникальный подход и проработка деталей"
                    />
                  </div>
                  <div className="lg:block flex flex-col items-center lg:max-w-[638px] text-[18px]  lg:md:w-1/2">
                    <h2 className="text-[22px] lg:text-[32px] font-bold mb-[20px]">
                      Маркетплейсы - полноценные торговые центры в электронном
                      пространстве с большим количеством товаров и услуг от
                      разных производителей
                    </h2>
                    <div className=" lg:hidden block my-[30px] lg:w-5/12">
                      <Image
                        src="/resources/marketplace_33.png"
                        width={544}
                        height={519}
                        className="object-cover"
                        alt="Уникальный подход и проработка деталей"
                      />
                    </div>
                    <div className="flex flex-col-reverse">
                      <p className="text-[16px] lg:text-[18px] mb-[20px]">
                        Хороший трафик маркетплейсы получают за счет уникального
                        дизайна, интуитивно понятного интерфейса, удобного меню
                        и общей привлекательности для целевой аудитории.
                      </p>
                      <div className="lg:hidden w-full flex flex-col lg:flex-row justify-between mb-[10px]">
                        <p className="text-[22px] lg:text-[24px] font-bold lg:max-w-[586px] lg:w-1/2">
                          Эти сайты выступают в роли посредников между
                          продавцами и покупателями, зарабатывая на комиссии или
                          проценте от продаж.
                        </p>
                      </div>
                    </div>
                    <a
                      href="/application"
                      rel="nofollow"
                      className="px-[30px] py-[10px] lg:max-w-72 lg:w-fit w-full flex justify-center items-center  bg-blue_main rounded-full text-white"
                    >
                      <span className="text-[16px] font-medium">
                        Обсудить проект
                      </span>
                    </a>
                  </div>
                </div>
                <div className="hidden w-full lg:flex flex-col lg:flex-row justify-between lg:gap-[20px] mt-[30px]">
                  <p className="text-[22px] lg:text-[24px] mb-[10px] font-bold lg:max-w-[586px] lg:w-1/2">
                    Эти сайты выступают в роли посредников между продавцами и
                    покупателями, зарабатывая на комиссии или проценте от
                    продаж.
                  </p>
                </div>
              </div>
            </>
          }
        />

        <DarkBigImageBlock
          bigTitle="Все форматы маркетплейсов"
          smallTitle1="Нишевые маркетплейсы"
          smallTitle2="Агрегаторы"
          widthImage={362}
          heightImage={385}
          text1="Осуществляют реализацию товаров из определенной ниши:
                автозапчастей, инструментов, бытовой техники и электроники."
          text2="Крупные платформы, на которых представлена информация о продаже
                товаров и услуг из разных источников (магазинов); Shop-in-shop:
                площадки с поставщиками товаров. Маркетплейсы объявлений:
                современные C2C-платформы, где по определенным параметрам
                пользователь может выбрать для покупки товар или услугу от
                другого юзера."
          imagePath="/resources/marketplace2.png"
        />

        <WhiteMediumImageBlock
          title="Разработка под ключ"
          text={
            <>
              <p className={"font-medium text-[20px] mb-[10px]"}>
                Лучшие практики, комплексный подход и огромный опыт
                веб-разработки для электронной коммерции - вот рецепт успешного
                маркетплейса от наших специалистов.
              </p>
              <p className={"font-medium text-[20px] "}>
                Реализуем{" "}
                <a
                  href="https://digitaldevils.by/"
                  className="no-underline text-blue_main"
                >
                  интернет-проекты под ключ
                </a>{" "}
                любой сложности. Создаем маркетплейсы в соответствии с
                актуальными белорусскими и международными стандартами качества.
                Используем современные фреймворки и популярные CMS. Четко
                соблюдаем сроки. Предоставляем гарантийную поддержку после
                запуска проекта.
              </p>
            </>
          }
          smallText=""
          smallTitle="Наши технологии"
          badges={[
            { name: "HTML/CSS" },
            { name: "React" },
            { name: "Next.js" },
            { name: "Typescript" },
            { name: "Express/Nest.js" },
          ]}
          margin="py-[50px] md:py-[60px]"
          imagePath="/resources/marketplace3.png"
          isRevert={false}
        />
        <StagesOfWorkBlock
          title="Этапы работы"
          data={[
            {
              title: "Постановка задачи и аналитика",
              text: "В рамках подготовки к реализации проекта изучим платежные и покупательские привычки целевой аудитории, предложим оптимальные стратегии увеличения продаж и развития бизнеса.",
              circles: 1,
            },
            {
              title: "Разработка структуры и прототипа",
              text: "Составим дорожную карту веб-разработки. Пропишем требования. Поможем с разработкой технического задания. Подберем команду разработчиков, дизайнеров, программистов, сео оптимизаторов.",
              circles: 2,
            },
            {
              title: "Создание и согласование дизайна",
              text: "Создадим макет с учетом современных тенденций, идей заказчика, отзывов покупателей.",
              circles: 3,
            },
            {
              title: "Верстка и анимация",
              text: "Согласованные макеты дизайна будущего маркетплейса переведем в HTML формат и адаптируем под его функционал. Верстку осуществляем под характеристики экранов мобильных устройств, компьютеров и ноутбуков.",
              circles: 4,
            },
            {
              title: "Back-end разработка",
              text: "Скрупулезно проверить качество работы всех элементов сайта, чтобы у продавцов не было проблем с размещением товара и управления ассортиментом, а у покупателей - сложностей с оформлением заказов. Выполняем интеграции со сторонними сервисами. Выявленные в процессе тестирования ошибки незамедлительно устраняются.",
              circles: 5,
            },
            {
              title: "Перенос на домен и  запуск в работу",
              text: "Переносим рабочий сайт на хостинг. Рассказываем заказчику о функционале площадке, при необходимости обучаем работе и управлению маркетплейсов. Оказываем техническую поддержку на начальном этапе эксплуатации.",
              circles: 6,
            },
          ]}
          margin="pb-[50px] md:pb-[60px]"
          text={<></>}
        />
        <MainBlockFive title="Наши проекты" />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default marketplace;

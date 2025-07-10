import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TitleBlock } from "@/components/TitleBlock";
import { StagesOfWorkBlock } from "@/components/StagesOfWorkBlock";
import { ChooseTheRightOneBlock } from "@/components/ChooseTheRightOneBlock";
import MainBlockFive from "@/components/MainBlockFive";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import BasicLayout from "@/layouts/BasicLayout";
import React from "react";
import { DarkBigImageBlock } from "@/components/DarkBigImageBlock";
import { WhiteMediumImageBlock } from "@/components/WhiteMediumImageBlock";
import WhiteBlockWithDoubleParagraphsAndImage from "@/components/WhiteBlockWithDoubleParagraphsAndImage";
import QuizBlock from "@/components/QuizBlock";
import PricingPlansBlock from "@/components/PricingPlansBlock";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Портал", link: "/portal" },
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
    name: "Портал",
    item: "https://digitaldevils.by/portal",
  },
];

const quizQuestions = [
  {
    title: "Какой тип портала вы планируете создать?",
    options: [
      "Информационный портал / СМИ",
      "Образовательная платформа",
      "Внутрикорпоративный портал",
      "Социальный / комьюнити-портал",
      "Другое (опишите)",
    ],
    textField: "Опишите задачу",
  },
  {
    title: "Планируете ли регистрацию и личные кабинеты?",
    options: [
      "Да, нужна авторизация и роли пользователей",
      "Только админка, пользователи не нужны",
      "Пока не решили — хотим обсудить",
    ],
  },
  {
    title: "У вас уже есть структура и контент?",
    options: [
      "Да, всё проработано",
      "Есть черновик структуры",
      "Нужна помощь в проектировании",
      "Пока только идея",
    ],
  },
  {
    title: "Когда вы хотите запустить портал?",
    options: [
      "Срочно (до 30 дней)",
      "1–2 месяца",
      "2–4 месяца",
      "Пока только собираю информацию",
    ],
  },
  {
    title: "Где вам удобнее его получить?",
    options: ["Telegram", "Viber", "WhatsApp", "Звонок"],
  },
];

const portal = () => {
  const data: DataItem[] = [
    {
      title: "Какими будут сроки разработки и запуска интернет-портала?",
      description: (
        <p className="text-[18px] ">
          Точные сроки реализации сложных и высоконагруженных проектов с
          различным функционалом назвать очень сложно. В среднем на запуск
          нового портала уходит от 3 до 12 месяцев.
        </p>
      ),
    },
    {
      title:
        "Предоставляете ли вы услуги технической поддержки после сдачи проекта?",
      description: (
        <p className="text-[18px]">
          Если после передачи сайта заказчик выявит ошибки и баги в работе
          площадки - мы устраним их безвозмездно. Обсудить возможность получения
          помощи и технической поддержки на постоянной основе можно с нашими
          менеджерами. 
        </p>
      ),
    },
    {
      title: "Если нет технического задания поможете ли вы с его подготовкой?",
      description: (
        <p className="text-[18px]">
          Да, мы готовы помочь с разработкой технического задания, включая
          анализ, сбор тре6ований, формирование спецификаций для проекта.
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Создание интернет-портала | Цена разработки сайтов порталов в Беларуси"
        description="Разрабатываем информационные, электронные и технические порталы, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят каждую статью. Доверяйте создание своего сайта портала экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/portal"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TitleBlock
          title="Разработка портала"
          description="Услуги по созданию интернет-порталов под ключ. Мы разрабатываем функциональные и привлекательные сайты с учетом потребностей клиентов. Подбираем программные и дизайнерские решения в соответствии со спецификой и масштабом бизнеса. "
          imagePath="/resources/portal-title.png"
          hasQuiz={true}
          adText="Разработка продающего портала"
        />
        <QuizBlock
          quizQuestions={quizQuestions}
          page="Портал"
          title="Забронируйте скидку 10% на разработку сайта"
          description="Ответьте на 5 простых вопросов — и получите персональную скидку 10% на разработку своего будущего сайта."
          padding="mb-[50px] sm:mb-[60px]"
        />
        <DarkBigImageBlock
          bigTitle="Электронный портал для вашего бизнеса"
          smallTitle="Самый известный и старейший интернет-портал мира - Yahoo!"
          text1="Здесь имеется собственная поисковая система, сервис электронной
              почты, агрегатор новостей о политических и культурных событиях,
              спорте, финансах. Несмотря на несколько устаревший дизайн,
              yahoo.com по-прежнему входит в десятку самых узнаваемых и
              посещаемых сайтов Интернета."
          text2=""
          imagePath="/resources/manager-desk.png"
          widthImage={373}
          heightImage={373}
        />
        <WhiteBlockWithDoubleParagraphsAndImage
          title="Уникальный дизайн для вашего бизнеса"
          p1="Интернет-портал - сайт с расширенным функционалом и сложной структурой, привлекающий максимально возможное число пользователей и объединяющий их в интернет-сообщество на основании определенной тематики, сферы деятельности или наоборот, разноплановости публикуемого контента, интересного для широкой аудитории."
          p2="Мы реализуем сложные проекты по созданию <a href='https://digitaldevils.by/corporate-website' class='no-underline text-blue_main'>корпоративных</a>, <a href='https://digitaldevils.by/information-site' class='no-underline text-blue_main'>информационных</a>, новостных интернет-порталов под ключ. Над каждым заказом трудится команда квалифицированных разработчиков, дизайнеров, программистов без привлечения сторонних подрядчиков - это позволяет нам лучше контролировать рабочие процессы и соблюдать согласованные с заказчиком сроки. "
          imagePath="/resources/portal_image.png"
          margin="py-[50px] md:py-[60px]"
          smallTitle=""
          smallText=""
          widthImage={641}
          heightImage={269}
          text={
            <>
              <h3 className="mb-[10px] font-bold text-[24px] w-full">
                Digital Devils предлагает
              </h3>
              <ul>
                {[
                  " Создание интернет-порталов с нуля. Оказываем услуги по разработке и запуску корпоративных, новостных, информационных, образовательных веб-порталов под ключ.",
                  " Доработку и модернизацию уже существующих сайтов. Масштабируем, добавляем новые разделы, функции, модули и интеграции порталов на <a href='https://digitaldevils.by/wordpress' class='no-underline text-blue_main'>WordPress</a>, <a href='https://digitaldevils.by/bitrix' class='no-underline text-blue_main'>1С-Битрикс</a> или Shopify.",
                  " Адаптацией и кастомизаций интернет-порталов под ваши нужды. В зависимости от потребностей бизнеса добавляем личные кабинеты, виртуальные пространства, онлайн-сервисы для сотрудников компаний любых размеров и видов деятельности.",
                ].map((item, idx) => (
                  <li key={idx} className="text-[16px]">
                    <span className="text-custom_yellow text-[16px] font-medium">
                      /
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                  </li>
                ))}
              </ul>
            </>
          }
        />

        <PricingPlansBlock
          title="Цены на создание портала"
          plans={[
            {
              buttonText: "Связаться с нами",
              buttonColor: "#214BF6",
              buttonBgColor: "#FAFAFA",
              bgColor: "",
              list: [
                "WordPress + шаблон",
                "Базовая настройка разделов и контента",
                "Минимальная адаптация",
              ],
              smallTitle: "Базовый",
              secondSmallTitle: "",
              price: "4500 BYN",
            },
            {
              buttonText: "Связаться с нами",
              buttonColor: "#FAFAFA",
              buttonBgColor: "#214BF6",
              bgColor: "#FAFAFA",
              list: [
                "WordPress",
                "Индивидуальный дизайн",
                "Базовое SEO",
                "Расширенная админка",
              ],
              smallTitle: "Стандартный",
              secondSmallTitle: "",
              price: "7500 BYN",
            },
            {
              buttonText: "Связаться с нами",
              buttonColor: "#214BF6",
              buttonBgColor: "#FAFAFA",
              bgColor: "",
              list: [
                "Чистая разработка (React/Next.js + Nest.js)",
                "Уникальный UX/UI",
                "Продвинутая SEO-оптимизация",
                "Оптимизация производительности",
              ],
              smallTitle: "Премиум",
              secondSmallTitle: "",
              price: "11000 BYN",
            },
          ]}
          min_h_ticket_list={180}
          isOnlyBottomPadding={true}
        />

        {/* <ChooseTheRightOneBlock
          title="Преимущества нашей разработки"
          text1={<></>}
          text2={
            <ul className="flex flex-col gap-[5px]">
              {[
                " Сайты доступны с любых устройств: от ПК до мобильных гаджетов",
                " Работаем со всеми популярными CMS: платными и бесплатными",
                " Ведем разработку с глубокой кастомизацией и написанием отдельных новых модулей и подсистем",
                " Используем <a href='/design' class='text-blue_main'>индивидуальный дизайн</a>, рассчитанный под конкретную ЦА",
                " Продумываем безопасность и конфиденциальность пользовательской информации.",
              ].map((item, idx) => (
                <li key={idx}>
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>{" "}
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </li>
              ))}
            </ul>
          }
          slash={[]}
          card="Срок разработки интернет-портала начинается от 2 месяцев."
          data={[
            { title: "Длительность:", text: "от 2 месяцев" },
            { title: "Стоимость:", text: "от 4000$" },
          ]}
        /> */}
        <StagesOfWorkBlock
          title="Этапы разработки электронного портала"
          data={[
            {
              title: "Знакомство и аналитика",
              text: "Изучаем рынок, оцениваем конкурентов и особенности целевой аудитории. Такой подход позволяет расставить приоритеты, сформулировать цели и задачи, которым должен соответствовать веб портал. Этап завершается согласованием с заказчиком итоговой стоимости, графика работ по проекту.",
              circles: 1,
            },
            {
              title: "Прототипирование и дизайн",
              text: "Создаем 100%-но функционирующий прототип портала. Составляем предварительную структуру сайта. Продумываем интерфейс, делая его максимально удобным для пользователей. Дизайнеры отрисовывают графическую часть площадки.",
              circles: 2,
            },
            {
              title: "Верстка и программирование",
              text: "Совместно с заказчиком подбираем оптимальную CMS и создаем функциональный, визуально привлекательный сайт, который будет интересен для пользователей. Отдельное внимание уделяем адаптивной верстке интернет-портала под экраны персональных компьютеров, смартфонов, планшетов, параметры и характеристики всех популярных браузеров.",
              circles: 3,
            },
            {
              title: "Наполнение и тестирование",
              text: "Осуществляем наполнение портала всей необходимой стартовой информацией (по желанию заказчика). Проводим тестирование сайта на возможные ошибки и баги. Оперативно устраняем все недочеты.",
              circles: 4,
            },
            {
              title: "Передача веб-портала заказчику",
              text: "При необходимости наши менеджеры проводят обучение по работе с системой управления сайта. Дополнительно у нас можно заказать услуги технической поддержки, получить консультации и помощь в продвижении.",
              circles: 5,
            },
          ]}
          margin="pb-[50px] md:pb-[60px]"
          text={
            <>
              <p className="text-[18px] font-bold max-w-[867px]">
                За прошедшие годы мы довели процесс{" "}
                <a href="/landing" className="no-underline text-blue_main">
                  создания продающих сайтов
                </a>{" "}
                до идеала.{" "}
              </p>
              <p className="text-[18px] font-bold max-w-[867px] mb-[20px]">
                Дизайнеры, программисты, специалисты по рекламе и маркетингу
                тесно взаимодействуют между собой, чтобы завершить каждый этап
                работы точно в срок.
              </p>
            </>
          }
        />

        <WhiteMediumImageBlock
          title="Стоимость разработки интернет-порталов"
          text={
            <div>
              <h2 className="text-[24px] font-bold mb-[20px]">
                Итоговая цена web-портала рассчитывается индивидуально для
                каждого проекта, в зависимо от того что рассчитывает получить
                заказчик на выходе
              </h2>
              <p>
                Если речь идет о простом электронном журнале с несколькими
                разделами для новостей и статей - это одна стоимость. Если же вы
                планируйте получить полноценный корпоративный или
                образовательный портал с собственным магазином и каталогом,
                поиском, множеством интеграций и уникальным дизайном, то и цена
                будет соответствующей.{" "}
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
          }
          smallText=""
          smallTitle=""
          margin="pb-[50px] md:pb-[60px]"
          badges={[]}
          imagePath="/resources/portal_4.png"
          isRevert={false}
        />

        <MainBlockFive title="Наши проекты" />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default portal;

import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TitleBlock } from "@/components/TitleBlock";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import MainBlockFive from "@/components/MainBlockFive";
import { StagesOfWorkBlock } from "@/components/StagesOfWorkBlock";
import { ChooseTheRightOneBlock } from "@/components/ChooseTheRightOneBlock";
import { WhiteMediumImageBlock } from "@/components/WhiteMediumImageBlock";
import { DarkBigImageBlock } from "@/components/DarkBigImageBlock";
import React from "react";
import Image from "next/image";
import QuizBlock from "@/components/QuizBlock";
import PricingPlansBlock from "@/components/PricingPlansBlock";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { FaCircleChevronRight } from "react-icons/fa6";
import WideBlockWithImage from "@/components/WideBlockWithImage";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Корпоративный сайт", link: "/corporate-website" },
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
    name: "Корпоративный сайт",
    item: "https://digitaldevils.by/corporate-website",
  },
];

const quizQuestions = [
  {
    title: "Какие задачи должен решать ваш сайт?",
    options: [
      "Представлять компанию в интернете",
      "Увеличить доверие и конверсии",
      "Рассказывать о продуктах/услугах",
      "Собирать заявки или лиды",
      "Другое (опишите)",
    ],
    textField: "Опишите задачу",
  },
  {
    title: "Каким должен быть сайт по стилю?",
    options: [
      "Простой и функциональный",
      "Современный и стильный",
      "Креативный и нестандартный",
      "Хочу, чтобы вы предложили варианты",
    ],
  },
  {
    title: "Есть ли уже структура или материалы для сайта?",
    options: [
      "Да, есть структура и тексты",
      "Есть черновик, нужно доработать",
      "Нет, нужна помощь с контентом",
      "Пока только идея",
    ],
  },
  {
    title: "Когда вы хотите запустить сайт?",
    options: [
      "В течение 2 недель",
      "В течение месяца",
      "1–2 месяца — не срочно",
      "Пока планирую, не определился",
    ],
  },
  {
    title: "Где вам удобнее его получить?",
    options: ["Telegram", "Viber", "WhatsApp", "Звонок"],
  },
];

const corporateWebsite = () => {
  const data: DataItem[] = [
    {
      title:
        "Сможем ли мы самостоятельно редактировать сайт и добавлять на него информацию?",
      description: (
        <p>
          Мы работаем на популярных CMS-движках, которые позволяют управлять
          сайтами, даже не имея специальных навыков и знаний программирования.
          При передаче готового ресурса владельцы, предоставляем подробную
          инструкцию по его дальнейшей эксплуатации. 
        </p>
      ),
    },
    {
      title: "Дорабатывайте ли вы существующие сайты?",
      description: (
        <p>
          Да, мы беремся за завершение начатых и неоконченных проектов. Также
          нам можно заказать доработку уже запущенных сайтов, которые не
          приносят желаемых результатов. Стоимость услуг в каждом конкретном
          случае будет рассчитываться индивидуально. 
        </p>
      ),
    },
    {
      title: "Сколько времени нужно на создание корпоративного сайта с нуля?",
      description: (
        <p>
          В среднем разработка интернет-ресурса под ключ занимает от 1,5 до 3
          месяцев, в зависимости от сложности дизайна, интерфейса и функционала
          площадки.
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Разработка корпоративного сайта компании | Заказать создание корпоративного сайта"
        description="Разрабатываем корпоративные сайты, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши клиенты оценят каждый клик. Доверяйте создание корпоративного сайта своей компании экспертам и получите сайт, который работает на ваш успех!"
        canonical="https://digitaldevils.by/corporate-website"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TitleBlock
          title="Разработка корпоративного сайта"
          description="Выполняем разработку корпоративных сайтов под ключ. Используем для формирования нужного образа бренда в сети уникальные дизайнерские и маркетинговые решения.  Прорабатываем мобильную версию и юзабилити."
          imagePath="/resources/corporate_title.png"
          hasQuiz={true}
          adText="Разработка продающего сайта"
        />
        <QuizBlock
          quizQuestions={quizQuestions}
          page="Корпоративный сайт"
          title="Забронируйте скидку 10% на разработку сайта"
          description="Ответьте на 5 простых вопросов — и получите персональную скидку 10% на разработку своего будущего сайта."
          padding="mb-[50px] sm:mb-[60px]"
        />
        <DarkBigImageBlock
          bigTitle="Предлагаем эффективные решения для продвижения вашего бренда в интернете"
          smallTitle="66% жителей нашей планеты активно используют интернет для поиска информации"
          text1="Мы ежедневно заходим в сеть, чтобы узнать о новых продуктах и брендах, почитать отзывы и сравнить характеристики разных товаров. Это значит, что если компания не уделяет должного внимания созданию корпоративного сайта и его продвижению, она автоматически теряет львиную долю потенциальных клиентов, которые “приходят” из сети."
          text2="Специалисты студии Digital Devils на профессиональном уровне реализуют даже самые сложные и нестандартные проекты. Знают, как повысить лояльность целевой аудитории, повысить продажи в любых сегментах рынка."
          imagePath="/resources/corporate_black.png"
          widthImage={508}
          heightImage={372}
        />
        <WhiteMediumImageBlock
          title="Сайт для вашей компании"
          text={
            <>
              <p className="font-medium mb-[20px] text-[20px]">
                Корпоративный сайт - это сложный, многоуровневый портал, на
                котором представлена различная информация о компании, которая
                может быть интересна потенциальным клиентам или партнерам: сфера
                деятельности, ассортимент товаров и услуг, сведения о
                руководстве и сотрудниках, кейсы и портфолио выполненных
                проектов, новости и просто полезный контент.{" "}
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
            </>
          }
          smallText=""
          smallTitle=""
          badges={[]}
          margin="py-[50px] md:py-[60px]"
          imagePath="/resources/corporate_2.png"
          isRevert={true}
        />

        <WhiteMediumImageBlock
          title="Задачи корпоративного сайта:"
          text={
            <>
              <div className="flex items-start mb-[10px]">
                <Image
                  src="/resources/arrow_custom.svg"
                  alt={"arrow"}
                  width={32}
                  height={32}
                />
                <div className="ms-[20px] lg:max-w-[646px]">
                  <h2 className="font-medium text-[22px] mb-[5px]">
                    Информационное присутствие фирмы в интернете
                  </h2>
                  <p className="md:text-[18px] text-[16px] font-medium">
                    Качественная презентация в сети является важным конкурентным
                    преимуществом каждой компании, способствует созданию
                    положительного имиджа.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-[10px]">
                <Image
                  src="/resources/arrow_custom.svg"
                  alt={"arrow"}
                  width={32}
                  height={32}
                />
                <div className="ms-[20px] lg:max-w-[646px]">
                  <h2 className="font-medium text-[22px] mb-[5px]">
                    Улучшение репутации и повышение узнаваемости бренда
                  </h2>
                  <p className="md:text-[18px] text-[16px] font-medium">
                    Лояльные торговой марке и ее товарам покупатели являются
                    лучшей рекламой не только в онлайн пространстве, но и в
                    обычной жизни. Комплексная работа с отзывами, выстраивание
                    коммуникаций с покупателями обеспечивает бизнесу стабильный
                    поток заказов и фундаментальную основу для дальнейшего
                    развития.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-[10px]">
                <Image
                  src="/resources/arrow_custom.svg"
                  alt={"arrow"}
                  width={32}
                  height={32}
                />
                <div className="ms-[20px] lg:max-w-[646px]">
                  <h2 className="font-medium text-[22px] mb-[5px]">
                    Продажа товаров и услуг
                  </h2>
                  <p className="md:text-[18px] text-[16px] font-medium">
                    Функциональный и информативный корпоративный сайт
                    рассказывает о работе компании, позволяет новым и уже
                    существующим покупателям изучать ассортимент реальных
                    товаров и услуг.{" "}
                  </p>
                </div>
              </div>
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
          margin="pb-[50px] md:pb-[60px]"
          imagePath="/resources/corporate_white.png"
          isRevert={false}
        />

        <PricingPlansBlock
          title="Цены на создание корпоративного сайта"
          plans={[
            {
              buttonText: "Связаться с нами",
              buttonColor: "#214BF6",
              buttonBgColor: "#FAFAFA",
              bgColor: "",
              list: [
                "Готовый шаблон WordPress/Tilda",
                "Базовая настройка страниц",
                "Минимальная адаптация",
              ],
              smallTitle: "Базовый",
              secondSmallTitle: "",
              price: "1800 BYN",
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
                "Административная панель",
              ],
              smallTitle: "Стандартный",
              secondSmallTitle: "",
              price: "3000 BYN",
            },
            {
              buttonText: "Связаться с нами",
              buttonColor: "#214BF6",
              buttonBgColor: "#FAFAFA",
              bgColor: "",
              list: [
                "Чистый код (React/Next.js + Nest.js)",
                "Уникальный UX/UI",
                "Оптимизация SEO",
                "Оптимизированная панель управления",
              ],
              smallTitle: "Премиум",
              secondSmallTitle: "",
              price: "4800 BYN",
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
                Индивидуальный подход к работе с каждым заказчиком
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-bold">
                    Уникальный дизайн в 25 раз увеличивает привлекательность
                    ресурса для потенциальных клиентов и поисковых систем.
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%] max-w-[641px]">
                  <p className="w-full text-[18px] font-medium">
                    По вашей заявке подготовим привлекательные и продающие
                    макеты страниц будущего корпоративного портала. Учтем все
                    пожелания и требования заказчика. Нам важен каждый заказчик,
                    независимо от того идет речь о небольшом цветочном магазине
                    или крупной производственной компании, чья продукция
                    поставляется во все регионы страны!
                  </p>
                </div>
              </div>
            </>
          }
        />

        <StagesOfWorkBlock
          title="Этапы разработки корпоративного сайта"
          data={[
            {
              title: "Аналитика и подготовка",
              text: "Заказчик предоставляет техническое задание, указывает свои пожелания и требования к будущему сайту в брифе. Наши специалисты изучают и оценивают данную информацию, определяют перечень мероприятий и будущие шаги, необходимые для успешной реализации проекта.",
              circles: 1,
            },
            {
              title: "Постановка задач и разработка концепции",
              text: "Проводим анализ конкурентов, ассортимента реализуемой продукции, особенности сферы деятельности заказчика. Составляем перечень задач, которые должен решать будущий сайт: обеспечение видимости и презентация компании в сети, формирование положительного имиджа, взаимодействие с покупателями.",
              circles: 2,
            },
            {
              title:
                "Определение структуры ресурса и подготовка семантического ядра",
              text: "На этом этапе подбираем ключевые слова для каждой страницы корпоративного портала",
              circles: 3,
            },
            {
              title: "Прорисовка и согласование макета",
              text: "Дизайнеры создают пользовательский интерфейс, прорабатывают графические элементы и цветовое оформление в соответствии с пожеланиями заказчика и <a href='/brandbook' class='text-blue_main'>брендбуком компании</a>.",
              circles: 4,
            },
            {
              title: "Адаптивная верстка под разные устройства",
              text: "Графический макет преобразуется в HTML код с использованием типовых и оригинальных набором элементов и модулей.",
              circles: 5,
            },
            {
              title: "Программирование и наполнение контентом",
              text: "Как только работа с программной частью ресурса будет завершена выполняется его запуск на выбранной системе управления. Осуществляется наполнение страниц графической, текстовой, видео и аудио информацией.",
              circles: 6,
            },
            {
              title: "Тестирование и передача сайта в работу",
              text: "Функциональность и стабильная работа ресурса проверяется тестировщиками. Выявленные ошибки и недочеты оперативно устраняются. Как только тестирование будет завершено выполняется перенос сайта на хостинг и передача его в работу заказчику.",
              circles: 7,
            },
          ]}
          text={
            <p className="font-bold text-[18px] mb-[30px] max-w-[817px]">
              Закажите создание корпоративного сайта компании на удобной для вас
              CMS:{" "}
              <a
                href="https://digitaldevils.by/bitrix"
                className="no-underline text-blue_main"
              >
                1C-Битрикс
              </a>
              ,{" "}
              <a
                href="https://digitaldevils.by/wordpress"
                className="no-underline text-blue_main"
              >
                WordPress
              </a>
              , ModX,
              <a
                href="https://digitaldevils.by/opencart"
                className="no-underline text-blue_main"
              >
                Opencart
              </a>{" "}
              и т.д. Создание веб-ресурса с нуля выполняется в несколько этапов.
            </p>
          }
          margin="py-[50px] md:py-[60px]"
        />

        <StandardMarginsLayout
          styles={`pb-[50px] md:pb-[60px] bg-white text-black`}
          children={
            <div className={`flex flex-col gap-[30px]`}>
              <div>
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                  Корпоративный сайт – “лицо” вашей компании в интернете
                </h2>
                <p className="text-[18px] font-medium max-w-[911px]">
                  Корпоративный сайт – рабочий маркетинговый инструмент,
                  способствующий повышению конкурентоспособности, узнаваемости и
                  развитию любого бизнеса. Команда специалистов Digital Devils
                  готова разработать новый портал с нуля, доработать, провести
                  оптимизацию и вывести в ТОП поисковой выдачи уже существующий
                  ресурс для компаний из самых разных сфер и направлений
                  деятельности:
                </p>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[40px] gap-[10px] lg:mt-[20px] mt-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[22px] font-medium">
                      Производственные и торговые предприятия
                    </p>
                    <p className="text-[16px] font-medium">
                      Заказчик получает интернет-магазин с онлайн-витриной,
                      каталогом реализуемых товаров, приемом и оплатой товаров.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[22px] font-medium">
                      Организации из сферы услуг
                    </p>
                    <p className="text-[16px] font-medium">
                      Обучение, консалтинг и т.д. – визитка с расширенным
                      функционалом для размещения полезного контента,
                      привлечения трафика и увеличения объемов онлайн-продаж. 
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[22px] font-medium">
                      Стартапы и небольшие бренды
                    </p>
                    <p className="text-[16px] font-medium">
                      Продуманный до мелочей сайт позволяет создать нужный
                      имидж, упрощает выход на рынок, способствует привлечению
                      клиентов.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[22px] font-medium">
                      Крупные холдинги и корпорации
                    </p>
                    <p className="text-[16px] font-medium">
                      Даже гигантам отрасли нужен собственный корпоративный
                      портал для комплексного представления всех продуктов,
                      услуг и видов деятельности в виртуальном пространстве.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`grid lg:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[20px] border-t-[1px] pt-[30px] border-t-black`}
              >
                <span className="text-[16px] font-medium">
                  Корпоративный сайт позволяет бизнесу любого масштаба решать
                  широкий спектр задач: привлечение внимания целевой аудитории,
                  продвижение бренда, выстраивать сотрудничество с новыми
                  партнерами, оптимизировать бизнес-процессы. Его функционал
                  формируется исходя из конкретных потребностей и целей
                  заказчика. 
                </span>
                <span className="text-[16px] font-medium">
                  Его функционал формируется исходя из конкретных потребностей и
                  целей заказчика. 
                </span>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles="py-[50px] md:py-[60px] mb-[50px] md:mb-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Возможности корпоративных сайтов
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-medium">
                    Эксперты агентства Digital Devils способны разработать
                    корпоративный ресурс, который сможет привлечь и удержать
                    внимание посетителей, будет работать над увеличением
                    количества продаж, повышением лояльности потенциальных
                    клиентов. 
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <p className="text-[22px] font-medium mb-[15px]">
                      Созданные нами сайты:
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Могут создать правильный имидж. Солидные компании и
                      крупные компании имеют корпоративные ресурсы, которые
                      повышают степень доверия к ним со стороны партнеров и
                      покупателей. 
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Грамотно представляют информацию. Подготовленные
                      профессионалами продающие тексты описаний товаров, новости
                      и интересные статьи о фирме повышают узнаваемость бренда,
                      облегчают работу с сайтом. 
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px] me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Становятся успешным каналом продаж. Помимо информации о
                      компании и ее деятельности на площадке можно разместить
                      базовый каталог и корзину заказов, после чего количество
                      онлайн-продаж резко пойдет вверх. 
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Упрощают работу сотрудников. Интеграции с разнообразными
                      сервисами и сторонними системами, реализованные в процессе
                      разработки, призваны упростить коммуникации внутри
                      коллектива, автоматизировать различные операции, сократить
                      сроки их выполнения. 
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <WhiteMediumImageBlock
          bigHeader="Используем инновационные технологии и собственные разработки"
          title=""
          text={
            <>
              <p className="text-[24px] font-bold text-blue_main mb-[10px]">
                Разработка корпоративного сайта выполняется с использованием
                технологий, эксклюзивных программных и технических решений
              </p>
              <h2 className="text-[24px] font-bold  mb-[10px] w-full">
                Современные решение
              </h2>
              <p className="text-[18px] font-medium mb-[10px]">
                Успешно применяем современные фреймворки, популярные CMS с
                открытым исходным кодом (
                <a
                  href="https://digitaldevils.by/tilda"
                  className="no-underline text-blue_main"
                >
                  Tilda
                </a>
                ,{" "}
                <a
                  href="https://digitaldevils.by/laravel"
                  className="no-underline text-blue_main"
                >
                  Laravel
                </a>
                ,{" "}
                <a
                  href="https://digitaldevils.by/wordpress"
                  className="no-underline text-blue_main"
                >
                  Wordpress
                </a>
                ,{" "}
                <a
                  href="https://digitaldevils.by/django"
                  className="no-underline text-blue_main"
                >
                  Django
                </a>{" "}
                и др) для реализации корпоративных проектов с различной
                функциональной сложностью. Профессиональный и комплексный подход
                в сочетании с инновационными технологиями позволяет нам
                создавать удобные и практичные интерфейсы, которые на 100%
                соответствуют ожиданиям заказчика.
              </p>
              <p className="text-[18px] font-medium">
                Мы нацелены на достижение максимально высоких результатов и
                безупречного качество при работе над каждым проектом.
                Предоставляем профессиональную техническую поддержку, настройку
                и доработку корпоративных сайтов в Минске и Беларуси.
              </p>
            </>
          }
          smallText=""
          smallTitle=""
          badges={[]}
          margin="pb-[50px] md:pb-[60px]"
          imagePath="/resources/corporate_website_image.png"
          isRevert={true}
        />

        <StandardMarginsLayout
          styles={` bg-white text-black`}
          children={
            <div className={`flex flex-col gap-[30px]`}>
              <div>
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                  Преимущества корпоративных сайтов от Digital Devils
                </h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[40px] gap-[10px] lg:mt-[20px] mt-[10px]">
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[22px] font-medium">Адаптивность</p>
                    <p className="text-[16px] font-medium">
                      Наши корпоративные сайты отлично работают и выглядят на
                      любых устройствах: стиль, производительность, скорость
                      загрузки страниц, функции остаются неизменными на ПК,
                      смартфонах, планшетах. 
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[22px] font-medium">Агрегация трафика</p>
                    <p className="text-[16px] font-medium">
                      Если вам нужно быстро и эффективно увеличить количество
                      покупателей, привлечь внимание целевой аудитории, запуск
                      корпоративного портала поможет в этом. 
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[22px] font-medium">
                      Максимальная комплектация
                    </p>
                    <p className="text-[16px] font-medium">
                      Мы знаем, как реализовать на корпоративном портале все
                      актуальные функции, сделать сайт любой сложности: от
                      простейшего landing page с несколькими основными разделами
                      до масштабного портала с огромным количеством страниц. 
                    </p>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[22px] font-medium">Удобство</p>
                    <p className="text-[16px] font-medium">
                      Редактирование контента не требует специальных навыков.
                      Например, в будущем вы можете сами написать и добавить
                      текст на нужную страницу, подгрузить новые фото, оставить
                      нужные сведения и обновить устаревшие данные. 
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`grid lg:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[20px] border-t-[1px] pt-[30px] border-t-black`}
              >
                <span className="text-[16px] font-medium">
                  Быстрый корпоративный сайт с понятной для пользователей
                  навигацией открывает новые возможности для взаимодействия с
                  клиентами, автоматизации бизнес-процесс за счет интеграции с
                  современными CRM (например, Битрикс 24), платежными сервисами
                  и системами учета. 
                </span>
              </div>
            </div>
          }
        />
        <WideBlockWithImage
          title="Суммарный опыт нашей IT-команды в digital-маркетинге превышает 100 лет"
          text_1="Мы не передаем проекты подрядчикам или фрилансерам."
          text_2="Самостоятельно выполняем полный цикл работает: от подготовки шаблонов и прототипов, подбора оптимальных функций, полей и макетов до гарантийного и постгарантийного сопровождения и технической помощи. Готовы нести ответственность по договору об оказании услуг. Чтобы получить консультацию – звоните, наши менеджеры готовы ответить на все ваши вопросы."
          bg="bg-white"
        />

        <MainBlockFive title="Наши проекты" />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default corporateWebsite;

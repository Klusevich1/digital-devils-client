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

const corporateWebsite = () => {
  const data: DataItem[] = [
    {
      title:
        "Сможем ли мы самостоятельно редактировать сайт и добавлять на него информацию?",
      description: (
        <p className="text-[18px] ">
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
        <p className="text-[18px]">
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
        <p className="text-[18px] ">
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
        <ChooseTheRightOneBlock
          title="Индивидуальный подход к работе с каждым заказчиком"
          text1={
            <p className="text-[22px] mb-[20px] font-bold">
              Уникальный дизайн в 25 раз увеличивает привлекательность ресурса
              для потенциальных клиентов и поисковых систем.
            </p>
          }
          text2={
            <p className="text-[18px]">
              По вашей заявке подготовим привлекательные и продающие макеты
              страниц будущего корпоративного портала. Учтем все пожелания и
              требования заказчика. Нам важен каждый заказчик, независимо от
              того идет речь о небольшом цветочном магазине или крупной
              производственной компании, чья продукция поставляется во все
              регионы страны!
            </p>
          }
          slash={[]}
          card="Получить консультацию и предварительный расчет цены корпоративного сайта для вашей компании можно по телефону или через форму обратной связи."
          data={[
            { title: "Длительность:", text: "от 1 месяца" },
            { title: "Стоимость:", text: "от 2000$" },
          ]}
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
              text: "Дизайнеры создают пользовательский интерфейс, прорабатывают графические элементы и цветовое оформление в соответствии с пожеланиями заказчика и брендбуком компании.",
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
                </a> и др) для реализации корпоративных проектов с различной
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

        <MainBlockFive title="Наши проекты" />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default corporateWebsite;

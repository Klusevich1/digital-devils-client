import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import HalfImageBlock from "@/components/HalfImageBlock";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import BlockWithListOfCurrentTechnologies from "@/components/BlockWithListOfCurrentTechnologies";
import { ChooseTheRightOneBlock } from "@/components/ChooseTheRightOneBlock";
import BasicLayoutDark from "@/layouts/BasicLayoutDark";
import MobileTitleBlock from "@/components/MobileTitleBlock";
import { YourIdeasBlock } from "@/components/YourIdeasBlock";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";

const PAGE_NAME = "mob-ios";
const BREADCRUMB_PAGE_NAME = "IOS разработка";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Разработка мобильных приложений", link: `/mob-apps` },
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
    name: 'Разработка мобильных приложений',
    item: `https://digitaldevils.by/mob-apps`,
  },
  {
    "@type": "ListItem",
    position: 3,
    name: BREADCRUMB_PAGE_NAME,
    item: `https://digitaldevils.by/${PAGE_NAME}`,
  },
];

const data: DataItem[] = [
  {
    title:
      "Возможно ли создание приложения, которое работает не только на iOS, но и на Android?",
    description: (
      <p className="text-[18px] ">
        Да, мы можем разработать приложение для обеих платформ. Все зависит от
        запросов, ожиданий и бюджета клиента.
      </p>
    ),
  },
  {
    title: "Вы поддерживайте ПО после его размещения в каталоге App Store?",
    description: (
      <p className="text-[18px] ">
        Да, помогает с публикацией готового продукта на маркетплейса. В
        последующие месяцы по гарантии исправляем баги и ошибки.
      </p>
    ),
  },
  {
    title: "Сколько времени нужно, чтобы сделать мое приложение?",
    description: (
      <p className="text-[18px] ">
        Сроки реализации проектов зависят от их сложности, функционала, дизайна
        и других особенностей приложения. В среднем на создание программного
        продукта с нуля уходит от 3 месяцев. 
      </p>
    ),
  },
];

const joomla = () => {
  return (
    <>
      <SEO
        title="Разработка мобильных приложений для iOS в Минске | Стоимость на Digital Devils"
        description="Разрабатываем мобильные приложения под iOS, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего приложения на iOS экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayoutDark>
        <Breadcrumbs breadcrumbs={breadcrumbs} theme="dark" />
        <MobileTitleBlock
          title={
            <>
              <h1 className="font-bold text-[40px] sm:text-[55px] md:text-[75px] lg:text-[90px] xl:text-[110px] leading-[55px] md:leading-[80px] lg:leading-[100px] xl:leading-[120px]">
                Мобильная разработка IOS
              </h1>
            </>
          }
        />
        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row justify-between lg:gap-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/ios_3.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={525}
                  height={355}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px] leading-normal">
                  Мы разрабатываем то, что нужно Вам
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Разработка приложений для iOS от компании Digital Devils -
                  комплексная услуга, популярная среди коммерческих организаций,
                  профессиональных научных сообществ. Нам под силу создание
                  понятного и удобного для пользователей ПО, отвечающего
                  требованиям и гайдлайнам Apple.
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/ios_3.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[20px] font-medium">
                  В наших приложениях используются новейшие технологии
                  iOS-платформы, способствующие привлечению внимания и повышению
                  лояльности целевой аудитории, увеличению объема продаж,
                  решению многих других маркетинговых задач. 
                </p>
              </div>
            </div>
          }
        />
        <YourIdeasBlock
          bigTitle="Преимущества разработки под iOS"
          smallText=""
          isDark={false}
          paragraphs={[
            {
              title: "IOS",
              text: "Устройства от Apple ориентированы на премиум пользователей. Согласно статистике, владельцы гаджетов на iOS более платежеспособные, чаще интересуются и приобретают товары VIP-сегмента. Поэтому, если компания работает с целевым сегментом с доходами выше среднего, ей следует заказать разработку мобильного приложения для iOS специалистам нашего агентства. ",
              badges: [
                {
                  name: "Flutter",
                },
                {
                  name: "Swift",
                },
                {
                  name: "MongoDB",
                },
              ],
              buttonText: "IOS разработка",
              imagePath: "/resources/mob-apps-idea1.png",
            },
          ]}
        />

        <HalfImageBlock
          title="Особенности разработки мобильных приложений под iOS"
          smallTitle=""
          isOnlyBottomPadding={false}
          description={
            <>
              <p className="font-medium text-[18px] mb-[10px]">
                Разработка мобильного ПО выполняется с учетом уникальных
                особенностей платформы с использованием языков программирования
                Swift и Objective-C, мощных инструментов для написания, отладки,
                тестирования кода.
              </p>
              <p className="font-medium text-[18px] mb-[20px]">
                Принимая во внимание культуру и строгие требования Apple,
                специалисты студии Digital Devils оптимизируют цифровой продукт
                под конкретное железо для достижения оптимальной
                производительности, качественного пользовательского опыта.
              </p>
            </>
          }
          isDark={true}
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/ios_5.png"}
          smallImage={"/resources/ios_6.png"}
          widthImage={639}
          heightImage={340}
        />

        <DifferentTasksBlock
          bigTitle="Преимущества сотрудничества с Digital Devils"
          smallText=""
          paragraphs={[
            {
              title: "Экспертиза в разработке под iOS",
              text: "У нас за плечами многолетний опыт создания высококлассных приложений для гаджетов Apple. Отлично ориентируемся в требованиях американского бренда к софту, ориентируемся на них в работе.",
            },
            {
              title: "Быстрый старт проекта",
              text: "Взаимодействуя с клиентами стараемся избежать никому ненужных бюрократических проволочек, согласований и простоев. Оперативно принимаем проект в работу, экономим бюджет заказчика.",
            },
            {
              title: "Профессиональная команда сотрудников",
              text: "Мы не привлекаем к реализации проектов фрилансеров, аутстаф-команды, аутсорс, что обеспечивает более полный и эффективный контроль на каждом этапе разработки. ",
            },
          ]}
          isDark={false}
        />

        <ChooseTheRightOneBlock
          title="Как мы разрабатываем приложения под iOS"
          text1={
            <p className="text-[22px] mb-[20px] font-bold">
              Реализация каждого проекта включает несколько последовательных
              этапов:
            </p>
          }
          text2={
            <ul className="flex flex-col gap-[5px]">
              {[
                " Анализ особенностей и потребностей бизнеса клиента, изучение его целевой аудитории",
                " Согласование концепций, требований, проектной документации",
                " Подготовка прототипа приложения и дизайн-макета",
                " Программирование серверной и клиентской части",
                " Тестирование приложения",
                " Запуск и поддержка ПО",
              ].map((item, idx) => (
                <li key={idx}>
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          }
          slash={[]}
          card="На выходе вы получаете современный и функциональный цифровой продукт, приносящий пользу и выгоду."
          data={[
            { title: "Длительность:", text: "от 3 месяцев" },
            { title: "Стоимость:", text: "от 10000$" },
          ]}
        />

        <StandardMarginsLayout
          styles={`pb-0 pt-[50px] md:pt-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/ios_1.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={525}
                  height={350}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Сколько стоит разработка мобильных приложений под iOS?
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Планируйте расширение бизнеса или выход на новые рынки сбыта?
                  Вам нужно привлечь новых клиентов? Создадим для вас мобильное
                  приложение под ключ от идеи до его запуска, публикации и
                  продвижения в App Store.
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/ios_2.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={341}
                    height={300}
                  />
                </div>
                <p className="text-[18px] mt-[20px] font-medium">
                  Итоговая цена проекта рассчитывается индивидуально, исходя из
                  сложности, функционала, особенностей дизайна ПО. Стоимость
                  прописывается в договоре, и после его подписания может быть
                  изменения только после согласования с заказчиком.{" "}
                </p>
              </div>
            </div>
          }
        />

        <BlockWithListOfCurrentTechnologies
          isOnlyBottomPadding={false}
          title="Разработка мобильных приложений для iOS от Digital Devils - это"
          list={[
            "Инвестиции в будущее развитие бизнеса",
            "Эффективный канал коммуникации с реальными и потенциальными клиентами",
            "Упрощение процесса продаж за счет внедрения платежных инструментов Apple",
            "Двусторонняя обратная связь, поддержка пользователей ПО.",
          ]}
          isDark={false}
        />
        <MainBlockTenth data={data} />
      </BasicLayoutDark>
    </>
  );
};

export default joomla;

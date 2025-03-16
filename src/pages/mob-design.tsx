import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import HalfImageBlock from "@/components/HalfImageBlock";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { ChooseTheRightOneBlock } from "@/components/ChooseTheRightOneBlock";
import BasicLayoutDark from "@/layouts/BasicLayoutDark";
import MobileTitleBlock from "@/components/MobileTitleBlock";
import MobMediaBlock from "@/components/MobMediaBlock";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import { YourIdeasBlock } from "@/components/YourIdeasBlock";

const PAGE_NAME = "mob-design";
const BREADCRUMB_PAGE_NAME = "Дизайн мобильных приложений";

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
    title: "Что входит в услугу дизайн мобильного приложения?",
    description: (
      <p className="text-[18px] ">
        Создание дизайн-концепта, кликабельного прототипа, UI-кита,
        дизайн-системы, поиск всех возможных сценариев использования продукта. 
      </p>
    ),
  },
  {
    title: "Сколько времени необходимо для разработки дизайна приложения?",
    description: (
      <p className="text-[18px] ">
        БВ среднем на реализацию одного проекта уходит от 3 до 7 недель, все
        зависит от его сложности и масштабности. 
      </p>
    ),
  },
  {
    title: "Насколько важен продуманный дизайн мобильного ПО?",
    description: (
      <p className="text-[18px] ">
        Эргономичные, интуитивно понятные интерфейсы с визуально привлекательным
        дизайн - критический элемент успешного продвижения вашего программного
        продукта. Именно от дизайна зависит пользовательский опыт, узнаваемость
        бренда, лояльность к нему со стороны целевой аудитории.
      </p>
    ),
  },
];

const joomla = () => {
  return (
    <>
      <SEO
        title="Разработка веб-приложений на заказ в Минске | Цена на Digital Devils"
        description="Разрабатываем web-приложения, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте разработку своего веб-приложения экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayoutDark>
        <Breadcrumbs breadcrumbs={breadcrumbs} theme="dark" />
        <MobileTitleBlock
          title={
            <>
              <h1 className="font-bold text-[40px] sm:text-[55px] md:text-[75px] lg:text-[90px] xl:text-[110px] leading-[55px] md:leading-[80px] lg:leading-[100px] xl:leading-[120px]">
                Дизайн мобильных приложений
              </h1>
            </>
          }
        />
        <MobMediaBlock
          type="image"
          url1="/resources/mob-design1.png"
          url1small="/resources/mob-design1small.png"
          url2="/resources/mob-design2.png"
          url2small="/resources/mob-design2small.png"
          url3="/resources/mob-design3.png"
          url3small="/resources/mob-design3small.png"
          url4="/resources/mob-design4.png"
          url5="/resources/mob-design5.png"
        />
        <DifferentTasksBlock
          bigTitle="Разные задачи - разный подход"
          smallText="UX/UI дизайн приложения от Digital Devils:"
          paragraphs={[
            {
              title: "Технически осуществимый",
              text: "Наши дизайнерские решения соответствуют всем требованиям Google Play и App Store.",
            },
            {
              title: "Адаптированный для Android и iOS",
              text: "Выполняем разработку нативных и кроссплатформенных приложений, поэтому наши UI-киты могут использоваться на разных платформах. ",
            },
            {
              title: "Основанный на аналитике",
              text: "Проводим собственные маркетинговые исследования, объясняем клиентам на чем стоит сфокусировать внимание, а от чего лучше отказаться. ",
            },
          ]}
          isDark={false}
        />
        <YourIdeasBlock
          bigTitle="Реализуем проекты любой сложности"
          smallText=""
          isDark={false}
          paragraphs={[
            {
              title: "Дизайн мобильных приложений",
              text: "Создаем уникальные и удобные интерфейсы для мобильных приложений, ориентируясь на последние тенденции UI/UX-дизайна. Разрабатываем стиль, повышающий вовлеченность пользователей и удобство взаимодействия с вашим продуктом.Улучшаем навигацию, визуальную привлекательность и адаптацию под различные платформы.",
              badges: [],
              buttonText: "Дизайн мобильных приложений",
              imagePath: "/resources/mob-apps-idea5.png",
            },
          ]}
          isOnlyBottomPadding={true}
        />
        <ChooseTheRightOneBlock
          title="Индивидуальный и комплексный подход"
          text1={
            <p className="text-[22px] mb-[20px] font-bold">
              Мы не просто рисуем красивые и забавные картинки. Работа над
              каждым проектом начинается с тщательного изучения рынка, после
              чего специалисты Digital Devils:
            </p>
          }
          text2={
            <ul className="flex flex-col gap-[5px]">
              {[
                " создают и корректируют прототип приложения;",
                " тестируют механику согласованного макета;",
                " оценивают удобство интерфейсов для целевой аудитории;",
                " разрабатывают иконки, оформление кнопок и форм;",
                " продумывают варианты совмещения программного кода и дизайна ПО;",
                " участвуют в финальном тестировании продукта, устраняют выявленные ошибки и баги интерфейса.",
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
          card="Срок разработки дизайна приложения составляет от 2 месяцев"
          data={[
            { title: "Длительность:", text: "от 3 месяцев" },
            { title: "Стоимость:", text: "от 10000$" },
          ]}
        />
        <HalfImageBlock
          title="Сколько стоит разработка дизайна мобильных приложений?"
          smallTitle=""
          isOnlyBottomPadding={true}
          description={
            <>
              <p className="font-bold text-[22px] lg:mb-0 mb-[20px]">
                Стоимость работы над каждым проектом рассчитывается
                индивидуально под конкретного проекта. Чтобы уточнить цену
                расскажите нам о своем бизнесе, целях и задачах мобильной
                разработки. Мы проанализируем полученную информацию и подготовим
                смету на наши услуги. 
              </p>
            </>
          }
          isDark={true}
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/mob-design66.png"}
          smallImage={"/resources/mob-design66.png"}
          isImageCenter={true}
          widthImage={588}
          heightImage={306}
        />
        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row-reverse justify-between lg:gap-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/mob-design67.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={528}
                  height={350}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h1 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px] leading-normal mb-[30px]">
                  Почему выбирают нас?
                </h1>
                <ul className="flex flex-col gap-[10px]">
                  {[
                    " Не используем скучные и шаблонные решения.",
                    " Находим оптимальный баланс между удобством и визуальной привлекательностью.",
                    " Имеем большой опыт разработки приложений для разных отраслей бизнеса в Беларуси.",
                    " Отслеживаем инновации в дизайне, ориентируемся на актуальные тренды.",
                    " Выстраиваем отлаженный и предсказуемый процесс выполнения заказов.",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <span className="text-custom_yellow text-[18px] font-medium">
                        /
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/mob-design67small.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
              </div>
            </div>
          }
        />
        <MainBlockTenth data={data} />
      </BasicLayoutDark>
    </>
  );
};

export default joomla;

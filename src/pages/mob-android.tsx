import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { ChooseTheRightOneBlock } from "@/components/ChooseTheRightOneBlock";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import BasicLayoutDark from "@/layouts/BasicLayoutDark";
import MobileTitleBlock from "@/components/MobileTitleBlock";
import { YourIdeasBlock } from "@/components/YourIdeasBlock";

const PAGE_NAME = "mob-android";
const BREADCRUMB_PAGE_NAME = "Android разработка";

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
      "Предоставляете ли вы услуги гарантийной поддержки мобильных приложений для Android?",
    description: (
      <p className="text-[18px] ">
        Да, наши гарантийные обязательства, конкретные сроки и условия сервисной
        поддержки закреплены в договоре с клиентом.
      </p>
    ),
  },
  {
    title: "Можете ли вы доработать мобильное приложение для Android?",
    description: (
      <p className="text-[18px] ">
        Безусловно, мы не только разрабатываем ПО с нуля, но и беремся за
        доработку, обновление и масштабирование уже существующих проектов. Нам
        можно заказать исправление багов, улучшение дизайна, внедрение нового
        функционала. 
      </p>
    ),
  },
  {
    title:
      "Как обеспечивается защита данных пользователя и безопасность приложения?",
    description: (
      <p className="text-[18px] ">
        В процессе разработки мы внедряем шлюзы и ключи API, шифруем базы данны.
        Организуем тестирование цифровых продуктов с составлением списка
        возможных угроз и уязвимостей. Настраиваем разграничение прав доступа. 
      </p>
    ),
  },
];

const joomla = () => {
  return (
    <>
      <SEO
        title="Разработка мобильных приложений для Android в Минске | Стоимость на Digital Devils"
        description="Разрабатываем мобильные приложения под Android, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего приложения на Android экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayoutDark>
        <Breadcrumbs breadcrumbs={breadcrumbs} theme="dark" />
        <MobileTitleBlock title={"Мобильная разработка Android"} />
        <StandardMarginsLayout
          styles={`py-[50px] lg:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="">
                <div className="w-full block lg:hidden  mb-[20px]">
                  <Image
                    src={"/resources/android_4.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={340}
                    height={413}
                  />
                </div>
                <p className="lg:max-w-[527px] text-[18px] font-medium">
                  Команда высококлассных специалистов Digital Devils реализует
                  профессиональные услуги разработки приложений для Android в
                  Минске.{" "}
                </p>
                <p className="lg:max-w-[527px] text-[18px] mt-[10px] font-medium">
                  Создаем современные цифровые продукты, внедряем технологии ИИ
                  и машинного обучения. Автоматизируем сложные бизнес-процессы.
                  Повышаем продажи. Привлекаем внимание целевой аудитории. 
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[753px] min-w-[400px]">
                <Image
                  src={"/resources/android_3.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={753}
                  height={400}
                />
              </div>
            </div>
          }
        />

        <WideBlockWithImage
          title="Разработка под Android любой сложности"
          text_1="Android - одна из самых популярных мобильных платформ в мире. Поэтому для большинства современных компаний создание приложений для Андроид-устройств - не прихоть, а острая необходимость."
          text_11="У нас есть опыт работы с социальными сетями, риэлторскими сервисами, финансовыми маркетплейсами, службами доставки."
          text_2="Команде Digital Devils под силу создание типового и кастомного ПО. Выполняем полный цикл мобильный разработки, начиная от первичного консультирования и заканчивая запуском готового продукта, его сопровождением и технической поддержкой. "
        />

        <YourIdeasBlock
          bigTitle="Преимущества мобильной разработки под Android"
          smallText=""
          isDark={false}
          isOnlyBottomPadding={false}
          paragraphs={[
            {
              title: "Android",
              text: "На начало 2025 года доля Android-устройств на международном мобильном рынке составляла 71,7%. Более половины пользователей смартфонов предпочитают оформлять заказы, приобретать товары и услуги через мобильные приложения. При таких исходных данных наличие собственного Андроид приложения становится обязательным условием успеха белорусского бизнеса.",
              badges: [
                {
                  name: "Kotlin",
                },
                {
                  name: "Swift",
                },
                {
                  name: "MongoDB",
                },
              ],
              buttonText: "IOS разработка",
              imagePath: "/resources/mob-apps-idea2.png",
            },
          ]}
        />

        <StandardMarginsLayout
          styles={`pt-[50px] lg:pt-[60px] bg-black text-white `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/adnroid_1.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={525}
                  height={355}
                />
              </div>
              <div className="">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Как заказать разработку Android-приложения
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Создание приложения для платформы Android начинается с
                  составления технического задания. Наш менеджер обсуждает с
                  заказчиком нюансы и тонкости будущего проекта.
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/adnroid_2.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[20px] font-medium">
                  В соответствии с поставленными задачами мы подбираем
                  оптимальный тип приложения и стек технологий. В работу проект
                  поступает после обсуждения ТЗ и концепции цифрового продукта с
                  заказчиком.
                </p>
                <a
                  className="flex lg:w-auto w-full mt-[20px]"
                  href="/application"
                  rel="nofollow"
                >
                  <div
                    className={`font-medium text-[18px]  lg:w-auto w-full py-[12.5px] px-[20px] text-center rounded-full text-white bg-blue_main`}
                  >
                    Обсудить проект
                  </div>
                </a>
              </div>
            </div>
          }
        />
        <ChooseTheRightOneBlock
          title="Этапы мобильной разработки"
          text1={
            <p className="text-[22px] mb-[20px] font-bold">
              После поступления проекта в работу наши специалисты:
            </p>
          }
          text2={
            <ul className="flex flex-col gap-[5px]">
              {[
                " Анализируют аналогичные предложения конкурентов",
                " Готовят макет дизайна и функционала",
                " Программируют клиентскую и сервисную часть",
                " Выполняют тестирование и отладку",
                " Публикуют приложение в каталоге Google Play",
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
          card="Опционально нам можно заказать настройку интеграций, техническую поддержку и обновление ПО после запуска."
          data={[
            { title: "Длительность:", text: "от 3 месяцев" },
            { title: "Стоимость:", text: "от 10000$" },
          ]}
        />

        <StandardMarginsLayout
          styles={`py-[50px] lg:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h1 className="text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] max-w-[1093px]">
                Из чего складывается стоимость Android разработки
              </h1>
              <p className="text-[20px] mb-[30px] lg:mb-[60px] lg:text-[22px] font-medium  max-w-[866px]">
                Основные факторы, влияющие на стоимость - сложность поставленной
                задачи и сроки ее решения. Дополнительно учитываются такие
                моменты, как: особенности дизайна, количество экранов, наличие
                корзины, анимации и интерактивных элементов, авторизация через
                соцсети.
              </p>
              <div className="border-t-[1px] border-black  pt-[30px]">
                <p className="text-[16px] font-medium">
                  Цена разработки приложения
                </p>
                <p className="text-[20px] lg:text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  Итоговая цена реализации проекта рассчитывается индивидуально.
                  Возможна корректировка бюджета разработки за счет ограничения
                  функционала и упрощения программного продукта.
                </p>
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

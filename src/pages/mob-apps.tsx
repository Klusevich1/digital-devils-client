import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import HalfImageBlock from "@/components/HalfImageBlock";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import BasicLayoutDark from "@/layouts/BasicLayoutDark";
import MobileTitleBlock from "@/components/MobileTitleBlock";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import { YourIdeasBlock } from "@/components/YourIdeasBlock";
import Image from "next/image";
import MobMediaBlock from "@/components/MobMediaBlock";

const PAGE_NAME = "mob-apps";
const BREADCRUMB_PAGE_NAME = "Разработка мобильных приложений";

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
    title: "Как быть, если у меня есть только идея приложения?",
    description: (
      <p className="text-[18px] ">
        Ничего страшного, мы поможем воплотить вашу идею в жизнь: определим
        необходимых функционал, разработаем дизайн, интерфейс, рассчитываем
        вилку стоимости и сроки первичной разработки приложения. 
      </p>
    ),
  },
  {
    title:
      "С какими инструментами разработки и языками программирования вы работайте?",
    description: (
      <p className="text-[18px] ">
        Мы используем все актуальные средства и инструменты разработки
        мобильного ПО. Языки программирования: Java, C#, C++, Python,
        JavaScript, TypeScript. СУБД: PostgreSQL, MySQL, MS SQL, Oracle.
        Фреймворки: SpringBoot, React, Angular. 
      </p>
    ),
  },
  {
    title: "Даете ли вы какие-то гарантии результата?",
    description: (
      <p className="text-[18px] ">
        Предоставляем отчеты по итогам каждого этапа разработки. Запускаем
        полностью готовый к использованию цифровой продукт, помогаем с его
        размещением в каталогах плеймаркетов. 
      </p>
    ),
  },
];

const joomla = () => {
  return (
    <>
      <SEO
        title="Разработка мобильных приложений в Минске | Стоимость на Digital Devils"
        description="Разрабатываем мобильные приложения, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего приложения экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayoutDark>
        <Breadcrumbs breadcrumbs={breadcrumbs} theme="dark" />
        <MobileTitleBlock
          title={
            <>
              <h1 className="font-bold text-[40px] sm:text-[55px] md:text-[75px] lg:text-[90px] xl:text-[110px] leading-[55px] md:leading-[80px] lg:leading-[100px] xl:leading-[120px]">
                Разработка мобильных приложений
              </h1>
            </>
          }
        />
        <MobMediaBlock type="video" urlVideo="/resources/mobapps.mp4" />
        <DifferentTasksBlock
          bigTitle="Создаем цифровые продукты с нуля и до запуска"
          smallText="Разработка мобильных приложений от Digital Devils - это быстрое и точное решение бизнес-задач для любых сфер и направлений деятельности: финтеха, ритейла, фудтеха, логистики, страхования и многих других. "
          paragraphs={[
            {
              title: "Разработка приложений на заказ",
              text: "Создаем ПО для интернет-магазинов и супермаркетов, клиентских сервисов, утилиты, биллинговые системы, реализуем AV/VR-проекты.",
            },
            {
              title: "Интеграция готового продукта",
              text: "Проектируем API, настраиваем серверную часть, выполняем интеграции со сторонними сервисами и программами, встраиваем службы геолокации, доставки, платежные системы.",
            },
            {
              title: "Поддержка и обновление",
              text: "Предоставляем услуги технического сопровождения приложения. По мере необходимости дорабатываем ПО и обновляем его.",
            },
          ]}
          isDark={false}
        />
        <YourIdeasBlock
          bigTitle="Нам под силу решение любой задачи"
          smallText=""
          isOnlyBottomPadding={false}
          paragraphs={[
            {
              title: "Приложения для iOS",
              text: "Нам можно заказать разработку мобильного приложения для iPad, iPhone, Apple TV, Apple Watch для разных сфер бизнеса: торговли, услуг, интернет-магазинов, логистики. Наше ПО повышает продажи и лояльность клиентов, является отличным инструментом автоматизации бизнес-процессов.",
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
              link: "mob-ios",
              buttonText: "IOS разработка",
              imagePath: "/resources/mob-apps-idea1.png",
            },
            {
              title: "Приложения для Android",
              text: "Разрабатываем приложения на Android для коммерческих компаний и некоммерческих профессиональных сообществ с использованием передовых технологий и нативных средств. Создаем гибкие и масштабируемые программы под особенности вашего бизнеса и запросы целевой аудитории.",
              badges: [
                {
                  name: "Flutter",
                },
                {
                  name: "Kotlin",
                },
                {
                  name: "MongoDB",
                },
              ],
              link: "mob-android",
              buttonText: "Android разработка",
              imagePath: "/resources/mob-apps-idea2.png",
            },
            {
              title: "Услуги ASO",
              text: "Откройте новые возможности для своего бизнеса вместе с нашей командой экспертов. Благодаря технологиям и инструментам PWA разработки ваш сайт трансформируется и скачивается на смартфон, как приложение. Работают такие такие продукты на всех устройствах и платформах и не нуждаются в дополнительной адаптации.",
              badges: [],
              link: "mob-aso",
              buttonText: "ASO продвижение",
              imagePath: "/resources/mob-apps-idea3.png",
            },
            {
              title: "PWA-разработка",
              text: "Знаем, как улучшить позиции вашего приложения в рейтингах App Store и Google Play. Выполняем комплексную оптимизацию страницы цифрового продукта в популярных магазинах, улучшаем ее видимость, увеличиваем количество скачиваний программы.",
              badges: [],
              link: "mob-pwa",
              buttonText: "PWA разработка",
              imagePath: "/resources/mob-apps-idea4.png",
            },
            {
              title: "Дизайн мобильных приложений",
              text: "Создаем уникальные и удобные интерфейсы для мобильных приложений, ориентируясь на последние тенденции UI/UX-дизайна. Разрабатываем стиль, повышающий вовлеченность пользователей и удобство взаимодействия с вашим продуктом.Улучшаем навигацию, визуальную привлекательность и адаптацию под различные платформы.",
              badges: [],
              link: "mob-design",
              buttonText: "Дизайн мобильных приложений",
              imagePath: "/resources/mob-apps-idea5.png",
            },
            {
              title: "Разработка веб-приложений",
              text: "Разрабатываем современные веб-приложения с высокой производительностью и удобным интерфейсом. Используем передовые технологии и подходы, чтобы создать решения, работающие на всех устройствах и платформах без необходимости дополнительной адаптации. Обеспечиваем быструю загрузку, интуитивно понятный интерфейс.",
              badges: [],
              link: "mob-web",
              buttonText: "Разработка веб-приложений",
              imagePath: "/resources/mob-apps-idea6.png",
            },
          ]}
        />
        <HalfImageBlock
          title="Стоимость разработки мобильного приложения"
          smallTitle="Сколько стоит создать собственнное приложение?"
          description={
            <>
              <p className="font-medium text-[18px] mb-[10px]">
                Стоимость разработки ПО зависит от технической сложности
                проекта, его дизайна, интерфейса, функционала. Рассчитывается
                после подготовки ТЗ и дорожной карты развития конкретного
                приложения.
              </p>
              <p className="font-medium text-[18px] mb-[20px]">
                Вы в любой момент можете скорректировать требования под
                конкретные сроки и бюджет, усложнить или упростить продукт. Наши
                специалисты подскажут, что стоит реализовать в первую очередь, а
                что может подождать. Делимся лайфхаками и практическими советами
                о том, как можно сэкономить на разработки, а в каких случаях
                этого делать не стоит. 
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/mob-apps-3.png"}
          smallImage={"/resources/mob-apps-3.png"}
          widthImage={640}
          heightImage={338}
          isDark={false}
          isOnlyBottomPadding={false}
        />
        <BlockWithImageAndDropDownMenu
          isDark={true}
          title="Процесс разработки мобильных приложений включает следующие этапы"
          borderColor="#ffffff"
          margin="py-[50px] md:py-[60px] "
          data={[
            {
              title: "Анализ требований и аудит бизнеса",
              description: [
                "Интервьюирование заказчика. Заполнение брифа с подробным описанием запроса и ожиданий. Подготовка технического задания.",
              ],
            },
            {
              title: "План работ",
              description: [
                "Составляем план и график работ. Определяем стоимость разработки. Понятно. Прозрачно. Без подводных камней.",
              ],
            },
            {
              title: "Проектирование",
              description: [
                "Команда специалистов готовит проектную документацию: глоссарий с терминологией, цели создания, требования к функционалу и платформе, сценарии использования, описание экранов, интерфейса и т.д.",
              ],
            },
            {
              title: "Дизайн и прототипирование",
              description: [
                "Создаем дизайн-проект с учетом требований клиента и сценариев использования продукта. Выполняем юзабилити исследование, тестирование предложенных решений. Разрабатываем статичный или интерактивный прототип будущей программы.",
              ],
            },
            {
              title: "Программирование",
              description: [
                "На этом этапе разработчики и программисты создают интерактивную версию приложения. Программируют его серверную часть.",
              ],
            },
            {
              title: "Тестирование",
              description: [
                "Программное обеспечение тестируется на всех популярных моделях смартфонов с разными размерами и разрешениями дисплеев. Тестирование бэкэнда. При необходимости корректируется функционал.",
              ],
            },
            {
              title: "Публикация",
              description: [
                "Подготавливаем описание приложения для Apple Store и Google Play, размещаем ПО в маркетплейсах. Выполняем продвижение с помощью ASO-оптимизации.",
              ],
            },
          ]}
          firstBlock={
            <div className="relative h-full lg:max-w-[753px] block lg:min-w-[422px] lg:mb-0 lg:me-[30px]">
              <Image
                src={"/resources/mob-apps-process.png"}
                width={524}
                height={543}
                className="object-cover w-full"
                alt="Процесс разработки мобильных приложений включает следующие этапы"
              />
            </div>
          }
        />
        <WideBlockWithImage
          title="Сроки создания мобильных приложений"
          text_1="Конкретные сроки реализации проектов зависят от технических требований к будущего ПО. Для типовых продуктов разработка может занимать от 2 месяцев, для сложных кастомных версий - от 4 до 6 месяцев."
          text_2="После успешного запуска мы готовы продолжить работу над приложением, чтобы оно оставалось надежным и функциональным. Улучшаем интерфейс, расширяем функционал, разрабатываем обновления в области безопасности в соответствии с меняющимися бизнес-задачами."
        />

        <MainBlockTenth data={data} isOnlyBottomPadding={false} />
      </BasicLayoutDark>
    </>
  );
};

export default joomla;

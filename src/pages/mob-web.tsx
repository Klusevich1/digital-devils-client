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
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";

const PAGE_NAME = "mob-web";
const BREADCRUMB_PAGE_NAME = "Разработка веб-приложений";

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
    name: "Разработка мобильных приложений",
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
    title: "В чем разница между сайтом и веб-приложением?",
    description: (
      <p className="text-[18px] ">
        Сайт - это статичный информационный ресурс, на котором пользователь
        потребляет готовый контент: читает тексты, смотрит изображения или
        видео. Веб-приложение - интерактивная платформа, функционал которой
        рассчитан на активное взаимодействие: совершение покупок, выполнения
        задач, управления данными.
      </p>
    ),
  },
  {
    title: "Предоставляете ли вы поддержку клиентов после завершения проекта?",
    description: (
      <p className="text-[18px] ">
        В течение месяца с момента запуска веб-приложения мы остаемся на связи с
        заказчиком, оперативно решаем возникающие вопросы, устраняем ошибки,
        чтобы продукт работал безупречно. 
      </p>
    ),
  },
  {
    title: "Сколько времени занимает разработка веб-приложения?",
    description: (
      <p className="text-[18px] ">
        Конкретные сроки зависят от сложности ПО, его функциональности,
        интеграций, платформы, используемых технологий. В среднем речь идет о
        нескольких месяцах. 
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
                Разработка <br></br> веб-приложений
              </h1>
            </>
          }
        />
        <WideBlockWithImage
          title="Заказать разработку веб-приложений любой сложности"
          text_1="Создание web-приложения с нуля - сложная и многофакторная задача, решение которой вы можете доверить профессиональной команде Digital Devils. Сотрудничаем с коммерческими и некоммерческими организациями из разных сфер деятельности."
          text_2="Разрабатываем типовые и кастомные продукты под конкретные бизнес-цели. В результаты вы получаете мобильное ПО, соответствующее потребностям вашей компании. В дальнейшем приложение можно обновлять, модернизировать и улучшать."
        />
        <StandardMarginsLayout
          styles={`pt-[50px] lg:pt-[60px] bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/mob-web1.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Стоимость разработки приложения
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Цена на разработку web-приложений рассчитывается индивидуально
                  с учетом множества факторов
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
                  Сложность проекта, функционал, дизайн, интеграции с другими
                  сервисами, сроки реализации. На стоимость также влияет выбор
                  операционной системы: <a href="/mob-ios" className="text-blue_main">iOS</a>, <a href="/mob-android" className="text-blue_main">Android</a> или обе, тип продукта -
                  нативный или кросс-платформенный, дополнительные пожелания
                  заказчика. 
                </p>
                <a
                  className="flex lg:w-fit w-full mt-[20px]"
                  href="/application"
                  rel="nofollow"
                >
                  <div
                    className={`font-medium text-[18px]  lg:w-fit w-full py-[12.5px] px-[20px] text-center rounded-full text-white bg-blue_main`}
                  >
                    Связаться с нами
                  </div>
                </a>
              </div>
            </div>
          }
        />
        <YourIdeasBlock
          bigTitle="Работаем с вашими идеями"
          smallText=""
          isDark={false}
          paragraphs={[
            {
              title: "Разработка веб-приложений",
              text: "Разрабатываем современные веб-приложения с высокой производительностью и удобным интерфейсом. Используем передовые технологии и подходы, чтобы создать решения, работающие на всех устройствах и платформах без необходимости дополнительной адаптации. Обеспечиваем быструю загрузку, интуитивно понятный интерфейс.",
              badges: [],
              buttonText: "Разработка веб-приложений",
              imagePath: "/resources/mob-web2.png",
            },
          ]}
          isOnlyBottomPadding={false}
        />
        <DifferentTasksBlock
          bigTitle="Разные задачи - разный подход"
          smallText="Digital Devils - слаженная команда профессионалов, готовых воплотить в реальность даже самые сложные и нестандартные идеи."
          paragraphs={[
            {
              title: "Для владельцев бизнеса",
              text: "Обеспечиваем быстрый выход продукта на рынок. Предлагаем выгодные цены на разработку, привлекательные тарифы на поддержку. Наши приложения легко масштабируются, способствуют увеличению конверсии и продаж.",
            },
            {
              title: "Для владельца продукта",
              text: "Выполняем полный цикл разработки от идеи до релиза. Под каждый проект подбираем оптимальные команды специалистов разного профиля. Эффективно распределяем ресурсы. Реализуем услуги по поддержке и обновлению ПО.",
            },
            {
              title: "Для пользователей",
              text: "Созданные нами веб-приложения имеют удобный интерфейс, интуитивно понятную навигацию, продуманное меню и функционал, дизайн, с которым комфортно взаимодействовать.",
            },
          ]}
          isDark={false}
          isOnlyBottomPadding={true}
        />
        <ChooseTheRightOneBlock
          title="Почему мы?"
          text1={
            <p className="text-[22px] mb-[20px] font-bold">
              Вам не придется дополнительно искать подрядчиков - мы продумаем
              каждый нюанс вашего проекта, реализуем полный цикл разработки: от
              оценки идеи до запуска готового продукта. 
            </p>
          }
          text2={
            <ul className="flex flex-col gap-[5px]">
              {[
                " Разработка веб-приложений для бизнеса под ключ",
                " Профессиональная техническая поддержка",
                " Индивидуальный подход к каждому клиенту",
                " Высокая скорость разработки",
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
          card="По вашему запросу продолжим сопровождение продукта даже после его внедрения."
          data={[
            { title: "Длительность:", text: "от 2 недель" },
            { title: "Стоимость:", text: "от 1000$" },
          ]}
        />
        <MainBlockTenth data={data} isOnlyBottomPadding={false} />
      </BasicLayoutDark>
    </>
  );
};

export default joomla;

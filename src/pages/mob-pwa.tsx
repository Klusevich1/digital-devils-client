import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import HalfImageBlock from "@/components/HalfImageBlock";
import HalfImageText from "@/components/HalfImageText";
import { ChooseTheRightOneBlock } from "@/components/ChooseTheRightOneBlock";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import CaseBlock from "@/components/CaseBlock";
import BasicLayoutDark from "@/layouts/BasicLayoutDark";
import MobileTitleBlock from "@/components/MobileTitleBlock";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

const PAGE_NAME = "mob-pwa";
const BREADCRUMB_PAGE_NAME = "PWA разработка";

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
    title: "Как проверить адаптивность веб-приложения или сайта?",
    description: (
      <p className="text-[18px] ">
        Да, для самостоятельной проверки адаптивности приложения или
        интернет-ресурса воспользуйтесь такими инструментами, как BrowserStrack,
        Google Mobile-Frendly Test, Responsive Design Checker. 
      </p>
    ),
  },
  {
    title: "Для каких сайтов вы выполняйте адаптивную верстку?",
    description: (
      <p className="text-[18px] ">
        Практически для любых: ленднги, визитки, корпоративные порталы,
        интернет-магазины и другие.
      </p>
    ),
  },
  {
    title: "Зачем нужны адаптивные версии веб-ресурсов и приложений?",
    description: (
      <p className="text-[18px] ">
        Повышают удобство использования, улучшают SEO-оптимизацию, способствуют
        ускоренной загрузке контента.
      </p>
    ),
  },
];

const joomla = () => {
  return (
    <>
      <SEO
        title="Разработка мобильной версии сайта в Минске | Цена на Digital Devils"
        description="Разрабатываем мобильные версии сайтов, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте разработку мобильной версии своего сайта экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayoutDark>
        <Breadcrumbs breadcrumbs={breadcrumbs} theme="dark" />
        <MobileTitleBlock
          title={
            <>
              <h1 className="font-bold text-[40px] sm:text-[55px] md:text-[75px] lg:text-[90px] xl:text-[110px] leading-[55px] md:leading-[80px] lg:leading-[100px] xl:leading-[120px]">
                Мобильная версия <br></br> веб-сайта
              </h1>
            </>
          }
        />
        <StandardMarginsLayout
          styles={"py-[50px] md:py-[60px] bg-white text-black"}
          children={
            <>
              <div
                className={`flex md:flex-row-reverse flex-col gap-12 justify-between"
                }`}
              >
                <div className="relative h-full max-w-[753px] min-w-[40%] hidden lg:block">
                  <Image
                    src={"/resources/mob-pwa_case.png"}
                    width={525}
                    height={400}
                    className="object-cover"
                    alt={"Мы разрабатываем то, что нужно Вам"}
                  />
                  <a
                    href="/application"
                    rel="nofollow"
                    className="absolute md:bottom-6 bottom-3 md:left-6 left-3 px-[30px] py-[9px] lg:py-[10px] lg:px-[40px] w-fit mt-[20px] flex justify-center items-center  bg-blue_main rounded-full text-white"
                  >
                    <span className=" text-[22px] md:text-[24]">Кейс</span>
                  </a>
                </div>
                <div className="flex flex-col lg:block items-center">
                  <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] w-full">
                    Мы разрабатываем то, что нужно Вам
                  </h2>
                  <div className="lg:max-w-[500px] mb-[30px] lg:hidden block">
                    <Image
                      src={"/resources/mob-pwa_case.png"}
                      width={341}
                      height={353}
                      className="object-cover"
                      alt={"Мы разрабатываем то, что нужно Вам"}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[24px] mb-[20px]">
                      Разработка мобильных версий{" "}
                      <a href="/landing" className="text-blue_main">лендингов</a>,{" "}
                      <a href="/information-site" className="text-blue_main">
                        информационных и новостных порталов
                      </a>
                      , <a href="/online-store" className="text-blue_main">интернет-магазинов</a> от студии
                      Digital Devils
                    </h2>
                    <p className="text-[18px] font-medium">
                      Высокая скорость загрузки и уникальный функционал для
                      носимых устройств. Разрабатываем современные и
                      функциональные ресурсы по технологии адаптивного дизайна
                      на основе уже существующих сайтов.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <HalfImageBlock
          title="Мобильная версия сайта: основные преимущества"
          smallTitle=""
          description={
            <ul className="mb-[20px] max-w-[640px] w-full flex flex-col gap-[10px]">
              {[
                " Только целевые и полезные для мобильной аудитории элементы.",
                " Корректное отображение по ширине экране информационных блоков.",
                " Максимальное удобство управления и знакомства с информацией.",
                " Удобочитаемый шрифт, оптимизированная графика.",
              ].map((item, idx) => (
                <li key={idx} className="text-[18px]">
                  <span className="text-custom_yellow text-[18px] font-medium">
                    /
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          }
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/pwa_1.png"}
          smallImage={"/resources/pwa_2.png"}
          widthImage={639}
          heightImage={300}
        />
        <DifferentTasksBlock
          bigTitle="100% найдем подход к вашей задаче"
          smallText="Мобильные версии сайтов от студии Digital Devils прекрасно открываются на любых смартфонах, планшетах и любых других устройствах."
          paragraphs={[
            {
              title: "",
              text: "Направлена на улучшение и переработку контента на странице в магазине с целью повышения ее видимости, увеличения числа посещений и скачиваний.",
            },
            {
              title: "",
              text: "Раскрутка приложения в социальных сетях, показ объявлений по ключевым словам в поиске и на рекламных платформах поисковых систем.",
            },
            {
              title: "",
              text: "Сбор статистики по аудитории и каналам трафика для отслеживания и анализа результатов продвижения программного продукта, повышения его эффективности в будущем.",
            },
          ]}
          isDark={true}
        />
        <WideBlockWithImage
          title="Мы знаем, что нужно вашим клиентам"
          text_1="Обеспечьте клиентам 100% комфорт использования вашего сайта на смартфонах и планшетах и они отблагодарят вас покупками! Мы знаем, как перевести сайт на мобильную версию."
          text_2="К реализации каждого проекта подходим комплексно - погружаемся, анализируем, ищем интересные и индивидуальные решения. Помогаем автоматизировать процессы, увеличивать прибыль, развивать бренд."
        />
        <ChooseTheRightOneBlock
          title="Своим клиентам мы предлагаем"
          text1=""
          text2={
            <ul className="flex flex-col gap-[5px]">
              {[
                " Разработку адаптивного <a href='/mob-design' class='text-blue_main'>дизайна сайта</a>. Не требует создания отдельного интерфейса.",
                " Создание мобильной версии сайта. Если интерфейс и дизайн ресурса имеют сложную логику работы, без отдельной мобильной версии не обойтись.",
                " Поддержку мобильных сайтов. Будем рады продолжить сотрудничество после успешной сдачи проекта.",
                " <a href='/seo' class='text-blue_main'>Продвижение сайтов</a>. Поможем оптимизировать ресурс, улучшить его конверсию и позицию в поисковых системах <a href='/seo-google' class='text-blue_main'>Google</a> и <a href='/seo-yandex' class='text-blue_main'>Яндекс</a>.",
              ].map((item, idx) => (
                <li key={idx}>
                  <span className="text-custom_yellow text-[16px] font-medium">
                    /
                  </span>{" "}
                  <span dangerouslySetInnerHTML={{__html: item}}></span>
                </li>
              ))}
            </ul>
          }
          slash={[]}
          card="Срок разработки мобильной версии составляет от 2 месяцев"
          data={[
            { title: "Длительность:", text: "от 2 недель" },
            { title: "Стоимость:", text: "от 1000$" },
          ]}
        />
        <HalfImageText
          isOnlyBottomPadding={false}
          isDark={false}
          title={"Узнайте цену"}
          smallTitle={"Сколько стоит разработка мобильной версии сайта?"}
          image={"/resources/mob-pwa2.png"}
          smallImage={"/resources/mob-pwa3.png"}
          widthImage={640}
          heightImage={300}
          buttonColor="#345CFF"
          buttonText="Связаться с нами"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Стоимость услуг Digital Devils по созданию мобильной и
                адаптивной версии сайта зависит от целого ряда факторов: тип
                площадки (<a href="/card-website" className="text-blue_main">визитка</a>, корпоративный портал, интернет-магазин и
                др.), сложность реализации поставленных задач, особенности
                дизайна и интерфейса и др. Итоговую цены рассчитываем
                индивидуально с учетом бюджета клиента. 
              </p>
            </>
          }
        />
        <MainBlockTenth data={data} isOnlyBottomPadding={true} />
      </BasicLayoutDark>
    </>
  );
};

export default joomla;

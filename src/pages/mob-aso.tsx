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
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import { YourIdeasBlock } from "@/components/YourIdeasBlock";

const PAGE_NAME = "mob-aso";
const BREADCRUMB_PAGE_NAME = "ASO продвижение";

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
    title: "От чего зависит рейтинг приложения в каталогах плеймаркетов?",
    description: (
      <p className="text-[18px] ">
        На рейтинг влияет множество факторов, включая количество установок,
        оценки и отзывы, вовлеченность пользователей, оптимизацию метаданных и
        т.д.
      </p>
    ),
  },
  {
    title: "Как долго нужно придерживаться ASO-стратегии?",
    description: (
      <p className="text-[18px] ">
        ASO - это непрерывный процесс. Мы рекомендуем регулярно оптимизировать
        метаданные, анализировать статистику по продвижению, отслеживать
        изменения в требованиях магазинов приложений для актуализации
        ASO-стратегии. 
      </p>
    ),
  },
  {
    title: "От чего зависит скорость продвижения мобильного приложения?",
    description: (
      <p className="text-[18px] ">
        Основные факторы, влияющие на скорость продвижения - тип программного
        продукта и уровень конкуренции, существующий в вашей нише. 
      </p>
    ),
  },
];

const joomla = () => {
  return (
    <>
      <SEO
        title="Продвижение мобильных приложений в Минске | Цена ASO на Digital Devils"
        description="Разрабатываем и продвигаем мобильные приложения, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте продвижение своего приложения экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayoutDark>
        <Breadcrumbs breadcrumbs={breadcrumbs} theme="dark" />
        <MobileTitleBlock
          title={
            <>
              <h1 className="font-bold text-[40px] sm:text-[55px] md:text-[75px] lg:text-[90px] xl:text-[110px] leading-[55px] md:leading-[80px] lg:leading-[100px] xl:leading-[120px]">
                Продвижение мобильных приложений
              </h1>
            </>
          }
        />
        <HalfImageBlock
          title="Комплексное продвижение приложений"
          smallTitle=""
          isOnlyBottomPadding={true}
          description={
            <p className="font-medium text-[18px] mb-[20px]">
              Улучшаем видимость и позиции вашего цифрового продукта в
              популярных маркетплейсах. Обеспечиваем эффективное взаимодействие
              с пользователями, естественный рост органического трафика,
              количества скачиваний и установок.
            </p>
          }
          isDark={true}
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/seo_2.png"}
          smallImage={"/resources/seo_3.png"}
          widthImage={639}
          heightImage={300}
        />
        <StandardMarginsLayout
          styles={`py-[50px] lg:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[753px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Мы разрабатываем то, что нужно Вам
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Оптимизация и продвижение приложений и игр в Беларуси{" "}
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_1.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={340}
                    height={292}
                  />
                </div>
                <p className="text-[18px] mt-[20px] font-medium">
                  Команда специалистов Digital Devils знает, как сделать ваше
                  приложение популярным, продвинуть его в ТОП маркетов Google
                  Play и App Store. Выполним анализ конкурентов и целевой
                  аудитории, подберем семантику, оптимизируем метаданные ПО:
                  улучшим заголовок и описание, внедрим SEO-запросы, добавим
                  видеоролики и скриншоты на страницу продукта в каталоге.{" "}
                </p>
              </div>
              <div className=" lg:block hidden  w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_1.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={525}
                  height={400}
                />
              </div>
            </div>
          }
        />
        <DifferentTasksBlock
          bigTitle="Найдем подход к любой задаче"
          smallText="Комплексное продвижение мобильных приложений от Digital Devils - это"
          paragraphs={[
            {
              title: "ASO-оптимизация",
              text: "Направлена на улучшение и переработку контента на странице в магазине с целью повышения ее видимости, увеличения числа посещений и скачиваний.",
            },
            {
              title: "Контекстная и таргетированная реклама",
              text: "Раскрутка приложения в социальных сетях, показ объявлений по ключевым словам в поиске и на рекламных платформах поисковых систем.",
            },
            {
              title: "Настройка аналитики",
              text: "Сбор статистики по аудитории и каналам трафика для отслеживания и анализа результатов продвижения программного продукта, повышения его эффективности в будущем.",
            },
          ]}
          isDark={true}
        />
        <YourIdeasBlock
          bigTitle="Выполняем продвижение приложений и игр с гарантией результата"
          smallText=""
          isDark={false}
          paragraphs={[
            {
              title: "ASO",
              text: "Под каждое приложение и маркетплейс разрабатываем индивидуальную стратегию оптимизации и продвижения. Уделяем внимание особенностям ниши, конкурентному окружению, поведенческим паттернам целевой аудитории. Нам важен не только рост трафика, но и его качество и стоимость привлечения. ",
              badges: [],
              buttonText: "ASO продвижение",
              imagePath: "/resources/mob-apps-idea3.png",
            },
          ]}
          isOnlyBottomPadding={false}
        />
        <StandardMarginsLayout
          styles={`pb-[50px] md:pb-[60px] bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row justify-between lg:gap-[41px]">
              <div className="w-full lg:block hidden max-w-[640px] min-w-[500px]">
                <Image
                  src={"/resources/mob-aso1.png"}
                  alt={"ASO"}
                  width={640}
                  height={337}
                />
              </div>
              <div className="lg:max-w-[638px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px] lg:mb-[30px]">
                  Почему выбирают нас?
                </h2>
                <div className="w-full block lg:hidden mt-[20px]">
                  <Image
                    src={"/resources/mob-aso2.png"}
                    alt={"ASO"}
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <ul className="flex flex-col gap-[10px]">
                  {[
                    " Не боимся сложных и нестандартных задач, берем на себя ответственность за результат.",
                    " Максимально погружаемся в проект. Проводим аудит бизнеса и программного продукта, выстраиваем индивидуальную стратегию на основе полученных данных.",
                    " Работаем комплексно и под ключ. Занимаемся семантикой, рекламой, аналитикой, сопровождением.",
                    " Предоставляем регулярные отчеты по достигнутым целям.",
                  ].map((item, idx) => (
                    <li key={idx}>
                      <span className="text-custom_yellow text-[16px] font-medium">
                        /
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className="flex lg:w-auto w-full mt-[20px]"
                  href="/application"
                  rel="nofollow"
                >
                  <div
                    className={`font-medium text-[18px]  lg:w-auto w-full py-[12.5px] px-[20px] text-center rounded-full text-white bg-blue_main`}
                  >
                    Связаться с нами
                  </div>
                </a>
              </div>
            </div>
          }
        />
        <ChooseTheRightOneBlock
          title="Сколько стоит продвижение мобильных приложений?"
          text1={
            <p className="text-[22px] mb-[20px] font-bold">
              Стоимость наших услуг зависит от:
            </p>
          }
          text2={
            <ul className="flex flex-col gap-[5px]">
              {[
                " поставленных клиентом целей и задач",
                " особенностей и отрасли бизнеса",
                " объема работ",
                " уровня конкуренции",
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
          card="Итоговую цену специалисты студии Digital Devils рассчитают в соответствии с ТЗ, после обсуждения всех деталей заказа. "
          data={[
            // { title: "Длительность:", text: "от 8 недель" },
            { title: "Стоимость:", text: "от 700$" },
          ]}
        />
        <MainBlockTenth data={data} isOnlyBottomPadding={false} />
      </BasicLayoutDark>
    </>
  );
};

export default joomla;

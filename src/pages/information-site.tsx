import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TitleBlock } from "@/components/TitleBlock";
import { StagesOfWorkBlock } from "@/components/StagesOfWorkBlock";
import { ChooseTheRightOneBlock } from "@/components/ChooseTheRightOneBlock";
import MainBlockFive from "@/components/MainBlockFive";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import CaseBlock from "@/components/CaseBlock";
import WhiteBlockWithDoubleParagraphsAndImage from "@/components/WhiteBlockWithDoubleParagraphsAndImage";
import BlockWithBigImageAndText from "@/components/BlockWithBigImageAndText";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Информационный сайт", link: "/information-site" },
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
    name: "Информационный сайт",
    item: "https://digitaldevils.by/information-site",
  },
];

const informationSite = () => {
  const data: DataItem[] = [
    {
      title:
        "Как быть, если после запуска сайта нам понадобится дополнительный функционал?",
      description: (
        <p className="text-[18px] ">
          Наши ресурсы можно дополнять новыми функциями и интеграциями,
          дорабатывать, масштабировать. Поэтому проблем с кастомизацией не
          возникнет. 
        </p>
      ),
    },
    {
      title: "Что входит в стоимость разработки сайта?",
      description: (
        <p className="text-[18px]">
          В обобщенном виде цена создания нового информационного портала
          включает оплату услуг по анализу и планированию проекта, дизайну и
          разработке пользовательского интерфейса, верстке и программированию,
          тестированию и отладке, первичному наполнению контентом. 
        </p>
      ),
    },
    {
      title: "Будет ли работать наш сайт на мобильном телефоне?",
      description: (
        <p className="text-[18px]">
          По заявке заказчика мы выполним адаптивную верстку информационной
          площадки под любые устройства: ПК, ноутбуки, смартфоны и все
          популярные браузеры.
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Разработка информационного сайта | Цена на создание инфо сайтов в Беларуси"
        description="Разрабатываем информационные сайты, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят каждую статью. Доверяйте создание информационного сайта экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/information-site"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TitleBlock
          title="Разработка информационного сайта"
          description="Комплексный подход к разработке информационных сайтов под ключ. Мы предлагаем полный пакет услуг, начиная с проработки идеи и заканчивая технической поддержкой. Нам важен долгосрочный результат и постоянный рост. "
          imagePath="/resources/information-site.png"
        />

        <BlockWithBigImageAndText
          title="Сделайте свой сайт привычкой"
          text_1=""
          text_2=""
          text_3=""
          imagePath="/resources/information_image.png"
          text={
            <>
              <p className="font-bold text-[24px] mb-[20px]">
                По статистике, у каждого интернет-пользователя имеется 2-3
                информационных сайта: новостники, агрегаторы, советчики,
                лайфстайл-журналы, блоги, профессиональные издания на которые он
                заходит не менее нескольких раз в неделю.
              </p>
              <p className="text-[18px] font-medium">
                Если вы планируйте оперативно доводить до целевой аудитории
                информацию, используйте нативную рекламу для продвижения
                продуктов и услуг. Разработка информационного ресурса поможет
                решить эти и многие другие бизнес задачи. 
              </p>
            </>
          }
          margin="pb-[50px] md:pb-[60px]"
          isRevert={false}
        />
        <CaseBlock
          bigTitle="Мы разрабатываем то, что нужно Вам"
          smallTitle=""
          text={
            <div>
              <h2 className="font-bold text-[24px] mb-[20px]">
                Информационный сайт - интернет-ресурс, на котором размещаются
                различные материалы, ориентированные на узкоспециализированную
                или широкую аудиторию.
              </h2>
              <p className="text-[18px] mb-[20px] font-medium">
                Может быть посвящен какой-то одной теме или охватывать разные
                направления и проблемы. Такие площадки имеют удобную навигацию и
                сложную структуру из разделов, подразделов, категорий и
                подкатегорий. 
              </p>
              <h3 className="text-[20px] mb-[10px] font-medium">
                Виды информационных сайтов:
              </h3>
              <ul>
                {[
                  " Региональные порталы (городские, областные, районные",
                  " Новостные площадки (газет, журналов, телеканалов)",
                  " Персональные блоги",
                  " Веб энциклопедии и справочники",
                  " Онлайн кинотеатры",
                  " Электронные библиотеки",
                  " Интернет-форумы",
                ].map((item, idx) => (
                  <li key={idx}>
                    <span className="text-custom_yellow text-[16px] font-medium">
                      /
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          }
          imagePath="/resources/landing-case.png"
          margin="pb-[50px] md:pb-[60px]"
          buttonText="Обсудить проект"
          isRevert={true}
        />

        <ChooseTheRightOneBlock
          title="Преимущества информационных сайтов от Digital Devils"
          text1={<></>}
          text2={
            <ul className="flex flex-col gap-[5px]">
              {[
                " Глубокий анализ конкурентов. Гарантируем, что ваш сайт лучше! Анализ сильных и слабых сторон порталов со схожей тематикой и целевой аудиторией, позволяет подбирать оптимальный вариант оформления и продвижения площадки в каждом конкретном случае.",
                " <a href='/design' class='text-blue_main'>Уникальный дизайн</a>. Никаких шаблонов. Только эксклюзивные и узнаваемые решения, благодаря которым посетители запомнят именно ваш сайт.",
                " Современные CMS. Простое и удобное управление сайтом. Оперативная доработка разделов и функционала. Несложная публикация новых текстов.",
                " Размещение на хостинге. Поможем с подбором домена. Созданные нами сайты хорошо индексируются поисковыми системами.",
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
          card="Срок изготовления информационного сайта по индивидуальному дизайну -  от 30 дней. "
          data={[
            { title: "Длительность:", text: "от 1 месяца" },
            { title: "Стоимость:", text: "от 2000$" },
          ]}
        />
        <WhiteBlockWithDoubleParagraphsAndImage
          title="Инновационные технологии, передовые технические и дизайнерские решения"
          p1=""
          p2=""
          imagePath="/resources/inforamtion_site_image.png"
          text={<></>}
          margin="pt-[50px] md:pt-[60px]"
          imageMargin="ml-[80px]"
          widthImage={343}
          heightImage={327}
          smallTitle="Сколько стоит создать информационный сайт с нуля?"
          smallText="Цена разработки информационного сайта под ключ зависит от сроков и задач, которые стоят перед бизнесом, ожидаемого масштаба площадки, дополнительных функций и технических элементов, необходимых для стабильной и безопасной работы ресурса. У нас можно заказать реализацию проекта любой сложности и тематики. "
        />
        <StandardMarginsLayout
          styles=""
          children={
            <div className="lg:max-w-[694px] mt-[30px]">
              <div className="flex items-start mb-[10px]">
                <Image src="/resources/arrow_custom.svg" alt={"arrow"} width={32} height={32} />
                <p className="text-[18px] ms-[20px] font-medium">
                  Наши специалисты работают со всеми современными фреймворками:
                  <a href='https://digitaldevils.by/laravel' className='no-underline text-blue_main'>Laravel</a>, Vue/Nuxt.js, Yii, React/Next.js, React Native, что
                  обеспечивает высокую скорость разработки и надежность готового
                  продукта.
                </p>
              </div>
              <div className="flex items-start mb-[10px]">
                <Image src="/resources/arrow_custom.svg" alt={"arrow"} width={32} height={32} />
                <p className="text-[18px] ms-[20px] font-medium">
                  Используем популярные платные и бесплатные движки: <a href='https://digitaldevils.by/bitrix' className='no-underline text-blue_main'>1С-Битрикс</a>,
                  <a href='https://digitaldevils.by/wordpress' className='no-underline text-blue_main'>WordPress</a>, <a href='https://digitaldevils.by/opencart' className='no-underline text-blue_main'>OpenCart</a>, <a href='https://digitaldevils.by/joomla' className='no-underline text-blue_main'>Joomla</a>, MODX
                </p>
              </div>
              <div className="flex items-start mb-[10px]">
                <Image src="/resources/arrow_custom.svg" alt={"arrow"} width={32} height={32} />
                <p className="text-[18px] ms-[20px] font-medium">
                  Внедряем технологии, обеспечивающие высокую скорость загрузки
                  страниц даже при высоком трафике.
                </p>
              </div>
              <a
                href="/application"
                rel="nofollow"
                className="lg:hidden px-[30px] py-[10px] lg:max-w-72 lg:w-fit w-full flex justify-center items-center  bg-blue_main rounded-full text-white mt-[20px]"
              >
                <span className="text-[18px] font-medium">Обсудить проект</span>
              </a>
            </div>
          }
        />
        <StagesOfWorkBlock
          title="Как работают специалисты нашей студии"
          data={[
            {
              title: "Обсуждение",
              text: "Вы рассказывайте, для каких целей нужен ресурс, мы предлагаем современные и креативные решения. Чем детальнее обсудим будущий проект, тем точнее будет техническое задание и продуктивнее работа.",
              circles: 1,
            },
            {
              title: "Заключение договора",
              text: "В документе прописываем тематику, цели и задачи, сроки, цену и многие другие условия сотрудничества.",
              circles: 2,
            },
            {
              title: "Разработка макета",
              text: "Создаем прототип будущего сайта с описанием основных блоков. В дальнейшем макет корректируется и дорабатывается до тех пор, пока он не станет воплощением ваших представлений об идеальном тематическом или информационном ресурсе.",
              circles: 3,
            },
            {
              title: "Дизайн, верстка, программирования тестирование",
              text: "Наиболее сложный и продолжительный этап, к которому подключаются профильные специалисты: дизайнеры, разработчики, программисты. По итогу получает полностью рабочий ресурс, готовый к переносу на выбранную CMS и наполнению.",
              circles: 4,
            },
            {
              title: "Наполнение контентом",
              text: "Копирайтинг с подготовкой уникальных статей и проработанным семантическим ядром, подготовка интересного и привлекательного визуального контента. С нас эксклюзивный дизайн и анимация - с вас быстрое согласование всех деталей!",
              circles: 5,
            },
            {
              title: "Финальное тестирование",
              text: "Перед запуском сайта выполняем настройку его административной части. Проверяем площадку на возможные ошибки. Готовим ресурс для дальнейшей <a href='/seo' class='text-blue_main'>оптимизации и продвижения</a>.",
              circles: 6,
            },
          ]}
          margin="py-[50px] md:py-[60px]"
          text={<></>}
        />
        <MainBlockFive title="Наши проекты" />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default informationSite;

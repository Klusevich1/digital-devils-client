import SEO, { ListItem } from "@/components/SEO";
import React from "react";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TitleBlock } from "@/components/TitleBlock";
import { StagesOfWorkBlock } from "@/components/StagesOfWorkBlock";
import { WhiteMediumImageBlock } from "@/components/WhiteMediumImageBlock";
import { ChooseTheRightOneBlock } from "@/components/ChooseTheRightOneBlock";
import MainBlockFive from "@/components/MainBlockFive";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import WhiteBlockWithDoubleParagraphsAndImage from "@/components/WhiteBlockWithDoubleParagraphsAndImage";
import BlockWithBigImageAndText from "@/components/BlockWithBigImageAndText";
import Image from "next/image";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Сайт-каталог", link: "/website-catalog" },
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
    name: "Сайт-каталог",
    item: "https://digitaldevils.by/website-catalog",
  },
];

const websiteCatalog = () => {
  const data: DataItem[] = [
    {
      title: "Как сайт каталог поможет в развитии бизнеса?",
      description: (
        <p className="text-[18px] ">
          Разработка и запуск электронного каталога позволит значительно
          увеличить число клиентов, которые получают удобную платформу для
          поиска и покупки товаров. 
        </p>
      ),
    },
    {
      title:
        "Какие дополнительные функции можно реализовать на сайте каталоге?",
      description: (
        <p className="text-[18px]">
          Вариантов масса, включая автоматизированное обновление информации по
          товарам, интеграцию с CRM системами, сбор и обработку онлайн заявок,
          настройку SEO оптимизации, поиск, фильтры и т.д. 
        </p>
      ),
    },
    {
      title: "Как быть, если требуется внести изменения в онлайн-каталог?",
      description: (
        <p className="text-[18px]">
          Если нужно обновить или доработать электронный каталог наши
          специалисты помогут с реализацией изменений. Для получения помощи и
          технической поддержки свяжитесь с нами удобным для вас способом.
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Создание сайта каталога | Цена разработки сайтов каталогов в Беларуси"
        description="Разрабатываем сайты каталоги, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят каждую статью. Доверяйте создание своего сайта каталога экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/website-catalog"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TitleBlock
          title="Разработка сайта-каталога"
          description="Разрабатываем сайты-каталоги, которые помогают бизнесу, достигают высоких позиций в поиске и содержат необходимые для продвижения функции. Реализуем проекты любой сложности с простой панелью управления заказами и автозагрузкой товаров из CSV, XLS, 1C, прайсов, сайтов дилеров."
          imagePath="/resources/catalog_title.png"
        />

        <BlockWithBigImageAndText
          title="Сайт влияет на ваш бизнес"
          text={
            <>
              <p className="text-[22px] font-bold mb-[10px]">
                Предоставьте потенциальным и уже имеющимся клиентам
                исчерпывающую информацию о собственной продукции.
              </p>
              <p className="texxt-[18px] font-medium mb-[10px]">
                Покупателям важно знать, что о нем заботятся: четкие, цветные
                фото, подробные описания, детализированные характеристики - все
                это позволяет быстро находить нужный товар и сравнивать его с
                конкурирующими позициями.{" "}
              </p>
              <p className="texxt-[18px] font-medium mb-[10px]">
                Специалисты компании Digital Devils готовы разработать
                сайт-каталог под ожидания и запросы вашего бизнеса. Мы знаем,
                как воплотить в реальность даже самые смелые и неожиданные идеи.
                Успешно решаем задачи “со звездочкой”.
              </p>
            </>
          }
          text_1="Как увеличить количество заказов и повысить прибыль?"
          text_2=""
          text_3=""
          margin="pb-[50px] md:pb-[60px]"
          imagePath="/resources/catalog_image.png"
          isRevert={false}
        />

        <WhiteMediumImageBlock
          title="Реализуем все ваши идеи"
          text={
            <>
              <h2 className="font-bold text-[22px] mb-[20px]">
                Команда разработчиков Digital Devils готова создать
                функциональные и удобные сайты-каталоги для:
              </h2>
              <div className="flex items-start mb-[10px]">
                <Image src="/resources/arrow_custom.svg" alt={"arrow"} width={32} height={32} />
                <div className="ms-[20px] max-w-[646px]">
                  <p className="text-[18px] font-medium">
                    Демонстрации в одном месте полного товарного ассортимента
                    продавца
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-[10px]">
                <Image src="/resources/arrow_custom.svg" alt={"arrow"} width={32} height={32} />
                <div className="ms-[20px] max-w-[646px]">
                  <p className="text-[18px] font-medium">
                    Компаний, которые реализуют широкий перечень продукции:
                    более 100 наименований
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-[10px]">
                <Image src="/resources/arrow_custom.svg" alt={"arrow"} width={32} height={32} />
                <div className="ms-[20px] max-w-[646px]">
                  <p className="text-[18px] font-medium">
                    Бизнеса, который находится в поиске структурированной формы
                    подачи информации, разбитой на разделы и подразделы с
                    использованием фильтров и поиска.
                  </p>
                </div>
              </div>
            </>
          }
          smallText=""
          smallTitle=""
          margin="pb-[50px] md:pb-[60px]"
          badges={[]}
          imagePath="/resources/website_catalog_image2.png"
          isRevert={false}
        />

        <StagesOfWorkBlock
          title="Этапы разработки сайта-каталога"
          data={[
            {
              title: "Анализ рынка и основных конкурентов",
              text: "Изучаем целевую аудиторию, определяем ее потребности и ожидания.",
              circles: 1,
            },
            {
              title: "Разработка концепции и расчет цены проекта",
              text: "После согласования всех деталей подписываем договор с заказчиком.",
              circles: 2,
            },
            {
              title: "Формирование архитектуры",
              text: "Разрабатываем структуру. Создаем дизайн веб сайта. Верстаем макет ресурса. Проводим его предварительное тестирование.",
              circles: 3,
            },
            {
              title: "Заполнение",
              text: "Наполняем сайт контентом: уникальными описаниями, полезными статьями, фотографиями, видео обзорами. Ресурс вновь тестируется на баги и ошибки.",
              circles: 4,
            },
            {
              title: "Размещение на хостинге",
              text: "Производим запуск электронного каталога с тестированием его в разных режимах.",
              circles: 5,
            },
            {
              title: "Запуск проекта",
              text: "Разработанный нами сайт адаптируется под правила и требования поисковых систем, запуск контекстной рекламы.",
              circles: 6,
            },
          ]}
          margin="pb-[50px] md:pb-[60px]"
          text={<></>}
        />
        <WhiteBlockWithDoubleParagraphsAndImage
          title="Преимущества разработки сайта-каталога"
          p1=""
          p2=""
          text={
            <>
              <ul>
                {[
                  " Уникальный дизайн, заточенный под специфику и особенности конкретного бизнеса",
                  " Адаптивная верстка под любые устройства и браузеры",
                  " Наполнение разделов сайта и карточек товара материалами заказчика и уникальными статьями",
                  " Интуитивно понятная система управления ресурсом",
                  " Базовая оптимизация под требованиями поисковиков Google и Яндекс",
                  " Возможность подключения форм обратной связи, интеграций со сторонними сервисами",
                ].map((item, idx) => (
                  <li key={idx}>
                    <span className="text-custom_yellow text-[18px] font-medium">
                      /
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </>
          }
          margin="pb-[50px] md:pb-[60px]"
          imagePath="/resources/website_catalog_image.png"
          imageMargin="ml-[80px]"
          widthImage={400}
          heightImage={360}
          smallTitle=""
          smallText=""
        />
        <ChooseTheRightOneBlock
          title="Выбери подход, который нужен бизнесу"
          text1={
            <p className="text-[22px] mb-[20px] font-bold">
              Разработка сайтов каталогов - одно из основных направлений
              деятельности нашей студии. Своим клиентам в Минске и других
              городах Беларуси мы предлагаем:
            </p>
          }
          text2={
            <ul>
              {[
                " Глубокий анализ специфики и особенностей бизнеса",
                " Выгодную цену без скрытых доплат и комиссий",
                " Четкое и неукоснительное соблюдение сроков, зафиксированных в договоре",
                " Использование современных технологий и подходов к веб-разработке",
                " Оригинальный дизайн, обеспечивающий получение функционального, “идущего в ногу со временем” сайта",
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
          card="Срок разработки интернет-каталога составляет от 2 месяцев"
          data={[
            { title: "Длительность:", text: "от 8 недель" },
            { title: "Стоимость:", text: "от 4000$" },
          ]}
        />
        <MainBlockFive margin="py-[50px] md:py-[60px]" title="Наши проекты" />
        <MainBlockTenth data={data}/>
      </BasicLayout>
    </>
  );
};

export default websiteCatalog;

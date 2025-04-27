import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import OurCaseBlock from "@/components/OurCaseBlock";
import SmallMainBlockCard from "@/components/SmallMainBlockCard";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import OurApproachBlock from "@/components/OurApproachBlock";
import SeoTitleBlock from "@/components/SeoTitleBlock";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import CommentBlock from "@/components/CommentBlock";
import HalfImageBlock from "@/components/HalfImageBlock";
import TicketSeoBlock from "@/components/TicketSeoBlock";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import { FaCircleChevronRight } from "react-icons/fa6";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Продвижение сайтов", link: "/seo" },
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
    name: "Продвижение сайтов",
    item: "https://digitaldevils.by/seo",
  },
];

const SeoDarkBlock = [
  {
    title: "Продвижение сайтов в ТОП",
    text: "Хотите видеть сайт в ТОПе Яндекса и Google? Наши специалисты разрабатывают стратегии, которые работают. Мы не просто поднимаем позиции — создаем поток целевых посетителей, которые превращаются в клиентов.",
    link: "/seo",
  },
  {
    title: "В Яндексе",
    text: "Знаем все особенности белорусского поискового рынка и SEO продвижения сайтов на нем. Проводим глубокий анализ ниши и сайта, подбираем высокочастотные и низкочастотные запросы, оптимизируем контент под алгоритмы поисковика. Результат — стабильный рост позиций и увеличение видимости.",
    link: "/seo-yandex",
  },
  {
    title: "Интернет-магазины",
    text: "Для продвижения сайта онлайн-торговли нужен особый подход. Работаем над SEO, юзабилити, скоростью загрузки, конверсией. Цель — чтобы каждый посетитель становился покупателем.",
    link: "/seo-store",
  },
  {
    title: "Глубокий SEO-аудит",
    text: "Наш аудит сайта — это детальный разбор с конкретными рекомендациями по улучшению. Покажем, где вы теряете позиции и клиентов, и расскажем, как это исправить при помощи продвижения сайта.",
    link: "/seo-audit",
  },
  {
    title: "В Google",
    text: "Хотите выйти на международный рынок? Адаптируем сайт под требования Google, работаем с англоязычным и мультиязычным контентом. Помогаем привлекать клиентов на сайт из-за рубежа.",
    link: "/seo-google",
  },
  {
    title: "Молодые сайты",
    text: "К молодым сайтам нужен свой подход. Разрабатываем стратегии быстрого роста сайта, позволяющие новым ресурсам обходить конкурентов в короткие сроки. Работа с молодыми сайтами кропотливая и глубокая, поэтому продвижение будет чуть более долгим.",
    link: "/seo-young",
  },
];

const listData = [
  {
    title: "Технический аудит и базовая оптимизация сайта",
    text: [
      "Без исправления технических ошибок на сайте дальнейшее seo продвижение сайта бесполезно. На этом этапе проверяем индексацию (все ли страницы отображаются в поиске, возможно есть дубли), скорость загрузки (поисковики рекомендуют не более 2-3 секунд), мобильную адаптацию (более половины трафика идёт со смартфонов), безопасность (защита от взлома, HTTPS). ",
      "Всегда используются такие инструменты, как Google Search Console, Яндекс.Вебмастер. PageSpeed Insights, GTmetrix (проверка скорости), Screaming Frog (анализ структуры сайта)",
    ],
  },
  {
    title: "Поисковая оптимизация и семантика",
    text: [
      "Контент — главный фактор ранжирования при продвижении. На этом этапе важно подобрать ключевые слова (через Яндекс.Wordstat, Google Keyword Planner), проверить тексты и фото на уникальность и полезность текстов (исключить копипаст). ",
      "Также удостовериться в том, что тексты структурны (есть подзаголовки, таблицы, списки), а также проверить мета-теги (Title, Description, alt-тексты для изображений). ",
    ],
  },
  {
    title: "Внутренняя перелинковка",
    text: [
      "Когда прототипы одобрены, наступает этап разработки дизайн-концепции. Это включает в себя создание графического дизайна, выбор цветовых схем, шрифтов и других визуальных элементов.",
      "Используем стильные УТП.  Знаем, как акцентировать внимание посетителей на важной информации, вызвать доверие и положительные эмоции.",
    ],
  },
  {
    title: "Внешняя ссылочная масса сайта (бэклинки)",
    text: [
      "Помогает поисковикам понимать структуру. Чтобы её сделать правильно нужно связать релевантные сайты, использовать якорные ссылки, проработать “хлебные крошки” и карту сайта.",
      "Чтобы её сделать правильно нужно связать релевантные сайты, использовать якорные ссылки, проработать “хлебные крошки” и карту сайта. ",
    ],
  },
  {
    title: "Мониторинг и аналитика",
    text: [
      "SEO — это постоянный процесс.",
      "Нужно отслеживать при продвижении позиции в поиске (Ahrefs, Serpstat), трафик и поведение пользователей (Google Analytics), конверсии (целевые действия: заказы, звонки).",
    ],
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени нужно, чтобы получить первые результаты?",
      description: (
        <p className="text-[18px] ">
          Первые результаты (рост индексации, улучшение поведенческих факторов)
          могут появиться через 1–3 месяца. Заметный рост трафика и позиций
          обычно начинается через 4–6 месяцев, а стабильные результаты – через
          8–12 месяцев. Сроки зависят от уровня конкуренции в нише и текущего
          состояния сайта.
        </p>
      ),
    },
    {
      title: "Какие гарантии вы даете по повышению позиций и трафика?",
      description: (
        <p className="text-[18px]">
          Мы гарантируем работу по проверенным методикам, рост видимости сайта и
          увеличение органического трафика. Однако точные позиции не гарантируем
          – они зависят от алгоритмов поисковых систем и действий конкурентов. В
          отчетах показываем прогресс по ключевым метрикам.
        </p>
      ),
    },
    {
      title: "Какой бюджет нужен для эффективного SEO и от чего он зависит?",
      description: (
        <p className="text-[18px] ">
          Минимальный бюджет для старта – от 800 руб./мес. для локального
          бизнеса. Для высококонкурентных ниш или крупных проектов – от 1500
          руб./мес. Сумма зависит от объема работ, количества ключевых слов и
          уровня конкуренции. Оптимальный бюджет определяем после аудита.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="SEO-продвижение сайтов в Минске | Услуги SEO-оптимизации сайта в поиске | Цена на Digital Devils"
        description="Разрабатываем и продвигаем сайты в ТОП, которые выделяют ваш бизнес среди конкурентов. Стильный UX/UI, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте SEO-продвижение своего сайта экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/seo"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="SEO-продвижение сайтов" max_weight={1020} />
        <StandardMarginsLayout
          styles={`bg-white text-black pb-[50px] md:pb-[60px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Продвижение в ТОП
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Создаем не просто сайты — а рабочие инструменты для бизнеса
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_1__small.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Мы не просто занимаемся продвижением сайтов, а создаем систему
                  постоянного потока заявок. Вы получите рост трафика и продаж в
                  первые месяцы работы поисковой оптимизации. Настроим
                  продвижение сайта так, чтобы вы получили максимальный
                  результат. Проанализируем нишу, подберем ключевые запросы.
                  Работаем только проверенными способами.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[527px] min-w-[400px]">
                <Image
                  src={"/resources/seo_1_.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
            </div>
          }
        />
        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-black text-white`}
          children={
            <div className="flex flex-col lg:flex-row justify-between gap-[40px] flex-wrap">
              {SeoDarkBlock.map((item, i) => (
                <div className="flex flex-col w-full lg:max-w-[45%] xl:max-w-[30%]">
                  <div className="flex items-start justify-between">
                    <h2 className="text-[22px] font-bold">{item.title}</h2>
                    <a
                      href={item.link}
                      className="rounded-full flex items-center justify-center bg-blue_main min-w-[46px] size-[46px] lg:size-[50px]"
                    >
                      <LuArrowUpRight className="text-white size-[24px]" />
                    </a>
                  </div>
                  <div className="pt-[20px] border-t-[1px] font-medium text-[16px] lg:text-[18px] border-white mt-[20px]">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          }
        />
        <OurCaseBlock
          title="Наши кейсы"
          cases={[
            {
              miniTitle:
                "Интернет-магазин автозапчастей в Москве - прорыв на конкурентном рынке",
              text1:
                "<span class='font-bold'>О проекте:</span> стояла амбициозная задача - вывести сайт в ТОП в условиях жесткой конкуренции. Начиная с нуля, мы провели комплексную работу: глубокий технический аудит выявил более сотни критических ошибок, которые мешали продвижению.",
              text2:
                "<span class='font-bold'>Процесс:</span> внимание уделили разработке интеллектуальной системы фильтрации, позволяющей покупателям легко находить нужные детали по марке, модели и году выпуска автомобиля. Параллельно создавали экспертный контент - более 350 уникальных описаний категорий и 50 полезных статей для автовладельцев.",
              text3:
                "<span class='font-bold'>Результат:</span> всего через 10 месяцев магазин получал 220 тысяч целевых посетителей ежемесячно, а сотни ключевых запросов прочно закрепились в ТОП-3 поисковой выдачи.",

              imageUrl: "/resources/seo-case_1.png",
              numbers: (
                <>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-[10px] justify-between lg:flex lg:mb-[60px] mb-[30px] pt-[30px]">
                    <SmallMainBlockCard
                      title="+220 000"
                      description="Увеличение поискового трафика"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+2400"
                      description="Количество запросов в ТОП 10"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+50%"
                      description="Улучшение конверсии"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+43%"
                      description="Улучшение поведенческих факторов"
                      margin="mb-0"
                    />
                  </div>
                </>
              ),
              analiticsImg: "/resources/seo-numbers1.png",
              analiticsImgSmall: "/resources/seo-numbers1small.png",
            },
            {
              miniTitle: "Цветочный магазин - сезонный триумф",
              text1:
                "<span class='font-bold'>О проекте:</span> работая с интернет-магазином цветов при продвижении, мы столкнулись с устаревшей платформой и минимальным трафиком. Наш подход продвижения включал полный редизайн с акцентом на удобство пользователей и внедрение интерактивного конструктора букетов.",
              text2:
                "<span class='font-bold'>Процесс:</span> особое внимание уделили праздничному контенту, создав 14 тематических разделов для разных мероприятий. Процесс оформления заказа сократили до трех простых шагов, что повысило конверсию.",
              text3:
                "<span class='font-bold'>Результат:</span> через восемь месяцев кропотливой работы магазин демонстрировал тридцатикратный рост трафика при продвижении, а в предпраздничные дни обрабатывал до 120 заказов ежедневно.",

              imageUrl: "/resources/seo-case_2.png",
              numbers: (
                <>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-[10px] justify-between lg:flex lg:mb-[60px] mb-[30px] pt-[30px]">
                    <SmallMainBlockCard
                      title="+2900"
                      description="Увеличение поискового трафика"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+432"
                      description="Количество запросов в ТОП 10"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+69%"
                      description="Улучшение конверсии"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+48%"
                      description="Улучшение поведенческих факторов"
                      margin="mb-0"
                    />
                  </div>
                </>
              ),
              analiticsImg: "/resources/seo-young-numbers.png",
              analiticsImgSmall: "/resources/seo-young-numberssmall.png",
            },
            {
              miniTitle: "Автозапчасти в Минске - преодоление кризиса",
              text1:
                "<span class='font-bold'>О проекте:</span> у минского магазина автозапчастей была сложная ситуация в продвижении: низкая конверсия, проблемы с индексацией каталога и сильные конкуренты. Мы начали с полной переработки структуры, внедрив уникальную систему поиска по VIN-коду, что значительно упростило покупателям процесс выбора запчастей.",
              text2:
                "<span class='font-bold'>Процесс:</span> каждую карточку товара тщательно оптимизировали на сайте, что повысило кликабельность в результатах поиска на 70%. Дополнительный эффект дала программа лояльности, интегрированная в общую маркетинговую стратегию.",
              text3:
                "<span class='font-bold'>Результат:</span> итогом стала стабильная посещаемость на уровне 145 тысяч пользователей в месяц, при этом среднее время пребывания увеличилось более чем в два раза.",

              imageUrl: "/resources/seo-case_3.png",
              numbers: (
                <>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-[10px] justify-between lg:flex lg:mb-[60px] mb-[30px] pt-[30px]">
                    <SmallMainBlockCard
                      title="+145 000"
                      description="Увеличение поискового трафика"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+1800"
                      description="Количество запросов в ТОП 10"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+70%"
                      description="Улучшение конверсии"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+32%"
                      description="Улучшение поведенческих факторов"
                      margin="mb-0"
                    />
                  </div>
                </>
              ),
              analiticsImg: "/resources/seo-numbers-145.png",
              analiticsImgSmall: "/resources/seo-numbers-145small.png",
            },
            {
              miniTitle:
                "Премиальный ремонт квартир в Минске - локальный успех нашего SEO",
              text1:
                "<span class='font-bold'>О проекте:</span> для компании по ремонту квартир в Минске мы разработали стратегию, учитывающую специфику локального бизнеса при продвижении сайта.",
              text2:
                "<span class='font-bold'>Процесс:</span> первым делом собрали детальную семантику - более 1200 релевантных запросов, отражающих потребности клиентов. Затем создали серию тематических посадочных сайтов, каждая из которых была посвящена конкретному виду ремонта и сопровождалась наглядными кейсами с фотографиями и видеоотчетами. Акцент сделали на мобильную версию, добившись рекордной скорости загрузки.",
              text3:
                "<span class='font-bold'>Результат:</span> через 2 года сайт стабильно привлекал 7,5 тысяч заинтересованных посетителей в месяц, при этом 65% трафика при продвижении приходилось на самые коммерчески выгодные запросы.",

              imageUrl: "/resources/seo-case_4.png",
              numbers: (
                <>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-[10px] justify-between lg:flex lg:mb-[60px] mb-[30px] pt-[30px]">
                    <SmallMainBlockCard
                      title="+7500"
                      description="Увеличение поискового трафика"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+680"
                      description="Количество запросов в ТОП 10"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+45%"
                      description="Улучшение конверсии"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+67%"
                      description="Улучшение поведенческих факторов"
                      margin="mb-0"
                    />
                  </div>
                </>
              ),
              analiticsImg: "/resources/seo-yandex-numbers.png",
              analiticsImgSmall: "/resources/seo-yandex-numberssmall.png",
            },
          ]}
        />
        <StandardMarginsLayout
          styles="md:pb-[60px] pb-[50px]"
          children={<></>}
        />
        <WideBlockWithImage
          title="Что такое SEO и как работают поисковые системы? "
          text_1="SEO (Search Engine Optimization) — это процесс настройки сайта для повышения его видимости в результатах поиска Google, Яндекса и других систем, т.е. для продвижения. Поисковые алгоритмы оценивают сайты по множеству критериев, определяя их полезность и соответствие запросам пользователей."
          text_2="Когда человек ищет, например, «продвижение сайтов в Минске», система сканирует миллионы страниц, отбирая лучшие. В приоритете — сайты с быстрой загрузкой, актуальной информацией, удобным интерфейсом и положительной репутацией."
        />
        <StandardMarginsLayout
          styles={`pt-[50px] md:pt-[60px] bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[527px]">
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_4_small.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="mt-[20px] lg:mt-0 text-[18px] lg:text-[22px] font-medium">
                  Мы работаем с любыми нишами – начиная от производства и
                  заканчивая экспертным бизнесом. К любому проекту подходим
                  одинаково скрупулезно – не пропуская ни один нюанс, который
                  ведет к нужному результату.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[753px] min-w-[400px]">
                <Image
                  src={"/resources/seo_4.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  className="w-full"
                  height={360}
                />
              </div>
            </div>
          }
        />
        <StandardMarginsLayout
          styles="md:py-[60px] py-[50px]"
          children={
            <>
              <div>
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[950px]">
                  Почему SEO необходимо именно вам?
                </h2>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-[40px]">
                  <p className="text-[22px] font-medium">
                    93% пользователей не идут дальше первой страницы выдачи.
                    Если сайта нет в топ-10, вы теряете клиентов.
                  </p>
                  <p className="text-[22px] font-medium">
                    Конкуренты уже используют SEO в сайтах. Даже локальные
                    компании (например, стоматологии или автосервисы) активно
                    продвигаются в поиске.
                  </p>
                  <p className="text-[22px] font-medium">
                    SEO дешевле контекстной рекламы. Средний ROI (возврат
                    инвестиций) SEO — 500% и выше, тогда как контекстная реклама
                    редко дает больше 200%.
                  </p>
                </div>
              </div>
            </>
          }
        />
        <TicketSeoBlock
          title="Стоимость и сроки продвижения сайта"
          titleLeftBlock={"Сколько стоит вывести сайт в ТОП?"}
          textLeftBlock_1={
            "Узнайте реальную стоимость вывода сайта в ТОП выдачи. Мы не работаем с шаблонными пакетами — каждая цена рассчитывается индивидуально после изучения проекта. Серьезное seo продвижение сайта требует персонального подхода."
          }
          textLeftBlock_2={""}
          description_1={
            "Подойдет новым сайтам, которые начинают путь в выдаче при seo продвижении. Наши специалисты проведут детальный технический аудит, выявят и устранят основные ошибки. Проработаем базовые мета-теги, оптимизируем структуру и скорость загрузки."
          }
          description_2={
            "Начинаем с глубокого конкурентного анализа и изучения целевой аудитории. Формируем обширное семантическое ядро из 500+ релевантных запросов. Проводим полномасштабную техническую поисковую оптимизацию и разрабатываем контент-стратегию."
          }
          buttonText_1={"Связаться с нами"}
          buttonText_2={"Связаться с нами"}
          buttonColor_1={"#214BF6"}
          buttonColor_2={"#FAFAFA"}
          bgColor_1={""}
          bgColor_2={""}
          buttonBgColor_1={"#FAFAFA"}
          buttonBgColor_2={"#214BF6"}
          smallTitle_1={"Первичная оптимизация сайта"}
          smallTitle_2={"Базовая оптимизация сайта"}
          price_1={"350$"}
          price_2={"550$"}
          min_h_ticket_list={180}
          list_1={[
            "Индивидуальные решения",
            "Сочетаем проверенные методы с актуальными трендами",
            "Опыт 100+ проектов в разных нишах",
            "Дизайн = удобство + конверсия",
          ]}
          list_2={[
            "Индивидуальные решения",
            "Сочетаем проверенные методы с актуальными трендами",
            "Опыт 100+ проектов в разных нишах",
            "Дизайн = удобство + конверсия",
          ]}
        />
        <BlockWithImageAndDropDownMenu
          isDark={true}
          title="Ошибки в SEO, которые убивают трафик"
          miniTitle="Даже самое грамотное seo продвижение сайта может давать нулевые результаты из-за критичных ошибок. Некоторые из них снижают эффективность SEO и приводят к пессимизации (искусственному понижению позиций) или даже ручным санкциям со стороны систем. Разберем основные категории ошибок и их последствия"
          borderColor="#ffffff"
          margin="md:py-[60px] py-[50px]"
          data={[
            {
              title: "Технические ошибки — фундамент проблем",
              description: [
                "Скорость загрузки стала ключевым фактором ранжирования еще в 2018 году. Страница, которая грузится дольше 3 секунд, теряет до 40% посетителей еще до загрузки. Особенно критично это для мобильных устройств. Проблема дублей страниц часто возникает из-за параметров сортировки в интернет-магазинах или разных версий URL (с www и без). ",
                "Поисковики воспринимают это как попытку манипуляции и могут понижать позиции. Mobile-first индексация, введенная Google в 2021 году, означает, что теперь в первую очередь оценивается мобильная версия сайта. Ее отсутствие или плохая адаптация — прямой путь к потере трафика.",
              ],
            },
            {
              title:
                'Переоптимизация — когда "слишком хорошо" становится плохо',
              description: [
                "Классический пример — спам ключевыми словами, которые не только раздражают пользователей, но и вызывают санкции. Современные алгоритмы легко распознают неестественную плотность ключей. Скрытый текст (белый на белом фоне, крошечный шрифт) — грубое нарушение, которое приводит к ручным санкциям. В особо тяжелых случаях сайт может полностью вылететь из индекса.",
              ],
            },
            {
              title: "Токсичные ссылки — опасное наследие",
              description: [
                "Покупные ссылки с бирж — пережиток 2010-х, который сегодня приносит больше вреда, чем пользы. Особенно опасны ссылки с тематически нерелевантных сайтов — они сигнализируют поисковикам о возможной накрутке.",
              ],
            },
            {
              title: "Игнорирование пользовательского опыта",
              description: [
                'Контент, который не отвечает на запрос пользователя — распространенная ошибка. Например, статья про "ремонт квартир" без цен, примеров и контактов мастеров не удовлетворяет потребности посетителей, что быстро фиксируют поведенческие метрики. Сложная навигация — еще один "убийца" трафика. Если пользователь не может за 3 клика найти нужную информацию, он уходит, а высокий процент отказов негативно влияет на позиции.',
              ],
            },
          ]}
          firstBlock={
            <>
              <div className="h-fit lg:max-w-[753px] md:block hidden lg:min-w-[422px]">
                <Image
                  src={"/resources/seo-case1.png"}
                  width={524}
                  height={543}
                  className="object-cover w-full"
                  alt="Почему выбирают SEO"
                />
              </div>
              <div className="relative h-fit lg:max-w-[753px] md:hidden block lg:min-w-[422px]">
                <Image
                  src={"/resources/seo-case1small.png"}
                  width={340}
                  height={350}
                  className="object-cover w-full"
                  alt="Почему выбирают CMS SEO"
                />
              </div>
            </>
          }
        />
        <StandardMarginsLayout
          styles="md:pb-[60px] pb-[50px] bg-black text-white"
          children={
            <>
              <div className="flex flex-row justify-between gap-[40px]">
                <div>
                  <h3 className="md:text-[24px] text-[22px] font-bold mb-[20px]">
                    Регулярный технический аудит (минимум раз в квартал)
                    помогает выявлять и устранять ошибки на ранней стадии.{" "}
                  </h3>
                  <div className="lg:hidden block xl:min-w-[640px] min-w-[50%]">
                    <Image
                      src="/resources/seo-1small.png"
                      width={340}
                      height={300}
                      alt="Seo"
                      className="w-full"
                    />
                  </div>
                  <ul className="flex flex-col gap-[10px] lg:mt-0 mt-[20px]">
                    <li className="flex flex-row items-center">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <p>Проверке скорости загрузки через PageSpeed Insights</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <p>Анализу индексации в Search Console</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <p>Мониторингу поведенческих факторов</p>
                    </li>
                    <li className="flex flex-row items-center">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <p>Очистке ссылочного профиля</p>
                    </li>
                  </ul>
                </div>
                <div className="lg:block hidden xl:min-w-[640px] min-w-[50%]">
                  <Image
                    src="/resources/seo-1.png"
                    width={640}
                    height={300}
                    alt="Seo"
                    className="w-full"
                  />
                </div>
              </div>
            </>
          }
        />
        {/* Новые блоки */}
        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className={`flex flex-col gap-[30px]`}>
              <div>
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                  Как выбрать SEO стратегию? 
                </h2>
                <p className="md:text-[22px] text-[20px] font-medium max-w-[866px]">
                  SEO — не универсальный процесс. Подход к рекламе
                  интернет-магазина, локального сервиса и корпоративного сайта
                  будет разным. Правильно выбранная стратегия экономит бюджет и
                  ускоряет выход в топ.  
                </p>
              </div>
              <div
                className={`grid lg:grid-cols-3 grid-cols-1 md:gap-[40px] gap-[20px] border-t-[1px] pt-[30px] border-t-black`}
              >
                <div>
                  <p className="text-[22px] font-medium md:mb-[20px] mb-[10px]">
                    Интернет-магазины (E-commerce)
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-16px font-medium">
                        Поисковая оптимизация карточек товаров на сайте
                        (уникальные описания, ЧПУ, микроразметка Schema.org)
                      </span>
                    </div>
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-[16px] font-medium">
                        Сбор семантического ядра (фразы типа "купить [товар] в
                        [городе]")
                      </span>
                    </div>
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-[16px] font-medium">
                        Борьба с дублями (фильтры, сортировки должны закрываться
                        в noindex)
                      </span>
                    </div>
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-[16px] font-medium">
                        Отзывы (увеличивают доверие и улучшают поведенческие
                        факторы)
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[22px] font-medium md:mb-[20px] mb-[10px]">
                    Услуги (стройка, ремонт, юристы)  
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-16px font-medium">
                        Локальное SEO (оптимизация под запросы с
                        гео-уточнениями: "ремонт квартир в Минске")
                      </span>
                    </div>
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-[16px] font-medium">
                        Размещение в Google My Business и Яндекс.Справочнике
                        (вывод в "картах")
                      </span>
                    </div>
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-[16px] font-medium">
                        Контент с кейсами (фото "до/после", отзывы клиентов)
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[22px] font-medium md:mb-[20px] mb-[10px]">
                    Информационные сайты и блоги 
                  </p>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-16px font-medium">
                        Глубокая проработка тем при поисковой оптимизации
                        (длинные статьи 3000+ символов с экспертностью)
                      </span>
                    </div>
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-[16px] font-medium">
                        Внутренняя перелинковка (связывание статей по темам)
                      </span>
                    </div>
                    <div className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-[16px] font-medium">
                        Монетизация через рекламу/партнерки (высокий трафик =
                        доход)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <WideBlockWithImage
          title="Мы знаем, как привести новых клиентов"
          text_1="Каждый проект для нас – это уникальная задача, где главная цель – это высокая выручка заказчика при минимальных вложениях. Для этого мы автоматизируем все процессы и работаем над силой вашего бренда."
          text_2="Все специалисты в нашей команде имеют опыт работы от 5 лет в SEO оптимизации и знают на все 100% особенности белорусского рынка."
        />
        <HalfImageBlock
          isOnlyBottomPadding={false}
          title="Оптимизируем мобильную версию сайта"
          smallTitle="Сегодня более 60% всех онлайн-покупок совершается при помощи смартфонов – поэтому не адаптируя свой сайт под мобильную версию вы лишаетесь прибыли"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Наша команда быстро и легко делает мобильную версию сайтов так,
                чтобы они были максимально удобны для посетителей и нравились
                поисковым системам. Быстрота загрузки, юзабилити и адаптивный
                дизайн – вот на что мы делаем упор.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText="Связаться с нами"
          image={"/resources/seo_6.png"}
          smallImage={"/resources/seo_small_6.png"}
          widthImage={639}
          heightImage={300}
        />
        <OurApproachBlock
          title="Основные этапы продвижения"
          listData={listData}
          padding="pb-[50px] md:pb-[60px]"
        />
        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-black text-white `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden xl:min-w-[525px] min-w-[50%]">
                <Image
                  src={"/resources/seo-3.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={524}
                  height={300}
                  className="w-full"
                />
              </div>
              <div className="">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Почему SEO необходимо каждому бизнесу
                </h2>
                <div className="w-full block lg:hidden mt-[30px]">
                  <Image
                    src={"/resources/seo-3small.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={340}
                    height={300}
                  />
                </div>
                <p className="text-[18px] mt-[20px] font-medium">
                  В эпоху цифровизации бизнеса наличие сайта — это лишь первый
                  шаг. Без грамотного продвижения вас не найдут клиенты. SEO
                  (Search Engine Optimization) — это самый эффективный способ
                  привлекать целевой трафик из систем бесплатно.
                </p>
                <a
                  className="flex lg:w-fit w-full mt-[20px]"
                  href="/application"
                  rel="nofollow"
                >
                  <div
                    className={`font-medium text-[18px]  lg:w-fit w-full py-[12.5px] px-[20px] text-center rounded-full text-white bg-blue_main`}
                  >
                    Обсудить проект
                  </div>
                </a>
              </div>
            </div>
          }
        />
        <StandardMarginsLayout
          styles={`bg-white text-black my-[50px] md:my-[60px]`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] mb-[30px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px] lg:max-w-[950px]">
                Ваш надежный партнер в онлайн-пространстве
              </h2>
              <p className="mb-[30px] text-[22px] font-medium w-full lg:max-w-[642px]">
                Мы не просто занимаемся seo продвижением — мы создаем
                индивидуальные решения для каждого бизнеса.
              </p>
              <div className="lg:flex-row flex-col flex lg:space-x-2 justify-between pt-[30px] border-t-[1px] border-black">
                <div className="flex flex-col mb-[20px] lg:mb-0">
                  <p className="text-[16px] font-medium mb-[10px] lg:mb-[20px]">
                    Для предпринимателей
                  </p>
                  <p className="text-[22px] w-full lg:max-w-[414px] font-medium">
                    Ценим время и бюджет. Предлагаем эффективные решения для
                    быстрого выхода на рынок. Наши методы не просто увеличивают
                    трафик — они повышают конверсию и продажи. Гибкие тарифы и
                    прозрачные условия сотрудничества.
                  </p>
                </div>
                <div className="flex flex-col mb-[20px] lg:mb-0 ">
                  <p className="text-[16px] font-medium mb-[10px] lg:mb-[20px]">
                    Для предпринимателей
                  </p>
                  <p className="text-[22px] w-full lg:max-w-[414px] font-medium">
                    От идеи до реализации — полный цикл разработки и seo
                    продвижения сайтов. Собираем команду под конкретные задачи:
                    SEO-специалисты, маркетологи, таргетологи. Грамотное
                    распределение сайтов и четкий план действий.
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px] font-medium mb-[10px] lg:mb-[20px]">
                    Для предпринимателей
                  </p>
                  <p className="text-[22px] w-full lg:max-w-[414px] font-medium">
                    Создаем удобные и функциональные digital-продукты.
                    Продуманная структура, интуитивно понятный интерфейс и
                    адаптивный дизайн — то, что делает взаимодействие комфортным
                    для пользователей.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        <CommentBlock
          reviewsData={[
            {
              avatar: "/resources/avatar_11.png",
              name: "Ольга Иванова",
              jobTitle: "Владелица цветочного салона",
              reviewText:
                "Боялась, что реклама сайта цветов — это сложно и дорого. Оказалось, главное при seo продвижении — найти правильных исполнителей. Digital Devils сделали акцент на праздничных запросах, добавили конструктор букетов. В сезон продажи выросли в 5 раз! При этом бюджет был вполне разумный. Теперь советую их всем знакомым предпринимателям.",
            },
            {
              avatar: "/resources/avatar_12.png",
              name: "Игорь Лебедев",
              jobTitle: "Руководитель автосервиса",
              reviewText:
                "Когда заказал SEO продвижение сайта у ребят, сайт приносил 2-3 заявки в неделю. Через 6 месяцев — 15-20 ежедневно! Настроили геозависимое seo продвижение сайта, сделали систему онлайн-записи. Всегда на связи, любую проблему решают в течение дня. Это не просто подрядчики, а настоящие партнеры по бизнесу.",
            },
            {
              avatar: "/resources/avatar_13.png",
              name: "Елена Смирнова",
              jobTitle: "Маркетолог строительной компании",
              reviewText:
                "Работали с разными подрядчиками, но Digital Devils — первые, кто действительно разобрался в нашей специфике, ведь за продвижением обращались в разные компании. Сделали удобный калькулятор ремонта, оптимизировали сайты под региональные запросы. Теперь 70% покупателей находят нас через поиск. Отдельное спасибо за оперативные консультации! Продолжаем работать.",
            },
            {
              avatar: "/resources/avatar_14.png",
              name: "Дмитрий Петров",
              jobTitle: "Владелец сети кофеен ",
              reviewText:
                "Заказывали seo продвижение сайта и приложения. Ребята не просто подняли нам трафик, а научили правильно с ним работать при оптимизации. Их система аналитики показывает, откуда приходят покупатели и какие акции при оптимизации работают лучше всего. За полгода онлайн-заказы выросли в 3 раза. Рекомендую!",
            },
          ]}
        />
        <BlockWithImageAndDropDownMenu
          isDark={true}
          title="Услуги seo продвижения сайтов"
          borderColor="#ffffff"
          margin="md:pb-[60px] pb-[50px]"
          data={[
            {
              title: "Погружение в ваш бизнес",
              description: [
                "Начинаем с детального знакомства. Проводим интервью, изучаем специфику ниши и конкурентов. Формируем четкий бриф и техническое задание, где фиксируем все нюансы проекта.",
              ],
            },
            {
              title: "Прозрачное планирование",
              description: [
                "Разрабатываем пошаговый план с четкими сроками и бюджетом. Никаких скрытых платежей - вы сразу видите, за что платите. Определяем ключевые метрики для оценки результатов.",
              ],
            },
            {
              title: "Техническая экспертиза",
              description: [
                "Наши специалисты проводят комплексный аудит: от структуры до юзабилити. Анализируем текущие позиции, выявляем слабые места и точки роста. Готовим рекомендации по доработке платформы для лучшего seo продвижения.",
              ],
            },
            {
              title: "Контент и поисковая оптимизация",
              description: [
                "Прорабатываем семантическое ядро, оптимизируем мета-теги и структуру. Создаем полезные материалы, которые действительно интересны вашей аудитории. Настраиваем систему аналитики.",
              ],
            },
            {
              title: "Запуск и поддержка",
              description: [
                "После вывода в топ на продвижении не бросаем проект. Постоянно мониторим позиции, адаптируем стратегию под изменения алгоритмов поисковиков. Готовы оперативно реагировать на любые изменения в вашем бизнесе.",
              ],
            },
          ]}
          firstBlock={
            <>
              <div className="w-full md:flex hidden">
                <Image
                  src={"/resources/seo-4.png"}
                  width={527}
                  height={300}
                  className="w-full"
                  alt="Процесс разработки мобильных приложений включает следующие этапы"
                />
              </div>
              <div className="w-full md:hidden flex">
                <Image
                  src={"/resources/seo-4small.png"}
                  width={527}
                  height={300}
                  className="w-full"
                  alt="Процесс разработки мобильных приложений включает следующие этапы"
                />
              </div>
            </>
          }
        />
        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Прозрачные условия сотрудничества
              </h2>
              <p className="text-[18px] mb-[30px] lg:text-[22px] font-medium  max-w-[866px]">
                Стоимость SEO продвижения сайта всегда рассчитывается
                персонально. Мы учитываем множество факторов - от технической
                сложности до особенностей дизайна. Важную роль играет наполнение
                сайта. Также на цену влияют необходимые интеграции с другими
                сервисами и сроки реализации проекта.
              </p>
              <div className="border-t-[1px] border-black  pt-[30px]">
                <p className="text-[16px] font-medium">
                  Цена SEO-продвижения проекта
                </p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  Стоимость реализации проекта зависит от его сложности, сроков,
                  исходных данных и поэтому рассчитывается индивидуально. Мы
                  всегда идем навстречу клиентам и может корректировать бюджет.
                </p>
              </div>
            </div>
          }
        />
        <StandardMarginsLayout
          styles={`pb-[50px] md:pb-[60px] bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Баланс цены и качества
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Большой опыт и отлаженная работа команды позволяют предлагать
                  вам уникальные условия сотрудничества.
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_small_5.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[20px] font-medium">
                  Digital Devils – не компания «однодневка». Мы устойчивая и
                  стабильная организация, которая предлагает одни из лучших
                  условий на рынке SEO продвижения сайтов в Беларуси – наши
                  кейсы и отзывы наших клиентов прямое этому доказательство.
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
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_5.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
            </div>
          }
        />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default marketplace;

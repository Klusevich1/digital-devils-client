import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import OurCaseBlock from "@/components/OurCaseBlock";
import SmallMainBlockCard from "@/components/SmallMainBlockCard";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import Image from "next/image";
import SeoTitleBlock from "@/components/SeoTitleBlock";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import MainBlockFourth from "@/components/MainBlockFourth";
import CommentBlock from "@/components/CommentBlock";
import HalfImageBlock from "@/components/HalfImageBlock";
import TicketSeoBlock from "@/components/TicketSeoBlock";
import { FaCircleChevronRight } from "react-icons/fa6";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Продвижение сайтов", link: "/seo" },
  { name: "Продвижение в Яндекс", link: "/seo-yandex" },
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
  {
    "@type": "ListItem",
    position: 3,
    name: "Продвижение в Яндекс",
    item: "https://digitaldevils.by/seo-yandex",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени нужно для выхода в ТОП?",
      description: (
        <p className="text-[18px] ">
          Первые сдвиги — через 4-8 недель. Стабильный топ — 4-6 месяцев. Сроки
          зависят от ниши и текущего состояния сайта. Для молодых сайтов или
          высококонкурентных тематик может потребоваться больше времени - мы
          всегда честно оцениваем перспективы и держим клиента в курсе
          прогресса. Важно понимать, что SEO - это постепенный процесс, но
          первые результаты в виде роста трафика видны уже в первые месяцы.
        </p>
      ),
    },
    {
      title: "Почему именно Яндекс, а не Google?",
      description: (
        <p className="text-[18px]">
          Яндекс доминирует в Рунете, особенно в коммерческих запросах,
          охватывая более 60% российского поискового трафика. Его алгоритмы
          лучше учитывают региональные особенности и поведение русскоязычной
          аудитории. Но при необходимости мы работаем и с Google - для некоторых
          международных или высокотехнологичных проектов это может быть более
          приоритетным. Мы анализируем каждый случай индивидуально.
        </p>
      ),
    },
    {
      title: "Можно ли продвигать молодой сайт?",
      description: (
        <p className="text-[18px] ">
          Да! Мы специализируемся на быстром старте: сначала используем рекламу
          + локальные запросы, чтобы получить первых клиентов, параллельно
          проводим глубокую SEO-оптимизацию для долгосрочного результата. Для
          новых сайтов особенно важна правильная техническая база и контентная
          стратегия - мы помогаем выстроить их с нуля, избегая типичных ошибок
          новичков. Главное - реалистичные ожидания и поэтапный рост сайта и
          бизнеса.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="SEO-продвижение сайтов в ТОП Яндекса | Поисковая оптимизация сайтов в Минске"
        description="Комплексное SEO-продвижение сайтов в ТОП Яндекса в Минске и Беларуси. Используем только передовые технологии и адаптивность — ваши посетители оценят. Доверяйте SEO-продвижение своего сайта в Яндексе экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/seo-yandex"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <SeoTitleBlock title="Продвижение в Яндекс" />

        <StandardMarginsLayout
          styles={`bg-white text-black `}
          children={
            <div className="flex flex-col">
              <h1 className="text-[32px] mb-[30px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                SEO-продвижение сайтов в Яндексе
              </h1>
              <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="text-[22px] font-bold max-w-[640px] md:mr-[20px]">
                  Хотите, чтобы ваш сайт находили именно ваши клиенты? Мы
                  продвигаем проекты любой сложности — от интернет-магазинов до
                  корпоративных ресурсов. Наши стратегии учитывают специфику
                  ниши, уровень конкуренции и цели бизнеса, обеспечивая
                  стабильный рост трафика и продаж для сайта при продвижении.
                </div>
                <div className="text-[18px] font-medium max-w-[640px] mt-[10px] xl:mt-0 ">
                  Работаем с молодыми стартапами и крупными компаниями,
                  адаптируя методы продвижения сайта под бюджет и сроки.
                  Используем комплексный подход: оптимизацию, контент-маркетинг,
                  рекламу и аналитику. Результат — не просто топовые позиции, а
                  реальные заявки и прибыль при продвижении.
                </div>
              </div>
              <div className="flex flex-col xl:flex-row items-start justify-between mt-[50px] md:mt-[60px]">
                <div className="text-[22px] font-bold rounded-[30px] bg-[#F1F2F4] px-[40px] pt-[36px] pb-[30px] xl:max-w-[640px] lg:me-[20px]">
                  <h2 className="text-[28px] lg:text-[32px] font-bold">
                    Яндекс — быстрый поиск в интернете
                  </h2>
                  <p className="text-[16px] font-medium mt-[20px]">
                    Поисковик Яндекс — это более 60% российского поискового
                    трафика.
                  </p>
                  <p className="text-[16px] font-medium mt-[10px]">
                    Продвижение сайта здесь дает мгновенный отклик: клиенты
                    находят вас уже через несколько недель после старта работ.
                  </p>
                  <div className="w-full flex justify-end">
                    <Image
                      src={"/resources/yandex.png"}
                      alt={"Яндекс"}
                      width={65}
                      height={65}
                    />
                  </div>
                </div>
                <div className="text-[18px] font-medium mt-[30px] xl:mt-0 xl:max-w-[640px]">
                  <h2 className="text-[24px] font-bold">
                    Без видимости в поиске ваш сайт теряет более 70%
                    потенциальных клиентов
                  </h2>
                  <p className="text-[18px] font-medium mt-[20px]">
                    Конкуренты уже в ТОПе? Мы находим слабые места в их
                    стратегиях и обходим их. Яндекс постоянно обновляет
                    алгоритмы, но наши методы всегда на шаг впереди. Продвижение
                    сайта — это не разовая работа, а процесс, который приносит
                    прибыль для бизнеса годами.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        <DifferentTasksBlock
          bigTitle="Разные задачи - разный подход"
          smallText="Нет универсального решения — каждый проект требует индивидуальной стратегии."
          paragraphs={[
            {
              title: "Интернет-магазины",
              text: "Анализируем товарные категории, оптимизируем карточки, работаем с низкочастотными запросами. Увеличиваем конверсию через улучшение UX и ремаркетинг для сайта. ",
            },
            {
              title: "Сайты услуг",
              text: "Прорабатываем коммерческие и информационные запросы, создаем экспертный контент, усиливаем доверие через отзывы и кейсы.",
            },
            {
              title: "Стартапы",
              text: "Быстрый старт с контекстной рекламой + постепенное наращивание органики. Акцент на локальные запросы и визуальную презентацию для сайта при продвижении.",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[642px]"
          isOnlyBottomPadding={false}
        />

        <OurCaseBlock
          title="Наш кейс"
          cases={[
            {
              miniTitle: "SEO-продвижение сайта по ремонту квартир",
              text1:
                'Молодая компания по ремонту не могла пробиться в ТОП из-за высокой конкуренции и отсутствия онлайн-присутствия. Мы разработали стратегию, сделав ставку на информационные запросы ("как сделать ремонт", "дизайн квартиры 2024") для сайта.',
              text2:
                "Создали 120 подробных гайдов с пошаговыми инструкциями, которые привлекли аудиторию на этапе принятия решения. Дополнительно оптимизировали Google My Business: добавили портфолио с 3D-визуализациями, внедрили систему отзывов и чат-бота для быстрых ответов для сайта при продвижении. Это позволило не только увеличить трафик, но и повысить доверие — 40% клиентов пришли по рекомендациям.",
              imageUrl: "/resources/seo-case.png",
              numbers: (
                <>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-[15px] justify-between lg:flex lg:mb-[60px] mb-[30px] pt-[30px]">
                    <SmallMainBlockCard
                      title="12%"
                      description="конверсия в заявку"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="7500"
                      description="целевых переходов  в месяц"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="40%"
                      description="клиентов по рекомендациям"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="3"
                      description="месяца срок окупаемости"
                      margin="mb-0"
                    />
                  </div>
                </>
              ),
              analiticsImg: "/resources/seo-yandex-numbers.png",
              analiticsImgSmall: "/resources/seo-yandex-numberssmall.png",
            },
          ]}
          margin=""
        />

        <StandardMarginsLayout
          styles={`bg-white text-black pt-[50px] md:pt-[60px] `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_yandex_6.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <p className="text-[22px] font-bold">
                  Digital Devils — не просто агентство, а ваш надежный партнер.
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_yandex_small_6.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Мы не берем шаблонные решения — только индивидуальные
                  стратегии, которые приносят результат. Наша команда состоит из
                  экспертов с 10+ лет опыта в SEO, контекстной рекламе и
                  аналитике. Мы не просто продвигаем сайты, а строим систему,
                  которая генерирует прибыль годами.
                </p>
              </div>
            </div>
          }
        />

        <TicketSeoBlock
          title="Стоимость и сроки продвижения сайта"
          titleLeftBlock={"Сколько стоит начать продвигаться в Яндексе?"}
          textLeftBlock_1={
            "Цена зависит от масштаба проекта, уровня конкуренции в вашей нише и конкретных бизнес-целей. Мы предлагаем гибкие условия сотрудничества - от стартовых пакетов для новых сайтов до комплексных решений для крупных интернет-магазинов."
          }
          textLeftBlock_2={
            "Первые результаты в виде увеличения трафика и позиций по отдельным запросам видны уже через 1-2 месяца. Стабильный рост органического трафика и устойчивые позиции в ТОПе достигаются через 4-6 месяцев системной работы для сайта при продвижении."
          }
          buttonText_1={"Связаться с нами"}
          buttonText_2={"Связаться с нами"}
          buttonColor_1={"#214BF6"}
          buttonColor_2={"#FAFAFA"}
          bgColor_1={""}
          bgColor_2={""}
          buttonBgColor_1={"#FAFAFA"}
          buttonBgColor_2={"#214BF6"}
          smallTitle_1={"Лайт"}
          smallTitle_2={"Премиум"}
          price_1={"350$"}
          price_2={"550$"}
          list_1={[
            "Аудит сайта и конкурентов",
            "Оптимизация 50 ключевых запросов",
            "Базовая контент-стратегия",
            "Ежемесячная отчетность",
          ]}
          list_2={[
            "Полный аудит и техническая оптимизация",
            "Продвижение по 200+ запросам",
            "Индивидуальная контент- и рекламная стратегия",
            "Ускорение загрузки сайта + еженедельные отчеты",
          ]}
          isOnlyBottomPadding={false}
        />

        <WideBlockWithImage
          title="Мы знаем, что нужно вашим клиентам"
          text_1="Понимание аудитории — ключ к успеху. Мы не просто собираем данные, а глубоко анализируем поведение, боли и истинные потребности ваших клиентов, используя современные инструменты веб-аналитики и маркетинговые исследования. На основе этих данных мы создаем релевантные предложения."
          text_2="Это не просто трафик, а целевые посетители, готовые к покупке через сайт. Мы фокусируемся на привлечении именно вашей идеальной аудитории — тех, кто ищет ваш продукт прямо сейчас и готов совершить целевое действие."
        />

        <MainBlockFourth
          title="Eсть идеи для проекта?"
          description={
            "Вас бесплатно проконсультирует web-разработчик со стажем работы 5 лет"
          }
          margin="mt-0"
        />

        <StandardMarginsLayout
          styles={"py-[50px] md:py-[60px] bg-white text-black"}
          children={
            <>
              <div
                className={`flex md:flex-row-reverse flex-col gap-12 justify-between`}
              >
                <div className="h-full max-w-[753px] min-w-[40%] hidden lg:block">
                  <Image
                    src={"/resources/seo_top_1.png"}
                    width={525}
                    height={400}
                    className="object-cover"
                    alt={"Мы разрабатываем то, что нужно Вам"}
                  />
                </div>
                <div className="flex flex-col lg:block items-center">
                  <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] w-full">
                    Мы делаем так, как нужно вам
                  </h2>
                  <div className="w-full max-w-full mb-[30px] lg:hidden block">
                    <Image
                      src={"/resources/seo_top_1.png"}
                      width={341}
                      height={353}
                      className="object-cover w-full"
                      alt={"Мы разрабатываем то, что нужно Вам"}
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-[22px] mb-[20px]">
                      Гибкость — наш главный принцип
                    </h2>
                    <p className="text-[18px] font-medium">
                      Работаем с любым бюджетом, адаптируем стратегию под ваши
                      цели и сроки. Не навязываем лишних услуг — только то, что
                      действительно принесет результат. Прозрачная отчетность и
                      полный контроль на каждом этапе для сайта при продвижении.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <WideBlockWithImage
          title="Альтернативы: когда SEO – не главное?"
          text_1="Стоит отметить, что для таких динамичных отраслей, как мода или развлечения, значительное внимание должно уделяться социальным медиа и видеомаркетингу."
          text_2="В таких случаях стратегическое использование платформ, таких как ВКонтакте и TikTok, может обеспечить резонанс и быструю вовлеченность аудитории."
        />

        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] text-black `}
          children={
            <div className="w-full flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px] mb-[30px]">
                Продвижение сайта в Яндекс
              </h2>
              <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
                <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                  <Image
                    src={"/resources/seo_yandex_11.png"}
                    className="w-full"
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    width={359}
                    height={360}
                  />
                </div>
                <div className="lg:max-w-[754px]">
                  <div className="w-full block lg:hidden  mt-[20px]">
                    <Image
                      src={"/resources/seo_yandex_small_11.png"}
                      alt={
                        "Сколько стоит разработка мобильных приложений под iOS?"
                      }
                      className="w-full"
                      width={342}
                      height={252}
                    />
                  </div>
                  <p className="text-[24px] mt-[20px] font-bold mb-[20px]">
                    Это самый быстрый способ привлечь платежеспособных клиентов
                    и быстро увеличить прибыль и средний чек
                  </p>
                  <p className="text-[18px] mt-[20px] font-medium">
                    Яндекс занимает более 60% поискового трафика в Рунете.
                    Алгоритмы постоянно меняются, но мы всегда на шаг впереди.
                    Продвижение запроса в ТОП Яндекса дает мгновенный отклик и
                    долгосрочный эффект.
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
            </div>
          }
        />

        <StandardMarginsLayout
          styles={`pt-[50px] md:pt-[60px] bg-black text-white `}
          children={
            <div className="w-full flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px] mb-[30px]">
                Комплексное продвижение сайта в ТОП 10 Яндекс
              </h2>
              <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
                <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                  <Image
                    src={"/resources/seo_yandex_10.png"}
                    className="w-full"
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    width={359}
                    height={360}
                  />
                </div>
                <div className="lg:max-w-[754px]">
                  <div className="w-full block lg:hidden  mt-[20px]">
                    <Image
                      src={"/resources/seo_yandex_small_10.png"}
                      alt={
                        "Сколько стоит разработка мобильных приложений под iOS?"
                      }
                      className="w-full"
                      width={342}
                      height={252}
                    />
                  </div>
                  <p className="text-[18px] mt-[20px] font-medium">
                    Это система, которая охватывает все этапы воронки продаж.
                    Работаем с технической частью, контентом, рекламой и
                    аналитикой. Результат — стабильный рост трафика и выручки.
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
            </div>
          }
        />

        <CommentBlock
          reviewsData={[
            {
              avatar: "/resources/avatar_18.png",
              name: "Ольга Смирнова",
              jobTitle: "Маркетолог «РемонтПрофи» ",
              reviewText:
                "Нашему агентству по ремонту катастрофически не хватало заявок из интернета. Специалисты Digital Devils предложили нестандартное решение — сделали упор не на коммерческие, а на информационные запросы. Они создали для нас более 50 подробных гайдов по ремонту с уникальными схемами и 3D-визуализациями, которые стали привлекать клиентов на этапе планирования ремонта. После переработки структуры сайта и внедрения чат-бота поток заявок увеличился в 5 раз! Все вложения окупились уже через 2 месяца, а сейчас мы получаем стабильно 30-40 заказов еженедельно для сайта при продвижении",
            },
            {
              avatar: "/resources/avatar_19.png",
              name: "Иван Козлов",
              jobTitle: "Магазин цветов",
              reviewText:
                "Как владелец сети цветочных магазинов, я был в отчаянии — наш сайт практически не приносил продаж. Ребята из Digital Devils провели полный ребрендинг онлайн-витрины, разработали уникальную систему сезонных лендингов к каждому празднику и внедрили интерактивный конструктор букетов. Результат превзошел все ожидания — во время предпраздничных периодов трафик взлетел на 2900%! Особенно порадовал рост среднего чека на 25% после внедрения системы допродаж. Теперь мы передали им на сопровождение все наши digital-активности",
            },
            {
              avatar: "/resources/avatar_20.png",
              name: "Дмитрий Волков",
              jobTitle: "Директор «ТехноСтарт»",
              reviewText:
                "Запуская IT-стартап, мы понимали, что без грамотного SEO продвижения сайта не выжить. Digital Devils предложили комплексную стратегию: быстрый старт через контекстную рекламу с одновременной постепенной оптимизацией. Они не просто настраивали кампании, а глубоко вникли в нашу целевую аудиторию, создали серию экспертных материалов и кейсов. Благодаря этому уже через 3 месяца мы вышли на 7 500 целевых переходов в месяц с конверсией 12%, что для b2b-сегмента просто прекрасный результат. Сейчас продолжаем сотрудничество по расширению географии SEO продвижения сайта.",
            },
          ]}
          margin="mt-0"
        />

        <WideBlockWithImage
          title="Всем ли подходит SEO продвижение сайта?"
          text_1="SEO продвижение больше всего подходит для тех, кто ориентируется на русскоязычную аудиторию и ведет бизнес в странах СНГ. Однако, стоит учитывать, что специфическая настройка алгоритмов под локальные языковые особенности может усложнить SEO продвижение для компаний, пытающихся выйти за пределы этих рынков."
          text_2="Также отраслевые особенности могут сильно влиять на эффективность SEO. Например, компании из сферы высоких технологий могут обнаружить, что конкуренция по ключевым запросам слишком высокая, и в этом случае будет более рационально инвестировать в контекстную рекламу или контент-маркетинг."
        />

        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Из чего складывается стоимость услуг
              </h2>
              <p className="text-[18px] mb-[30px] lg:text-[22px] font-medium  max-w-[866px]">
                На цену влияют несколько ключевых факторов: уровень конкуренции
                в вашей нише, объем необходимых работ, текущее техническое
                состояние сайта и желаемые сроки достижения результатов. Чем
                сложнее и конкурентнее ниша, тем более глубокий анализ требуется
                и тем более точечной должна быть стратегия SEO продвижения
                сайта.
              </p>
              <div className="border-t-[1px] border-black  pt-[30px]">
                <p className="text-[16px] font-medium">Стоимость наших услуг</p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  Дополнительно стоимость может варьироваться в зависимости от
                  необходимости подключения смежных услуг: создания
                  дополнительного контента, разработки лендингов, настройки
                  рекламных кампаний или проведения технического аудита для
                  сайта. Мы всегда предлагаем индивидуальный подход и формируем
                  оптимальный бюджет, который обеспечит максимальную отдачу для
                  вашего бизнеса для сайта при SEO продвижении.
                </p>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-white bg-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Ниша и уникальность продукта
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-bold flex flex-col">
                    Какие бизнесы получают максимальную выгоду?
                  </p>
                  <p className="text-[22px] font-bold mt-[10px]">
                    Важно учитывать нишу и степень уникальности вашего продукта.
                    Если вы предлагаете уникальные товары или услуги, то
                    продвижение сайта может открыть новые возможности для роста,
                    особенно если вы сможете предложить что-то, что резонирует с
                    отечественным рынком.
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Интернет-магазины могут воспользоваться возможностями
                      дополнительной рекламы через Яндекс.Директ, что позволит
                      усилить видимость на страницах поисковой выдачи. Это важно
                      для привлечения дополнительных клиентов в условиях высокой
                      конкуренции.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Услуги (ремонт, строительство, медицина) могут
                      дополнительно использовать партнерские связи и расширенные
                      описания услуг в Справочнике для увеличения своей
                      видимости среди целевой аудитории.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      B2B-компании могут использовать Телефонию для организации
                      коллтрекинга, что помогает анализировать эффективность
                      различных каналов трафика и корректировать стратегию
                      продвижение сайта в режиме реального времени.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Медиа-компании могут использовать Новости для
                      распространения контента и охвата широкой аудитории, что
                      позволяет быстро и эффективно передавать важную информацию
                      или продвигать новые материалы.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles={`bg-white text-black pt-[50px] md:pt-[60px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Вы останетесь довольны
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  SEO продвижение в Яндексе любых сайтов в Беларуси
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_yandex_small_5.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Мы не бросаем клиентов после запуска — сопровождаем проекты на
                  всех этапах. Гарантируем прозрачность, честные отчеты и
                  реальные цифры. Ваш успех — наш главный KPI.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_yandex_5.png"}
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
          styles="py-[50px] md:py-[60px] mt-[50px] md:mt-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Скрытые нюансы и профессиональные инсайты
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-medium">
                    Яндекс продолжает внедрять инновационные технологии, которые
                    делают его привлекательным для бизнеса.
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Среди таких технологий – нейросетевые алгоритмы, которые
                      улучшают качество поиска и позволяют лучше понимать
                      сложные запросы пользователей. Яндекс также активно
                      адаптируется под мобильные устройства, обеспечивая
                      современный опыт для пользователей смартфонов и планшетов.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Еще одним важным фактором является наличие собственного
                      сервиса аналитики – Метрика, который предлагает
                      углубленный анализ пользовательского поведения, что
                      является мощным инструментом для оптимизации маркетинговых
                      стратегий.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Кроме того, Яндекс развивает свои возможности в области
                      искусственного интеллекта и машинного обучения, что
                      позволяет улучшать персонализацию выдачи, расширяя
                      потенциальную аудиторию сайтов и повышая конверсию за счет
                      более релевантных предложений.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Как выбрать агентство для продвижения
              </h2>
              <p className="text-[16px] mb-[10px] md:text-[18px] font-medium max-w-[866px]">
                При выборе агентства обязательно уточняйте наличие сертификатов,
                таких как «Яндекс.Мастер», и аккредитацию у Яндекс.Директа и
                Метрики. Отношение команды агентства к инновациям и
                использование современных технологий могут служить индикатором
                их компетентности в предоставлении качественных услуг
                продвижения сайта в Яндексе.
              </p>
              <p className="text-[16px] mb-[30px] md:text-[18px] font-medium  max-w-[866px]">
                Важно, чтобы агентство предоставляло регулярные отчеты и было
                открыто к диалогу о результатах и стратегии SEO продвижения
                сайта. Прозрачность в работе и честность в оценках могут быть
                ключевыми факторами успеха.
              </p>
              <div className="border-t-[1px] border-black pt-[30px] flex flex-col gap-[10px]">
                <p className="text-[16px] md:text-[18px] font-medium max-w-[866px]">
                  Продвижение сайта требует грамотного подхода к стратегии и
                  большого внимания к деталям.
                </p>
                <p className="text-[16px] md:text-[18px] font-medium max-w-[866px]">
                  Важно стремиться не только к улучшению видимости, но и к
                  повышению общего качества пользовательского опыта.
                </p>
                <p className="text-[16px] md:text-[18px] font-medium max-w-[866px]">
                  Комплексный подход с учетом всех каналов маркетинга обеспечит
                  сбалансированное развитие и максимальную отдачу от вложенных
                  усилий и ресурсов. Если вы новичок в продвижении сайта,
                  использование краткосрочных тестов и A/B тестирования поможет
                  лучше понять и адаптировать стратегию под нужды вашего
                  бизнеса. В конечном итоге, успех в продвижении сайта зависит
                  от способности адаптироваться к изменениям и использования
                  всех доступных возможностей на платформе.
                </p>
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

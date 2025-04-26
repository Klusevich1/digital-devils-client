import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import Image from "next/image";
import SeoTitleBlock from "@/components/SeoTitleBlock";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import MainBlockFourth from "@/components/MainBlockFourth";
import HalfImageBlock from "@/components/HalfImageBlock";
import TicketSeoBlock from "@/components/TicketSeoBlock";
import BlockWithListOfCurrentTechnologies from "@/components/BlockWithListOfCurrentTechnologies";
import { FaCircleChevronRight } from "react-icons/fa6";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Продвижение сайтов", link: "/seo" },
  { name: "SEO аудит", link: "/seo-audit" },
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
    name: "SEO аудит",
    item: "https://digitaldevils.by/seo-audit",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Как часто нужно делать SEO проверку сайта?",
      description: (
        <p className="text-[18px] ">
          Оптимально раз в 6-12 месяцев или при резком падении трафика.
        </p>
      ),
    },
    {
      title: "Вы исправляете ошибки после проверки сайта?",
      description: (
        <p className="text-[18px]">
          Да, можем внедрить все правки или обучить команду.
        </p>
      ),
    },
    {
      title: "Какие гарантии вы даете?",
      description: (
        <p className="text-[18px] ">
          Мы не управляем алгоритмами Google, но гарантируем, что сайт станет
          лучше. 90% клиентов видят рост трафика уже через 2 месяца.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="SEO-аудит сайтов в Минске | Полная и комплексная проверка сайта"
        description="Проводим углубленный и комплексный SEO-аудит сайта. Используем только передовые технологии и адаптивность — ваши посетители оценят. Доверяйте SEO-аудит своего сайта экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/seo-audit"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="SEO аудит" />
        <HalfImageBlock
          title="Мощный SEO аудит сайта для роста"
          smallTitle="Профессиональный SEO-аудит сайта от Digital Devils"
          description={
            <>
              <p className="font-medium text-[18px] mb-[10px]">
                Когда сайт не выдает нужных результатов, проблема часто кроется
                в неочевидных технических и маркетинговых недочетах.
              </p>
              <p className="font-medium text-[18px]">
                Команда Digital Devils проводит комплексный профессиональный
                аудит, который охватывает все критические аспекты: от базовых
                технических параметров (скорость загрузки, корректность
                индексации, мобильная адаптивность) до глубинного чек-апа
                контентной стратегии, ссылочного профиля и пользовательского
                опыта. Мы не просто находим слабые места - мы даем четкую
                дорожную карту по исправлению ошибок и конкретные рекомендации
                по дальнейшему продвижению.
              </p>
            </>
          }
          buttonColor="transparent"
          buttonText=""
          image={"/resources/seo_audit.png"}
          smallImage={"/resources/seo_audit_small.png"}
          widthImage={639}
          isDark={true}
          isOnlyBottomPadding={false}
          heightImage={300}
        />
        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Мы знаем, что Вам нужно
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-bold">
                    Закажите SEO исследование сайта у Digital Devils и получите
                    детализированный отчет с приоритизированными задачами,
                    который станет фундаментом для роста позиций, трафика и
                    конверсий.
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                    Наши клиенты отмечают улучшение видимости сайта в
                    поисковиках уже через 2-3 месяца после внедрения
                    рекомендаций. Готовы вывести свой бизнес на новый уровень?
                  </p>
                </div>
              </div>
            </>
          }
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
                    Почему вашему сайту необходим SEO-аудит?
                  </h2>
                  <h2 className="font-bold text-[22px] mb-[20px]">
                    Если сайт годами остается за пределами топовой выдачи,
                    значит в его работе есть серьезные недочеты, незаметные на
                    первый взгляд
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
                    <p className="text-[18px] font-medium">
                      Мы не просто находим эти скрытые проблемы - от технических
                      ошибок до неэффективного контента, но и разрабатываем
                      персонализированную стратегию их устранения. Когда трафик
                      начинает необъяснимо снижаться, а конкуренты неожиданно
                      обходят вас в выдаче, это прямое указание на необходимость
                      профессионального чек-апа.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <HalfImageBlock
          title="Результат SEO исследование сайта - стабильность бизнеса"
          smallTitle="Наши эксперты адаптируют ресурс под текущие алгоритмы систем, превращая технические улучшения в реальный пик конверсий и продаж"
          description={
            <>
              <p className="font-medium text-[18px] mb-[10px]">
                SEO чек-ап сайта - это не просто диагностика, а инвестиция в
                будущую прибыль бизнеса
              </p>
              <p className="font-medium text-[18px] mb-[20px]">
                Результат? Стабильность позиций, увеличение целевого трафика и
                заметное повышение конверсии уже в первые месяцы после внедрения
                наших рекомендаций.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText="Связаться с нами"
          image={"/resources/seo_audit_2.png"}
          smallImage={"/resources/seo_audit_2_small.png"}
          widthImage={639}
          heightImage={300}
        />

        <WideBlockWithImage
          title="Преимущества Digital Devils"
          text_1="Заказывая SEO анализ сайта в Digital Devils для продвижения, вы получаете уникальное сочетание десятилетнего практического опыта в области поисковой оптимизации и продвижения с применением аналитических технологий."
          text_2="Наш подход отличается от стандартной практики - мы не ограничиваемся простым выявлением проблем, а фокусируемся на их трансформации в реальные возможности для роста бизнеса. В результате сотрудничества клиенты приобретают не просто формальный отчет, а надежного стратегического партнера, готового сопровождать развитие онлайн-присутствия на всех этапах."
        />

        <TicketSeoBlock
          title="Стоимость и сроки SEO-аудита"
          titleLeftBlock={
            "Сколько стоит SEO проверка сайта и как долго ждать выполнения услуги?"
          }
          textLeftBlock_1={
            "SEO исследование сайта — это не просто отчет, а рабочий инструмент для роста бизнеса. "
          }
          textLeftBlock_2={
            "Мы не ставим абстрактных диагнозов, а даем конкретные решения, которые сразу влияют на позиции и трафик. Вы получаете четкий план действий с понятными KPI и прогнозируемым результатом."
          }
          buttonText_1={"Связаться с нами"}
          buttonText_2={"Связаться с нами"}
          buttonColor_1={"#214BF6"}
          buttonColor_2={"#FAFAFA"}
          bgColor_1={""}
          bgColor_2={""}
          buttonBgColor_1={"#FAFAFA"}
          buttonBgColor_2={"#214BF6"}
          smallTitle_1={"Стандартный аудит"}
          smallTitle_2={"Премиум аудит"}
          price_1={"59$"}
          price_2={"199$"}
          list_1={[
            "Проверка технических ошибок сайта",
            "Анализ контента и мета-тегов",
            "Проверка внутренней перелинковки",
            "Рекомендации по базовым улучшениям",
          ]}
          list_2={[
            "Полный технический аудит (Core Web Vitals, индексация)",
            "Глубокий аудит контента на сайте и семантики",
            "Анализ ссылочного профиля и конкурентов",
            "Пошаговый план поискового продвижения на 3 месяца",
          ]}
          isOnlyBottomPadding={false}
        />

        <DifferentTasksBlock
          bigTitle="Разные задачи - разный подход"
          smallText="Наша команда анализирует более 200 параметров сайта и создает уникальные индивидуальные решения, а после оказания услуги оказывает поддержку и дает четкие рекомендации."
          paragraphs={[
            {
              title: "Для владельцев бизнеса",
              text: "Увеличиваем видимость сайта в поиске, привлекаем целевой трафик и повышаем конверсию. Наши решения помогают вырваться вперед в конкурентной борьбе.",
            },
            {
              title: "Для маркетологов",
              text: "Предоставляем детализированные отчеты с конкретными шагами по улучшению позиций. Экономим ваше время и бюджет.",
            },
            {
              title: "Для пользователей",
              text: "После оптимизаций сайт становится быстрее, удобнее и информативнее, что улучшает поведенческие факторы",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[642px]"
          isOnlyBottomPadding={true}
        />

        <BlockWithListOfCurrentTechnologies
          isOnlyBottomPadding={true}
          title="Мы используем современные технологии"
          list={[
            "Внедряем нейросетевой анализ для выявления скрытых SEO проблем",
            "Применяем Big Data-технологии для глубокого конкурентного анализа",
            "Используем предиктивную аналитику для прогнозирования роста позиций",
            "Автоматизируем рутинные проверки с помощью AI-инструментов",
            "Работаем с облачными платформами для обработки больших массивов данных",
            "Внедряем ИИ-технологии для прозрачного учета изменений",
          ]}
          isDark={false}
        />

        <DifferentTasksBlock
          bigTitle="Что отличает профессиональный SEO аудит сайта?"
          smallText=""
          paragraphs={[
            {
              title: "Использование специализированных инструментов",
              text: "Мы применяем сочетание 15+ профессиональных инструментов, включая Ahrefs, SEMrush, Screaming Frog, DeepCrawl и собственные разработки.",
            },
            {
              title: "Ручное исследование",
              text: "В отличие от автоматизированных сервисов, наши эксперты лично анализируют ключевые аспекты сайта.",
            },
            {
              title: "Практические рекомендации",
              text: "Мы не просто находим проблемы, а предлагаем конкретные решения с расчетом ROI.",
            },
            {
              title: "Отраслевая экспертиза",
              text: "Мы учитываем специфику бизнеса и конкурентной среды.",
            },
          ]}
          isDark={false}
          isOnlyBottomPadding={true}
        />

        <MainBlockFourth
          title="Eсть идеи для проекта?"
          description={
            "Вас бесплатно проконсультирует web-разработчик со стажем работы 5 лет"
          }
          margin="mt-0"
        />
        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[641px] min-w-[400px]">
                <Image
                  src={"/resources/seo_audot_3.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
              <div className="lg:max-w-[638px]">
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_audot_3_small.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="mt-[20px] lg:mt-0 text-[18px] lg:text-[22px] font-medium">
                  Команда экспертов Digital Devils проводит комплексный
                  SEO-аудит сайта, который выявляет все слабые места сайта.
                  Используем передовые технологии, включая нейросетевые
                  алгоритмы и big data, чтобы дать конкурентное преимущество.
                </p>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles={`pb-[50px] md:pb-[60px] bg-white text-black`}
          children={
            <div className={`flex flex-col gap-[30px]`}>
              <div>
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                  Когда и почему стоит проводить SEO аудит сайта?
                </h2>
                <p className="text-[22px] font-medium max-w-[866px]">
                  Существует несколько критических моментов, когда аудит
                  становится не просто полезным, а необходимым инструментом:
                </p>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[40px] gap-[10px] lg:mt-[20px] mt-[10px]">
                  <div>
                    <p className="text-[22px] font-medium mb-[10px]">
                      Перед запуском масштабной SEO кампании
                    </p>
                    <span className="text-[16px] font-medium">
                      Многие совершают ошибку, начиная поисковое продвижение без
                      предварительной диагностики. Это похоже на строительство
                      дома без сверки фундамента. Аудит на старте помогает
                      правильно распределить бюджет и избежать инвестиций в
                      неэффективные направления.
                    </span>
                  </div>
                  <div>
                    <p className="text-[22px] font-medium mb-[10px]">
                      После значительных изменений алгоритмов систем
                    </p>
                    <span className="text-[16px] font-medium">
                      Крупные обновления, такие как Google Core Updates, могут
                      кардинально изменить правила игры. Аудит помогает
                      адаптировать сайт к новым требованиям.
                    </span>
                  </div>
                  <div>
                    <p className="text-[22px] font-medium mb-[10px]">
                      При редизайне или смене CMS
                    </p>
                    <span className="text-[16px] font-medium">
                      Более 40% сайтов теряют в трафике после редизайна из-за
                      неправильной реализации. Аудит помогает сохранить SEO
                      ценность.
                    </span>
                  </div>
                  <div>
                    <p className="text-[22px] font-medium mb-[10px]">
                      Игнорирование пользовательского опыта
                    </p>
                    <span className="text-[16px] font-medium">
                      Выход на новые рынки требует адаптации SEO стратегии под
                      локальные особенности.
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`grid lg:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[20px] border-t-[1px] pt-[30px] border-t-black`}
              >
                <span className="text-[22px] font-bold max-w-[642px]">
                  SEO аналитика для поискового продвижения - это не просто план,
                  а стратегическая необходимость в ключевые моменты развития
                  бизнеса.
                </span>
                <span className="text-[16px] font-medium">
                  Как показывает практика, своевременная диагностика позволяет
                  не только избежать потерь, но и открывает новые возможности
                  для роста.
                </span>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles="py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Полное руководство по SEO аналитике сайта: от основ до
                продвинутых стратегий
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px] flex flex-col">
                  <p className="text-[20px] font-medium">
                    СЕО проверка сайта для поискового продвижения - это
                    всестороннее исследование сайта, которое можно сравнить с
                    полной диагностикой автомобиля перед длительной поездкой.
                  </p>
                  <p className="text-[20px] font-medium mt-[10px]">
                    Это не просто поиск очевидных неисправностей, а глубокая
                    экспертиза, которая выявляет скрытые проблемы и открывает
                    возможности для роста. В отличие от поверхностных проверок,
                    профессиональная проверка рассматривает сайт через призму
                    постоянно меняющихся алгоритмов систем, которые ежегодно
                    претерпевают сотни обновлений.
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%] lg:pt-0">
                  <p className="text-[20px] font-medium mb-[10px]">
                    СЕО проверка сайта охватывает три ключевых аспекта:
                  </p>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Поисковая оптимизация карточек товаров на сайте
                      (уникальные описания, ЧПУ, микроразметка Schema.org)
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Сбор семантического ядра (фразы типа "купить [товар] в
                      [городе]")
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Борьба с дублями (фильтры, сортировки должны закрываться в
                      noindex)
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Отзывы (увеличивают доверие и улучшают поведенческие
                      факторы)
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
                  Мы работаем так, как нужно вам
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Digital Devils - одна из ведущих компаний на рынке Беларуси
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_audit_4_small.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Гибкий подход к каждому проекту для продвижения — без
                  шаблонных решений. Подстраиваемся под ваш бюджет и сроки без
                  потери качества. Всегда на связи, чтобы оперативно вносить
                  корректировки. Результат — наша главная KPI.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_audit_4.png"}
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
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Как часто нужно проводить?
              </h2>
              <p className="text-[16px] mb-[30px] md:text-[18px] font-medium  max-w-[866px]">
                SEO анализ  сайта— это не разовое мероприятие, а системный
                процесс, который должен соответствовать динамике бизнеса и
                рыночной среды. Как профессиональный спортсмен регулярно
                проходит медосмотр, так и успешный сайт нуждается в
                периодической комплексной диагностике.
              </p>
              <div className="border-t-[1px] border-black pt-[30px]">
                <p className="text-[18px] font-medium mb-[20px]">
                  Частота анализов сайта должна определяться бизнес-стратегией:
                </p>
                <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-[40px] gap-[10px]">
                  <div className="flex flex-row items-start">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <span className="text-16px font-medium">
                      Для стабильных проектов в низкоконкурентных нишах
                      достаточно ежегодного комплексной аналитики сайта с
                      ежеквартальными экспресс-сверками ключевых показателей.
                    </span>
                  </div>
                  <div className="flex flex-row items-start">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <span className="text-16px font-medium">
                      В среднем сегменте рекомендуется проводить полная
                      аналитика сайта каждые 6 месяцев с ежемесячным
                      мониторингом динамики.
                    </span>
                  </div>
                  <div className="flex flex-row items-start">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <span className="text-16px font-medium">
                      Для высококонкурентных ниш (финансы, недвижимость, туризм)
                      оптимальна ежеквартальная комплексная диагностика с
                      еженедельным отслеживанием изменений.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <BlockWithImageAndDropDownMenu
          isDark={true}
          title="Подготовка к SEO аналитике сайта: ключевые аспекты"
          borderColor="#ffffff"
          margin="md:py-[60px] py-[50px]"
          data={[
            {
              title: "Подготовительные мероприятия",
              description: [
                "Для обеспечения максимальной точности и эффективности SEO аналитика сайта необходимо выполнить ряд важных подготовительных мероприятий. Прежде всего, критически важно предоставить аудиторам полный доступ ко всем разделам веб-ресурса, включая административные панели и закрытые разделы. Параллельно следует собрать и систематизировать актуальные данные о текущих показателях эффективности сайта - посещаемости, конверсионных коэффициентах и других ключевых метриках.",
              ],
            },
            {
              title: "Формулированию основных бизнес-целей",
              description: [
                "Особое внимание стоит уделить четкому формулированию основных бизнес-целей, которые должны быть достигнуты в результате поисковой оптимизации. Это позволит адаптировать процесс работы с сайтом под конкретные задачи компании. Дополнительно необходимо подготовить перечень приоритетных страниц, требующих чек-апа, а также предоставить исчерпывающую информацию о всех ранее проводимых SEO мероприятиях и их результатах.",
              ],
            },
            {
              title: "Разработке детального плана внедрения рекомендаций",
              description: [
                "Получение итогового отчета знаменует собой начало практической работы по улучшению сайта. Для достижения максимального эффекта необходимо незамедлительно приступить к разработке детального плана внедрения рекомендаций с четкими временными рамками исполнения. Внимание следует уделить грамотному распределению приоритетов между различными задачами, учитывая их важность и сложность реализации.",
              ],
            },
            {
              title: "Заключительный этап",
              description: [
                "Не менее важным этапом становится назначение конкретных ответственных лиц за реализацию каждого направления работ. Параллельно необходимо внедрить эффективную систему мониторинга результатов, а также предусмотреть в рабочем графике проведение регулярных повторных контрольных мероприятий для оценки прогресса.",
              ],
            },
          ]}
          firstBlock={
            <>
              <div className="w-full md:flex hidden">
                <Image
                  src={"/resources/seo-audit-2.png"}
                  width={527}
                  height={300}
                  className="w-full"
                  alt="Подготовка к SEO аналитике сайта: ключевые аспекты"
                />
              </div>
              <div className="w-full md:hidden flex">
                <Image
                  src={"/resources/ios_2.png"}
                  width={527}
                  height={300}
                  className="w-full"
                  alt="Подготовка к SEO аналитике сайта: ключевые аспекты"
                />
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Глубина SEO аудита сайта
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[10px]">
                    SEO анализ структуры сайта и не только представляет собой
                    многослойное исследование, охватывающее более 250 критически
                    важных параметров. В основе лежит техническая экспертиза,
                    которая включает тщательную проверку архитектуры сайта и
                    структуры URL, детальную оценку скорости загрузки с учетом
                    ключевых метрик Core Web Vitals, а также комплексную
                    верификацию корректности технических файлов robots.txt и
                    sitemap.xml.
                  </p>
                  <p className="text-[16px] font-medium">
                    Особое внимание уделяется адаптивности ресурса под мобильные
                    устройства и всестороннему контролю уровня безопасности,
                    включая наличие HTTPS-шифрования и защиту от потенциальных
                    уязвимостей.
                  </p>
                </div>
                <div className="lg:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[10px]">
                    Не менее значимую часть составляет контент-анализ для
                    поискового продвижения, в рамках которого специалисты
                    проводят глубокую оценку качества и уникальности
                    опубликованных материалов, анализируют семантическое ядро на
                    предмет релевантности поисковым запросам, проверяют
                    поисковую оптимизацию метатегов и общую структуру
                    контентного массива.
                  </p>
                  <p className="text-[16px] font-medium">
                    Важным элементом исследования становится чек-ап системы
                    внутренней перелинковки, которая существенно влияет на
                    распределение веса страниц и удобство навигации.
                  </p>
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
                Выбор оптимального формата аудита сайта
              </h2>
              <p className="text-[16px] mb-[10px] md:text-[18px] font-medium max-w-[866px]">
                Разнообразие задач и целей требует дифференцированного подхода к
                проведению SEO чек-апа. Экспресс-аудит сайта, занимающий от 1 до
                3 дней, ориентирован на оперативную диагностику основных
                технических параметров и выявление очевидных ошибок, что
                актуально при первичной оценке новых проектов.
              </p>
              <p className="text-[16px] mb-[30px] md:text-[18px] font-medium  max-w-[866px]">
                Более глубокий стандартный формат, рассчитанный на 5-7 дней
                работы, позволяет провести комплексное исследование по 100+
                ключевым параметрам, охватывающим как технические, так и
                контентные аспекты.
              </p>
              <div className="border-t-[1px] border-black pt-[30px] flex flex-col gap-[10px]">
                <p className="text-[16px] md:text-[18px] font-medium max-w-[866px]">
                  Для предприятий, работающих в условиях высокой конкуренции,
                  оптимальным решением становится углубленный аудит  сайта
                  продолжительностью 10-14 дней, который включает не только
                  всесторонний контроль текущего состояния сайта, но и
                  исследование конкурентной среды с прогнозированием
                  потенциальной эффективности поисковых оптимизационных
                  мероприятий.
                </p>
                <p className="text-[16px] md:text-[18px] font-medium max-w-[866px]">
                  Наиболее комплексный премиум-формат предполагает 14-21 день
                  интенсивной работы и завершается разработкой
                  персонализированной стратегии поискового продвижения на период
                  от 6 до 12 месяцев, что  востребовано при реализации
                  масштабных digital-стратегий.
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

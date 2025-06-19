import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import SeoTitleBlock from "@/components/SeoTitleBlock";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import CommentBlock from "@/components/CommentBlock";
import HalfImageBlock from "@/components/HalfImageBlock";
import TicketSeoBlock from "@/components/TicketSeoBlock";
import MainBlockFourth from "@/components/MainBlockFourth";
import BlockWithListOfCurrentTechnologies from "@/components/BlockWithListOfCurrentTechnologies";
import { FaCircleChevronRight } from "react-icons/fa6";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Продвижение сайтов", link: "/seo" },
  { name: "Продвижение сайтов в ТОП", link: "/seo-top" },
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
    name: "Продвижение сайтов в ТОП",
    item: "https://digitaldevils.by/seo-top",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени нужно, чтобы сайт попал в первую десятку?",
      description: (
        <p className="text-[18px] ">
          Первые улучшения в позициях сайта можно заметить уже через 1-3 месяца
          работы над его SEO продвижением сайта. Однако для достижения
          стабильного и устойчивого роста требуется больше времени — обычно это
          3-6 месяцев. В нишах с высокой конкуренцией этот срок может
          значительно увеличиться, так как для достижения высоких позиций сайта
          необходимо больше усилий и времени.
        </p>
      ),
    },
    {
      title: "Можно ли продвигать только главную страницу?",
      description: (
        <p className="text-[18px]">
          SEO продвижение только главной страницы не позволит достигнуть
          значительного успеха в SEO. Для эффективного SEO продвижения сайта
          необходим комплексный подход, охватывающий все страницы. Это помогает
          увеличить видимость ресурса в поисковых системах и охватить более
          широкую аудиторию, привлекая больше потенциальных клиентов.
        </p>
      ),
    },
    {
      title: "Что важнее — SEO или контекстная реклама?",
      description: (
        <p className="text-[18px] ">
          SEO и контекстная реклама выполняют разные функции и дают разные
          результаты. SEO направлено на долгосрочное улучшение положения сайта в
          поисковой выдаче, что способствует постоянному притоку органического
          трафика. Контекстная реклама предоставляет возможность быстро получить
          продажи и привлечь аудиторию в кратчайшие сроки. Оптимальное решение —
          это сочетание обоих инструментов, что позволит максимизировать эффект
          и достичь сбалансированного роста как в краткосрочной, так и в
          долгосрочной перспективе
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Система продвижения сайта в ТОП | Раскрутка сайтов в Минске"
        description="Система продвижения сайта в ТОП в Минске и Беларуси. Используем только передовые технологии и адаптивность — ваши посетители оценят. Доверяйте SEO-продвижение своего сайта экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/seo-top"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="Продвижение сайтов в ТОП" />
        <StandardMarginsLayout
          styles={`bg-white text-black pb-[50px] md:pb-[60px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[527px]">
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_top_small.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="mt-[20px] lg:mt-0 text-[18px] lg:text-[22px] font-medium">
                  Хотите, чтобы ваш сайт находили клиенты? Digital Devils — это
                  профессиональное продвижение сайтов в ТОП 1 поисковых систем.
                </p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] font-medium">
                  Мы не просто поднимаем позиции сайта — мы увеличиваем продажи,
                  снижаем стоимость лида и делаем ваш проект заметным. Наши
                  методы работают на долгосрочный результат, а не на временный
                  эффект.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[753px] min-w-[400px]">
                <Image
                  src={"/resources/seo_top.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  className={"w-full"}
                  width={359}
                  height={360}
                />
              </div>
            </div>
          }
        />
        <DifferentTasksBlock
          bigTitle="100% найдем подход к вашей задаче"
          smallText="Мы не используем шаблонные решения для сайта — только персонализированные стратегии."
          paragraphs={[
            {
              title: "",
              text: "Проводим глубокий анализ вашего бизнеса, изучая его уникальные особенности, исследуем стратегию и сильные стороны ваших конкурентов.",
            },
            {
              title: "",
              text: "Тщательно подбираем ключевые запросы для сайта, анализируя их потенциал с точки зрения концентрации целевой аудитории.",
            },
            {
              title: "",
              text: "Оптимизируем ваш сайт, уделяя внимание не только его техническим аспектам и требованиям систем для сайта.",
            },
          ]}
          isDark={true}
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
                    width={522}
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
                      Не бывает двух одинаковых бизнесов — у каждого свои цели,
                      бюджет и сроки
                    </h2>
                    <p className="text-[18px] font-medium">
                      Мы разрабатываем стратегию, которая учитывает все нюансы
                      вашего бизнеса. Наши клиенты получают не просто трафик, а
                      реальных покупателей.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <WideBlockWithImage
          title="Мы знаем что нужно вашим клиентам"
          text_1="Обеспечьте клиентам 100% комфорт использования вашего сайта на смартфонах и планшетах и они отблагодарят вас покупками! Мы знаем, как перевести сайт на мобильную версию."
          text_2="К реализации каждого проекта подходим комплексно - погружаемся, анализируем, ищем интересные и индивидуальные решения. Помогаем автоматизировать процессы, увеличивать прибыль, развивать бренд."
        />

        <HalfImageBlock
          title="Основные преимущества вывода сайта в ТОП"
          smallTitle="Попадание в ТОП поиска — это прямой путь к росту прибыли"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Вы получаете бесплатный целевой трафик, который конвертируется в
                продажи. Клиенты из поиска уже заинтересованы в вашем товаре или
                услуге. Долгосрочный эффект SEO экономит ваш бюджет на рекламу.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText="Связаться с нами"
          image={"/resources/seo_top_5.png"}
          smallImage={"/resources/seo_top_small_5.png"}
          widthImage={639}
          heightImage={300}
          isOnlyBottomPadding={false}
        />

        <BlockWithListOfCurrentTechnologies
          isOnlyBottomPadding={true}
          title="Мы используем современные методы"
          list={[
            "Глубокая SEO-оптимизация — работаем с контентом и структурой сайта",
            "Скорость загрузки — ускоряем сайт, чтобы снизить процент отказов ",
            "<a href='/mob-pwa'>Мобильная адаптация</a> — настраиваем корректное отображение на всех устройствах",
            "Локальное SEO — продвигаем сайт в конкретном регионе",
            "Работа с поведенческими факторами — улучшаем юзабилити и удобство для пользователей для сайта",
            "Ссылочная стратегия — повышаем авторитетность сайта",
          ]}
          isDark={false}
        />

        <StandardMarginsLayout
          styles={`bg-white text-black pb-[50px] md:pb-[60px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Вы останетесь довольны нашей работой
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Мы не просто обещаем результат — мы его гарантируем
                </p>
                <div className="w-full block lg:hidden mt-[20px]">
                  <Image
                    src={"/resources/seo_top_small_6.png"}
                    alt={"Вы останетесь довольны нашей работой"}
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  На каждом этапе вы будете видеть динамику{" "}
                  <a href="/seo" className="text-blue_main">
                    SEO продвижения сайта
                  </a>
                  . Мы предоставляем прозрачные отчеты и даем рекомендации по
                  улучшению. Наша цель — не просто выполнить работу, а помочь
                  вашему проекту и сайту расти.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_top_6.png"}
                  className="w-full"
                  alt={"Вы останетесь довольны нашей работой"}
                  width={359}
                  height={360}
                />
              </div>
            </div>
          }
        />

        <TicketSeoBlock
          title="Стоимость и сроки вывода сайта в ТОП"
          titleLeftBlock={"Цена и сроки зависят от сложности проекта и сайта"}
          textLeftBlock_1={
            "Мы предлагаем гибкие условия и индивидуальный расчет. Сроки варьируются от 3 до 12 месяцев в зависимости от уровня конкуренции. "
          }
          textLeftBlock_2={
            "Чем раньше вы начнете, тем быстрее увидите результат через сайт."
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
          min_h_ticket_list={180}
          list_1={[
            "Базовое SEO продвижение сайта в ТОП",
            "Подбор 100+ ключевых запросов",
            "Ежемесячные отчеты",
            "Поддержка и правки на сайте",
          ]}
          list_2={[
            "Полный аудит и переработка сайта",
            "200+ ключевых запросов",
            "Ускоренное индексирование",
            "Персональный менеджер + еженедельные отчеты",
          ]}
        />

        <DifferentTasksBlock
          bigTitle="Когда проекту действительно нужно продвижение сайта в ТОП"
          smallText="Не всем компаниям одинаково необходимо агрессивное SEO продвижение сайта. Есть ситуации, когда вложение ресурсов в поисковую оптимизацию дает максимальную отдачу:"
          paragraphs={[
            {
              title: "Новые сайты и стартапы",
              text: "Для новых сайтов и стартапов продвижение в ТОП становится вопросом выживания. Без видимости в поиске потенциальные клиенты просто не узнают о существовании проекта. Особенно это актуально для конкурентных ниш, где новичкам сложно пробиться без профессиональной SEO-стратегии.",
            },
            {
              title: "Локальный спрос",
              text: 'Компаниям, зависящим от локального спроса, попадание в ТОП по геозависимым запросам часто важнее масштабной рекламной кампании. Когда пользователь ищет "ремонт холодильников в Москве" или "доставка суши в Санкт-Петербурге", первые позиции сайта в поиске гарантируют постоянный поток заявок.',
            },
            {
              title: "Интернет-магазины",
              text: "<a href='/online-store' class='text-blue_main'>Интернет-магазинам</a> с широким ассортиментом органический трафик позволяет снизить зависимость от <a href='/marketplace' class='text-blue_main'>маркетплейсов</a> и их комиссий. Каждая товарная категория и даже отдельные карточки товаров могут привлекать целевых посетителей через поиск.",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[642px]"
          isOnlyBottomPadding={true}
        />

        <CommentBlock
          margin="mt-0"
          reviewsData={[
            {
              avatar: "/resources/avatar_15.png",
              name: "Елена Смирнова",
              jobTitle: "Модный Дом",
              reviewText:
                "Наша компания сотрудничала с Digital Devils на протяжении нескольких месяцев, и результаты не заставили себя ждать. Агентство грамотно подошло к анализу ключевых слов для сайта, что заметно повысило нашу видимость в интернете. Мы получили больше трафика и заинтересованных клиентов с сайта. Умение команды быстро адаптироваться к меняющимся условиям рынка достойно высокой оценки.",
            },
            {
              avatar: "/resources/avatar_16.png",
              name: "Дмитрий Ковалёв",
              jobTitle: "Домашний уют",
              reviewText:
                "Мы обратились в Digital Devils для продвижения нашего сайта, и не прогадали. Работа для сайта проведена колоссальная: от оптимизации контента до настройки внешних факторов. Сотрудничество с агентством было продуктивным, все вопросы решались оперативно и по делу. Сейчас наш сайт стабильно находится высоко в выдаче поисковых систем, что позитивно сказывается на нашем проекте.",
            },
            {
              avatar: "/resources/avatar_17.png",
              name: "Ольга Петрова",
              jobTitle: "ЭкоСад",
              reviewText:
                "С первого дня сотрудничества с Digital Devils мы заметили серьезный подход и тщательную проработку стратегии продвижения сайта. Наша узнаваемость возросла, позиции сайта в поисковых системах укрепились. Особая благодарность команде за постоянную обратную связь и внимательное отношение к нашим потребностям. С уверенностью можем сказать, что агентство — наш надежный партнер в продвижении проекта и сайта в сети.",
            },
          ]}
        />

        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Из чего складывается стоимость? 
              </h2>
              <p className="text-[18px] mb-[30px] lg:text-[22px] font-medium  max-w-[866px]">
                Цена SEO продвижения сайта зависит от объема работ: технической
                оптимизации, количества ключевых запросов, необходимости
                создания контента и ссылочной массы. Чем сложнее ниша, тем
                глубже требуется проработка. 
              </p>
              <div className="border-t-[1px] border-black  pt-[30px]">
                <p className="text-[16px] font-medium">Цена SEO-продвижения</p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  Мы не накручиваем цены на продвижения сайта — каждая услуга в
                  тарифе обоснована и направлена на результат. Вы платите только
                  за то, что действительно работает. 
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
                Критерии выбора SEO подрядчика
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-bold">
                    Если вы решили доверить SEO продвижение профессионалам,
                    обратите внимание на несколько ключевых факторов для сайта.
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Прозрачность методик работы — хорошие специалисты всегда
                      могут объяснить, за что именно вы платите. Остерегайтесь
                      тех, кто говорит исключительно о "секретных технологиях"
                      или гарантирует мгновенный результат.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Глубина аналитики перед началом работ — серьезные
                      подрядчики всегда проводят предварительный аудит и изучают
                      конкурентов, прежде чем предлагать стратегию.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Реалистичные прогнозы — профессиональные SEO никогда не
                      обещают попадание в ТОП за неделю или месяц в
                      высококонкурентной нише. Хороший результат для сайта
                      требует времени.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Комплексный подход — лучшие агентства рассматривают SEO
                      как часть общей маркетинговой стратегии, а не как
                      изолированную услугу.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Когда продвижение может быть неоправданным
              </h2>
              <div className="flex flex-col lg:flex-row justify-between lg:gap-[20px]">
                <div className="lg:max-w-[640px] lg:pb-0 pb-[30px] lg:border-none border-b-[1px] border-black">
                  <p className="text-[22px] font-bold">
                    Существуют проект-модели, где инвестиции в классическое SEO
                    могут не дать ожидаемого эффекта. Например, компании,
                    работающие исключительно по госзаказу или корпоративным
                    тендерам, часто получают клиентов через совсем другие
                    каналы.
                  </p>
                </div>
                <div className="lg:max-w-[640px] lg:pt-0 pt-[30px]">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="flex flex-row items-start">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-[16px] font-medium">
                        Проекты с узкой специализацией и небольшим количеством
                        запросов в нише могут достичь хороших позиций сайта
                        минимальными усилиями. В таких случаях масштабное SEO
                        продвижение часто не окупается.
                      </span>
                    </li>
                    <li className="flex flex-row">
                      <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <span className="text-[16px] font-medium">
                        Сезонные проекты (например, продажа новогодних товаров
                        или пляжного оборудования) могут получить больший эффект
                        от временных рекламных кампаний, чем от долгосрочного
                        SEO.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles={`pt-[50px] md:pt-[60px] bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_top_7.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  className="w-full"
                  height={360}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Вы не найдете более выгодного предложения
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Мы предлагаем оптимальное соотношение цены и качества SEO
                  продвижения сайта
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_top_small_7.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[20px] font-medium">
                  Мы не берем деньги за воздух — только за реальные действия,
                  которые приведут ваш сайт в десятку лучших. Наши клиенты
                  экономят на рекламе, потому что получают стабильный
                  органический трафик. Попробуйте — и убедитесь сами!
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

        <StandardMarginsLayout
          styles="py-[50px] md:py-[60px] mt-[50px] md:pt-[60px] bg-[#F5F5F5] text-white bg-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Как удержаться после достижения результата
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[20px] font-medium">
                    Многие совершают ошибку, считая, что после попадания в ТОП
                    можно прекратить работу над сайтом. На практике удержание
                    позиций сайта требует постоянных усилий:
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px] me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Регулярное обновление контента показывает системам, что
                      сайт актуален и продолжает развиваться. Это особенно важно
                      для информационных разделов и блога сайта.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Мониторинг поведенческих факторов помогает вовремя
                      выявлять проблемы с юзабилити. Если посетители стали
                      быстрее покидать сайт или меньше просматривать страниц,
                      это может сигнализировать о необходимости доработок.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Анализ конкурентов позволяет оперативно реагировать на
                      изменения в их стратегиях продвижения сайта. Потеря
                      позиций сайта часто происходит именно тогда, когда
                      конкуренты усиливают свою SEO-активность.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Адаптация к изменениям алгоритмов систем — постоянный
                      процесс.{" "}
                      <a href="/seo-google" className="text-blue_main">
                        Google
                      </a>{" "}
                      и{" "}
                      <a href="/seo-yandex" className="text-blue_main">
                        Яндекс
                      </a>{" "}
                      ежегодно вносят сотни изменений в свои алгоритмы, и
                      успешные сайты всегда быстро под них подстраиваются.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <DifferentTasksBlock
          bigTitle="Альтернативные способы привлечения трафика"
          smallText="Хотя органическое SEO продвижение остается одним из самых эффективных каналов, существуют и другие варианты привлечения клиентов."
          paragraphs={[
            {
              title: "Контекстная реклама",
              text: "Контекстная реклама позволяет быстро получить трафик, но требует постоянных бюджетных вложений. Ее главное преимущество — мгновенный результат, недостаток — высокая стоимость клика в конкурентных нишах.",
            },
            {
              title: "Социальные сети",
              text: "Социальные сети эффективны для вирусного маркетинга и построения лояльного комьюнити. Однако органический охват в соцсетях постоянно снижается, вынуждая проект все больше инвестировать в таргетированную рекламу.",
            },
            {
              title: "Партнерский маркетинг и работа с блогерами",
              text: "Партнерский маркетинг и работа с блогерами могут дать хороший результат для определенных категорий товаров. Но этот канал сложно масштабировать и контролировать качество трафика.",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[642px]"
        />

        <StandardMarginsLayout
          styles={`bg-white text-black`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[527px] min-w-[400px]">
                <Image
                  src={"/resources/seo_store_8.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
              <div className="lg:max-w-[753px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Будущее SEO: какие тренды стоит учитывать
                </h2>
                <p className="text-[22px] font-bold mt-[30px]">
                  Поисковая оптимизация для сайта продолжает эволюционировать, и
                  успешные проекты уже сегодня адаптируются к завтрашним
                  трендам.
                </p>
                <div className="w-full block lg:hidden mt-[20px]">
                  <Image
                    src={"/resources/seo_store_small_8.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <div className="flex flex-col min-w-[40%] lg:mt-[20px]">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Голосовой поиск меняет принципы формирования запросов.
                      Пользователи все чаще ищут информацию голосом, что требует
                      оптимизации под более естественные, разговорные фразы.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Искусственный интеллект в системах делает алгоритмы для
                      сайта более "человечными". Вместо простого соответствия
                      ключевым словам для сайта теперь важнее реальная
                      полезность контента для пользователя.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Персонализация результатов поиска означает, что разные
                      пользователи для сайта могут видеть разные сайты в ТОПе по
                      одним и тем же запросам. Это делает универсальные
                      SEO-стратегии менее эффективными.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Видеоконтент получает все больший вес в выдаче. Сайты,
                      интегрирующие полезные видео-материалы, часто получают
                      преимущество в ранжировании.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <DifferentTasksBlock
          bigTitle="Когда стоит обратиться к профессионалам"
          smallText="Хотя основы SEO можно освоить самостоятельно, есть ситуации, когда помощь специалистов окупается многократно:"
          paragraphs={[
            {
              title: "",
              text: "Высококонкурентные ниши для сайта требуют глубокой экспертизы и доступа к профессиональным инструментам анализа. Попытка сэкономить на SEO продвижении в таких условиях часто приводит к потере времени и ресурсов.",
            },
            {
              title: "",
              text: "Комплексные интернет-магазины с тысячами товарных позиций нуждаются в системном подходе к структуре и внутренней перелинковке, который сложно реализовать без опыта для сайта.",
            },
            {
              title: "",
              text: "Быстрый результат необходим при запуске новых проектов или выходе на новые рынки для сайта. Профессиональные агентства могут ускорить процесс выхода в ТОП за счет проверенных методик.",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[950px]"
        />

        <MainBlockFourth
          title="Eсть идеи для проекта?"
          description={
            "Вас бесплатно проконсультирует web-разработчик со стажем работы 5 лет"
          }
          margin="mb-[50px] sm:mb-[60px]"
        />

        <StandardMarginsLayout
          styles={`pb-[50px] md:pb-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Стратегии, альтернативы и секреты успешного продвижения
              </h2>
              <p className="text-[16px] mb-[10px] md:text-[18px] font-medium  max-w-[866px]">
                Современный цифровой ландшафт делает поисковые системы главными
                "воронками" привлечения клиентов. Когда потенциальный покупатель
                ищет товар или услугу, его путь начинается с поисковой строки
                Google или Яндекс.
              </p>
              <p className="text-[16px] mb-[30px] md:text-[18px] font-medium  max-w-[866px]">
                Статистика показывает, что 93% онлайн-взаимодействий начинаются
                с поисковиков, при этом 75% пользователей никогда не переходят
                на вторую страницу результатов. Это создает принципиальную
                разницу между сайтами в ТОПе и всеми остальными.
              </p>
              <div className="border-t-[1px] border-black pt-[30px]">
                <p className="text-[16px] md:text-[18px] font-medium max-w-[866px]">
                  Для проекта попадание в ТОП означает не просто увеличение
                  видимости, а получение постоянного потока целевых посетителей.
                  В отличие от рекламы, где трафик прекращается сразу после
                  остановки бюджета, органическое SEO продвижение продолжает
                  работать месяцами и годами после первоначальных вложений. При
                  правильной стратегии стоимость привлечения клиента через
                  органический поиск может быть в 5-10 раз ниже, чем через
                  платную рекламу.
                </p>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Основные стратегии вывода сайта в ТОП
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[18px] font-bold mb-[10px]">
                    Современное SEO — это комплексный процесс, включающий
                    несколько ключевых направлений работы для сайта.
                  </p>
                  <p className="text-[16px] font-medium">
                    Техническая оптимизация создает фундамент для успешного SEO
                    продвижения сайта. Скорость загрузки страниц, корректная
                    работа на мобильных устройствах, правильная структура сайта
                    — без этих базовых элементов все остальные усилия будут
                    малоэффективными.
                  </p>
                </div>
                <div className="lg:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[10px]">
                    Работа с контентом подразумевает создание полезных,
                    уникальных материалов, отвечающих на запросы целевой
                    аудитории. Важно не просто вписывать ключевые слова для
                    сайта, а действительно решать проблемы пользователей.
                  </p>
                  <p className="text-[16px] font-medium mb-[10px]">
                    Ссылочное продвижение помогает увеличить авторитетность
                    сайта в глазах систем. Качественные входящие ссылки с
                    тематических ресурсов остаются важным ранжирующим фактором.
                  </p>
                  <p className="text-[16px] font-medium">
                    Локальное SEO критически важно для проектов с физическими
                    точками присутствия. Оптимизация Google My Business, работа
                    с отзывами и геозависимыми запросами значительно повышает
                    видимость в конкретном регионе.
                  </p>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-white bg-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Интеграция SEO с другими маркетинговыми каналами
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-bold">
                    Наиболее эффективные digital-стратегии рассматривают SEO не
                    как изолированный инструмент, а как часть комплексного
                    подхода:
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Синергия с контекстной рекламой позволяет использовать
                      данные о конверсиях из платных каналов для оптимизации
                      SEO-стратегии. Ключевые слова для сайта, показывающие
                      хорошую конверсию в рекламе, часто становятся
                      приоритетными для органического продвижения сайта.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Взаимодействие с социальными сетями создает дополнительные
                      сигналы доверия для поисковых систем. Активность в
                      соцсетях может положительно влиять на ранжирование,
                      особенно для молодых сайтов.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[20px] mt-1 min-h-[20px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="md:text-[18px] text-[16px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Email-маркетинг помогает "дожать" посетителей, пришедших
                      из органического поиска, но не совершивших покупку с
                      первого раза. Персонализированные письма с напоминанием о
                      брошенной корзине могут значительно повысить конверсию.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Практические рекомендации по самостоятельному продвижению
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[18px] font-bold mb-[10px]">
                     Для проектов с ограниченным бюджетом возможно постепенное
                    самостоятельное  SEO продвижение.
                  </p>
                  <p className="text-[16px] font-medium">
                    Начните с технического аудита с помощью таких инструментов
                    как Google Search Console и Яндекс.Вебмастер. Устраните
                    критические ошибки индексации и проблемы с мобильной
                    адаптацией.
                  </p>
                </div>
                <div className="lg:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[10px]">
                    Создайте качественный контент, отвечающий на реальные
                    вопросы вашей целевой аудитории. Используйте сервисы подбора
                    ключевых слов для сайта, но не забывайте о естественности и
                    полезности материалов.
                  </p>
                  <p className="text-[16px] font-medium mb-[10px]">
                    Развивайте локальное цитирование — упоминания компании на
                    авторитетных площадках в вашем регионе. Это особенно важно
                    для проектов с оффлайн-присутствием.
                  </p>
                  <p className="text-[16px] font-medium">
                    Постепенно наращивайте ссылочную массу через гостевые посты
                    в блогах, участие в отраслевых каталогах и другие белые
                    методы.
                  </p>
                </div>
              </div>
            </>
          }
        />
        <StandardMarginsLayout
          styles={`pt-[50px] md:pt-[60px] bg-white text-black`}
          children={
            <div className={`flex flex-col gap-[30px]`}>
              <div>
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                  Распространенные ошибки в SEO продвижении
                </h2>
                <p className="text-[22px] font-medium max-w-[866px]">
                  Многие проекты, пытаясь сэкономить или ускорить результат,
                  совершают типичные ошибки.
                </p>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[40px] gap-[10px] lg:mt-[20px] mt-[10px]">
                  <p className="text-[16px] font-medium">
                    Чрезмерная оптимизация текстов ("переспам") не только не
                    помогает, но и может привести к санкциям со стороны систем.
                    Ключевые слова для сайта должны вписываться естественно.
                  </p>
                  <p className="text-[16px] font-medium">
                    Игнорирование мобильных пользователей — с учетом того, что
                    более 60% запросов поступает с мобильных устройств, это
                    критическая ошибка.
                  </p>
                  <p className="text-[16px] font-medium">
                    Покупка дешевых ссылок массово может дать кратковременный
                    эффект, но почти всегда приводит к проблемам в долгосрочной
                    перспективе.
                  </p>
                  <p className="text-[16px] font-medium">
                    Отсутствие аналитики и корректировки стратегии для сайта —
                    SEO требует постоянного мониторинга и адаптации к
                    изменениям.
                  </p>
                </div>
              </div>
              <div
                className={`grid lg:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[20px] border-t-[1px] pt-[30px] border-t-black`}
              >
                <span className="text-[16px] font-medium">
                  SEO продвижение сайта в ТОП 3  — это не разовая кампания, а
                  постоянный процесс, требующий системного подхода. В отличие от
                  многих других маркетинговых инструментов, SEO дает
                  накопительный эффект — чем дольше и грамотнее вы работаете над
                  SEO продвижением, тем лучше результаты.
                </span>
                <span className="text-[16px] font-medium">
                  Для большинства проектов инвестиции в качественное SEO
                  окупаются многократно, обеспечивая стабильный поток целевых
                  клиентов без постоянных рекламных затрат. Однако важно
                  понимать, что волшебных таблеток не существует — настоящий
                  успех приходит к тем, кто рассматривает оптимизацию как часть
                  комплексной проект-стратегии, а не как отдельную техническую
                  задачу.
                </span>
              </div>
            </div>
          }
        />

        <MainBlockTenth data={data} isOnlyBottomPadding={false} />
      </BasicLayout>
    </>
  );
};

export default marketplace;

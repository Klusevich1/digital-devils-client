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
import OurApproachBlock from "@/components/OurApproachBlock";
import MainBlockFive from "@/components/MainBlockFive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Разработка дизайна", link: "/design" },
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
    name: "Разработка дизайна",
    item: "https://digitaldevils.by/design",
  },
];

const listData = [
  {
    title: "Аналитика",
    text: [
      "Тщательно исследуется рынок, анализируются конкуренты и выявляются основные тенденции в нише. Проводится детальное изучение целевой аудитории: её потребности, желания и поведение. Полученные данные позволяют заложить прочную основу для дальнейшего развития.",
      "Этап дает глубокое понимание целей. Выявляются реальные проблемы, которые сайт должен решить. Кроме того, аналитика помогает избежать ошибок, связанных с неверным определением потребностей рынка.",
    ],
  },
  {
    title: "Брифинг",
    text: [
      "Мы встречаемся с заказчиком для сбора всех пожеланий, требований и ожиданий. Фиксируются конкретные задачи, ключевые функции и желаемые результаты. Это позволяет создать детальное техническое задание и определить основные критерии успеха.",
      "Четкое техническое задание, необходимое для работы всех участников. Помогает зафиксировать все требования клиента и избежать недопонимания на дальнейших стадиях. В итоге у команды появляется ясное представление о конечном продукте.",
    ],
  },
  {
    title: "Создание прототипа",
    text: [
      "Формируется структура сайта, разрабатываются логические связи между разделами и создаются черновые макеты основных страниц. Это позволяет наглядно увидеть, как пользователь будет взаимодействовать с будущим продуктом. Благодаря прототипу тестируются и дорабатываются основные сценарии использования еще до начала разработки дизайна сайта.",
      "Визуализация логики и структуры сайта, что значительно упрощает дальнейшую работу. Позволяет заранее выявить недочеты в пользовательском пути и устранить их до начала разработки веб дизайна сайта. Кроме того, прототипирование помогает согласовать структуру сайта между всеми заинтересованными сторонами компании.",
    ],
  },
  {
    title: "Дизайн макетов для сайта",
    text: [
      "На основе утвержденного прототипа разрабатываются визуальные концепции сайта, подбираются шрифты, цвета и графические элементы . Дизайнеры учитывают фирменный стиль заказчика и современные тенденции в веб-дизайне. В результате формируется привлекательный внешний вид будущего сайта.",
      "У вас есть возможность увидеть конечный облик сайта, оценить, насколько визуальное оформление соответствует целям и предпочтениям бизнеса. Кроме того, дизайн макетов  для сайта служит основой для последующих этапов внедрения и программирования.",
    ],
  },
  {
    title: "Согласование",
    text: [
      "После презентации готового дизайн-макета  для сайта собираются отзывы и пожелания от заказчика и участников сайта. Все необходимые правки вносятся, и финальный вариант утверждается обеими сторонами. Работа завершается полной фиксацией итоговой разработки дизайна  для сайта для передачи его разработчикам.",
      "Финальный, согласованный всеми сторонами вариант разработки дизайна  для сайта компании. Исключает вероятность дальнейших доработок на стадии разработки, экономя время и ресурсы  для сайта. Обеспечивает уверенность, что итоговый результат отвечает всем ожиданиям клиента и команды компании.",
    ],
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени занимает разработка дизайна сайта?",
      description: (
        <p>
          Сроки создания всегда индивидуальны: от одной недели для простых
          лендингов до нескольких недель для сложных проектов с уникальным
          функционалом. Всегда заранее согласуем время с клиентом.
        </p>
      ),
    },
    {
      title: "Могу ли я вносить правки на этапе разработки?",
      description: (
        <p>
          Да, мы работаем совместно и обязательно обсуждаем все промежуточные
          варианты. Ваше мнение при создании дизайна сайта для нас важно.{" "}
        </p>
      ),
    },
    {
      title: "В чем отличие создания уникального дизайна сайта от шаблонного?",
      description: (
        <p>
          Первый учитывает особенности вашего бизнеса, позиционирование,
          полностью разрабатывается “под ключ”. Шаблон — это быстрый, но
          стандартный вариант без вдумчивого создания и глубокой адаптации под
          бренд.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Разработка дизайна сайта в Минске под ключ | Заказать дизайн сайта"
        description="Разрабатываем уникальный дизайн сайтов с упором на пользовательский опыт, визуальную привлекательность и бизнес-цели. Современные подходы, адаптивность и стиль — ваш сайт будет не просто красивым, а по-настоящему эффективным."
        canonical="https://digitaldevils.by/design"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="Разработка дизайна" />
        <StandardMarginsLayout
          styles="md:pb-[60px] pb-[50px]"
          children={
            <>
              <div className="sm:flex hidden flex-row justify-self-center lg:gap-[40px] gap-[20px]">
                <div>
                  <Image
                    src={"/resources/design_1.png"}
                    alt="Design1"
                    width={300}
                    height={300}
                  />
                </div>
                <div>
                  <Image
                    src={"/resources/design_2.png"}
                    alt="Design2"
                    width={640}
                    height={300}
                  />
                </div>
                <div>
                  <Image
                    src={"/resources/design_3.png"}
                    alt="Design3"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="sm:hidden block">
                <Swiper
                  modules={[Navigation]}
                  navigation={true}
                  slidesPerView={1.2}
                  spaceBetween={20}
                  loop={true}
                  className="w-full mt-[20px] xl:mt-0"
                >
                  {[
                    "/resources/design_1.png",
                    "/resources/design_small_2.png",
                    "/resources/design_3.png",
                  ].map((slide, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="p-2">
                        <div className="">
                          <Image
                            src={slide}
                            width={300}
                            height={300}
                            alt={`Design ${idx}`}
                            className="w-full object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          }
        />
        <BlockWithListOfCurrentTechnologies
          isOnlyBottomPadding={true}
          title="У нас современный подход"
          list={[
            "Используем актуальные тренды и свежие решения в digital-дизайне сайтов",
            "Анализируем поведение целевой аудитории и проектируем под нее UX",
            "Прорабатываем адаптивность для любых устройств и экранов",
            "Внедряем интерактивные элементы для вовлечения пользователя",
            "Максимально автоматизируем процессы и сокращаем время запуска",
            "Работаем в плотной коммуникации с заказчиком на каждом этапе",
          ]}
          isDark={false}
        />
        <StandardMarginsLayout
          styles={`bg-white text-black`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/design_5.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Мы разрабатываем дизайн, который отражает ваш бизнес
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Каждая визуальная деталь и пользовательский сценарий
                  подчеркивают уникальность вашей компании и продуктов
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/design_small_5.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Мы не создаем универсальные шаблоны — только уникальные
                  решения, которые транслируют ваши конкурентные преимущества,
                  ценности и характер. Дизайн сайта становится вашим цифровым
                  лицом: уже при первом посещении пользователи понимают, за что
                  вас стоит выбрать. Такой подход позволяет формировать доверие,
                  узнаваемость и долгосрочное взаимодействие с клиентами.
                </p>
              </div>
            </div>
          }
        />

        <DifferentTasksBlock
          bigTitle="Разные задачи - разный подход"
          smallText="Мы не ограничиваемся одним стилем или форматом — под задачи вашего бизнеса разрабатываем индивидуальные стратегии и решения"
          paragraphs={[
            {
              title: "<a href='/corporate-website'>Корпоративный сайт</a>",
              text: "Мы выстраиваем структуру, отражающую масштабы и экспертизу вашей компании, делаем акцент на надежности и презентации командных успехов. Упор на визуальные детали, которые вызывают доверие у клиентов и партнеров",
            },
            {
              title: "<a href='/landing'>Продающий лендинг</a>",
              text: "Ставим во главу угла максимальную конверсию. Оцениваем точки входа, акцентируем Call to Action, создаем визуальное сопровождение для грамотной подачи оффера и формирования желания купить",
            },
            {
              title: "Сервис или онлайн-платформа",
              text: "Фокусируемся на логике пользовательского взаимодействия и простоте навигации. Проектируем детальные сценарии, чтобы сделать опыт работы с сервисом удобным, быстрым и интуитивным",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[642px]"
          isOnlyBottomPadding={false}
        />

        <OurApproachBlock
          title="Процесс разработки дизайна"
          listData={listData}
          padding="py-[50px] md:py-[60px]"
          isDark={true}
        />

        <HalfImageBlock
          title="Стоимость услуг разработки дизайна сайта"
          smallTitle="Сколько стоит заказать разработку дизайна сайта компании?"
          description={
            <>
              <p className="font-medium text-[18px] mb-[10px]">
                Цена разработки дизайна сайта зависит от объема и сложности
                сайта, количества страниц, глубины проработки интерфейсов,
                интерактивных элементов и особенностей бизнеса.
              </p>
              <p className="font-medium text-[18px] mb-[20px]">
                Также на стоимость разработки дизайна для сайта влияет
                необходимость аналитики, создание прототипов, иллюстраций или
                брендинга. Мы всегда подробно обсуждаем ваши цели, чтобы
                предложить оптимальный бюджет, и честно обосновываем каждый
                пункт сметы. Если требуется доработка после запуска — это тоже
                учитывается в оценке. Мы делаем прозрачные расчеты и подбираем
                решение под ваши цели м.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/design_6.png"}
          smallImage={"/resources/design_small_6.png"}
          widthImage={639}
          heightImage={300}
          isOnlyBottomPadding={false}
        />
        <StandardMarginsLayout
          styles={`bg-white text-black pb-[50px] md:pb-[60px]`}
          children={
            <div className="flex flex-col">
              <h2 className="pb-[30px] mb-[30px] border-b-[1px] border-black font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Стоимость
              </h2>
              <div className="flex flex-col xl:flex-row w-full justify-between">
                <div className="w-full xl:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[20px]">
                    Начинается от
                  </p>
                  <div className="flex flex-col xl:flex-row xl:items-end justify-between ">
                    <p className="text-[22px] font-medium w-full max-w-[187px] xl:mb-0 mb-[10px] me-[40px]">
                      Дизайн-концепт: От 600$
                    </p>
                    <p className="text-[22px] font-medium w-full max-w-[413px]">
                      Стоимость создания зависит от количества дополнительных
                      услуг и элементов фирменного стиля  для сайта
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] xl:border-t-[0] border-l-0 xl:border-l-[1px] border-black mt-[20px] xl:mt-[0] pt-[20px] xl:pt-[0] xl:ps-[20px] w-full xl:max-w-[660px]">
                  <p className="text-[16px] font-medium mb-[20px]">Наш опыт</p>
                  <div className="flex-col">
                    <p className="text-[32px] font-bold">
                      Стоимость зависит от количества дополнительных услуг и
                      элементов фирменного стиля.
                    </p>
                    <div className="flex flex-row items-center mt-[20px] max-w-[249px]">
                      <div className="bg-gray-500 rounded-full size-[60px] me-[10px]">
                        <Image
                          src="/resources/design_7.png"
                          width={60}
                          height={60}
                          alt="Елизавета"
                        />
                      </div>
                      <div>
                        <p className="text-[16px] font-bold">Елизавета </p>
                        <p className="text-[16px] font-med">UX/UI дизайнер</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <MainBlockFive title={"Кейсы"} />

        <MainBlockTenth data={data} isOnlyBottomPadding={true} />
      </BasicLayout>
    </>
  );
};

export default marketplace;

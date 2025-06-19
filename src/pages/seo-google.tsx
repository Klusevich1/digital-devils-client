import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import SmallMainBlockCard from "@/components/SmallMainBlockCard";
import OurCaseBlock from "@/components/OurCaseBlock";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import SeoTitleBlock from "@/components/SeoTitleBlock";
import Image from "next/image";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import CommentBlock from "@/components/CommentBlock";
import HalfImageBlock from "@/components/HalfImageBlock";
import TicketSeoBlock from "@/components/TicketSeoBlock";
import { FaCircleChevronRight } from "react-icons/fa6";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Продвижение сайтов", link: "/seo" },
  { name: "Продвижение в Google", link: "/seo-google" },
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
    name: "Продвижение в Google",
    item: "https://digitaldevils.by/seo-google",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени на SEO нужно для выхода сайта в десятку лучших?",
      description: (
        <p className="text-[18px] ">
          Сроки достижения результатов зависят от уровня конкуренции в нише и
          текущего состояния сайта. В среднем первые заметные улучшения
          появляются через 3-4 месяца, но устойчивые позиции в десятке обычно
          достигаются за 6-12 месяцев. Мы всегда честно оцениваем перспективы
          сайта и держим вас в курсе прогресса на каждом этапе. 
        </p>
      ),
    },
    {
      title: "Какие гарантии вы даете на SEO?",
      description: (
        <p className="text-[18px]">
          Мы гарантируем профессиональный подход и выполнение всех
          запланированных работ в срок на сайте. Однако честные подрядчики не
          могут обещать конкретных позиций в поиске — это зависит от алгоритмов
          Google и действий конкурентов. Вместо этого мы фокусируемся на
          показателях, которые действительно влияют на бизнес: рост трафика,
          конверсии и дохода. 
        </p>
      ),
    },
    {
      title: "Нужно ли платить за продвижение сайта ежемесячно?",
      description: (
        <p className="text-[18px] ">
          Да, эффективное продвижение требует постоянной работы: обновления
          контента, мониторинга позиций и адаптации к изменениям алгоритмов. Мы
          предлагаем различные форматы сотрудничества — можно начать с разового
          аудита или сразу подключить комплексное сопровождение. Ежемесячные
          инвестиции в продвижение окупаются за счет стабильного потока
          клиентов.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="SEO-продвижение сайтов в ТОП Google | Поисковая оптимизация сайтов в Минске"
        description="Комплексное SEO-продвижение сайтов в ТОП Google в Минске и Беларуси. Используем только передовые технологии и адаптивность — ваши посетители оценят. Доверяйте SEO-продвижение своего сайта в Google экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/seo-google"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="Продвижение в Google" />
        <StandardMarginsLayout
          styles={`bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[753px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Мы продвигаем сайты именно так как нужно
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  <a href="/seo-top" className="text-blue_main">
                    Продвижение сайтов в ТОП
                  </a>{" "}
                  Google в Беларуси
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_google_1_small.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Google — это не просто поисковик, это главная витрина бизнеса.
                  Если вас нет в десятке выдачи, вас не видят 95% потенциальных
                  клиентов. Digital Devils не использует шаблонные методы или
                  странную рекламу. Мы анализируем бизнес, конкурентов и целевую
                  аудиторию, чтобы создать персонализированную стратегию
                  продвижения. Наш подход — это не просто "поднять позиции"
                  сайта за счет SEO или рекламы, а привести клиентов, которые
                  купят.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[527px] min-w-[400px]">
                <Image
                  src={"/resources/seo_google_1.png"}
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
          styles={`py-[50px] md:py-[60px] bg-white text-black `}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                Преимущества продвижения сайта в Google
              </h2>
              <div className="flex flex-col xl:flex-row items-start justify-between mt-[30px]">
                <div className="text-[22px] font-bold rounded-[30px] bg-[#F1F2F4] sm:px-[40px] sm:pt-[36px] sm:pb-[30px] px-[20px] py-[30px] xl:max-w-[640px] lg:me-[20px]">
                  <h2 className="text-[28px] lg:text-[32px] font-bold">
                    Что такое Google?
                  </h2>
                  <p className="text-[16px] font-medium mt-[20px]">
                    Google — это крупнейшая поисковая система в мире, через
                    которую ежедневно проходят миллиарды запросов. Если сайт не
                    появляется в десятке, вы теряете огромную долю рынка, даже
                    если уже тратите бюджет на рекламу.
                  </p>
                  <div className="w-full flex justify-end mt-[10px]">
                    <Image
                      src={"/resources/google_logo.png"}
                      alt={"Google"}
                      width={64}
                      height={66}
                    />
                  </div>
                </div>
                <div className="text-[18px] font-medium mt-[30px] xl:mt-0 xl:max-w-[640px]">
                  <h2 className="text-[24px] font-bold">
                    Продвижение в Google позволяет получать органический трафик,
                    который не требует платы за клик после выхода в ТОП
                  </h2>
                  <p className="text-[18px] font-medium mt-[20px]">
                    SEO в отличие от рекламы обеспечивает долгосрочный
                    результат, продолжая работать годами, в отличие от рекламы,
                    которая требует постоянных вложений в сайт. Еще одним важным
                    преимуществом является высокая конверсия на сайте:
                    пользователи, которые ищут товар или услугу, уже
                    заинтересованы в покупке, что увеличивает вероятность сделки
                    через сайт.
                  </p>
                </div>
              </div>
            </div>
          }
        />

        <DifferentTasksBlock
          bigTitle="Найдем подход к любой задаче"
          smallText="Digital Devils не просто продвигает сайты — мы решаем конкретные бизнес-задачи."
          paragraphs={[
            {
              title: "Ваш сайт никто не находит в Google",
              text: "<a href='/seo-audit' class='text-blue_main'>Проводим глубокий аудит</a>, выявляем слабые места, подбираем ключевые запросы, делаем качественное SEO и выводим сайт в ТОП.",
            },
            {
              title: "Есть трафик, но мало заявок",
              text: "Оптимизируем конверсию: улучшаем UX, добавляем триггеры доверия (отзывы, гарантии), настраиваем воронку продаж.",
            },
            {
              title: "Хотим увеличить средний чек на сайте",
              text: "Внедряем перекрестные продажи, персонализированные рекомендации и систему лояльности.",
            },
          ]}
          isDark={true}
        />

        <OurCaseBlock
          title="Наш кейс"
          cases={[
            {
              miniTitle: "Продвижение сайта по ремонту квартир в Минске",
              text1: "С 0 до 7 500 переходов в месяц",
              text2:
                'Молодая компания по ремонту квартир не могла пробиться в верх выдачи, несмотря на качественные услуги. Мы разработали уникальную стратегию, сделав основной акцент на информационных запросах типа "как сделать ремонт" и "советы по ремонту". Создали более 120 подробных гайдов с пошаговыми инструкциями, которые стали привлекать целевую аудиторию на ранних стадиях принятия решения. Параллельно полностью переработали профиль в Google My Business, добавив портфолио работ и систему отзывов.',
              imageUrl: "/resources/seo-case.png",
              numbers: (
                <>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-[15px] justify-between lg:flex lg:mb-[60px] mb-[30px] pt-[30px]">
                    <SmallMainBlockCard
                      title="+7500"
                      description="целевых переходов  в месяц"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="12%"
                      description="конверсия в заявку"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="+40%"
                      description="заказов по рекомендациям"
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
              analiticsImg: "/resources/seo-google-numbers.png",
              analiticsImgSmall: "/resources/seo-google-numberssmall.png",
            },
          ]}
        />

        <WideBlockWithImage
          title="Мы знаем, что нужно вашей целевой аудитории"
          text_1="Google — это не просто алгоритмы, это люди, которые ищут ваш товар или услугу. Мы анализируем поведение вашей аудитории, чтобы сайт попал в верхушку выдачи по тем запросам, которые ведут к покупке, даже если вы уже пользуетесь рекламой."
          text_2="Наши стратегии по работе с вашим сайтом строятся на трех ключевых принципах: видимость → доверие → конверсия. Мы не просто поднимаем позиции — мы привлекаем платежеспособную аудиторию. При необходимости настраиваем и рекламу"
        />

        <StandardMarginsLayout
          styles={"py-[50px] md:py-[60px] bg-white text-black"}
          children={
            <div className="flex flex-col">
              <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] w-full">
                Стоимость продвижения в Google
              </h2>
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
                  <div>
                    <h2 className="font-bold text-[22px] mb-[20px]">
                      Цена на{" "}
                      <a href="/seo" className="text-blue_main">
                        продвижение сайта
                      </a>{" "}
                      в ТОП Google формируется индивидуально для каждого проекта
                      и зависит от нескольких ключевых факторов: масштабов
                      бизнеса, уровня конкуренции в нише и набора маркетинговых
                      инструментов, которые будут использоваться.
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
                    <p className="text-[18px] font-medium">
                      При расчете стоимости мы тщательно анализируем необходимый
                      объем работ, включая SEO оптимизацию, создание
                      качественного контента и техническую доработку сайта, а
                      также при необходимости рекламу. Важное значение имеет
                      количество ключевых запросов, по которым планируется
                      продвижение сайта в топ 10 Google.
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
            </div>
          }
        />
        <TicketSeoBlock
          title="Два тарифа на выбор"
          titleLeftBlock={"SEO — это не универсальный процесс"}
          textLeftBlock_1={
            "Одним бизнесам нужен постепенный рост, другим — быстрый результат. Поэтому мы предлагаем гибкие варианты сотрудничества по сайту. При этом, учитываем индивидуальные особенности заказчика и готовы адаптировать тариф к его потребностям."
          }
          textLeftBlock_2={""}
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
            "Базовое SEO: оптимизация мета-тегов, структуры сайта",
            "Подбор 100+ ключевых запросов",
            "Ежемесячный отчет по позициям",
            "Поддержка и правки сайта",
          ]}
          list_2={[
            "Полный аудит и переработка сайта",
            "500+ ключевых запросов с высокой конверсией",
            "Ускоренное индексирование и выход в десятку лучших",
            "Персональный менеджер + еженедельные отчеты",
          ]}
        />
        <CommentBlock
          reviewsData={[
            {
              avatar: "/resources/avatar_7.png",
              name: "Дмитрий Соколов",
              jobTitle: 'CEO "GadgetPro',
              reviewText:
                "Нас удивило, что ребята не просто взяли деньги за SEO, а сначала провели глубокий аудит. После доработок сайт вышел в десятку лучших по ключевым запросам, а продажи выросли в 3 раза за полгода.",
            },
            {
              avatar: "/resources/avatar_6.png",
              name: "Елена Петрова",
              jobTitle: 'маркетолог "EcoHome"',
              reviewText:
                "Раньше мы зависели от маркетплейсов и рекламы на них. Сейчас 70% заказов идет через сайт благодаря SEO. Digital Devils не просто оптимизировали страницы — они сделали их по-настоящему продающими",
            },
            {
              avatar: "/resources/avatar_5.png",
              name: "Артем Белов",
              jobTitle: 'основатель "SportGear"',
              reviewText:
                "За 8 месяцев мы с 200 посещений в день вышли на 1500. Но главное — это качество трафика на сайте: 90% посетителей — целевые, готовые к покупке. Лучшее вложение в бизнес за последние годы",
            },
          ]}
          margin="mt-0"
        />

        <DifferentTasksBlock
          bigTitle="Кому необходимо продвижение в Google"
          smallText=""
          paragraphs={[
            {
              title: "Малый и средний бизнес",
              text: "Малому и среднему бизнесу продвижение в Google дает возможность конкурировать с крупными сетями. Особенно это важно для локальных компаний - магазинов, сервисов, кафе. Оптимизация Google My Business и локальное SEO помогают таким бизнесам привлекать людей из конкретного района.",
            },
            {
              title: "Интернет-магазины",
              text: "Интернет-магазины получают особые преимущества от в Google. Электронная коммерция сильно зависит от органического трафика, и правильное SEO позволяет увеличить видимость товаров, улучшить конверсию и снизить зависимость от дорогой контекстной рекламы.",
            },
            {
              title: "B2B и B2C",
              text: "Для сферы услуг - как B2B, так и B2C - продвижение сайта в Google создает основу доверия. Юридические, строительные, медицинские и другие услуги особенно нуждаются в информационных статьях и отзывах, которые формируют экспертность компании и ее сайта в глазах потенциальных покупателей.",
            },
            {
              title: "Стартапы и новые проекты",
              text: "Стартапы и новые проекты могут использовать продвижение для быстрого выхода в топ по низкоконкурентным запросам. Это помогает молодым компаниям и сайтам находить первых клиентов без существенных рекламных бюджетов.",
            },
          ]}
          isDark={false}
        />

        <StandardMarginsLayout
          styles={`bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[753px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Мы делаем так, чтобы вы получили максимальный результат с
                  сайта
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Мы не просто выводим сайт в ТОП, мы создаем систему
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_google_small_5.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Наша команда использует комплексный подход к продвижению,
                  который начинается с глубокого анализа бизнеса и конкурентной
                  среды. Мы разрабатываем индивидуальную стратегию, сочетающую
                  SEO оптимизацию, контент-маркетинг и технические улучшения
                  сайта. Каждый этап работы тщательно планируется и
                  контролируется с помощью современных аналитических
                  инструментов.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[527px] min-w-[400px]">
                <Image
                  src={"/resources/seo_google_5.png"}
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
                Ваши клиенты будут довольны 
              </h2>
              <p className="text-[18px] mb-[30px] lg:text-[22px] font-medium  max-w-[866px]">
                Поисковое продвижение сайтов в Google — это не только про
                позиции в поиске, но и про качество взаимодействия с аудиторией.
              </p>
              <div className="border-t-[1px] border-black  pt-[30px]">
                <p className="text-[16px] font-medium">
                  Цена продвижения в Google
                </p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  Мы оптимизируем сайт так, чтобы пользователи легко находили
                  нужную информацию и совершали целевые действия. Удобная
                  навигация, быстрая загрузка страниц и релевантный контент на
                  сайте создают положительный пользовательский опыт. Это
                  приводит к росту доверия к бренду и увеличению количества
                  повторных обращений через сайт даже без рекламы.
                </p>
              </div>
            </div>
          }
        />

        <BlockWithImageAndDropDownMenu
          isDark={true}
          title="Преимущества продвижения сайта в Google"
          borderColor="#ffffff"
          margin="md:py-[60px] py-[50px]"
          data={[
            {
              title: "Органический трафик",
              description: [
                "Органический трафик из поиска работает круглосуточно без дополнительных затрат на рекламу. После выхода в топ вы получаете посетителей даже в нерабочее время, что обеспечивает стабильный поток заказов или покупок.",
              ],
            },
            {
              title: "Высокое качество и конверсия",
              description: [
                "Поисковый трафик отличается высоким качеством и конверсией. Пользователи, которые сами ищут товар или услугу, уже мотивированы к покупке, что значительно увеличивает вероятность совершения целевого действия.",
              ],
            },
            {
              title: "Доверие к сайтам выше",
              description: [
                "Доверие к сайтам в десятке Google заметно выше. Исследования показывают, что 75% пользователей не переходят дальше первой страницы выдачи, что делает высокие позиции критически важными для успеха бизнеса.",
              ],
            },
            {
              title: "Долгосрочный результат",
              description: [
                "SEO обеспечивает долгосрочный результат, который продолжает работать годами. В отличие от контекстной рекламы, где эффект исчезает сразу после остановки кампании, результаты грамотного продвижения имеют накопительный эффект.",
              ],
            },
          ]}
          firstBlock={
            <>
              <div className="w-full md:flex hidden">
                <Image
                  src={"/resources/seo-google-2.png"}
                  width={527}
                  height={300}
                  className="w-full"
                  alt="Подготовка к SEO аналитике сайта: ключевые аспекты"
                />
              </div>
              <div className="w-full md:hidden flex">
                <Image
                  src={"/resources/bitrix_5_small.png"}
                  width={527}
                  height={300}
                  className="w-full"
                  alt="Подготовка к SEO аналитике сайта: ключевые аспекты"
                />
              </div>
            </>
          }
        />

        <WideBlockWithImage
          title="Продвижение в Google: полное руководство для бизнеса"
          text_1="В современном цифровом мире Google стал главной витриной любого бизнеса."
          text_2='93% онлайн-опыта начинается с поисковой системы, и если сайта нет в десятке выдачи, вы теряете подавляющее большинство потенциальных покупателей. Но продвижение в Google — это не просто "быть на первой странице", это сложная система привлечения именно целевой аудитории.'
        />

        <StandardMarginsLayout
          styles={"py-[50px] md:py-[60px] bg-white text-black"}
          children={
            <div className="flex flex-col">
              <div
                className={`flex md:flex-row-reverse flex-col gap-12 justify-between`}
              >
                <div className="flex flex-col lg:block items-center">
                  <div>
                    <h2 className="lg:hidden block font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] w-full">
                      Узнайте цену
                    </h2>
                    <h2 className="font-bold text-[22px] mb-[20px]">
                      Сколько стоит продвижение в вашей нише?
                    </h2>
                    <div className="w-full max-w-full mb-[20px] lg:hidden block">
                      <Image
                        src={"/resources/seo_google_small_9.png"}
                        width={341}
                        height={353}
                        className="object-cover w-full"
                        alt={"Мы разрабатываем то, что нужно Вам"}
                      />
                    </div>
                    <p className="text-[18px] font-medium">
                      Цена продвижения сайта в ТОП 10 Google зависит от
                      множества факторов: специфики ниши, текущего состояния
                      сайта и поставленных целей на сайте. Мы предлагаем гибкие
                      условия сотрудничества — от разовых работ до комплексного
                      продвижения с ежемесячным сопровождением. После анализа
                      проекта мы подготовим индивидуальное коммерческое
                      предложение с оптимальным набором инструментов для сайта.
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
                <div className="relative h-full max-w-[753px] min-w-[40%]  hidden lg:block">
                  <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] w-full lg:leading-[1]">
                    Узнайте цену
                  </h2>
                  <Image
                    src={"/resources/seo_google_9.png"}
                    width={522}
                    height={400}
                    className="object-cover"
                    alt={"Мы разрабатываем то, что нужно Вам"}
                  />
                </div>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-white bg-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Почему клиенты выбирают нас
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-medium">
                    Digital Devils отличается глубоким индивидуальным подходом к
                    каждому проекту.
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Мы не используем шаблонные решения, а разрабатываем
                      стратегии, учитывающие все особенности бизнеса и рыночной
                      ниши. 
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Мы гарантируем полную прозрачность работы. Наши клиенты
                      видят все этапы продвижения и могут в любой момент
                      получить подробный отчет о проделанной работе и
                      достигнутых результатах. 
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Наша работа оценивается по конкретным бизнес-показателям.
                      Мы ориентируемся не на абстрактные параметры, а на
                      реальный рост дохода и количества клиентов.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Клиенты получают круглосуточную поддержку и оперативные
                      ответы на все вопросы. Мы понимаем, что в
                      digital-маркетинге важна оперативность, и всегда готовы
                      оперативно реагировать на любые изменения. 
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Если вы готовы увеличить продажи через Google, оставьте
                      заявку, и мы подготовим персональный план продвижения,
                      учитывающий все особенности бизнеса и рыночной ситуации.
                      Наши специалисты свяжутся с вами в ближайшее время для
                      обсуждения деталей сотрудничества.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <DifferentTasksBlock
          bigTitle="Наш подход к продвижению"
          smallText="Мы начинаем с глубокого анализа бизнеса, конкурентов и целевой аудитории. Это позволяет точно определить потребности клиентов и найти оптимальные пути их удовлетворения через сайт."
          paragraphs={[
            {
              title: "Техническая оптимизация сайта",
              text: "Техническая оптимизация сайта - фундамент успешного продвижения. Мы устраняем ошибки индексации, значительно ускоряем загрузку страниц и обеспечиваем идеальную адаптацию под мобильные устройства, так как без этих факторов даже самый качественный контент не сможет попасть в верхушку выдачи.",
            },
            {
              title: "Контент-стратегия",
              text: "Разрабатывая контент-стратегию, мы фокусируемся на создании действительно полезных материалов. Это не просто тексты для поисковых систем, а решения реальных проблем аудитории, которые формируют доверие и лояльность.",
            },
            {
              title: "Комплексный подход",
              text: "Для достижения максимального эффекта мы используем комплексный подход, сочетая SEO с другими инструментами цифрового маркетинга. Контекстная реклама, SMM и email-маркетинг в сочетании с SEO дают синергетический эффект, значительно увеличивая результативность.",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[642px]"
          isOnlyBottomPadding={false}
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Распространенные ошибки в продвижении
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[10px]">
                    Многие предприниматели ошибочно пытаются быстро вывести сайт
                    в верхушку выдачи, не понимая, что настоящее SEO требует
                    времени. Первые значимые результаты появляются через 3-4
                    месяца, а устойчивый эффект достигается через 6-12 месяцев
                    систематической работы.
                  </p>
                  <p className="text-[16px] font-medium">
                    Частая ошибка - экономия на качестве контента. Важно
                    понимать, что Google давно научился оценивать не объем, а
                    полезность материалов. Тонны бессмысленного текста на сайте
                    не только не помогают, но могут и навредить продвижению. 
                  </p>
                </div>
                <div className="lg:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[10px]">
                    Игнорирование технической части сайта - серьезное упущение.
                    Даже самый красивый и информативный сайт не будет
                    ранжироваться, если он медленно загружается или плохо
                    индексируется поисковыми системами. 
                  </p>
                  <p className="text-[16px] font-medium">
                    Отсутствие системной аналитики делает продвижение слепым.
                    Без постоянного отслеживания результатов невозможно понять,
                    какие методы работают эффективно, а какие требуют
                    корректировки. 
                  </p>
                </div>
              </div>
            </>
          }
        />
        <MainBlockTenth data={data} isOnlyBottomPadding={false} />
      </BasicLayout>
    </>
  );
};

export default marketplace;

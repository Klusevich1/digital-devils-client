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
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Разработка фирменного стиля", link: "/design-style" },
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
    name: "Разработка фирменного стиля",
    item: "https://digitaldevils.by/design-style",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени занимает разработка фирменного стиля компании?",
      description: (
        <p className="text-[18px] ">
          Сроки зависят от объема работы: минимальный пакет (логотип + базовые
          элементы) — 2-3 недели, полноценный бренд-бук — от 1 до 3 месяцев. Мы
          всегда согласовываем четкие этапы и сроки перед началом проекта.
        </p>
      ),
    },
    {
      title: "Что входит в разработку фирменного дизайна?",
      description: (
        <p className="text-[18px]">
          Базовый пакет включает логотип, цветовую палитру, шрифты и правила
          использования. Расширенный — дизайн полиграфии, шаблоны для соцсетей,
          гайдлайн по айдентике и другие носители по запросу.
        </p>
      ),
    },
    {
      title: "Можно ли разработать дизайн для отдельного продукта?",
      description: (
        <p className="text-[18px] ">
          Да, мы часто создаем суб-бренды или специальные коллекции в рамках
          основной айдентики. Это помогает выделить продукт.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Разработка фирменного стиля компании | Цена создания фирменного стиля организации"
        description="Создаём целостную визуальную систему, которая передаёт ценности бренда и делает его узнаваемым. От логотипа до цветовой палитры и типографики — ваш стиль будет продуман до мелочей и работать на имидж."
        canonical="https://digitaldevils.by/design-style"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="Разработка фирменного стиля" />
        <StandardMarginsLayout
          styles={`bg-white text-black`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/design-style_6.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Фирменный стиль, который работает на ваши продажи
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Фирменный стиль — это не просто логотип и цветовая палитра, а
                  целостная система визуальной коммуникации.
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/design-style_small_6.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Мы{" "}
                  <a href="/design" className="text-blue_main">
                    создаем дизайн
                  </a>
                  , который делает ваш бренд узнаваемым, усиливает доверие
                  клиентов и выделяет вас среди конкурентов. Это инвестиция,
                  которая окупается за счет роста лояльности и увеличения
                  продаж.
                </p>
              </div>
            </div>
          }
        />

        <WideBlockWithImage
          title="Мы знаем, как сделать так, чтобы было эффективно"
          text_1="Каждый бренд уникален — мы не работаем по шаблонам. При разработке фирменного дизайна мы начинаем с глубокого анализа вашей ниши, целевой аудитории и конкурентов, чтобы создать то, что точно отражает ДНК компании."
          text_2="Мы учитываем не только эстетику, но и практичность. Все элементы адаптируются под разные носители — от визиток до рекламных баннеров, сохраняя четкость и узнаваемость в любом формате."
          bg=""
        />

        <StandardMarginsLayout
          styles={`bg-white text-black pb-[50px] md:pb-[60px]`}
          children={
            <div className="flex flex-col">
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Наши работы
              </h2>
              <p className="xl:hidden block mb-[20px] text-[18px] font-medium">
                Каждый проект — это индивидуальное решение, созданное под
                конкретные бизнес-задачи. Вот несколько примеров, как мы помогли
                брендам обрести запоминающийся дизайн.
              </p>
              <div className="flex flex-col xl:flex-row w-full justify-between mb-[20px] xl:mb-[40px]">
                <div className="me-0 xl:me-[20px]  xl:mb-0 mb-[20px] w-full xl:max-w-[639px] rounded-[40px]">
                  <Image
                    src="/resources/design_style_5_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt="Наша работа 5"
                  />
                </div>
                <div className="flex flex-col w-full xl:max-w-[639px] rounded-[40px]">
                  <div className="xl:flex hidden w-full justify-end">
                    <p className=" xl:max-w-[526px] mb-[30px] text-[18px] font-medium">
                      Каждый проект — это индивидуальное решение, созданное под
                      конкретные бизнес-задачи. Вот несколько примеров, как мы
                      помогли брендам обрести запоминающийся дизайн.
                    </p>
                  </div>
                  <div className="md:block hidden w-full">
                    <Image
                      src="/resources/design_style_6_.png"
                      className="w-full"
                      width={639}
                      height={245}
                      alt="Наша работа 6"
                    />
                  </div>
                  <div className="md:hidden block w-full">
                    <Image
                      src="/resources/design_style_small_6_.png"
                      className="w-full"
                      width={639}
                      height={245}
                      alt="Наша работа 6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row w-full justify-between">
                <div className="md:block hidden xl:mb-0 mb-[20px] me-0 xl:me-[20px]  w-full xl:max-w-[639px] rounded-[40px]">
                  <Image
                    src="/resources/design_style_7_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt="Наша работа 7"
                  />
                </div>
                <div className="md:hidden block xl:mb-0 mb-[20px] me-0 xl:me-[20px]  w-full xl:max-w-[639px] rounded-[40px]">
                  <Image
                    src="/resources/design_style_small_7_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt="Наша работа 7"
                  />
                </div>
                <div className="md:block hidden xl:max-w-[639px]  rounded-[40px] w-full">
                  <Image
                    src="/resources/design_style_8_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt="Наша работа 8"
                  />
                </div>
                <div className="md:hidden block xl:max-w-[639px]  rounded-[40px] w-full">
                  <Image
                    src="/resources/design_small_5.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt="Наша работа 8"
                  />
                </div>
              </div>
            </div>
          }
        />

        <BlockWithListOfCurrentTechnologies
          isOnlyBottomPadding={true}
          title="Мы используем современные решения"
          list={[
            "Адаптируем дизайн под digital и оффлайн ",
            "Создаем гибкие системы айдентики ",
            "Работаем с психологией цвета и формы ",
            "Разрабатываем удобные гайдлайны ",
            "Тестируем решения перед внедрением ",
            "Гарантируем юридическую чистоту ",
          ]}
          isDark={false}
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
                      Стоимость зависит от сложности технического задания и
                      пожеланий заказчика
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] xl:border-t-[0] border-l-0 xl:border-l-[1px] border-black mt-[20px] xl:mt-[0] pt-[20px] xl:pt-[0] xl:ps-[20px] w-full xl:max-w-[660px]">
                  <p className="text-[16px] font-medium mb-[20px]">Наш опыт</p>
                  <div className="flex-col">
                    <p className="text-[32px] font-bold">
                      Фирменный стиль часто становится ключиком к более
                      качественному и продуктивному бизнесу
                    </p>
                    <div className="flex flex-row items-center mt-[20px] max-w-[249px]">
                      <div className="bg-gray-500 rounded-full size-[60px] me-[10px]">
                        <Image
                          src="/resources/design_logo_6.png"
                          width={60}
                          height={60}
                          alt="Елизавета"
                        />
                      </div>
                      <div>
                        <p className="text-[16px] font-bold">Елизавета </p>
                        <p className="text-[16px] font-med">
                          Графический дизайнер
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <DifferentTasksBlock
          bigTitle="Найдем подход к любой задаче"
          smallText="Не бывает универсальных решений — только индивидуальные стратегии."
          paragraphs={[
            {
              title: "Запуск нового бренда",
              text: "Разрабатываем дизайн с нуля: от нейминга и <a href='/design-logo' class='text-blue_main'>логотипа</a> до полного <a href='/brandbook' class='text-blue_main'>брендбука</a>. Учитываем позиционирование, ценности и особенности целевой аудитории, чтобы создать целостный образ.",
            },
            {
              title: "Ребрендинг",
              text: "Обновляем дизайн, сохраняя узнаваемость. Анализируем текущую айдентику при разработке элементов стиля, выявляем слабые места и бережно модернизируем каждый элемент, чтобы соответствовать новым целям бренда.",
            },
            {
              title: "Локальные проекты",
              text: "Создаем стиль для отдельных продуктов, акций или мероприятий, который гармонирует с основной айдентикой, но имеет свои отличительные черты.",
            },
          ]}
          isDark={true}
        />

        <HalfImageBlock
          title="Разработка уникального фирменного стиля: основные преимущества"
          smallTitle="Это мощный инструмент для построения сильного бренда"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Узнаваемый дизайн увеличивает доверие клиентов и снижает затраты
                на маркетинг. Он работает круглосуточно, создавая единое
                впечатление на всех точках контакта.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText="Связаться с нами"
          isOnlyBottomPadding={false}
          image={"/resources/design-style_5.png"}
          smallImage={"/resources/design-style_small_5.png"}
          widthImage={639}
          heightImage={300}
        />

        <StandardMarginsLayout
          styles="pb-[50px] md:pb-[60px] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Что такое фирменный стиль
              </h2>
              <div className="flex flex-col lg:flex-row justify-between lg:gap-[20px]">
                <div className="flex flex-col gap-[10px] lg:max-w-[640px] lg:pb-0 pb-[30px] lg:border-none border-b-[1px] border-black">
                  <p className="text-[22px] font-bold">
                    Это особый визуальный язык, с помощью которого компания
                    выражает свою индивидуальность и доносит свою философию до
                    клиентов, партнеров, сотрудников и рынка в целом.
                  </p>
                  <p className="text-[16px] font-medium">
                    Это не просто логотип, набор цветов или определенные шрифты;
                    это полноценная система узнаваемых элементов, которые делают
                    компанию особенной, выделяя ее на фоне конкурентов.
                    Фирменный стиль при разработке аккумулирует мировоззрение
                    компании, ее ценности, миссию, эмоции и характер, в то время
                    как каждый элемент – от визитки до оформления офиса – служит
                    инструментом формирования нужного образа в глазах аудитории.
                  </p>
                </div>
                <div className="lg:max-w-[640px] lg:pt-0 pt-[30px]">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[16px] font-medium">
                        Можно сказать, это оболочка, которая формирует первое
                        впечатление и остается в памяти, заставляя клиентов
                        вспоминать и возвращаться к бренду. Это набор уникальных
                        визуальных и смысловых кодов, которые помогают
                        устанавливать эмоциональные связи с вашей аудиторией.
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[16px] font-medium">
                        Лаконичная айдентика вызывает доверие, а грамотное
                        оформление коммуникационных материалов обеспечивает
                        целостность и узнаваемость на всех площадках, будь то
                        онлайн или офлайн-пространство. Сформированный фирменный
                        стиль – фундамент для долгосрочного успеха и уверенного
                        позиционирования компании на рынке.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <BlockWithImageAndDropDownMenu
          isDark={true}
          title="Почему стоит доверить разработку фирменного стиля агентству Digital Devils"
          borderColor="#ffffff"
          margin="md:py-[60px] py-[50px]"
          data={[
            {
              title: "Фирменный стиль",
              description: [
                "Создание фирменного стиля – задача, требующая глубокого понимания бизнеса, его целевой аудитории и рынка. В Digital Devils мы не ограничиваемся созданием поверхности, а ищем и раскрываем суть вашего бизнеса, следуя миссии агентства – помогать компаниям находить свое уникальное место в мире и говорить с клиентами на одном языке.",
              ],
            },
            {
              title: "Анализ",
              description: [
                "Мы не предлагаем шаблонные решения. Каждый проект начинается с внимательного анализа: мы изучаем вашу специфику, ваши ценности, глубже знакомимся со сферой деятельности, анализируем конкурентов и целевую аудиторию. Это позволяет нам создавать айдентику, которая не только визуально привлекательна, но и наполнена смыслом, отражает индивидуальность и резонирует с ожиданиями клиентов.",
              ],
            },
            {
              title: "Профессиональная команда",
              description: [
                "В агентстве Digital Devils работают профессиональные дизайнеры, арт-директоры и бренд-эксперты, которые постоянно отслеживают тренды и успешно адаптируют их под задачи каждого проекта. Мы работаем в тесном диалоге, учитывая ваши пожелания, общие цели и стратегию развития, поэтому итоговый проект будет органично вписываться во все аспекты вашего бизнеса.",
              ],
            },
            {
              title: "Индивидуальный подход",
              description: [
                "Наш подход – гибкость, креативность, технологичность и ответственность на каждом этапе. Мы берем на себя все процессы: от разработки фирменного логотипа, выбора айдентики, создания брендбука, до адаптации стиля под различные медиа, упаковку, маркетинговые материалы, мерч или оформление цифровых платформ. Вам не потребуется искать подрядчиков для разных задач – Digital Devils реализует полный комплекс работ, контролируя качество реализации в каждом элементе.",
              ],
            },
            {
              title: "Детали",
              description: [
                "Наша команда уделяет особое внимание деталям, ведь именно в них заключен характер вашего бизнеса. Каждый проект проходит несколько этапов тестирования и согласований, чтобы итоговый результат работал на ваши цели: привлекал клиентов, выделял бренд среди конкурентов, укреплял образ на рынке и вызывал отклик у нужной аудитории. Мы дорожим репутацией и строим с клиентами долгосрочные, честные отношения – для нас важно быть не только исполнителями, но и надежными партнерами в развитии вашего бренда.",
              ],
            },
            {
              title: "Помогаем расти вашему бизнесу",
              description: [
                "Digital Devils делает создание фирменного стиля организации, который остается актуальным, гибким и узнаваемым, помогая бизнесу расти и достигать новых высот. Если вы хотите, чтобы ваш бренд был сильным, привлекательным и запоминающимся – мы готовы начать путь к вашим большим свершениям вместе с вами.",
              ],
            },
          ]}
          firstBlock={
            <>
              <div className="w-full md:flex hidden">
                <Image
                  src={"/resources/design-style_9.png"}
                  width={527}
                  height={300}
                  className="w-full"
                  alt="Подготовка к SEO аналитике сайта: ключевые аспекты"
                />
              </div>
              <div className="w-full md:hidden flex">
                <Image
                  src={"/resources/design-style_small_9.png"}
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
          styles="py-[50px] md:py-[60px] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Нужна ли разработка фирменного стиля каждому бизнесу
              </h2>
              <div className="flex flex-col lg:flex-row justify-between lg:gap-[20px]">
                <div className="flex flex-col gap-[10px] lg:max-w-[640px] lg:pb-0 pb-[30px] lg:border-none border-b-[1px] border-black">
                  <p className="text-[22px] font-bold">
                    В современном мире разработка фирменного стиля необходим
                    любому бизнесу, независимо от того, насколько он крупный и
                    какую сферу занимает.
                  </p>
                  <p className="text-[16px] font-medium">
                    Даже если вы только начинаете путь или планируете вывести на
                    рынок новый продукт, проработанная айдентика придает проекту
                    уверенность и солидность. Она помогает четко сформулировать,
                    кто вы, чем выделяетесь, и почему вы заслуживаете внимания.
                    Бизнес без фирменного стиля рискует потеряться среди
                    конкурентов и оказаться «одним из многих», а не «тем самым»,
                    которого захотят выбрать и запомнить.
                  </p>
                </div>
                <div className="lg:max-w-[640px] lg:pt-0 pt-[30px]">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[16px] font-medium">
                        Разработка фирменного дизайна облегчает вашу
                        коммуникацию с клиентом, ведь визуальное оформление
                        быстро и наглядно транслирует основные ценности,
                        обещания, отношения к клиентскому опыту.
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[16px] font-medium">
                        Унифицированный брендбук при разработке помогает
                        поддерживать единый стиль даже при расширении, запуске
                        рекламных кампаний или выходе на новые рынки. Ускоряется
                        согласование материалов, упрощается обучение новых
                        сотрудников, а главное – сам бренд начинает жить
                        собственной жизнью, становится источником вдохновения и
                        гордости для всей команды. Сильная айдентика – это не
                        расходы, а вложение в репутацию, лояльность и
                        конкурентные преимущества.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <MainBlockTenth data={data} isOnlyBottomPadding={true} />
      </BasicLayout>
    </>
  );
};

export default marketplace;

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
  { name: "Графический дизайн", link: "/graph-design" },
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
    name: "Графический дизайн",
    item: "https://digitaldevils.by/graph-design",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени занимает разработка логотипа для сайта?",
      description: (
        <p className="text-[18px] ">
          Стандартный срок — 1-2 недели: от брифинга и концепции до финальных
          правок. Для сложных проектов (например, полный фирменный стиль) может
          потребоваться до месяца. Мы всегда согласовываем сроки на старте и
          соблюдаем дедлайны.
        </p>
      ),
    },
    {
      title: "Можно ли сделать дизайн для сайта, если у нас нет четкого ТЗ?",
      description: (
        <p className="text-[18px]">
          Да! Мы поможем сформулировать задачу: проведем аудит ниши, изучим
          конкурентов и предложим несколько концепций. Главное — понимание, кто
          ваша ЦА и какие эмоции должен вызывать бренд.
        </p>
      ),
    },
    {
      title: "Даете ли вы исходники после завершения разработки?",
      description: (
        <p className="text-[18px] ">
          Конечно. Вы получаете все файлы в нужных форматах (AI, EPS, PNG и др.)
          и полные права на использование. При необходимости подготовим
          руководство по применению стиля для сайта.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Услуги по графическому дизайну | Заказать разработку графического дизайна под ключ"
        description="Разрабатываем яркие, запоминающиеся визуальные материалы: от презентаций до рекламной графики. Чёткий стиль, грамотная подача и внимание к деталям делают ваш бренд заметным и профессиональным."
        canonical="https://digitaldevils.by/graph-design"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="Графический дизайн" />
        <HalfImageBlock
          title="Зачем вашему бизнесу графический дизайн?"
          smallTitle="Графический дизайн — это визуальный язык, который говорит за ваш бренд"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Первое впечатление формируется за доли секунды, и именно дизайн
                решает, останется ли клиент с вами или уйдет к конкурентам.
              </p>
              <p className="font-medium text-[18px] mb-[20px]">
                Качественная графика повышает доверие, усиливает узнаваемость и
                увеличивает конверсию. Она делает сложную информацию простой, а
                скучные данные — привлекательными. В конечном итоге,
                профессиональный дизайн — это не просто "красивая картинка", а
                мощный инструмент роста продаж.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText=""
          image={"/resources/graph-design_5.png"}
          smallImage={"/resources/graph-design_small_5.png"}
          widthImage={639}
          heightImage={300}
        />

        <DifferentTasksBlock
          bigTitle="Разные задачи - разный подход"
          smallText="Мы не работаем по шаблонам — только индивидуальные решения. "
          paragraphs={[
            {
              title: "Фирменный стиль и айдентика",
              text: "<a href='/design-logo' class='text-blue_main'>Создаем логотипы</a>, цветовые палитры и гайдлайны, которые отражают характер вашего бизнеса. Каждый элемент продуман до мелочей: от шрифтов до паттернов. Это основа, на которой строится весь визуальный образ компании.",
            },
            {
              title: "Рекламные материалы",
              text: "Разрабатываем дизайн для соцсетей, баннеров, печатной продукции и презентаций. Наши работы не просто привлекают внимание — они побуждают к действию, увеличивая вовлеченность и продажи.",
            },
            {
              title: "Упаковка и мерч",
              text: "Делаем продукт заметным на полке и запоминающимся в руках клиента. Учитываем тренды рынка, особенности ЦА и практичность использования.",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[642px]"
          isOnlyBottomPadding={true}
        />

        <StandardMarginsLayout
          styles={`bg-white text-black pb-[50px] md:pb-[60px]`}
          children={
            <div className="flex flex-col">
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Наши работы
              </h2>
              <p className="xl:hidden block mb-[20px] text-[18px] font-medium">
                Каждый проект — это уникальная история, воплощенная в визуальных
                образах. Вот несколько примеров, как мы помогаем компаниям
                говорить на языке дизайна. 
              </p>
              <div className="flex flex-col xl:flex-row w-full justify-between mb-[20px] xl:mb-[40px]">
                <div className="md:block hidden me-0 xl:me-[20px]  xl:mb-0 mb-[20px] w-full xl:max-w-[639px] rounded-[40px]">
                  <Image
                    src="/resources/graph_design_5_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt=""
                  />
                </div>
                <div className="md:hidden block me-0 xl:me-[20px]  xl:mb-0 mb-[20px] w-full xl:max-w-[639px] rounded-[40px]">
                  <Image
                    src="/resources/graph_design_small_5_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt=""
                  />
                </div>
                <div className="flex flex-col w-full xl:max-w-[639px] rounded-[40px]">
                  <div className="xl:flex hidden w-full justify-end">
                    <p className=" xl:max-w-[526px] mb-[30px] text-[18px] font-medium">
                      Каждый проект — это уникальная история, воплощенная в
                      визуальных образах. Вот несколько примеров, как мы
                      помогаем компаниям говорить на языке дизайна. 
                    </p>
                  </div>
                  <div className="md:block hidden w-full">
                    <Image
                      src="/resources/design_style_6_.png"
                      className="w-full"
                      width={639}
                      height={245}
                      alt=""
                    />
                  </div>
                  <div className="md:hidden block w-full">
                    <Image
                      src="/resources/design_style_small_6_.png"
                      className="w-full"
                      width={639}
                      height={245}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row w-full justify-between">
                <div className="md:block hidden xl:mb-0 mb-[20px] me-0 xl:me-[20px]  w-full xl:max-w-[639px] rounded-[40px]">
                  <Image
                    src="/resources/graph_design_6_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt=""
                  />
                </div>
                <div className="md:hidden block xl:mb-0 mb-[20px] me-0 xl:me-[20px]  w-full xl:max-w-[639px] rounded-[40px]">
                  <Image
                    src="/resources/graph_design_small_6_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt=""
                  />
                </div>
                <div className="md:block hidden xl:max-w-[639px]  rounded-[40px] w-full">
                  <Image
                    src="/resources/graph_design_7_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt=""
                  />
                </div>
                <div className="md:hidden block xl:max-w-[639px]  rounded-[40px] w-full">
                  <Image
                    src="/resources/graph_design_small_7_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt=""
                  />
                </div>
              </div>
            </div>
          }
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
                      Стоимость зависит от особенностей технического задания и
                      пожеланий заказчика.
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] xl:border-t-[0] border-l-0 xl:border-l-[1px] border-black mt-[20px] xl:mt-[0] pt-[20px] xl:pt-[0] xl:ps-[20px] w-full xl:max-w-[660px]">
                  <p className="text-[16px] font-medium mb-[20px]">Наш опыт</p>
                  <div className="flex-col">
                    <p className="text-[32px] font-bold">
                      Графический дизайн - это то, что выводит ваш бизнес на
                      новый уровень восприятия целевой аудиторией.
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
                        <p className="text-[16px] font-bold">Екатерина </p>
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

        <StandardMarginsLayout
          styles="pb-[50px] md:pb-[60px] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Что такое графический дизайн для бизнеса?
              </h2>
              <div className="flex flex-col lg:flex-row justify-between lg:gap-[20px]">
                <div className="lg:max-w-[640px] lg:pb-0 pb-[30px] lg:border-none border-b-[1px] border-black">
                  <p className="text-[22px] font-bold">
                    Это не просто разработка красивых картинок, а стратегический
                    инструмент визуальной коммуникации. Он формирует первое
                    впечатление о компании, передает её ценности и помогает
                    выстроить доверительные отношения с целевой аудиторией.
                  </p>
                </div>
                <div className="lg:max-w-[640px] lg:pt-0 pt-[30px]">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[18px] font-medium">
                        Каждый элемент — от логотипа до цветовой палитры —
                        работает на узнаваемость бренда и повышение его
                        капитализации.
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[18px] font-medium">
                        В современном мире, где потребитель ежедневно
                        сталкивается с огромным потоком информации, качественный
                        дизайн становится критически важным для выделения среди
                        конкурентов. Он превращает абстрактные бизнес-идеи в
                        конкретные визуальные образы, которые легко
                        воспринимаются и запоминаются. При этом хороший дизайн
                        всегда функционален — он не просто украшает, но и решает
                        конкретные маркетинговые задачи.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <HalfImageBlock
          title="Графический дизайн от Digital Devils: основные преимущества "
          smallTitle="Мы создаем дизайн, который работает на ваш бизнес"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Наша команда сочетает креатив с аналитикой: мы не просто рисуем,
                а решаем конкретные маркетинговые задачи. Используем современные
                тренды, но не следуем им слепо — главное, чтобы дизайн
                соответствовал вашему бренду. Быстро, качественно и с гарантией
                результата.
              </p>
            </>
          }
          isOnlyBottomPadding={false}
          isDark={true}
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/graph-design_6.png"}
          smallImage={"/resources/graph-design_small_6.png"}
          widthImage={639}
          heightImage={300}
        />

        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Из чего складывается стоимость создания дизайна?
              </h2>
              <p className="text-[18px] mb-[30px] lg:text-[22px] font-medium  max-w-[866px]">
                Цена зависит от сложности проекта: разработка логотипа с нуля
                требует больше времени, чем адаптация готовых макетов. Влияет и
                количество правок, и необходимость создания дополнительных
                элементов (например, анимированной версии лого). 
              </p>
              <div className="border-t-[1px] border-black  pt-[30px]">
                <p className="text-[16px] font-medium">Что еще стоит учесть?</p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  Также учитывается срочность и объем работ: {" "}
                  <a href="/brandbook" className="text-blue_main">
                    комплексный брендбук
                  </a>{" "}
                  будет стоить дороже отдельного баннера. Мы всегда предлагаем
                  несколько вариантов сотрудничества — от разовых задач до
                  полного сопровождения. 
                </p>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles="py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Почему стоит заказать разработку графический дизайн для сайта
                именно у Digital Devils?
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-[20px]">
                <div className="lg:max-w-[640px] flex flex-col">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Digital Devils — это команда профессионалов, которая
                      рассматривает дизайн для сайта как часть комплексной
                      маркетинговой стратегии. Мы не просто создаём визуальные
                      элементы, а разрабатываем систему коммуникации, которая
                      работает на достижение ваших бизнес-целей. Наш подход
                      сочетает креативное мышление с глубоким анализом рынка и
                      поведения целевой аудитории.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Одним из ключевых преимуществ работы с нами является
                      индивидуальный подход к каждому проекту. Мы не используем
                      шаблонные решения, а создаём уникальный образ для сайта,
                      который точно отражает специфику вашего бизнеса и выделяет
                      вас среди конкурентов. Наши специалисты обладают
                      экспертизой в различных отраслях, что позволяет нам
                      говорить на языке вашей целевой аудитории.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col min-w-[40%] lg:pt-0">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Техническая сторона работы в Digital Devils соответствует
                      самым высоким стандартам. Мы используем профессиональное
                      программное обеспечение для разработки, следим за
                      актуальными трендами, строго соблюдаем технические
                      требования к различным форматам. При этом мы всегда
                      находим баланс между креативностью и функциональностью,
                      создавая проект, который не только выглядит стильно, но и
                      решает поставленные задачи для сайта.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Сотрудничество с Digital Devils — это гарантия качества,
                      соблюдения сроков и прозрачности всех этапов работы. Мы
                      предоставляем полный пакет исходных файлов и детальные
                      рекомендации по использованию разработанных материалов.
                      Наша цель — не просто выполнить заказ, а стать вашим
                      долгосрочным партнёром в развитии визуального образа.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles="md:pt-[60px] pt-[50px]"
          children={
            <>
              <div>
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                  Виды графического дизайна для сайта
                </h2>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[40px] gap-[10px]">
                  <p className="text-[16px] font-medium">
                    Фирменный стиль и брендинг для сайта составляют основу
                    визуальной идентичности компании. Разработка логотипа, выбор
                    корпоративных цветов и шрифтов, создание гайдлайнов — всё
                    это формирует целостный образ бренда, который должен быть
                    узнаваемым и последовательным во всех точках контакта с
                    клиентом. Особое значение имеет адаптивность стиля под
                    разные носители — от визиток до наружной рекламы.
                  </p>
                  <p className="text-[16px] font-medium">
                    Разработка графического дизайна рекламных материалов требует
                    особого подхода, так как здесь важно не только привлечь
                    внимание, но и побудить к действию. Баннеры для соцсетей,
                    печатная продукция, презентации — каждый формат имеет свои
                    особенности и технические требования. Эффективная реклама
                    всегда учитывает психологию восприятия и поведенческие
                    факторы целевой аудитории.
                  </p>
                  <p className="text-[16px] font-medium">
                    Упаковка и мерч — это особые направления, где графический
                    дизайн становится непосредственной частью продукта. Хорошая
                    упаковка не только защищает товар, но и рассказывает его
                    историю, создаёт эмоциональную связь с потребителем.
                    Корпоративный мерч, в свою очередь, превращается в
                    инструмент продвижения, работающий на узнаваемость бренда в
                    повседневной жизни клиентов.
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

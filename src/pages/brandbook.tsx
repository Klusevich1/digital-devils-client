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
  { name: "Разработка брендбука", link: "/brandbook" },
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
    name: "Разработка брендбука",
    item: "https://digitaldevils.by/brandbook",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени занимает разработка брендбука?",
      description: (
        <p className="text-[18px] ">
          Сроки разработки брендбука компании зависят от сложности: минимальный
          пакет (лого + базовые элементы) — 2-3 недели, полный — от 1 до 2
          месяцев. Мы работаем поэтапно: анализ, концепция, наполнение,
          тестирование.
        </p>
      ),
    },
    {
      title: "Что входит в стандартный файл?",
      description: (
        <p className="text-[18px]">
          База — логотип, палитра, шрифты, правила верстки для сайта и проч.
          Расширенная версия включает дизайн упаковки, шаблоны для соцсетей,
          тональность коммуникации и примеры применения.
        </p>
      ),
    },
    {
      title: "Можно ли изменить файл после создания?",
      description: (
        <p className="text-[18px] ">
          Да, мы предоставляем исходники и делаем гибкие системы.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Разработка брендбука компании под ключ | Цена создания брендбука"
        description="Формируем подробный брендбук с правилами использования логотипа, цветовой гаммы, шрифтов и визуальных элементов. Это незаменимый инструмент для построения сильного, стабильного и узнаваемого бренда."
        canonical="https://digitaldevils.by/brandbook"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="Разработка брендбука" />
        <StandardMarginsLayout
          styles={`bg-white text-black pb-[50px] md:pb-[60px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[527px]">
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/brandbook_small_5.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="mt-[20px] lg:mt-0 text-[18px] lg:text-[22px] font-medium">
                  Брендбук — это не просто набор правил, а ДНК вашего бренда и
                  сайта, зафиксированная в визуальных и текстовых стандартах. Он
                  задает единый стиль коммуникации, делает бренд узнаваемым и
                  укрепляет доверие клиентов.
                </p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] font-medium">
                  В Digital Devils мы делаем разработку брендбука, которая
                  работает на бизнес. Наши решения сочетают креатив с аналитикой
                  — мы разрабатываем не просто красивые гайдлайны, а
                  стратегические инструменты для роста продаж.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[753px] min-w-[400px]">
                <Image
                  src={"/resources/brandbook_5.png"}
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  className={"w-full"}
                  width={359}
                  height={360}
                />
              </div>
            </div>
          }
        />
        <BlockWithListOfCurrentTechnologies
          isOnlyBottomPadding={true}
          title="Мы используем актуальные технологии "
          list={[
            "3D-визуализация — показываем, как элементы бренда будут выглядеть в реальном мире и на сайте",
            "Динамические шаблоны — создаем адаптивные макеты для разных носителей",
            "Интерактивные PDF файлы — удобные для использования и обновления",
            "Цифровые цветовые системы — точные палитры для digital и печати",
            "Генераторы логотипов — онлайн-инструменты для быстрой адаптации",
            "AI-анализ восприятия — тестируем, как аудитория реагирует на элементы бренда",
          ]}
          isDark={false}
        />
        <HalfImageBlock
          title="Зачем вашей компании разработка брендбука? "
          smallTitle="Он превращает разрозненные элементы в стройную систему"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Он исключает хаос в коммуникации — все материалы стиля выглядят
                единообразно, от визитки до сайта. Он экономит бюджет, сокращая
                время на согласование дизайна. И главное — делает бренд
                запоминающимся, повышая лояльность клиентов, в том числе
                посетителей сайта.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/brandbook_6.png"}
          smallImage={"/resources/brandbook_small_6.png"}
          widthImage={639}
          heightImage={300}
        />

        <DifferentTasksBlock
          bigTitle="Найдем подход к любой задаче"
          smallText="Нет шаблонов — только индивидуальные решения и стили."
          paragraphs={[
            {
              title: "Создание брендбука с нуля",
              text: "<a href='/design-logo' class='text-blue_main'>Разработка логотипа</a>, цветов, шрифтов и правил их использования. Учитываем специфику ниши и цели бизнеса.",
            },
            {
              title: "Ребрендинг и обновление гайдлайнов",
              text: "Анализируем текущий стиль, сохраняем узнаваемость, но делаем его современным и удобным для применения.",
            },
            {
              title: "Локализация",
              text: "Адаптируем его для новых рынков или продуктов, соблюдая единство бренда.",
            },
          ]}
          isDark={true}
        />

        <StandardMarginsLayout
          styles={`bg-white text-black py-[50px] md:py-[60px]`}
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
                      Стоимость зависит от количества дополнительных услуг и
                      элементов фирменного стиля.
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] xl:border-t-[0] border-l-0 xl:border-l-[1px] border-black mt-[20px] xl:mt-[0] pt-[20px] xl:pt-[0] xl:ps-[20px] w-full xl:max-w-[660px]">
                  <p className="text-[16px] font-medium mb-[20px]">Наш опыт</p>
                  <div className="flex-col">
                    <p className="text-[32px] font-bold">
                      Брендбук - это то, что делает ваш бизнес современным и
                      стильным.
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
          styles={`bg-white text-black`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/brandbook_5_.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Разработка брендбука: ваш путь к большей эффективности
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Грамотно разработанный брендбук — это инвестиция в
                  узнаваемость и доверие. Он сокращает время на производство
                  контента и минимизирует ошибки в коммуникации.
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/brandbook_5_small_.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  С Digital Devils вы получаете не просто документ, а рабочий
                  инструмент. Мы делаем их понятными для дизайнеров,
                  маркетологов и даже новичков в команде.
                </p>
                <a
                  className="flex lg:w-fit w-full mt-[20px]"
                  href="/application"
                  rel="nofollow"
                >
                  <div
                    className={`font-medium text-[18px] lg:w-fit w-full py-[12.5px] px-[20px] text-center rounded-full text-white bg-blue_main`}
                  >
                    Обсудить проект
                  </div>
                </a>
              </div>
            </div>
          }
        />

        <WideBlockWithImage
          title="Инвестиция в будущее"
          text_1="Разработка хорошего брендбука — это не расходы, а инвестиция в развитие бизнеса, в том числе через сайт. Он помогает строить сильный, последовательный бренд, который покупатели запоминают и которому доверяют. С ним вы тратите меньше времени на рутину, избегаете ошибок в коммуникации и в итоге получаете более предсказуемый результат от маркетинга."
          text_2='В Digital Devils мы знаем, как превратить фирменный стиль в рабочий инструмент, а не в "пыльный" документ на полке. Наши решения сочетают креативность с функциональностью, красоту — с практичностью, а инновации — с проверенными методиками. Если вы хотите, чтобы ваш бренд  и его сайт говорил с аудиторией единым голосом, — давайте обсудим ваш проект.'
          bg=""
        />

        <StandardMarginsLayout
          styles="py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Почему стоит доверить разработку брендбука и фирменного стиля
                агентству Digital Devils?
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-[20px]">
                <div className="lg:max-w-[640px] flex flex-col">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      <a href="/design-style" className="text-blue_main">Разработка фирменного стиля</a> для сайта — это сложный
                      процесс, который требует не только дизайнерских навыков,
                      но и глубокого понимания маркетинга, психологии восприятия
                      и бизнес-стратегий. В Digital Devils мы подходим к этой
                      задаче комплексно, сочетая креатив с аналитикой. Наша
                      команда начинает с изучения вашего бизнеса: мы анализируем
                      целевую аудиторию, конкурентов и позиционирование
                      компании, чтобы создать то, что будет работать именно на
                      ваши цели.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col min-w-[40%] lg:pt-0">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Одно из ключевых преимуществ работы с нами —
                      индивидуальный подход. Мы не используем шаблонные решения,
                      а делаем разработку брендбуков, которые отражают
                      уникальность каждого покупателя. Например, для
                      технологического стартапа мы сделаем упор на современную,
                      "цифровую" эстетику, а для семейного ресторана — на
                      теплые, welcoming-тона. При этом мы всегда учитываем
                      практическую сторону: наши брендбуки легко применять в
                      повседневной работе, а не просто хранить в красивом
                      PDF-файле.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Еще один важный аспект — адаптивность. Мы создаем
                      брендбуки, которые легко масштабируются под разные задачи.
                      Если вам нужно запустить новую линейку продуктов или выйти
                      на международный рынок, мы разработаем дополнения к
                      основному гайдлайну, сохраняя единство. Кроме того, мы
                      предоставляем полный пакет исходников и консультируем вашу
                      команду по всем вопросам применения стандартов.
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
              <div className={`flex flex-col gap-[30px]`}>
                <div>
                  <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                    Основа сильного и узнаваемого бренда 
                  </h2>
                  <p className={`text-[22px] font-medium max-w-[866px]`}>
                    Брендбук — это стратегический документ, который определяет
                    все аспекты визуальной и коммуникационной идентичности
                    компании. Он включает в себя не только логотип, цвета и
                    шрифты, но и правила их использования, принципы верстки,
                    тональность общения с аудиторией и даже примеры применения
                    стиля на разных носителях. По сути, это "библия", которая
                    обеспечивает единообразие во всех точках контакта — от сайта
                    и соцсетей до упаковки и рекламных материалов. 
                  </p>
                </div>
                <div
                  className={`grid lg:grid-cols-3 grid-cols-1 md:gap-[40px] gap-[20px] border-t-[1px] pt-[30px] border-t-black`}
                >
                  <div>
                    <span className="text-[16px] font-medium">
                      Основная цель — создать четкие стандарты, которые помогут
                      избежать хаоса в коммуникации. Когда каждый сотрудник,
                      дизайнер или партнер следует единым правилам, компания
                      становится последовательной и узнаваемой. Это особенно
                      важно для компаний, которые масштабируются, выходят на
                      новые рынки или работают с несколькими подрядчиками.
                      Разработка такого документа исключает ситуацию, когда
                      логотип "прыгает" по размеру, цвета меняются от баннера к
                      баннеру, а тексты звучат так, будто их писали разные
                      люди. 
                    </span>
                  </div>
                  <div>
                    <span className="text-[16px] font-medium">
                      Еще одна важная задача — экономия времени и ресурсов.
                      Когда есть четкие гайдлайны, не нужно каждый раз
                      изобретать велосипед. Дизайнеры тратят меньше часов на
                      создание материалов, маркетологи быстрее согласовывают
                      контент, а новые сотрудники легче вникают в корпоративные
                      стандарты. В долгосрочной перспективе это сокращает
                      издержки и ускоряет рабочие процессы. 
                    </span>
                  </div>
                  <div>
                    <span className="text-[16px] font-medium">
                      Но это не только про правила. Он также помогает донести
                      ценности компании до аудитории. Через визуальные элементы
                      и коммуникация компания рассказывает свою историю,
                      формирует эмоциональную связь и выделяется среди
                      конкурентов. Например, минимализм с акцентами на
                      премиальных материалах сразу дает понять, что компания
                      ориентирована на люксовый сегмент, а яркие, энергичные
                      цвета и динамичная графика подчеркивают инновационность и
                      современность. 
                    </span>
                  </div>
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

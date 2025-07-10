import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React, { useEffect, useRef } from "react";
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
  { name: "Разработка логотипа", link: "/design-logo" },
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
    name: "Разработка логотипа",
    item: "https://digitaldevils.by/design-logo",
  },
];

const marketplace = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const data: DataItem[] = [
    {
      title: "Сколько времени занимает разработка стиля логотипа?",
      description: (
        <p>
          Обычно процесс занимает от 7 до 14 дней, в зависимости от сложности.
          Включает анализ, эскизы, доработки и финальное утверждение. Для
          ребрендинга сроки могут увеличиться.
        </p>
      ),
    },
    {
      title: "Можно ли получить несколько вариантов на выбор?",
      description: (
        <p>
          Да, мы предлагаем 2-3 принципиально разных концепции. После выбора
          основного направления дорабатываем его до идеала.
        </p>
      ),
    },
    {
      title: "Что входит в финальный файл?",
      description: (
        <p>
          Вы получаете лого для сайта во всех нужных форматах (PNG, JPG, SVG,
          PDF), фирменные цвета (Pantone, CMYK, RGB) и гайд по использованию.
          При необходимости — варианты для темного/светлого фона.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Разработка логотипа компании под ключ | Цена создания фирменного лого"
        description="Создаём современные логотипы, которые отражают идею бренда, выделяют на фоне конкурентов и формируют доверие с первого взгляда. Уникальный визуальный образ, который легко масштабируется и работает на узнаваемость компании."
        canonical="https://digitaldevils.by/design-logo"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="Разработка логотипа" />
        <StandardMarginsLayout
          styles="pb-[50px] md:pb-[60px] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Создадим логотип, который полностью отражает ваш бренд
              </h2>
              <div className="flex flex-col lg:flex-row justify-between md:gap-[20px] gap-[10px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-bold">
                    Ваш логотип — это лицо компании. Он должен не просто
                    привлекать внимание, но и мгновенно передавать ценности
                    бренда, его характер и уникальность. Мы делаем разработку
                    логотипов, которые запоминаются, вызывают доверие и работают
                    на узнаваемость.
                  </p>
                </div>
                <p className="text-[18px] font-medium  lg:max-w-[640px]">
                  Наши дизайнеры не рисуют «красивые картинки» — они
                  разрабатывают стратегические решения. Каждый элемент, от формы
                  до цвета, каждый дизайн продуман и обоснован. В результате вы
                  получаете не просто изображение, а мощный маркетинговый
                  инструмент с эксклюзивным дизайном.
                </p>
              </div>
            </>
          }
        />
        <StandardMarginsLayout
          styles={`bg-white text-black md:pb-[60px] pb-[50px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/design_logo_8.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Лого должен быть эффективным, а не только красивым
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Красота — второстепенна, если логотип не выполняет свою
                  главную функцию
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/design_logo_small_8.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Он должен быть узнаваемым даже в минимальном размере, хорошо
                  смотреться на любом носителе — от визитки до билборда — и
                  вызывать нужные ассоциации у целевой аудитории. Мы тестируем
                  каждый вариант в реальных условиях, чтобы убедиться, что он
                  работает.
                </p>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-black text-white`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Сколько стоит разработка логотипа
              </h2>
              <p className="text-[18px] mb-[30px] lg:text-[22px] font-medium  max-w-[866px]">
                Цена формируется исходя из сложности задачи, количества итераций
                и глубины аналитики. Чем больше исследований требуется (анализ
                конкурентов, ЦА, позиционирования), тем больше времени занимает
                процесс.
              </p>
              <div className="border-t-[1px] border-white pt-[30px]">
                <p className="text-[16px] font-medium">
                  Стоимость разработки лого
                </p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  Стоимость может варьироваться в зависимости от пакета:
                  разработка только изображение для сайта или полноценный бренд
                  дизайн (фирменные цвета, шрифты, правила использования). Мы
                  предлагаем гибкие условия — от эконом-решений до премиального
                  уровня.
                </p>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles={`bg-white text-black py-[50px] md:py-[60px]`}
          children={
            <div className="flex flex-col">
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Наши работы
              </h2>
              <p className="xl:hidden block mb-[20px] text-[18px] font-medium">
                Каждый лог — это история успеха бренда. Вот несколько примеров,
                как мы помогли компаниям обрести узнаваемый стиль.{" "}
              </p>
              <div className="flex flex-col xl:flex-row w-full justify-between mb-[20px] xl:mb-[40px]">
                <div className="bg-gray-500 me-0 xl:me-[20px]  xl:mb-0 mb-[20px] w-full xl:max-w-[639px] rounded-[40px]">
                  <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full duration-300 sm:rounded-[40px] object-cover"
                    preload="none"
                  >
                    <source src="/resources/our_works_1.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                <div className="flex flex-col w-full xl:max-w-[639px] rounded-[40px]">
                  <div className="xl:flex hidden w-full justify-end">
                    <p className=" xl:max-w-[526px] mb-[75px] text-[18px] font-medium">
                      Каждый лог — это история успеха бренда. Вот несколько
                      примеров, как мы помогли компаниям обрести узнаваемый
                      стиль.{" "}
                    </p>
                  </div>
                  <div className="md:block hidden w-full">
                    <Image
                      src="/resources/design_logo_10_.png"
                      className="w-full"
                      width={639}
                      height={245}
                      alt="Наша работа 10"
                    />
                  </div>
                  <div className="md:hidden block w-full">
                    <Image
                      src="/resources/design_logo_small_10_.png"
                      className="w-full"
                      width={639}
                      height={245}
                      alt="Наша работа 10"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row w-full justify-between">
                <div className="md:block hidden xl:mb-0 mb-[20px] me-0 xl:me-[20px]  w-full xl:max-w-[639px] rounded-[40px]">
                  <Image
                    src="/resources/design_logo_11_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt="Наша работа 11"
                  />
                </div>
                <div className="md:hidden block xl:mb-0 mb-[20px] me-0 xl:me-[20px]  w-full xl:max-w-[639px] rounded-[40px]">
                  <Image
                    src="/resources/design_logo_small_11_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt="Наша работа 11"
                  />
                </div>
                <div className="md:block hidden xl:max-w-[639px]  rounded-[40px] w-full">
                  <Image
                    src="/resources/design_logo_small_12_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt="Наша работа 12"
                  />
                </div>
                <div className="md:hidden block xl:max-w-[639px]  rounded-[40px] w-full">
                  <Image
                    src="/resources/design_logo_small_12_.png"
                    className="w-full"
                    width={639}
                    height={245}
                    alt="Наша работа 12"
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
                      Стоимость зависит от сложности выполнения дизайна и сроков
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] xl:border-t-[0] border-l-0 xl:border-l-[1px] border-black mt-[20px] xl:mt-[0] pt-[20px] xl:pt-[0] xl:ps-[20px] w-full xl:max-w-[660px]">
                  <p className="text-[16px] font-medium mb-[20px]">Наш опыт</p>
                  <div className="flex-col">
                    <p className="text-[32px] font-bold">
                      Разработка логотипа - это инвестиция, которая при
                      грамотном использовании может значительно повысить продажи
                    </p>
                    <div className="flex flex-row items-center mt-[20px] max-w-[249px]">
                      <div className="bg-gray-500 rounded-full size-[60px] me-[10px]">
                        <Image
                          src="/resources/design_logo_6.png"
                          width={60}
                          height={60}
                          alt="Екатерина"
                        />
                      </div>
                      <div>
                        <p className="text-[16px] font-bold">Екатерина</p>
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
        <HalfImageBlock
          title="Разработка фирменного логотипа от Digital Devils: основные преимущества "
          smallTitle="Мы создаем не просто значки, а работающие инструменты для продвижения и продаж"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Глубокий анализ — изучаем ваш рынок, конкурентов и целевую
                аудиторию перед тем, как приступить к дизайну. Уникальность —
                никаких шаблонов. Только оригинальные идеи, защищенные
                юридически.  Адаптивность — продумываем, как логотип будет
                выглядеть на всех носителях: от соцсетей и сайта до сувенирной
                продукции.
              </p>
            </>
          }
          isOnlyBottomPadding={false}
          isDark={true}
          buttonColor="#345CFF"
          buttonText="Связаться с нами"
          image={"/resources/design_logo_5.png"}
          smallImage={"/resources/design_logo_small_5.png"}
          widthImage={639}
          heightImage={300}
        />

        <DifferentTasksBlock
          bigTitle="Разные задачи - разный подход"
          smallText="Не бывает универсальных решений — все зависит от ваших целей и специфики бизнеса и нужного дизайна."
          paragraphs={[
            {
              title: "Ребрендинг",
              text: "Если ваш старый логотип для сайта устарел, мы сохраняем узнаваемость, но придаем ему современный вид. Анализируем текущий имидж и аккуратно его трансформируем.",
            },
            {
              title: "Запуск нового направления",
              text: "С нуля разрабатываем концепцию: от нейминга до визуального стиля. Учитываем позиционирование и эмоции, которые должен вызывать бизнес.",
            },
            {
              title: "Логотип для стартапа или для сайта",
              text: "Создаем лаконичные, но запоминающиеся решения, которые можно масштабировать по мере ростаи. Делаем упор на гибкость и адаптивность.",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[642px]"
          isOnlyBottomPadding={false}
        />

        <MainBlockTenth data={data} isOnlyBottomPadding={true} />
      </BasicLayout>
    </>
  );
};

export default marketplace;

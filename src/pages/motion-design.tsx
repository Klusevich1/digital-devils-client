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
  { name: "Motion-дизайн", link: "/motion-design" },
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
    name: "Motion-дизайн",
    item: "https://digitaldevils.by/motion-design",
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
      title: "Сколько времени занимает создание моушн дизайна?",
      description: (
        <p className="text-[18px] ">
          Сроки зависят от сложности: простой 2D на 15-30 секунд — от 5 дней,
          полноценный 3D-проект с детализированной графикой — от 3 недель. Мы
          всегда согласовываем этапы работы и дедлайны перед стартом проекта.
        </p>
      ),
    },
    {
      title: "Нужен ли нам готовый сценарий или вы можете его разработать?",
      description: (
        <p className="text-[18px]">
          Мы можем работать как с вашими идеями, так и создать сценарий с нуля.
          Наши копирайтеры продумают структуру, текст и визуальные акценты,
          чтобы ролик решал ваши бизнес-задачи.
        </p>
      ),
    },
    {
      title: "Можно ли использовать motion дизайн для email-рассылок?",
      description: (
        <p className="text-[18px] ">
          Да! GIF в письмах увеличивает открываемость на 20-30%. Мы создаем
          легкие и цепляющие анимированные элементы специально для
          email-маркетинга.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Моушн-дизайн в Минске | Цена создания motion-дизайна"
        description="Анимация и движение усиливают визуальную коммуникацию. Мы создаём motion-дизайн, который привлекает внимание, помогает донести идею и делает взаимодействие с брендом ярким и запоминающимся."
        canonical="https://digitaldevils.by/motion-design"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="Motion-дизайн" />
        <StandardMarginsLayout
          styles={`bg-white text-black md:pb-[60px] pb-[50px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Наше золотое правило: эффективность во всем
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Motion дизайн должен не просто удивлять, а решать
                  бизнес-задачи
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/motion_design_small_5.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Мы создаем анимированный контент, который увеличивает
                  конверсию, объясняет сложное простым языком и удерживает
                  внимание аудитории. Каждая секунда ролика продумана: от
                  создания сценария до финального рендера. Наш подход — это
                  симбиоз креатива и аналитики, где красивая картинка работает
                  на конкретные KPI.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/motion_design_5.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
            </div>
          }
        />

        <DifferentTasksBlock
          bigTitle="Найдем подход к любой задаче"
          smallText="Нет шаблонных решений — только индивидуальный подход."
          paragraphs={[
            {
              title: "Рекламные ролики",
              text: "Создаем динамические ролики для соцсетей и медийной рекламы, которые цепляют за 3 секунды. Продумываем сценарий, графику и звуковое сопровождение, чтобы ролики не просто смотрели, а запоминали.",
            },
            {
              title: "Анимированные презентации",
              text: "Превращаем скучные слайды в захватывающую историю. Используем инфографику, плавные переходы и эффекты, которые помогают донести суть даже сложного продукта.",
            },
            {
              title: "UI/UX",
              text: "Делаем интерфейсы интуитивно понятными с помощью микровзаимодействий. Создание кнопок, плавные переходы между экранами и другие элементы повышают удобство использования сайта или приложения.",
            },
          ]}
          isDark={true}
        />

        <StandardMarginsLayout
          styles={`bg-white text-black pt-[50px] md:pt-[60px]`}
          children={
            <div className="flex flex-col">
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Наши работы
              </h2>
              <p className="xl:hidden block mb-[20px] text-[18px] font-medium">
                Каждый проект — это уникальная история, которую мы рассказываем
                через движение. Мы работаем с разными форматами: от коротких
                рекламных роликов до сложных 3D моушн дизайнов. В нашем
                портфолио — работы для стартапов, крупных брендов и
                digital-продуктов. Здесь вы увидите, как оживают идеи и как
                motion дизайн увеличивает вовлеченность. 
              </p>
              <div className="flex flex-col md:flex-row w-full justify-between mb-[20px] xl:mb-[40px]">
                <div className="flex justify-between flex-col mb-[20px] md:mb-0 me-[20px] md:max-w-[49%] xl:max-w-[413px] w-full">
                  <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full duration-300 mb-[20px] xl:mb-[40px] max-h-[400px] rounded-[40px] object-cover"
                    preload="none"
                  >
                    <source src="/resources/our_works_2.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                  <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full duration-300 max-h-[400px] rounded-[40px] object-cover"
                    preload="none"
                  >
                    <source src="/resources/our_works_5.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
                <div className="hidden xl:flex w-full h-[840px] items-center max-w-[413px] mx-[20px]">
                  <div className="w-full h-[400px] overflow-hidden inline-flex rounded-[40px]">
                    <video
                      ref={videoRef}
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="w-full h-full duration-300 rounded-[40px] object-cover"
                      preload="none"
                    >
                      <source
                        src="/resources/our_works_3.mp4"
                        type="video/mp4"
                      />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                </div>
                <div className="flex justify-between flex-col md:max-w-[49%] xl:max-w-[413px] w-full">
                  <p className="hidden xl:block  text-[18px] font-medium">
                    Каждый проект — это уникальная история, которую мы
                    рассказываем через движение. Мы работаем с разными
                    форматами: от коротких рекламных роликов до сложных 3D моушн
                    дизайнов. В нашем портфолио — работы для стартапов, крупных
                    брендов и digital-продуктов. Здесь вы увидите, как оживают
                    идеи и как motion дизайн увеличивает вовлеченность.{" "}
                  </p>
                  <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full h-full duration-300 max-h-[400px] rounded-[40px] object-cover"
                    preload="none"
                  >
                    <source src="/resources/our_works_4.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                  <div className="xl:hidden mt-[20px] w-full h-[400px] overflow-hidden inline-flex rounded-[40px]">
                    <video
                      ref={videoRef}
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="w-full h-full duration-300 rounded-[40px] object-cover"
                      preload="none"
                    >
                      <source
                        src="/resources/our_works_3.mp4"
                        type="video/mp4"
                      />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
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
                      Стоимость создания motion дизайна зависит от сложности
                      технического задания и пожеланий заказчика.
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] xl:border-t-[0] border-l-0 xl:border-l-[1px] border-black mt-[20px] xl:mt-[0] pt-[20px] xl:pt-[0] xl:ps-[20px] w-full xl:max-w-[660px]">
                  <p className="text-[16px] font-medium mb-[20px]">Наш опыт</p>
                  <div className="flex-col">
                    <p className="text-[32px] font-bold">
                      Motion дизайн - это то, что делает ваш бизнес современным
                      и стильным.
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
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px] max-w-[1093px]">
                Создание motion дизайн: оживляем ваш бренд
              </h2>
              <div className="flex flex-col lg:flex-row justify-between lg:gap-[20px]">
                <div className="flex flex-col gap-[10px] lg:max-w-[640px] lg:pb-0 pb-[30px] lg:border-none border-b-[1px] border-black">
                  <p className="text-[22px] font-bold">
                    Это искусство оживления графики, превращающее статичные
                    элементы в динамичные истории. В отличие от обычной
                    анимации, он не просто добавляет движение, а создает
                    осмысленную визуальную коммуникацию.
                  </p>
                  <p className="text-[16px] font-medium">
                    Это могут быть плавные переходы между разделами сайта,
                    анимированные иконки, эффектные заставки или целые сюжетные
                    ролики. Современный motion сочетает принципы графии,
                    кинематографии и цифровых технологий, превращая сложные идеи
                    в простые и запоминающиеся визуальные образы. 
                  </p>
                </div>
                <div className="lg:max-w-[640px] lg:pt-0 pt-[30px]">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[16px] font-medium">
                        Главная особенность - функциональность. Каждое движение
                        должно нести смысл: направлять внимание пользователя,
                        подчеркивать важные элементы интерфейса или эмоционально
                        вовлекать в контент.
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[16px] font-medium">
                        Например, едва заметное подрагивание кнопки при
                        наведении курсора или плавное раскрытие меню — это тоже
                        элементы  motion дизайна, которые делают взаимодействие
                        с продуктом более интуитивным и приятным. 
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <HalfImageBlock
          title="Создание motion дизайна от Digital Devils"
          smallTitle="Мы создаем анимацию, которая продает и выделяется на фоне конкурентов"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Все это благодаря детальной проработке сценариев и современной
                графике. Мы не просто анимируем объекты — мы создаем эмоции,
                которые связывают зрителя с брендом. С нами вы получаете полный
                цикл услуг: от создания идеи до готового проекта с гарантией
                качества.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/motion_design_6.png"}
          smallImage={"/resources/motion_design_small_6.png"}
          widthImage={639}
          heightImage={300}
        />

        <StandardMarginsLayout
          styles="py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Почему стоит обратиться в Digital Devils?
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-0 lg:gap-[20px]">
                <div className="lg:max-w-[640px] flex flex-col">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Digital Devils — это не просто исполнители, а
                      стратегические партнеры в создании эффективного motion
                      контента. Наша главная отличительная черта — глубокое
                      понимание психологии восприятия. Мы не просто занимаемся
                      созданием анимации объектов, а проектируем траектории
                      движения, которые направляют взгляд пользователя по
                      нужному маршруту. Наши работы — это всегда баланс между
                      креативом и функциональностью, где каждая анимация
                      работает на конкретные показатели: конверсию,
                      вовлеченность или узнаваемость.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Мы используем комплексный подход к каждому проекту.
                      Начинаем с анализа целевой аудитории и конкурентов, чтобы
                      понять, какие именно виды анимации дадут максимальный
                      эффект. Затем создание детального сценария, где
                      прописываем не только визуальную часть, но и смысловые
                      акценты. Техническая реализация всегда учитывает
                      особенности платформы: будь то веб-сайт, мобильное
                      приложение или соцсети.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col min-w-[40%] lg:pt-0">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Особое внимание уделяем производительности. Наши
                      специалисты оптимизируют каждый кадр, чтобы анимация
                      работала плавно даже на слабых устройствах, не увеличивая
                      время загрузки страницы. Мы знаем все тонкости создания и
                      подготовки файлов для разных платформ — от специфики
                      экспорта ролика для Instagram до особенностей реализации
                      сложной анимации через CSS.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      С Digital Devils вы получаете не просто набор движущихся
                      картинок, а продуманную систему визуальной коммуникации,
                      которая выделяет ваш бренд, упрощает взаимодействие с
                      продуктом и в конечном итоге — увеличивает продажи. Наши
                      решения всегда индивидуальны, технологичны и, главное,
                      эффективны.
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
                Из чего складывается стоимость создания
              </h2>
              <p className="text-[18px] mb-[30px] lg:text-[22px] font-medium  max-w-[866px]">
                Цена зависит от сложности проекта: длительности, количества
                сцен, использования 2D/3D-графики и необходимости написания
                сценария. Чем детальнее картинка и чем больше уникальных
                элементов, тем больше времени требуется на производство. 
              </p>
              <div className="border-t-[1px] border-black  pt-[30px]">
                <p className="text-[16px] font-medium">
                  Цена создания motion анимации
                </p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  Также на стоимость влияют дополнительные услуги: озвучка,
                  музыкальное оформление или постпродакшн. Мы всегда предлагаем
                  несколько вариантов сотрудничества — от бюджетных решений до
                  премиального уровня. 
                </p>
              </div>
            </div>
          }
        />
        <MainBlockTenth data={data} isOnlyBottomPadding={true} />
      </BasicLayout>
    </>
  );
};

export default marketplace;

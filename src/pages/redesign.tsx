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
  { name: "Редизайн", link: "/redesign" },
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
    name: "Редизайн",
    item: "https://digitaldevils.by/redesign",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени занимает редизайн страницы или сайта?",
      description: (
        <p className="text-[18px] ">
          Сроки зависят от масштаба проекта и сложности задач. Для лендинга или
          небольшого корпоративного сайта работа может занять 2-3 недели — это
          включает разработку концепции, утверждение макетов и базовую
          техническую реализацию. Крупные интернет-магазины или многостраничные
          ресурсы требуют больше времени — от 1 до 3 месяцев, так как нужно
          проработать десятки шаблонов страниц и сложные функциональные
          элементы. В любом случае, мы всегда согласовываем с клиентом четкие
          сроки на каждом этапе и придерживаемся графика.
        </p>
      ),
    },
    {
      title: "Можно ли обновить дизайн без полной переделки сайта?",
      description: (
        <p className="text-[18px]">
          Да, такое решение часто бывает оптимальным. Например, можно
          модернизировать только ключевые страницы (главную, карточки товаров,
          оформление заказа), сохранив существующую структуру и CMS. Это
          позволяет получить быстрый результат с минимальными затратами. Еще
          один вариант — постепенный редизайн сайта: обновляем по одному разделу
          в месяц, что особенно актуально для крупных проектов с постоянным
          трафиком. Мы анализируем текущее состояние сайта и предлагаем наиболее
          рациональный подход.
        </p>
      ),
    },
    {
      title: "Как оценить, что работа была успешной?",
      description: (
        <p className="text-[18px] ">
          Эффективность измеряется через ключевые метрики аналитики. В первые
          1-2 месяца после запуска мы отслеживаем рост конверсии (на сколько %
          увеличились заказы или заявки), изменение поведения пользователей
          (увеличение времени на сайте, глубины просмотра) и снижение показателя
          отказов. Для интернет-магазинов важна динамика среднего чека и
          повторных покупок. Также учитываем субъективные факторы: отзывы
          клиентов и ваших сотрудников. Все данные предоставляем в понятных
          отчетах с пояснениями.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Редизайн сайта под ключ | Заказать редизайн страницы в Минске"
        description="Обновим ваш сайт с учётом новых трендов, улучшим структуру и навигацию, повысим конверсию. Редизайн — это не просто смена внешности, а стратегический шаг к росту бизнеса и улучшению взаимодействия с пользователями."
        canonical="https://digitaldevils.by/redesign"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock title="Редизайн" />
        <HalfImageBlock
          title="Редизайн сайта — мощный инструмент увеличения продаж"
          smallTitle="От дизайна сайта зависит всё. И даже больше."
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Первое впечатление формируется за 0,05 секунды — и ваш сайт либо
                привлекает клиента, либо теряет его навсегда.
              </p>
              <p className="font-medium text-[18px] mb-[20px]">
                Устаревший дизайн, медленная загрузка и неудобный интерфейс
                отпугивают 75% посетителей. Современные изменения сайта не
                просто обновляет визуал — он увеличивает конверсию, улучшает
                поведенческие факторы и укрепляет доверие к бренду.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText=""
          image={"/resources/redesign_small_6.png"}
          smallImage={"/resources/redesign_6.png"}
          widthImage={639}
          heightImage={300}
        />

        <DifferentTasksBlock
          bigTitle="Найдем подход к любой задаче"
          smallText="Не бывает универсальных решений — только индивидуальные стратегии."
          paragraphs={[
            {
              title: "Увеличение конверсии",
              text: "Если сайт посещают, но не покупают — проблема в UX. Мы перерабатываем структуру, упрощаем путь клиента и делаем призывы к действию максимально заметными.",
            },
            {
              title: "Обновление устаревшего дизайна",
              text: "Сайт выглядит как из 2010 года? Создадим современный, стильный и функциональный интерфейс, который соответствует трендам и позиционированию бренда.",
            },
            {
              title: "Адаптация под мобильные устройства",
              text: "Более 60% трафика приходит со смартфонов. Оптимизируем дизайн для мобильных экранов, ускорим загрузку и улучшим юзабилити.",
            },
          ]}
          isDark={true}
        />

        <StandardMarginsLayout
          styles={`bg-white text-black py-[50px] md:py-[60px]`}
          children={
            <div className="flex flex-col-reverse lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[753px]">
                <p className="mt-[20px] lg:mt-0 text-[18px] lg:text-[22px] font-medium">
                  Digital Devils — редизайн сайта, который работает. Мы не
                  просто рисуем «красивые шаблоны» — создаем эффективные
                  инструменты для роста бизнеса.
                </p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] font-medium">
                  Наши кейсы доказывают: после изменений сайта конверсия
                  увеличивается в 2-3 раза, а средний чек — на 15-25%. Работаем
                  с любыми нишами: от интернет-магазинов до корпоративных
                  сайтов.
                </p>
              </div>
              <div className="relative h-full lg:max-w-[753px] min-w-[40%]">
                <Image
                  src={"/resources/mob-pwa_case.png"}
                  width={525}
                  height={400}
                  className="object-cover w-full"
                  alt={"Мы разрабатываем то, что нужно Вам"}
                />
                <a
                  href="/application"
                  rel="nofollow"
                  className="absolute md:bottom-6 bottom-3 md:left-6 left-3 px-[30px] py-[9px] lg:py-[10px] lg:px-[40px] w-fit mt-[20px] flex justify-center items-center  bg-blue_main rounded-full text-white"
                >
                  <span className=" text-[22px] md:text-[24]">Кейс</span>
                </a>
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
                      Стоимость зависит от технического задания и пожеланий
                      заказчика.
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] xl:border-t-[0] border-l-0 xl:border-l-[1px] border-black mt-[20px] xl:mt-[0] pt-[20px] xl:pt-[0] xl:ps-[20px] w-full xl:max-w-[660px]">
                  <p className="text-[16px] font-medium mb-[20px]">Наш опыт</p>
                  <div className="flex-col">
                    <p className="text-[32px] font-bold">
                      Часто грамотный дизайн сайта служит дополнительным
                      максимизатором прибыли.
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

        <StandardMarginsLayout
          styles="py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Редизайн главной страницы или полностью сайта: когда, зачем и
                как обновлять ваш digital-ресурс
              </h2>
              <div className="flex flex-col lg:flex-row justify-between lg:gap-[20px]">
                <div className="lg:max-w-[640px] lg:pb-0 pb-[30px] lg:border-none border-b-[1px] border-black">
                  <p className="text-[22px] font-bold">
                    В цифровом мире страницы “О компании” или сайт целиком давно
                    перестал быть просто визитной карточкой компании.
                  </p>
                </div>
                <div className="lg:max-w-[640px] lg:pt-0 pt-[30px]">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[18px] font-medium">
                        Сегодня это полноценный инструмент продаж, работающий
                        круглосуточно. Однако даже самый успешный ресурс со
                        временем теряет свою эффективность.
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[18px] font-medium">
                        Устаревший дизайн, изменившиеся тренды пользовательского
                        опыта, появление новых технологий - все это требует
                        своевременного обновления. Редизайн помогает не просто
                        освежить внешний вид, но и кардинально улучшить ключевые
                        бизнес-показатели.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <HalfImageBlock
          title="Редизайн сайта: основные преимущества "
          smallTitle="Это инвестиция, которая окупается за счет роста продаж"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Современный дизайн повышает доверие клиентов и улучшает позиции
                в поиске. А адаптивный интерфейс увеличивает время на сайте и
                снижает процент отказов.
              </p>
            </>
          }
          isOnlyBottomPadding={false}
          isDark={true}
          buttonColor="#345CFF"
          buttonText="Обсудить проект"
          image={"/resources/redesign_5.png"}
          smallImage={"/resources/redesign_small_5.png"}
          widthImage={588}
          heightImage={306}
        />

        <WideBlockWithImage
          title="Мы знаем, как сделать так, чтобы было эффективно"
          text_1="Анализируем перед тем, как проектировать. Изучаем вашу ЦА, конкурентов и текущие проблемы сайта. Это помогает создать дизайн, который решает конкретные бизнес-задачи."
          text_2="Тестируем и дорабатываем. Проверяем, как ведут себя пользователи, и вносим правки для максимальной эффективности. Никаких догадок — только данные."
          bg=""
        />

        <StandardMarginsLayout
          styles="md:pb-[60px] pb-[50px]"
          children={
            <>
              <div className={`flex flex-col gap-[30px]`}>
                <div>
                  <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                    От косметической разработки до полной перестройки
                  </h2>
                  <p className={`text-[18px] font-bold max-w-[753px]`}>
                    Косметическое обновление - самый простой вид, который тем не
                    менее может дать заметный эффект. В этом случае разработки
                    касаются в основном визуальной составляющей: цветовой
                    палитры, шрифтового оформления, изображений. Такой подход
                    требует минимальных временных затрат (обычно 1-2 недели), но
                    способен повысить уровень доверия к сайту на 10-15%.
                    Типичный пример - обновление главной страницы без разработки
                    и внедрения общей структуры ресурса.
                  </p>
                </div>
                <div
                  className={`grid lg:grid-cols-3 grid-cols-1 md:gap-[40px] gap-[20px] border-t-[1px] pt-[30px] border-t-black`}
                >
                  <div>
                    <span className="text-[16px] font-medium">
                      Более глубокий подход - UX-ревизия, когда основной акцент
                      делается на улучшении пользовательского опыта. Здесь
                      разработки касаются навигации, расположения ключевых
                      блоков, форм заявок. Такой редизайн сайта занимает 3-4
                      недели, но может увеличить конверсию на впечатляющие
                      20-40%. Яркий пример - упрощение процесса оформления
                      заказа в интернет-магазине.
                    </span>
                  </div>
                  <div>
                    <span className="text-[16px] font-medium">
                      Технический апгрейд - это серьезная работа "под капотом"
                      сайта. Замена устаревшей CMS, оптимизация скорости
                      загрузки, улучшение адаптивности - все это требует 4-8
                      недель работы, но дает ощутимый результат в виде улучшения
                      поисковых позиций. Такой подход особенно актуален для
                      сайтов, работающих на морально устаревших платформах.
                    </span>
                  </div>
                  <div>
                    <span className="text-[16px] font-medium">
                      Наиболее масштабный вариант - полная реконструкция сайта,
                      когда изменениям подвергается буквально все: от редизайна
                      до функциональных возможностей. Такой проект может занять
                      от 2 до 6 месяцев, но дает комплексное улучшение всех
                      ключевых показателей. Важно, что даже при такой масштабной
                      переделке можно сохранить существующую URL-структуру, что
                      критически важно для SEO.
                    </span>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <BlockWithImageAndDropDownMenu
          isDark={true}
          title="Когда наступает время для редизайна сайта?"
          borderColor="#ffffff"
          margin="md:py-[60px] py-[50px]"
          data={[
            {
              title: "Устаревший внешний вид сайта",
              description: [
                "Первым тревожным звоночком становится устаревший внешний вид сайта. Если ваш ресурс напоминает о начале 2010-х с их мелкими шрифтами, сложной навигацией и pixel-perfect графикой, пользователи подсознательно начинают воспринимать компанию как несовременную. Особенно критично это для высококонкурентных ниш - digital-агентств, интернет-магазинов или технологичных стартапов.",
              ],
            },
            {
              title: "Высокий процент отказа",
              description: [
                "Еще один важный сигнал - высокий процент отказов. Когда посетители покидают сайт в первые 5-10 секунд, проблема может крыться в плохой читаемости текстов, неочевидном интерфейсе или неприемлемо долгой загрузке страниц. Особенно тревожной становится ситуация, когда при хорошем трафике наблюдается низкая конверсия - это явный признак, что сайт не справляется со своей основной задачей продажи.",
              ],
            },
            {
              title: "Сдвиги в бизнес-модели компании",
              description: [
                "Серьезные сдвиги в бизнес-модели компании - еще один повод задуматься о редизайне. Расширение ассортимента, выход на новые рынки или полный ребрендинг неизбежно требуют адаптации digital-инструментов. Не стоит забывать и о технической стороне вопроса - устаревшая CMS, отсутствие мобильной версии или проблемы с безопасностью могут серьезно тормозить развитие бизнеса.",
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

        <StandardMarginsLayout
          styles="md:pt-[60px] mt-[50px]"
          children={
            <>
              <div className={`flex flex-col gap-[30px]`}>
                <div>
                  <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px]">
                    Ключевые принципы
                  </h2>
                  <div className="flex flex-col lg:flex-row lg:gap-[40px] gap-[10px]">
                    <p className={`text-[18px] font-medium`}>
                      Сохранение узнаваемости бренда на сайте - золотое правило.
                      Даже самые радикальные разработки должны оставлять
                      компанию узнаваемой для своей аудитории. Для крупных
                      сайтов особенно важен принцип постепенного внедрения
                      разработок - поэтапный переход позволяет минимизировать
                      риски и дискомфорт для пользователей на сайте.
                    </p>
                    <p className={`text-[18px] font-medium`}>
                      SEO-безопасность - еще один критически важный аспект. При
                      любых разработках необходимо сохранить наработанную
                      ссылочную массу и не потерять завоеванные поисковые
                      позиции. Особое внимание стоит уделить анализу результатов
                      в первые 3 месяца после запуска - этот период наиболее
                      важен для оценки эффективности проведенных разработок.
                    </p>
                  </div>
                </div>
                <div className={`border-t-[1px] pt-[30px] border-t-black`}>
                  <p className="text-[22px] font-medium max-w-[753px]">
                    Важно понимать, что редизайн сайта - это не просто расходы,
                    а стратегическая инвестиция в digital-актив компании.
                    Современный, удобный и технологичный ресурс способен
                    увеличить средний чек, снизить стоимость привлечения клиента
                    и в конечном итоге укрепить позиции компании на рынке.
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

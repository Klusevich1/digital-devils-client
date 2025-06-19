import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import Image from "next/image";
import SmallMainBlockCard from "@/components/SmallMainBlockCard";
import OurCaseBlock from "@/components/OurCaseBlock";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import SeoTitleBlock from "@/components/SeoTitleBlock";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import MainBlockFourth from "@/components/MainBlockFourth";
import CommentBlock from "@/components/CommentBlock";
import HalfImageBlock from "@/components/HalfImageBlock";
import TicketSeoBlock from "@/components/TicketSeoBlock";
import { FaCircleChevronRight } from "react-icons/fa6";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Продвижение сайтов", link: "/seo" },
  { name: "Продвижение интернет-магазина", link: "/seo-store" },
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
    name: "Продвижение интернет-магазина",
    item: "https://digitaldevils.by/seo-store",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени нужно, чтобы увидеть эффективность на сайте?",
      description: (
        <p className="text-[18px] ">
          Первые изменения заметны через 1-2 месяца (рост прироста, кликов). Но
          стабильный рост продаж начинается после 3-6 месяцев — SEO и реклама
          должны "разогнаться". 
        </p>
      ),
    },
    {
      title: "Можно ли продвигать интернет-магазин только через соцсети?",
      description: (
        <p className="text-[18px]">
          Можно, но это рискованно. Если соцсети изменят алгоритмы, трафик
          упадет. Мы рекомендуем комплекс: SEO + контекст + соцсети — так вы не
          зависите от одного канала. 
        </p>
      ),
    },
    {
      title: "Что важнее — SEO или реклама?",
      description: (
        <p className="text-[18px] ">
          SEO дает долгосрочную эффективность на сайте, реклама — быстрые
          продажи. Идеально сочетать: реклама приводит деньги сразу, а SEO
          постепенно увеличивает органический трафик.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="SEO-продвижение интернет-магазинов в Минске | Поисковая оптимизация сайтов"
        description="Комплексное SEO-продвижение интернет-магазинов в Минске и Беларуси. Используем только передовые технологии и адаптивность — ваши посетители оценят. Доверяйте SEO-продвижение своего магазина экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/seo-store"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <SeoTitleBlock
          title="Продвижение интернет-магазина"
          max_weight={1100}
        />
        <HalfImageBlock
          title="SEO-продвижение от Digital Devils"
          smallTitle="Зачем интернет-магазину SEO-продвижение?"
          description={
            <>
              <p className="font-medium text-[18px] mt-[20px] mb-[10px]">
                Без{" "}
                <a href="/seo" className="text-blue_main">
                  SEO-продвижения
                </a>{" "}
                ваш интернет-магазин — как супермаркет в глухом переулке: товары
                есть, а продаж нет.
              </p>
              <p className="font-medium text-[18px] mb-[10px]">
                Продвижение — это не просто "чтобы были заказы". Это система:
                привлечение целевого трафика на сайт, повышение конверсии,
                удержание клиентов и увеличение прибыли. Без него вы теряете 90%
                потенциальных клиентов на сайте, которые ищут товар, но не
                находят вас. Хотите продавать больше на сайте? Тогда ваш сайт
                должен быть там, где ваши клиенты — в поисковике.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText=""
          image={"/resources/seo_store.png"}
          smallImage={"/resources/seo_store_small.png"}
          widthImage={641}
          isOnlyBottomPadding={true}
          heightImage={300}
        />
        <OurCaseBlock
          title="Наш кейс"
          cases={[
            {
              miniTitle: "Продвижение интернет-магазина автозапчастей в Москве",
              text1: "Результат: с 0 до 220 000 переходов из поиска в месяц",
              text2:
                "Новый интернет-магазин автозапчастей столкнулся с жесткой конкуренцией в столичном регионе. Мы провели глубокий анализ ниши, выделили 15 000 низко- и среднечастотных запросов с высокой конверсией, полностью переработали структуру каталога и внедрили многоуровневую систему фильтров. Для ускорения выхода в ТОП параллельно запустили контекстную кампанию с динамическим ремаркетингом. Оптимизировали карточки товаров под голосовой поиск и мобильных пользователей.",
              imageUrl: "/resources/seo-case.png",
              numbers: (
                <>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-[15px] justify-between lg:flex pt-[30px] md:pb-[60px] pb-[50px]">
                    <SmallMainBlockCard
                      title="+220 000"
                      description="переходов из поиска ежемесячно"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="92%"
                      description="покрытие целевой семантики"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="3,8%"
                      description="конверсия в заказ"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="65%"
                      description="повторных покупок"
                      margin="mb-0"
                    />
                  </div>
                </>
              ),
            },
          ]}
          bg="black"
        />

        <WideBlockWithImage
          title="Digital Devils знает, что вам нужно "
          text_1="Вы не хотите просто продвижение сайта — вам нужна прибыль. Мы не работаем шаблонно: анализируем ваш рынок, конкурентов, целевую аудиторию и только потом предлагаем стратегию."
          text_2='У нас много инструментов и один из них SEO для сайта. Мы не обещаем "волшебную таблетку", но гарантируем результат, который вы увидите в отчетах и в кассе.'
        />
        <DifferentTasksBlock
          bigTitle="Разные задачи - разный подход"
          smallText=""
          paragraphs={[
            {
              title: "Сайт никто не находит в поиске?",
              text: "Выведем в ТОП по ключевикам через SEO. Оптимизируем карточки товаров на сайте, увеличим видимость и привлечем целевой трафик.",
            },
            {
              title: "Есть трафик на сайте, но мало заказов?",
              text: "Проанализируем воронку на сайте, доработаем UX, добавим триггеры (срочные предложения, отзывы, гарантии) и увеличим конверсию.",
            },
            {
              title: "Хотите увеличить средний чек?",
              text: "Внедрим перекрестные продажи на сайте, программу лояльности, персонализированные рекомендации.",
            },
          ]}
          isDark={false}
        />

        <StandardMarginsLayout
          styles={`bg-white text-black `}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_store_5.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  SEO-продвижение окупается в разы
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Вложенные в SEO продвижение сайта деньги не уходят в пустоту —
                  они превращаются в покупателей.
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_store_small_5.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[20px] font-medium">
                  Правильная стратегия не просто увеличивает трафик, а
                  привлекает целевую аудиторию, которые конвертируются в
                  прибыль. В итоге каждый рубль, вложенный в SEO продвижение,
                  приносит от 3 до 10 рублей прибыли на сайте — и это не магия,
                  а точные расчеты и продуманные действия.
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
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Стоимость SEO-продвижения
              </h2>
              <p className="text-[18px] mb-[30px] lg:text-[22px] font-medium  max-w-[866px]">
                Цена зависит от масштабов, конкурентности ниши и выбранных
                инструментов на сайте. Небольшой сайт с узкой аудиторией
                потребует меньше вложений, чем{" "}
                <a href="/marketplace" className="text-blue_main">
                  крупный маркетплейс
                </a>
                .
              </p>
              <div className="border-t-[1px] border-black  pt-[30px]">
                <p className="text-[16px] font-medium">
                  Цена оптимизации сайта
                </p>
                <p className="text-[18px] lg:text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  На стоимость влияют: работа с контентом, техническая поддержка
                  сайта, конкуренция в нише. Чем сложнее задача — тем глубже
                  аналитика и больше каналов задействуется. Мы не работаем "по
                  шаблону" — только индивидуальный расчет под ваш бизнес.
                </p>
              </div>
            </div>
          }
        />

        <StandardMarginsLayout
          styles={`bg-white text-black pb-[50px] md:pb-[60px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px] mb-[30px]">
                  SEO-продвижение для онлайн-торговли
                </h2>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_store_small_7.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  SEO-продвижение представляет собой системный процесс
                  оптимизации для достижения максимальной видимости в системах.
                  В условиях современного цифрового рынка, где 95% пользователей
                  не рассматривают выдачу поиска дальше первой страницы, наличие
                  сайта в топовой зоне выдачи становится критически важным
                  фактором коммерческого успеха. Особенность органического
                  трафика заключается в его высокой конверсионной способности -
                  в среднем на 30% выше по сравнению с рекламными источниками.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_store_7.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
            </div>
          }
        />

        <TicketSeoBlock
          title="Тарифы для SEO-продвижения"
          titleLeftBlock={"Сколько стоит продвижение интернет-магазинов"}
          textLeftBlock_1={
            "Чтобы вам было проще начать, мы разработали два тарифа для сайтов — для тех, кто хочет тестировать SEO-продвижение, и для тех, кто готов к агрессивному росту."
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
          smallTitle_2={"Ультра"}
          price_1={"390$"}
          price_2={"550$"}
          list_1={[
            "Базовая настройка, мета-теги, структура",
            "Оптимизация (сайт станет видим поисковикам)",
            "Аналитика на сайте (отслеживание позиций, ежемесячный отчет)",
            " Поддержка (правки по сайту)",
          ]}
          list_2={[
            "Технический аудит, ссылочная масса, контент-план",
            "100% оптимизация (работа с системами в долгую)",
            "Глубокая аналитика на сайте (A/B-тесты, тепловые карты, юзабилити)",
            "Персональный менеджер (еженедельные отчеты, стратегические сессии)",
          ]}
        />
        <StandardMarginsLayout
          styles="pb-[50px] md:pb-[60px] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Особенности локального SEO продвижения
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-bold">
                    Для интернет-магазинов с оффлайн-точками продаж актуально
                    локальное  продвижение.
                  </p>
                </div>
                <p className="text-[18px] font-medium  md:max-w-[640px]">
                  Оптимизация страниц филиалов включает точные контактные данные
                  и схемы проезда. Работа с отзывами в сервисе Google My
                  Business влияет на видимость в локальных поисковых
                  результатах. Использование геозависимых запросов помогает
                  привлекать покупателей из конкретного региона. Синхронизация
                  онлайн и оффлайн-данных создает целостный образ бизнеса в
                  цифровом пространстве.
                </p>
              </div>
            </>
          }
        />

        <CommentBlock
          reviewsData={[
            {
              avatar: "/resources/avatar_8.png",
              name: "Дмитрий Соколов",
              jobTitle: "GadgetPro",
              reviewText:
                "Мы думали, что в нашей нише невозможно выбиться в топ. Но Digital Devils доказали обратное: органический трафик вырос в 8 раз, а конверсия — с 1,2% до 4,5%. Они не просто настраивают рекламу на сайте — они строят систему, которая продает круглосуточно",
            },
            {
              avatar: "/resources/avatar_9.png",
              name: "Елена Петрова",
              jobTitle: "EcoHome",
              reviewText:
                "Раньше мы зависели от маркетплейсов, но хотели развивать собственный сайт. Агентство не только вывело нас в топ по ключевикам, но и снизило стоимость лида на 35%. Теперь 70% прибыли идет через сайт — это огромная экономия на комиссиях!",
            },
            {
              avatar: "/resources/avatar_10.png",
              name: "Артем Белов",
              jobTitle: "SportGear",
              reviewText:
                "Нас удивило, что ребята не просто взяли деньги, а сначала провели аудит. Оказалось, у нас были проблемы с юзабилити на сайте. После доработок конверсия подскочила с 2% до 6%, а ROI — в 3 раза. Теперь продвижение не расходы, а инвестиции",
            },
          ]}
          margin="mt-0"
        />

        <DifferentTasksBlock
          bigTitle="Преимущества профессионального продвижения"
          smallText="Реализация комплексного продвижения на сайте приносит множество значимых преимуществ."
          paragraphs={[
            {
              title: "Стабильный поток",
              text: "Стабильный поток целевых посетителей формируется за счет точного соответствия ключевиков предлагаемому ассортименту.",
            },
            {
              title: "Экономическая эффективность",
              text: "Экономическая эффективность проявляется в существенном снижении стоимости привлечения каждого клиента после достижения топовых позиций.",
            },
            {
              title: "Доверие потребителей",
              text: "Доверие потребителей к бренду естественным образом возрастает при регулярном появлении в первой десятке поиска.",
            },
            {
              title: "Постоянный приток заказов",
              text: "Круглосуточная работа в автоматическом режиме обеспечивает постоянный приток заказов без дополнительных затрат.",
            },
          ]}
          isDark={false}
        />

        <StandardMarginsLayout
          styles={`bg-white text-black pb-[50px] md:pb-[60px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Критические моменты
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Начало SEO продвижения особенно актуально в нескольких
                  ключевых ситуациях
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_store_small_6.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Новые интернет-магазины сталкиваются с проблемой отсутствия
                  видимости среди уже закрепившихся на рынке конкурентов. При
                  стагнации продаж грамотное SEO продвижение помогает выявить и
                  устранить каналы потери потенциальных покупателей. Для
                  бизнесов, зависящих от маркетплейсов, развитие собственного
                  прироста становится страховкой от изменений политики торговых
                  площадок. В условиях высокой конкурентной активности
                  отсутствие стратегии равносильно добровольному выходу из
                  борьбы за клиента.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_store_6.png"}
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
          styles="py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Психологические аспекты SEO
              </h2>
              <div className="flex flex-col lg:flex-row justify-between lg:gap-[20px]">
                <div className="lg:max-w-[640px] lg:pb-0 pb-[30px] lg:border-none border-b-[1px] border-black">
                  <p className="text-[22px] font-bold">
                    Поисковая оптимизация интернет-магазинов содержит важные
                    психологические компоненты, которые часто упускают из виду.
                    Поведенческие факторы пользователей становятся ключевым
                    сигналом для поисковых систем.
                  </p>
                </div>
                <div className="lg:max-w-[640px] lg:pt-0 pt-[30px]">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[18px] font-medium">
                        Когда посетители проводят больше времени на сайте,
                        просматривают несколько страниц и возвращаются снова,
                        это свидетельствует о качественном контенте и удобном
                        интерфейсе.
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[18px] font-medium">
                        Особое внимание следует уделять эмоциональному
                        оформлению товарных карточек - фотографии должны
                        вызывать желание обладать продуктом, а описания
                        создавать ощущение необходимости покупки.
                        Микроскопические элементы дизайна, такие как кнопки
                        "Купить" или "В корзину", требуют тщательной проработки
                        с точки зрения цветового решения и расположения всех
                        элементов сайта.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles="pb-[50px] md:pb-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Юридические аспекты SEO продвижения
              </h2>
              <div className="flex flex-col lg:flex-row justify-between lg:gap-[20px]">
                <div className="lg:max-w-[640px] lg:pb-0 pb-[30px] lg:border-none border-b-[1px] border-black">
                  <p className="text-[22px] font-bold">
                    Правовое сопровождение часто становится неожиданным вызовом
                    для владельцев интернет-магазинов. Использование торговых
                    марок в текстах и мета-описаниях требует особой
                    осторожности, чтобы избежать претензий правообладателей.
                    Публикация отзывов и пользовательского контента должна
                    соответствовать законодательству о защите персональных
                    данных.
                  </p>
                </div>
                <div className="lg:max-w-[640px] lg:pt-0 pt-[30px]">
                  <ul className="flex flex-col gap-[10px]">
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[18px] font-medium">
                        Особого внимания заслуживает корректное оформление
                        авторских прав на уникальные фотографии и описания
                        товаров. В условиях ужесточения требований к
                        интернет-торговле юридическая чистота стратегии
                        становится конкурентным преимуществом.
                      </span>
                    </li>
                    <li className="flex flex-row items-start gap-[10px]">
                      <span className="text-[18px] font-medium">
                        Таким образом, важно очень осторожно относиться к
                        продвижению и доверять дело только рукам профессионалам,
                        чтобы избежать штрафов и прочих проблем с
                        законодательством.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] text-black `}
          children={
            <div className="w-full flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px] mb-[30px]">
                Контентная стратегия для продвижения интернет-магазинов
              </h2>
              <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
                <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                  <Image
                    src={"/resources/seo_store_11.png"}
                    className="w-full"
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    width={359}
                    height={360}
                  />
                </div>
                <div className="lg:max-w-[754px]">
                  <p className="text-[24px] font-bold mb-[20px]">
                    Создание эффективного контента для товарных карточек требует
                    особого подхода.
                  </p>
                  <div className="w-full block lg:hidden mb-[20px]">
                    <Image
                      src={"/resources/seo_store_small_11.png"}
                      alt={
                        "Сколько стоит разработка мобильных приложений под iOS?"
                      }
                      className="w-full"
                      width={342}
                      height={252}
                    />
                  </div>
                  <div className="flex flex-col min-w-[40%]">
                    <div className="flex">
                      <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                        Уникальные описания, разработанные специально для
                        конкретного магазина, исключают проблемы с дублированием
                        контента.
                      </p>
                    </div>
                    <div className="flex">
                      <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                        Полезность информации проявляется в полном освещении
                        характеристик товара и ответах на типичные вопросы тех,
                        кто покупает.
                      </p>
                    </div>
                    <div className="flex">
                      <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                        Грамотная оптимизация текстов предполагает естественное
                        включение ключевых фраз без перегрузки.
                      </p>
                    </div>
                    <div className="flex">
                      <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                        <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                      </div>
                      <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                        Продающая составляющая контента акцентирует внимание на
                        преимуществах продукта и содержит четкие призывы к
                        действию.
                      </p>
                    </div>
                  </div>
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
          }
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-white bg-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Технические аспекты
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-medium">
                    Фундаментальной основой успешного продвижения становится
                    качественная техническая составляющая.
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Скорость загрузки страниц, не превышающая 2-3 секунды,
                      существенно влияет на удобство пользователей и
                      ранжирование.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Адаптивность интерфейса ко всем типам устройств особенно
                      важна в условиях роста мобильного прироста.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Семантически понятные адреса страниц улучшают восприятие
                      сайта как пользователями, так и системами. Использование
                      микроразметки помогает роботам точнее понимать содержание
                      товарных карточек
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Контроль индексации позволяет управлять видимостью
                      различных разделов в поисковой выдаче.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles={`pt-[50px] md:pt-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Формирование качественной ссылочной массы
              </h2>
              <p className="mb-[30px] text-[22px] font-medium  max-w-[866px]">
                Развитие авторитетности интернет-магазина через внешние ссылки
                требует взвешенного подхода.
              </p>
              <div className="border-t-[1px] border-black pt-[30px]">
                <p className="text-[18px] font-medium max-w-[866px]">
                  Получение ссылок с тематических ресурсов повышает доверие
                  систем к сайту. Участие в профессиональных каталогах и
                  отраслевых обзорах способствует улучшению позиций по
                  конкурентным запросам. Качественная ссылочная масса становится
                  дополнительным источником целевого прироста. При этом важно
                  избегать сомнительных методов наращивания ссылок, которые
                  могут привести к санкциям со стороны систем.
                </p>
              </div>
            </div>
          }
        />

        <DifferentTasksBlock
          bigTitle="Интеграция с другими маркетинговыми каналами"
          smallText="Эффективное SEO продвижение интернет-магазина требует гармоничного сочетания SEO с другими цифровыми инструментами."
          paragraphs={[
            {
              title: "Поисковая адаптация",
              text: "Поисковая адаптация естественным образом дополняет контекст, снижая общую стоимость привлечения покупателей.",
            },
            {
              title: "Email-маркетинг",
              text: "Синхронизация с email-маркетингом позволяет перенаправлять пользователей на оптимизированные страницы.",
            },
            {
              title: "Социальные сети",
              text: "Взаимодействие с социальными сетями увеличивает естественный ссылочный профиль и улучшает поведенческие метрики.",
            },
            {
              title: "Программа лояльности",
              text: "Особую ценность представляет интеграция стратегии с программой лояльности, когда постоянные покупатели становятся источником качественных отзывов и рекомендаций.",
            },
          ]}
          isDark={false}
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-white bg-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Анализ эффективности стратегии
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-medium">
                    Оценка результатов поискового продвижения интернет-магазина
                    требует комплексного подхода.
                  </p>
                </div>
                <div className="flex flex-col min-w-[40%]">
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Мониторинг позиций по ключевикам показывает прогресс в
                      борьбе за видимость.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Анализ динамики органического прироста отражает увеличение
                      потенциальной аудитории магазина.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Конверсионные показатели демонстрируют реальное влияние
                      оптимизации на продажи
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Изучение глубины просмотров и процента отказов помогает
                      совершенствовать пользовательский опыт. Важно понимать,
                      что для получения объективной картины необходимо проводить
                      оценку не ранее чем через 3-4 месяца после начала работ.
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex min-w-[24px] mt-1 min-h-[24px]  me-[10px]">
                      <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                    </div>
                    <p className="text-[16px] md:text-[18px] mb-[10px] font-medium  lg:max-w-[640px]">
                      Важно понимать, что для получения объективной картины
                      необходимо проводить оценку не ранее чем через 3-4 месяца
                      после начала работ.
                    </p>
                  </div>
                </div>
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles={`bg-white text-black py-[50px] md:py-[60px]`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Сезонность в SEO продвижении
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Циклические колебания спроса требуют особого подхода к
                  поисковой адаптации интернет-магазинов.
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_store_small_9.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Заблаговременная подготовка к сезонным всплескам активности
                  позволяет максимально использовать коммерческий потенциал.
                </p>
                <p className="text-[18px] mt-[10px] font-medium">
                  За 2-3 месяца до начала высокого сезона необходимо усилить
                  работу по продвижению соответствующих товарных категорий.
                  Анализ сезонных запросов помогает адаптировать семантическое
                  ядро под изменяющиеся потребности аудитории. В межсезонье
                  стоит сосредоточиться на продвижении базовых товаров и
                  развитии лояльности постоянных покупателей. Такой подход
                  обеспечивает стабильный трафик независимо от времени года.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_store_9.png"}
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
          styles={`pb-[50px] md:pb-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Риски отсутствия SEO
              </h2>
              <p className="mb-[30px] text-[22px] font-medium  max-w-[866px]">
                Отказ от профессионального продвижения создает серьезные угрозы
                для развития интернет-магазина.
              </p>
              <div className="border-t-[1px] border-black pt-[30px]">
                <p className="text-[18px] font-medium max-w-[866px]">
                  Основная проблема заключается в потере подавляющее большинство
                  целевой аудитории, которые просто не могут найти ресурс среди
                  конкурентов. Финансовая зависимость от платных рекламных
                  каналов приводит к постоянному росту маркетинговых расходов.
                  Технические и содержательные недостатки неоптимизированного
                  сайта негативно влияют на поведенческие факторы, еще больше
                  ухудшая позиции в поисковой выдаче.
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

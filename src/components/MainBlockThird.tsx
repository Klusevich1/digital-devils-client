import React from "react";
import ListLinks from "@/components/ListLlinks";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

const MainBlockThird: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Веб-разработка",
      description:
        "Web-сайты для частных лиц и крупных компаний. Создаем уникальные решения: <a href='https://digitaldevils.by/online-store' class='no-underline text-blue_main'>интернет-магазины</a>, <a href='https://digitaldevils.by/landing' class='no-underline text-blue_main'>Landing Page</a>, <a href='https://digitaldevils.by/card-website' class='no-underline text-blue_main'>сайты-визитки</a>, <a href='https://digitaldevils.by/portal' class='no-underline text-blue_main'>корпоративные порталы</a>, которые сделают бизнес прибыльным и эффективным. Никаких шаблонов, только индивидуальные решения, на 100% отвечающие вашим запросам.",
      badges: [
        { name: "Корпоративные сайты", link: "/corporate-website" },
        { name: "Интернет-магазины", link: "/online-store" },
        { name: "Landing page", link: "/landing" },
        { name: "B2B сайты", link: "/b2b" },
        { name: "Портал", link: "/portal" },
        { name: "Сайт-визитка", link: "/card-website" },
        { name: "Сайт-каталог", link: "/website-catalog" },
        { name: "Информационный сайт", link: "/information-site" },
        { name: "Маркетплейс", link: "/marketplace" },
      ],
    },
    {
      id: 2,
      title: "CMS",
      description:
        "Web-сайты на популярных платформах, для частных лиц и крупных компаний. Удобный интерфейс, минимальные затраты, гибкие настройки и прозрачные условия работы позволяют быстро запустить проект и легко масштабировать его по мере роста потребностей.",
      badges: [
        { name: "Tilda", link: "/tilda" },
        { name: "Wordpress", link: "/wordpress" },
        { name: "1С Битрикс", link: "/bitrix" },
        { name: "Joomla", link: "/joomla" },
        { name: "Django", link: "/django" },
        { name: "Opencart", link: "/opencart" },
        { name: "Laravel", link: "/laravel" },
      ],
    },
    {
      id: 3,
      title: "Мобильные приложения",
      description:
        "Не просто разрабатываем, а выполняем полный цикл работ: Backend, Frontend, Mobile App. Тестируем и отслеживаем все показатели: от конверсии и кликов до оплат и заказов. Экономим бюджет за счет параллельной разработки для iOS и Android.",
      badges: [
        { name: "Разработка мобильных приложений", link: "/mob-apps" },
        { name: "IOS разработка", link: "/mob-ios" },
        { name: "Android разработка", link: "/mob-android" },
        { name: "ASO продвижение", link: "/mob-aso" },
        { name: "PWA разработка", link: "/mob-pwa" },
        { name: "Дизайн мобильных приложений", link: "/mob-design" },
        { name: "Разработка веб-приложений", link: "/mob-web" },
      ],
    },
    {
      id: 4,
      title: "Дизайн",
      description:
        "Каждому клиенту - свое эксклюзивное решение! Составляем макеты с учетом особенностей и специфики компании, ее стратегических целей и целевой аудитории. Всегда готовы обсудить новые идеи, подсказать оптимальные варианты реализации вашей digital-задачи.",
      badges: [
        { name: "UX/UI", link: "/ux-ui" },
        { name: "Исследования", link: "/researches" },
        { name: "Продукты", link: "/products" },
      ],
    },
    {
      id: 5,
      title: "Motion-дизайн",
      description:
        "Гармонично сочетаем звук, графику, текст, умеем подавать любую информацию наглядно и понятно для аудитории. Используем инновационные технологии, разрушаем стереотипы и шаблоны, раздвигаем границы привычного с помощью креативных анимированных элементов и динамичных визуальных эффектов.",
      badges: [
        { name: "Анимация", link: "/animation" },
        { name: "Графика", link: "/graphics" },
      ],
    },
    {
      id: 6,
      title: "SEO-оптимизация ",
      description:
        "Сайты нашей разработки гарантировано полюбят поисковые системы. Полное управление мета-тегами, генерация robots.txt и sitemap.xml, отсутствие дублей страниц и настраиваемая 404.",
      badges: [
        { name: "Яндекс Метрика", link: "/yandex-metrics" },
        { name: "Google Analytics", link: "/google-analytics" },
      ],
    },
  ];

  return (
    <StandardMarginsLayout
      styles="mt-[50px] sm:mt-[60px]"
      children={
        <>
          <h2 className="text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] font-bold">
            Услуги по разработке и продвижению
          </h2>
          <ListLinks items={items} />
        </>
      }
    />
  );
};

export default MainBlockThird;

import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BasicLayout from "@/layouts/BasicLayout";
import Tabs from "@/components/Tabs";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import SEO, { ListItem } from "@/components/SEO";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Портфолио", link: "/portfolio" },
];

const Portfolio = () => {
  const all = [
    {
      title: "Разработка интернет-магазина шин",
      imagePath: "/resources/portfolio2.png",
      link: "#",
      category: "Интернет-магазин",
      description:
        "Спроектировали и <a href='https://digitaldevils.by/online-store' class='no-underline text-blue_main'>разработали полноценный интернет-магазин</a> с эксклюзивным дизайном. Разработку провели по принципам SEO Driven Development.",
      technologies: ['Next.js', 'TypeScript', 'Nest.js', 'MongoDB'],
      typesOfWork: ['UX/UI', 'Backend', 'Frontend'],
    },
    {
      title: "Разработка лендинга Keel Market LLP",
      imagePath: "/resources/portfolio1.png",
      link: "#",
      category: "Лендинг",
      description:
        "Проект включал полный цикл веб-разработки: от концепции и дизайна до реализации и тестирования. Используя Agile-методологию, внедрили основные функции <a href='https://digitaldevils.by/landing' class='no-underline text-blue_main'>лендинга</a>, проводя регулярные тестирования и собирая обратную связь от клиентов.",
      technologies: ['React', 'TypeScript', 'Express.js'],
      typesOfWork: ['UX/UI', 'Backend', 'Frontend'],
    },
    {
      title: "Motion-дизайн",
      imagePath: "/resources/portfolio3.png",
      link: "#",
      category: "Моушен",
      description:
        "Создали 30-секундный видео-контент, который включал анимационные элементы и кейс-стадии, показывающие проделанную работу",
      technologies: ["Adobe After Effects", "Sketch и Figma", "CSS-анимации"],
      typesOfWork: ["Motion-дизайн"],
    },
    {
      title: "SEO-продвижение сайта по ремонту квартир",
      imagePath: "/resources/portfolio5.png",
      link: "#",
      category: "SEO",
      description:
        "Продвижение сайта услуг по ремонту квартир с 0 до 12 тысяч посетителей в месяц. Полное закрытие семантического ядра в нише. Разработка контент стратегии, внутренняя и внешняя SEO оптимизация. Настройка контекстной рекламы.",
      technologies: ["Wordpress", "Яндекс Вебмастер", "Google Search Console"],
      typesOfWork: ["SEO"],
    },
    {
      title: "Motion-дизайн",
      imagePath: "/resources/portfolio4.png",
      link: "#",
      category: "Моушен",
      description:
        "Создали 30-секундный видео-контент, который включал анимационные элементы и кейс-стадии, показывающие проделанную работу",
      technologies: ["Adobe After Effects", "Sketch и Figma", "CSS-анимации"],
      typesOfWork: ["motion-дизайн"],
    },
    {
      title: "Создание сайта для компании Giftstree",
      imagePath: "/resources/case_giftstree.png",
      link: "#",
      category: "Приложения",
      description:
        "Разработка интернет-магазина осуществлялось в несколько этапов, начиная с изучения их уникальных услуг и подхода к созданию открыток. Мы предложили решение, отражающее креативность и качество продукции.",
      technologies: ["Adobe After Effects", "Sketch и Figma", "CSS-анимации"],
      typesOfWork: ["UX/UI", "backend", "frontend"],
    },
  ];

  const tabs = [
    { label: "Все", content: all },
    { label: "Интернет-магазин", content: all },
    { label: "Приложения", content: all },
    { label: "Лендинг", content: all },
    { label: "Моушен", content: all },
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
      name: "Портфолио",
      item: "https://digitaldevils.by/portfolio",
    },
  ];

  return (
    <>
      <SEO
        title="Портфолио работ IT-компании Digital Devils"
        description="Создаем проекты, которые вдохновляют и решают реальные бизнес-задачи. В нашем портфолио вы найдете примеры веб-сайтов, мобильных приложений и комплексных IT-решений, разработанных с использованием передовых технологий и инновационных подходов. Заходите."
        canonical="https://digitaldevils.by/portfolio"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <StandardMarginsLayout
          styles="sm:pb-[60px] pb-[50px]"
          children={<Tabs title="Портфолио" arr={tabs} />}
        />
      </BasicLayout>
    </>
  );
};

export default Portfolio;

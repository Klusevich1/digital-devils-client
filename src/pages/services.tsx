import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceBlockFirst from "@/components/ServiceBlockFirst";
import ServiceBlockFourth from "@/components/ServiceBlockFourth";
import OurApproachBlock from "@/components/OurApproachBlock";
import BasicLayout from "@/layouts/BasicLayout";
import ServicesBlockSecond from "@/components/ServicesBlockSecond";
import MainBlockFive from "@/components/MainBlockFive";
import SEO, { ListItem } from "@/components/SEO";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Услуги", link: "/services" },
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
    name: "Услуги",
    item: "https://digitaldevils.by/services",
  },
];

const Services = () => {
  return (
    <>
      <SEO
        title="Услуги по разработке IT-компании Digital Devils"
        description="Ознакомьтесь с широким спектром услуг от IT-компании Digital Devils. Мы специализируемся на создании веб-сайтов, мобильных приложений, комплексных backend-систем, UX/UI дизайне и продвижении. Наши решения помогают бизнесу эффективно развиваться, внедряя современные технологии и индивидуальный подход к каждому проекту."
        canonical="https://digitaldevils.by/services"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <ServiceBlockFirst />
        <ServicesBlockSecond />
        <OurApproachBlock />
        <ServiceBlockFourth />
        <MainBlockFive />
      </BasicLayout>
    </>
  );
};

export default Services;

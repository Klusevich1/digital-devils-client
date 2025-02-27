import AboutBlockSecond from "@/components/AboutBlockSecond";
import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import AboutBlockFourth from "@/components/AboutBlockFourth";
import AboutBlockFirst from "@/components/AboutBlockFirst";
import Breadcrumbs from "@/components/Breadcrumbs";
import OurTeamBlock from "@/components/OurTeamBlock";
import CommentBlock from "@/components/CommentBlock";
import SEO, { ListItem } from "@/components/SEO";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "О нас", link: "/about" },
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
    name: "О нас",
    item: "https://digitaldevils.by/about",
  },
];

const about = () => {
  return (
    <>
      <SEO
        title="О компании Digital Devils | Лидер IT-решений"
        description="Digital Devils — команда профессионалов, специализирующаяся на разработке инновационных IT-решений. Мы создаем веб-сайты, мобильные приложения и комплексные системы, помогая бизнесу достигать амбициозных целей. Наш подход сочетает креативность, передовые технологии и полную вовлеченность в успех каждого клиента."
        canonical="https://digitaldevils.by/about"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <AboutBlockFirst />
        <AboutBlockSecond />
        <OurTeamBlock />
        <CommentBlock />
        <AboutBlockFourth />
      </BasicLayout>
    </>
  );
};

export default about;

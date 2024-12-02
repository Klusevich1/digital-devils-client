import OurApproachBlock from "@/components/OurApproachBlock";
import MainBlockSecond from "@/components/MainBlockSecond";
import React from "react";
import MainBlockFourth from "@/components/MainBlockFourth";
import MainBlockTenth from "@/components/MainBlockTenth";
import CommentBlock from "@/components/CommentBlock";

import avatar from "../../public/avatar-example.png";
import MainBlockThird from "@/components/MainBlockThird";
import { Article } from "@/types/AricleProps";
import MainBlockNinth from "@/components/MainBlockNinth";
import MainBlockFirst from "@/components/MainBlockFirst";
import MainBlockFive from "@/components/MainBlockFive";
import OurTeamBlock from "@/components/OurTeamBlock";
import BasicLayout from "@/layouts/BasicLayout";
import SEO from "@/components/SEO";

interface HomeProps {
  articles: Article[];
}

const Home: React.FC<HomeProps> = ({ articles }) => {
  return (
    <>
      <SEO
        title="Разработка сайтов в Минске | Создание сайтов под ключ"
        description="Создаем профессиональные сайты, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши клиенты оценят каждый клик. Доверяйте разработку экспертам и получите сайт, который работает на ваш успех!"
      />
      <BasicLayout>
        <MainBlockFirst />
        <MainBlockSecond />
        <MainBlockThird />
        <MainBlockFourth />
        <MainBlockFive />
        <OurTeamBlock />
        <CommentBlock />
        <OurApproachBlock />
        <MainBlockNinth articles={articles} title="Блог" />
        <MainBlockTenth />
      </BasicLayout>
    </>
  );
};

export async function getStaticProps() {
  const responseArticles = await fetch(
    `https://backend.digitaldevils.by/articles/random?size=4`
  );
  const articles: Article[] = await responseArticles.json();

  return {
    props: {
      articles,
    },
    revalidate: 24 * 60 * 60, // 1 день
  };
}

export default Home;

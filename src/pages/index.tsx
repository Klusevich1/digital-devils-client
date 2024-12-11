import React, { useEffect, useState } from "react";
import OurApproachBlock from "@/components/OurApproachBlock";
import MainBlockSecond from "@/components/MainBlockSecond";
import MainBlockFourth from "@/components/MainBlockFourth";
import MainBlockTenth from "@/components/MainBlockTenth";
import CommentBlock from "@/components/CommentBlock";
import MainBlockThird from "@/components/MainBlockThird";
import { Article } from "@/types/AricleProps";
import MainBlockNinth from "@/components/MainBlockNinth";
import MainBlockFirst from "@/components/MainBlockFirst";
import MainBlockFive from "@/components/MainBlockFive";
import OurTeamBlock from "@/components/OurTeamBlock";
import BasicLayout from "@/layouts/BasicLayout";
import SEO, { ListItem } from "@/components/SEO";
import TextSeoBlock from "@/components/TextSeoBlock";

const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/articles/random?size=4`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch articles: ${response.statusText}`);
        }

        const data: Article[] = await response.json();
        setArticles(data);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("Failed to load articles");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
      <SEO
        title="Разработка сайтов в Минске | Создание сайтов под ключ"
        description="Создаем профессиональные сайты, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши клиенты оценят каждый клик. Доверяйте разработку экспертам и получите сайт, который работает на ваш успех!"
        canonical="https://digitaldevils.by"
        productSchema={true}
        faqSchema={true}
      />
      <BasicLayout>
        <MainBlockFirst />
        <MainBlockSecond />
        <MainBlockThird />
        <MainBlockFourth />
        <MainBlockFive />
        <TextSeoBlock />
        <OurTeamBlock />
        <CommentBlock />
        <OurApproachBlock />
        {loading ? (
          <p className="text-[24px] font-medium mt-[30px] custom_container max-w-[1440px] mx-auto animate-bounce">Loading articles...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <MainBlockNinth articles={articles} title="Блог" />
        )}
        <MainBlockTenth />
      </BasicLayout>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import OurApproachBlock from "@/components/OurApproachBlock";
import MainBlockSecond from "@/components/MainBlockSecond";
import MainBlockFourth from "@/components/MainBlockFourth";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
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

  const data: DataItem[] = [
    {
      title: "Какой срок создания нового сайта с нуля?",
      description: (
        <p className="text-[18px] ">
          Срок изготовления несложного сайта по готовым шаблонам - от 2 дней.
          Этого времени достаточно для создания одностраничной продающей
          визитки, чтобы уже через 10-15 дней после публикации в интернете
          принесет первые заявки. Для разработки индивидуального дизайна
          потребуется больше времени, к тому же дополнительно нужно закладывать
          сроки на верстку и наполнение.
        </p>
      ),
    },
    {
      title: "Кто будет работать над разработкой моего web – сайта?",
      description: (
        <>
          <p className="text-[18px]">
            У нас трудится команда профессионалов, и каждый выполняет свои
            задачи:
          </p>
          <ul className="text-[18px]">
            <li>- Аккаунт-менеджер, выясняет цели и ожидания от сайта</li>
            <li>
              - SEO - специалист отвечает за оптимизацию, текстовое наполнение,
              подбор ключей и запросов, продвижение ресурса
            </li>
            <li>- Frontend-разработчики создают пользовательские интерфейсы</li>
            <li>
              - Backend-разработчики занимаются настройкой функциональной части
            </li>
            <li>
              - UX/UI дизайнеры отвечают за удобство пользования интерфейсом и
              визуальную привлекательность
            </li>
          </ul>
        </>
      ),
    },
    {
      title:
        "Можете ли вы помочь если нет технического задания на создание сайта?",
      description: (
        <p className="text-[18px] ">
          Мы предоставляем помощь в разработке ТЗ, включая сбор требований,
          формулирование спецификаций проекта.
        </p>
      ),
    },
    {
      title: "Сколько стоит сделать сайт в Беларуси?",
      description: (
        <>
          <p className="text-[18px] ">
            Единой цены на разработку веб-сайтов не существует. При расчете
            итоговой стоимости, мы учитываем множество факторов: сфера
            деятельности компании или предприятия, используемые платформы,
            сложность дизайна, техподдержки и дальнейшего обслуживания.
          </p>
          <br />
          <p className="text-[18px] ">
            Напишите или позвоните нам, чтобы обсудить с менеджером варианты
            реализации вашего проекта под конкретные задачи и потребности
            бизнеса. Ориентируясь на полученную информации, мы сможем
            подготовить коммерческое предложение и составить поэтапный план
            работ.
          </p>
        </>
      ),
    },
  ];

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/articles/random?size=4`
        );

        if (!response.ok) {
          console.error(`Failed to fetch articles: ${response.statusText}`);
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
        <MainBlockFive title={"Кейсы"} />
        <TextSeoBlock />
        <OurTeamBlock />
        <CommentBlock />
        <OurApproachBlock />
        {loading ? (
          <p className="text-[24px] font-medium mt-[30px] custom_container max-w-[1440px] mx-auto animate-bounce">
            Loading articles...
          </p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <MainBlockNinth articles={articles} title="Блог" />
        )}
        <MainBlockTenth data={data}/>
      </BasicLayout>
    </>
  );
};

export default Home;

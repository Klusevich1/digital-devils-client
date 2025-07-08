import React, { useState } from "react";
import BasicLayout from "../../layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types/AricleProps";
import Image from "next/image";
import NotFound from "../404";
import { useRouter } from "next/router";
import SEO, { ListItem } from "@/components/SEO";
import { GetServerSideProps } from "next";

interface BlogProps {
  initialArticles: Article[];
  totalPages: number;
  limit: number;
}

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Блог", link: "/blog" },
];

const Blog: React.FC<BlogProps> = ({ initialArticles, totalPages, limit }) => {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const [totalPagesLoad, setTotalPagesLoad] = useState<number>(totalPages);

  const handleFilterClick = (typeText: string) => {
    setActiveTab(typeText);
    setArticles([]); // Сбрасываем статьи
    setCurrentPage(1); // Сбрасываем текущую страницу
    setIsFiltered(true);
    loadMoreArticles(typeText, true); // Загружаем новые статьи с первой страницы
  };

  const loadMoreArticles = async (typeText: string, reset: boolean = false) => {
    if (!reset && currentPage >= totalPages) return; // Проверка на последнюю страницу

    setIsLoading(true);

    try {
      const nextPage = reset ? 1 : currentPage + 1; // Если это фильтрация, начинаем с первой страницы
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/articles?type=${typeText}&page=${nextPage}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();

      setTotalPagesLoad(Math.ceil(data.total / limit));
      setArticles((prevArticles) =>
        reset ? data.articles : [...prevArticles, ...data.articles]
      ); // Сброс или добавление статей
      setCurrentPage(nextPage);
    } catch (error) {
      console.error("Error loading more articles:", error);
    } finally {
      setIsLoading(false);
      setIsFiltered(false);
    }
  };

  const router = useRouter();
  if (router.isFallback) {
    return <NotFound />;
  }

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
      name: "Блог",
      item: "https://digitaldevils.by/blog",
    },
  ];

  return (
    <>
      <SEO
        title="Блог компании Digital Devils | Лидер IT-решений"
        description="Новости и статьи компании Digital Devils. Мы создаем веб-сайты, мобильные приложения и комплексные системы, помогая бизнесу достигать амбициозных целей. Наш подход сочетает креативность, передовые технологии и полную вовлеченность в успех каждого клиента."
        canonical="https://digitaldevils.by/blog"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="custom_container max-w-[1440px] mx-auto">
          <div className="flex md:flex-row flex-col md:items-end gap-[30px] justify-between sm:mb-[40px] mb-[30px]">
            <h1 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold">Блог</h1>
            <ul className="list-none flex flex-row flex-wrap gap-[15px]">
              <li
                className={`${
                  activeTab === "Дизайн"
                    ? "bg-blue_main text-white hover:text-white"
                    : "hover:text-blue_main"
                } h-fit text-[16px] font-medium bg-black_5 px-[10px] py-[11px] rounded-[20px] cursor-pointer transition-all`}
                onClick={() => handleFilterClick("Дизайн")}
              >
                Дизайн
              </li>
              <li
                className={`${
                  activeTab === "Разработка"
                    ? "bg-blue_main text-white hover:text-white"
                    : "hover:text-blue_main"
                } h-fit text-[16px] font-medium bg-black_5 px-[10px] py-[11px] rounded-[20px] cursor-pointer transition-all`}
                onClick={() => handleFilterClick("Разработка")}
              >
                Разработка
              </li>
              <li
                className={`${
                  activeTab === "Исследования"
                    ? "bg-blue_main text-white hover:text-white"
                    : "hover:text-blue_main"
                } h-fit text-[16px] font-medium bg-black_5 px-[10px] py-[11px] rounded-[20px] cursor-pointer transition-all`}
                onClick={() => handleFilterClick("Исследования")}
              >
                Исследования
              </li>
              <li
                className={`${
                  activeTab === "Motion"
                    ? "bg-blue_main text-white hover:text-white"
                    : "hover:text-blue_main"
                } h-fit text-[16px] font-medium bg-black_5 px-[10px] py-[11px] rounded-[20px] cursor-pointer transition-all`}
                onClick={() => handleFilterClick("Motion")}
              >
                Motion
              </li>
              <li
                className={`${
                  activeTab === "SEO"
                    ? "bg-blue_main text-white hover:text-white"
                    : "hover:text-blue_main"
                } h-fit text-[16px] font-medium bg-black_5 px-[10px] py-[11px] rounded-[20px] cursor-pointer transition-all`}
                onClick={() => handleFilterClick("SEO")}
              >
                SEO
              </li>
            </ul>
          </div>
          <div
            className={`min-h-[70vh] pb-[50px] grid gap-x-[40px] gap-y-[30px]
        sm:grid-cols-[repeat(auto-fit,_minmax(413px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(340px,_1fr))] transition-opacity duration-200 ${
          isFiltered ? "opacity-0" : "opacity-100"
        }`}
          >
            {!isLoading && articles.length === 0 ? (
              <p>Данного типа статьи не найдены</p>
            ) : (
              articles.map((art, index) => (
                <div key={index} className="flex flex-col items-center">
                  <ArticleCard art={art} maxW="max-w-[640px]"/>
                </div>
              ))
            )}
          </div>

          {currentPage < totalPagesLoad && articles.length > 0 && (
            <div className="flex justify-center mb-[60px] sm:mb-[50px]">
              <button
                onClick={() => loadMoreArticles(activeTab)}
                className="min-w-[227px] flex flex-row items-center justify-center gap-[10px] py-3 px-10 text-black border-[1px] border-solid border-back rounded-[30px] hover:bg-blue_main hover:text-white transition-all"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all duration-0 ${
                      isLoading && "animate-spin"
                    }`}
                  >
                    <path
                      d="M15.1047 1.19189V4.74389H11.5527"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.895754 14.8079L0.895754 11.2559L4.44775 11.2559"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.600098 7.99985C0.600098 6.43713 1.09482 4.91451 2.01337 3.65024C2.93192 2.38597 4.22713 1.44494 5.71337 0.962035C7.19962 0.479126 8.80058 0.479126 10.2868 0.962036C11.7731 1.44495 13.0683 2.38597 13.9868 3.65025"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15.3999 8C15.3999 9.56273 14.9052 11.0853 13.9866 12.3496C13.0681 13.6139 11.7729 14.5549 10.2866 15.0378C8.80039 15.5207 7.19942 15.5207 5.71318 15.0378C4.22694 14.5549 2.93173 13.6139 2.01318 12.3496"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all duration-0 ${
                      isLoading && "animate-spin"
                    }`}
                  >
                    <path
                      d="M15.1047 1.19189V4.74389H11.5527"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.895754 14.8079L0.895754 11.2559L4.44775 11.2559"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.600098 7.99985C0.600098 6.43713 1.09482 4.91451 2.01337 3.65024C2.93192 2.38597 4.22713 1.44494 5.71337 0.962035C7.19962 0.479126 8.80058 0.479126 10.2868 0.962036C11.7731 1.44495 13.0683 2.38597 13.9868 3.65025"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15.3999 8C15.3999 9.56273 14.9052 11.0853 13.9866 12.3496C13.0681 13.6139 11.7729 14.5549 10.2866 15.0378C8.80039 15.5207 7.19942 15.5207 5.71318 15.0378C4.22694 14.5549 2.93173 13.6139 2.01318 12.3496"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                <span className="text-[18px] font-medium transition-all duration-0">
                  Показать ещё
                </span>
              </button>
            </div>
          )}
        </div>
      </BasicLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const limit = 12;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/articles?type=&page=1&limit=12`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      props: {
        initialArticles: data.articles,
        totalPages: Math.ceil(data.total / limit),
        limit,
      },
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      props: {
        initialArticles: [],
        totalPages: 0,
        limit: 12,
      },
    };
  }
}

export default Blog;

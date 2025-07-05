import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GoArrowLeft } from "react-icons/go";
import { Article } from "@/types/AricleProps";
import { MdOutlinePhotoCamera } from "react-icons/md";
import ArticleList from "@/components/ArticleList";
import ArticleBody from "@/components/ArticleBody";
import Breadcrumbs from "@/components/Breadcrumbs";
import MainBlockNinth from "@/components/MainBlockNinth";
import { useRouter } from "next/router";
import SEO, { ListItem } from "@/components/SEO";
import { IKImage } from "imagekitio-next";
import NotFound from "./404";
import BasicLayout from "@/layouts/BasicLayout";

interface ArticlePageProps {
  article: Article;
  articles: Article[];
  randomArt: Article;
}

const ArticlePage: React.FC<ArticlePageProps> = ({
  article,
  articles,
  randomArt,
}) => {
  const breadcrumbs = [
    { name: "Главная", link: "/" },
    { name: "Блог", link: "/blog" },
    { name: "Статья", link: `/blog/${article.slug}` },
  ];
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  useEffect(() => {
    setTimeout(() => {
      setImageLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    const linkArticleDiv = document.getElementById("link-article");

    if (linkArticleDiv) {
      const linkContent = `
        <div class="flex lg:flex-row flex-col items-center lg:my-[30px] my-[20px] lg:px-[55px] lg:py-[40px] p-[20px] bg-black_5 rounded-[20px] justify-between lg:gap-[45px] gap-[15px]">
            <p class="font-bold text-[22px] lg:text-[28px]">${randomArt.title}</p>
            <a href='/blog/${randomArt.slug}' class="lg:w-fit w-full">
              <button class="order-3 flex lg:w-fit w-full">
                <div class="lg:w-[225px] w-full lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center bg-blue_main rounded-full text-white">
                  Прочитать статью
                </div>
                <div class="ms-[-10px] lg:text-[28px] text-[24px] lg:size-[60px] size-[50px] min-w-[50px] flex justify-center items-center bg-blue_main rounded-full text-white">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 21L21 7" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.625 7H21V18.375" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </button>
            </a>
        </div>
      `;

      linkArticleDiv.innerHTML = linkContent;
    }
  }, []);
  const router = useRouter();

  if (!router.isFallback && !article && !articles && !randomArt) {
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
    {
      "@type": "ListItem",
      position: 3,
      name: article.title,
      item: `https://digitaldevils.by${router.asPath}`,
    },
  ];

  return (
    <>
      <SEO
        title="Сама статья"
        description="Описание самой статьи"
        canonical={`https://digitaldevils.by${router.asPath}`}
        breadcrumbsSchema={breadcrumbsSchema}
        article={article}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="custom_container max-w-[1440px] mx-auto flex flex-col gap-[30px]">
          <div className="flex lg:flex-row flex-col-reverse lg:gap-[43px] gap-[20px] justify-between">
            <div className={`lg:w-[40%] ${imageLoading ? "opacity-0" : "opacity-100"} transition-all`}>
              {/* <Image
                src={article.image}
                alt={article.title}
                width={527}
                height={339}
                priority
                className="w-[100%] lg:h-[339px] lg:w-[527px] rounded-[40px] object-cover"
              /> */}
              <IKImage
                urlEndpoint={urlEndpoint}
                path={article.image}
                width={527}
                height={339}
                alt={article.title}
                className="w-[100%] lg:h-[339px] lg:w-[527px] rounded-[40px] object-cover"
                transformation={[{ quality: "95" }]}
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-row items-center gap-[30px]">
                <a href={"/blog"}>
                  <span className="flex flex-row items-center gap-[5px] p-[10px] bg-black_5 rounded-[20px] text-[16px] font-medium">
                    <GoArrowLeft width={22} height={22} /> Все статьи
                  </span>
                </a>
                <span className="sm:block hidden w-fit px-[10px] py-[6px] border-blue_main rounded-[14px] border-[1px] text-[14px] font-medium">
                  {article.type}
                </span>
                <span className="lg:text-[16px] text-[14px] font-medium text-black_80">
                  {article.date}
                </span>
                <span className="lg:text-[16px] text-[14px] font-medium text-black_80">
                  {article.readingTime}
                </span>
              </div>
              <p className="md:text-[40px] text-[32px] font-bold lg:my-[30px] my-[20px]">
                {article.title}
              </p>
              <div className="flex flex-row items-center gap-[20px]">
                {article.author?.image ? (
                  <Image
                    className="rounded-full"
                    width={60}
                    height={60}
                    src={article.author?.image}
                    alt={article.author?.name}
                  />
                ) : (
                  <MdOutlinePhotoCamera />
                )}
                <div className="flex flex-col gap-[5px]">
                  <span className="text-[18px] font-medium">
                    {article.author?.name}
                  </span>
                  <span className="text-[16px] font-medium text-black_80">
                    {article.author?.position}
                  </span>
                </div>
              </div>
              <span className="sm:hidden block w-fit px-[10px] py-[6px] border-blue_main rounded-[14px] border-[1px] text-[14px] font-medium mt-[20px]">
                {article.type}
              </span>
            </div>
          </div>
          <ArticleList article={article} />
          <ArticleBody article={article} />
        </div>
        <MainBlockNinth articles={articles} title="Читайте также" />
      </BasicLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/articles/all`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch articles. Status: ${response.status}`);
    }

    const articles: Article[] = await response.json();

    if (!articles || articles.length === 0) {
      console.error("No articles found for generating paths.");
      return { paths: [], fallback: false };
    }

    const paths = articles.map((article) => ({
      params: { slug: article.slug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching articles for paths:", error);
    return {
      paths: [],
      fallback: false, // Или false, если вы хотите явно показывать 404
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params || {};

  if (!slug) {
    console.error("Slug is undefined.");
    return {
      notFound: true,
    };
  }

  try {
    const responseArticle = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/articles/${slug}`
    );
    if (!responseArticle.ok) {
      throw new Error(
        `Failed to fetch article. Status: ${responseArticle.status}`
      );
    }

    const article = await responseArticle.json();

    const responseArticles = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/articles/random?slug=${slug}&size=4`
    );
    const articles: Article[] = await responseArticles.json();

    const responseRandom = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/articles/random?slug=${slug}&size=1`
    );
    const randomArtData = await responseRandom.json();
    const randomArt = randomArtData[0];

    if (!article) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article,
        articles,
        randomArt,
      },
    };
  } catch (error) {
    console.error("Error fetching article or related data:", error);
    return {
      notFound: true,
    };
  }
};

export default ArticlePage;

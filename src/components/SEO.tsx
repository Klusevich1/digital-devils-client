import { FC } from "react";
import Head from "next/head";
import { Article } from "@/types/AricleProps";
import Script from "next/script";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  breadcrumbsSchema?: ListItem[];
  productSchema?: boolean;
  faqSchema?: boolean;
  article?: Article;
};

export interface ListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

const SEO: FC<SEOProps> = ({
  title,
  description,
  canonical,
  breadcrumbsSchema,
  productSchema,
  faqSchema,
  article,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonical} />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DigitalDevils",
            url: "https://digitaldevils.by",
            logo: '/resources/logo-header.png',
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "DigitalDevils",
            url: "https://digitaldevils.by",
          }),
        }}
      />
      {productSchema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Разработка сайтов",
              image: '/resources/logo-header.png',
              offers: {
                "@type": "Offer",
                url: "https://digitaldevils.by",
                priceCurrency: "BYN",
                price: "69",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "5",
              },
            }),
          }}
        />
      )}
      {breadcrumbsSchema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbsSchema,
            }),
          }}
        />
      )}
      {faqSchema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Какой срок создания нового сайта с нуля?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Срок изготовления несложного сайта по готовым шаблонам - от 2 дней. Этого времени достаточно для создания одностраничной продающей визитки, чтобы уже через 10-15 дней после публикации в интернете принесет первые заявки. Для разработки индивидуального дизайна потребуется больше времени, к тому же дополнительно нужно закладывать сроки на верстку и наполнение.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Кто будет работать над разработкой моего web – сайта?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "У нас трудится команда профессионалов, и каждый выполняет свои задачи:<br>Аккаунт-менеджер, выясняет цели и ожидания от сайта.<br>SEO - специалист отвечает за оптимизацию, текстовое наполнение, подбор ключей и запросов, продвижение ресурса.<br>Frontend специалисты создают пользовательские интерфейсы.<br>Backend занимаются настройкой функциональной части.<br>Дизайнеры и арт-директор отвечают за дизайнерское и визуальное наполнение и т.д.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Можете ли вы помочь если нет технического задания на создание сайта?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Да, предоставляем помощь в разработке ТЗ, включая сбор требований, формулирование спецификаций проекта.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Сколько стоит сделать сайт в Беларуси?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Единой цены на разработку веб-сайтов не существует. При расчете итоговой стоимости, мы учитываем множество факторов: сфера деятельности компании или предприятия, используемые платформы, сложность дизайна, техподдержки и дальнейшего обслуживания.<br>Напишите или позвоните нам, чтобы обсудить с менеджером варианты реализации вашего проекта под конкретные задачи и потребности бизнеса. Ориентируясь на полученную информации, мы сможем подготовить коммерческое предложение и составить поэтапный план работ.",
                  },
                },
              ],
            }),
          }}
        />
      )}
      {article && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: article.title,
              image: article.image,
              author: {
                "@type": "Person",
                name: article.author.name,
              },
              publisher: {
                "@type": "Organization",
                name: "DigitalDevils",
                logo: {
                  "@type": "ImageObject",
                  url: '/resources/logo-header.png',
                },
              },
              datePublished: article.publishedDate,
            }),
          }}
        />
      )}
    </Head>
  );
};

export default SEO;

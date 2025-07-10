import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
} from "html-react-parser";
import { useEffect, useMemo, useState } from "react";
import QuizBlock from "@/components/QuizBlock";
import MainBlockFourth from "./MainBlockFourth";
import Image from "next/image";

const quizQuestions = [
  {
    title: "Какой тип сайта вам нужен?",
    options: [
      "Лендинг / одностраничный сайт",
      "Корпоративный сайт",
      "Интернет-магазин",
      "Сложный портал / SaaS",
      "Ещё не определился",
    ],
  },
  {
    title: "Какие задачи вы хотите решить с помощью сайта?",
    options: [
      "Увеличить поток клиентов / заявок",
      "Автоматизировать процессы / CRM",
      "Сделать продающий сайт для рекламы",
      "Просто “чтобы был сайт” / визитка",
    ],
  },
  {
    title: "Когда вы планируете запуск?",
    options: [
      "Уже готовы начать",
      "В ближайшие 2 недели",
      "В течение месяца",
      "Через 1–2 месяца",
      "Пока собираю информацию",
    ],
  },
  {
    title: "У вас есть техническое задание, структура или дизайн?",
    options: [
      "Есть ТЗ или прототип",
      "Есть структура",
      "Есть только идея",
      "Нужна помощь с нуля",
    ],
  },
  {
    title: "Где вам удобнее его получить?",
    options: ["Telegram", "Viber", "WhatsApp", "Звонок"],
  },
];

interface Props {
  html: string;
  page: string;
}

const ArticleHTMLRenderer: React.FC<Props> = ({ html, page }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        const className = domNode.attribs?.class;

        if (domNode.name === "img") {
          const src = domNode.attribs?.src;
          const alt = domNode.attribs?.alt || "";
          const width = parseInt(domNode.attribs?.width) || 800;
          const height = parseInt(domNode.attribs?.height) || 600;

          return (
            <div className={`${src.includes('small') ? 'lg:hidden block' : 'lg:block hidden'} lg:min-w-[50%] w-full`}>
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          );
        }

        // Вставка викторины
        if (domNode.name === "div" && className === "quiz-block") {
          return (
            <QuizBlock
              quizQuestions={quizQuestions}
              title="Забронируйте скидка 10% на разработку сайта"
              description="Ответьте на 5 простых вопросов — и получите персональную скидку 10% на разработку своего будущего сайта."
              padding="md:pt-[20px] pt-[10px] md:pb-[10px] pb-0"
              page={page}
            />
          );
        }

        // Вставка консультационного блока
        if (domNode.name === "div" && className === "consultation-block") {
          return (
            <MainBlockFourth
              title="Нужна консультация при составлении ТЗ?"
              description=""
              margin="md:!my-[30px] my-[20px]"
            />
          );
        }
      }
    },
  };

  const parsedContent = useMemo(() => parse(html, options), [html]);

  return <div className="w-full">{parsedContent}</div>;
};

export default ArticleHTMLRenderer;

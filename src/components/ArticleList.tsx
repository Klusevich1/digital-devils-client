import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { Article } from "@/types/AricleProps";
import Link from "next/link";
import React from "react";

interface ArticleListProps {
  paragraphAnchors: { id: string; text: string }[];
}

const ArticleList: React.FC<ArticleListProps> = ({ paragraphAnchors }) => {
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="max-w-[1440px] custom_container lg:w-[60%] w-full py-[30px]">
      <ul className="flex flex-col gap-[10px]">
        {paragraphAnchors.map((par, index) => (
          <li className="text-[18px] text-blue_90" key={index}>
            <Link
              href={`#${par.id}`}
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.querySelector(`#${par.id}`);
                if (targetElement) {
                  const offset = 100;
                  const elementPosition =
                    targetElement.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.scrollY - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {par.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;

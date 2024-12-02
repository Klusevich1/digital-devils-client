import { Article } from '@/types/AricleProps';
import Link from 'next/link';
import React from 'react';

interface ArticleListProps {
    article: Article;
}

const ArticleList: React.FC<ArticleListProps> = ({ article }) => {
    return (
        <div className="flex justify-center">
            <ul className="md:w-[70%] w-full flex flex-col gap-[10px]">
                {article.paragraphs.map((par, index) => (
                    <li className="text-[18px] text-blue_90" key={index}>
                        <Link
                            href={`#${par.link}`}
                            scroll={false}
                            onClick={(e) => {
                                e.preventDefault();
                                const targetElement = document.querySelector(`#${par.link}`);
                                if (targetElement) {
                                    const offset = 100;
                                    const elementPosition =
                                        targetElement.getBoundingClientRect().top;
                                    const offsetPosition =
                                        elementPosition + window.scrollY - offset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: 'smooth',
                                    });
                                }
                            }}
                        >
                            {par.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;

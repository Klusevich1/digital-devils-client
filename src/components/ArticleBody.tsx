import { Article } from '@/types/AricleProps';
import React from 'react';

interface ArticleBodyProps {
    article: Article;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ article }) => {
    return (
        <div className="flex justify-center">
            <div className="md:w-[70%] w-full">
                <p
                    className="text-[18px] font-medium mb-[20px]"
                    dangerouslySetInnerHTML={{ __html: article.description }}
                ></p>
                <div className="flex flex-col gap-[20px]">
                    {article.paragraphs.map((par, index) => (
                        <div key={index}>
                            <h2
                                id={par.link}
                                className="lg:text-[32px] text-[24px] font-bold mb-[10px]"
                            >
                                {par.title}
                            </h2>
                            <span
                                className="text-[18px] font-medium"
                                dangerouslySetInnerHTML={{ __html: par.text }}
                            ></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticleBody;

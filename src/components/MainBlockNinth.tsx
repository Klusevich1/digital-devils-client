import { Article } from '@/types/AricleProps';
import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';

interface MainBlockNinthProps {
    articles: Article[];
    title: string;
}

const MainBlockNinth: React.FC<MainBlockNinthProps> = ({ articles, title }) => {
    const [visibleArticles, setVisibleArticles] = useState<Article[]>([]);

    const updateArticles = () => {
        const width = window.innerWidth;
        if (width > 1438) {
            setVisibleArticles(articles.slice(0, 3)); // 4 статьи для больших экранов
        } else {
            setVisibleArticles(articles.slice(0, 4)); // 3 статьи для маленьких экранов
        }
    };

    useEffect(() => {
        updateArticles(); // Устанавливаем начальное состояние
        window.addEventListener('resize', updateArticles); // Обновляем при изменении размера окна
        return () => {
            window.removeEventListener('resize', updateArticles); // Убираем обработчик
        };
    }, [articles]);

    return (
        <div className="max-w-[1440px] mx-auto custom_container my-[50px] sm:my-[60px]">
            <h2 className="sm:text-[60px] text-[32px] font-bold sm:mb-[40px] mb-[30px]">
                {title}
            </h2>
            <div
                className="grid gap-x-[40px] gap-y-[30px]
        sm:grid-cols-[repeat(auto-fit,_minmax(413px,_1fr))] grid-cols-1"
            >
                {visibleArticles.map((art, index) => (
                    <div key={index} className=" flex flex-col items-center">
                        <ArticleCard art={art} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainBlockNinth;

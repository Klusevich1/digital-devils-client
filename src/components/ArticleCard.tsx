import { Article } from "@/types/AricleProps";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ArticleProps {
  art: Article;
}

const ArticleCard: React.FC<ArticleProps> = ({ art }) => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  useEffect(() => {
    setTimeout(() => {
      setImageLoading(false);
    }, 100);
  }, []);

  return (
    <div className="flex flex-col gap-[10px] max-w-[413px]">
      <div>
        {/* <a href={`/blog/${art.slug}`} className={`${imageLoading ? 'opacity-0' : 'opacity-100'} transition-all`}> */}
          <Image
            src={`/resources${art.image}`}
            alt={art.title}
            width={440}
            height={270}
            className="sm:h-[275px] h-full w-[413px] object-cover sm:rounded-[40px] rounded-[30px]"
          />
          {/* <IKImage
            urlEndpoint={urlEndpoint}
            path={art.image}
            width={413}
            height={270}
            alt={art.title}
            className="sm:h-[275px] h-[228px] sm:w-[413px] w-[340px] object-cover sm:rounded-[40px] rounded-[30px]"
            transformation={[{ quality: "95" }]}
          /> */}
        {/* </a> */}
      </div>
      <div className="flex flex-col gap-[10px]">
        <span className="w-fit px-[10px] py-[6px] border-blue_main rounded-[14px] border-[1px] text-[14px]">
          {art.type}
        </span>
        {/* <a href={`/blog/${art.slug}`}> */}
          <p className="lg:text-[18px] text-[18px] font-bold">{art.title}</p>
        {/* </a> */}
        <div className="flex flex-row gap-[20px]">
          <span className="text-[#7C7C7C] text-[14px] font-medium">
            {art.date}
          </span>
          <span className="text-[#7C7C7C] text-[14px] font-medium">
            {art.readingTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

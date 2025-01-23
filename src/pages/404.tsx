import React from "react";
import { LayoutWithSmallFooter } from "@/layouts/LayoutWithSmallFooter";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 Digital Devils"
        description="Страница была удалена или ее никогда не было."
      />
      <LayoutWithSmallFooter>
        <StandardMarginsLayout
          children={
            <div className="flex w-full text-center items-center justify-center flex-col h-[53.7vh]">
              <h1 className="text-[18px] md:text-[32px] font-bold">
                Мы уже работаем над устранением проблемы
              </h1>
              <h2 className="text-[60px] lg:text-[120px] xl:text-[160px] font-bold">
                404
              </h2>
              <p className="text-[16px] md:text-[24px]">
                Попробуйте обновить страницу через некоторое время либо
                вернуться на главную
              </p>
              <h2 className="text-[16px] md:text-[24px] font-bold">
                Извините за временные неудобства
              </h2>
              <a href="/">
                <button className="bg-blue_main rounded-full w-[227px] text-center text-white px-4 py-2 hover:bg-blue-700 mx-8 mt-8">
                  На Главную
                </button>
              </a>
            </div>
          }
        />
      </LayoutWithSmallFooter>
    </>
  );
};

export default NotFound;

import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';

const MainBlockFourth: React.FC = () => {
    return (
        <StandardMarginsLayout styles="text-white bg-black sm:py-[60px] py-[50px] mt-[50px] sm:mt-[60px]" children={
            <>
                <h1 className="font-bold text-[32px] max-w-[764px] lg:text-[60px] mb-[20px]">Eсть идеи для
                    проекта?</h1>
                <p className="text-[18px] max-w-[764px] md:text-[24px] mb-[20px]">Вас бесплатно проконсультирует
                    web-разработчик со
                    стажем работы 5 лет</p>
                <a className="order-3 flex transition-all md:m-0 mt-[20px]" href="/application">
                    <div
                        className="lg:w-[319px] w-[301px] lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center bg-blue_main rounded-full text-white">
                        Бесплатная консультация
                    </div>
                    <div
                        className="ms-[-10px] lg:text-[28px] text-[24px] lg:size-[60px] size-[50px] flex justify-center items-center  bg-blue_main rounded-full text-white">
                        <GoArrowUpRight />
                    </div>
                </a>
            </>
        } />
    );
};

export default MainBlockFourth;
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';

const ServiceBlockFirst: React.FC = () => {
    return (
        <StandardMarginsLayout children={
            <>
                <div className="flex flex-col">
                    <p className="md:order-1 order-2 md:text-[22px] text-[16px]">
                        [ Мы помогаем нашим клиентам превзойти конкурентов - узнайте, как! ]
                    </p>
                    <h1 className="md:order-2 order-1 xl:text-[60px] lg:text-[45px] text-[32px] font-bold mt-[20px] mb-[10px] md:mb-[30px]">
                        Digital Devils - выбор тех, кто заботится о пользователях своего проекта
                    </h1>
                    <button className="order-3 flex transition-all md:m-0 mt-[20px]">
                        <div
                            className="lg:w-[319px] w-[301px] lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center bg-blue_main rounded-full text-white">
                            Бесплатная консультация
                        </div>
                        <div
                            className="ms-[-10px] lg:text-[28px] text-[24px] lg:size-[60px] size-[50px] flex justify-center items-center  bg-blue_main rounded-full text-white">
                            <GoArrowUpRight />
                        </div>
                    </button>
                </div>
            </>
        }>
        </StandardMarginsLayout>
    );
};

export default ServiceBlockFirst;
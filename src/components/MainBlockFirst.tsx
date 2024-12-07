import React from 'react';
import SmallMainBlockCard from '@/components/SmallMainBlockCard';
import { GoArrowUpRight } from 'react-icons/go';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';

const MainBlockFirst: React.FC = () => {
    return (
        <>
            <StandardMarginsLayout styles="mt-[20px] sm:mt-[30px] mb-[60px]" children={
                <>
                    <h1 className="font-bold text-[40px] md:text-[50px] lg:text-[75px] xl:text-[90px]">Ваша команда
                        по разработке <span className="text-blue_main ">современных сайтов</span> любой
                        сложности</h1>
                    <p className="text-[24px] mt-[30px]">Реализуем проекты под ключ с учетом потребностей и пожеланий
                        клиента</p>
                    <a className="order-3 flex transition-all mt-[30px] mb-[40px]" href="/application">
                        <div
                            className="lg:w-[319px] w-[301px] lg:text-[22px] text-[18px] lg:py-[15px] py-[12px] text-center bg-blue_main rounded-full text-white">
                            Бесплатная консультация
                        </div>
                        <div
                            className="ms-[-10px] lg:text-[28px] text-[24px] lg:size-[60px] size-[50px] flex justify-center items-center  bg-blue_main rounded-full text-white">
                            <GoArrowUpRight />
                        </div>
                    </a>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] justify-between lg:flex">
                        <SmallMainBlockCard title="10 из 10"
                                            description="наших проектов выполняются в оговорённый срок" />
                        <SmallMainBlockCard title="5+"
                                            description="лет разрабатываем успешные сайты для вашего бизнеса" />
                        <SmallMainBlockCard title="100%"
                                            description="уникальность - с нами вы не повторяете за конкурентами" />
                        <SmallMainBlockCard title="ТОП 1"
                                            description="сайты нашей разработки любят поисковые системы" />
                    </div>
                </>
            } />
            <div className="w-full mx-auto max-w-[1440px] sm:px-[60px] px-[0px]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-[0px] sm:rounded-[40px] mt-[60px] w-full shadow-lg"
                >
                    <source src="/main.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
        </>
    );
};

export default MainBlockFirst;
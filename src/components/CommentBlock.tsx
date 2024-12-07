import React, { useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import StandardMarginsLayout from '@/layouts/StandardMarginsLayout';
import avatar from '../../public/avatar-example.png';
import { Navigation, Pagination } from 'swiper/modules';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import {GoArrowLeft, GoArrowRight} from "react-icons/go";

interface Review {
    avatar: StaticImageData;
    name: string;
    jobTitle: string;
    reviewText: string;
}

const reviewsData = [
    {
        avatar: avatar,
        name: 'Олег Симаков',
        jobTitle: 'Заместитель директора по маркетингу и продажам “TopTyre”',
        reviewText: 'Ребята проделали огромную работу по созданию сайта с нуля. Очень понравился отлаженный буквально до автоматизма процесс взаимодействия: от обсуждения деталей и нюансов заказа до верстки и передачи готового ресурса владельцу. Дизайнеры очень креативные, клиента понимают буквально с полуслова. Используют адаптивные технологии, уделяют внимание безопасности. В отличие от многих других веб-студий в Минске не гнут цену за свои услуги.',
    },
    {
        avatar: avatar,
        name: 'Мария Петрова',
        jobTitle: 'Разработчик',
        reviewText: 'Изначально обратился в это агентство за консультацией по аудиту и анализу юзабилити. На все вопросы ответили абсолютно бесплатно, предложили несколько вариантов будущего сотрудничества. В итоге мною было принято решение не реанимировать существующий лендинг, а заказать создание нового сайта. При обсуждении менеджеры все разложили по полочкам, объяснили в чем отличия разных видов CMS и важности продвижения. Специалисты отлично разбираются в своем деле. Советую.',
    },
    {
        avatar: avatar,
        name: 'Александр Смирнов',
        jobTitle: 'Дизайнер',
        reviewText: 'Заказывала создание интернет-магазина с нуля на WordPress с возможностью оплаты через сайт, каталогом товаров, интеграцией с нашей CRM-системой, блогом, обратной связью, онлайн-чатом и приемом заявок. Разделом с информацией о бренде и контактами. Да, было непросто, но команда агентства справилась со всеми запросами. Сайт получился очень красивым. Корректно работает на ПК и мобильных устройствах. Думаю, что в дальнейшем, при развитии и масштабировании бизнеса понадобятся дополнительные доработки, поэтому обязательно буду обращаться к вам еще.',
    },
];

const CommentBlock: React.FC = () => {
    const swiperRef = useRef<any>(null);

    return (
        <StandardMarginsLayout
            styles="mt-[50px] sm:mt-[60px] py-[50px] sm:py-[60px] bg-black text-white comment-block"
            children={
                <>
                    <div className="relative w-full">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            grabCursor={true}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Navigation, Pagination]}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            pagination={{
                                clickable: true,
                                el: '.custom-pagination',
                            }}
                            className="relative"
                        >
                            {reviewsData.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex-col justify-between lg:flex-row w-full flex-shrink-0 gap-4 h-auto  flex bg-black text-white">
                                        <div className="flex w-full max-w-[340px]">
                                            <Image
                                                src={review.avatar}
                                                alt="avatar"
                                                className="object-cover size-[72px] rounded-full me-[20px]"
                                            />
                                            <div className="max-w-[248px] w-full">
                                                <h3 className="text-[18px] xl:text-[22px] font-bold">{review.name}</h3>
                                                <p className="text-[16px] xl:text-[18px]">{review.jobTitle}</p>
                                            </div>
                                        </div>
                                        <div className="max-w-[868px]">
                                            <p className="max-h-auto overflow-hidden cursor-pointer text-[18px] xl:text-[28px]">
                                                {review.reviewText}
                                            </p>
                                            <button
                                                className="text-[18px] border-b hover:text-blue-600 duration-300 hover:border-b-blue-600 mt-[20px]"
                                            >
                                                Весь отзыв
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Кастомные точки */}
                        <div className="custom-pagination relative bottom-[34px] z-20 flex lg:hidden justify-end items-center gap-2 mt-4"></div>

                        <div className="lg:flex hidden justify-end my-4 w-[160px]">
                            <button
                                className="swiper-button-prev me-3 bg-back rounded-full w-[70px]"
                                style={{ bottom: 0, top: 'auto', width: 70, height: 70 }}
                            >
                                <GoArrowLeft className="text-[32px] text-white" style={{ width: 32, height: 32 }} />
                            </button>
                            <button
                                className="swiper-button-next bg-back rounded-full"
                                style={{ left: 100, bottom: 0, top: 'auto', width: 70, height: 70 }}
                            >
                                <GoArrowRight className="text-[32px] text-white" style={{ width: 32, height: 32 }} />
                            </button>
                        </div>
                    </div>
                </>
            }
        />
    );
};

export default CommentBlock;

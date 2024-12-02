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
        reviewText:
            'Наши UX/UI-дизайнеры создают привлекательные мобильные и веб-интерфейсы, которые обеспечивают устойчивое вовлечение пользователей. Мы следуем современным принципам и тенденциям дизайна, чтобы ваше приложение выглядело актуально...',
    },
    {
        avatar: avatar,
        name: 'Мария Петрова',
        jobTitle: 'Разработчик',
        reviewText: 'Очень профессиональный подход, всегда все делается в срок. Рекомендую!',
    },
    {
        avatar: avatar,
        name: 'Александр Смирнов',
        jobTitle: 'Дизайнер',
        reviewText: 'Работаем уже несколько лет и продолжаем сотрудничать. Все вопросы решаются оперативно!',
    },
];

const CommentBlock: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState<Review | null>(null);
    const swiperRef = useRef<any>(null);

    const openModal = (review: Review) => {
        setSelectedReview(review);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

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
                                    <div className="flex-col lg:flex-row w-full flex-shrink-0 gap-4 lg:h-[300px] h-auto xl:h-[380px] flex bg-black text-white">
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
                                        <div>
                                            <p className="max-h-auto overflow-hidden cursor-pointer text-[18px] xl:text-[28px]">
                                                {review.reviewText}
                                            </p>
                                            <button
                                                className="text-[18px] border-b hover:text-blue-600 duration-300 hover:border-b-blue-600 mt-[20px]"
                                                onClick={() => openModal(review)}
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
                                <IoArrowBack className="text-[32px] text-white" style={{ width: 32, height: 32 }} />
                            </button>
                            <button
                                className="swiper-button-next bg-back rounded-full"
                                style={{ left: 100, bottom: 0, top: 'auto', width: 70, height: 70 }}
                            >
                                <IoArrowForward className="text-[32px] text-white" style={{ width: 32, height: 32 }} />
                            </button>
                        </div>

                        {isModalOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="bg-black max-w-[1010px] text-white relative p-[40px] rounded-lg w-full">
                                    <button onClick={closeModal} className="absolute top-[30px] right-[40px] text-white text-[32px]">
                                        &times;
                                    </button>
                                    {selectedReview && (
                                        <div>
                                            <div className="flex w-full">
                                                <Image
                                                    src={selectedReview.avatar}
                                                    alt="avatar"
                                                    className="object-cover size-[72px] me-[20px]"
                                                />
                                                <div className="max-w-[248px] w-full">
                                                    <h3 className="text-[18px] xl:text-[22px] font-bold">
                                                        {selectedReview.name}
                                                    </h3>
                                                    <p className="text-[16px] xl:text-[18px]">{selectedReview.jobTitle}</p>
                                                </div>
                                            </div>
                                            <p className="mt-4">{selectedReview.reviewText}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </>
            }
        />
    );
};

export default CommentBlock;

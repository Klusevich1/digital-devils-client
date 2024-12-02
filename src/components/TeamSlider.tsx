import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';


interface TeamMember {
    imageUrl: StaticImageData;
    name: string;
    position: string;
}

interface TeamSliderProps {
    members: TeamMember[];
}

const TeamSlider: React.FC<TeamSliderProps> = ({ members }) => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="relative w-full ">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="flex justify-between w-full"
            >
                {members.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center text-center 2xl:p-4 ">
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                className="size-[180px] 2xl:size-[217px] rounded-full object-cover mb-4"
                            />
                            <h3 className="text-[18] font-bold">{member.name}</h3>
                            <p className="text-[18]">{member.position}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hidden xl:block absolute top-[-125px]  right-4 z-10 space-x-2">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className=""
                >
                    <FaArrowLeft className="size-[32px]" />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className=""
                >
                    <FaArrowRight className="size-[32px]" />
                </button>
            </div>
        </div>
    );
};

export default TeamSlider;

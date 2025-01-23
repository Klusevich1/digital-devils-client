import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import {GoArrowLeft, GoArrowRight} from "react-icons/go";


interface TeamMember {
    imageUrl: string;
    name: string;
    position: string;
}

interface TeamSliderProps {
    members: TeamMember[];
}

const TeamSlider: React.FC<TeamSliderProps> = ({ members }) => {
    const swiperTeamRef = useRef<any>(null);

    return (
        <div className="relative w-full team-block">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={16}
                pagination={{
                    clickable: true,
                    el: '.custom-team-pagination',
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                onSwiper={(swiper) => (swiperTeamRef.current = swiper)}
                className="flex justify-between w-full"
            >
                {members.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center text-center 2xl:p-4 ">
                            <Image
                                src={member.imageUrl}
                                alt={member.name}
                                width={210}
                                height={210}
                                className="size-[180px] 2xl:size-[217px] rounded-full object-cover mb-4"
                            />
                            <p className="text-[18] font-bold">{member.name}</p>
                            <p className="text-[18]">{member.position}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hidden xl:block absolute top-[-125px]  right-4 z-10 space-x-2">
                <button
                    onClick={() => swiperTeamRef.current?.slidePrev()}
                    className=""
                >
                    <GoArrowLeft className="size-[32px]" />
                </button>
                <button
                    onClick={() => swiperTeamRef.current?.slideNext()}
                    className=""
                >
                    <GoArrowRight className="size-[32px]" />
                </button>
            </div>
            <div className="custom-team-pagination relative bottom-[34px] z-20 flex lg:hidden justify-center items-center gap-2 mt-4"></div>
        </div>
    );
};

export default TeamSlider;

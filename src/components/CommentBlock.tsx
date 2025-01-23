import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { Navigation, Pagination } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface Review {
  avatar: StaticImageData;
  name: string;
  jobTitle: string;
  reviewText: string;
}

const reviewsData = [
  {
    avatar: "/resources/avatar-example.png",
    name: "Олег Симаков",
    jobTitle: "Заместитель директора по маркетингу и продажам “TopTyre”",
    reviewText:
      "Ребята проделали огромную работу по созданию сайта с нуля. Очень понравился отлаженный буквально до автоматизма процесс взаимодействия: от обсуждения деталей и нюансов заказа до верстки и передачи готового ресурса владельцу. Дизайнеры очень креативные, клиента понимают буквально с полуслова. Используют адаптивные технологии, уделяют внимание безопасности. В отличие от многих других веб-студий в Минске не гнут цену за свои услуги.",
  },
  {
    avatar: "/resources/avatar2.jpg",
    name: "Мария Петрова",
    jobTitle: "Разработчик",
    reviewText:
      "Изначально обратилась в это агентство за консультацией по аудиту и анализу юзабилити. На все вопросы ответили абсолютно бесплатно, предложили несколько вариантов будущего сотрудничества. В итоге мною было принято решение не реанимировать существующий лендинг, а заказать создание нового сайта. При обсуждении менеджеры все разложили по полочкам, объяснили в чем отличия разных видов CMS и важности продвижения. Специалисты отлично разбираются в своем деле. Советую.",
  },
  {
    avatar: "/resources/avatar3.jpg",
    name: "Александр Смирнов",
    jobTitle: "Дизайнер",
    reviewText:
      "Заказывал создание интернет-магазина с нуля на WordPress с возможностью оплаты через сайт, каталогом товаров, интеграцией с нашей CRM-системой, блогом, обратной связью, онлайн-чатом и приемом заявок. Разделом с информацией о бренде и контактами. Да, было непросто, но команда агентства справилась со всеми запросами. Сайт получился очень красивым. Корректно работает на ПК и мобильных устройствах. Думаю, что в дальнейшем, при развитии и масштабировании бизнеса понадобятся дополнительные доработки, поэтому обязательно буду обращаться к вам еще.",
  },
];

const CommentBlock: React.FC = () => {
  const swiperComRef = useRef<any>(null);

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
              onSwiper={(swiper) => (swiperComRef.current = swiper)}
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".swiper-button-prev-comm",
                nextEl: ".swiper-button-next-comm",
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
              }}
              className="relative"
            >
              {reviewsData.map((review, index) => (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="flex-col justify-between lg:flex-row w-full flex-shrink-0 gap-4 h-auto  flex bg-black text-white"
                  >
                    <div className="flex w-full max-w-[340px]">
                      <Image
                        src={review.avatar}
                        alt="avatar"
                        width={72}
                        height={72}
                        className="object-cover size-[72px] rounded-full me-[20px]"
                      />
                      <div className="max-w-[248px] w-full">
                        <p className="text-[18px] xl:text-[22px] font-bold">
                          {review.name}
                        </p>
                        <span className="text-[16px] xl:text-[18px]">
                          {review.jobTitle}
                        </span>
                      </div>
                    </div>
                    <div className="max-w-[868px]">
                      <p className="max-h-auto overflow-hidden cursor-pointer text-[18px] xl:text-[28px]">
                        {review.reviewText}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Кастомные точки */}
            <div className="custom-pagination relative bottom-[34px] z-20 flex lg:hidden justify-end items-center gap-2 mt-4"></div>

            <div className="lg:flex hidden justify-end my-4 w-[160px]">
              <button
                className="swiper-button-prev-comm me-3 bg-back rounded-full w-[70px]"
                style={{ bottom: 0, top: "auto", width: 70, height: 70 }}
              >
                <GoArrowLeft
                  className="text-[32px] text-white"
                  style={{ width: 32, height: 32 }}
                />
              </button>
              <button
                className="swiper-button-next-comm bg-back rounded-full"
                style={{
                  left: "100px",
                  bottom: 0,
                  top: "auto",
                  width: 70,
                  height: 70,
                }}
              >
                <GoArrowRight
                  className="text-[32px] text-white"
                  style={{ width: 32, height: 32 }}
                />
              </button>
            </div>
          </div>
        </>
      }
    />
  );
};

export default CommentBlock;

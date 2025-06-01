import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

const services = [
  {
    id: 1,
    title: "Веб-разработка",
    image: "Services_new_1.png",
    description_title: "Работаем со всеми новыми технологиями!",
    badges: [
      { name: "Корпоративные сайты", link: "/corporate-website" },
      { name: "Интернет-магазины", link: "/online-store" },
      { name: "Landing page", link: "/landing" },
      { name: "B2B сайты", link: "/b2b" },
      { name: "Портал", link: "/portal" },
      { name: "Сайт-визитка", link: "/card-website" },
      { name: "Сайт-каталог", link: "/website-catalog" },
      { name: "Информационный сайт", link: "/information-site" },
      { name: "Маркетплейс", link: "/marketplace" },
    ],
    description:
      "Создаем профессиональные веб-сайты, идеально соответствующие задачам вашего бизнеса. Мы применяем передовые технологии и актуальные стандарты, чтобы обеспечить надежность, безопасность и масштабируемость вашего онлайн-ресурса. Наши сайты сочетают стильный дизайн с высокой функциональностью и адаптируются под любое устройство, чтобы обеспечить комфортный пользовательский опыт.",
  },
  {
    id: 2,
    title: "Мобильные приложения",
    image: "Services_new_2.png",
    description_title: "Воплотим дизайн приложения в реальность!",
    badges: [
      { name: "Разработка мобильных приложений", link: "/mob-apps" },
      { name: "IOS разработка", link: "/mob-ios" },
      { name: "Android разработка", link: "/mob-android" },
      { name: "ASO продвижение", link: "/mob-aso" },
      { name: "PWA разработка", link: "/mob-pwa" },
      { name: "Дизайн мобильных приложений", link: "/mob-design" },
      { name: "Разработка веб-приложений", link: "/mob-web" },
    ],
    description:
      "Стильное, оптимальное и безопасное приложение, которое мы сделаем для ваших клиентов, станет для них полезной привычкой, а для вас - источником постоянного роста доходов. Оно будет надёжным местом для хранения конфиденциальной информации, комплексным инструментом рекламы и маркетинга.",
  },
  {
    id: 3,
    title: "Дизайн",
    image: "Services_new_3.png",
    description_title: "Открыты для креативных проектов!",
    badges: [
      { name: "Разработка дизайна", link: "/design" },
      { name: "Разработка логотипа", link: "/design-logo" },
      { name: "Редизайн", link: "/redesign" },
      { name: "Разработка фирменного стиля", link: "/design-style" },
      { name: "Графический дизайн", link: "/graph-design" },
      { name: "Разработка брендбука", link: "/brandbook" },
    ],
    description:
      "Элегантное внешнее оформление наших продуктов мотивирует пользователя купить товар или услугу. Бренд становится максимально привлекательным. Вы отрываетесь от конкурентов, повышаете уровень своего делового рейтинга и притягиваете больше внимания клиентов.",
  },
  {
    id: 4,
    title: "Motion-дизайн",
    image: "freecompressvid.mp4",
    description_title: "Создаем визуальную историю!",
    badges: [{ name: "Motion-дизайн", link: "/motion-design" }],
    description:
      "Мы оживляем ваш бренд с помощью захватывающих визуальных историй, которые выделяются и запоминаются. Наши моушен-анимации — это искусство сочетания динамичной графики, выразительного звука и убедительных текстов. Такой контент не просто привлекает внимание, но и передает вашу идею максимально точно. Каждый проект мы создаем с учетом ваших задач и целей, превращая идеи в уникальные видеорешения, которые усиливают влияние вашего бренда.",
  },
  {
    id: 5,
    title: "SEO",
    image: "Services_new_5.png",
    description_title: "Поможем занять первые позиции в поиске!",
    badges: [
      { name: "Продвижение сайтов", link: "/seo" },
      { name: "Продвижение сайтов в ТОП", link: "/seo-top" },
      { name: "Продвижение в Яндекс", link: "/seo-yandex" },
      { name: "Продвижение интернет-магазина", link: "/seo-store" },
      { name: "SEO аудит", link: "/seo-audit" },
      { name: "Продвижение в Google", link: "/seo-google" },
      { name: "Продвижение молодых сайтов", link: "/seo-young" },
    ],
    description:
      "Наши сайты созданы так, чтобы быть фаворитами поисковых систем. Мы обеспечиваем полный контроль над мета-тегами, автоматическую генерацию robots.txt и sitemap.xml, исключаем дубли страниц и предлагаем удобную настройку страницы 404. Это гарантирует эффективную индексацию и улучшает видимость вашего ресурса в поисковых результатах.",
  },
];

const ServicesBlockSecond: React.FC = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const calculateMobile = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    calculateMobile();
    window.addEventListener("resize", calculateMobile); // Обновляем при изменении размера окна
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => {
      window.removeEventListener("resize", calculateMobile); // Убираем обработчик
    };
  }, []);

  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  return (
    <StandardMarginsLayout
      styles="h-auto mt-[50px] sm:mt-[60px] text-white bg-black md:py-[60px] py-[50px] overflow-hidden transition-all duration-300"
      children={
        <>
          <h2 className="lg:hidden block w-full font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px]">
            Услуги
          </h2>

          <div
            className={`${!isMobile ? "hidden" : "flex"} ${
              !isLoaded ? "opacity-0" : "opacity-100"
            } flex-col md:gap-[60px] gap-[40px] transition-all duration-300`}
          >
            {services.map((service, idx) => (
              <div key={service.id} className="flex flex-col items-center">
                {service.id === 4 ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-auto md:object-cover md:max-h-[339px] w-full max-h-auto mb-[15px] rounded-[30px]"
                    width={514}
                    height={339}
                    preload="none"
                  >
                    <source
                      src={`/resources/${service.image}`}
                      type="video/mp4"
                    />
                    Ваш браузер не поддерживает видео.
                  </video>
                ) : (
                  <Image
                    src={`/resources/${service.image}`}
                    alt={service.title}
                    width={1000}
                    height={650}
                    className="w-auto h-auto md:max-h-[500px] max-h-[250px] mb-[15px]"
                    unoptimized
                  />
                )}
                {/* <h3 className="w-full text-custom_yellow text-[18px] font-bold mb-[10px]">
                  {service.description_title}
                </h3> */}
                <div className="flex mt-2 flex-wrap justify-start w-full">
                  {service.badges.map((badge, idx) => (
                    <a key={idx} href={badge.link}>
                      <p className="mb-[15px] me-[15px] border px-[20px] py-[10px] text-[16px] font-medium rounded-full text-white border-white hover:bg-blue_main hover:text-white transition-all duration-100">
                        {badge.name}
                      </p>
                    </a>
                  ))}
                </div>
                <h2 className="text-[24px] font-bold text-white w-full mb-[10px]">
                  {service.title}
                </h2>
                <p className="font-medium text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div
            className={`${isMobile ? "hidden" : "flex"} ${
              !isLoaded ? "opacity-0" : "opacity-100"
            } justify-between flex-row bg-black text-white transition-all duration-300`}
          >
            {/* Левая колонка с заголовками */}
            <div className="lg:w-[40%]">
              <h2 className="w-full font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px]">
                Услуги
              </h2>
              <ul className="flex flex-col relative">
                {services.map((service) => (
                  <li
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`cursor-pointer py-[30px] relative text-[24px] transition-all duration-200 border-b-[1px] border-black_20 ${
                      selectedService.id === service.id
                        ? "font-bold text-white"
                        : "font-medium text-black_40 hover:text-gray-300"
                    }`}
                  >
                    <span
                      className={`transition-all duration-200 ${
                        selectedService.id === service.id ? "ml-[65px]" : ""
                      }`}
                    >
                      {service.title}
                    </span>
                    {/* Горизонтальное тире */}
                    {selectedService.id === service.id && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-[20px] left-0 top-[45px] rounded-[4px] h-[4px] bg-custom_yellow"
                        initial={{ width: 0 }}
                        animate={{ width: "25px" }}
                        exit={{ width: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      ></motion.div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Правая колонка с содержимым */}
            <div className="lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  {selectedService.id === 4 ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-auto object-cover md:max-h-[339px] w-full max-w-[514px] max-h-[250px] mb-[15px] rounded-[30px]"
                      width={514}
                      height={339}
                      preload="none"
                    >
                      <source
                        src={`/resources/${selectedService.image}`}
                        type="video/mp4"
                      />
                      Ваш браузер не поддерживает видео.
                    </video>
                  ) : (
                    <Image
                      src={`/resources/${selectedService.image}`}
                      alt={selectedService.title}
                      priority
                      width={514}
                      height={339}
                      className="h-auto md:max-h-[380px] w-full max-w-[514px] max-h-[250px] mb-[15px] rounded-[30px]"
                      unoptimized
                    />
                  )}
                  {/* <h2 className="w-full text-custom_yellow text-[22px] font-medium mb-[10px]">
                    {selectedService.description_title}
                  </h2> */}
                  <div className="flex mt-2 flex-wrap w-full justify-start mb-[10px]">
                    {selectedService.badges.map((badge, idx) => (
                      <a key={idx} href={badge.link}>
                        <p className="mb-[15px] me-[15px] border px-[20px] py-[10px] text-[16px] font-medium rounded-full text-white border-white hover:bg-blue_main hover:text-white transition-all duration-100">
                          {badge.name}
                        </p>
                      </a>
                    ))}
                  </div>
                  <p className="font-medium text-gray-300">
                    {selectedService.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </>
      }
    />
  );
};

export default ServicesBlockSecond;

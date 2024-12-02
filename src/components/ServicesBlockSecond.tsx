import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Service1 from "../../public/Service1.png";
import Service2 from "../../public/Service2.png";
import Service3 from "../../public/Service3.png";
import Service4 from "../../public/Service4.png";
import Service5 from "../../public/Service5.png";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

const services = [
  {
    id: 1,
    title: "Веб-разработка",
    image: Service1,
    description_title: "Работаем со всеми новыми технологиями!",
    description:
      "Создаем профессиональные веб-сайты, идеально соответствующие задачам вашего бизнеса. Мы применяем передовые технологии и актуальные стандарты, чтобы обеспечить надежность, безопасность и масштабируемость вашего онлайн-ресурса. Наши сайты сочетают стильный дизайн с высокой функциональностью и адаптируются под любое устройство, чтобы обеспечить комфортный пользовательский опыт.",
  },
  {
    id: 2,
    title: "Мобильные приложения",
    image: Service2,
    description_title: "Воплотим дизайн приложения в реальность!",
    description:
      "Стильное, оптимальное и безопасное приложение, которое мы сделаем для ваших клиентов, станет для них полезной привычкой, а для вас - источником постоянного роста доходов. Оно будет надёжным местом для хранения конфиденциальной информации, комплексным инструментом рекламы и маркетинга.",
  },
  {
    id: 3,
    title: "Дизайн",
    image: Service3,
    description_title: "Открыты для креативных проектов!",
    description:
      "Эффективный веб-дизайн — это не только красивый внешний вид, но и удобство навигации. Мы создаем интуитивно понятные интерфейсы, которые повышают уровень вовлеченности пользователей. Каждое решение пронизано эстетикой и функциональностью, что позволяет вам выделиться на фоне конкурентов.",
  },
  {
    id: 4,
    title: "Motion-дизайн",
    image: Service4,
    description_title: "Создаем визуальную историю!",
    description:
      "Мы оживляем ваш бренд с помощью захватывающих визуальных историй, которые выделяются и запоминаются. Наши моушен-анимации — это искусство сочетания динамичной графики, выразительного звука и убедительных текстов. Такой контент не просто привлекает внимание, но и передает вашу идею максимально точно. Каждый проект мы создаем с учетом ваших задач и целей, превращая идеи в уникальные видеорешения, которые усиливают влияние вашего бренда.",
  },
  {
    id: 5,
    title: "SEO",
    image: Service5,
    description_title: "Поможем занять первые позиции в поиске!",
    description:
      "Наши сайты созданы так, чтобы быть фаворитами поисковых систем. Мы обеспечиваем полный контроль над мета-тегами, автоматическую генерацию robots.txt и sitemap.xml, исключаем дубли страниц и предлагаем удобную настройку страницы 404. Это гарантирует эффективную индексацию и улучшает видимость вашего ресурса в поисковых результатах.",
  },
];

const ServicesBlockSecond: React.FC = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
    return () => {
      window.removeEventListener("resize", calculateMobile); // Убираем обработчик
    };
  }, []);

  return (
    <StandardMarginsLayout
      styles="lg:h-[880px] h-auto mt-[50px] sm:mt-[60px] text-white bg-black sm:py-[60px] py-[50px] overflow-hidden"
      children={
        <>
          <h1 className="w-full font-bold text-[32px] lg:text-[60px] mb-[30px]">
            Услуги
          </h1>

          <div
            className={`${!isMobile ? "hidden" : "flex"} flex-col md:gap-[60px] gap-[40px]`}
          >
            {services.map((service) => (
              <div key={service.id} className="flex flex-col items-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-auto h-auto md:max-h-[500px] max-h-[250px] mb-[15px]"
                />
                <h3 className="w-full text-custom_yellow text-[18px] font-bold mb-[10px]">
                  {service.description_title}
                </h3>
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
            className={`${
              isMobile ? "hidden" : "flex"
            } justify-between flex-row bg-black text-white transition-all duration-300`}
          >
            {/* Левая колонка с заголовками */}
            <div className="lg:w-[40%]">
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
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-auto max-h-[400px] h-auto mb-[30px]"
                  />
                  <h2 className="w-full text-custom_yellow text-[22px] font-medium mb-[10px]">
                    {selectedService.description_title}
                  </h2>
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

import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import BasicLayout from "@/layouts/BasicLayout";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import TechnologiesTitleBlock from "@/components/TechnologiesTitleBlock";
import ColorfulBlock from "@/components/ColorfulBlock";
import BlockApproach from "@/components/BlockApproach";
import opencart_logo from "../../public/opencart_logo.svg";
import HalfImageBlock from "@/components/HalfImageBlock";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import HalfImageText from "@/components/HalfImageText";
import Image from "next/image";
import opencart9 from "../../public/opencart9.png";

const PAGE_NAME = "opencart";
const BREADCRUMB_PAGE_NAME = "Opencart";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: BREADCRUMB_PAGE_NAME, link: `/${PAGE_NAME}` },
];

const breadcrumbsSchema: ListItem[] = [
  {
    "@type": "ListItem",
    position: 1,
    name: "Главная",
    item: "https://digitaldevils.by",
  },
  {
    "@type": "ListItem",
    position: 2,
    name: BREADCRUMB_PAGE_NAME,
    item: `https://digitaldevils.by/${PAGE_NAME}`,
  },
];

const data: DataItem[] = [
  {
    title:
      "Как перенести каталог товаров со старого сайта на новый, созданный на Opencart?",
    description: (
      <p className="text-[18px] ">
        Для этого Digital Devils предлагает воспользоваться услугой переноса
        сайта. Самостоятельно решить подобную задачу будет непросто, к тому же
        существует риск случайной потери всей базы данных.
      </p>
    ),
  },
  {
    title: "Можно ли реализовать нестандартный функционал на CMS OpenCart?",
    description: (
      <p className="text-[18px] ">
        Да, у нас работают высококлассные программисты, которые могут воплотить
        в жизнь любые идеи.
      </p>
    ),
  },
  {
    title: "Существуют ли какие-то ограничения при работе с OpenCart?",
    description: (
      <p className="text-[18px] ">
        Фактически нет, CMS можно настраивать так, как удобно пользователям,
        верстать и программировать сайты в соответствии с ожиданиями и запросами
        заказчика.
      </p>
    ),
  },
];

const opencart = () => {
  return (
    <>
      <SEO
        title="Cоздание интернет-магазина на Opencart | Цена на разработку сайтов на Opencart в Минске"
        description="Разрабатываем интернет-магазины на Opencart , которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего сайта на Opencart экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TechnologiesTitleBlock
          title={
            <>
              Разработка <br /> сайта на Opencart
            </>
          }
          description="Закажите создание сайта на OpenCart специалистам Digital Devils. Ваша идея - наша реализация: быстро, качественно и в рамках бюджета."
          buttonColor="#3DCAF0"
        />
        <HalfImageText
          title={"Разработка под ключ"}
          smallTitle={
            "OpenCart - функциональная и надежная CMS с открытым исходным кодом"
          }
          image={"/resources/opencart_small2.png"}
          smallImage={"/resources/opencart_small2.png"}
          widthImage={316}
          heightImage={316}
          isImageCenter={true}
          buttonColor="#3DCAF0"
          buttonText="Связаться с нами"
          description={
            <>
              <p className="font-bold text-[22px] mb-[10px]">
                Популярная платформа позволяет создавать удобные и простые в
                управлении сайты любого формата: их администрирование может
                осуществляться даже пользователями, не имеющими навыков
                программирования.
              </p>
              <p className="font-medium text-[18px] mb-[10px]">
                Подбор модулей и блоков осуществляется под конкретные
                потребности бизнеса. По вашему запросу мы готовы провести
                интеграцию систем оплаты, внедрить поиск и фильтры, разработать
                индивидуальный функционал, настроить оптимизацию ресурса для его
                успешного продвижения в Яндекс и Google.
              </p>
            </>
          }
        />
        <HalfImageBlock
          title="Создаем сайты, которые помогают бизнесу"
          smallTitle="Продающие интернет-магазины на  CMS OpenCart "
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Ключевое преимущество CMS OpenCart - система изначально
                предназначена для интернет-магазинов и других проектов
                eCommerce.
              </p>
              <p className="font-medium text-[18px] mb-[20px]">
                Разработки предоставляют доступ к мощным встроенным инструментам
                управления заказами, товарами, оплатой и доставкой. Сайты,
                разработанные на этом движке, отличаются быстродействием,
                мгновенной обработкой запросов, загрузкой страниц, что
                способствует улучшению конверсии и пользовательского опыта.
              </p>
            </>
          }
          buttonColor="#3DCAF0"
          buttonText="Обсудить проект"
          image={"/resources/opencart_half-image-block.png"}
          smallImage={"/resources/opencart_small.png"}
          isRevert={true}
          widthImage={641}
          heightImage={300}
        />
        <BlockWithImageAndDropDownMenu
          title="Почему выбирают CMS Opencart"
          borderColor="#000000"
          margin="py-[50px] md:py-[60px] "
          data={[
            {
              title: "Быстрый запуск",
              description: [
                "Чтобы ускорить процесс создания сайтов на ОпенКарт возможно использование собственных скриптов и готовых модулей системы.",
              ],
            },
            {
              title: "Функциональная синхронизация",
              description: [
                "Работу сайта можно синхронизировать со складскими и торговыми программами, платежными системами, сервисами доставки.",
              ],
            },
            {
              title: "Интуитивно понятный интерфейс",
              description: [
                "У владельцев ресурса не возникнет проблем с добавлением, удалением и редактированием контента, независимо от их опыта в программировании.",
              ],
            },
            {
              title: "Свыше 100 000 позиций в каталоге",
              description: [
                "OpenCart позволяет загружать в каталог интернет-магазина более 100 тыс. товарных позиций под доработок производительности.",
              ],
            },
          ]}
          firstBlock={
            <div className="relative h-fit lg:max-w-[753px] block lg:min-w-[422px] lg:me-[30px]">
              <Image
                src={"/resources/opencart5.png"}
                width={524}
                height={543}
                className="object-cover w-full"
                alt="Чем Laravel лучше других PHP‑фреймворков"
              />
              <div className="w-full flex justify-end absolute bottom-[15px] right-5 lg:right-3">
                <a
                  href="https://timeturbo.ru"
                  rel="nofollow"
                  target="_blank"
                  className="max-h-[50px] max-w-[138px] px-[30px] py-[9px] lg:py-[10px] lg:px-[40px] w-fit mt-[20px] flex justify-center items-center bg-[#FAFAFA] rounded-full text-white"
                >
                  <span className="md:text-[22px] text-[16px] lg:text-[24px] text-black">
                    Сайт
                  </span>
                </a>
              </div>
            </div>
          }
        />
        <ColorfulBlock
          title=""
          showText={false}
          bigTitle="Интернет-магазин на Opencart под ключ"
          titleCircleBgColor_1="none"
          titleCircleBgColor_2="none"
          text_1={<></>}
          text_2={<></>}
          description={
            <>
              <p className="text-[16px] lg:text-[18px] mb-[5px]">
                Студия Digital Devils предоставляет полный комплекс услуг в
                сфере web-разработки, включая подготовку эксклюзивных макетов,
                прототипирование, программирование, оптимизацию, хостинг,
                техническую поддержку и сопровождение.
              </p>
              <p className="text-[16px] lg:text-[18px]">
                Ваш{" "}
                <a
                  href="https://digitaldevils.by/online-store"
                  className="no-underline text-blue_main"
                >
                  интернет-магазин
                </a>{" "}
                и{" "}
                <a
                  href="https://digitaldevils.by/website-catalog"
                  className="no-underline text-blue_main"
                >
                  электронный каталог
                </a>{" "}
                будут соответствовать всем актуальным трендам и стандартам.{" "}
                <a
                  href="https://digitaldevils.by/"
                  className="no-underline text-blue_main"
                >
                  Создаем сайты под ключ
                </a>{" "}
                для бизнеса любого масштаба в Минске и Беларуси.
              </p>
            </>
          }
          imagePath={"/resources/opencart_colorfulblock.png"}
          smallImagePath={"/resources/opencart_colorfulblock_small.png"}
          BgColor="#3DCAF0"
          isNotDark_2={true}
        />
        <BlockApproach
          isOnlyBottomPadding={false}
          mainTitle="Стоимость разработки на Opencart"
          leftBlock_p1="Команде Digital Devils под силу реализовать даже сложные и комплексные решения с широкими возможностями адаптации в сжатые сроки и с заданным бюджетом."
          leftBlock_p2="Итоговая стоимость создания сайта на базе OpenCart рассчитывается с учетом целого ряда факторов: дизайн (типовые шаблоны или авторские макеты), желаемый функционал, структура и количество страниц, адаптивная верстка и адаптация под любые устройства и браузеры, необходимость наполнения контентом."
          leftBlock_p3=""
          rightBlockTitle="Прозрачные цены"
          rightBlockPrice="400$"
          rightBlockList={[
            "Разработка сайта под ключ",
            "Правки",
            "Гайд пользования сайтом",
          ]}
          rightBlockImage={"/resources/opencart_logo.svg"}
          buttonColor="#3DCAF0"
          arrowColor="light_blue"
          bg_color="dark"
          isWide={true}
        />
        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default opencart;

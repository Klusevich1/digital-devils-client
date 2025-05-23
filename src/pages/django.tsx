import SEO, { ListItem } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import BasicLayout from "@/layouts/BasicLayout";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import TechnologiesTitleBlock from "@/components/TechnologiesTitleBlock";
import ColorfulBlock from "@/components/ColorfulBlock";
import BlockApproach from "@/components/BlockApproach";
import HalfImageBlock from "@/components/HalfImageBlock";
import WideBlockWithImage from "@/components/WideBlockWithImage";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import BlockWithListOfCurrentTechnologies from "@/components/BlockWithListOfCurrentTechnologies";
import Image from "next/image";

const PAGE_NAME = "django";
const BREADCRUMB_PAGE_NAME = "Django";

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
    title: "Подойдет ли фреймворк Django для крупных проектов?",
    description: (
      <p className="text-[18px] ">
        Да, платформа станет оптимальным вариантом для запуска самых разных
        приложений и сайтов, в том числе сложных порталов, взаимодействующих с
        объемными базами данных.
      </p>
    ),
  },
  {
    title: "Сколько будет стоить сайт или приложение на Django?",
    description: (
      <p className="text-[18px] ">
        Полная стоимость рассчитывается индивидуально с учетом множества
        факторов. Для предварительного расчета цены обратитесь к нашим
        менеджерам.
      </p>
    ),
  },
  {
    title: "Буду ли я в курсе, как продвигается процесс разработки?",
    description: (
      <p className="text-[18px] ">
        Да. Наши специалисты всегда на связи - вы можете звонить или писать им
        для получения ответов на волнующие вопросы. Кроме того, мы согласуем с
        заказчиком результаты каждого этапа разработки для оперативного внесения
        корректировок, если в этом возникнет необходимость.
      </p>
    ),
  },
];

const django = () => {
  return (
    <>
      <SEO
        title="Разработка сайта на Django | Цена на создание сайтов на Django в Минске"
        description="Разрабатываем сайты на Django, которые выделяют ваш бизнес среди конкурентов. Стильный дизайн, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте создание своего сайта на Django экспертам и получите проект, который работает на ваш успех!"
        canonical={`https://digitaldevils.by/${PAGE_NAME}`}
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <TechnologiesTitleBlock
          title={
            <>
              Разработка <br /> сайта на Django
            </>
          }
          description="Выполняем разработку сайтов на Django. Закажите создание эффективного бизнес-инструмента, чтобы заявить о себе в интернете, укрепить имидж и увеличить объемы продаж."
          buttonColor="#44B78B"
        />
        <HalfImageBlock
          title="Создаем только продающие сайты"
          smallTitle="Студия Digital Devils предлагает комплексные услуги по разработке сайтов на Django - ведущем фреймворке Python."
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                В эпоху повсеместной цифровизации бизнеса, развертывание
                качественного и информативного сайта, запуск собственного
                мобильного приложения являются важной частью успеха белорусских
                компаний.
              </p>
              <p className="font-medium text-[18px] mb-[20px]">
                CMS Django - это мощная и производительная платформа выгодно
                выделяется на фоне конкурентов, позволяет успешно реализовывать
                масштабируемые проекты, соответствующие высочайшим стандартам
                веб-разработки.
              </p>
            </>
          }
          buttonColor="#44B78B"
          buttonText="Обсудить проект"
          image={"/resources/django_half-image-block.png"}
          smallImage={"/resources/django_small.png"}
          widthImage={639}
          heightImage={300}
        />
        <BlockWithImageAndDropDownMenu
          title="Почему выбирают CMS Django"
          margin="py-[50px] md:py-[60px]"
          borderColor="#0C4B33"
          data={[
            {
              title: "Развитая экосистема",
              description: [
                "В упрощенном виде Django можно сравнить с конструктором Lego. Своим пользователям фреймворк предлагает множество шаблонов и типовых блоков, возможность интеграции с большим количеством приложений от сторонних разработчиков.",
              ],
            },
            {
              title: "Понятные инструкции",
              description: [
                "Детализированные пошаговые руководства, техническая документация, многочисленные примеры упрощают процесс разработки. Встроенный ORM ускоряет разработку прототипов и готовых <a href='/mob-web' class='text-blue_main'>web-приложений</a>.",
              ],
            },
            {
              title: "Административный интерфейс",
              description: [
                "Framework поставляется встроенным административным интерфейсом, что способствует сокращению сроков запуска новых сайтов с нуля, что в конечном итоге приводит к экономии ресурсов и денежных средств.",
              ],
            },
          ]}
          firstBlock={
            <div className="relative h-fit lg:max-w-[753px] block lg:min-w-[422px] lg:me-[30px]">
              <Image
                src={"/resources/django6.png"}
                width={524}
                height={543}
                className="object-cover w-full"
                alt="Почему выбирают CMS Django"
              />
              <div className="w-full flex justify-end absolute bottom-[15px] right-5 lg:right-3">
                <a
                  href="https://www.myvis.ru/?srsltid=AfmBOoquvbRv_NUZUR6cOYVL2OjamMyDgOFUZe3Fq7kK1QmImKB5S6iL"
                  rel="nofollow"
                  target="_blank"
                  className="max-h-[50px] max-w-[138px] px-[30px] py-[9px] lg:py-[10px] lg:px-[40px] w-fit mt-[20px] flex justify-center items-center bg-[#171717] rounded-full text-white"
                >
                  <span className="md:text-[22px] text-[16px] lg:text-[24px]">
                    Сайт
                  </span>
                </a>
              </div>
            </div>
          }
        />
        <WideBlockWithImage
          title="Создание сложных и современных сайтов"
          text_1="Практика показывает, что чаще всего фреймворк Джанго на Питоне используется для <a href='https://digitaldevils.by/online-store' class='no-underline text-blue_main'>разработки интернет-магазинов</a>, <a href='https://digitaldevils.by/corporate-website' class='no-underline text-blue_main'>корпоративных</a> и <a href='https://digitaldevils.by/card-website' class='no-underline text-blue_main'>промо сайтов</a>, <a href='https://digitaldevils.by/landing' class='no-underline text-blue_main'>лендингов</a>, личных блогов, социальных сетей и поисковых систем."
          text_2="Мы знаем, как создать сайт на Django, который будет продвигать ваш бизнес в интернете. Функциональный и стабильно работающий ресурс с уникальным текстовым содержимым, графикой и видео, разработанный нашей студией, непременно закроет все потребности вашей компании в виртуальном пространстве."
        />
        <BlockWithListOfCurrentTechnologies
          isOnlyBottomPadding={false}
          title="Мы используем актуальные технологии"
          list={[
            "Подготовку прототипов и макетов выполняем в редакторе Figma. Разрабатываем интерактивные презентации.",
            "На сложных проектах задействуем СУБД PostgreSQL для обработки массивных баз данных и сложных запросов.",
            "Производим быструю верстку на Flexbox. Применяет инновационные технологии для создания адаптивных сайтов.",
            "Проектируем масштабируемую структуру с любым количеством страниц, собираем семантику, прописывает meta-теги.",
          ]}
        />
        <BlockApproach
          mainTitle="Создаем сайты, которые помогают бизнесу"
          leftBlock_p1="Django - это не просто один из многих фреймворков. Скорее это особая философия веб-разработки."
          leftBlock_p2="Его инструменты позволяют воплощать в жизнь любые идеи, обеспечивать безопасность и высокую производительность сайтов. Стоимость реализации проектов зависит от их сложности, дизайна, функционала. "
          leftBlock_p3="Студия Digital Devils предлагает конкурентные цены в Минске, индивидуальный и ответственный подход к решению поставленных задач."
          rightBlockTitle="Прозрачные цены"
          rightBlockPrice="400$"
          rightBlockList={[
            "Разработка сайта под ключ",
            "Правки",
            "Гайд пользования сайтом",
          ]}
          rightBlockImage={"/resources/django_logo.svg"}
          buttonColor="#44B78B"
          arrowColor="green_arrow"
          bg_color="green"
          isWide={true}
        />
        <ColorfulBlock
          title=""
          bigTitle="Сайт на Django под ключ"
          titleCircleBgColor_1="#44B78B"
          titleCircleBgColor_2="#44B78B"
          text_1={
            <p className="text-[16px] lg:text-[18px]">
              При{" "}
              <a
                href="https://digitaldevils.by/"
                className="no-underline text-blue_main"
              >
                создании сайта под ключ
              </a>
              , мы нацелены на его успех с самых первых этапов разработки. Для
              этого реализуем согласованные с заказчиком планы и концепции со
              100% отдачей.{" "}
            </p>
          }
          text_2={
            <p className="text-[16px] lg:text-[18px]">
              Нам отлично известно, что успешный веб-ресурс - это не только про
              уникальный дизайн и программирование, но и про маркетинг, удобство
              для пользователей, понимание логики бизнеса, оптимизация всех
              компонентов площадки под требования поисковых машин.{" "}
            </p>
          }
          description="Только учитывая все эти и многие другие моменты, можно превратить сайт в надежный и эффективный инструмент, который будет работать на пользу компании. "
          imagePath={"/resources/django_colorfulblock.png"}
          smallImagePath={"/resources/django_colorfulblock_small.png"}
          BgColor="#0C4B33"
          isNotDark_1={true}
          isNotDark_2={true}
        />
        <MainBlockTenth isOnlyBottomPadding={false} data={data} />
      </BasicLayout>
    </>
  );
};

export default django;

import SEO, { ListItem } from "@/components/SEO";
import BasicLayout from "@/layouts/BasicLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import MainBlockTenth, { DataItem } from "@/components/MainBlockTenth";
import React from "react";
import { DifferentTasksBlock } from "@/components/DifferentTasksBlock";
import BlockWithImageAndDropDownMenu from "@/components/BlockWithImageAndDropDownMenu";
import OurCaseBlock from "@/components/OurCaseBlock";
import SmallMainBlockCard from "@/components/SmallMainBlockCard";
import Image from "next/image";
import SeoTitleBlock from "@/components/SeoTitleBlock";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import CommentBlock from "@/components/CommentBlock";
import HalfImageBlock from "@/components/HalfImageBlock";
import TicketSeoBlock from "@/components/TicketSeoBlock";
import WideBlockWithImage from "@/components/WideBlockWithImage";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Продвижение сайтов", link: "/seo" },
  { name: "Продвижение молодых сайтов", link: "/seo-young" },
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
    name: "Продвижение сайтов",
    item: "https://digitaldevils.by/seo",
  },
  {
    "@type": "ListItem",
    position: 3,
    name: "Продвижение молодых сайтов",
    item: "https://digitaldevils.by/seo-young",
  },
];

const marketplace = () => {
  const data: DataItem[] = [
    {
      title: "Сколько времени нужно, чтобы молодой сайт попал в ТОП?",
      description: (
        <p className="text-[18px] ">
          Зависит от ниши и конкурентов. Обычно результаты видны через 30-60
          дней, но выход по ключевикам занимает 3-6 месяцев. Мы не рисуем
          «волшебные сроки» – работаем на реальный результат.
        </p>
      ),
    },
    {
      title: "Что важнее – контент или техническая оптимизация нового сайта?",
      description: (
        <p className="text-[18px]">
          Без технической базы даже лучший контент не выведет вас наверх выдачи.
          Сначала исправляем ошибки, ускоряем загрузку, настраиваем структуру
          при оптимизации – потом наполняем сайт продающими текстами. 
        </p>
      ),
    },
    {
      title: "Можно ли продвигать сайт без бюджета на рекламу?",
      description: (
        <p className="text-[18px] ">
          Да, но это займет больше времени. SEO – это долгая игра. Если нужны
          посетители сразу, подключаем контекстную рекламу. Оптимально –
          комбинировать оба подхода для продвижения. 
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="SEO-продвижение молодых сайтов в Минске | Оптимизация нового сайта"
        description="Разрабатываем и продвигаем молодые сайты в ТОП, которые выделяют ваш бизнес среди конкурентов. Стильный UX/UI, передовые технологии и адаптивность — ваши посетители оценят. Доверяйте SEO-продвижение своего нового сайта экспертам и получите проект, который работает на ваш успех!"
        canonical="https://digitaldevils.by/seo-young"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <SeoTitleBlock title="Продвижение молодых сайтов" />
        <StandardMarginsLayout
          styles={`bg-white text-black`}
          children={
            <div className="flex flex-col lg:flex-row lg:space-x-[41px]">
              <div className="lg:max-w-[754px]">
                <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold lg:leading-[75px]">
                  Выводим молодые сайты в ТОП
                </h2>
                <p className="text-[22px] font-bold mt-[30px] ">
                  Быстро и результативно
                </p>
                <div className="w-full block lg:hidden  mt-[20px]">
                  <Image
                    src={"/resources/seo_young_1_small.png"}
                    alt={
                      "Сколько стоит разработка мобильных приложений под iOS?"
                    }
                    className="w-full mb-[20px]"
                    width={342}
                    height={252}
                  />
                </div>
                <p className="text-[18px] mt-[10px] font-medium">
                  Digital Devils выводит сайты в топ — быстро и без пустых
                  обещаний. SEO, трафик, разбор конкурентов — делаем то, что
                  реально работает при продвижении, а не создает видимость
                  активности. Мы не кормим иллюзиями: если сайт слабый — скажем
                  сразу и поможем исправить. Клиенты уже ищут вас. Пора им вас
                  найти.
                </p>
              </div>
              <div className="w-full lg:block hidden max-w-[525px] min-w-[400px]">
                <Image
                  src={"/resources/seo_young_1.png"}
                  className="w-full"
                  alt={"Сколько стоит разработка мобильных приложений под iOS?"}
                  width={359}
                  height={360}
                />
              </div>
            </div>
          }
        />

        <OurCaseBlock
          title="Наш кейс"
          cases={[
            {
              miniTitle: "Интернет-магазин по продаже строительных материалов",
              text1:
                'Новый сайт строительных материалов тонул в поиске. Мы вытащили его по вопросам "купить керамзит в Минске" и "строительные смеси оптом".',
              text2:
                'Сначала били по низкочастотникам – "бетон М300 с доставкой", "гипсокартон влагостойкий". Через 2 месяца взяли средние “хвосты” типа "купить пеноблоки". Затем вышли в топ-3 по "стройматериалы Минск".',
              imageUrl: "/resources/seo-case.png",
              numbers: (
                <>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-[15px] justify-between lg:flex lg:mb-[60px] mb-[30px] pt-[30px]">
                    <SmallMainBlockCard
                      title="37"
                      description="Позиций в ТОП-3 Яндекса"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="214%"
                      description="Рост конверсии в заказы"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="350 BYN"
                      description="Рост среднего чека со 120 BYN"
                      margin="mb-0"
                    />
                    <SmallMainBlockCard
                      title="50"
                      description="В 50 раз больше поток клиентов"
                      margin="mb-0"
                    />
                  </div>
                </>
              ),
              analiticsImg: "/resources/seo-young-numbers.png",
              analiticsImgSmall: "/resources/seo-yandex-numberssmall.png",
            },
          ]}
        />
      
        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Мы специализируемся на продвижении молодых сайтах
              </h2>
              <p className="mb-[30px] text-[22px] font-medium  max-w-[866px]">
                Знаем их слабые места и умеем исправлять: находим рабочие ключи
                при оптимизации, чиним технические ошибки, создаем продающий
                контент. Не распыляемся - работаем только с тем, что дает
                реальный трафик.
              </p>
              <div className="border-t-[1px] border-black  pt-[30px]">
                <p className="text-[16px] font-medium">
                  Цена продвижения молодых сайтов
                </p>
                <p className="text-[22px] mt-[10px] lg:mt-[20px] font-medium max-w-[753px]">
                  Точную цифру назовем после бесплатного аудита, где покажем 3
                  конкретных способа увеличить посещаемость уже в этом месяце.
                </p>
              </div>
            </div>
          }
        />

        <HalfImageBlock
          title="Мобильная версия сайта: скрытый ресурс для продвижения"
          smallTitle="Шесть из десяти посетителей заходят с телефонов, но многие сайты не могут их удержать"
          description={
            <>
              <p className="font-medium text-[18px] mb-[20px]">
                Мы создаем не шаблонную адаптацию, а по-настоящему работающий
                инструмент для бизнеса. Благодаря оптимизированной загрузке
                страницы открываются моментально. Мы продумываем каждый элемент
                оформления заказов до мелочей, что в среднем увеличивает
                конверсию на 35%. Вы получаете полностью синхронизированную
                мобильную версию с интуитивным дизайном, где все продумано для
                удобства пользователей.
              </p>
            </>
          }
          buttonColor="#345CFF"
          buttonText="Связаться с нами"
          image={"/resources/seo_young_3.png"}
          smallImage={"/resources/seo_young_small_3.png"}
          widthImage={639}
          heightImage={300}
        />

        <DifferentTasksBlock
          bigTitle="Короткий путь к взрывным продажам"
          smallText="Комплексное продвижение от Digital Devils"
          paragraphs={[
            {
              title: "SEO-прокачка",
              text: "Выводим наверх поиска через оптимизацию, метаданных и структуры сайта",
            },
            {
              title: "Точечная реклама",
              text: "Запускаем кампании только по ЦА, без слива бюджета",
            },
            {
              title: "Живая аналитика",
              text: "Отслеживаем каждый клик, корректируем стратегию в реальном времени",
            },
          ]}
          isDark={true}
        />

        <TicketSeoBlock
          title="Стоимость и сроки продвижения"
          titleLeftBlock={"Молодой сайт — это чистый холст"}
          textLeftBlock_1={
            'Пока сайт новый, у вас есть ключевое преимущество — гибкость. Мы можем исправить ошибки, занять свободные ниши в поиске и обойти конкурентов, которые "застряли" со старыми подходами. '
          }
          textLeftBlock_2={
            'Чем раньше начнёте — тем быстрее сайт наберёт обороты и начнёт приносить клиентов. Ждать "пока сайт раскрутится сам" — значит терять деньги.'
          }
          buttonText_1={"Связаться с нами"}
          buttonText_2={"Связаться с нами"}
          buttonColor_1={"#214BF6"}
          buttonColor_2={"#FAFAFA"}
          bgColor_1={""}
          bgColor_2={""}
          buttonBgColor_1={"#FAFAFA"}
          buttonBgColor_2={"#214BF6"}
          smallTitle_1={"Разгон с нуля"}
          smallTitle_2={"Взрывные продажи"}
          price_1={"250$"}
          price_2={"350$"}
          secondSmallTitle_1={"Идеально для тех, кому нужно:"}
          secondSmallTitle_2={"Для тех, кто хочет:"}
          list_1={[
            "Быстро получить клиентов",
            "Исправить базовые ошибки SEO продвижения",
            "Закрепиться в поиске по низкоконкурентным запросам",
            "Запустить минимальный, но стабильный поток заявок",
          ]}
          list_2={[
            "Выйти наверх выдачи по конкурентным запросам",
            "Настроить комплексное продвижение молодого сайта",
            "Получить не просто трафик, а реальные продажи",
            "Закрепиться в позициях надолго",
          ]}
          isOnlyBottomPadding={false}
        />

        <StandardMarginsLayout
          styles={"pb-[50px] md:pb-[60px] bg-white text-black"}
          children={
            <div className="flex flex-col">
              <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px] w-full">
                Основные преимущества SEO-продвижения
              </h2>
              <div
                className={`flex md:flex-row-reverse flex-col gap-12 justify-between`}
              >
                <div className="flex flex-col lg:block items-center">
                  <div>
                    <h2 className="font-bold text-[22px] mb-[20px]">
                      Цена на оптимизацию молодого сайта формируется после
                      бесплатного аудита
                    </h2>
                    <div className="w-full max-w-full mb-[20px] lg:hidden block">
                      <Image
                        src={"/resources/seo_top_1.png"}
                        width={341}
                        height={353}
                        className="object-cover w-full"
                        alt={"Мы разрабатываем то, что нужно Вам"}
                      />
                    </div>
                    <p className="text-[18px] font-medium">
                      Молодые сайты — это чистый лист. Мы быстро находим слабые
                      места конкурентов при SEO продвижении, занимаем свободные
                      ниши и выводим наверх с минимальным бюджетом. Без
                      "истории" санкций и с чистым доменом — продвигать проще и
                      быстрее при оптимизации.
                    </p>
                    <a
                      className="flex lg:w-fit w-full mt-[20px]"
                      href="/application"
                      rel="nofollow"
                    >
                      <div
                        className={`font-medium text-[18px]  lg:w-fit w-full py-[12.5px] px-[20px] text-center rounded-full text-white bg-blue_main`}
                      >
                        Связаться с нами
                      </div>
                    </a>
                  </div>
                </div>
                <div className="h-full max-w-[753px] min-w-[40%] hidden lg:block">
                  <Image
                    src={"/resources/seo_top_1.png"}
                    width={522}
                    height={400}
                    className="object-cover"
                    alt={"Мы разрабатываем то, что нужно Вам"}
                  />
                </div>
              </div>
            </div>
          }
        />

        <DifferentTasksBlock
          bigTitle="Разные задачи - разный подход"
          smallText="Каждый сайт — уникален. Мы не используем шаблонные решения, а разрабатываем стратегию под конкретные цели при SEO продвижении."
          paragraphs={[
            {
              title: "Для интернет-магазинов",
              text: "Делаем упор на коммерческие запросы и увеличение среднего чека. Оптимизируем карточки товаров, улучшаем юзабилити и повышаем конверсию в покупки.",
            },
            {
              title: "Сервисам и услугам",
              text: "Помогаем закрепиться в локальном поиске. Настраиваем удобные формы заявок, работаем с отзывами и продвигаем по геозависимым запросам.",
            },
            {
              title: "Стартапам",
              text: "Создаём информационный фон. Привлекаем покупателей через таргет и готовим проект к масштабированию.",
            },
          ]}
          isDark={false}
          maxwSmallText="max-w-[642px]"
          isOnlyBottomPadding={true}
        />

        <CommentBlock
          reviewsData={[
            {
              avatar: "/resources/avatar_4.png",
              name: "Ирина Борисова",
              jobTitle: "SEO-специалист «MediCare»",
              reviewText:
                "Сайт попал под фильтр – трафик упал в 10 раз. Разобрали ошибки, пересобрали семантику, перезапустили SEO продвижение нашего молодого сайта. Через 3 месяца не только вышли из санкций, но и обогнали конкурентов",
            },
            {
              avatar: "/resources/avatar_3.png",
              name: "Дмитрий Петров",
              jobTitle: "Маркетолог «EcoTech»",
              reviewText:
                'Было 1,5% конверсии в заявки – после доработки UX и переписывания текстов выросло до 4,7%. Digital Devils не просто "продвигают", а думают, как сделать сайт удобнее для посетителей. Результат – +200% продаж.',
            },
            {
              avatar: "/resources/avatar_2.png",
              name: "Ольга Семенова",
              jobTitle: "Директор сервисного центра «iFix»",
              reviewText:
                "Запустили сайт по ремонту техники – ноль трафика. Ребята сделали упор на локальные запросы  и настроили контекст. Вскоре пошли обращения, сейчас – стабильно 30-40 заявок. Цена адекватная, отчеты понятные.",
            },
            {
              avatar: "/resources/avatar_1.png",
              name: "Артем Гущин",
              jobTitle: "Владелец интернет-магазина автозапчастей",
              reviewText:
                'Мне нравится, что Digital Devils не кормят отчетами "про трафик", а показывают, как растут продажи. За полгода – выручка увеличилась на 320%. Если нужно не просто "продвижение", а реальные покупатели – это ваш выбор.',
            },
          ]}
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Особенности SEO продвижения молодых сайтов
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[22px] font-medium">
                    Молодость сайта - это не недостаток, а мощное конкурентное
                    преимущество, если правильно его использовать  при
                    продвижении. Поисковые системы сегодня специально заточены
                    на выявление и SEO продвижение качественных ресурсов. Это
                    часть их борьбы за свежий и актуальный контент. Однако чтобы
                    попасть в эту волну, нужно понимать специфику SEO
                    продвижения на начальном этапе.
                  </p>
                </div>
                <div className="lg:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[10px]">
                    Главная фишка молодых сайтов - их "чистая история". В
                    отличие от давно существующих проектов, которые могли
                    накопить различные технические и контентные проблемы, сайт
                    можно сразу выстраивать по современным стандартам SEO
                    продвижения.
                  </p>
                  <p className="text-[16px] font-medium">
                    Это как строить дом по технологиям, вместо того чтобы
                    переделывать старое здание. При этом бюджет на продвижение
                    молодого сайта в ТОП требуется значительно меньший - пока
                    ваш сайт находится в "зеленой зоне" конкурентности, можно
                    добиться впечатляющих результатов без огромных вложений при
                    оптимизации,.
                  </p>
                </div>
              </div>
            </>
          }
        />

        <HalfImageBlock
          title="От чего зависит стоимость наших услуг"
          smallTitle="Цена при продвижении зависит от двух вещей:"
          description={
            <>
              <p className="font-medium text-[18px] mb-[10px]">
                Какого результата вы ждёте и насколько конкурентная у вас
                ниша.Чем сложнее запросы, тем больше работы – но тем ценнее
                каждый посетитель. Если нужно выйти по узким ключам при
                оптимизации, потребуется меньше бюджета.
              </p>
              <p className="font-medium text-[18px] mb-[20px]">
                Хотите обогнать крупных игроков – готовьтесь к серьёзной
                стратегии. Мы не работаем по шаблону. Сначала изучаем сайт,
                анализируем конкурентов и только потом называем цену.
              </p>
            </>
          }
          isRevert={true}
          buttonColor="#345CFF"
          buttonText=""
          image={"/resources/seo_young_4.png"}
          smallImage={"/resources/seo_young_small_4.png"}
          widthImage={639}
          heightImage={300}
        />

        <StandardMarginsLayout
          styles=" py-[50px] md:py-[60px] bg-[#F5F5F5] text-black"
          children={
            <>
              <h2 className="mb-[30px] font-bold text-[32px] md:text-[42px] lg:text-[60px]">
                Оптимальные сроки для старта SEO продвижения
              </h2>
              <div className="flex flex-col lg:flex-row justify-between gap-[20px]">
                <div className="lg:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[10px]">
                    Идеальный сценарий — когда SEO продвижение начинается еще на
                    этапе разработки сайта. В этом случае мы можем влиять на
                    выбор CMS, структуру разделов, техническую реализацию — все
                    те элементы, которые потом будет крайне сложно или дорого
                    менять. Такой подход позволяет избежать до 80% типичных
                    проблем новых сайтов.
                  </p>
                  <p className="text-[16px] font-medium">
                    Если сайт уже запущен, но не продвигался — важно начать в
                    первые 90  дней. В этот период поисковые системы наиболее
                    лояльны к ресурсам и охотнее включают их в выдачу. Мы
                    называем это "периодом благоприятного старта" — своеобразным
                    кредитом доверия от Google и Яндекс.
                  </p>
                </div>
                <div className="lg:max-w-[640px]">
                  <p className="text-[16px] font-medium mb-[10px]">
                    Для сайтов возрастом от полугода требуется особый подход.
                    Здесь уже нельзя полагаться на бонусы новизны, зато можно
                    использовать накопленный контент. Наша стратегия в таких
                    случаях включает "перезагрузку" — выявление и устранение
                    ошибок, мешающих SEO продвижению, с последующим ускоренным
                    выходом.
                  </p>
                  <p className="text-[16px] font-medium mb-[10px]">
                    Сайты, существующие более года без SEO продвижения, требуют
                    комплексной реабилитации. Часто они успевают накопить
                    технические и контентные проблемы, попасть под фильтры. Но и
                    в этом случае мы находим точки для развития — иногда старый
                    сайт проще и выгоднее "пересобрать", чем создавать новый.
                  </p>
                  <p className="text-[16px] font-medium">
                    Наш опыт показывает: независимо от текущего возраста сайта,
                    всегда есть возможности при продвижении. Мы разработаем
                    индивидуальную стратегию, которая учтет все особенности
                    именно вашего проекта. Первые три конкретных рекомендации по
                    SEO продвижению вы получите бесплатно — этого часто
                    достаточно, чтобы увидеть реальные перспективы развития.
                  </p>
                </div>
              </div>
            </>
          }
        />

        <BlockWithImageAndDropDownMenu
          isDark={true}
          title="Наш подход к молодым сайтам"
          miniTitle="Работа с молодыми сайтами — это не просто набор стандартных SEO-процедур. Это особая философия, которую мы разрабатывали через сотни успешных кейсов. Полгода существования сайта — это уникальное окно возможностей, когда можно заложить мощный фундамент для будущего лидерства в поисковой выдаче."
          borderColor="#ffffff"
          margin="md:py-[60px] py-[50px]"
          data={[
            {
              title: "Аналитической работы",
              description: [
                'Начинаем мы с глубокой аналитической работы, которая охватывает три ключевых направления. Технический аудит выявляет все "узкие места" — от скорости загрузки до корректности микроразметки. Маркетинговый анализ помогает понять реальные потребности целевой аудитории. Конкурентная разведка определяет слабые стороны игроков в вашей нише, которые можно обратить в преимущество.',
              ],
            },
            {
              title: "Формирование семантического ядра",
              description: [
                "Формирование семантического ядра у нас — это не просто сбор ключевых слов. Мы создаем живую карту поисковых вопросов, которая учитывает не только частотность, но и покупательские намерения, сезонные колебания спроса, региональные особенности. Эта карта становится основой для всей дальнейшей стратегии.",
              ],
            },
            {
              title: "Техническая оптимизация и продвижение",
              description: [
                "Техническая оптимизация и продвижение в целом проводится с прицелом на будущее. Мы не просто исправляем текущие ошибки, а создаем систему, которая будет масштабироваться. Особое внимание уделяем адаптации под мобильные устройства — сегодня это не дополнительная опция, а обязательное требование поисковых систем.",
              ],
            },
            {
              title: "Стратегия",
              description: [
                'Стратегия разрабатывается с учетом жизненного цикла молодого сайта. Материалы создаются таким образом, чтобы вывести сайт из "песочницы" и начать привлекать целевую аудиторию. Мы избегаем распространенной ошибки, когда сайт наполняют десятками страниц сомнительного качества — лучше меньше, но релевантнее и полезнее.',
              ],
            },
            {
              title: "Особенность нашего подхода",
              description: [
                'Особенность нашего подхода — в создании "положительной поведенческой истории". Мы учим сайт правильно взаимодействовать с поисковыми системами через продуманную внутреннюю перелинковку, грамотное наращивание ссылочной массы и формирование органического трафика. Это как воспитание ребенка — важно заложить правильные привычки.',
              ],
            },
          ]}
          firstBlock={
            <>
              <div className="h-fit lg:max-w-[753px] md:block hidden lg:min-w-[422px]">
                <Image
                  src={"/resources/seo-young-2.png"}
                  width={524}
                  height={543}
                  className="object-cover w-full"
                  alt="Наш подход к молодым сайтам"
                />
              </div>
              <div className="h-fit lg:max-w-[753px] md:hidden block lg:min-w-[422px]">
                <Image
                  src={"/resources/seo-young-2small.png"}
                  width={340}
                  height={350}
                  className="object-cover w-full"
                  alt="Наш подход к молодым сайтам"
                />
              </div>
            </>
          }
        />

        <StandardMarginsLayout
          styles={`py-[50px] md:py-[60px] bg-white text-black`}
          children={
            <div className="flex flex-col">
              <h2 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold mb-[30px] max-w-[1093px]">
                Почему новым сайтам критически важно SEO продвижение
              </h2>
              <p className="text-[22px] mb-[10px] font-medium max-w-[866px]">
                Сайт без SEO продвижения напоминает выключенный маяк - он есть,
                но не выполняет свою главную функцию.
              </p>
              <p className="text-[16px] mb-[30px] font-medium max-w-[866px]">
                В цифровом мире, где каждую минуту появляются новые конкуренты,
                промедление с продвижением молодого сайта в поисковиках
                равносильно добровольной сдаче позиций. Особенность молодых
                сайтов в том, что они находятся в своеобразном испытательном
                сроке у поисковых систем - этот период можно использовать как
                трамплин или упустить драгоценное время.
              </p>
              <div className="border-t-[1px] border-black pt-[30px] flex flex-col gap-[10px]">
                <p className="text-[16px] font-medium max-w-[866px]">
                  Многие владельцы  при продвижении совершают роковую ошибку,
                  считая, что сначала нужно "наполнить сайт", а уже потом
                  заниматься продвижением. На практике же грамотное продвижение
                  должно закладываться в основу сайта, как фундамент для
                  будущего. Пока вы накапливаете материалы, конкуренты уже
                  успевают занять лучшие позиции в поисковой выдаче, и потом
                  выбить их оттуда будет значительно сложнее и дороже.
                </p>
              </div>
            </div>
          }
        />

        <MainBlockTenth data={data} />
      </BasicLayout>
    </>
  );
};

export default marketplace;

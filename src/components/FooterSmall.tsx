import React from "react";
import FormField from "@/components/FormField";
import DiscussButton from "@/components/DiscussButton";
import FooterLogo from "@/components/FooterLogo";
import Image from "next/image";

const FooterSmall: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center self-stretch bg-neutral-900 sm:px-[60px] px-[20px]">
      <div className="w-[1320px] max-w-full flex flex-col sm:py-[60px] py-[40px] sm:gap-[60px] gap-[40px]">
        <div className="flex justify-between gap-[20px] flex-wrap flex-col sm:flex-row ">
          <FooterLogo />
          <div className="flex flex-col gap-[20px] sm:gap-2.5">
            <a href="tel:+375296342190">
              <span className="text-[18px] lg:text-[28px] font-bold text-white">
                +375 29 634 21 90
              </span>
            </a>
            <div className="flex flex-row gap-2.5">
              <a
                target="_blank"
                rel="nofollow"
                href="https://www.instagram.com/digital_devils_official?igsh=azB2MTQ2bWlzaXd6"
              >
                <Image
                  src="/resources/inst.svg"
                  width={32}
                  height={32}
                  alt="Instagram Logo"
                />
              </a>
              <a
                target="_blank"
                rel="nofollow"
                href="https://t.me/devilsmanager"
              >
                <Image
                  src="/resources/inst.svg"
                  width={32}
                  height={32}
                  alt="Telegram Logo"
                />
              </a>
            </div>
          </div>
          <div>
            <a href="malito:info@digitaldevils.by">
              <span className="text-[18px] lg:text-[28px] font-bold text-white">
                info@digitaldevils.by
              </span>
            </a>
          </div>
          <a
            href="/application"
            className="mt-2 px-5 py-3.5 max-w-full text-center text-lg bg-blue_main h-fit min-h-[50px] rounded-full text-white w-[227px]"
          >
            Обсудить проект
          </a>
        </div>
        <ul className="flex flex-row sm:gap-12 gap-x-[40px] gap-y-[20px] text-white text-[18px] font-medium flex-wrap">
          <li>
            {/* <a className="no-underline" href="/"> */}
            Разработка сайтов
            {/* </a> */}
          </li>
          <li>
            {/* <a className="no-underline" href="/"> */}
            WEB-дизайн
            {/* </a> */}
          </li>
          <li>
            {/* <a className="no-underline" href="/"> */}
            SEO продвижение
            {/* </a> */}
          </li>
          <li>
            {/* <a className="no-underline" href="/"> */}
            Мобильная разработка
            {/* </a> */}
          </li>
          <li>
            <a
              href="/personal_privacy.pdf"
              target="_blank"
              className="no-underline"
            >
              Политика конфиденциальности
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[1320px] max-w-full text-[16px] text-black_40 pb-[50px]">
        <p>
          Наши сайты можно встретить во всех городах Беларуси: Барановичи,
          Барань, Белоозерск, Белыничи, Береза, Березино, Березовка,
          Бешенковичи, Бобруйск, Большое Стиклево, Борисов, Боровляны, Браслав,
          Брест, Буда-Кошелево, Быхов, Верхнедвинск, Ветка, Вилейка, Витебск,
          Волковыск, Воложин, Ганцевичи, Глубокое, Глуск, Гомель, Горки,
          Городея, Городок, Гродно, Дзержинск, Добруш, Докшицы, Дрогичин,
          Дружный, Дятлово, Ельск, Жабинка, Житковичи, Жлобин, Жодино, Заславль,
          Иваново, Ивацевичи, Ивье, Ипуть-3, Калинковичи, Каменец, Клецк,
          Климовичи, Кличев, Кобрин, Колодищи, Копыль, Кореличи, Костюковичи,
          Кричев, Круглое, Крупки, Лельчицы, Лепель, Лесной, Лида, Логойск,
          Лоев, Лунинец, Любань, Ляховичи, Малорита, Марьина Горка, Микашевичи,
          Минск, Миоры, Михановичи, Могилев, Мозырь, Молодечно, Мосты,
          Мстиславль, Мядель, Наровля, Несвиж, Новогрудок, Новолукомль,
          Новополоцк, Орша, Осиповичи, Островец, Ошмяны, Петриков, Пинск,
          Полоцк, Поставы, Пружаны, Раков, Ратомка, Речица, Рогачев,
          Светлогорск, Свислочь, Сенно, Скидель, Славгород, Слоним, Слуцк,
          Смиловичи, Смолевичи, Сморгонь, Солигорск, Старые дороги, Столбцы,
          Столин, Толочин, Узда, Фаниполь, Хойники, Хотимск, Чаусы, Чашники,
          Червень, Чериков, Чечерск, Чисть, Шклов, Шумилино, Щучин.
        </p>
      </div>
    </section>
  );
};

export default FooterSmall;

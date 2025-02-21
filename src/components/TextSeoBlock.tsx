import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React from "react";

const TextSeoBlock = () => {
  return (
    <StandardMarginsLayout
      styles=""
      children={
        <div className="flex flex-col gap-[20px]">
          <p className="md:text-[24px] text-[18px] font-medium text-black">
            Digital Devils - это ваш надежный партнер, понимающий потребности
            онлайн-бизнеса, имеющий опыт успешного взаимодействия с сотнями
            клиентов и авторскими технологиями создания и продвижения
            веб-ресурсов любой сложности и функционалом: от простейших промо <a href='https://digitaldevils.by/landing' className='no-underline text-blue_main'>
            лендингов</a> и <a href='https://digitaldevils.by/card-website' className='no-underline text-blue_main'>визиток</a> для стартапов до полноценных <a href='https://digitaldevils.by/online-store' className='no-underline text-blue_main'>интернет-магазинов</a> и <a href='https://digitaldevils.by/marketplace' className='no-underline text-blue_main'>маркетплейсов</a> мирового масштаба.
          </p>
          <p className="md:text-[24px] text-[18px] font-medium text-black">
            Профессионально и творчески подходим к решению поставленных задач.
            Знаем, как повысить вовлеченность и лояльность целевой аудитории.
            Великолепно разбираемся в программировании, проектировании,
            веб-дизайне, компьютерной графике, SEO. Не боимся трудностей,
            постоянно ставим новые амбициозные цели, совершенствуемся сами и
            совершенствуем наши рабочие процессы. На отлично делаем свою работу
            и в каждый проект вкладываем чуточку больше, чем обещали. Стремимся
            приносить пользу клиентам. Гибко реагируем на замечания. Готовы
            нести финансовую ответственность за несоблюдение сроков. Стремимся к
            выстраиванию взаимовыгодных и долгосрочных отношений с
            предпринимателями и компаниями со всей страны.
          </p>
        </div>
      }
    />
  );
};

export default TextSeoBlock;

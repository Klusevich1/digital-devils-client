import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BasicLayout from "../layouts/BasicLayout";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import SEO, { ListItem } from "@/components/SEO";

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Контакты", link: "/contacts" },
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
    name: "Контакты",
    item: "https://digitaldevils.by/contacts",
  },
];

const contacts = () => {
  return (
    <>
      <SEO
        title="Контакты и реквизиты IT-компании Digital Devils"
        description="Свяжитесь с нами любым удобным для вас способом и мы найдем эффективное решение для вашего бизнеса. Доверяете Digital Devils - доверяете профессионалам. Мы всегда готовы помочь вам с любыми вопросами! "
        canonical="https://digitaldevils.by/contacts"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <BasicLayout>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <StandardMarginsLayout
          styles="pb-[50px]"
          children={
            <div className="flex flex-col ">
              <h1 className="text-[32px] md:text-[42px] lg:text-[60px] font-bold md:max-w-[400px] max-w-[230px] mb-[30px] leading-[1.2]">
                Контакты Digital Devils
              </h1>
              <a href="tel:+375296342190">
                <span className="sm:text-[24px] text-[22px] font-bold mb-[10px]">
                  +375 29 634 21 90
                </span>
              </a>
              <a href="mailto:info@digitaldevils.by">
                <span className="sm:text-[24px] text-[22px] font-bold">
                  info@digitaldevils.by
                </span>
              </a>

              <div className="flex flex-row gap-2.5 mt-[20px]">
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
                    src="/resources/tg.svg"
                    width={32}
                    height={32}
                    alt="Telegram Logo"
                  />
                </a>
              </div>
            </div>
          }
        />
      </BasicLayout>
    </>
  );
};

export default contacts;

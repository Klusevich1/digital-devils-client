import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";
import Inst from "../../public/inst.svg";
import Tg from "../../public/tg.svg";
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
              {/*min-h-[40vh]*/}
              <h1 className="sm:text-6xl text-[32px] font-bold">
                Контакты<br></br>
                Digital Devils<br></br>
                <a href="tel:+375296342190">
                  <span className="sm:text-2xl text-[22px] font-bold">
                    +375 29 634 21 90
                  </span>
                </a>
                <a href="mailto:edgtldevils@gmail.com">
                  <span className="sm:text-2xl text-[22px] font-bold">
                    <br></br>
                    dgtldevils@gmail.com
                  </span>
                </a>
              </h1>

              <div className="flex flex-row gap-2.5 mt-[20px]">
                <a href="https://www.instagram.com/digital_devils_official?igsh=azB2MTQ2bWlzaXd6">
                  <Image
                    src={Inst}
                    width={32}
                    height={32}
                    alt="Instagram Logo"
                  />
                </a>
                <a href="https://t.me/devilsmanager">
                  <Image src={Tg} width={32} height={32} alt="Telegram Logo" />
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

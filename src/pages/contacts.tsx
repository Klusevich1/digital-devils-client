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
            <div className="flex flex-col ">{/*min-h-[40vh]*/}
              <h2 className="sm:text-6xl text-[32px] font-bold">Контакты</h2>
              <h2 className="sm:text-6xl text-[32px] font-bold mb-[30px]">
                Digital Devils
              </h2>
              <span className="sm:text-2xl text-[22px] font-bold mb-[10px]">
                +375 29 634 21 90
              </span>
              <span className="sm:text-2xl text-[22px] font-bold">
                dgtldevils@gmail.com
              </span>
              <div className="flex flex-row gap-2.5 mt-[20px]">
                <a href="#">
                  <Image
                    src={Inst}
                    width={32}
                    height={32}
                    alt="Instagram Logo"
                  />
                </a>
                <a href="#">
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

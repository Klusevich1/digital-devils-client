import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import FooterLogo from "@/components/FooterLogo";

const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default BasicLayout;

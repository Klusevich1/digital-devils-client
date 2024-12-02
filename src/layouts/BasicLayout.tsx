import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import FooterLogo from "@/components/FooterLogo";

interface BasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default BasicLayout;

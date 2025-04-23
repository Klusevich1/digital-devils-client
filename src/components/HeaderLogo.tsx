import React from "react";
import Image from "next/image";

interface HeaderLogoProps {
  theme: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ theme }) => {
  return (
    <a
      className={`text-xl flex items-center ${
        theme === "dark" ? "text-white" : "text-black"
      } outline-none`}
      href="/"
    >
      {theme === "dark" ? (
        <Image
          src="/resources/logo-footer.png"
          width={40}
          height={40}
          className="size-[30px] md:size-[40px] mr-[10px]"
          alt="Digital Devils logo"
          priority={true}
        />
      ) : (
        <Image
          src="/resources/logo-header.png"
          width={40}
          height={40}
          className="size-[30px] md:size-[40px] mr-[10px]"
          alt="Digital Devils logo"
          priority={true}
        />
      )}
      <span className="md:text-[18px] text-[16px] font-semibold">
        Digital Devils
      </span>
    </a>
  );
};

export default HeaderLogo;

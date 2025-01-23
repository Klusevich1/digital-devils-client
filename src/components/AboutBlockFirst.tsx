import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

const AboutBlockFirst = () => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

    useEffect(() => {
        setTimeout(() => {
            setImageLoading(false)
        }, 100);
    }, [])

  return (
    <StandardMarginsLayout
      children={
        <div className="flex flex-col lg:flex-row w-full overflow-hidden">
          <div className="flex flex-col max-w-[450px] xl:max-w-[639px]">
            <h1 className="text-[40px] sm:text-[60px] 2xl:text-[80px] font-bold leading-[1.3] mb-[20px]" style={{lineHeight: "75px"}}>
              Digital Devils –<br></br>  лидеры <br></br>разработки
              <span className="text-blue_main ">
                <br></br> e-commerce
              </span>
            </h1>
          </div>
          <div className="flex-1 relative">
            <a
              href="/presentation.pdf"
              download="presentation.pdf"
              className="bottom-16 lg:bottom-32 left-1/4 absolute z-40
                     flex items-center justify-center xl:size-[190px] size-[120px] sm:size-[140px]"
            >
              <div className="absolute w-full h-full bg-white/60 backdrop-blur-md rounded-full shadow-lg"></div>
              <div className="relative text-center text-black">
                <p className="font-medium sm:text-[18px] text-[14px]">
                  Скачать
                </p>
                <p className="font-medium sm:text-[18px] text-[14px]">
                  презентацию
                </p>
                <p className="flex items-center justify-center font-bold  sm:text-[18px] text-[14px]">
                  PDF <FaRegFolderOpen className="ms-2" />
                </p>
              </div>
            </a>
            <div className={`${imageLoading ? 'opacity-0' : 'opacity-100'} transition-all`}>
              <Image
                src='/resources/About2.png'
                alt="About"
                width={1200}
                height={1050}
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AboutBlockFirst;

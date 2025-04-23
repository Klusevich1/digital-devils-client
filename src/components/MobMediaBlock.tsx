import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface MobMediaBlockProps {
  type: string;
  url1?: string;
  url1small?: string;
  url2?: string;
  url2small?: string;
  url3?: string;
  url3small?: string;
  url4?: string;
  url5?: string;
  urlVideo?: string;
}

const MobMediaBlock: React.FC<MobMediaBlockProps> = ({
  type,
  url1,
  url1small,
  url2,
  url2small,
  url3,
  url3small,
  url4,
  url5,
  urlVideo,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <StandardMarginsLayout
        styles="md:pt-[60px] pt-[50px] bg-white text-black"
        children={
          <>
            {type === "image" &&
              url1 &&
              url1small &&
              url2 &&
              url2small &&
              url3 &&
              url3small &&
              url4 &&
              url5 && (
                <>
                  <div className="md:flex hidden flex-row justify-self-center lg:gap-[40px] gap-[20px]">
                    <div>
                      <Image
                        src={url1}
                        alt="Design1"
                        width={300}
                        height={440}
                      />
                    </div>
                    <div className="flex flex-col lg:gap-[40px] gap-[20px]">
                      <div className="flex flex-row lg:gap-[40px] gap-[20px]">
                        <div>
                          <Image
                            src={url2}
                            alt="Design2"
                            width={300}
                            height={200}
                          />
                        </div>
                        <div>
                          <Image
                            src={url3}
                            alt="Design3"
                            width={187}
                            height={200}
                          />
                        </div>
                      </div>
                      <div>
                        <Image
                          src={url4}
                          alt="Design4"
                          width={527}
                          height={200}
                        />
                      </div>
                    </div>
                    <div>
                      <Image
                        src={url5}
                        alt="Design5"
                        width={414}
                        height={440}
                      />
                    </div>
                  </div>
                  <div className="md:hidden flex flex-col justify-self-center w-full gap-[20px]">
                    <div className="flex flex-row justify-self-center gap-[20px]">
                      <div className="w-full">
                        <Image
                          src={url1small}
                          alt="Design1"
                          width={160}
                          height={220}
                          className="w-full"
                        />
                      </div>
                      <div className="w-full">
                        <Image
                          src={url3small}
                          alt="Design3"
                          width={160}
                          height={220}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                      <div>
                        <Image
                          src={url2small}
                          alt="Design2"
                          width={340}
                          height={180}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Image
                          src={url4}
                          alt="Design4"
                          width={527}
                          height={200}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Image
                          src={url5}
                          alt="Design5"
                          width={414}
                          height={440}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            {type === "video" && urlVideo && (
              <>
                <div className="w-full">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="rounded-[30px] sm:rounded-[40px] md:h-[440px] h-[300px] object-cover w-full shadow-lg"
                    preload="none"
                  >
                    <source src={urlVideo} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
              </>
            )}
          </>
        }
      />
    </>
  );
};

export default MobMediaBlock;

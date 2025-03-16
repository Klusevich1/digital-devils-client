import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React, { FC, ReactNode } from "react";

export const ChooseTheRightOneBlock: FC<{
  title: string;
  text1?: ReactNode;
  text2: ReactNode;
  slash: string[];
  card: string;
  data: { title: string; text: string }[];
}> = ({ title, text1, text2, slash, card, data }) => {
  return (
    <StandardMarginsLayout
      styles="py-[50px] md:py-[60px] bg-black text-white"
      children={
        <>
          <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px]">
            {title}
          </h2>
          <div className="flex md:flex-row flex-col md:gap-12 gap-0 justify-between">
            <div className="max-w-[640px] md:w-1/2">
              {text1 && text1}
              {text2 && text2}
            </div>
            <div className="max-w-[640px] text-[18px]  md:w-1/2">
              {slash && slash.length === 0 ? (
                <></>
              ) : (
                <ul className="my-[20px]">
                  {slash.map((item, idx) => (
                    <li key={idx}>
                      <span className="text-custom_yellow text-[18px] font-medium">
                        /
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="md:my-0 my-[20px] md:mb-[20px]  bg-[#2B2B2B] p-[20px]">
                <p>{card}</p>
              </div>
              <div className="flex">
                {data[0] && (
                  <p className="me-[40px]">
                    {data[0].title}
                    <br></br>
                    <span className="font-bold">{data[0].text}</span>
                  </p>
                )}
                {data[1] && (
                  <p>
                    {data[1].title}
                    <br></br>
                    <span className="font-bold">{data[1].text}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

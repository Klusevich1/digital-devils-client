import React from "react";
import ListComponent from "@/components/ListComponent";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";

interface OurApproachBlockProps {
  title: string;
  listData: { title: string; text: string[] }[];
  padding?: string;
  isDark?: boolean;
}

const OurApproachBlock: React.FC<OurApproachBlockProps> = ({
  title,
  listData,
  padding = "pt-[50px] md:pt-[60px]",
  isDark = false
}) => {
  return (
    <StandardMarginsLayout
      styles={`${padding} ${isDark ? 'bg-black text-white' : ''}`}
      children={
        <>
          <h2 className="font-bold text-[32px] md:text-[42px] lg:text-[60px] mb-[30px]">
            {title}
          </h2>
          <ListComponent data={listData} />
        </>
      }
    />
  );
};

export default OurApproachBlock;

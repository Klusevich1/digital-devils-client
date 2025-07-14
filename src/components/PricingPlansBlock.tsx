import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";

interface Plan {
  description?: string;
  buttonText: string;
  buttonColor: string;
  buttonBgColor: string;
  bgColor: string;
  list: string[];
  smallTitle: string;
  secondSmallTitle?: string;
  price: string;
}

interface PricingPlansBlockProps {
  title: string;
  plans: Plan[];
  min_h_ticket_list?: number;
  isOnlyBottomPadding?: boolean;
}

const PricingPlansBlock: React.FC<PricingPlansBlockProps> = ({
  title,
  plans,
  min_h_ticket_list,
  isOnlyBottomPadding,
}) => {
  return (
    <StandardMarginsLayout
      styles={
        isOnlyBottomPadding
          ? "pb-[50px] md:pb-[60px]"
          : "py-[50px] md:py-[60px]"
      }
      children={
        <div className="flex flex-col w-full">
          <h2 className="text-[32px] md:text-[48px] lg:text-[60px] font-bold mb-[30px] w-full">
            {title}
          </h2>
          <div className="flex lg:flex-row flex-col lg:gap-4 justify-between items-stretch">
            {plans.map((plan, idx) => (
              <div
                className={`relative max-w-full lg:max-w-[414px] w-full h-full lg:mt-0 mt-[30px] overflow-hidden`}
                key={idx}
              >
                <div
                  className={`relative z-10 flex flex-col w-full h-full rounded-[40px] ${
                    plan.bgColor
                      ? `bg-${plan.bgColor} border-[1.5px] border-black text-black`
                      : "bg-blue_main text-white border-[1.5px] border-transparent"
                  }`}
                >
                  <div className="px-[26px] pt-[31px]">
                    <h3
                      className={`text-[18px] font-bold ${
                        plan.description != "" ? "mb-0" : "mb-[8px]"
                      } `}
                    >
                      {plan.smallTitle}
                    </h3>
                    {plan.description && plan.description != "" ? (
                      <p className="text-[14px] font-medium mt-[4px]">
                        {plan.description}
                      </p>
                    ) : (
                      <></>
                    )}
                    <div className="flex items-end">
                      <p className="text-[18px] font-bold me-2 mb-[8px]">от</p>
                      <p>
                        <span className="text-[36px] lg:text-[40px] font-bold">
                          {plan.price}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="relative h-[40px]">
                    <div
                      className={`absolute top-1/2 left-0 right-0 border-t-[1.5px] border-dashed ${
                        plan.bgColor ? "border-black" : "border-white"
                      } translate-y-[-50%] z-10`}
                    />
                  </div>
                  <div className="flex flex-col justify-between px-[26px] pb-[31px] h-full">
                    {plan.list && plan.list.length > 0 ? (
                      <div
                        className="flex flex-col"
                        style={{ minHeight: min_h_ticket_list }}
                      >
                        {plan.secondSmallTitle &&
                        plan.secondSmallTitle != "" ? (
                          <p className="text-[16px] font-medium mb-[10px]">
                            {plan.secondSmallTitle}
                          </p>
                        ) : (
                          <></>
                        )}
                        <ul>
                          {plan.list.map((item, index) => (
                            <li
                              key={index}
                              className="flex flex-row items-center mb-[15px]"
                            >
                              <div className="flex min-w-[20px] min-h-[20px]  me-[10px]">
                                <FaCircleChevronRight className="!w-[20px] !h-[20px]" />
                              </div>
                              <span className="text-[16px] font-medium">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="flex justify-center">
                      <a
                        className="flex lg:w-fit w-full"
                        href="/application"
                        rel="nofollow"
                      >
                        <div
                          className={`font-medium text-[16px] lg:w-fit w-full py-[14px] px-[20px] text-center rounded-full text-white`}
                          style={{
                            backgroundColor: plan.buttonBgColor,
                            color: plan.buttonColor,
                          }}
                        >
                          {plan.buttonText}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute left-[-20px] lg:top-[112px] top-[106px] w-[40px] h-[40px] bg-white rounded-full z-20 ${
                    plan.bgColor ? "border-[1.5px] border-black" : ""
                  }`}
                />
                <div
                  className={`absolute right-[-20px] lg:top-[112px] top-[106px] w-[40px] h-[40px] bg-white rounded-full z-20 ${
                    plan.bgColor ? "border-[1.5px] border-black" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
};

export default PricingPlansBlock;

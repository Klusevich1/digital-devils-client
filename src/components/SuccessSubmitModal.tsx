import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

interface SuccessSubmitModalProps {
  congratulations: string;
  isDataSend: boolean;
}

const SuccessSubmitModal: React.FC<SuccessSubmitModalProps> = ({
  congratulations,
  isDataSend
}) => {

  const router = useRouter();

  const closeModal = () => {
    document.body.style.overflow = "auto";
    router.reload();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all ${
            !isDataSend ? "opacite-0 hidden" : "opacity-100 visible"
        }`}
      >
        <div
          className={`md:w-[400px] w-[350px] md:rounded-[30px] rounded-[25px] bg-white md:p-[30px] p-[25px] transition-all ${
            !isDataSend ? "opacity-0" : "opacity-100"
          }`}
        >
          <RxCross2 onClick={closeModal} size={23} className="cursor-pointer float-end"/>
          <div className="h-fit">
            <div>
              <p className="text-[22px] font-bold mb-[5px] text-center pb-[10px]">
                {congratulations}
              </p>
              <p className="text-[16px] font-medium text-center w-full">
                <a href="/" className="text-blue_main">Вернуться на главную</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessSubmitModal;

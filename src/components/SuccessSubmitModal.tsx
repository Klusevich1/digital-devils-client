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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSettings, setIsSettings] = useState<boolean>(false);
  const [necessaryCookie, setNecessaryCookie] = useState<boolean>(true);
  const [staticCookie, setStaticCookie] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const consent = getCookie("cookieConsent");
      if (consent !== "true") {
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
      }
    }, 5000);
  }, []);

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
          className={`md:w-[400px] w-[100%] md:rounded-[30px] bg-white md:p-[30px] transition-all ${
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

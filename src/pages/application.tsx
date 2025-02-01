import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LayoutWithSmallFooter } from "@/layouts/LayoutWithSmallFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaPaperclip } from "react-icons/fa6";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import SEO, { ListItem } from "@/components/SEO";
import { IMaskInput } from "react-imask";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router";
import SuccessSubmitModal from "@/components/SuccessSubmitModal";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать хотя бы 2 символа")
    .max(50, "Имя слишком длинное"),
  phone: z
    .string()
    .min(1, "Поле с номером телефона должно быть заполнено")
    .regex(
      /^\+375 \([1-9][1-9]\) \d{3}-\d{2}-\d{2}$/,
      "Введите номер в формате: +375 (29) 333-33-33"
    ),
  email: z.string().email("Введите правильный E-mail"),
  company: z
    .string()
    .min(2, "Название должно содержать хотя бы 2 символа")
    .max(50, "Название слишком длинное"),
  services: z
    .array(
      z.enum([
        "Веб-разработка",
        "Мобильное приложение",
        "Дизайн",
        "Motion",
        "SEO",
      ])
    )
    .nonempty("Выберите хотя бы одну услугу"),
  help: z.string().optional(),
  file: z.any().optional(),
});

type FormData = z.infer<typeof formSchema>;

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Оставить заявку", link: "/application" },
];

const Application = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    setError,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      services: [],
      help: "",
    },
  });
  const services: Array<
    "Веб-разработка" | "Мобильное приложение" | "Дизайн" | "Motion" | "SEO"
  > = ["Веб-разработка", "Мобильное приложение", "Дизайн", "Motion", "SEO"];

  const [congratulations, setCongratulations] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDataSend, setIsDataSend] = useState<boolean>(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [agreeForMailing, setAgreeForMailing] = useState<boolean>(true);
  const [agreePolicy, setAgreePolicy] = useState<boolean>(true);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]); // Устанавливаем файл в состояние
    }
  };

  const removeFile = () => {
    setSelectedFile(null); // Удаляем файл из состояния
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const formData = new FormData();

    formData.append("name", data.name || "");
    formData.append("phone", data.phone || "");
    formData.append("email", data.email || "");
    if (data.company) formData.append("company", data.company);
    formData.append("help", data.help || "");
    formData.append("agreePolicy", agreePolicy ? "Согласен" : "Не согласен");
    formData.append(
      "agreeForMailing",
      agreeForMailing ? "Согласен" : "Не согласен"
    );

    data.services.forEach((service) => formData.append("services[]", service));

    if (selectedFile) {
      formData.append("file", selectedFile);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/application`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        setCongratulations(false);
        throw new Error(`Ошибка: ${response.statusText}`);
      } else {
        setCongratulations(true);
      }

      reset({
        name: "",
        phone: "",
        email: "",
        company: "",
        services: [],
        help: "",
      });
      setSelectedFile(null);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      setCongratulations(false);
    } finally {
      setTimeout(() => {
        setIsDataSend(true);
        setLoading(false);
      }, 500);
    }
  };

  const handlePolicyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreePolicy(event.target.checked);
  };

  const handleMailingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeForMailing(event.target.checked);
  };

  const breadcrumbsSchema: ListItem[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: "https://digitaldevils.by",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Оставить заявку",
      item: "https://digitaldevils.by/application",
    },
  ];

  return (
    <>
      <SEO
        title="Онлайн-заявка на разработку | Digital Devils"
        description="Оставьте онлайн-заявку, чтобы быстро связаться с нашей командой. Расскажите о своем проекте или задаче, и мы предложим лучшее решение. Заполните форму, мы свяжемся с вами в ближайшее время для обсуждения всех деталей!"
        canonical="https://digitaldevils.by/application"
        breadcrumbsSchema={breadcrumbsSchema}
      />
      <LayoutWithSmallFooter>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <StandardMarginsLayout
          styles="pt-0 pb-[50px] lg:pb-[50px]"
          children={
            <>
              <div className="flex justify-between lg:flex-row flex-col gap-10">
                <div className="max-w-[530px]">
                  <h1 className="font-bold text-[28px] md:text-[32px] lg:text-[48px] xl:text-[60px]">
                    Есть идея для проекта?
                  </h1>
                  <p className="text-[18px] md:text-[22px] mt-[20px] mb-[30px]">
                    Расскажите нам о своем проекте и мы воплотим его в жизнь.
                    Заполните форму или отправьте письмо на e-mail:
                  </p>
                  <a
                    href="malito:dgtldevils@gmail.com"
                    className="font-bold text-[22px] md:text-[24px]"
                  >
                    dgtldevils@gmail.com
                  </a>
                </div>

                <form
                  className="flex flex-col md:gap-[30px] gap-[20px] font-medium min-w-[240px] lg:w-[641px] max-w-none w-full md:max-w-full"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="md:grid flex flex-col md:grid-cols-2 gap-4">
                    <div className="relative lg:max-w-[300px] w-full">
                      <label
                        htmlFor="name"
                        className="block text-[18px] font-medium"
                      >
                        Имя
                        <span> *</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="h-[43px] mt-1 block w-full p-2 border-b outline-none bg-white focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                      />
                      {errors.name && (
                        <p className="absolute bottom-[-18px] left-0 text-red text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="relative lg:max-w-[300px] w-full">
                      <label
                        htmlFor="phone"
                        className="block text-[18px] font-medium"
                      >
                        Телефон
                        <span> *</span>
                      </label>
                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <IMaskInput
                            mask="+375 (00) 000-00-00"
                            onBlur={onBlur}
                            onAccept={onChange}
                            value={value}
                            inputRef={ref}
                            defaultValue="+375"
                            placeholder="+375 (29) 333-33-33"
                            className="h-[43px] mt-1 block w-full p-2 border-b outline-none bg-white focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                          />
                        )}
                      />
                      {errors.phone && !congratulations && (
                        <p className="absolute bottom-[-18px] left-0 text-red text-xs">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="relative lg:max-w-[300px] w-full">
                      <label
                        htmlFor="email"
                        className="block text-[18px] font-medium"
                      >
                        E-mail
                        <span> *</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="h-[43px] mt-1 block w-full p-2 border-b outline-none bg-white focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                      />
                      {errors.email && (
                        <p className="absolute bottom-[-18px] left-0 text-red text-xs">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="relative lg:max-w-[300px] w-full">
                      <label
                        htmlFor="company"
                        className="block text-[18px] font-medium"
                      >
                        Компания
                        <span> *</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register("company")}
                        className="h-[43px] mt-1 block w-full p-2 border-b outline-none bg-white focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                      />
                      {errors.company && (
                        <p className="absolute bottom-[-18px] left-0 text-red text-xs">
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    <div className="relative col-span-2  mt-4">
                      <label
                        htmlFor="services"
                        className="block text-[18px] font-medium"
                      >
                        Выберите услуги
                        <span> *</span>
                      </label>
                      <div className="relative mt-2 flex flex-wrap gap-2">
                        {services.map((service) => {
                          const selectedServices = watch("services") || [];
                          const isChecked = selectedServices.includes(service);
                          return (
                            <label
                              key={service}
                              className={`transition-all duration-300 flex items-center gap-2 ${
                                isChecked
                                  ? "bg-blue_main text-white"
                                  : "bg-black_5"
                              } px-[10px] py-[10.5px] rounded-full cursor-pointer`}
                            >
                              <input
                                type="checkbox"
                                value={service}
                                {...register("services")}
                                className="form-checkbox hidden"
                              />
                              <span>{service}</span>
                            </label>
                          );
                        })}
                      </div>
                      {errors.services && (
                        <p className="absolute bottom-[-18px] left-0 text-red text-xs">
                          {errors.services.message ==
                          "Expected array, received boolean"
                            ? "Выберите хотя бы одну услугу"
                            : errors.services.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col justify-between sm:flex-row col-span-2 w-full">
                      <div className="relative w-full lg:max-w-[400px] pe-3">
                        <label
                          htmlFor="help"
                          className="block text-[18px] font-medium"
                        >
                          Чем мы можем вам помочь?
                        </label>
                        <textarea
                          id="help"
                          {...register("help")}
                          className="h-[43px] mt-1 block w-full p-2 border-b outline-none bg-white focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                          rows={1}
                        />
                        {errors.help && (
                          <p className="absolute bottom-[-18px] left-0 text-red text-xs">
                            {errors.help.message}
                          </p>
                        )}
                      </div>

                      <div className="w-full md:mt-0 mt-[30px] h-full text-center sm:text-left items-end flex max-w-full sm:max-w-[218px]">
                        {!selectedFile ? (
                          <label
                            htmlFor="file"
                            className="max-h-[50px] w-[218px] inline-flex justify-center sm:justify-start items-center gap-2 cursor-pointer border border-black_80 rounded-full px-5 py-[12px] text-gray-700 hover:bg-gray-100"
                          >
                            <FaPaperclip className="text-gray-600" />
                            <span className="text-[18px] w-full">
                              Прикрепить файл
                            </span>
                            <input
                              id="file"
                              type="file"
                              onChange={onFileChange}
                              className="hidden"
                            />
                          </label>
                        ) : (
                          <div className="flex items-center w-full gap-2 border border-black_80 rounded-full px-5 py-[12px] text-gray-700">
                            <span className="text-[18px] w-full">
                              {selectedFile.name}
                            </span>
                            <RxCross2
                              type="button"
                              onClick={removeFile}
                              size={20}
                              className="text-red-600 hover:text-red-800 cursor-pointer"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <h4 className="text-[16px] font-medium">
                      Согласие на обработку персональных данных
                    </h4>
                    <div className="flex flex-row items-start">
                      <input
                        type="checkbox"
                        className="custom-checkbox color-black"
                        id="agreePolicy"
                        name="agreePolicy"
                        checked={agreePolicy}
                        onChange={handlePolicyChange}
                      />
                      <label
                        htmlFor="agreePolicy"
                        className="text-[14px] font-medium"
                      >
                        <p>
                          Я уведомлен(а), что мои персональные данные, указанные
                          в настоящей анкете, будут обработаны оператором в
                          соответствии с{" "}
                          <a
                            href="/personal_privacy.pdf"
                            target="_blank"
                            className="underline"
                          >
                            Политикой оператора в отношении обработки
                            персональных данных.
                          </a>
                        </p>
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        className="custom-checkbox color-black"
                        id="agreeForMailing"
                        name="agreeForMailing"
                        value="yes"
                        checked={agreeForMailing}
                        onChange={handleMailingChange}
                      />
                      <label
                        htmlFor="agreeForMailing"
                        className="text-[14px] font-medium"
                      >
                        Даю согласие на получение рассылок и рекламных
                        материалов
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`submit-button ${
                      loading ? "loading" : ""
                    } mt-2 px-[39px] py-[12px] md:w-[227px] w-full text-center text-lg bg-blue_main h-fit min-h-[50px] rounded-full text-white`}
                  >
                    {loading ? "Отправка..." : "Обсудить проект"}
                  </button>
                </form>
              </div>
              {isDataSend && (
                <SuccessSubmitModal
                  congratulations={congratulations}
                  isDataSend={isDataSend}
                />
              )}
            </>
          }
        />
      </LayoutWithSmallFooter>
    </>
  );
};

export default Application;

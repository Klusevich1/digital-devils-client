import React, { useState } from "react";
import DiscussButton from "./DiscussButton";
import Image from "next/image";
import FooterLogo from "./FooterLogo";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaPaperclip } from "react-icons/fa6";
import { IMaskInput } from "react-imask";
import { RxCross2 } from "react-icons/rx";
import SuccessSubmitModal from "./SuccessSubmitModal";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать хотя бы 2 символа")
    .max(50, "Имя слишком длинное"),
  phone: z.string().min(1, "Поле с номером телефона должно быть заполнено"),
  // .regex(
  //   /^\+375 \([1-9][1-9]\) \d{3}-\d{2}-\d{2}$/,
  //   "Введите номер телефона в формате: +375 (29) 333-33-33"
  // ),
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

const Footer: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
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
        throw new Error(`Ошибка: ${response.statusText}`);
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
      setCongratulations(true);
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      setCongratulations(false);
    } finally {
      setIsDataSend(true);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="text-white flex flex-col justify-center items-center self-stretch bg-neutral-900">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-start max-w-[1440px] custom_container min-h-[358px] w-full md:py-[60px] py-[40px]">
          <div className="max-w-[530px]">
            <h2 className="font-bold text-[28px] md:text-[32px] lg:text-[48px] xl:text-[60px]">
              Есть идея для проекта?
            </h2>
            <p className="md:text-[18px] text-[16px] mt-[20px] mb-[30px]">
              Расскажите нам о своем проекте и мы воплотим его в жизнь.
              Заполните форму или отправьте письмо на адрес:
            </p>
            <p className="font-bold text-[22px] md:text-[24px]">
              <a href="mailto:edgtldevils@gmail.com">dgtldevils@gmail.com</a>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:gap-[30px] gap-[20px] font-medium min-w-[240px] lg:w-[641px] max-w-none w-full md:max-w-full"
          >
            <div className="md:grid flex flex-col md:grid-cols-2 gap-4">
              <div className="relative lg:max-w-[300px] w-full">
                <label htmlFor="name" className="block text-[18px] font-medium">
                  Имя
                  <span> *</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="h-[43px] mt-1 block w-full p-2 border-b border-black_10 bg-transparent outline-none rounded-none focus:border-b-2 focus:border-white transition-all"
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
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <IMaskInput
                      mask="+375 (00) 000-00-00"
                      onBlur={onBlur}
                      onAccept={onChange}
                      value={value}
                      inputRef={ref}
                      defaultValue="+375"
                      placeholder="+375 (29) 333-33-33"
                      className="h-[43px] mt-1 block w-full p-2 border-b outline-none bg-transparent focus:border-white focus:border-b-2 transition-all rounded-none"
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
                  className="h-[43px] mt-1 block w-full p-2 border-b border-black_10 bg-transparent outline-none rounded-none focus:border-b-2 focus:border-white transition-all"
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
                  className="h-[43px] mt-1 block w-full p-2 border-b border-black_10 bg-transparent outline-none rounded-none focus:border-b-2 focus:border-white transition-all"
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
                  className="block text-[18px] font-medium mb-[15px]"
                >
                  Выберите услуги
                  <span> *</span>
                </label>
                <div className="mt-2 flex flex-wrap gap-[15px] text-black">
                  {services.map((service) => {
                    const selectedServices = watch("services") || [];
                    const isChecked = selectedServices.includes(service);
                    return (
                      <label
                        key={service}
                        className={`transition-all duration-300 flex items-center gap-2 ${
                          isChecked ? "bg-blue_main text-white" : "bg-black_5"
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
                    className="h-[43px] mt-1 block w-full p-2 border-b border-black_10 bg-transparent outline-none rounded-none focus:border-b-2 focus:border-white transition-all"
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
                      className="group max-h-[50px] md:w-[218px] w-full inline-flex justify-center sm:justify-start items-center gap-2 cursor-pointer border border-white rounded-full px-5 py-[12px] text-white hover:bg-white hover:text-black"
                    >
                      <FaPaperclip className="group-hover:text-black text-white" />
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
                    <div className="w-full flex items-center gap-2 border border-white rounded-full px-5 py-[12px] text-white">
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
              <button
                type="submit"
                className={`submit-button ${
                  loading ? "loading" : ""
                } mt-2 px-[39px] py-[12px] w-full md:w-[227px] text-center text-lg bg-blue_main h-fit min-h-[50px] rounded-full text-white`}
              >
                {loading ? "Отправка..." : "Обсудить проект"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-full max-w-full flex flex-col sm:py-[60px] py-[40px] sm:gap-[60px] gap-[40px] custom_container">
          <div className="flex justify-between gap-[20px] flex-wrap flex-col sm:flex-row ">
            <FooterLogo />
            <div className="flex flex-col gap-[20px] sm:gap-2.5">
              <a href="tel:+375296342190">
                <span className="text-[18px] lg:text-[28px] font-bold text-white">
                  +375 29 634 21 90
                </span>
              </a>
              <div className="flex flex-row gap-2.5">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.instagram.com/digital_devils_official?igsh=azB2MTQ2bWlzaXd6"
                >
                  <Image
                    src="/resources/inst.svg"
                    width={32}
                    height={32}
                    alt="Instagram Logo"
                  />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://t.me/devilsmanager"
                >
                  <Image
                    src="/resources/tg.svg"
                    width={32}
                    height={32}
                    alt="Telegram Logo"
                  />
                </a>
              </div>
            </div>
            <div>
              <a href="mailto:edgtldevils@gmail.com">
                <span className="text-[18px] lg:text-[28px] font-bold text-white">
                  dgtldevils@gmail.com
                </span>
              </a>
            </div>
            <a
              href="/application"
              rel="nofollow"
              className="mt-2 px-[39px] py-[12px] md:w-[227px] w-full max-w-full text-center text-lg bg-blue_main h-fit min-h-[50px] rounded-full text-white"
            >
              Обсудить проект
            </a>
          </div>
          <ul className="flex flex-row sm:gap-12 gap-x-[40px] gap-y-[20px] text-white text-[18px] font-medium flex-wrap">
            <li>
              {/* <a className="no-underline" href="/"> */}
              Разработка сайтов
              {/* </a> */}
            </li>
            <li>
              {/* <a className="no-underline" href="/"> */}
              WEB-дизайн
              {/* </a> */}
            </li>
            <li>
              {/* <a className="no-underline" href="/"> */}
              SEO продвижение
              {/* </a> */}
            </li>
            <li>
              {/* <a className="no-underline" href="/"> */}
              Мобильная разработка
              {/* </a> */}
            </li>
            <li>
              {/* <a className="no-underline" href="/"> */}
              Политика конфиденциальности
              {/* </a> */}
            </li>
          </ul>
        </div>
        <div className="w-full max-w-full text-[14px] text-black_40 pb-[50px] custom_container">
          <p>
            Наши сайты можно встретить во всех городах Беларуси: Барановичи,
            Барань, Белоозерск, Белыничи, Береза, Березино, Березовка,
            Бешенковичи, Бобруйск, Большое Стиклево, Борисов, Боровляны,
            Браслав, Брест, Буда-Кошелево, Быхов, Верхнедвинск, Ветка, Вилейка,
            Витебск, Волковыск, Воложин, Ганцевичи, Глубокое, Глуск, Гомель,
            Горки, Городея, Городок, Гродно, Дзержинск, Добруш, Докшицы,
            Дрогичин, Дружный, Дятлово, Ельск, Жабинка, Житковичи, Жлобин,
            Жодино, Заславль, Иваново, Ивацевичи, Ивье, Ипуть-3, Калинковичи,
            Каменец, Клецк, Климовичи, Кличев, Кобрин, Колодищи, Копыль,
            Кореличи, Костюковичи, Кричев, Круглое, Крупки, Лельчицы, Лепель,
            Лесной, Лида, Логойск, Лоев, Лунинец, Любань, Ляховичи, Малорита,
            Марьина Горка, Микашевичи, Минск, Миоры, Михановичи, Могилев,
            Мозырь, Молодечно, Мосты, Мстиславль, Мядель, Наровля, Несвиж,
            Новогрудок, Новолукомль, Новополоцк, Орша, Осиповичи, Островец,
            Ошмяны, Петриков, Пинск, Полоцк, Поставы, Пружаны, Раков, Ратомка,
            Речица, Рогачев, Светлогорск, Свислочь, Сенно, Скидель, Славгород,
            Слоним, Слуцк, Смиловичи, Смолевичи, Сморгонь, Солигорск, Старые
            дороги, Столбцы, Столин, Толочин, Узда, Фаниполь, Хойники, Хотимск,
            Чаусы, Чашники, Червень, Чериков, Чечерск, Чисть, Шклов, Шумилино,
            Щучин.
          </p>
        </div>
      </section>
      {isDataSend && (
        <SuccessSubmitModal
          congratulations={congratulations}
          isDataSend={isDataSend}
        />
      )}
    </>
  );
};

export default Footer;

import React from "react";
import DiscussButton from "./DiscussButton";
import Inst from "../../public/inst.svg";
import Tg from "../../public/tg.svg";
import Image from "next/image";
import FooterLogo from "./FooterLogo";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaPaperclip } from "react-icons/fa6";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать хотя бы 2 символа")
    .max(50, "Имя слишком длинное"),
  phone: z
    .string()
    .min(10, "Введите правильный номер телефона")
    .max(15, "Номер телефона слишком длинный"),
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
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  type ServiceType =
    | "Веб-разработка"
    | "Мобильное приложение"
    | "Дизайн"
    | "Motion"
    | "SEO";

  const services: ServiceType[] = [
    "Веб-разработка",
    "Мобильное приложение",
    "Дизайн",
    "Motion",
    "SEO",
  ];

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setValue("file", event.target.files[0]);
    }
  };

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    if (data.company) formData.append("company", data.company);
    formData.append("help", data.help || "");

    data.services.forEach((service) => formData.append("services[]", service));

    if (data.file) {
      formData.append("file", data.file);
    }

    try {
      const response = await fetch("https://backend.digitaldevils.by/application", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Успешно отправлено:", result);
      alert("Заявка успешно отправлена!");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Не удалось отправить заявку. Попробуйте позже.");
    }
  };

  return (
    <section className="text-white flex flex-col justify-center items-center self-stretch bg-neutral-900 sm:px-[60px] px-[20px]">
      <div className="flex flex-wrap gap-10 justify-between items-start max-w-full min-h-[358px] w-[1320px] sm:py-[60px] py-[40px]">
        <header className="flex flex-col min-w-[240px] text-neutral-50 w-[530px] max-md:max-w-full">
          <h1 className="sm:text-6xl text-[28px] font-bold leading-[75px] max-md:max-w-full max-md:leading-[56px]">
            Есть идея для проекта?
          </h1>
          <p className="mt-5 sm:text-2xl text-[18px] font-medium max-md:max-w-full">
            Расскажите нам о своем проекте и мы воплотим его в жизнь. Заполните
            форму или отправьте письмо на адрес:
          </p>
          <p className="sm:mt-8 mt-5 sm:text-2xl text-[22px] font-bold max-md:max-w-full">
            dgtldevils@gmail.com
          </p>
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:gap-[30px] gap-[20px] font-medium min-w-[240px] w-[641px] md:max-w-full"
        >
          <div className="flex flex-wrap gap-10 items-center w-full md:max-w-full">
            <div className="md:max-w-[300px] w-full">
              <label htmlFor="name" className="block text-sm font-medium">
                Имя
                <span> *</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="mt-1 block w-full p-2 border-b border-black_10 bg-transparent"
              />
              {errors.name && (
                <p className="text-red text-xs">{errors.name.message}</p>
              )}
            </div>
            <div className="md:max-w-[300px] w-full">
              <label htmlFor="phone" className="block text-sm font-medium">
                Телефон
                <span> *</span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="mt-1 block w-full p-2 border-b border-black_10 bg-transparent"
              />
              {errors.phone && (
                <p className="text-red text-xs">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
            <div className="md:max-w-[300px] w-full">
              <label htmlFor="email" className="block text-sm font-medium">
                E-mail
                <span> *</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="mt-1 block w-full p-2 border-b border-black_10 bg-transparent"
              />
              {errors.email && (
                <p className="text-red text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="md:max-w-[300px] w-full">
              <label htmlFor="company" className="block text-sm font-medium">
                Компания
                <span> *</span>
              </label>
              <input
                id="company"
                type="text"
                {...register("company")}
                className="mt-1 block w-full p-2 border-b border-black_10 bg-transparent"
              />
              {errors.company && (
                <p className="text-red text-xs">{errors.company.message}</p>
              )}
            </div>
          </div>

          <div className="col-span-2  mt-4">
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
                }
              )}
            </div>
            {errors.services && (
              <p className="text-red text-xs">{errors.services.message}</p>
            )}
          </div>

          <div className="flex flex-col items-end justify-between sm:flex-row col-span-2 w-full text-white">
            <div className="w-full sm:max-w-[400px] pe-3">
              <label htmlFor="help" className="block text-[18px] font-medium">
                Чем мы можем вам помочь?
              </label>
              <textarea
                id="help"
                {...register("help")}
                className="mt-1 block w-full p-2 border-b border-black_10 bg-transparent"
                rows={1}
              />
              {errors.help && (
                <p className="text-red text-xs">{errors.help.message}</p>
              )}
            </div>

            <div className="w-full sm:mt-0 mt-4 h-full text-center sm:text-left items-end flex max-w-full sm:max-w-[210px]">
              <label
                htmlFor="file"
                className="text-white max-h-[50px] w-full inline-flex justify-center sm:justify-start items-center gap-2 cursor-pointer border border-white rounded-full px-5 py-2 hover:bg-gray-100"
              >
                <FaPaperclip className="text-white" />
                <span>Прикрепить файл</span>
                <input
                  id="file"
                  type="file"
                  onChange={onFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <DiscussButton />
        </form>
      </div>
      <div className="w-[1320px] max-w-full flex flex-col sm:py-[60px] py-[40px] sm:gap-[60px] gap-[40px]">
        <div className="flex justify-between gap-[20px] flex-wrap flex-col sm:flex-row ">
          <FooterLogo />
          <div className="flex flex-col gap-[20px] sm:gap-2.5">
            <span className="text-[18px] lg:text-[28px] font-bold text-white">
              +375 29 634 21 90
            </span>
            <div className="flex flex-row gap-2.5">
              <Image src={Inst} width={32} height={32} alt="Instagram Logo" />
              <Image src={Tg} width={32} height={32} alt="Telegram Logo" />
            </div>
          </div>
          <div>
            <span className="text-[18px] lg:text-[28px] font-bold text-white">
              dgtldevils@gmail.com
            </span>
          </div>
          <a
            href="/application"
            className="mt-2 px-5 py-3.5 max-w-full text-center text-lg bg-blue_main h-fit min-h-[50px] rounded-full text-white w-[227px]"
          >
            Обсудить проект
          </a>
        </div>
        <ul className="flex flex-row sm:gap-12 gap-x-[40px] gap-y-[20px] text-white text-[18px] font-medium flex-wrap">
          <li>
            <a className="no-underline" href="/">
              Разработка сайтов
            </a>
          </li>
          <li>
            <a className="no-underline" href="/">
              WEB-дизайн
            </a>
          </li>
          <li>
            <a className="no-underline" href="/">
              SEO продвижение
            </a>
          </li>
          <li>
            <a className="no-underline" href="/">
              Мобильная разработка
            </a>
          </li>
          <li>
            <a className="no-underline" href="/">
              Политика конфеденциальности
            </a>
          </li>
        </ul>
      </div>
      <div className="w-[1320px] max-w-full text-[16px] text-black_40 pb-[50px]">
        <p>
          Наши сайты можно встретить во всех городах Беларуси: Барановичи,
          Барань, Белоозерск, Белыничи, Береза, Березино, Березовка,
          Бешенковичи, Бобруйск, Большое Стиклево, Борисов, Боровляны, Браслав,
          Брест, Буда-Кошелево, Быхов, Верхнедвинск, Ветка, Вилейка, Витебск,
          Волковыск, Воложин, Ганцевичи, Глубокое, Глуск, Гомель, Горки,
          Городея, Городок, Гродно, Дзержинск, Добруш, Докшицы, Дрогичин,
          Дружный, Дятлово, Ельск, Жабинка, Житковичи, Жлобин, Жодино, Заславль,
          Иваново, Ивацевичи, Ивье, Ипуть-3, Калинковичи, Каменец, Клецк,
          Климовичи, Кличев, Кобрин, Колодищи, Копыль, Кореличи, Костюковичи,
          Кричев, Круглое, Крупки, Лельчицы, Лепель, Лесной, Лида, Логойск,
          Лоев, Лунинец, Любань, Ляховичи, Малорита, Марьина Горка, Микашевичи,
          Минск, Миоры, Михановичи, Могилев, Мозырь, Молодечно, Мосты,
          Мстиславль, Мядель, Наровля, Несвиж, Новогрудок, Новолукомль,
          Новополоцк, Орша, Осиповичи, Островец, Ошмяны, Петриков, Пинск,
          Полоцк, Поставы, Пружаны, Раков, Ратомка, Речица, Рогачев,
          Светлогорск, Свислочь, Сенно, Скидель, Славгород, Слоним, Слуцк,
          Смиловичи, Смолевичи, Сморгонь, Солигорск, Старые дороги, Столбцы,
          Столин, Толочин, Узда, Фаниполь, Хойники, Хотимск, Чаусы, Чашники,
          Червень, Чериков, Чечерск, Чисть, Шклов, Шумилино, Щучин.
        </p>
      </div>
    </section>
  );
};

export default Footer;

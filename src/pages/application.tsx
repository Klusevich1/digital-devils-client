import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LayoutWithSmallFooter } from "@/layouts/LayoutWithSmallFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaPaperclip } from "react-icons/fa6";
import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import SEO, { ListItem } from "@/components/SEO";

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

const breadcrumbs = [
  { name: "Главная", link: "/" },
  { name: "Оставить заявку", link: "/application" },
];

const Application = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const services: Array<
    "Веб-разработка" | "Мобильное приложение" | "Дизайн" | "Motion" | "SEO"
  > = ["Веб-разработка", "Мобильное приложение", "Дизайн", "Motion", "SEO"];

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

      const result = await response.json();
      console.log("Успешно отправлено:", result);
      alert("Заявка успешно отправлена!");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Не удалось отправить заявку. Попробуйте позже.");
    }
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
              <div className="flex justify-between lg:flex-row flex-col">
                <div className="max-w-[530px]">
                  <h1 className="font-bold text-[28px] md:text-[32px] lg:text-[48px] xl:text-[60px]">
                    Есть идея для проекта?
                  </h1>
                  <p className="text-[18px] md:text-[22px] mt-[20px] mb-[30px]">
                    Расскажите нам о своем проекте и мы воплотим его в жизнь.
                    Заполните форму или отправьте письмо на e-mail:
                  </p>
                  <a href="malito:dgtldevils@gmail.com">
                    <h2 className="font-bold text-[22px] md:text-[24px]">
                      dgtldevils@gmail.com
                    </h2>
                  </a>
                </div>

                <form
                  className="max-w-[641px] w-full mt-8"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="md:grid flex flex-col md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium"
                      >
                        Имя
                        <span> *</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="h-[43px] mt-1 block w-full p-2 border-b outline-none focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                      />
                      {errors.name && (
                        <p className="text-red text-xs">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium"
                      >
                        Телефон
                        <span> *</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        className="h-[43px] mt-1 block w-full p-2 border-b outline-none focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                      />
                      {errors.phone && (
                        <p className="text-red text-xs">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                      >
                        E-mail
                        <span> *</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="h-[43px] mt-1 block w-full p-2 border-b outline-none focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                      />
                      {errors.email && (
                        <p className="text-red text-xs">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium"
                      >
                        Компания
                        <span> *</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register("company")}
                        className="h-[43px] mt-1 block w-full p-2 border-b outline-none focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                      />
                      {errors.company && (
                        <p className="text-red text-xs">
                          {errors.company.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2">
                      <label
                        htmlFor="services"
                        className="block text-sm font-medium"
                      >
                        Выберите услуги
                        <span> *</span>
                      </label>
                      <div className="mt-2 flex flex-wrap gap-2">
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
                        <p className="text-red text-xs">
                          {errors.services.message ==
                          "Expected array, received boolean"
                            ? "Выберите хотя бы одну услугу"
                            : errors.services.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col justify-between sm:flex-row col-span-2 w-full">
                      <div className="w-full sm:max-w-[400px] pe-3">
                        <label
                          htmlFor="help"
                          className="block text-sm font-medium"
                        >
                          Чем мы можем вам помочь?
                        </label>
                        <textarea
                          id="help"
                          {...register("help")}
                          className="h-[43px] mt-1 block w-full p-2 border-b outline-none focus:border-black_80 focus:border-b-2 transition-all rounded-none"
                          rows={1}
                        />
                        {errors.help && (
                          <p className="text-red text-xs">
                            {errors.help.message}
                          </p>
                        )}
                      </div>

                      <div className="w-full sm:mt-0 mt-2 h-full text-center sm:text-left items-end flex max-w-full sm:max-w-[200px]">
                        <label
                          htmlFor="file"
                          className="max-h-[50px] w-full inline-flex justify-center sm:justify-start items-center gap-2 cursor-pointer border border-black_80 rounded-full px-5 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          <FaPaperclip className="text-gray-600" />
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
                    <button
                      type="submit"
                      className="mt-2 px-5 py-3.5 max-w-full text-center text-lg bg-blue_main h-fit min-h-[50px] rounded-full text-white w-[227px]"
                    >
                      Обсудить проект
                    </button>
                  </div>
                </form>
              </div>
            </>
          }
        />
      </LayoutWithSmallFooter>
    </>
  );
};

export default Application;

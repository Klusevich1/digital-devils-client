import StandardMarginsLayout from "@/layouts/StandardMarginsLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { z } from "zod";
import SuccessSubmitModal from "./SuccessSubmitModal";

interface QuizBlockProps {
  quizQuestions: { title: string; options: string[]; textField?: string }[];
  page: string;
  title: string;
  description?: string;
  padding: string;
}

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
});

type FormData = z.infer<typeof formSchema>;

const QuizBlock: React.FC<QuizBlockProps> = ({
  quizQuestions,
  page,
  title,
  description,
  padding,
}) => {
  const [activeQuestion, setActiveQuestion] = useState<number>(1);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const [congratulations, setCongratulations] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isDataSend, setIsDataSend] = useState<boolean>(false);

  const current = quizQuestions[activeQuestion - 1];

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
    },
  });

  const nameValue = watch("name");
  const phoneValue = watch("phone");

  const handleAnswer = (value: string) => {
    const isLastOption = current.options[current.options.length - 1] === value;
    setAnswers((prev) => ({
      ...prev,
      [activeQuestion]: value,
      ...(isLastOption ? {} : { [`custom_${activeQuestion}`]: "" }),
    }));
  };

  const toggleQuestion = (type: "prev" | "next") => {
    if (type === "prev" && activeQuestion > 1) {
      setActiveQuestion(activeQuestion - 1);
    } else if (type === "next" && activeQuestion < quizQuestions.length) {
      setActiveQuestion(activeQuestion + 1);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (loading || isDataSend) return;
    setLoading(true);

    const finalAnswers = { ...answers };

    Object.keys(answers).forEach((key) => {
      if (key.startsWith("custom_")) {
        const baseKey = key.replace("custom_", "");
        const customValue = answers[key]?.trim();
        if (customValue) {
          finalAnswers[baseKey] = `${finalAnswers[baseKey]} (${customValue})`;
        }
        delete finalAnswers[key];
      }
    });

    const payload = {
      name: data.name,
      phone: data.phone,
      fromQuiz: true,
      answers: finalAnswers,
      page: page,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/application`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        setCongratulations(false);
        throw new Error(`Ошибка: ${response.statusText}`);
      } else {
        setCongratulations(true);
        if (typeof window !== "undefined") {
          if (!window.__formSubmitPushed) {
            window.__formSubmitPushed = true;
            window.dataLayer?.push({ event: "form_submit" });
          }

          if (typeof window.ym === "function") {
            window.ym(99204054, "reachGoal", "form");
          }
        }
      }

      clearErrors();
      reset({
        name: "",
        phone: "",
      });
      setValue("phone", "");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      setCongratulations(false);
      if (typeof window !== "undefined") {
        window.__formSubmitPushed = false;
      }
    } finally {
      setIsDataSend(true);
      setLoading(false);
    }
  };

  return (
    <>
      <StandardMarginsLayout
        styles={`${padding}`}
        children={
          <div id="quiz">
            <div className="flex flex-col gap-3 mb-[30px]">
              <h3 className="md:text-[40px] text-[28px] font-bold">{title}</h3>
              {description && (
                <p className="max-w-[639px] text-[18px] font-medium">
                  {description}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-[30px] md:p-[30px] p-[20px] min-h-[417px] rounded-[40px] border border-black_80">
              <div className="flex flex-col gap-4">
                <p className="md:text-[22px] text-[18px] font-bold">
                  Вопрос {activeQuestion} из {quizQuestions.length}
                </p>
                <div className="flex flex-row items-center gap-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className={`md:w-[80px] w-[28px] md:h-[6px] h-[4px] rounded-full transition-all duration-200 ${
                        i < activeQuestion ? "bg-blue_main" : "bg-black_10"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-start flex-1 justify-between xl:gap-[121px] lg:gap-[60px] gap-[30px]">
                <div className="lg:hidden block w-full">
                  <Image
                    src={
                      page === "Главная"
                        ? "/resources/quizimg_small.png"
                        : "/resources/quizimg-landing_small.png"
                    }
                    width={532}
                    height={282}
                    alt="Quiz"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    {activeQuestion === quizQuestions.length && (
                      <p className="text-[28px] font-bold">Расчет готов!</p>
                    )}
                    <p className="md:text-[28px] text-[24px] font-bold mb-[20px]">
                      {current.title}
                    </p>
                    <div
                      className={`flex flex-col gap-3 ${
                        activeQuestion === quizQuestions.length ? "" : "mb-8"
                      }`}
                    >
                      {current.options.map((option, i) => {
                        const isLastOption = i === current.options.length - 1;
                        const isSelected = answers[activeQuestion] === option;

                        return (
                          <div key={i} className="flex flex-col gap-2">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id={`option-${activeQuestion}-${i}`}
                                name={`quiz-${activeQuestion}`}
                                className="hidden peer"
                                checked={isSelected}
                                onChange={() => handleAnswer(option)}
                              />
                              <label
                                htmlFor={`option-${activeQuestion}-${i}`}
                                className="flex items-center gap-2 cursor-pointer text-[16px] font-medium peer-checked:font-bold transition-all duration-200"
                              >
                                <div className="w-4 h-4 relative">
                                  <Image
                                    src={
                                      isSelected
                                        ? "/resources/radio_checked.svg"
                                        : "/resources/radio.svg"
                                    }
                                    alt="radio"
                                    layout="fill"
                                    objectFit="contain"
                                  />
                                </div>
                                {option}
                              </label>
                            </div>

                            {current.textField &&
                              isLastOption &&
                              isSelected && (
                                <input
                                  type="text"
                                  value={
                                    answers[`custom_${activeQuestion}`] || ""
                                  }
                                  onChange={(e) =>
                                    setAnswers({
                                      ...answers,
                                      [`custom_${activeQuestion}`]:
                                        e.target.value,
                                    })
                                  }
                                  placeholder={current.textField}
                                  className="h-[43px] mt-1 block w-full max-w-[500px] p-2 border-b border-black_80 bg-transparent outline-none rounded-none focus:border-b-2 focus:border-black transition-all"
                                />
                              )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {activeQuestion === quizQuestions.length ? (
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex md:flex-row flex-col justify-between gap-[20px] mb-5">
                        <div className="relative lg:max-w-[300px] w-full">
                          <input
                            id="name"
                            type="text"
                            {...register("name")}
                            placeholder="Имя"
                            className="h-[43px] mt-1 block w-full p-2 border-b border-black_80 bg-transparent outline-none rounded-none focus:border-b-2 focus:border-black transition-all"
                          />
                          {errors.name && (
                            <p className="absolute bottom-[-18px] left-0 text-red text-xs">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div className="relative lg:max-w-[300px] w-full">
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
                                placeholder="Телефон"
                                className="h-[43px] mt-1 block w-full p-2 border-b border-black_80 outline-none bg-transparent focus:border-black focus:border-b-2 transition-all rounded-none"
                              />
                            )}
                          />
                          {/* {errors.phone && (
                            <p className="absolute bottom-[-18px] left-0 text-red text-xs">
                              {errors.phone.message}
                            </p>
                          )} */}
                        </div>
                      </div>
                      <div className="flex flex-row justify-between">
                        <button
                          onClick={() => toggleQuestion("prev")}
                          disabled={activeQuestion === 1}
                          className="border px-[36px] py-[12px] text-[16px] font-medium rounded-full text-black border-blue_main hover:bg-blue_main hover:text-white transition-all duration-150"
                        >
                          Назад
                        </button>
                        <button
                          type="submit"
                          disabled={
                            loading ||
                            !answers[activeQuestion] ||
                            !nameValue?.trim() ||
                            !phoneValue?.trim()
                          }
                          className={`${loading ? "loading" : ""} ${
                            loading ||
                            !answers[activeQuestion] ||
                            !nameValue?.trim() ||
                            !phoneValue?.trim()
                              ? " bg-black_40"
                              : " bg-blue_main"
                          } border px-[36px] py-[12px] text-[16px] font-medium rounded-full text-white`}
                        >
                          {loading ? "Отправка..." : "Отправить"}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex flex-row justify-between">
                      <button
                        onClick={() => toggleQuestion("prev")}
                        disabled={activeQuestion === 1}
                        className="border px-[36px] py-[12px] text-[16px] font-medium rounded-full text-black border-blue_main hover:bg-blue_main hover:text-white transition-all duration-150"
                      >
                        Назад
                      </button>
                      <button
                        onClick={() => toggleQuestion("next")}
                        disabled={!answers[activeQuestion]}
                        className={`${
                          !answers[activeQuestion]
                            ? " bg-black_40"
                            : " bg-blue_main"
                        } border px-[36px] py-[12px] text-[16px] font-medium rounded-full text-white`}
                      >
                        Далее
                      </button>
                    </div>
                  )}
                </div>
                <div className="lg:block hidden min-w-[400px] max-w-[532px] w-full">
                  <Image
                    src={
                      page === "Главная"
                        ? "/resources/quizimg.png"
                        : "/resources/quizimg-landing.png"
                    }
                    width={532}
                    height={282}
                    alt="Quiz"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />
      {isDataSend && (
        <SuccessSubmitModal
          congratulations={congratulations}
          isDataSend={isDataSend}
          setIsDataSend={setIsDataSend}
          setAnswers={setAnswers}
          setActiveQuestion={setActiveQuestion}
        />
      )}
    </>
  );
};

export default QuizBlock;

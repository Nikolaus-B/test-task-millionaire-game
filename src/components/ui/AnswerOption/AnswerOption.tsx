"use client";

import clsx from "clsx";
import styles from "./AnswerOption.module.scss";
import { AnswerBgImage } from "@/assets/AnswerBgImage/AnswerBgImage";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { checkAnswer } from "@/redux/game/thunk";
import { selectGameStore } from "@/redux/game/selectors";
import { useEffect, useRef, useState } from "react";
import { nextQuestion, setScore } from "@/redux/game/slice";
import { useRouter } from "next/navigation";

type AnswerOptionProps = {
  letter: string;
  children: React.ReactNode;
};

export const AnswerOption = ({ letter, children }: AnswerOptionProps) => {
  const [currentAnswer, setCurrentAnswer] = useState<string | null>();
  const answer = useRef<HTMLButtonElement | null>(null);

  const dispatch = useAppDispatch();
  const {
    currentQuestion,
    correctAnswers,
    isAnswerCorrect,
    currentQuestionIndex,
    questions,
  } = useAppSelector(selectGameStore);

  const router = useRouter();

  useEffect(() => {
    if (isAnswerCorrect === null || !answer.current || !correctAnswers) return;

    const isCorrect = correctAnswers.includes(children as string);
    const isSelected = children === currentAnswer;

    if (isSelected || (isCorrect && !isAnswerCorrect)) {
      const className = isCorrect ? styles.correct : styles.wrong;
      answer.current.classList.add(className);

      setTimeout(() => {
        answer.current?.classList.remove(className);
      }, 2900);
    }

    if (isSelected) {
      setTimeout(() => {
        if (isAnswerCorrect === false) {
          router.push("/result");
          return;
        }

        const isLastQuestion = currentQuestionIndex === questions.length - 1;

        if (isLastQuestion) {
          dispatch(setScore(currentQuestion?.amount));
          router.push("/result");
        } else {
          dispatch(nextQuestion());
        }
      }, 3000);
    }
  }, [isAnswerCorrect]);

  const handleAnswerClick = () => {
    if (!currentQuestion) return;
    setCurrentAnswer(children as string);
    dispatch(
      checkAnswer({
        questionId: currentQuestion.id,
        selectedAnswer: children as string,
      })
    );
  };

  return (
    <button
      type="button"
      ref={answer}
      onClick={handleAnswerClick}
      className={clsx(styles.button)}
    >
      <AnswerBgImage />

      <div className={styles.line} />
      <div className={styles.text}>
        <div className={styles.letter}>{letter} </div>
        <div className={styles.label}> {children}</div>
      </div>
    </button>
  );
};

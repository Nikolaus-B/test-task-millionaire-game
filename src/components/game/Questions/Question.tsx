import React from "react";
import { GameQuestion } from "@/types/game";
import styles from "./Question.module.scss";
import { getLetterByIndex } from "@/utils/getLetterByIndex";
import { AnswerOption } from "@/components/ui/AnswerOption/AnswerOption";

interface QuestionComponentProps {
  question: GameQuestion;
}

export const Question: React.FC<QuestionComponentProps> = ({ question }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{question.text}</h2>
      <ul className={styles.questionList}>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <AnswerOption letter={getLetterByIndex(index)}>
              {answer}
            </AnswerOption>
          </li>
        ))}
      </ul>
    </div>
  );
};

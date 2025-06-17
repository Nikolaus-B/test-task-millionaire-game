"use client";

import React, { useMemo } from "react";
import { GameQuestion } from "@/types/game";
import styles from "./Question.module.scss";
import { getLetterByIndex } from "@/utils/getLetterByIndex";
import { AnswerOption } from "@/components/ui/AnswerOption/AnswerOption";

interface QuestionComponentProps {
  question: GameQuestion;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({ question }) => {
  const options = useMemo(
    () =>
      question.answers.map((answer, index) => (
        <li key={index}>
          <AnswerOption letter={getLetterByIndex(index)}>{answer}</AnswerOption>
        </li>
      )),
    [question.answers]
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{question.text}</h2>
      <ul className={styles.questionList}>{options}</ul>
    </div>
  );
};

export const Question = React.memo(QuestionComponent);
QuestionComponent.displayName = "Question";

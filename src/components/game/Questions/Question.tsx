"use client";

import React from "react";

import { GameQuestion } from "@/types/game";
import AnswerOption from "@/components/ui/AnswerOption/AnswerOption";
import styles from "./Question.module.scss";

type Props = {
  question: GameQuestion;
};

const Question: React.FC<Props> = ({ question }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{question?.text}</h2>
      <ul className={styles.questionList}>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <AnswerOption letter="A">{answer}</AnswerOption>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

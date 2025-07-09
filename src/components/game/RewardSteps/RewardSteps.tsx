import { GameQuestion } from "@/types/game";
import styles from "./RewardSteps.module.scss";
import { Step } from "./Step";
import clsx from "clsx";
import React from "react";

type Props = {
  question: GameQuestion;
  questionsRewards: number[];
  className?: string;
};

export const RewardSteps: React.FC<Props> = ({
  question,
  questionsRewards,
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <ul className={styles.stepList}>
        {questionsRewards.map((reward) => (
          <Step key={reward} reward={reward} currentAmount={question.amount} />
        ))}
      </ul>
    </div>
  );
};

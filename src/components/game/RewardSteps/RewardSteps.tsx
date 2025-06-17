"use client";

import { GameQuestion } from "@/types/game";
import styles from "./RewardSteps.module.scss";
import { Step } from "./Step";
import clsx from "clsx";

type Props = {
  question: GameQuestion;
  questionsRewards: number[];
  className?: string;
};

export const RewardSteps: React.FC<Props> = ({
  // question,
  questionsRewards,
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <ul className={styles.stepList}>
        {questionsRewards.map((questionsReward) => {
          return (
            <li key={questionsReward}>
              <Step>{questionsReward}</Step>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

"use client";

import { GameQuestion } from "@/types/game";
import styles from "./RewardSteps.module.scss";
import { Step } from "./Step";
import clsx from "clsx";
import React, { useMemo } from "react";

type Props = {
  question: GameQuestion;
  questionsRewards: number[];
  className?: string;
};

const RewardStepsComponent: React.FC<Props> = ({
  question,
  questionsRewards,
  className,
}) => {
  const steps = useMemo(
    () =>
      questionsRewards.map((reward) => {
        const isActive = reward === question.amount;
        const isInactive = reward < question.amount;

        return (
          <li key={reward}>
            <Step active={isActive} inactive={isInactive}>
              {`$${reward.toLocaleString()}`}
            </Step>
          </li>
        );
      }),
    [question.amount, questionsRewards]
  );

  return (
    <div className={clsx(styles.container, className)}>
      <ul className={styles.stepList}>{steps}</ul>
    </div>
  );
};

export const RewardSteps = React.memo(RewardStepsComponent);
RewardSteps.displayName = "RewardSteps";

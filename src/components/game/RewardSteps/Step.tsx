import { AnswerBgImage } from "@/assets/AnswerBgImage/AnswerBgImage";
import styles from "./RewardSteps.module.scss";
import clsx from "clsx";
import React from "react";

type StepProps = {
  reward: number;
  currentAmount: number;
};

const StepComponent = ({ reward, currentAmount }: StepProps) => {
  const isActive = reward === currentAmount;
  const isInactive = reward < currentAmount;

  return (
    <li>
      <div
        className={clsx(styles.button, {
          [styles.active]: isActive,
          [styles.inactive]: isInactive,
        })}
      >
        <AnswerBgImage />
        <div className={styles.line} />
        <div className={styles.optionText}>{`$${reward.toLocaleString()}`}</div>
      </div>
    </li>
  );
};

export const Step = React.memo(StepComponent);
Step.displayName = "Step";

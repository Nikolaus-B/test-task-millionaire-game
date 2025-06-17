"use client";

import { AnswerBgImage } from "@/assets/AnswerBgImage/AnswerBgImage";
import styles from "./RewardSteps.module.scss";
import clsx from "clsx";
import React from "react";

type StepProps = React.PropsWithChildren<{
  active?: boolean;
  inactive?: boolean;
}>;

const StepComponent = ({ active, inactive, children }: StepProps) => {
  return (
    <div
      className={clsx(styles.button, {
        [styles.active]: active,
        [styles.inactive]: inactive,
      })}
    >
      <AnswerBgImage />
      <div className={styles.line} />
      <div className={styles.optionText}>{children}</div>
    </div>
  );
};

export const Step = React.memo(StepComponent);
Step.displayName = "Step";

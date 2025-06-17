"use client";

import { AnswerBgImage } from "@/assets/AnswerBgImage/AnswerBgImage";
import styles from "./RewardSteps.module.scss";
import clsx from "clsx";

type StepProps = React.PropsWithChildren<{
  active?: boolean;
  inactive?: boolean;
}>;

export const Step = ({ active, inactive, children }: StepProps) => {
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

"use client";

import clsx from "clsx";
import styles from "./AnswerOption.module.scss";
import { AnswerBgImage } from "@/assets/AnswerBgImage/AnswerBgImage";

type AnswerOptionProps = {
  letter: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  correct?: boolean;
  wrong?: boolean;
};

export default function AnswerOption({
  letter,
  children,
  onClick,
  disabled,
  selected,
  correct,
  wrong,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(styles.button, {
        [styles.selected]: selected,
        [styles.correct]: correct,
        [styles.wrong]: wrong,
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
    >
      <AnswerBgImage />

      <div className={styles.line} />
      <div className={styles.text}>
        <div className={styles.letter}>{letter} </div>
        <div className={styles.label}> {children}</div>
      </div>
    </button>
  );
}

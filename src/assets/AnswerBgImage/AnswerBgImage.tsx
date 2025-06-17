"use client";

import React from "react";
import styles from "./AnswerBgImage.module.scss";

type AnswerBgImageProps = {
  styles?: string;
};

export const AnswerBgImage = ({}: AnswerBgImageProps) => {
  return (
    <svg viewBox="0 0 389 72" fill="none" className={styles.bgImage}>
      <path
        d="M33.0117 0.5H355.988C359.494 0.500093 362.802 2.09857 364.979 4.83008L365.187 5.09766L388.374 36L365.187 66.9023C363.015 69.7967 359.607 71.4999 355.988 71.5H33.0117C29.5061 71.4999 26.1984 69.9014 24.0205 67.1699L23.8135 66.9023L0.625 36L23.8135 5.09766C25.9854 2.20331 29.3931 0.500099 33.0117 0.5Z"
        fill="white"
        stroke="#D0D0D8"
      />
    </svg>
  );
};

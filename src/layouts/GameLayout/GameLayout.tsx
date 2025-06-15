"use client";

import React from "react";
import styles from "./GameLayout.module.scss";

interface GameLayoutProps {
  children: React.ReactNode;
}

const GameLayout = ({ children }: GameLayoutProps) => {
  return <main className={styles.main}>{children}</main>;
};

export default GameLayout;

"use client";

import { useRouter } from "next/navigation";
import styles from "./GameOverScreen.module.scss";

export default function GameOverScreen() {
  const router = useRouter();

  return (
    <div className={styles.result}>
      <h2>Game Over!</h2>
      <button onClick={() => router.push("/")}>Try Again</button>
    </div>
  );
}

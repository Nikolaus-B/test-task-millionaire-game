"use client";

import { useRouter } from "next/navigation";
import styles from "./GameScreen.module.scss";

export default function GameScreen() {
  const router = useRouter();

  return (
    <div className={styles.game}>
      <h2>Game is running</h2>
      <button onClick={() => router.push("/result")}>Finish Game</button>
    </div>
  );
}

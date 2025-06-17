"use client";

import { useRouter } from "next/navigation";
import styles from "./GameOverScreen.module.scss";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { resetGame } from "@/redux/game/slice";
import { selectGameScore } from "@/redux/game/selectors";

export default function GameOverScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const score = useAppSelector(selectGameScore);

  const handleStartGameClick = () => {
    dispatch(resetGame());
    router.push("/game");
  };
  return (
    <section className={clsx(styles.section, "screen-section")}>
      <Image
        src="/images/thumbs-up.svg"
        alt="Thumbs up"
        className="screen-img"
        width={280}
        height={280}
        priority
      />

      <div className="content">
        <div className={styles.textWrapper}>
          <h3>Total score:</h3>
          <h4 className="screen-headline">${score} earned</h4>
        </div>
        <Button onClick={handleStartGameClick} variant="primary">
          Start
        </Button>
      </div>
    </section>
  );
}

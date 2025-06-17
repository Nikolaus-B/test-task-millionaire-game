"use client";

import { useRouter } from "next/navigation";
import styles from "./GameOverScreen.module.scss";
import Image from "next/image";
import clsx from "clsx";
import Button from "@/components/ui/Button/Button";

export default function GameOverScreen() {
  const router = useRouter();

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
          <h4 className="screen-headline">$4000 earned</h4>
        </div>
        <Button onClick={() => router.push("/game")} variant="primary">
          Start
        </Button>
      </div>
    </section>
  );
}

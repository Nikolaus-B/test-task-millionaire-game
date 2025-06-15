"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button/Button";
import styles from "./StartScreen.module.scss";
import clsx from "clsx";

export default function StartScreen() {
  const router = useRouter();

  return (
    <section className={clsx(styles.section, "screen-section")}>
      <Image
        src="/images/thumbs-up.svg"
        alt="Thumbs up"
        className="screen-img "
        width={280}
        height={280}
        priority
      />

      <div className="content">
        <h1 className="screen-headline">
          Who wants to be
          <br />a millionaire?
        </h1>
        <Button onClick={() => router.push("/game")} variant="primary">
          Start
        </Button>
      </div>
    </section>
  );
}

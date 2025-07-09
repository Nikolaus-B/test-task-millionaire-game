"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchGameQuestions } from "@/redux/game/thunk";
import { selectGameStore } from "@/redux/game/selectors";

import { RewardSteps } from "@/components/game/RewardSteps/RewardSteps";
import styles from "./GameScreen.module.scss";
import Modal from "@/components/ui/Modal/Modal";

import clsx from "clsx";
import Image from "next/image";
import { Question } from "@/components/game/Questions/Question";

const GameScreen = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { currentQuestion, questions } = useAppSelector(selectGameStore);

  useEffect(() => {
    dispatch(fetchGameQuestions());
  }, []);

  const questionsRewards = questions.map((question) => {
    return question.amount;
  });

  return (
    <section className={clsx(styles.section)}>
      {currentQuestion && (
        <>
          <Question question={currentQuestion} />

          <button
            className={styles.openModalBtn}
            onClick={() => setSidebarOpen(true)}
          >
            <Image
              src="/images/burger-menu.svg"
              alt="Thumbs up"
              className="screen-img"
              width={280}
              height={280}
              priority
            />
          </button>
          <RewardSteps
            questionsRewards={questionsRewards}
            question={currentQuestion}
            className={styles.sidebar}
          />

          <Modal isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}>
            <RewardSteps
              questionsRewards={questionsRewards}
              question={currentQuestion}
            />
          </Modal>
        </>
      )}

      <div id="modal-root" />
    </section>
  );
};

export default GameScreen;

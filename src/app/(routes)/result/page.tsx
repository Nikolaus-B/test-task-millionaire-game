"use client";

import GameOverScreen from "@/components/screens/GameOverScreen/GameOverScreen";
import GameLayout from "@/layouts/GameLayout/GameLayout";

export default function ResultPage() {
  return (
    <GameLayout>
      <GameOverScreen />
    </GameLayout>
  );
}

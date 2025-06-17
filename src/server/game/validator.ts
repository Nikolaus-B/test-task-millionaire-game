import { correctAnswers } from "./correctAnswers";

export function validateAnswer(
  questionId: string,
  selectedAnswers: string[]
): boolean {
  const correct = correctAnswers[questionId];
  if (!correct) return false;

  const selectedSorted = [...selectedAnswers].sort();
  const correctSorted = [...correct].sort();

  return JSON.stringify(selectedSorted) === JSON.stringify(correctSorted);
}

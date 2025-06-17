import { correctAnswers } from "./correctAnswers";
export interface CorrectAnswerData {
  isCorrent: boolean;
  questionAnswers: string[];
}
export function validateAnswer(
  questionId: string,
  selectedAnswer: string
): CorrectAnswerData {
  const questionAnswers = correctAnswers[questionId];
  if (!questionAnswers)
    return { isCorrent: false, questionAnswers: questionAnswers };

  return {
    isCorrent: questionAnswers.some((question) => question === selectedAnswer),
    questionAnswers: questionAnswers,
  };
}

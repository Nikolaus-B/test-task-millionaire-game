import { RootState } from "../store";

export const selectGameStore = (state: RootState) => state.game;
export const selectQuestions = (state: RootState) => state.game.questions;
export const selectCurrentQuestion = (state: RootState) =>
  state.game.currentQuestion;

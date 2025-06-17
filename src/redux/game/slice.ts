import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGameQuestions, checkAnswer } from "./thunk";
import { GameQuestion } from "@/types/game";
import { CorrectAnswerData } from "@/server/game/validator";

interface GameState {
  questions: GameQuestion[];
  score: number;
  currentQuestion: GameQuestion | null;
  currentQuestionIndex: number;
  isAnswerCorrect: boolean | null;
  correctAnswers: string[] | null;
  isGameOver: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  questions: [],
  score: 0,
  currentQuestion: null,
  currentQuestionIndex: 0,
  isAnswerCorrect: null,
  correctAnswers: null,
  isGameOver: false,
  loading: false,
  error: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state) => {
      Object.assign(state, initialState);
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    nextQuestion: (state) => {
      state.score = state.currentQuestion!.amount;
      state.currentQuestionIndex += 1;
      state.currentQuestion = state.questions[state.currentQuestionIndex];
      state.isAnswerCorrect = null;
      state.correctAnswers = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGameQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchGameQuestions.fulfilled,
        (state, action: PayloadAction<GameQuestion[]>) => {
          state.questions = action.payload;
          state.currentQuestion = action.payload[0] ?? null;
          state.loading = false;
        }
      )
      .addCase(fetchGameQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(checkAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        checkAnswer.fulfilled,
        (state, action: PayloadAction<CorrectAnswerData>) => {
          state.isAnswerCorrect = action.payload.isCorrent;
          state.correctAnswers = action.payload.questionAnswers;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(checkAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetGame, nextQuestion, setScore } = gameSlice.actions;
const gameReducer = gameSlice.reducer;
export default gameReducer;

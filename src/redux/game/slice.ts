import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGameQuestions, checkAnswer } from "./thunk";
import { GameQuestion } from "@/types/game";

interface GameState {
  questions: GameQuestion[];
  score: number;
  currentQuestion: GameQuestion | null;
  isAnswerCorrect: boolean | null;
  isGameOver: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: GameState = {
  questions: [],
  score: 0,
  currentQuestion: null,
  isAnswerCorrect: null,
  isGameOver: false,
  loading: false,
  error: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: () => initialState,
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
        (state, action: PayloadAction<boolean>) => {
          state.isAnswerCorrect = action.payload;
          state.loading = false;
          if (!action.payload) {
            state.isGameOver = true;
          }
        }
      )
      .addCase(checkAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetGame } = gameSlice.actions;
const gameReducer = gameSlice.reducer;
export default gameReducer;

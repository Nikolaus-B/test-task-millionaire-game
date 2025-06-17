import { createAsyncThunk } from "@reduxjs/toolkit";
import { GameQuestion } from "@/types/game";
import { CorrectAnswerData } from "@/server/game/validator";

export const fetchGameQuestions = createAsyncThunk<GameQuestion[]>(
  "game/fetchQuestions",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/game/questions");
      if (!res.ok) throw new Error("Failed to fetch questions");
      return await res.json();
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

export const checkAnswer = createAsyncThunk<
  CorrectAnswerData,
  { questionId: string; selectedAnswer: string },
  { rejectValue: string }
>(
  "game/checkAnswer",
  async ({ questionId, selectedAnswer }, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/game/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questionId, selectedAnswer }),
      });

      if (!res.ok) throw new Error("Validation failed");
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

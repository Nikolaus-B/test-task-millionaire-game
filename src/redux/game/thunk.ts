import { createAsyncThunk } from "@reduxjs/toolkit";
import { GameQuestion } from "@/types/game";

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
  boolean,
  { questionId: string; selectedAnswers: string[] },
  { rejectValue: string }
>(
  "game/checkAnswer",
  async ({ questionId, selectedAnswers }, { rejectWithValue }) => {
    try {
      const res = await fetch("/api/game/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questionId, selectedAnswers }),
      });

      if (!res.ok) throw new Error("Validation failed");
      const data = await res.json();
      return data.correct as boolean;
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

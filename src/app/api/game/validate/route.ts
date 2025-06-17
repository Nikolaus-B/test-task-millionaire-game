import { NextRequest, NextResponse } from "next/server";
import { validateAnswer } from "@/server/game/validator";

export async function POST(req: NextRequest) {
  const { questionId, selectedAnswers } = await req.json();

  if (!questionId || !Array.isArray(selectedAnswers)) {
    return NextResponse.json(
      { success: false, error: "Invalid input" },
      { status: 400 }
    );
  }

  const isCorrect = validateAnswer(questionId, selectedAnswers);
  return NextResponse.json({ correct: isCorrect });
}

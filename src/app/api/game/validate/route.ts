import { NextRequest, NextResponse } from "next/server";
import { validateAnswer } from "@/server/game/validator";

export async function POST(req: NextRequest) {
  const { questionId, selectedAnswer } = await req.json();

  if (!questionId || !selectedAnswer) {
    return NextResponse.json(
      { success: false, error: "Invalid input" },
      { status: 400 }
    );
  }

  const correctAnswer = validateAnswer(questionId, selectedAnswer);
  return NextResponse.json(correctAnswer);
}

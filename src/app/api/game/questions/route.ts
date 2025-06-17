import { NextResponse } from "next/server";
import gameConfig from "@/server/game/game-config.json";

export async function GET() {
  return NextResponse.json(gameConfig.questions);
}

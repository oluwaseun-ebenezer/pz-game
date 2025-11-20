/**
 * Score API endpoint
 *
 * Stores game scores. Currently uses in-memory storage.
 */

import { NextResponse } from "next/server";
import type { Score } from "@/types/game";

// In-memory storage (resets on server restart)
const scores: Score[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const score: Score = {
      playerId: body.playerId,
      score: body.score,
      won: body.won,
      word: body.word,
      timestamp: body.timestamp || new Date().toISOString(),
    };

    // Validate score data
    if (!score.playerId || typeof score.score !== "number") {
      return NextResponse.json(
        { error: "Invalid score data" },
        { status: 400 }
      );
    }

    scores.push(score);
    console.log("Score saved:", score);
    console.log("Total scores:", scores.length);

    return NextResponse.json({
      success: true,
      score,
    });
  } catch (error) {
    console.error("Error saving score:", error);
    return NextResponse.json(
      { error: "Failed to save score" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Return all scores
    return NextResponse.json({
      scores,
      total: scores.length,
    });
  } catch (error) {
    console.error("Error fetching scores:", error);
    return NextResponse.json(
      { error: "Failed to fetch scores" },
      { status: 500 }
    );
  }
}

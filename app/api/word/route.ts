/**
 * Word API endpoint
 *
 * Returns a random word for the game.
 */

import { NextResponse } from "next/server";
import { getRandomWord } from "@/lib/word-list";

export async function GET() {
  try {
    const word = getRandomWord();

    return NextResponse.json({
      word,
      length: word.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in word API:", error);
    return NextResponse.json(
      { error: "Failed to fetch word" },
      { status: 500 }
    );
  }
}

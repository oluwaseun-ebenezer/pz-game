import { GameResult } from "@/types/game";

export const saveScore = async (result: GameResult) => {
  // Save score to backend
  try {
    await fetch("/api/score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // use a random player ID
        playerId: `player-${Date.now()}`,
        score: result.score,
        won: result.won,
        word: result.word,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (error) {
    console.error("Error saving score:", error);
  }
};

export const fetchWord = async () => {
  try {
    const response = await fetch("/api/word");
    const data = await response.json();

    return data.word.toUpperCase();
  } catch (error) {
    console.error("Error fetching word:", error);
    // Fallback to default word if API fails
    return "PUZZLE";
  }
};

"use client";

import { EndScreen } from "@/components/screen/end";
import { GameScreen } from "@/components/screen/game";
import { StartScreen } from "@/components/screen/start";
import { trackEvent } from "@/lib/analytics";
import { GameResult, GameState } from "@/types/game";
import { useCallback, useState } from "react";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const handleStartGame = useCallback(() => {
    trackEvent("GAME_STARTED", {
      timestamp: new Date().toISOString(),
    });
    setGameState("playing");
  }, []);

  const handleGameEnd = useCallback((result: GameResult) => {
    trackEvent("ROUND_FINISHED", {
      won: result.won,
      attempts: result.attempts,
      maxAttempts: result.maxAttempts,
      score: result.score,
      timeElapsed: result.timeElapsed,
      word: result.word,
      timestamp: new Date().toISOString(),
    });
    setGameResult(result);
    setGameState("end");
  }, []);

  const handlePlayAgain = useCallback(() => {
    setGameResult(null);
    setGameState("start");
  }, []);

  const handleQuit = useCallback(() => {
    trackEvent("PLAYER_QUIT", {
      timestamp: new Date().toISOString(),
    });
    setGameResult(null);
    setGameState("start");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center p-4 bg-white">
        {gameState === "start" && <StartScreen onStart={handleStartGame} />}

        {gameState === "playing" && (
          <GameScreen onGameEnd={handleGameEnd} onQuit={handleQuit} />
        )}

        {gameState === "end" && gameResult && (
          <EndScreen result={gameResult} onPlayAgain={handlePlayAgain} />
        )}
      </main>
    </div>
  );
}

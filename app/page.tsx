"use client";

import { GameResult, GameState } from "@/types/game";
import { useState } from "react";
import { StartScreen } from "@/components/start-screen";
import { GameScreen } from "@/components/game-screen";
import { EndScreen } from "@/components/end-screen";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const handleStartGame = () => {
    trackEvent("GAME_STARTED", {
      timestamp: new Date().toISOString(),
    });
    setGameState("playing");
  };

  const handleGameEnd = (result: GameResult) => {
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
  };

  const handlePlayAgain = () => {
    setGameResult(null);
    setGameState("start");
  };

  const handleQuit = () => {
    trackEvent("PLAYER_QUIT", {
      timestamp: new Date().toISOString(),
    });
    setGameResult(null);
    setGameState("start");
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-width-2xl">
        {gameState === "start" && <StartScreen onStart={handleStartGame} />}
        {gameState === "playing" && (
          <GameScreen onGameEnd={handleGameEnd} onQuit={handleQuit} />
        )}
        {gameState === "end" && gameResult && (
          <EndScreen result={gameResult} onPlayAgain={handlePlayAgain} />
        )}
      </div>
    </main>
  );
}

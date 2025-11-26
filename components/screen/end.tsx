"use client";

import { Button } from "@/components/ui/button";
import type { GameResult } from "@/types/game";

interface EndScreenProps {
  result: GameResult;
  onPlayAgain: () => void;
}

export function EndScreen({ result, onPlayAgain }: EndScreenProps) {
  const { won, word, score, attempts, timeElapsed } = result;

  return (
    <div className="flex flex-col items-center justify-center gap-8 md:min-w-md animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
          {won ? "Victory!" : "Game Over"}
        </h1>
        <p className="text-lg text-pretty">
          {won ? "You guessed the word!" : `The word was: ${word}`}
        </p>
      </div>

      <div className="w-full border border-gray-300 shadow-md rounded-lg p-4 px-6 space-y-4">
        <div>
          <p className="font-semibold text-lg">Game Summary</p>
          <p>Your performance this round</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm">Score</p>
              <p className="text-2xl font-bold">{score}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm">Attempts</p>
              <p className="text-2xl font-bold">{attempts}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm">Time</p>
              <p className="text-2xl font-bold">{timeElapsed}s</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm">Result</p>
              <p className="text-2xl font-bold">{won ? "Win" : "Loss"}</p>
            </div>
          </div>

          {won && (
            <div className="pt-4 border-t border-gray-300">
              <p className="text-sm text-center">
                Score breakdown: Base points + time bonus
              </p>
            </div>
          )}
        </div>
      </div>

      <Button onClick={onPlayAgain} className="rounded-lg">
        Play Again
      </Button>
    </div>
  );
}

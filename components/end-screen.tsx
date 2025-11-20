"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { GameResult } from "@/types/game";

interface EndScreenProps {
  result: GameResult;
  onPlayAgain: () => void;
}

export function EndScreen({ result, onPlayAgain }: EndScreenProps) {
  const { won, word, score, attempts, timeElapsed } = result;

  return (
    <div className="flex flex-col items-center justify-center gap-8 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
          {won ? "Victory!" : "Game Over"}
        </h1>
        <p className="text-lg text-muted-foreground text-pretty">
          {won ? "You guessed the word!" : `The word was: ${word}`}
        </p>
      </div>

      <Card className="w-full max-w-md border-2">
        <CardHeader>
          <CardTitle>Game Summary</CardTitle>
          <CardDescription>Your performance this round</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Score</p>
              <p className="text-2xl font-bold">{score}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Attempts</p>
              <p className="text-2xl font-bold">{attempts}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="text-2xl font-bold">{timeElapsed}s</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Result</p>
              <p className="text-2xl font-bold">{won ? "Win" : "Loss"}</p>
            </div>
          </div>

          {won && (
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground text-center">
                Score breakdown: Base points + time bonus
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Button size="lg" onClick={onPlayAgain} className="px-8 text-base">
        Play Again
      </Button>
    </div>
  );
}

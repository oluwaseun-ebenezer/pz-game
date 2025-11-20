"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
          Word Puzzle
        </h1>
        <p className="text-lg text-muted-foreground text-pretty max-w-md mx-auto">
          Guess the hidden word letter by letter. You have 6 attempts to find
          it!
        </p>
      </div>

      <Card className="w-full max-w-md border-2">
        <CardHeader>
          <CardTitle>How to Play</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0 mt-0.5">
              1
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A random word will be selected for you to guess
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0 mt-0.5">
              2
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Click letters to make your guesses
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium shrink-0 mt-0.5">
              3
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You have 6 wrong guesses before the game ends
            </p>
          </div>
        </CardContent>
      </Card>

      <Button size="lg" onClick={onStart} className="px-8 text-base">
        Start Game
      </Button>
    </div>
  );
}

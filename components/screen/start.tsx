"use client";

import { Button } from "@/components/ui/button";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="w-full max-w-md mx-auto text-center space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
        Word Puzzle
      </h1>

      <p className="text-lg text-muted-foreground text-pretty max-w-md mx-auto">
        Guess the hidden word letter by letter. You have 6 attempts to find it!
      </p>

      <div className="border-2 border-gray-100 shadow-sm text-left p-6 px-8 rounded-xl space-y-6">
        <h2 className="leading-none font-semibold">How to Play</h2>

        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
              1
            </span>
            <span className="flex-1">
              A random word will be selected for you to guess
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
              2
            </span>
            <span className="flex-1">Click letters to make your guesses</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
              3
            </span>
            <span className="flex-1">
              You have 6 wrong guesses before the game ends
            </span>
          </li>
        </ul>
      </div>

      <Button onClick={onStart} className="mx-auto">
        Start Game
      </Button>
    </div>
  );
}

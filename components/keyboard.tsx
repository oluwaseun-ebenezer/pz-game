"use client";

import { Button } from "@/components/ui/button";

interface KeyboardProps {
  onLetterClick: (letter: string) => void;
  guessedLetters: Set<string>;
  correctLetters: Set<string>;
}

const KEYBOARD_ROWS = [
  "QWERTYUIOP".split(""),
  "ASDFGHJKL".split(""),
  "ZXCVBNM".split(""),
];

export function Keyboard({
  onLetterClick,
  guessedLetters,
  correctLetters,
}: KeyboardProps) {
  const getButtonVariant = (letter: string) => {
    if (!guessedLetters.has(letter)) return "outline";
    if (correctLetters.has(letter)) return "default";
    return "secondary";
  };

  return (
    <div className="space-y-2">
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1 md:gap-2">
          {row.map((letter) => (
            <Button
              key={letter}
              variant={getButtonVariant(letter)}
              size="sm"
              className="w-8 h-10 md:w-10 md:h-12 text-sm md:text-base font-semibold"
              onClick={() => onLetterClick(letter)}
              disabled={guessedLetters.has(letter)}
            >
              {letter}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}

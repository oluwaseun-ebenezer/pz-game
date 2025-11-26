"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Keyboard } from "@/components/keyboard";
import type { GameResult } from "@/types/game";
import { fetchWord, saveScore } from "@/services/game";

interface GameScreenProps {
  onGameEnd: (result: GameResult) => void;
  onQuit: () => void;
}

const MAX_ATTEMPTS = 6;

export function GameScreen({ onGameEnd, onQuit }: GameScreenProps) {
  const [word, setWord] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [startTime] = useState(Date.now());

  // Fetch random word on mount
  useEffect(() => {
    (async () => {
      const word = await fetchWord();

      setWord(word);

      setLoading(false);
    })();
    fetchWord();
  }, []);

  const handleGuess = (letter: string) => {
    if (guessedLetters.has(letter)) return;

    const newGuessedLetters = new Set(guessedLetters).add(letter);
    setGuessedLetters(newGuessedLetters);

    // Check if letter is in word
    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);

      // Check for loss
      if (newWrongGuesses >= MAX_ATTEMPTS) {
        endGame(false, newGuessedLetters);
      }
    } else {
      // Check for win
      const allLettersGuessed = word
        .split("")
        .every((char) => newGuessedLetters.has(char));
      if (allLettersGuessed) {
        endGame(true, newGuessedLetters);
      }
    }
  };

  const endGame = async (won: boolean, finalGuessedLetters: Set<string>) => {
    const timeElapsed = Math.floor((Date.now() - startTime) / 1000);

    // the base point and time bonus computation
    const score = won
      ? (MAX_ATTEMPTS - wrongGuesses) * 100 +
        (60 - Math.min(timeElapsed, 60)) * 10
      : 0;

    const result: GameResult = {
      won,
      word,
      attempts: finalGuessedLetters.size,
      maxAttempts: MAX_ATTEMPTS,
      score,
      timeElapsed,
    };

    saveScore(result);

    onGameEnd(result);
  };

  const displayWord = word
    .split("")
    .map((letter) => (guessedLetters.has(letter) ? letter : "_"));

  const remainingAttempts = MAX_ATTEMPTS - wrongGuesses;

  if (loading) {
    return <p>Loading game...</p>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Guess the Word</h2>
        <Button
          variant="outline"
          className="font-semibold py-2"
          onClick={onQuit}
        >
          Quit
        </Button>
      </div>

      {/* Game Stats */}
      <div className="border p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm">Attempts Remaining</p>
            <p className="text-3xl font-bold">{remainingAttempts}</p>
          </div>

          <div className="flex gap-1">
            {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < wrongGuesses ? "bg-red-500" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Word Display */}
      <div className="flex items-center justify-center gap-2 md:gap-3 py-8">
        {displayWord.map((letter, index) => (
          <div
            key={index}
            className="w-12 h-16 md:w-16 md:h-20 flex items-center justify-center border rounded-lg"
          >
            <span className="text-3xl md:text-4xl font-bold">{letter}</span>
          </div>
        ))}
      </div>

      {/* Keyboard */}
      <Keyboard
        onLetterClick={handleGuess}
        guessedLetters={guessedLetters}
        correctLetters={new Set(word.split(""))}
      />
    </div>
  );
}

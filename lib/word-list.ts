/**
 * Word bank for the game
 */

export const WORD_LIST = [
  "PUZZLE",
  "GAME",
  "WORD",
  "BRAIN",
  "SOLVE",
  "THINK",
  "CHALLENGE",
  "MYSTERY",
  "RIDDLE",
  "QUEST",
  "LOGIC",
  "PATTERN",
  "DISCOVER",
  "UNLOCK",
  "REVEAL",
  "CIPHER",
  "ENIGMA",
  "PLAYER",
  "WINNER",
  "CHAMPION",
  "VICTORY",
  "SUCCESS",
  "ACHIEVE",
  "CONQUER",
  "TRIUMPH",
];

export function getRandomWord(): string {
  return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
}

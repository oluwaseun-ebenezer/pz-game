export interface GameResult {
  won: boolean;
  word: string;
  attempts: number;
  maxAttempts: number;
  score: number;
  timeElapsed: number;
}

export interface Score {
  playerId: string;
  score: number;
  won: boolean;
  word: string;
  timestamp: string;
}

export interface AnalyticsEvent {
  eventName: string;
  properties: Record<string, unknown>;
  timestamp: string;
}

export type GameState = "start" | "playing" | "end";

export type GameEvents = "GAME_STARTED" | "ROUND_FINISHED" | "PLAYER_QUIT";

# Word Puzzle Game

A full-stack word puzzle game built with Next.js, TypeScript, and Tailwind CSS. Players guess letters to reveal hidden words, earning points based on accuracy and speed.

## Installation & Setup

### Clone this repo

```bash
git clone https://github.com/oluwaseun-ebenezer/pz-game.git
cd pz-game
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Open http://localhost:3000

## Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19**
- **TypeScript** - For type-safe development
- **Tailwind CSS v4** - Utility-first styling with custom design tokens
- **shadcn/ui** - For high-quality UI components

### Backend

- **Next.js API Routes** - RESTful endpoints for word fetching and score storage
- **In-Memory Storage** - To persist the game data (easily upgradeable to database)

## How to Play

1. **Start Game** - Click "Start New Game" on the welcome screen
2. **Guess Letters** - Click letters on the keyboard to make guesses
3. **Reveal Word** - Correct guesses reveal letters in the word
4. **Win/Lose** - Complete the word with attempts remaining to win
5. **View Score** - See your final score based on performance

## Scoring System

- **Base Points**: 100 per word
- **Attempt Bonus**: +20 per unused attempt
- **Time Bonus**: +10 per second under 60 seconds
- **Maximum Score**: 320 points per word

## API Endpoints

### GET /api/word

Fetches a random word from the word list.

**Response:**

```json
{
  "word": "PLAYER",
  "length": 6,
  "timestamp": "2025-11-20T17:17:53.790Z"
}
```

### POST /api/score

Saves game results.

**Request:**

```json
{
  "playerId": "player-1763659088121",
  "score": 960,
  "won": true,
  "word": "VICTORY",
  "timestamp": "2025-11-20T17:18:08.121Z"
}
```

**Response:**

```json
{
  "success": true,
  "score": {
    "playerId": "player-1763659088121",
    "score": 960,
    "won": true,
    "word": "VICTORY",
    "timestamp": "2025-11-20T17:18:08.121Z"
  }
}
```

## Analytics Events

The game tracks the following events:

- `GAME_STARTED` - When a new game begins
- `ROUND_FINISHED` - When a word is completed (win/loss)
- `PLAYER_QUIT` - When player exits before completing

## Future Improvements

- Add Database Persistence by replacing in-memory storage with MongoDB.

- Add User Authentication and Profile creation to map user activities.

- Add Leaderboard.

- Add Difficulty levels.

- Hint system that will have effect on the score during computation.

- Giving daily challenges to users after implementing user accounts and profile.

- Integrate Analytics logger.

- User customization of the game themes.

- Sound effects and animations to make it feel like a real gaming experience.

- Improve the idea to multiplayer mode.

- Integration share to social media e.g. scores, leaderboard, and other activities.

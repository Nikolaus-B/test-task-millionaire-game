# Millionaire Game

A fully functional and responsive implementation of the classic "Who Wants to Be a Millionaire?" game. Built with **Next.js App Router**, **TypeScript**, **Redux Toolkit**, and **SCSS Modules**.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the app in development mode
npm run dev

# 3. Open in your browser
http://localhost:3000
```

---

## 📚 Architecture Overview

```
.
src/
│
├── app/                        # Next.js App Router entry point
│   ├── (routes)/               # Main game routes (start, game, result)
│   ├── api/                    # API routes for fetching/validating questions
│   └── layout.tsx              # Root layout shared across pages
│
├── assets/                     # Static assets (SVGs, images, etc.)
│
├── components/                 # Reusable UI and game-specific components
│   ├── game/                   # Core gameplay components (questions, rewards)
│   ├── screens/                # Screen components for each game stage
│   └── ui/                     # Generic UI components (buttons, modals, etc.)
│
├── layouts/                    # Layout components used across the app
│
├── providers/                  # Providers (e.g. Redux Provider)
│
├── redux/                      # Redux state management
│   ├── game/                   # Game slice, thunks, and selectors
│   └── store.ts                # Redux store configuration
│
├── server/                     # Server-side logic (not exposed to client)
│   └── game/
│       ├── game-config.json    # Game questions (without answers)
│       ├── correctAnswers.ts   # Correct answers for validation
│       └── validator.ts        # Logic for validating answers
│
├── styles/                     # Global and modular SCSS styles
│   └── base/                   # Variables, mixins, global styles
│
└── types/                      # Shared TypeScript type definitions

```

---

## 🚀 Game Flow Logic

1. On game start, we fetch questions from `GET /api/game/questions`
2. We display questions one by one
3. When the user selects an answer:

   - A `POST /api/game/validate` request is sent with `questionId` and `selectedAnswer`
   - Backend compares it with internal answers store`

4. If correct:

   - Proceed to next question with animated transition

5. If incorrect:

   - Animate wrong answer, then redirect to `/result`

---

## 🌐 API Endpoints

### `GET /api/game/questions`

Returns all questions without correct answers.

### `POST /api/game/validate`

Validates submitted answer and returns `{ correct: boolean, questionAnswers: string[] }`

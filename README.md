### Motivation
This is an example project showcasing how to use [proxygram](https://github.com/proxy-gram/proxygram.git) during telegram mini app development.
Project consist of 2 apps:
- `frontend` telegram mini app frontend based on [Telegram-Mini-Apps/reactjs-template](https://github.com/Telegram-Mini-Apps/reactjs-template.git)
- `bot` telegram bot backend based on [grammY](https://github.com/grammyjs/grammY)

Couple of things to note:
Because proxygram doesn't support websockets yet, we have to turn off hot-module-replacement in `frontend` app (see [vite.config.ts](./apps/frontend/vite.config.ts) lines 13-14).

### How to run
1. Clone the repo
2. Configure your `.env` file in the root of the project. You can look at `.env.example` for reference
3. Run `yarn` in the root of the project
4. Run `yarn nx serve frontend` to start the frontend app
5. Run `yarn nx serve bot` to start the bot app
6. Run `npx proxygram` to start the proxygram server

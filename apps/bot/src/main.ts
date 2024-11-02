import "dotenv/config";
import { Bot } from 'grammy';
import { config } from './config';

const bot = new Bot(config.botToken);

bot.command("start", async (ctx) => {
  await ctx.setChatMenuButton({
    chat_id: ctx.chat.id,
    menu_button: {
      type: "web_app",
      text: "Open Web App",
      web_app: {
        url: config.webAppUrl
      }
    }
  })
  await ctx.reply("Welcome! I'm a bot that can open a web app for you.");
} )
bot.start();

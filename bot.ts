import {Bot} from "grammy"
import "dotenv/config"

const token = process.env.TELEGRAM_BOT_TOKEN;
if(!token) throw new Error("Missing TELEGRAM_BOT_TOKEN in .env");
const bot = new Bot(token)

bot.command("start", (ctx) => ctx.reply("Welcome"))

bot.on("message", (ctx) => ctx.reply("Message received"))

bot.start()
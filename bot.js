"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
require("dotenv/config");
const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token)
    throw new Error("Missing TELEGRAM_BOT_TOKEN in .env");
const bot = new grammy_1.Bot(token);
bot.command("start", (ctx) => ctx.reply("Welcome"));
bot.on("message", (ctx) => ctx.reply("Message received"));
bot.start();

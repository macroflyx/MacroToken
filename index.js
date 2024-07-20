const express = require('express')
const app = express()
const TelegramBot = require('node-telegram-bot-api');

const token = '7489264600:AAG6e_IBlty7MkBFZULMwqDgZb5_ZYwi_Z4';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const photo = 's.jpg'
    const caption = [ 'Добрый день! 👋🏻',
        ' ',
    'Добро пожаловать в мини-игру MacroToken, где ты кликаешь, собираешь монеты и получаешь огромные награды!',
    ' ',
    'Напомним что наш проект открылся в 20.07.2024 , из-за этого в боте может быть не так как вы хотите но мы скоро все исправим! ⚙️']               
    const inlineKeyboard = [
      [
        {
          text: 'Начать Играть! ⚡️',
          url: 'https://t.me/macrotap_bot/MacroTap'
        }
      ]
    ];
  
    const inlineKeyboardMarkup = {
      inline_keyboard: inlineKeyboard
    };
    bot.sendPhoto(chatId, photo, {caption: caption.join('\n') , reply_markup: inlineKeyboardMarkup})
  });
  const commands = [
    { command: 'start', description: 'Начать Играть! ⚡️' },
    // { command: 'support', description: 'Обращаться Поддержку ⚙️' },
  ];

 


  bot.setMyCommands(commands);
app.listen(4000)

bot.on('polling_error', (error) => {
  console.log(error);
});


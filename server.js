const express = require('express');
const app = express();
require('dotenv').config();

db.connect({
    host: process.env.TELEGRAM_TEST_TOKEN,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
});

const port = 3000;

const Botmaster = require('botmaster');

const telegramSettings = {
    credentials: {
        authToken: process.env.TELEGRAM_TEST_TOKEN,
    },
    webhookEndpoint: '/webhook1234/',
};


const botsSettings = [{
    telegram: telegramSettings
}];

const botmasterSettings = {
    botsSettings: botsSettings,
    app: app,
}

const botmaster = new Botmaster(botmasterSettings);

botmaster.on('update', (bot, update) => {
    bot.sendMessage({
        recipient: {
            id: update.sender.id,
        },
        message: {
            text: 'Well right back at you!',
        },
    });
});

console.log(`Loading App`);

app.listen(port, '0.0.0.0', () => {

    console.log(`Running App on port: ${port}`);
});

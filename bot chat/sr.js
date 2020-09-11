const sr = require('./sr.js');
const tmi = require('tmi.js');
const heroku = require('heroku');
const twitch = require('twitch-js')
const cors = require('cors');
const prefix = require('./config/env.json');
const opts = {
    identity: {
        username: 'bot_das_live',
        password: prefix.Token
    },
    channels: ['lumystv', 'marsalosouza']
}
const Discord = require('discord.js');


exports.run = (alvo, user, msg, self, client, mensg, bot) => {

    let NomeDoComand = msg.trim();
    let mensagem = NomeDoComand.toLowerCase();
    let commandSpliter = msg.split(' ')
    let i = 0;

    if (commandSpliter[0] = '!sr') {
        let lista = [];

        lista.push(commandSpliter[1])
        commandSpliter.pop()
        console.log(lista)

       
    }
}
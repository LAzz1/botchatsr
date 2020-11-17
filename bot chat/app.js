"use strict";

console.log('BOT_CHAT');

const express = require('express')
const routes = require('express').Router();
const app = express();
const sr = require('./sr.js');
const tmi = require('tmi.js');
const cors = require('cors');
const morgan = require('morgan')
const mongoose = require('mongoose');
const twitch = require('twitch-js');
const prefix = require('./config/env.json');

//bot da twitch
const opts = {
    identity: {
        username: 'Bot_marsalo',
        password: prefix.marsalo
    },
    channels: ['marsalosouza']
}
const client = new tmi.Client(opts);
client.connect();

//parte do discord
const Discord = require('discord.js');
const bot = new Discord.Client();

//localhost
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.listen(process.env.PORT || 3000);
app.get('/', (req, res) => { res.render('./sr') })
app.use(require('./routes'));


client.on('message', (alvo, user, msg, self) => {
    if (self) { return; }

    let commandSpliter = msg.split(' ')
    let letraSpliter = msg.split('');
    let NomeDoComand = msg.trim();
    let mensagem = NomeDoComand.toLowerCase();
    let nomeSemHashtag = alvo.replace('#', '')
    const lista = [];

    //comandos do chat
    switch (mensagem) {
        case '!steam': client.say(alvo, 'Steam não disponivel'); break;

        case '!comando': client.say(alvo, `@${user.username} !latido !polvo !toque !fav !gado !hidratar !creeper`); break;

        case '!commands': client.say(alvo, `@${user.username} !steam !discord !insta !latido !polvo !toque !fav !gado !hidratar !creeper`); break;

        case '!discord': client.say(alvo, 'discord nao disponivel'); break;

        case '!insta': client.say(alvo, '@crackinfantil'); break;

        case '!instagram': client.say(alvo, '@crackinfantil'); break;

        case '!disc': client.say(alvo, 'discord nao disponivel'); break;

        case '!marsalo': client.say(alvo, `Ei @${user.username} marsalo quer um bejinho -'`); break;

        case '!grito': client.say(alvo, 'oifranUau AAAAAAAAAAAAAAAAA'); break;

        case '!latido': client.say(alvo, 'OhMyDog AU AU AU AU AU'); break;

        case 'pinou': client.say(alvo, `murillo ta cego oifranCego`); break;

        //case '!perfeita': client.say(alvo, `@${user.username} voce tem duvida que eh a @${nomeSemHashtag}`); break;

        case '!bot': client.say(alvo, 'oi amor, digite !comandos para mais comandos'); break;

        case '!creeper': client.say(alvo, `Ssss SSsssssssss BOOM!!! @${user.username} explodiram sua bunda`); break;

        case '!polvo': client.say(alvo, 'Squid1 Squid2 Squid3 Squid2 Squid4'); break;

        //case '!balada': client.say(alvo, `@${user.username} vem curtir com nois partyCat partyCat partyCat partyCat partyCat partyCat partyCat partyCat partyCat`); break;

        case '!toque': client.say(alvo, 'oifranHiL oifranHiR'); break;

        case '@bot_marsalo': client.say(alvo, `Ola @${user.username} oq gostaria? use !comandos para mais informacoes CoolCat`); break;

        //case '@nightbot': client.say(alvo, `@${user.username} porque ta marcando esse merda quando tem eu??`); break;

        //case '!mamadinha': client.say(alvo, `@${user.username} o bot acabou de te dar uma mamadinha KappaPride `); break;

        //case '!gostosa': client.say(alvo, `unica gostosa aqui eh a streamer BibleThump BibleThump`); break;

        //case '!webnamoro': client.say(alvo, 'webnamorar = chifre mumumu oifranCorno'); break;

        case '!mod': client.say(alvo, 'MOD VC EH MUITO CORNO'); break;

        case '!fav': client.say(alvo, `@${user.username} eh o gado favorito do @${nomeSemHashtag} oifranCorno oifranCorno`); break;

        //case '!fort': client.say(alvo, `@${user.username} NOSSA VOCE NAO ACHA FORT TAOOO DIVERTIDO??? NOSSA EU AMO HAHAHA`); break;

        //case '!efipee': client.say(alvo, `@${user.username} SAIBA QUE O EFIPEE EH O MELHOOORR MOD CoolCat `); break;

        case '!hidratar': client.say(alvo, `@${nomeSemHashtag} seu viewer @${user.username} esta te lembrando de beber agua D: `); break;

        case '!streamer': client.say(alvo, `@${user.username} yulla eh podre`); break;

        //case '!corno': client.say(alvo, `@${user.username} n conta pra streamaer que ela eh corna oifranCorno`); break;

        //case '!zoio': client.say(alvo, 'HARDWARE GARAIO'); break;
        default: ;
    };


    //sr que ta dando problema
    if (commandSpliter[0] === '!sr') { sr.run(alvo, user, msg, self) }

    //comando chat
    else if (commandSpliter[0].toLowerCase() === 'f') {

        if (commandSpliter[1] === undefined) { client.say(alvo, `@${user.username} prestou respeito BibleThump`); }

        else { client.say(alvo, `@${user.username} prestou respeito a ${commandSpliter[1]} BibleThump `); }
    }

    //comando chat
    else if (letraSpliter[0] === '!') {
        console.log(mensagem);
        client.say(alvo, `desculpe nao reconheci esse comando :( `)
    }
})

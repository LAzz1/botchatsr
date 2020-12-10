"use strict";

console.log('BOT_CHAT');

const express = require('express')
const routes = require('express').Router();
const app = express();
const sr = require('./sr.js');
const tmi = require('tmi.js');
const morgan = require('morgan')
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
app.post('/', (req, res) => { res.render('./sr') })



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
        case '!steam': client.say(alvo, 'https://steamcommunity.com/id/zilio0'); break;

        case '!comandos': client.say(alvo, `@${user.username} !steam !insta !latido !marsalo !grito !polvo !toque !fav !gado !hidratar !corno !creeper !mamadinha !gostosa`); break;

        case '!commands': client.say(alvo, `@${user.username} !steam !insta !latido !marsalo !grito !polvo !toque !fav !gado !hidratar !corno !creeper !mamadinha !gostosa`); break;

        case '!discord': client.say(alvo, 'discord nao disponivel :('); break;

        case '!insta': client.say(alvo, '@zilio0'); break;

        case '!instagram': client.say(alvo, '@zilio0'); break;

        case '!disc': client.say(alvo, 'discord nao disponivel'); break;

        case '!marsalo': client.say(alvo, `Ei @${user.username} marsalo quer um bejinho -'`); break;

        case '!grito': client.say(alvo, 'oifranUau AAAAAAAAAAAAAAAAA'); break;

        case '!latido': client.say(alvo, 'OhMyDog AU AU AU AU AU'); break;

        case 'pinou': client.say(alvo, `zilio ta cego oifranCego`); break;

        //case '!perfeita': client.say(alvo, `@${user.username} voce tem duvida que eh a @${nomeSemHashtag}`); break;

        case '!bot': client.say(alvo, 'oi amor, digite !comandos para mais comandos'); break;

        case '!creeper': client.say(alvo, `Ssss SSsssssssss BOOM!!! @${user.username} explodiram sua bunda`); break;

        case '!polvo': client.say(alvo, 'Squid1 Squid2 Squid3 Squid2 Squid4'); break;

        //case '!balada': client.say(alvo, `@${user.username} vem curtir com nois partyCat partyCat partyCat partyCat partyCat partyCat partyCat partyCat partyCat`); break;

        case '!toque': client.say(alvo, 'oifranHiL oifranHiR'); break;

        case '@bot_marsalo': client.say(alvo, `Ola @${user.username} oq gostaria? use !comandos para mais informacoes CoolCat`); break;

        case '@nightbot': client.say(alvo, `@${user.username} porque ta me traindo com outro bot :(??`); break;

        case '!mamadinha': client.say(alvo, `@${user.username} o bot acabou de te dar uma mamadinha KappaPride `); break;

        case '!gostosa': client.say(alvo, `unica gostosa aqui eh o streamer BibleThump BibleThump`); break;

        //case '!webnamoro': client.say(alvo, 'webnamorar = chifre mumumu oifranCorno'); break;

        case '!mod': client.say(alvo, 'MOD VC EH MUITO CORNO'); break;

        case '!fav': client.say(alvo, `@${user.username} eh o gado favorito do @${nomeSemHashtag} oifranCorno oifranCorno`); break;

        //case '!fort': client.say(alvo, `@${user.username} NOSSA VOCE NAO ACHA FORT TAOOO DIVERTIDO??? NOSSA EU AMO HAHAHA`); break;

        //case '!efipee': client.say(alvo, `@${user.username} SAIBA QUE O EFIPEE EH O MELHOOORR MOD CoolCat `); break;

        case '!hidratar': client.say(alvo, `@${nomeSemHashtag} seu viewer @${user.username} esta te lembrando de beber agua D: `); break;

        case '!streamer': client.say(alvo, `@${user.username} estudande de computaria, tem 18 anos e ta tentando fazer um bot para twitch.`); break;

        case '!corno': client.say(alvo, `@${user.username} n conta pro streamer que ele eh corno oifranCorno`); break;

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

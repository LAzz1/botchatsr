console.log('BOT_CHAT');

const sr = require('./sr.js');
const tmi = require('tmi.js');
const cors = require('cors');
const twitch = require('twitch-js')
const prefix = require('./config/env.json');
const opts = {
    identity: {
        username: 'bot_das_live',
        password: prefix.Token
    },
    channels: ['lumystv', 'marsalosouza']
}
const client = new tmi.Client(opts);
client.connect();


const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(prefix.disc);


bot.on('message', mensg => {
    let idd = mensg.guild.cache.channel(channel => channel.id('739503542855008367'))
    sr.run(mensg,bot)
})

client.on('message', (alvo, user, msg, self) => {
    if (self) { return; }

    let commandSpliter = msg.split(' ')
    let letraSpliter = msg.split('');
    let NomeDoComand = msg.trim();
    let mensagem = NomeDoComand.toLowerCase();
    let nomeSemHashtag = alvo.replace('#', '')

    switch (mensagem) {
        case '!steam': client.say(alvo, 'https://steamcommunity.com/profiles/76561198281838527/'); break;

        case '!comandos': client.say(alvo, `@${user.username} !steam !discord !insta !latido !cs !polvo !toque !fav !gado !hidratar`); break;

        case '!discord': client.say(alvo, 'https://discord.gg/AHZHNHD'); break;

        case '!insta': client.say(alvo, 'https://instagram.com/brendalumys/'); break;

        case '!instagram': client.say(alvo, 'https://instagram.com/brendalumys/'); break;

        case '!disc': client.say(alvo, 'https://discord.gg/AHZHNHD'); break;

        //case '!marsalo': client.say(alvo, `Ei @${user.username} marsalo quer leite -`); break;

        //case '!grito': client.say(alvo, 'oifranUau AAAAAAAAAAAAAAAAA'); break;

        case '!latido': client.say(alvo, 'OhMyDog AU AU AU AU AU'); break;

        case '!cs': client.say(alvo,'Lumy esta na patente AK-2');break;

        case 'pinou': client.say(alvo, `Lumy ta cega oifranCego`); break;

        case '!j': client.say(alvo, 'Eh o japas');

        //case '!perfeita': client.say(alvo, `@${user.username} voce tem duvida que eh a @${nomeSemHashtag}`); break;

        case '!bot': client.say(alvo, 'oi amor, digite !comandos para mais comandos'); break;

        case '!creeper': client.say(alvo, 'SSSsss SSsssssssss BOOM!!!'); break;

        //case '!crocs': client.say(alvo, 'crocs fede a esgoto'); break;

        case '!polvo': client.say(alvo, 'Squid1 Squid2 Squid3 Squid2 Squid4'); break;

        //case '!balada': client.say(alvo, `@${user.username} vem curtir com nois partyCat partyCat partyCat partyCat partyCat partyCat partyCat partyCat partyCat`); break;

        case '!toque': client.say(alvo, 'oifranHiL oifranHiR'); break;

        case '@bot_das_live': client.say(alvo, `Ola @${user.username} oq gostaria? use !comandos para mais informacoes CoolCat`); break;

        //case '@nightbot': client.say(alvo, `@${user.username} porque ta marcando esse merda quando tem eu??`); break;

        //case '!mamadinha': client.say(alvo, `@${user.username} o bot acabou de te dar uma mamadinha KappaPride `); break;

        //case '!gostosa': client.say(alvo, `unica gostosa aqui eh a streamer BibleThump BibleThump`); break;

        //case '!webnamoro': client.say(alvo, 'webnamorar = chifre mumumu oifranCorno'); break;

        case '!gado': client.say(alvo, 'pare de ser gado'); break;

        case '!fav': client.say(alvo, `@${user.username} eh o gado favorito da @${nomeSemHashtag} oifranCorno oifranCorno`); break;

        //case '!fort': client.say(alvo, `@${user.username} NOSSA VOCE NAO ACHA FORT TAOOO DIVERTIDO??? NOSSA EU AMO HAHAHA`); break;

        //case '!efipee': client.say(alvo, `@${user.username} SAIBA QUE O EFIPEE EH O MELHOOORR MOD CoolCat `); break;

        case '!hidratar': client.say(alvo, `@${nomeSemHashtag} seu viewer @${user.username} esta te lembrando de beber agua D: `); break;

        //case '!corno': client.say(alvo, `@${user.username} n conta pra streamaer que ela eh corna oifranCorno`); break;

        //case '!zoio': client.say(alvo, 'HARDWARE GARAIO'); break;
        default: ;
    };

    if (commandSpliter[0] === '!sr') { sr.run(alvo, user, msg, self, client,bot); return;}
    
    else if (commandSpliter[0].toLowerCase() === 'f') {

        if (commandSpliter[1] === undefined) { client.say(alvo, `@${user.username} prestou respeito BibleThump`);}

        else { client.say(alvo, `@${user.username} prestou respeito a ${commandSpliter[1]} BibleThump `);}
    }

    else if (letraSpliter[0] === '!') {
        console.log(mensagem);
        client.say(alvo, `desculpe nao reconheci esse comando :( `)
    }
});
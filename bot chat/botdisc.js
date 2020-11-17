const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(prefix.disc);


bot.on('message', mensg => {
    let idd = mensg.guild.cache.channel(channel => channel.id('739503542855008367'))
})
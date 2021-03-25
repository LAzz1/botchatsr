const prefix = require('../config/env.json');
const Discord = require("discord.js");
const fetch = require("node-fetch")
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const { execute, playSong } = require('./commands/sr');
const sr = require('./commands/sr');

dotenv.config();

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.queues = new Map();

const commandFiles = fs
  .readdirSync(path.join(__dirname, "/commands"))
  .filter((filename) => filename.endsWith(".js"));

for (var filename of commandFiles) {
  const command = require(`./commands/${filename}`);
  bot.commands.set(command.name, command);
}
bot.login(prefix.disc);


bot.on("ready", function () {
  console.log(`Estou conectado como ${bot.user.username}`);
});

bot.on("message", (mensg) => {

  
  const args = mensg.content.slice(prefix.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()
  console.log(args)


  let discArgs={
    arguments: args
  }
  execute()
  playSong()

  fetch('http://localhost:3030', { method: 'POST', body: JSON.stringify(discArgs), headers: { 'Content-Type': 'application/json' } });

});


 

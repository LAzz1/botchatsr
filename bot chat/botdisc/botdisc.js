const prefix = require('../config/env.json');
const Discord = require('discord.js');
const fetch = require('node-fetch');

//bot disc
const bot = new Discord.Client();
bot.login(prefix.disc);

const { response } = require('express');

let mscdisc =[];
let tempo = 1000
let oldData = []

//loop
let buscaEnvia = async () => {
    let data = await fetch('http://localhost:3030').then(response => response.json())
    mscdisc.push(data)
    if (JSON.stringify(data) != JSON.stringify(oldData)){
        bot.channels.cache.get("740653164663144449").send(mscdisc)
        mscdisc.pop()
      oldData = data
    } 
  }
    setInterval(buscaEnvia,tempo)

    bot.on("message", (mensg) => {
      const args = mscdisc.slice(prefix.prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase()

      if(args==null&&command==null){return;}
      console.log(args,command)
      mscdisc.pop()
    
    
      execute()
      playSong()
    })
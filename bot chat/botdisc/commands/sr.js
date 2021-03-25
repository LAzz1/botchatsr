const search = require("yt-search");
const ytdl = require("ytdl-core-discord");
const fetch = require("node-fetch")
const { response } = require('express');

  const  execute =async (bot,mensg,args)=>{
  let s = await fetch('http://localhost:3030').then(response => response.json())
  discArgs
  try {
    search(s, (err, result) => {
      if (err) {
        throw err;
      } else if (result && result.videos.length > 0) {
        const song = result.videos[0];
        const queue = bot.queues.get(mensg.guild.id);
        if (queue) {
          queue.songs.push(song);
          bot.queues.set(mensg.guild.id, queue);
        } else playSong(bot, mensg, song);
      } else {
        return mensg.reply("desculpe, não encontrei o que você desejava!");
      }
    });
  } catch (e) {
    console.error(e);
  }};

const playSong = async(bot,mensg) => {
  let queue = bot.queues.get(mensg.member.guild.id);
  if (!song) {
    if (queue) {
      queue.connection.disconnect();
      return bot.queues.delete(mensg.member.guild.id);
    }
  }
  if (!mensg.member.voice.channel) {
    return mensg.reply(
      "você precisa estar em um canal de voz para reproduzir uma música!"
    );
  }
  if (!queue) {
    const conn = await mensg.member.voice.channel.join();
    queue = {
      volume: 10,
      connection: conn,
      dispatcher: null,
      songs: [song],
    };
  }
  queue.dispatcher = await queue.connection.play(
    await ytdl(song.url, { highWaterMark: 1 << 25, filter: "audioonly" }),
    {
      type: "opus",
    }
  );
  queue.dispatcher.on("finish", () => {
    queue.songs.shift();
    playSong(bot, mensg, queue.songs[0]);
  });
  bot.queues.set(mensg.member.guild.id, queue);
}

module.exports = {
  name: 'sr',
  help: "Reproduz a música",
  execute,
  playSong,
};
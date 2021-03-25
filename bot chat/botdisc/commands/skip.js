const playSong = require("./sr").playSong;

const execute = (bot, mensg, args) => {
  const queue = bot.queues.get(mensg.guild.id);
  if (!queue) {
    return mensg.reply("não existe nenhuma música sendo reproduzida");
  }
  queue.songs.shift();
  bot.queues.set(mensg.guild.id, queue);
  playSong(bot, mensg, queue.songs[0]);
};

module.exports = {
  name: "skip",
  help: "Pula para a próxima música",
  execute,
};
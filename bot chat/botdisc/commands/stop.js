const execute = (bot, mensg, args) => {
    const queue = bot.queues.get(mensg.guild.id);
    if (!queue) {
      return mensg.reply("não existe nenhuma música sendo reproduzida");
    }
    queue.songs = [];
    bot.queues.set(mensg.guild.id, queue);
    queue.dispatcher.end();
  };
  
  module.exports = {
    name: "stop",
    help: "Parar musica",
    execute,
  };
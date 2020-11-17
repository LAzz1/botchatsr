exports.run = (alvo, user, msg, self, app) => {

    let NomeDoComand = msg.trim();
    let mensagem = NomeDoComand.toLowerCase();
    let commandSpliter = msg.split(' ')
    let i = 0;
    const lista = [];

        lista.push(commandSpliter[1])
        console.log(lista)
        commandSpliter.pop();
}



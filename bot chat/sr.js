exports.run = (alvo, user, msg, self, app) => {

    let NomeDoComand = msg.trim();
    let mensagem = NomeDoComand.toLowerCase();
    let letraSpliter = msg.split('');
    let commandSpliter = msg.split(' ')
    let i = 1;
    let j = 0;
    const lista = [];

    for (j = 0; j >= 100; j++) {
        if (letraSpliter[j] === ' ') { i++ }
    }
    console.log(i)
    //criando a lista com os requests
    //for (j = 1; j >= i; j++) { 
        lista.push(commandSpliter[1])
        console.log(lista)
        commandSpliter.pop();
}



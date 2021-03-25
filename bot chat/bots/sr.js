const fetch = require('node-fetch');

exports.run = (alvo, user, msg, self, app) => {

    let NomeDoComand = msg.trim();
    let mensagem = NomeDoComand.toLowerCase();
    let letraSpliter = msg.split('');
    let commandSpliter = msg.split(' ')
    let i = 1;
    let j = 0;
    let h = 0;
    let lista = [];

    /*for (j = 0; j >= 100; j++) {
        if (commandSpliter[j] === ' ') { i++ }
    }*/
        lista.push(mensagem)
        console.log(lista)
        commandSpliter.pop();

    let mscLista = {
            lista: lista[h]
        }

    fetch('http://localhost:3030', { method: 'POST', body: JSON.stringify(mscLista), headers: { 'Content-Type': 'application/json' } });
}



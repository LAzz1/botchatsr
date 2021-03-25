var express = require('express')
var app = express()
const port = process.env.PORT || 3030
const bodyParser = require('body-parser')
require('dotenv').config()

app.listen(port, () => {
    console.log(`Link do servidor: http://localhost:${port}`)
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({
    type: ['application/json', 'text/plain']
}))

let musicas = [];
let discArgs =[]

app.post('/', (async (req, res) => {
    let data = req.body;
    discArgs.push(data.arguments)
    musicas.push(data.lista);
    console.log(musicas)
    console.log(discArgs)
}))

app.get('/', (async (req, res) => {
    res.send(musicas);
    res.send(discArgs)
    discArgs.pop()
    musicas.pop()

}))
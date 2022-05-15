var express = require('express');
var app = express();
const fetch = require("node-fetch")
const port = process.env.PORT || 3000


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/resta/:numero1/:numero2/', function (req, res) {
  numero1 = parseInt(req.params.numero1)
  numero2 = parseInt(req.params.numero2)
  let resultado = numero1 - numero2
  res.send({ resultado })

});

app.get('/multiplicacion/:numero1/:numero2/', function (req, res) {
  numero1 = parseInt(req.params.numero1)
  numero2 = parseInt(req.params.numero2)
  let resultado = numero1 * numero2
  res.send({ resultado })
});

app.get('/suma/:numero1/:numero2/', function (req, res) {
  numero1 = parseInt(req.params.numero1)
  numero2 = parseInt(req.params.numero2)
  let resultado = numero1 + numero2
  res.send({ resultado });
});

app.get('/pokemon/:id', function (req, res) {
  id = req.params.id
  url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  fetch(url)
  .then(response => response.json())
  .then(data => res.send(data));
  
});


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
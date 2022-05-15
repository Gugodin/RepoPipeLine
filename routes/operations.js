const express = require('express');
ruta = express.Router();

ruta.get('/resta/:numero1/:numero2/', function (req, res) {
    numero1 = parseInt(req.params.numero1)
    numero2 = parseInt(req.params.numero2)
    let resultado = numero1 - numero2
    res.send({ resultado })

});

ruta.get('/multiplicacion/:numero1/:numero2/', function (req, res) {
    numero1 = parseInt(req.params.numero1)
    numero2 = parseInt(req.params.numero2)
    let resultado = numero1 * numero2
    res.send({ resultado })
});

ruta.get('/suma/:numero1/:numero2/', function (req, res) {
    numero1 = parseInt(req.params.numero1)
    numero2 = parseInt(req.params.numero2)
    let resultado = numero1 + numero2
    res.send({ resultado });
});

module.exports = ruta;
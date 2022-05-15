const express = require('express');
ruta = express.Router();
const fetch = require("node-fetch")


ruta.get('/:id', function (req, res) {
    id = req.params.id
    url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    fetch(url)
    .then(response => response.json())
    .then(data => res.send(data));
    
  });

module.exports = ruta;
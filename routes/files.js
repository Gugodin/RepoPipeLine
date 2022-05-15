const express = require('express');
const path = require('path');
ruta = express.Router();

ruta.get('/', function (req, res) {
    
    var options = {
        root: path.join(__dirname, '../views'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    res.sendFile("document.html", options)
});




module.exports = ruta;
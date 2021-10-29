const express = require('express');
const infoProductos = require('../Views/InformacionProductos');
const app = require('../src/App')
var router = express.Router();

router.get('/pagina-principal', function(req, res){
    res.render('app', {title: 'Pagina principal'});
});

router.get('/info-productos', (req, res) => {
    res.render('InformacionProductos', {title: 'Info productos'});
})


module.exports= router;
var express = require('express'); //Carica il modulo express
var router = express.Router(); //Ottiene un oggetto router
var country = require('countryjs');
var createError = require('http-errors'); //Importo la libreria per la gestione degli errori


router.get('/info/:state/', function(req, res, next)
{ //Rendiamo lo stato un parametro
    res.send(country.info(req.params.state));
})
router.get('/info/', function(req, res, next)
{ //Rendiamo lo stato un parametro
    res.send(country.info(req.query.state));
})
router.get('/pages/:state/', function(req, res, next){
    if (typeof country.info(req.params.state) === "undefined") {
        return next(createError(422, 'OOPS! State not found'));
    }
    else
    {
        res.render('state', {state: country.info(req.params.state)}) ; //Rendiamo lo stato un parametro
    }
})
module.exports = router; //esporta il modulo per poterlo usare in app.js

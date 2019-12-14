var express = require('express');
var router = express.Router();
const poeti = require('../poeti')
/* GET home page. */
var objarr = new Array();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lista di poeti', poeti: poeti });
});
router.get('/details', function(req, res, next)
{
  const poeta = poeti.find(p => p.id == req.query.id)
  console.log(poeta)
  res.render('details', {poeta: poeta})
})

module.exports = router;

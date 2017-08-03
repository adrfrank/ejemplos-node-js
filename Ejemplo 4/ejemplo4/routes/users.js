var express = require('express');
var router = express.Router();



router.get('/:name',function(req,res,next){
  res.send('Nombre: '+req.params.name);
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

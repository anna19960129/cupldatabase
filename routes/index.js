var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/testAjax',function(req,res,next){
  res.json({success:1});
});
router.post('/ajax/paperInfoSubmit',function(req,res,next){
  console.log(req.body);
  res.json({success:1});
})


module.exports = router;

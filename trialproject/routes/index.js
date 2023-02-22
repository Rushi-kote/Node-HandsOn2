var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',(req,res)=>{
  res.send("Home");
  res.end();
});

router.get('/submit',(req,res)=>{
  res.end("Submit get")
});

router.post('/submit',(req,res)=>{
  res.end(`Name:${req.Name}`);
})


module.exports = router;

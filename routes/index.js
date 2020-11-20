var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
var multiparty = require('multiparty')

// var multer = require('multer')
// var fs = require('fs')
// router.use('/static', express.static('/static'))
// var storange = multer.diskStorage({
//   destination: function(req, fike, cb){
//     cb(null, './uoload')
//   },
//   filename: function(req, file, cb){
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })
// var upload = multer({storange})

// 配置 bodyParser
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'app' });
});

router.post('/video', function (req, res, next) {
  console.log(req.body)
  let form = new multiparty.Form({ uploadDir: './public/images' })
  form.parse(req, function (err, fields, file) {
    console.log(fields);
    res.send({
      code: 0,
      data: Number(fields.current) + 1
    });
  })
  // res.send('success')
});

module.exports = router;

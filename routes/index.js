var express = require('express');
var router = express.Router();
var path = require('path')

var myArduino = require('../modules/myArduino')
myArduino.connect()


/* GET home page. */
router.get('/', function (req, res, next) {

	res.sendFile(path.resolve('views/index.html'))

});


router.get('/on', function (req, res, next) {

	myArduino.on()
	res.send({ success: true, message: 'Led is on' })

});


router.get('/blink', function (req, res, next) {

	myArduino.blink()
	res.send({ success: true, message: 'Led blinking' })

});

router.get('/off', function (req, res, next) {

	myArduino.off()
	res.send({ success: true, message: 'Led off' })

});


router.get('/stop', function (req, res, next) {

	myArduino.stop()
	res.send({ success: true, message: 'Led stopped' })

});

module.exports = router;

var express = require('express');
var router = express.Router();
var firstCall = require('../controller/first-call.js');
var secondCall = require('../controller/second-call.js');

/* GET home page. */
router.get('/', firstCall);

router.post('/', secondCall);


module.exports = router;

const express = require('express');
const cors = require('cors');
const router = express.Router();
const controller1 = require('../controllers/controller1');
const controller2 = require('../controllers/controller2');
const config = require('../config/config')

router.get('/mainpage', controller1.show_html_mainpage);
router.post('/getcustomers', cors(config.cors_options), controller2.middle);

module.exports = router;
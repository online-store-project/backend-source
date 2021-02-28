const express = require('express');
const router = express.Router();
const controller1 = require('../controllers/controller1');
const controller2 = require('../controllers/controller2');

router.get('/mainpage', controller1.show_html_mainpage);
router.get('/db_test', controller2.ss);

module.exports = router;
const express = require('express');
const router = express.Router();
const html_controller = require('../controllers/html_controller');

router.get('/mainpage', html_controller.show_html_mainpage);

module.exports = router;
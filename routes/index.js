const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/mainpage', controller.show_mainpage);
router.get('/productpage/:id', controller.show_productpage);

module.exports = router;
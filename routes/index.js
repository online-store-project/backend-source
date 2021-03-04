const express = require('express');
const router = express.Router();
const controller1 = require('../controllers/controller1');
const controller2 = require('../controllers/controller2');

router.get('/mainpage', controller1.show_html_mainpage);
router.post('/getproducts', controller2.get_products);
router.get('/getproduct', controller2.get_product);

module.exports = router;
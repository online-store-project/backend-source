const express = require('express');
const router = express.Router();
const products = require('../controllers/productcontroller.js');

router.get('/mainpage', products.find_all);
router.get('/productpage/:id', products.find_one);
router.get('/search_products', products.find_by_search);

module.exports = router;
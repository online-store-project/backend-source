const express = require('express');
const router = express.Router();
const products = require('../controllers/productcontroller.js');

router.get('/mainpage', products.find_all);
router.get('/productpage/:id/:name', products.find_one);
router.get('/search_products', products.find_by_search);
router.get('/search_category/:id/:name', products.find_category);

module.exports = router;
const express = require('express');
const router = express.Router();
const products = require('../controllers/productcontroller.js');
const users = require('../controllers/usercontroller.js');

router.get('/mainpage', products.find_all);
router.get('/productpage/:id/:name', products.find_one);
router.get('/search_products', products.find_by_search);
router.get('/search_category/:id/:name', products.find_category);

router.get('/login', users.loginpage);
router.post('/login', users.login);
router.get('/registry', users.registrypage);
router.post('/registry', users.registry);

router.post('/account', users.accountpage);
module.exports = router;
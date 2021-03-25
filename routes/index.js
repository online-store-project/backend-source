const express = require('express');
const router = express.Router();
const products = require('../controllers/productcontroller.js');
const users = require('../controllers/usercontroller.js');

router.get('/mainpage', products.find_all);
router.get('/productpage/:id/:name', products.find_one);
router.get('/search_products', products.find_by_search);
router.get('/search_category/:id/:name', products.find_category);

router.get('/loginpage', (req, res) => {
    res.render('layouts/loginpage');
});
router.get('/registrypage', (req, res) => {
    res.render('layouts/registrypage');
});
router.post('/login', users.login);
router.post('/registry', users.registry);

module.exports = router;
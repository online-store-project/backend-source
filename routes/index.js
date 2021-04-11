const express = require('express');
const router = express.Router();
const products = require('../controllers/productcontroller');
const users = require('../controllers/usercontroller');
const auth = require('./middleware/auth');

router.get('/mainpage', products.find_all);
router.get('/productpage/:id/:name', products.find_one);
router.get('/search_products', products.find_by_search);
router.get('/search_category/:id/:name', products.find_category);

router.get('/login', users.loginpage);
router.post('/login', users.login);
router.get('/registry', users.registrypage);
router.post('/registry', users.registry);

router.get('/account', auth.check_authentication, users.accountpage);
router.post('/update-account', auth.check_authentication, users.update_account);
router.get('/logout', users.clear_cookies);

router.get('/shopping-cart', auth.check_authentication, users.shopping_cart);
router.post('/add-shopping-cart', auth.check_authentication, users.addto_shoppingcart);

module.exports = router;
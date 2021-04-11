const products = require('../models/Product');

const find_all = (req, res) => {
    products.find_all((err, data) => {
        if(err) {
            return res.status(500).send({
                message:
                    err.message || "Some error"
            })
        }
        res.render('layouts/mainpage', { data: data, title: "Mainpage" });
    })
}
const find_one = (req, res) => {
    products.find_one(req.params.id, (err, data) => {
        if(err) {
            return res.status(500).send({
                message:
                    err.message || "Some error"
            })
        }
        res.render('layouts/productpage', { data: data, title: "Productpage" });
    })
}
const find_by_search = (req, res) => {
    products.find_by_search(req.query.search_term, (err, data) => {
        if(err) {
            return res.status(500).send({
                message:
                    err.message || "Some error"
            })
        }
        res.render('layouts/mainpage', { data: data, title: "Mainpage" });
    })
}
const find_category = (req, res) => {
    products.find_category(req.params.id, (err, data) => {
        if(err) {
            return res.status(500).send({
                message:
                    err.message || "Some error"
            })
        }
        res.render('layouts/mainpage', { data: data, title: "Mainpage" });
    })
}
const basketpage = (req, res) => {
    if(!req.session.shopping_cart) return res.render('layouts/basketpage', { title: "Basketpage" });

    products.find_basket_products(req.session.shopping_cart, (error, data) => {
        if(err) {
            return res.status(500).send({
                message:
                    error.message || "Some error"
            })
        }
        console.log(data);
        res.render('layouts/basketpage', { data: data, title: "Basketpage" });
    })
    res.render('layouts/basketpage', { data: "tssss", title: "Basketpage" });
}
const addto_basket = (req, res) => {
    let shopping_cart = [];
    if(!req.body.product_id) return res.send('No product chosen');

    if(!req.session.shopping_cart) {
        shopping_cart.push(req.body.product_id);
        req.session.shopping_cart = shopping_cart;
    } else {
        shopping_cart = req.session.shopping_cart;
        shopping_cart.push(req.body.product_id);
    }
    return res.send('Product added to shopping cart succesfully');
}

module.exports = {
    find_all,
    find_one,
    find_by_search,
    find_category,
    basketpage,
    addto_basket
}
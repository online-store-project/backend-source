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

    console.log(req.session.shopping_cart);
    let array = [];
    for(let value of req.session.shopping_cart) {
        array.push(value.product_id);
    }

    products.find_basket_products(array, (error, data) => {
        if(error) {
            return res.status(500).send({
                message:
                    error.message || "Some error"
            })
        }
        data.forEach(product => {   //lisätään product-objeckteille count-ominaisuus
            if(typeof product === "object") {
                req.session.shopping_cart.forEach(e => {
                    console.log(e.product_id);
                    if(e.product_id == product.productId) {
                        product["count"] = e.count;
                    }
                })
            }
        })
        res.render('layouts/basketpage', { data: JSON.stringify(data), title: "Basketpage" });
    })
}
const addto_basket = (req, res) => {
    console.log(req.body.product_id)

    if(!req.body.product_id) return res.send('No product chosen');

    let shopping_cart = [];
    let check_number = 0;

    if(!req.session.shopping_cart) {
        shopping_cart.push({
            product_id: req.body.product_id,
            count: 1
        });
    } else {
        shopping_cart = req.session.shopping_cart;
        for(let value of shopping_cart) {
            if(value.product_id === req.body.product_id) {
                value.count++;
                check_number++;
            }
        }
        if(check_number === 0) {
            shopping_cart.push({
                product_id : req.body.product_id,
                count: 1
            });
        }
    }
    req.session.shopping_cart = shopping_cart;
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
const Product = require('../models/Product');

const find_all = (req, res) => {
    Product.find_all((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error"
            })
        else res.render('layouts/mainpage', { data: data });
    })
}
const find_one = (req, res) => {
    Product.find_one(req.params.id, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error"
            })
        else res.render('layouts/productpage', { data: data });
    })
}
const find_by_search = (req, res) => {
    Product.find_by_search(req.query.search_term, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error"
            })
        else res.render('layouts/mainpage', { data: data });
    })
}
module.exports = {
    find_all,
    find_one,
    find_by_search,
}
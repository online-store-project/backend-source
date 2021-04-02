const products = require('../models/Product');

const find_all = (req, res) => {
    products.find_all((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error"
            })
        else res
            .cookie('testi', 'testivalue')
            .render('layouts/mainpage', { data: data, title: "Mainpage" });
    })
}
const find_one = (req, res) => {
    products.find_one(req.params.id, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error"
            })
        else res.render('layouts/productpage', { data: data, title: "Productpage" });
    })
}
const find_by_search = (req, res) => {
    products.find_by_search(req.query.search_term, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error"
            })
        else res.render('layouts/mainpage', { data: data, title: "Mainpage" });
    })
}
const find_category = (req, res) => {
    products.find_category(req.params.id, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error"
            })
        else res.render('layouts/mainpage', { data: data, title: "Mainpage" });
    })
}
module.exports = {
    find_all,
    find_one,
    find_by_search,
    find_category
}
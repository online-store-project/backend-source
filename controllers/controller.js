const db_getdata = require('../models/db_getdata');

const show_mainpage = async (req, res) => {
    let sql = "SELECT * FROM Products";
    let data = await db_getdata.get_productinformation(sql, "");
    res.render('layouts/mainpage', { data: data });
}
const show_productpage = async (req, res) => {
    let sql = "SELECT * FROM Products WHERE productID = ?";
    let data = await db_getdata.get_productinformation(sql, req.params.id);
    console.log(data);
    res.render('layouts/productpage', { data: data });
}
const search_products = async (req, res) => {
    let sql = "SELECT * FROM Products WHERE name LIKE ?"
    let query_term = '%' + req.body.search_term + '%';
    let data = await db_getdata.get_productinformation(sql, query_term);
    res.render('layouts/mainpage', { data: data });
}

module.exports = {
    show_mainpage,
    show_productpage,
    search_products
}
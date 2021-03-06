const db_getdata = require('../models/db_getdata');

const show_mainpage = async (req, res) => {
    let data = await db_getdata.dbget_products();
    res.render('layouts/mainpage', { data: data });
}

const show_productpage = async function(req, res) {
    let data = await db_getdata.dbget_product(req.params.id);
    console.log(data);
    res.render('layouts/productpage', { data: data });
}
module.exports = {
    show_mainpage,
    show_productpage
}
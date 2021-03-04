const path = require('path');
const html_path = path.join(__dirname, '../frontend-source', 'html');
const db_getdata = require('../models/db_getdata');


const get_products = async function(req, res) {
    let data = await db_getdata.dbget_products();
    res.json(data);
}
const get_product = async function(req, res) {
    let data = await db_getdata.dbget_product(req.query.id);
    res.sendFile(path.join(html_path, 'productpage.html'));
}

module.exports = {
    get_products,
    get_product
}
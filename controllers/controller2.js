const db_getdata = require('../models/db_getdata');

const middle = async function(req, res, next) {
    let data = await db_getdata.get_customers();
    res.json(data);
}
module.exports = {
    middle
}
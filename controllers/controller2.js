const db_getdata = require('../models/db_getdata');

const middle = async function(req, res) {
    let data = await db_getdata.get_customers();
    res.send(data);
}
module.exports = {
    middle
}
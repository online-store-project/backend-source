const db_getdata = require('../models/db_getdata');

const ss = async function(req, res) {
    let data = await db_getdata.test_connection();
    console.log(data);
}
module.exports = {
    ss
}
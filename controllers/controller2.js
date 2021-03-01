const db_getdata = require('../models/db_getdata');
const express = require('express');
const app = express();

const middle = async function(req, res) {
    let data = await db_getdata.get_customers();
    console.log(req);
    res.send(data);
}
module.exports = {
    middle
}
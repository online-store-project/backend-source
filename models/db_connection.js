const mysql = require('mysql');
const db = require('../config/database');

const mysql_connection = mysql.createConnection({
    host: db.host,
    user: db.user,
    password: db.password,
    database: db.database,
    port: db.port
})
module.exports = {
    mysql_connection
}
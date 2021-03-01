const mysql = require('mysql');
const config = require('../config/config');

const mysql_connection = mysql.createConnection({
    host: config.database_config.host,
    user: config.database_config.user,
    password: config.database_config.password,
    database: config.database_config.database,
    port: config.database_config.port
})
module.exports = {
    mysql_connection
}
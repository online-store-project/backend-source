const mysql = require('mysql');
const session = require('express-session');
const mysql_store = require('express-mysql-session')(session);
const { database_options } = require('./config');
const { session_store_options } = require('./config');

const mysql_connection = mysql.createConnection(database_options);
const session_store = new mysql_store(session_store_options, mysql_connection);

const session_options = {
    secret: process.env.SESSION_SECRET,
    store: session_store,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 6
    }
}
mysql_connection.connect(error => {
    if(error) throw error;
    console.log("MySQL Connected Succesfully");
})

module.exports = {
    mysql_connection,
    session_options
}

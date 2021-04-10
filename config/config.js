const expressEjsLayouts = require('express-ejs-layouts');

require('dotenv').config();

const database_options = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
}
const jwt_token = process.env.SECRET_TOKEN;
const port = process.env.HOST_PORT;

const session_store_options = {
    clearExpired: true,
    checkExpirationInterval: 1000 * 60,
    expiration: 1000 * 60 * 60 * 6
}

const cors_options = {
    origin: process.env.HOST_IP,
    optionsSuccessStatus: 200
}

module.exports = {
    database_options,
    jwt_token,
    session_store_options,
    port
}
require('dotenv').config();

const database_config =  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
}
//Mahdollisesti turha
const cors_options = {
    origin: process.env.HOST_IP,
    optionsSuccessStatus: 200
}
const jwt_token = process.env.SECRET_TOKEN;

module.exports = {
    database_config,
    cors_options,
    jwt_token
}
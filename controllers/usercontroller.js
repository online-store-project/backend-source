const jwt = require('jsonwebtoken');
const users = require('../models/User');
const { jwt_token } = require('../config/config');
const jwt_authentication = require('../config/jwt_authentication');

const registrypage = (req, res) => {
    res.render('layouts/registrypage');
}
const registry = (req, res, next) => {
    users.create_user(req.body, (err, data) => {
        if(err) {
            res.status(500).send({
                message : err || "Some error"
            })
        } else {
            res.redirect('/online-store/mainpage');
            next();
        }
    })
}
const loginpage = (req, res) => {
    res.render('layouts/loginpage', { data: JSON.stringify(null) });
}
const login = (req, res, next) => {
    users.login_user(req.body, (error, username) => {
        if(error) {
            res.render('layouts/loginpage', { data: JSON.stringify(error) });
        } else {
            console.log(username);
            let token =jwt.sign(username, jwt_token);
            res.redirect('/online-store/mainpage?token=' + token);
            next();
        }
    });
}
const accountpage = (req, res) => {
    res.render('layouts/accountpage');
}
function authenticate_token() {
    const auth_header = req.headers['authorization'];
    const token = auth_header.split(' ')[1];
}
module.exports = {
    registrypage,
    registry,
    loginpage,
    login,
    accountpage
}
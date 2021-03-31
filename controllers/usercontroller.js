const jwt = require('jsonwebtoken');
const users = require('../models/User');
const { jwt_token } = require('../config/config.js');

const registrypage = (req, res) => {
    res.render('layouts/registrypage');
}
const registry = (req, res) => {
    users.create_user(req.body, (err, data) => {
        if(err) {
            res.status(500).send({
                message : err || "Some error"
            })
        } else {
            res.redirect('/online-store/mainpage');
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
            res.clearCookie('access_token');
            let token =jwt.sign(username, jwt_token);
            res
                .cookie('access_token', token, { maxAge: 3000000, httpOnly: true })
                .redirect('/online-store/mainpage');
        }
    });
}
const accountpage = (req, res) => {
    users.get_userinformation(req.username, (error, userinformation) => {
        if(error) {
            res.status(500).send({
                message:
                    error.message || "Some error when searching user-data"
            })
        } else {
            res.render('layouts/accountpage', { data: userinformation, message: "" });
        }
    })
}
const update_account = (req, res) => {
    users.update_userinformation(req.username, req.body, (error, message) => {
        if(error) {
            //Korjaa tämä
            res.render('layouts/accountpage', { data: "Korjaa tämä", message: error })
        }
        else {
            //Korjaa tämä
            res.render('layouts/accountpage', { data: "Korjaa tämä", message: message })
        }
    })
}

module.exports = {
    registrypage,
    registry,
    loginpage,
    login,
    accountpage,
    update_account
}
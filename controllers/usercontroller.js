const users = require('../models/User');
const auth = require('../routes/middleware/auth');

const registrypage = (req, res) => {
    res.render('layouts/registrypage', { title: "Registrypage" });
}
const registry = (req, res) => {
    users.create_user(req.body, (err, data) => {
        if(err) {
            res.status(500).send({
                message : err || "Some error"
            })
        }
        else res.redirect('/online-store/mainpage');
    })
}
const loginpage = (req, res) => {
    res.render('layouts/loginpage', { title: "Loginpage" });
}
const login = (req, res, next) => {
    users.login_user(req.body, (error, user) => {
        if(error) return res.render('layouts/loginpage', { message: error, title: "Loginpage" });

        auth.sign_token(user, (err, token) => {
            if(err) {
                return res.status(500).send({
                    message:
                        err || "Some error"
                })
            }
            res
                .cookie('access_token', token, { maxAge: 3000000, httpOnly: true })
                .cookie('username', user.username, { maxAge: 3000000 })
                .redirect('/online-store/mainpage');
        })
    });
}
const accountpage = (req, res) => {
    users.get_userinformation(req.username, (error, userinformation) => {
        if(error) {
            return res.status(500).send({
                message:
                    error || "Some error when searching user-data"
            })
        }
        res.render('layouts/accountpage', { data: userinformation, title: "Accountpage" });
    })
}
const update_account = (req, res) => {
    users.update_userinformation(req.username, req.body, (error, message) => {
        if(error) {
            return res.status(500).send({
                message:
                    error || "Some error when updating user-data"
            })
        }
        users.get_userinformation(req.username, (err, userinformation) => {
            res.render('layouts/accountpage', { data: userinformation, message: message, title: "Accountpage" });
        })
    })
}
const clear_cookies = (req, res) => {
    res
        .clearCookie('access_token')
        .clearCookie('username')
        .redirect('/online-store/mainpage');
}
const shopping_cart = (req, res) => {

}

module.exports = {
    registrypage,
    registry,
    loginpage,
    login,
    accountpage,
    update_account,
    clear_cookies,
    shopping_cart
}
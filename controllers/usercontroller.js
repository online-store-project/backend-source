const users = require('../models/User');
const auth = require('../routes/middleware/auth');

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
    res.render('layouts/loginpage');
}
const login = (req, res, next) => {
    users.login_user(req.body, (error, user) => {
        if(error) {
            return res.render('layouts/loginpage', { data: JSON.stringify(error) });
        }
        auth.sign_token(user, (err, token) => {
            if(err) {
                res.status(500).send({
                    message:
                        err || "Some error"
                })
            } else {
                res
                    .cookie('access_token', token, { maxAge: 3000000, httpOnly: true })
                    .redirect('/online-store/mainpage');
            }
        })
    });
}
const accountpage = (req, res) => {
    users.get_userinformation(req.username, (error, userinformation) => {
        console.log(req.username);
        if(error) {
            res.status(500).send({
                message:
                    error || "Some error when searching user-data"
            })
        } else {
            res.render('layouts/accountpage', { data: userinformation });
        }
    })
}
const update_account = (req, res) => {
    users.update_userinformation(req.username, req.body, (error, message) => {
        if(error) {
            res.status(500).send({
                message:
                    error || "Some error when updating user-data"
            })
        }
        users.get_userinformation(req.username, (err, userinformation) => {
            res.render('layouts/accountpage', { data: userinformation, message: message });
        })
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
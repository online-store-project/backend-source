const users = require('../models/User');

const registrypage = (req, res) => {
    res.render('layouts/registrypage');
}
const loginpage = (req, res) => {
    res.render('layouts/loginpage');
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
const login = (req, res, next) => {
    users.login_user(req.body, (err, data) => {
        if(err) {
            res.status(500).send({
                message: err || "Some error"
            })
        } else {
            console.log(data);
            res.redirect('/online-store/mainpage');
            next();
        }
    });
}


module.exports = {
    loginpage,
    registrypage,
    login,
    registry
}
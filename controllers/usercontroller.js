const users = require('../models/User');

const login = (req, res) => {
    res.render('layouts/loginpage');
}
const registry = (req, res) => {
    users.create_user(req.body, (err, data) => {
        if(err) {
            res.status(500).send({
                message : err || "Some error"
            })
        }
        else res.render('layouts/registrypage');
    })
}

module.exports = {
    login,
    registry
}
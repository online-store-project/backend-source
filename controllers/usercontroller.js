const users = require('../models/User');

const login = (req, res) => {
    res.render('layouts/mainpage');
}
const registry = (req, res) => {
    users.create_user()
}

module.exports = {
    login,
    registry
}
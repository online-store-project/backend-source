const users = require('../models/User');

const login = (req, res) => {
    res.render('layouts/mainpage');
}
const registry = (req, res) => {
    res.render('layouts/mainpage');
}

module.exports = {
    login,
    registry
}
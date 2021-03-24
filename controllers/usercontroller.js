const users = require('../models/User');

const login_page = (req, res) => {
    res.render('layouts/loginpage');
}

module.exports = {
    login_page
}
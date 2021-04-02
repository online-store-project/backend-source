const jwt = require('jsonwebtoken');
const path = require('path');
const { jwt_token } = require('../../config/config.js');

const check_authentication = (req, res, next) => {
    if(!req.cookies.access_token) {
        res.redirect('/online-store/login');
    }
    if(req.cookies.access_token) {
        verify_token(req.cookies.access_token, (error, username) => {
            if(error) {
                res.redirect('/online-store/login');
            }
            req.username = username;
            next();
        })
    }
}
const sign_token = (user, result) => {
    if(user) {
        let token =jwt.sign(user, jwt_token, {
            expiresIn: 3000
        });
        result(null, token);
    } else {
        result("Tokenin signauksessa häikkää", null)
    }
}
function verify_token(access_token, result) {
    jwt.verify(access_token, jwt_token, (error, username) => {
        if(error) {
            result(error, null);
            return;
        }
        result(null, username);
    })
}
module.exports = {
    check_authentication,
    sign_token
}
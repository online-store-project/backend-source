const { mysql_connection } = require('../config/db_connection');
const crypto = require('crypto');

const create_user = (user, result) => {
    if(user.pwd != user.confirm_pwd || user.pwd <= 8) {
        result(null, "Salasanojen kanssa jotain häikkää");
        return;
    }
    let salt = crypto.randomBytes(8).toString('hex');
    generate_hash(user.pwd, salt, (err, hashed_pwd) => {
        let values = [[ user.username, user.email, hashed_pwd, salt, user.firstname, user.lastname ]];
        let sql = "INSERT INTO User(username,email,hash,salt,firstname,lastname) VALUES ?";

        mysql_connection.query(sql, [values], (err, data) => {
            if(err || data.affectedRows != 1) {
                console.log("Error : " + err);
                result(null, err);
                return;
            }
            console.log(data);
            result(null, "Käyttäjä luotu onnistuneesti");
        })
    })
}
const login_user = (user, result) => {
    let sql = "SELECT email,hash,salt FROM User WHERE email = ?";
    mysql_connection.query(sql, [user.email], (err, data) => {
        if(err) {
            console.log("Error : " + err);
            result(null, err);
            return;
        }
        if(data.length == 0) {
            result(null, "Väärä sähköpostiosoite");
            return;
        }
        for(let value of data) {
            generate_hash(user.pwd, value.salt, (err, hashed_pwd) => {
                if(hashed_pwd === value.hash) {
                    result(null, 'Kirjautuminen onnistui!');
                    return;
                } else {
                    result(null, "Väärä salasana");
                    return;
                }
            })
        }
    })
}
const generate_hash = (password, salt, result) => {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let hashed_pwd = hash.digest('hex');
    result(null, hashed_pwd);
}
module.exports = {
    create_user,
    login_user
}

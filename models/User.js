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
    let sql = "SELECT userId,username,email,hash,salt FROM User WHERE email = ?";
    mysql_connection.query(sql, [user.email], (err, data) => {
        if(err) {
            console.log("Error : " + err);
            result('Tietokanta virhe', null);
            return;
        }
        if(data.length == 0) {
            result('Tarkista kirjautumistiedot', null);
            return;
        }
        for(let value of data) {
            generate_hash(user.pwd, value.salt, (err, hashed_pwd) => {
                if(hashed_pwd === value.hash) {
                    let token_information = {
                        user_id: value.userId,
                        username: value.username
                    }
                    result(null, token_information);
                    return;
                } else {
                    result('Tarkista kirjautumistiedot', null);
                    return;
                }
            })
        }
    })
}
const get_userinformation = (username, result) => {
    let sql = "SELECT username,email,firstname,lastname from User WHERE username = ?";
    mysql_connection.query(sql, [username], (error, data) => {
        if(error) {
            console.log("Error : " + error);
            result("Some database error", nul);
            return;
        }
        if(data.length == 0) {
            result("Käyttäjää ei löytynyt", null);
            return;
        }
        result(null, JSON.stringify(data));
    })
}
const update_userinformation = (username, user, result) => {
    let sql = "UPDATE User SET firstname = ?, lastname = ? WHERE username = ?";
    mysql_connection.query(sql, [user.firstname, user.lastname, username], (error, data) => {
        if(error) {
            console.log("Error : " + error);
            result("Some database error", null);
            return;
        }
        console.log(data);
        if(data.affectedRows === 1) {
            result(null, "Käyttäjätiedot muutettu onnistuneesti");
            return;
        } else {
            result("Käyttäjätietojen muuttaminen ei onnistunut", null);
        }
        
    })
}
function generate_hash(password, salt, result) {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let hashed_pwd = hash.digest('hex');
    result(null, hashed_pwd);
}

module.exports = {
    create_user,
    login_user, 
    get_userinformation,
    update_userinformation
}

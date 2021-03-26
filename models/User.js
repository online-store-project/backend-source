const { mysql_connection } = require('../config/db_connection');
const crypto = require('crypto');

const create_user = (user, result) => {
    if(user.pwd != user.confirm_pwd || user.pwd <= 8) {
        result("Salasanojen kanssa jotain häikkää", null);
        return;
    }
    generate_hash(user.pwd, (err, encryption) => {
        let values = [
            [user.username, user.email, encryption.hashed_pwd, encryption.salt, user.firstname, user.lastname]
        ]
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
const generate_hash = (password, result) => {
    let salt = crypto.randomBytes(8).toString('hex');
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let hashed_pwd = hash.digest('hex');
    let encryption = {
        hashed_pwd,
        salt
    }
    result(null, encryption);
}

module.exports = {
    create_user
}

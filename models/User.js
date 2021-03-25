const { mysql_connection } = require('./db_connection');
const crypto = require('crypto');

const generate_hash = (password, result) => {
    if(password >= 8) {
        result(null, "Bad password");
        return;
    }

    let salt = crypto.randomBytes(8).toString('hex');
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let hashed_pwd = hash.digest('hex');
    result(null, hashed_pwd);
}
const create_user = (password, result) => {
    generate_hash(password, (err, data) => {
        
    })
}

module.exports = {
    create_user
}
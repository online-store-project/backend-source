const { mysql_connection } = require('./db_connection');

const find_all = result => {
    let sql = "SELECT * FROM Product";
        mysql_connection.query(sql, (err, data) => {
            
            if(err) {
                console.log("Error : " + error);
                result(null, err);
                return;
            }
            result(null, JSON.stringify(data));
        })
}
const find_one = (id, result) => {
    let sql = "SELECT * FROM Product WHERE productId = ?";
    console.log(id);
    mysql_connection.query(sql, [id], (err, data) => {
        if(err) {
            console.log("Error : " + error);
            result(null, err);
            return;
        }
        console.log(data);
        result(null, JSON.stringify(data));
    })
}
const find_by_search = (search_term, result) => {
    let term = `%${search_term}%`;
    let sql = "SELECT * FROM Product WHERE name LIKE ?";
    console.log(sql);
    mysql_connection.query(sql, [term], (err, data) => {
        if(err) {
            console.log("Error : " + error);
            result(null, err);
            return;
        }
        result(null, JSON.stringify(data));
    })
}
const find_category = (category_id, result) => {
    let sql = "SELECT * FROM Product WHERE product_typeId = ?";
    mysql_connection.query(sql, [category_id], (err, data) => {
        if(err) {
            console.log("Error : " + error);
            result(null, err);
            return;
        }
        result(null, JSON.stringify(data));
    })
}
module.exports = {
    find_all,
    find_by_search,
    find_one,
    find_category
}
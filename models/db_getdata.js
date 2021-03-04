const { mysql_connection } = require('./db_connection');

const dbget_products = () => {
    return new Promise(resolve => {
            let sql = "SELECT * FROM Products";
            mysql_connection.query(sql, (error, data) => {
                if(error) throw error;

                console.log("Succesfully connected to MySQL!");
                console.log(data);
                resolve(data);
            })
    })
}
const dbget_product = () => {
    return new Promise(resolve => {
        let sql = "SELECT * FROM Products WHERE ProductID = ?";
    })
}
module.exports = {
    dbget_products,
    dbget_product
}
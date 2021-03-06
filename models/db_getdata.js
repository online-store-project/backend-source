const { mysql_connection } = require('./db_connection');

const dbget_products = () => {
    return new Promise(resolve => {
            let sql = "SELECT * FROM Products";
            mysql_connection.query(sql, (error, data) => {
                if(error) throw error;

                console.log("Succesfully connected to MySQL!");
                resolve(JSON.stringify(data));
            })
    })
}
const dbget_product = (product_id) => {
    return new Promise(resolve => {
        let sql = "SELECT * FROM Products WHERE productID = ?";
        mysql_connection.query(sql, [product_id], (error, data) => {
            if(error) throw error;

            console.log("Succesfully connected to MySQL!");
            resolve(JSON.stringify(data));
        })
    })
}
module.exports = {
    dbget_products,
    dbget_product
}
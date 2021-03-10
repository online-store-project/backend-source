const { mysql_connection } = require('./db_connection');

const Product = (product) => {
    this.imageURL = product.imageURL;
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
}
Product.find_all = result => {
    let sql = "SELECT * FROM Product";
        mysql_connection.query(sql, (err, data) => {
            
            if(err) {
                console.log("Error : " + error);
                result(null, err);
                return;
            }
            //console.log("Products : ", data);
            result(null, JSON.stringify(data));
        })
}
Product.find_one = (id, result) => {
    let sql = "SELECT * FROM Product WHERE productId = ?";
    mysql_connection.query(sql, [id], (err, data) => {
        if(err) {
            console.log("Error : " + error);
            result(null, err);
            return;
        }
        console.log("Product : ", data);
        result(null, JSON.stringify(data));
    })
}
Product.find_by_search = (search_term, result) => {
    let term = `%${search_term}%`;
    let sql = "SELECT * FROM Product WHERE name LIKE ?";
    console.log(sql);
    mysql_connection.query(sql, [term], (err, data) => {
        
        if(err) {
            console.log("Error : " + error);
            result(null, err);
            return;
        }
        //console.log(data);
        result(null, JSON.stringify(data));
    })
}
module.exports = Product;
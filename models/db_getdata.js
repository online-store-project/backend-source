const { mysql_connection } = require('./db_connection');

const get_customers = () => {
    return new Promise(resolve => {
            let sql = "SHOW TABLES";
            mysql_connection.query(sql, (error, data) => {
                if(error) throw error;

                console.log("Succesfully connected to MySQL!");
                console.log(data);
                resolve(data);
            })
    })
}
module.exports = {
    get_customers
}
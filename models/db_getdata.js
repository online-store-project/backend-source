const { mysql_connection } = require('./db_connection');

const get_customers = () => {
    return new Promise(resolve => {
        mysql_connection.connect(function(error) {
            if(error) throw error;
            console.log("Succesfully connected to MySQL!");

            let sql = "SELECT * FROM customers";
            mysql_connection.query(sql, (error, data) => {
                if(error) throw error;

                console.log(data);

                mysql_connection.end();
                resolve(data);
            })
        })
    })
}

module.exports = {
    get_customers
}
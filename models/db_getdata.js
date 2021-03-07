const { mysql_connection } = require('./db_connection');

const get_productinformation = (sql, query_term) => {
    return new Promise(resolve => {
            mysql_connection.query(sql, [query_term], (error, data) => {
                if(error) throw error;

                console.log("Succesfully connected to MySQL!");
                resolve(JSON.stringify(data));
            })
    })
}
module.exports = {
    get_productinformation
}
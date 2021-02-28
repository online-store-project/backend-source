const { mysql_connection } = require('./db_connection');

const test_connection = () => {
    return new Promise(resolve => {
        mysql_connection.connect(function(error) {
            if(error) throw error;
            console.log("Succesfully connected to MySQL!");
            mysql_connection.end();
            let data = "Lassi";
            resolve(data);
        })
    })
}

module.exports = {
    test_connection
}
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'm2y3hk3rhek29bi3',
        password: 'f46q7wcxajl2zi30',
        database: 'b7dmq23ei7iow4hf',
    });
};

module.exports = connection;
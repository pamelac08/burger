// setup the code to connect Node to MySQL.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });



// Export the connection.
module.exports = connection;

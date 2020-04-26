// setup the code to connect Node to MySQL.
var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Racer2016",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export the connection.
module.exports = connection;

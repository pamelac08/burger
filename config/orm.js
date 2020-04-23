// Import (require) connection.js into orm.js
var connection = require("connection.js");

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// Initiate MySQL Connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });



var databaseUpdate =  {
    selectAll: function () {
        console.log("select all function")
    },
    insertOne: function () {
        console.log("insert one function")
    },
    updateOne: function () {
        console.log("update one function")
    }
}

// selectAll()
// insertOne()
// updateOne()


// Export the ORM object in module.exports.
module.exports = databaseUpdate;
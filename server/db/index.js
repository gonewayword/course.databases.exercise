var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = function() {
  var db = mysql.createConnection({
    password: 'tigerblood',
    user: 'root',
    database: 'chat'
  });
  return db;
};

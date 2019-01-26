// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JaWSDB_URL){
  connection = mysql.createConnection(process.env.JaWSDB_URL);
}else{
    connection = mysql.createConnection({
      host: "localhost",
      port: 8080,
      user: "Dara",
      password: "Freegift9@",
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

// Export connection for our ORM to use.
module.exports = connection;

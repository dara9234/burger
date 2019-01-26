
// express import
var express = require("express");
//var bodyParser = require('body-Parser');
var methodOverride = require('method-override');


var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Set Handlebars.
var exphbs = require("express-handlebars");

// override with POST having ?_method =DELETE
app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set Handlebars.
var exphbs = require("express-handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_Controller.js");

app.use(routes);
// app.use('/', routes);

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function() {
  console.log("App now listening at http://localhost:" + PORT);
});

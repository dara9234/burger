
// express import
var express = require("express");


var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() +"/public"));


app.use(bodyParser.urlencoded({
  extended:false
}));

// override with POST having ?_method =DELETE
app.use(methodOverride('_method'));

// Set Handlebars.
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Parse request body as JSON
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/burger_Controller.js");

app.use(routes);
// app.use('/', routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

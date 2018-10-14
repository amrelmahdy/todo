var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port  = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// routes
var todoRoutes = require("./routes/todo");

// set default view engine
app.set("view engine", "ejs");
// set static files middleware
app.use("/public", express.static("./public"));

// fire routes
todoRoutes(app);

app.listen(port);
console.log("app is listening to port 3000");
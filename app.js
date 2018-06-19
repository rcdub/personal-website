// Start express app
var express = require("express"),
    app     = express();

// Require ejs view engine and set public directory for stylesheet use
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Require the index routes
var indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

// Start server
app.listen(4000, function(){
    console.log("Server started on port 4000");
});
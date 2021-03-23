// Requiring necessary npm packages
const express = require("express");

// Set Handlebars.
const exphbs = require("express-handlebars");

// stuff for morgan
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");

// favicon npm package
const favicon = require('express-favicon');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// favicon invoked -tbd trying on handlebars 
app.use(favicon(path.join(__dirname, "./public/assets/img/favicon.png")));

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a"
});
// setup the logger
app.use(morgan("combined", {
  stream: accessLogStream
}));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Requiring our routes

const htmlRoutes = require("./routes/html-routes");
const apiRoutes = require("./routes/api-routes");
htmlRoutes(app); 
apiRoutes(app); 
app.use(express.static("public"));

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> :earth_americas:  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

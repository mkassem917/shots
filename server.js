// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
// Set Handlebars.
const exphbs = require("express-handlebars");
// stuff for morgan
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");
// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
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
const routes = require("./routes/api-routes");
app.use(routes);
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

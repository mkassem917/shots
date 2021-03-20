const db = require("../models");

module.exports = (app) => {
  // Home page (Sign-up Form)
  app.get("/", (req, res) => {
    res.render("index", { title: "vaccine" });
  });

  app.post("/", (req, res) => {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      state: req.body.state,
      age: req.body.age,
      essential_worker: req.body.essential_worker,
    })
      .then((user) => {
        res.render("userdata", {title: "UserData", person: user });
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

};

// // Requiring path to so we can use relative routes to our HTML files
// const path = require("path");

// // Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");

// module.exports = function(app) {
//   app.get("/", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/signup.html"));
//   });

//   app.get("/login", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//       res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
//   });

//   // Here we've add our isAuthenticated middleware to this route.
//   // If a user who is not logged in tries to access this route they will be redirected to the signup page
//   app.get("/members", isAuthenticated, (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/members.html"));
//   });

//   app.get("/statedata", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/datadisplay.html"));
//   });
// };

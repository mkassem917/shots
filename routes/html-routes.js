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
        console.log(user.dataValues);
        res.render("userdata", { title: "UserData", person: user.dataValues, key: process.env.COVIDACTNOW_API });
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  app.get("/test", (req, res) => {
    res.render("userdata", {
      person: {
        email: "jacqueline@jr.com",
        first_name: "Jacqueline",
        last_name: "Ross",
        state: "MI",
        age: "30",
        essential_worker: true,
      },
      key: process.env.COVIDACTNOW_API
    });
  });
  // fetch("https://httpbin.org/post", {
  //   method: "post",
  //   body: JSON.stringify(body),
  //   headers: { "Content-Type": "application/json" },
  // })
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
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
